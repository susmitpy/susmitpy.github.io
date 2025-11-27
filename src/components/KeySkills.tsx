"use client";

import { prefix } from "@/lib/prefix";
import Image from "next/image";
import { motion } from "framer-motion";

// Key skills that are NOT mentioned in the hero section (Kafka, Flink, Neo4j are mentioned there)
const keySkills = [
  { name: "Python", logoPath: `${prefix}/skills/python.webp` },
  { name: "AWS", logoPath: `${prefix}/skills/aws.webp` },
  { name: "Docker", logoPath: `${prefix}/skills/docker.webp` },
  { name: "PostgreSQL", logoPath: `${prefix}/skills/postgresql.webp` },
  { name: "TypeScript", logoPath: `${prefix}/skills/ts.webp` },
  { name: "Next.js", logoPath: `${prefix}/skills/nextjs.webp` },
];

export const KeySkills = () => {
  return (
    <div className="h-full flex flex-col bg-obsidian-900 rounded-xl p-4">
      <h3 className="text-sm font-mono font-bold text-white/90 mb-4 tracking-wide">
        KEY SKILLS
      </h3>
      
      <div className="flex-1 flex flex-wrap gap-3 content-start">
        {keySkills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-center gap-2 px-3 py-2 bg-white/[0.03] rounded-lg border border-white/[0.05] hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-200"
          >
            <div className="relative w-5 h-5 flex-shrink-0">
              <Image
                src={skill.logoPath}
                alt={skill.name}
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xs font-mono text-white/60">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
