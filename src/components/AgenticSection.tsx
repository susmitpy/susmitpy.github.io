"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { AgenticData } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export const AgenticSection = () => {
  return (
    <div className="py-16">
      <SectionHeader eyebrow={AgenticData.eyebrow} title={AgenticData.title} />

      <Reveal width="full">
        <p className="text-white/60 text-sm leading-relaxed max-w-3xl mb-8">{AgenticData.thesis}</p>
      </Reveal>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {AgenticData.stats.map((stat, idx) => (
          <Reveal key={stat.label} width="full" delay={idx * 0.05}>
            <div className="h-full p-4 bg-obsidian-900 rounded-xl border border-white/[0.05]">
              <div className="text-[10px] font-mono uppercase tracking-wider text-indigo-400/80 mb-1">
                {stat.label}
              </div>
              <div className="text-sm font-mono text-white/80 leading-snug">{stat.value}</div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {AgenticData.tools.map((tool, idx) => (
          <motion.div
            key={tool.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (idx % 3) * 0.08, ease: "easeOut" }}
            className="flex flex-col p-6 bg-obsidian-900 rounded-2xl border border-white/[0.05] hover:border-indigo-500/20 transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 text-xs font-mono text-white/40 rounded-full border border-white/10">
                #{String(idx + 1).padStart(2, "0")}
              </span>
              {tool.badge && (
                <span className="px-3 py-1 text-xs font-mono font-medium bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20">
                  {tool.badge}
                </span>
              )}
            </div>
            <h3 className="text-lg font-bold text-white mb-3 font-mono tracking-tight">{tool.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed flex-1">{tool.description}</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {tool.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-mono bg-white/[0.03] text-white/70 rounded-lg border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
            {tool.link && (
              <Link
                href={tool.link}
                target="_blank"
                className="mt-5 inline-flex items-center gap-2 text-sm font-mono text-indigo-400/80 hover:text-indigo-400 transition-colors"
              >
                <Github className="w-4 h-4" />
                {tool.linkLabel ?? "View Source"}
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href={AgenticData.pageLink}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-mono font-medium text-white bg-white/5 rounded-lg border border-white/10 hover:border-indigo-500/30 hover:bg-indigo-500/10 transition-all duration-200 group/btn"
        >
          {AgenticData.pageLinkLabel}
          <ArrowRight className="w-3 h-3 opacity-50 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 transition-all" />
        </Link>
      </div>
    </div>
  );
};
