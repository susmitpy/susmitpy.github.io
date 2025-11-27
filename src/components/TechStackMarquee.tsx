"use client";

import { SkillsData } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";

export const TechStackMarquee = () => {
  // Combine all skills
  const allSkills = [
    ...SkillsData.skillGroups["Programming Languages"],
    ...SkillsData.skillGroups["Data"],
    ...SkillsData.skillGroups["Databases"],
    ...SkillsData.skillGroups["Development"],
    ...SkillsData.skillGroups["Cloud & DevOps"],
  ];

  return (
    <section className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-6"
      >
        <h2 className="text-2xl md:text-3xl font-mono font-bold text-white mb-2">
          Tech Stack
        </h2>
        <p className="text-sm text-white/40 font-mono">Technologies I work with</p>
      </motion.div>

      <div className="relative overflow-hidden rounded-xl bg-obsidian-800/30 border border-white/[0.05] py-6">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-obsidian-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-obsidian-900 to-transparent z-10 pointer-events-none" />

        {/* First row - scrolls left */}
        <motion.div 
          className="flex gap-4 mb-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 35
          }}
        >
          {[...allSkills, ...allSkills].map((skill: { name?: string; logoPath?: string }, idx) => (
            <div
              key={`row1-${idx}`}
              className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.03] rounded-lg border border-white/[0.05] flex-shrink-0 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-200"
            >
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
                <span className="text-sm font-mono text-white/60">
                  {skill.name}
                </span>
              )}
            </div>
          ))}
        </motion.div>

        {/* Second row - scrolls right */}
        <motion.div 
          className="flex gap-4"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30
          }}
        >
          {[...allSkills.reverse(), ...allSkills].map((skill: { name?: string; logoPath?: string }, idx) => (
            <div
              key={`row2-${idx}`}
              className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.03] rounded-lg border border-white/[0.05] flex-shrink-0 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-200"
            >
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
                <span className="text-sm font-mono text-white/60">
                  {skill.name}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
