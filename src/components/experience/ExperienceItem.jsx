import TechBadge from '../ui/TechBadge';

function ExperienceItem({ experience }) {
  return (
    <article className="clean-card mb-6 p-6 sm:p-7 last:mb-0">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
            {experience.role}
          </h3>
          <p className="mt-0.5 text-sm sm:text-base font-semibold text-[var(--accent)]">
            {experience.company}
            {experience.location && (
              <span className="font-normal text-[var(--text-muted)]"> · {experience.location}</span>
            )}
          </p>
        </div>
        <span className="mt-1 font-mono text-xs sm:text-sm text-[var(--text-muted)] sm:mt-0">
          {experience.dates}
        </span>
      </div>

      <ul className="mt-4 space-y-2 text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
        {experience.highlights.map((highlight) => (
          <li key={highlight} className="flex items-start gap-2.5">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden="true" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      {experience.technologies?.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies used">
          {experience.technologies.map((tech) => (
            <li key={tech}>
              <TechBadge>{tech}</TechBadge>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default ExperienceItem;
