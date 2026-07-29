import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 px-4 md:px-8 border-b border-secondary/15 max-w-4xl mx-auto"
    >
      {/* Section Header */}
      <div className="mb-14 text-center sm:text-left">
        <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-foreground/70 font-sans">
          Work History
        </span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-1">
          Internships & Experience
        </h2>
      </div>

      {/* Timeline List */}
      <div className="relative border-l border-secondary/35 ml-2 sm:ml-4 pl-6 sm:pl-8 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative group">
            {/* Timeline Dot */}
            <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-background transition-transform duration-200 group-hover:scale-110" />

            {/* Content Card */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-3">
                <h3 className="font-heading font-bold text-lg text-foreground">
                  {exp.role}
                </h3>
                <span className="text-xs md:text-sm font-sans font-medium text-primary shrink-0">
                  {exp.period}
                </span>
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-semibold font-sans text-foreground/90">
                  {exp.company}
                </span>
                <span className="text-xs text-foreground/50 font-sans">•</span>
                <span className="text-xs text-foreground/60 font-sans">
                  {exp.location}
                </span>
              </div>

              {/* Highlights */}
              {exp.highlights && exp.highlights.length > 0 && (
                <ul className="list-disc list-outside text-sm text-foreground/80 pl-4 space-y-2 font-sans max-w-2xl leading-relaxed">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
