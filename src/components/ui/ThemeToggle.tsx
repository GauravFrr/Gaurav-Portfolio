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
        // Moon Icon
        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 16.584a9.006 9.006 0 01-15.085-5.497 9.003 9.003 0 0110.158-10.049A9 9 0 1021.75 16.584z" />
        </svg>
      )}
    </button>
  );
}
