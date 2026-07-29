"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = ["hero", "about", "projects", "skills", "experience", "contact"];
    
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Trigger when section occupies the mid-to-upper screen
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-secondary/20 transition-all duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo/Brand */}
        <Link
          href="#hero"
          className="font-heading text-xl font-bold tracking-tight hover:text-primary transition-colors"
        >
          Gaurav
        </Link>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center gap-8 font-sans">
          {["about", "projects", "skills", "experience", "contact"].map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              className={`text-sm font-medium transition-colors duration-250 capitalize ${
                activeSection === section
                  ? "text-primary border-b border-primary/50 pb-0.5"
                  : "text-foreground/80 hover:text-primary"
              }`}
            >
              {section}
            </Link>
          ))}
          
          <ThemeToggle />
          
          {/* Resume CTA */}
          <Link
            href="/resume/resume.pdf"
            download
            className="px-4 py-2 text-xs font-semibold text-background bg-primary rounded-lg hover:bg-primary/90 transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            Resume
          </Link>
        </nav>

        {/* Mobile Resume Link & Theme Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <Link
            href="/resume/resume.pdf"
            download
            className="px-3 py-1.5 text-xs font-semibold text-background bg-primary rounded-lg hover:bg-primary/90 transition-all shadow-sm cursor-pointer"
          >
            Resume
          </Link>
        </div>
      </div>
    </header>
  );
}
