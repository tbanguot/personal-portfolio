import { useState } from 'react';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Work from './Work';
import Contact from './Contact';
import projects from '../data/projects';

function TechnologyIcon({ name }) {
  if (name === 'React') {
    return (
      <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" transform="rotate(120 12 12)" />
      </svg>
    );
  }

  if (name === 'JavaScript') {
    return (
      <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" />
        <text x="12" y="16" textAnchor="middle" fill="#f6f5ed" fontSize="9" fontWeight="700">JS</text>
      </svg>
    );
  }

  if (name === 'Tailwind CSS') {
    return (
      <svg viewBox="0 0 24 24" className="size-4 fill-none stroke-current" aria-hidden="true">
        <path d="M3 10c2.4-3.2 4.8-3.2 7.2 0 2.4 3.2 4.8 3.2 7.2 0 1.2-1.6 2.4-2.4 3.6-2.4M3 16.4c2.4-3.2 4.8-3.2 7.2 0 2.4 3.2 4.8 3.2 7.2 0 1.2-1.6 2.4-2.4 3.6-2.4" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
      <path d="M13.2 1.8 3.5 13h6.2l-.8 9.2L20.5 10h-6.4l-.9-8.2Z" fill="currentColor" />
    </svg>
  );
}

function ProjectPreview({ type, name, websiteUrl }) {
  return (
    <div
      role={websiteUrl ? 'group' : 'img'}
      aria-label={`${websiteUrl ? 'Homepage' : 'Illustrative'} preview for ${name}`}
      className={`relative mb-5 aspect-video overflow-hidden rounded-lg border border-[#d7ddd1] ${
        websiteUrl ? '' : 'p-4'
      } ${
        type === 'space' ? 'bg-[#1d2e40]' : 'bg-[#f6f5ed]'
      }`}
    >
      {websiteUrl ? (
        <iframe
          title={`${name} homepage preview`}
          src={websiteUrl}
          loading="lazy"
          className="h-full w-full border-0"
        />
      ) : (
        <>
      <span className={`absolute right-2 top-2 rounded-full px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-wider ${
        type === 'space' ? 'bg-white/10 text-[#e5d5a8]' : 'bg-[#e4ece2] text-[#526458]'
      }`}>
        Illustrative preview
      </span>
      {type === 'portfolio' && (
        <div className="flex h-full flex-col justify-between pr-20 sm:pr-28">
          <div className="flex items-center justify-between">
            <span className="text-[0.65rem] font-bold tracking-wide text-[#28543d]">TB.</span>
            <div className="flex gap-2">
              <span className="h-1 w-7 rounded bg-[#cbdcc9]" />
              <span className="h-1 w-7 rounded bg-[#cbdcc9]" />
            </div>
          </div>
          <div>
            <span className="text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-[#568065]">Hello, I’m</span>
            <div className="mt-1 h-2 w-28 rounded bg-[#28543d] sm:w-36" />
            <div className="mt-2 h-1 w-40 rounded bg-[#bcc9b9] sm:w-52" />
            <div className="mt-1 h-1 w-32 rounded bg-[#d1d8cd] sm:w-44" />
            <div className="mt-3 h-4 w-16 rounded bg-[#edaa4b]" />
          </div>
        </div>
      )}
      {type === 'apps' && (
        <div className="flex h-full gap-3 pt-5">
          <div className="w-1/5 rounded bg-[#28543d] p-2">
            <div className="mb-3 size-3 rounded bg-[#edaa4b]" />
            <div className="space-y-2">
              <div className="h-1 rounded bg-white/60" />
              <div className="h-1 rounded bg-white/30" />
              <div className="h-1 rounded bg-white/30" />
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-2 h-2 w-24 rounded bg-[#526458]" />
            <div className="grid grid-cols-3 gap-2">
              <div className="h-8 rounded border border-[#d7ddd1] bg-white" />
              <div className="h-8 rounded border border-[#d7ddd1] bg-white" />
              <div className="h-8 rounded border border-[#d7ddd1] bg-white" />
            </div>
            <div className="mt-2 h-10 rounded border border-[#d7ddd1] bg-white p-2">
              <div className="h-full w-2/3 rounded-sm bg-[#dfeadf]" />
            </div>
          </div>
        </div>
      )}
      {type === 'cars' && (
        <div className="flex h-full items-center gap-3 pt-4">
          <div className="flex h-3/4 flex-1 items-center justify-center rounded-lg bg-[#dfeadf]">
            <svg aria-hidden="true" viewBox="0 0 160 70" className="w-4/5 text-[#28543d]">
              <path d="m24 44 8-17c2-5 6-8 12-8h49c6 0 10 3 14 8l12 17h8c5 0 8 3 8 8v5h-9a12 12 0 0 1-24 0H57a12 12 0 0 1-24 0h-9v-7c0-3 0-6 0-6Zm18-17-7 15h38V25H44Zm37-2v17h36L107 29c-2-3-5-4-9-4H81Z" fill="currentColor" />
              <circle cx="45" cy="57" r="7" fill="#ebece2" stroke="currentColor" strokeWidth="4" />
              <circle cx="114" cy="57" r="7" fill="#ebece2" stroke="currentColor" strokeWidth="4" />
            </svg>
          </div>
          <div className="w-1/3 space-y-2">
            <div className="h-2 w-4/5 rounded bg-[#526458]" />
            <div className="h-1 w-full rounded bg-[#cbd4c7]" />
            <div className="h-1 w-3/4 rounded bg-[#cbd4c7]" />
            <div className="mt-3 h-2 w-1/2 rounded bg-[#2f7048]" />
          </div>
        </div>
      )}
      {type === 'space' && (
        <div className="relative flex h-full items-center justify-center pt-4">
          <div className="absolute h-28 w-28 rounded-full border border-[#b4c2cc]/40" />
          <div className="absolute h-16 w-16 rounded-full border border-[#b4c2cc]/50" />
          <div className="size-6 rounded-full bg-[#edaa4b] shadow-[0_0_18px_#edaa4b]" />
          <div className="absolute left-[23%] top-[47%] size-2 rounded-full bg-[#92b3ce]" />
          <div className="absolute right-[25%] top-[34%] size-3 rounded-full bg-[#d88c70]" />
          <div className="absolute bottom-[22%] right-[36%] size-1.5 rounded-full bg-[#e5d5a8]" />
          <span className="absolute left-2 top-6 size-1 rounded-full bg-white/80" />
          <span className="absolute right-10 top-8 size-1 rounded-full bg-white/60" />
          <span className="absolute bottom-4 left-12 size-1 rounded-full bg-white/60" />
        </div>
      )}
        </>
      )}
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="min-w-0 rounded-xl border border-[#dcddd2] bg-[#ebece2] p-4 transition duration-200 hover:border-[#95b99d] hover:bg-[#f8f8f0] hover:shadow-lg hover:shadow-[#37433e]/8 sm:rounded-2xl sm:p-6 sm:hover:-translate-y-1">
      <ProjectPreview type={project.preview} name={project.name} websiteUrl={project.websiteUrl} />
      <h3 className="mb-3 text-xl font-bold text-[#26372d]">{project.name}</h3>
      <p className="text-[1.0625rem] leading-7 text-[#46564b]">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-3 border-t border-[#d9ddd2] pt-4">
        {project.websiteUrl ? (
          <a
            href={project.websiteUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-[#d0d8cb] px-3 py-2 text-sm font-medium text-[#405248] transition-colors hover:border-[#95b99d] hover:bg-[#f6f5ed] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#358052]"
          >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-none stroke-current stroke-2">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" strokeLinecap="round" />
          </svg>
            Visit website
          </a>
        ) : (
          <span className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-[#d0d8cb] px-3 py-2 text-sm font-medium text-[#68776b]">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-none stroke-current stroke-2">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" strokeLinecap="round" />
            </svg>
            Website coming soon
          </span>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.name} on GitHub (opens in a new tab)`}
            className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-[#d0d8cb] px-3 py-2 text-sm font-medium text-[#405248] transition-colors hover:border-[#95b99d] hover:bg-[#f6f5ed] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#358052]"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-current">
              <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.69 2.6 1.2 3.23.92.1-.72.39-1.2.7-1.48-2.48-.28-5.09-1.24-5.09-5.51 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.28-2.61 5.22-5.1 5.5.4.35.75 1.03.75 2.08v3.04c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
            </svg>
            GitHub
          </a>
        )}
      </div>
      <ul aria-label="Languages and technologies used" className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <li key={technology} className="inline-flex items-center gap-2 rounded-lg border border-[#d0d8cb] bg-[#f6f5ed] px-3 py-2 text-sm font-medium text-[#405248]">
            <TechnologyIcon name={technology} />
            {technology}
          </li>
        ))}
      </ul>
    </article>
  );
}

function HomePage() {
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  return (
    <div id="home" className="min-w-0 space-y-5 sm:space-y-8">
      <section className="mt-4 rounded-2xl border border-[#214b36] bg-[#28543d] px-4 py-10 shadow-xl shadow-[#1d3829]/20 sm:mt-6 sm:rounded-3xl sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <div className="relative max-w-3xl border-l-2 border-[#edaa4b] pl-5 sm:pl-7">
          <span className="mb-5 inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#f2cb82] sm:text-xs sm:tracking-[0.2em]">
            <span className="size-2 rounded-full bg-[#edaa4b]" />
            Hi, my name is
          </span>
          <h1 className="wrap-break text-[clamp(2rem,8vw,4.5rem)] font-bold tracking-tight text-[#fffaf0]">Tongol Banguot<span className="text-[#edaa4b]">.</span></h1>
          <h2 className="mt-4 text-2xl font-medium tracking-tight text-[#e4ece3] sm:text-3xl lg:text-4xl">Curiosity led me to code.</h2>
          <p className="mt-6 max-w-2xl text-[1.0625rem] leading-8 text-[#e0e9e1] sm:text-lg">
            I discovered web development while exploring HTML and CSS, and found a calling
            in turning ideas into thoughtful, user-centered experiences. I’m always learning
            and building, with a little monster-truck playtime with my son in between.
          </p>
          <a href="#projects" className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#f0b34e] px-5 py-3 text-sm font-semibold text-[#263b2e] transition hover:bg-[#f5c66f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5c66f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#28543d] sm:mt-8">
            Explore my work <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <AboutMe />
      <Skills />
      <Work />

      <section id="projects" className="scroll-mt-32 rounded-2xl border border-[#d6d9ca] bg-[#f6f5ed] p-4 shadow-md shadow-[#37433e]/6 sm:scroll-mt-24 sm:rounded-3xl sm:p-8 lg:p-10">
        <div className="mb-7">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#2f7048]">Selected work</p>
          <h2 className="text-3xl font-bold tracking-tight text-[#26372d] sm:text-4xl">Projects</h2>
        </div>
        <div className="grid min-w-0 gap-4 sm:gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
          <div
            id="additional-projects"
            className={showMoreProjects ? 'contents' : 'hidden'}
          >
              <article className="rounded-xl border border-dashed border-[#b9c8b8] bg-[#f0f2e9] p-6 sm:rounded-2xl">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#2f7048]">Coming soon</p>
                <h3 className="mb-2 text-xl font-bold text-[#26372d]">Upcoming project</h3>
                <p className="text-base leading-7 text-[#526458]">A new project preview will be added here soon.</p>
              </article>
              <article className="rounded-xl border border-dashed border-[#b9c8b8] bg-[#f0f2e9] p-6 sm:rounded-2xl">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#2f7048]">Coming soon</p>
                <h3 className="mb-2 text-xl font-bold text-[#26372d]">More work in progress</h3>
                <p className="text-base leading-7 text-[#526458]">Check back for more projects and details.</p>
              </article>
          </div>
        </div>
        <button
          type="button"
          aria-expanded={showMoreProjects}
          aria-controls="additional-projects"
          onClick={() => setShowMoreProjects((visible) => !visible)}
          className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#2f7048] px-5 py-2.5 text-sm font-semibold text-[#2f7048] transition-colors hover:bg-[#e4ece2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#358052] focus-visible:ring-offset-2"
        >
          {showMoreProjects ? 'Show fewer projects' : 'More projects'}
          <span aria-hidden="true" className={`transition-transform ${showMoreProjects ? 'rotate-180' : ''}`}>⌄</span>
        </button>
      </section>

      <Contact />
    </div>
  );
}

export default HomePage;