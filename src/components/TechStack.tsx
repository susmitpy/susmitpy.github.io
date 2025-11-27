"use client";

import { SkillsData } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";

export const TechStack = () => {
  // Group skills
  const dataSkills = [...SkillsData.skillGroups["Data"], ...SkillsData.skillGroups["Databases"], ...SkillsData.skillGroups["Cloud & DevOps"]];
  const devSkills = [...SkillsData.skillGroups["Programming Languages"], ...SkillsData.skillGroups["Development"]];

  return (
    <div className="h-full flex flex-col overflow-hidden relative">
      <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-200 mb-4 px-2 font-mono">
        Tech Stack
      </h3>
      
      <div className="flex-1 overflow-hidden relative mask-image-gradient flex flex-col gap-4">
         <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-black dark:to-black z-10 pointer-events-none opacity-20" />
         
         {/* Row 1: Data & Backend (Left) */}
         <motion.div 
            className="flex gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
                repeat: Infinity, 
                ease: "linear", 
                duration: 30 
            }}
         >
            {[...dataSkills, ...dataSkills].map((skill: any, idx) => (
                <div key={`data-${idx}`} className="flex items-center gap-2 px-3 py-1.5 bg-neutral-50 dark:bg-neutral-900/50 rounded-md border border-neutral-100 dark:border-neutral-800 flex-shrink-0">
                    {skill.logoPath && (
                        <div className="relative w-5 h-5 flex-shrink-0">
                            <Image 
                                src={skill.logoPath} 
                                alt={skill.name || "Skill"} 
                                fill 
                                className="object-contain"
                            />
                        </div>
                    )}
                    {skill.name && (
                        <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300 font-mono">
                            {skill.name}
                        </span>
                    )}
                </div>
            ))}
         </motion.div>

         {/* Row 2: Dev & Frontend (Right) */}
         <motion.div 
            className="flex gap-4"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ 
                repeat: Infinity, 
                ease: "linear", 
                duration: 25 
            }}
         >
            {[...devSkills, ...devSkills].map((skill: any, idx) => (
                <div key={`dev-${idx}`} className="flex items-center gap-2 px-3 py-1.5 bg-neutral-50 dark:bg-neutral-900/50 rounded-md border border-neutral-100 dark:border-neutral-800 flex-shrink-0">
                    {skill.logoPath && (
                        <div className="relative w-5 h-5 flex-shrink-0">
                            <Image 
                                src={skill.logoPath} 
                                alt={skill.name || "Skill"} 
                                fill 
                                className="object-contain"
                            />
                        </div>
                    )}
                    {skill.name && (
                        <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300 font-mono">
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
