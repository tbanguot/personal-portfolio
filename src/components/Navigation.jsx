import { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo.png';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const menuButtonRef = useRef(null);
  const linkClasses = 'flex min-h-11 items-center rounded-lg px-3 py-2 text-md font-medium text-[#435349] transition-colors hover:bg-[#e4ece2] hover:text-[#245b3a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#358052] md:inline-flex';

  useEffect(() => {
    let previousScrollY = window.scrollY;

    function handleScroll() {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > previousScrollY;

      setIsHidden(currentScrollY > 120 && scrollingDown);
      if (scrollingDown) setIsMenuOpen(false);

      previousScrollY = currentScrollY;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleKeyDown(event) {
    if (event.key === 'Escape' && isMenuOpen) {
      setIsMenuOpen(false);
      menuButtonRef.current?.focus();
    }
  }

  return (
    <nav
      aria-label="Primary navigation"
      onKeyDown={handleKeyDown}
      onFocusCapture={() => setIsHidden(false)}
      className={`sticky top-0 z-50 border-b border-[#d4ddcf] bg-[#f7f7ef]/95 backdrop-blur-xl transition-transform duration-300 motion-reduce:transition-none ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <a href="#home" aria-label="Go to home section" className="inline-flex min-w-0 shrink-0 items-center">
          <img src={logo} alt="Tongol" width="521" height="479" className="h-14 w-auto max-w-full object-contain sm:h-16 lg:h-20" />
        </a>

        <div className="relative">
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-lg border border-[#d4ddcf] text-[#285b3f] transition-colors hover:bg-[#e4ece2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#358052] md:hidden"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? (
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6 fill-none stroke-current stroke-2">
                <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6 fill-none stroke-current stroke-2">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>

          <ul
            id="primary-navigation"
            className={`${isMenuOpen ? 'flex' : 'hidden'} absolute right-0 top-full z-50 mt-2 w-64 max-w-[calc(100vw-2rem)] flex-col gap-1 rounded-xl border border-[#d4ddcf] bg-[#f7f7ef] p-2 shadow-xl shadow-[#25352c]/15 md:static md:mt-0 md:flex md:w-auto md:max-w-none md:flex-row md:items-center md:justify-end md:gap-2 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
          >
            <li><a href="#home" onClick={() => setIsMenuOpen(false)} className={linkClasses}>Home</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)} className={linkClasses}>About</a></li>
            <li><a href="#work" onClick={() => setIsMenuOpen(false)} className={linkClasses}>Work</a></li>
            <li><a href="#projects" onClick={() => setIsMenuOpen(false)} className={linkClasses}>Projects</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)} className="flex min-h-11 items-center rounded-lg bg-[#286342] px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1e5034] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#358052] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f7ef] md:inline-flex md:px-4">Contact</a></li>
            <li>
              <a
                href="https://drive.google.com/file/d/1CutXGix0DI9hU3Mqn9iZjLH41WbJEqVs/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="flex min-h-11 items-center gap-2 rounded-lg border border-[#c8772c] px-3 py-2 text-sm font-semibold text-[#884916] transition-colors hover:bg-[#fae8d1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8772c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f7ef] md:inline-flex md:px-4"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-none stroke-current stroke-2">
                  <path d="M6 3h8l5 5v13H6z" strokeLinejoin="round" />
                  <path d="M14 3v6h5M9 14h6M9 18h6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;