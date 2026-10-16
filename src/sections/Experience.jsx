import experience from '../data/experience';
import SectionHeading from '../components/ui/SectionHeading';
import ExperienceItem from '../components/experience/ExperienceItem';
import Icon from '../components/ui/Icon';

const technicalExperience = experience.filter((item) => item.category === 'technical');
const otherExperience = experience.filter((item) => item.category === 'other');

function Experience() {
  return (
    <section id="experience" className="section-padding border-b border-[var(--border-color)]">
      <div className="page-container">
        <SectionHeading
          id="experience-heading"
          eyebrow="03 / History"
          title="Work Experience"
          description="My background working as a software developer and collaborating with teams to deliver web applications."
        />

        <div className="space-y-6">
          {technicalExperience.map((item) => (
            <ExperienceItem key={item.id} experience={item} />
          ))}
        </div>

        {otherExperience.length > 0 && (
          <details className="clean-card group mt-8 p-5 sm:p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider text-[var(--text-secondary)] transition-colors hover:text-blue-600 dark:hover:text-blue-400 [&::-webkit-details-marker]:hidden">
              <span>View additional field & university roles</span>
              <Icon
                name="chevron-down"
                className="size-4 text-[var(--text-muted)] transition-all duration-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-open:rotate-180"
              />
            </summary>
            <div className="mt-6 border-t border-[var(--border-color)] pt-6 space-y-6">
              {otherExperience.map((item) => (
                <ExperienceItem key={item.id} experience={item} />
              ))}
            </div>
          </details>
        )}
      </div>
    </section>
  );
}

export default Experience;
