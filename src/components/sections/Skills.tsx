import Badge from "../ui/Badge";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 md:py-32 px-4 md:px-8 border-b border-secondary/15 max-w-4xl mx-auto"
    >
      {/* Section Header */}
      <div className="mb-14 text-center">
        <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-foreground/70 font-sans">
          Technical Expertise
        </span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-1">
          Skills & Focus Areas
        </h2>
        <p className="text-sm text-foreground/75 mt-2 max-w-md mx-auto font-sans">
          Categorized skillset highlighting specialized GenAI expertise and supporting web engineering.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="flex flex-col bg-white/20 dark:bg-black/30 border border-secondary/20 dark:border-secondary/15 rounded-xl p-6 hover:border-primary/30 dark:hover:border-primary/50 transition-all duration-300 shadow-[0_2px_6px_rgba(43,36,32,0.01)]"
          >
            {/* Group Category Name */}
            <h3 className="font-heading font-bold text-lg text-foreground mb-4 border-b border-secondary/15 pb-2">
              {group.category}
            </h3>
            
            {/* Skills Badges */}
            <div className="flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
