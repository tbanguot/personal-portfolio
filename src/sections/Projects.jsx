import projects from '../data/projects';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectCard from '../components/projects/ProjectCard';

function Projects() {
  return (
    <section id="projects" className="section-padding border-b border-[var(--border-color)]">
      <div className="page-container">
        <SectionHeading
          id="projects-heading"
          eyebrow="01 / Work"
          title="Featured Projects"
          description="A selection of web applications and platforms I’ve built or contributed to. Focused on clean user interfaces and solid backend logic."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
