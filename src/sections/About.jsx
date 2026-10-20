import profileImage from '../assets/profile.jpeg';
import SectionHeading from '../components/ui/SectionHeading';
import profile from '../data/profile';
import Icon from '../components/ui/Icon';
import ButtonLink from '../components/ui/ButtonLink';

function About() {
  return (
    <section id="about" className="section-padding border-b border-[var(--border-color)]">
      <div className="page-container">
        <SectionHeading
          id="about-heading"
          eyebrow="04 / Background"
          title="About Me"
          description="A quick look into how I got into software engineering and what drives my work today."
        />

        <div className="grid gap-10 md:grid-cols-[260px_1fr] md:gap-14 items-start">
          {/* Portrait figure */}
          <figure className="max-w-[260px]">
            <div className="aspect-[4/5] overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-xs">
              <img
                src={profileImage}
                alt="Portrait of Tongol Banguot"
                width="1237"
                height="1599"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <figcaption className="mt-3 text-xs sm:text-sm font-mono text-[var(--text-muted)]">
              {profile.name} — Software Developer
            </figcaption>

            <div className="mt-5 flex flex-col gap-2">
              <ButtonLink
                href={profile.linkedinUrl}
                variant="secondary"
                external
                aria-label="Connect on LinkedIn (opens in a new tab)"
                className="w-full text-sm"
              >
                <Icon name="linkedin" className="size-3.5" />
                <span>Connect on LinkedIn</span>
              </ButtonLink>
              <ButtonLink
                href={profile.githubUrl}
                variant="secondary"
                external
                aria-label="View GitHub repositories (opens in a new tab)"
                className="w-full text-sm"
              >
                <Icon name="github" className="size-3.5" />
                <span>Follow on GitHub</span>
              </ButtonLink>
            </div>
          </figure>

          {/* Narrative in short human sentences */}
          <div className="space-y-4 text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
            <p>
              I’m a software developer focused on web applications. I build software across the full stack. I design databases, write backend APIs, and create clean React frontends.
            </p>
            <p>
              I’ve completed the coursework for my Bachelor of Science in Computer Science at Saint Mary’s University, with graduation scheduled for November 2026.
            </p>
            <p>
              My path began in 2020 on an older laptop. Playing with Excel formulas led me to HTML, CSS, and JavaScript. I loved seeing my ideas come to life in the browser.
            </p>
            <p>
              At Wanii, I helped deliver three production web platforms serving over 5,000 active monthly users. My work included database schema design and responsive interfaces with React and Tailwind CSS. I value clear communication, good tests, and straightforward code that is easy to maintain.
            </p>
            <p>
              Outside of coding, I spend time with my son and enjoy the outdoors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
