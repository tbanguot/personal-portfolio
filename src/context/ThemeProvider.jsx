import { useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = window.localStorage.getItem('portfolio-theme');
      return ['dark', 'light', 'system'].includes(saved) ? saved : 'dark';
    } catch {
      return 'dark';
    }
  });

  const [isDark, setIsDark] = useState(() =>
    theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    function applyTheme() {
      const systemDark = mediaQuery.matches;
      const shouldBeDark = theme === 'dark' || (theme === 'system' && systemDark);

      setIsDark(shouldBeDark);
      if (shouldBeDark) {
        root.classList.add('dark');
        root.setAttribute('data-theme', 'dark');
      } else {
        root.classList.remove('dark');
        root.setAttribute('data-theme', 'light');
      }
    }

    applyTheme();

    function handleMediaChange() {
      if (theme === 'system') {
        applyTheme();
      }
    }

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, [theme]);

  function handleSetTheme(newTheme) {
    if (!['dark', 'light', 'system'].includes(newTheme)) return;
    setTheme(newTheme);
    try {
      window.localStorage.setItem('portfolio-theme', newTheme);
    } catch {
      // Theme changes still work when browser storage is unavailable.
    }
  }

  function toggleTheme() {
    handleSetTheme(isDark ? 'light' : 'dark');
  }

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme, setTheme: handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
