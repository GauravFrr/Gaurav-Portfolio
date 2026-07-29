"use client";

import React, { useState } from "react";
import Badge from "./Badge";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="flex flex-col bg-white/40 dark:bg-black/30 border border-secondary/35 dark:border-secondary/20 rounded-xl p-6 md:p-8 hover:border-primary/50 hover:bg-white/70 dark:hover:bg-black/55 transition-all duration-350 ease-out shadow-[0_2px_8px_rgba(43,36,32,0.02)] hover:shadow-[0_12px_24px_rgba(43,36,32,0.05)] hover:-translate-y-0.5 h-full">
      {/* Title & Link */}
      <div className="flex items-start justify-between gap-4 mb-2">
        <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground">
          {project.name}
        </h3>

        {/* Link Icons */}
        <div className="flex items-center gap-3 text-foreground/75 shrink-0 mt-1">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            title="View Source on GitHub"
            className="hover:text-primary transition-colors duration-200"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
            </svg>
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              title="View Live Demo"
              className="hover:text-primary transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Tagline */}
      <p className="text-sm text-foreground/80 italic mb-5 leading-normal">
        {project.tagline}
      </p>

      {/* Stack Badges */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.stack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      {/* Engineering Highlight Segment */}
      <div className="mt-auto pt-5 border-t border-secondary/20">
        <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/70 font-sans">
          Engineering Highlight
        </span>
        <p className="text-sm font-medium mt-1 text-foreground leading-relaxed">
          {project.highlight}
        </p>
      </div>

      {/* Toggle Button */}
      {project.caseStudy && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-5 flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-secondary/15 hover:bg-secondary/35 text-foreground text-xs font-bold rounded-lg transition-all cursor-pointer font-sans"
        >
          {isExpanded ? "Collapse Case Study" : "Read Full Case Study"}
          <svg
            className={cn("w-4 h-4 text-primary transition-transform duration-300", isExpanded ? "rotate-180" : "")}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      )}

      {/* Expandable Case Study Area */}
      {project.caseStudy && (
        <div
          className={cn(
            "transition-all duration-500 ease-in-out overflow-hidden",
            isExpanded ? "max-h-[1500px] opacity-100 mt-6 pt-6 border-t border-secondary/20" : "max-h-0 opacity-0"
          )}
        >
          <div className="space-y-5 text-sm font-sans text-foreground/90">
            {/* Context */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Context</h4>
              <p className="leading-relaxed">{project.caseStudy.context}</p>
            </div>

            {/* Problem */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-1">The Problem</h4>
              <p className="leading-relaxed">{project.caseStudy.problem}</p>
            </div>

            {/* Technical Approach */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Technical Approach</h4>
              <p className="leading-relaxed">{project.caseStudy.approach}</p>
            </div>

            {/* Key Decisions */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2.5">Key Engineering Decisions</h4>
              <div className="space-y-3">
                {project.caseStudy.decisions.map((dec, i) => (
                  <div key={i} className="border-l-2 border-primary/50 pl-3 py-0.5">
                    <span className="font-semibold text-foreground block text-xs md:text-sm">{dec.title}</span>
                    <p className="text-xs md:text-sm text-foreground/80 mt-0.5 leading-relaxed">{dec.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bugs Caught & Fixed */}
            {project.caseStudy.whatWentWrong && project.caseStudy.whatWentWrong.length > 0 && (
              <div className="bg-[#FAF6F1]/65 dark:bg-[#1C1614]/75 border border-primary/20 dark:border-primary/30 p-4 rounded-lg text-xs">
                <div className="flex items-center gap-2 mb-2 text-primary font-bold uppercase tracking-wider">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  Bugs Caught & Fixed
                </div>
                <ul className="list-disc pl-4 space-y-1.5 text-foreground/80 font-sans leading-relaxed">
                  {project.caseStudy.whatWentWrong.map((bug, i) => (
                    <li key={i}>{bug}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Why This Matters */}
            <div className="bg-secondary/10 border-l-2 border-secondary p-3.5 rounded-r-lg text-xs leading-relaxed">
              <span className="font-bold text-foreground block mb-0.5">Why This Matters to an Employer</span>
              {project.caseStudy.whyItMatters}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
