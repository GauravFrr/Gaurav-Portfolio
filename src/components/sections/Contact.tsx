"use client";

import { useForm, ValidationError } from "@formspree/react";
import Button from "../ui/Button";

export default function Contact() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_KEY || "mykrojyv");

  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-4 md:px-8 max-w-4xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        {/* Left Side: Copy and Links */}
        <div className="md:col-span-5 flex flex-col justify-center">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-foreground/70 font-sans mb-1">
            Get in touch
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Currently open to work
          </h2>
          <p className="text-sm md:text-base text-foreground/80 leading-relaxed font-sans mb-8">
            Looking for remote GenAI/LLM engineering roles, and open to freelance/contract work in the meantime. Fastest way to reach me is email or LinkedIn.
          </p>

          {/* Social Links List */}
          <div className="flex flex-col gap-4 font-sans text-sm font-semibold">
            {/* Email link */}
            <a
              href="mailto:contact@gauravxd.dev"
              className="flex items-center gap-3 hover:text-primary transition-colors duration-250 w-fit"
            >
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              contact@gauravxd.dev
            </a>

            {/* LinkedIn link */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-primary transition-colors duration-250 w-fit"
            >
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn Profile
            </a>

            {/* GitHub link */}
            <a
              href="https://github.com/GauravFrr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-primary transition-colors duration-250 w-fit"
            >
              <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
              </svg>
              GitHub (GauravFrr)
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="md:col-span-7 bg-white/30 dark:bg-black/20 border border-secondary/25 dark:border-secondary/15 p-6 md:p-8 rounded-xl shadow-[0_4px_12px_rgba(43,36,32,0.01)] hover:border-secondary/40 dark:hover:border-secondary/30 transition-all duration-300">
          {state.succeeded ? (
            <div className="text-center flex flex-col justify-center items-center py-16">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">Message Sent!</h3>
              <p className="text-sm text-foreground/80 max-w-sm">
                Thanks for reaching out! I&apos;ve received your message and will get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5 font-sans"
            >
              {/* Name field */}
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-secondary/35 dark:border-secondary/20 bg-[#FAF6F1]/50 dark:bg-[#1C1614]/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                  placeholder="Your Name"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-red-500 mt-1 block" />
              </div>

              {/* Email field */}
              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-secondary/35 dark:border-secondary/20 bg-[#FAF6F1]/50 dark:bg-[#1C1614]/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                  placeholder="you@example.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-500 mt-1 block" />
              </div>

              {/* Message field */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-secondary/35 dark:border-secondary/20 bg-[#FAF6F1]/50 dark:bg-[#1C1614]/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none"
                  placeholder="Hi Gaurav, I would like to discuss..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-500 mt-1 block" />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button variant="primary" type="submit" disabled={state.submitting} className="w-full">
                  {state.submitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
