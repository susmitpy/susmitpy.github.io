"use client";

import { CaseStudy } from "@/lib/data";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Architecture diagram snippets for each case study
const architectureSnippets: Record<string, string> = {
  "Real-Time Click-Through Rate Analysis": `┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Go Data   │────▶│   Kafka     │────▶│   Flink     │
│  Producer   │     │   Topics    │     │   Jobs      │
└─────────────┘     └─────────────┘     └──────┬──────┘
                                               │
                         ┌─────────────────────┴─────┐
                         ▼                           ▼
                  ┌─────────────┐           ┌─────────────┐
                  │  Real-time  │           │   Metrics   │
                  │  Dashboard  │           │   Store     │
                  └─────────────┘           └─────────────┘`,
  "Kong API Gateway with Observability": `┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Client    │────▶│   Kong      │────▶│  FastAPI    │
│  Request    │     │   Gateway   │     │  Services   │
└─────────────┘     └──────┬──────┘     └─────────────┘
                           │
                    ┌──────┴──────┐
                    ▼             ▼
             ┌───────────┐ ┌───────────┐
             │   OTel    │ │ OpenObs   │
             │ Collector │ │ Dashboard │
             └───────────┘ └───────────┘`,
  "QnA on Knowledge Graph": `┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Query     │────▶│  LangChain  │────▶│    LLM      │
│   Input     │     │   Router    │     │   Engine    │
└─────────────┘     └──────┬──────┘     └──────┬──────┘
                           │                   │
                           ▼                   ▼
                    ┌─────────────┐     ┌─────────────┐
                    │   Neo4j     │◀───▶│  Context    │
                    │   Graph     │     │  Builder    │
                    └─────────────┘     └─────────────┘`,
};

export const FeaturedWork = ({ caseStudy, index = 0 }: { caseStudy: CaseStudy; index?: number }) => {
  const isReversed = index % 2 === 1;
  const snippet = architectureSnippets[caseStudy.title] || "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} gap-8 p-6 md:p-8 bg-obsidian-900 rounded-2xl border border-white/[0.05] hover:border-indigo-500/20 transition-all duration-300 group`}
    >
      {/* Content Side */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-mono font-medium bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20">
              Case Study
            </span>
            <span className="px-3 py-1 text-xs font-mono text-white/40 rounded-full border border-white/10">
              #{String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 font-mono tracking-tight">
            {caseStudy.title}
          </h3>

          {/* Problem / Solution / Impact */}
          <div className="space-y-5">
            <div className="group/section">
              <h4 className="text-xs font-mono font-semibold text-indigo-400/80 uppercase tracking-wider mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                The Challenge
              </h4>
              <p className="text-white/60 text-sm leading-relaxed pl-3.5">
                {caseStudy.problem}
              </p>
            </div>

            <div className="group/section">
              <h4 className="text-xs font-mono font-semibold text-violet-400/80 uppercase tracking-wider mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
                The Solution
              </h4>
              <p className="text-white/60 text-sm leading-relaxed pl-3.5">
                {caseStudy.solution}
              </p>
            </div>

            <div className="group/section">
              <h4 className="text-xs font-mono font-semibold text-green-400/80 uppercase tracking-wider mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                Impact
              </h4>
              <p className="text-white/60 text-sm leading-relaxed pl-3.5">
                {caseStudy.impact}
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div className="mt-8">
          <div className="flex flex-wrap gap-2">
            {caseStudy.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs font-mono bg-white/[0.03] text-white/70 rounded-lg border border-white/10 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 flex items-center gap-4">
          <Link
            href={caseStudy.repoLink}
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-mono font-medium text-white bg-white/5 rounded-lg border border-white/10 hover:border-indigo-500/30 hover:bg-indigo-500/10 transition-all duration-200 group/btn"
          >
            <Github className="w-4 h-4" />
            View Source
            <ArrowUpRight className="w-3 h-3 opacity-50 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
          </Link>
        </div>
      </div>

      {/* Architecture Diagram Side */}
      <div className="flex-1 bg-obsidian-800/50 rounded-xl p-6 flex items-center justify-center min-h-[280px] md:min-h-full relative overflow-hidden border border-white/[0.03]">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-violet-500/5" />

        {/* Code/Diagram display */}
        <div className="relative z-10 w-full group-hover:scale-[1.02] transition-transform duration-300">
          <div className="bg-obsidian-900/80 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-2 border-b border-white/5 bg-black/20">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              <span className="text-[10px] text-white/30 font-mono ml-2">
                architecture.diagram
              </span>
            </div>

            {/* Diagram content */}
            <pre className="p-4 text-[9px] md:text-[10px] text-indigo-300/80 font-mono leading-relaxed overflow-x-auto">
              <code>{snippet}</code>
            </pre>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
