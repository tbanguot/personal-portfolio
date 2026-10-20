import profile from '../data/profile';
import ButtonLink from '../components/ui/ButtonLink';
import Icon from '../components/ui/Icon';

function Hero() {
  return (
    <section id="home" className="section-padding border-b border-[var(--border-color)]">
      <div className="page-container">
        <div className="max-w-3xl">
          {/* Status pill */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-surface)] px-3 py-1 text-xs sm:text-sm font-mono text-[var(--text-secondary)]">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available immediately for full-time roles</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
            Software Developer.
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-[var(--text-secondary)] sm:text-xl">
            Hi, I’m <strong className="font-semibold text-[var(--text-primary)]">{profile.name}</strong>.
            I build complete web applications, from relational databases to responsive user interfaces with React.
          </p>

          <p className="mt-3 text-base sm:text-lg leading-relaxed text-[var(--text-muted)]">
            I write clean, maintainable code in Python, C++, Java, and JavaScript. I helped develop and ship live platforms
            with the <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-600 dark:text-blue-400 underline underline-offset-4 decoration-blue-500/40 transition-all hover:decoration-blue-600 dark:hover:decoration-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                 Wanii
            </a> team.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href="#projects" variant="primary">
              <span>View projects</span>
              <Icon name="arrow-down" className="size-4" />
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              <span>Contact me</span>
              <Icon name="arrow-right" className="size-4" />
            </ButtonLink>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-[var(--border-color)] pt-6 text-sm font-mono text-[var(--text-secondary)]">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 transition-colors hover:text-blue-600 dark:hover:text-blue-400 hover:underline underline-offset-4"
            >
              <Icon name="github" className="size-4 transition-transform group-hover:scale-110" />
              <span>github.com/tbanguot</span>
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 transition-colors hover:text-blue-600 dark:hover:text-blue-400 hover:underline underline-offset-4"
            >
              <Icon name="linkedin" className="size-4 transition-transform group-hover:scale-110" />
              <span>linkedin/in/tbanguot</span>
            </a>
            <a
              href={profile.emailUrl}
              className="group inline-flex items-center gap-1.5 transition-colors hover:text-blue-600 dark:hover:text-blue-400 hover:underline underline-offset-4"
            >
              <Icon name="mail" className="size-4 transition-transform group-hover:scale-110" />
              <span>{profile.email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
