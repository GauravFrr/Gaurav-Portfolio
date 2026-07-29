import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  variant: "primary" | "secondary";
  href?: string;
  download?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export default function Button({
  variant,
  href,
  download,
  onClick,
  children,
  className,
  type = "button",
  disabled,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold tracking-wide transition-all duration-250 font-sans cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2";
  const variantClasses = {
    primary:
      "bg-primary text-background hover:bg-[#c86646] hover:scale-[1.01] hover:shadow-md hover:shadow-primary/10 active:scale-[0.99] shadow-sm",
    secondary:
      "bg-transparent text-foreground border border-primary/60 hover:bg-secondary/15 hover:border-primary active:scale-[0.99]",
  };

  const combinedClasses = cn(
    baseClasses,
    variantClasses[variant],
    disabled && "opacity-60 cursor-not-allowed hover:scale-100 hover:shadow-none active:scale-100",
    className
  );

  if (href) {
    const isDownloadOrExternal =
      download ||
      href.endsWith(".pdf") ||
      href.startsWith("mailto:") ||
      href.startsWith("http") ||
      href.startsWith("#");

    if (isDownloadOrExternal) {
      return (
        <a
          href={href}
          download={download}
          onClick={onClick}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} onClick={onClick} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedClasses}
    >
      {children}
    </button>
  );
}
