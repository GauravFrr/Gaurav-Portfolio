export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights?: string[];
};

export const experiences: Experience[] = [
  {
    role: "Web Development Intern",
    company: "Oasis Infobyte (OIBSIP)",
    period: "July 2026 - Present",
    location: "Remote",
    highlights: [
      "Designing clean interface layouts and landing pages with custom styling",
      "Implementing accessibility controls and smooth animations"
    ],
  },
  {
    role: "Python Development Intern",
    company: "Cognifyz IT Solutions",
    period: "July - August 2026",
    location: "Remote",
    highlights: [
      "Developed automated Python web scrapers to gather directory listings",
      "Created reusable utility scripts for data cleaning and pre-processing"
    ],
  },
  {
    role: "Web Development Intern",
    company: "CodeAlpha",
    period: "June - July 2026",
    location: "Remote",
    highlights: [
      "Built responsive user landing pages using HTML, CSS, and JavaScript",
      "Created interactive widgets and web forms with validation checks"
    ],
  },
];
