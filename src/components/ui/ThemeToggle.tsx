"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    // Read theme class from HTML document on mount
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    if (!theme) return;
    const nextTheme = theme === "dark" ? "light" : "dark";
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    setTheme(nextTheme);
  };

  // Prevent hydration mismatches by returning a skeleton wrapper on the server
  if (theme === null) {
    return (
      <div className="w-8 h-8 rounded-lg bg-secondary/10 border border-secondary/25" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="w-8 h-8 flex items-center justify-center rounded-lg bg-secondary/15 border border-secondary/25 text-foreground transition-all cursor-pointer hover:bg-secondary/35 hover:scale-[1.05] active:scale-[0.95] focus:outline-none focus:ring-2 focus:ring-primary/50"
    >
      {theme === "dark" ? (
        // Sun Icon
        <svg className="w-4.5 h-4.5 text-secondary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M4.929 4.929l1.591 1.591m10.96 10.96l1.591 1.591M3 12h2.25m13.5 0H21m-2.234-7.071l-1.591 1.591M6.52 17.48l-1.591 1.591M12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" />
        </svg>
      ) : (
        // Solid Moon Icon
        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
        </svg>
      )}
    </button>
  );
}
