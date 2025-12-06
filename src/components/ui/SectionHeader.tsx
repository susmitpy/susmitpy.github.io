"use client";

import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  eyebrow: string;
  className?: string;
}

export const SectionHeader = ({ title, eyebrow, className }: SectionHeaderProps) => {
  return (
    <Reveal width="full" className={cn("mb-10", className)}>
      <div className="flex flex-col gap-2">
        {/* Eyebrow with decorator line */}
        <div className="flex items-center gap-3">
          <span className="w-8 h-px bg-accent-solid/50" />
          <span className="text-xs font-mono uppercase tracking-widest text-accent-solid/70">
            {eyebrow}
          </span>
        </div>
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#e5e5e5] tracking-tight">
          {title}
        </h2>
      </div>
    </Reveal>
  );
};
