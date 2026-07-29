import React from "react";

type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/15 text-foreground border border-secondary/25 font-sans">
      {children}
    </span>
  );
}
