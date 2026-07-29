import ProjectCard from "../ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 px-4 md:px-8 border-b border-secondary/15 max-w-5xl mx-auto"
    >
      {/* Section Header */}
      <div className="mb-12 text-center">
        <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-foreground/70 font-sans">
          Proven Capabilities
        </span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-1">
          Featured Projects
        </h2>
        <p className="text-sm text-foreground/75 mt-2 max-w-xl mx-auto font-sans">
          Mini case studies documenting key engineering decisions and silent bugs caught along the way.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-stretch">
        {projects.map((project) => (
          <div key={project.name} className="h-full">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
