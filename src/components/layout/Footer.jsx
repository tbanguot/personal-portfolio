import profile from '../../data/profile';
import Icon from '../ui/Icon';

function Footer() {
  function scrollToTop(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer className="border-t border-[var(--border-color)] py-10 text-xs sm:text-sm font-mono text-[var(--text-muted)]">
      <div className="page-container flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[var(--text-primary)] font-semibold">
            {profile.name}
          </p>
          <p className="mt-0.5">
            Software Developer · Built with React & Tailwind CSS
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-blue-600 dark:hover:text-blue-400 hover:underline underline-offset-4"
          >
            GitHub
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-blue-600 dark:hover:text-blue-400 hover:underline underline-offset-4"
          >
            LinkedIn
          </a>
          <a
            href="#home"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-1 font-medium text-blue-600 dark:text-blue-400 transition-colors hover:text-blue-700 dark:hover:text-blue-300 hover:underline underline-offset-4"
          >
            <span>Top</span>
            <Icon name="arrow-up" className="size-3 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
