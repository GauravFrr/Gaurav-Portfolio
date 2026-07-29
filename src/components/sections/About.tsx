export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-4 md:px-8 border-b border-secondary/15 max-w-4xl mx-auto"
    >
      {/* Section Header */}
      <div className="mb-10 text-center sm:text-left">
        <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-foreground/70 font-sans">
          My Journey
        </span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-1">
          About Me
        </h2>
      </div>

      {/* Narrative Variant B */}
      <div className="max-w-2xl text-base md:text-lg text-foreground/95 leading-relaxed space-y-6 font-sans">
        <p>
          I didn&apos;t start with a computer science degree — I started by building things and figuring out what broke. Three years later, that&apos;s still how I work: I ship a project, find the bug that a tutorial wouldn&apos;t have prepared me for, fix it, and write it down.
        </p>
        <p>
          That habit is behind everything I build, from a production-grade hybrid-retrieval RAG system to a cross-session memory layer for LLM applications. I focus on handling the silent edge cases that most tutorials gloss over.
        </p>
        <p>
          Currently, I&apos;m interning at Oasis Infobyte and Cognifyz IT Solutions, starting my BCA this October, and actively looking for a remote GenAI/LLM role where hands-on engineering capability and debugging discipline are actually valued.
        </p>
      </div>
    </section>
  );
}
