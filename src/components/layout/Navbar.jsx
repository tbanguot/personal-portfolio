import { useEffect, useRef, useState } from 'react';
import profile from '../../data/profile';
import navigation from '../../data/navigation';
import { useTheme } from '../../context/useTheme';
import Icon from '../ui/Icon';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    if (!isMenuOpen) return;

    const desktopScreen = window.matchMedia('(min-width: 40rem)');

    function handleOutsidePointerDown(event) {
      if (
        !desktopScreen.matches &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('pointerdown', handleOutsidePointerDown, true);

    return () => {
      document.removeEventListener('pointerdown', handleOutsidePointerDown, true);
    };
  }, [isMenuOpen]);

  return (
    <header ref={navbarRef} className="sticky top-0 z-40 border-b border-[var(--border-color)] bg-[var(--bg-page)]/85 backdrop-blur-md transition-colors">
      <div className="page-container flex h-16 items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          className="flex items-center gap-2.5 font-mono text-base font-semibold tracking-tight text-[var(--text-primary)] transition-colors hover:text-blue-600 dark:hover:text-blue-400"
        >
          <span>{profile.name}</span>
        </a>

        {/* Desktop Links */}
        <nav aria-label="Main" className="hidden items-center gap-1 sm:flex">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="rounded-md border border-transparent px-3 py-1.5 text-sm font-medium text-[var(--text-secondary)] transition-all hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {item.label}
            </a>
          ))}

          <div className="mx-2 h-4 w-px bg-[var(--border-color)]" aria-hidden="true" />

          {/* Theme Switcher */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex size-8 items-center justify-center rounded-md text-[var(--text-secondary)] transition-all hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Icon name={isDark ? 'sun' : 'moon'} className="size-4" />
          </button>

          {/* Contact CTA */}
          <a
            href="#contact"
            className="ml-2 inline-flex items-center gap-1.5 rounded-md bg-[var(--accent)] px-3 py-1.5 text-sm font-semibold text-white shadow-xs transition-all hover:bg-[var(--accent-hover)] hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Let’s talk</span>
          </a>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex size-8 items-center justify-center rounded-md text-[var(--text-secondary)] transition-colors hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Icon name={isDark ? 'sun' : 'moon'} className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="flex size-8 items-center justify-center rounded-md text-[var(--text-primary)] transition-colors hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Icon name={isMenuOpen ? 'x' : 'menu'} className="size-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="border-b border-[var(--border-color)] bg-[var(--bg-surface)] px-6 py-4 shadow-sm sm:hidden"
        >
          <div className="flex flex-col gap-2">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-[var(--text-secondary)] transition-colors hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block text-center rounded-md bg-[var(--accent)] py-2 text-base font-semibold text-white transition-all hover:bg-[var(--accent-hover)] active:scale-[0.98]"
              >
                Let’s talk
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
