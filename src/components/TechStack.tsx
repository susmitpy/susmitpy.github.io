"use client";

import { SkillsData } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";

export const TechStack = () => {
  // Group skills
  const dataSkills = [...SkillsData.skillGroups["Data"], ...SkillsData.skillGroups["Databases"], ...SkillsData.skillGroups["Cloud & DevOps"]];
  const devSkills = [...SkillsData.skillGroups["Programming Languages"], ...SkillsData.skillGroups["Development"]];

  return (
      <div className="h-full flex flex-col overflow-hidden relative bg-obsidian-900 rounded-xl">
          <h3 className="text-sm font-mono font-bold text-white/90 mb-4 px-2 tracking-wide">
              TECH STACK
      </h3>
      
          <div className="flex-1 overflow-hidden relative flex flex-col gap-3">
              {/* Gradient masks */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-obsidian-900 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-obsidian-900 to-transparent z-10 pointer-events-none" />

              {/* Row 1: Data & Backend (Left) */}
              <motion.div 
                  className="flex gap-3"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                      repeat: Infinity,
                      ease: "linear",
                      duration: 30
                  }}
              >
                  {[...dataSkills, ...dataSkills].map((skill: any, idx) => (
              <div
                  key={`data-${idx}`}
                  className="flex items-center gap-2 px-3 py-2 bg-white/[0.03] rounded-lg border border-white/[0.05] flex-shrink-0 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-200"
              >
                  {skill.logoPath && (
                      <div className="relative w-4 h-4 flex-shrink-0">
                          <Image
                              src={skill.logoPath}
                              alt={skill.name || "Skill"}
                              fill
                              className="object-contain"
                          />
                      </div>
                  )}
                  {skill.name && (
                      <span className="text-xs font-mono text-white/60">
                          {skill.name}
                      </span>
                  )}
              </div>
          ))}
              </motion.div>

              {/* Row 2: Dev & Frontend (Right) */}
              <motion.div 
                  className="flex gap-3"
                  animate={{ x: ["-50%", "0%"] }}
                  transition={{
                      repeat: Infinity,
                      ease: "linear",
                      duration: 25
                  }}
              >
                  {[...devSkills, ...devSkills].map((skill: any, idx) => (
              <div
                  key={`dev-${idx}`}
                  className="flex items-center gap-2 px-3 py-2 bg-white/[0.03] rounded-lg border border-white/[0.05] flex-shrink-0 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-200"
              >
                  {skill.logoPath && (
                      <div className="relative w-4 h-4 flex-shrink-0">
                          <Image
                              src={skill.logoPath}
                              alt={skill.name || "Skill"}
                              fill
                              className="object-contain"
                          />
                      </div>
                  )}
                  {skill.name && (
                      <span className="text-xs font-mono text-white/60">
                          {skill.name}
                      </span>
                  )}
              </div>
          ))}
              </motion.div>
      </div>
    </div>
  );
};
