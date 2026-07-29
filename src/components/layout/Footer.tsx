import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-secondary/20 bg-background/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-xs text-foreground/75">
          &copy; {new Date().getFullYear()} Gaurav. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <Link
            href="mailto:contact@gauravxd.dev"
            className="text-xs font-medium hover:text-primary transition-colors"
          >
            Email
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium hover:text-primary transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/gauravfrr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium hover:text-primary transition-colors"
          >
            GitHub
          </Link>
        </div>

        {/* Built Note */}
        <p className="text-[10px] text-foreground/50 tracking-wider uppercase">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
