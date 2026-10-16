import TechBadge from '../ui/TechBadge';
import Icon from '../ui/Icon';

function ProjectCard({ project }) {
  const linkUrl = project.websiteUrl || project.githubUrl;

  return (
    <article className="clean-card group flex flex-col overflow-hidden p-5 sm:p-6">
      {/* Screenshot / Preview */}
      <div className="relative mb-5 aspect-[16/10] w-full overflow-hidden rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface-elevated)]">
        {project.image ? (
          <img
            src={project.image}
            alt={project.imageAlt || `${project.name} preview`}
            loading="lazy"
            width="600"
            height="375"
            className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full flex-col justify-center p-6">
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)]">
              {project.category}
            </span>
            <p className="mt-2 text-xl font-bold text-[var(--text-primary)]">
              {project.name}
            </p>
            <p className="mt-1 font-mono text-xs text-[var(--text-muted)]">
              {project.domain}
            </p>
          </div>
        )}
      </div>

      {/* Meta header */}
      <div className="flex items-center justify-between text-xs sm:text-sm font-mono text-[var(--text-muted)]">
        <span className="text-[var(--accent)]">{project.category}</span>
        {project.role && <span>{project.role}</span>}
      </div>

      {/* Title */}
      <h3 className="mt-2 text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
        {linkUrl ? (
          <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-blue-600 dark:hover:text-blue-400 hover:underline underline-offset-4"
          >
            <span>{project.name}</span>
            <Icon name="arrow-up-right" className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        ) : (
          project.name
        )}
      </h3>

      {/* Description in short natural sentences */}
      <p className="mt-2 text-base leading-relaxed text-[var(--text-secondary)]">
        {project.description}
      </p>

      {/* Technologies */}
      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies used">
        {project.technologies.map((tech) => (
          <li key={tech}>
            <TechBadge>{tech}</TechBadge>
          </li>
        ))}
      </ul>

      {/* Action links */}
      <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center gap-4 text-sm font-medium">
        {project.websiteUrl && (
          <a
            href={project.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-1.5 font-semibold text-blue-600 dark:text-blue-400 transition-colors hover:text-blue-700 dark:hover:text-blue-300 hover:underline underline-offset-4"
          >
            <span>Live site</span>
            <Icon name="arrow-up-right" className="size-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-1.5 font-medium text-[var(--text-secondary)] transition-colors hover:text-blue-600 dark:hover:text-blue-400 hover:underline underline-offset-4"
          >
            <Icon name="github" className="size-3.5 transition-transform group-hover/link:scale-110" />
            <span>Source code</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
