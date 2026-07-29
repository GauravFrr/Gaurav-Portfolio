import Button from "../ui/Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[85vh] flex flex-col justify-center items-center text-center py-24 md:py-32 px-4 md:px-8 border-b border-secondary/15 max-w-4xl mx-auto"
    >
      {/* Intro greeting */}
      <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-foreground/70 mb-4 block font-sans">
        Welcome to my portfolio
      </span>

      {/* Name */}
      <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground tracking-tight mb-2">
        Gaurav
      </h1>

      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary tracking-tight mb-6">
        AI Engineer
      </h2>

      {/* One-Liner (Variant B) */}
      <p className="text-lg md:text-xl text-foreground/90 font-normal leading-relaxed max-w-2xl mb-4 font-sans">
        Self-taught AI Engineer. I turn real problems into working GenAI products — and I document the bugs I catch along the way.
      </p>

      {/* Sub-line */}
      <p className="text-sm md:text-base text-foreground/70 font-sans mb-10 max-w-xl">
        Currently building MemoryOS, Brefly, and Retryv. Open to remote GenAI/LLM roles.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        <Button
          variant="primary"
          href="/resume/resume.pdf"
          download
          className="w-full sm:w-auto min-w-[170px]"
        >
          Download Resume
        </Button>
        
        <Button
          variant="secondary"
          href="#projects"
          className="w-full sm:w-auto min-w-[170px]"
        >
          View Projects
        </Button>
      </div>
    </section>
  );
}
