import skills from '../data/skills';
import SectionHeading from '../components/ui/SectionHeading';
import TechBadge from '../components/ui/TechBadge';
import Icon from '../components/ui/Icon';

function Skills() {
  return (
    <section id="skills" className="section-padding border-b border-[var(--border-color)]">
      <div className="page-container">
        <SectionHeading
          id="skills-heading"
          eyebrow="02 / Capabilities"
          title="Skills & Technologies"
          description="Languages, frameworks, and deployment tools I work with daily across the full stack."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((group) => (
            <article
              key={group.id}
              className="clean-card flex flex-col p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-lg bg-[var(--badge-bg)] text-[var(--accent)]">
                  <Icon name={group.icon} className="size-4" />
                </span>
                <h3 className="text-lg font-bold text-[var(--text-primary)]">
                  {group.title}
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                {group.description}
              </p>

              <ul
                aria-label={`${group.title} technologies`}
                className="mt-5 flex flex-wrap gap-1.5"
              >
                {group.technologies.map((tech) => (
                  <li key={tech}>
                    <TechBadge>{tech}</TechBadge>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
