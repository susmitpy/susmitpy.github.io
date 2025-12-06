"use client";

import { ReposData } from "@/lib/data";
import { motion } from "framer-motion";
import { GitBranch, Star, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

// Language colors similar to GitHub
const languageColors: Record<string, string> = {
  "Python": "#3572A5",
  "Go": "#00ADD8",
  "TypeScript": "#2b7489",
  "JavaScript": "#f1e05a",
  "Azure": "#0078D4",
  "Docker": "#2496ED",
};

// Simulated language detection based on repo content
const getRepoLanguage = (name: string): string => {
  if (name.toLowerCase().includes("flink") || name.toLowerCase().includes("kafka")) return "Python";
  if (name.toLowerCase().includes("ctr") || name.toLowerCase().includes("go")) return "Go";
  if (name.toLowerCase().includes("neo4j")) return "Python";
  if (name.toLowerCase().includes("azure") || name.toLowerCase().includes("realtime")) return "Azure";
  if (name.toLowerCase().includes("docker") || name.toLowerCase().includes("kong")) return "Docker";
  if (name.toLowerCase().includes("streamlit") || name.toLowerCase().includes("llm")) return "Python";
  return "Python";
};

// Simulated star counts (in production, fetch from GitHub API)
const getStarCount = (index: number): number => {
  const stars = [47, 32, 28, 24, 21, 18, 15, 12, 9, 6];
  return stars[index] || Math.floor(Math.random() * 20) + 1;
};

export const OpenSourceList = () => {
  return (
    <section id="opensource" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center justify-between mb-10"
      >
        <div>
          <h2 className="text-2xl md:text-3xl font-mono font-bold text-white mb-2">
            {ReposData.heading}
          </h2>
          <p className="text-sm text-white/40 font-mono">Open source contributions and experiments</p>
        </div>
        <Link
          href="https://github.com/susmitpy"
          target="_blank"
          className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-mono text-white/60 bg-white/5 rounded-lg border border-white/10 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all"
        >
          <Github className="w-4 h-4" />
          View Profile
        </Link>
      </motion.div>

      {/* Desktop: Dense list/table view */}
      <div className="hidden md:block bg-obsidian-800/30 rounded-xl border border-white/[0.05] overflow-hidden">
        <div className="grid grid-cols-[1fr_auto_auto] gap-4 px-5 py-3 border-b border-white/[0.05] text-xs font-mono text-white/40 uppercase tracking-wider">
          <span>Repository</span>
          <span className="w-20 text-center">Related Video</span>
        </div>
        
        {ReposData.repos.map((repo, idx) => {
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <div className="flex flex-row justify-between">



              <Link
                href={repo.link}
                target="_blank"
                className="grid grid-cols-[1fr_auto_auto] gap-4 px-5 py-4 hover:bg-white/[0.02] transition-colors group border-b border-white/[0.03] last:border-0"
              >
                <div className="flex items-start gap-3">
                  <GitBranch className="w-4 h-4 text-white/30 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-mono font-medium text-white/80 group-hover:text-indigo-400 transition-colors flex items-center gap-2">
                      {repo.name}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-xs text-white/40 mt-1 leading-relaxed line-clamp-1">
                      {repo.description}
                    </p>
                  </div>
                  </div>
                </Link>

                {
                  repo.relatedVideo && (
                    <Link
                      href={repo.relatedVideo.link}
                      target="_blank"
                      className="w-20 flex items-center justify-center mr-5">
                      <div >
                        <span className="flex items-center gap-1.5 text-xs text-white/50">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: "#6e7681" }}
                          />
                          {repo.relatedVideo.title}
                        </span>

                      </div>
                    </Link>
                  )
                }




              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile: Stacked list with larger tap targets */}
      <div className="md:hidden space-y-3">
        {ReposData.repos.map((repo, idx) => {
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <Link
                href={repo.link}
                target="_blank"
                className="block p-4 bg-obsidian-800/50 rounded-xl border border-white/[0.05] hover:border-indigo-500/20 transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="text-sm font-mono font-medium text-white/80 mb-1.5 leading-relaxed">
                      {repo.name}
                    </h3>
                    <p className="text-xs text-white/40 leading-relaxed line-clamp-2">
                      {repo.description}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/30 flex-shrink-0" />
                </div>
                
                {
                  repo.relatedVideo && (
                    <div className="flex items-center gap-4 mt-3 pt-3 border-t border-white/[0.05]">
                      <span className="flex items-center gap-1.5 text-xs text-white/50">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: "#6e7681" }}
                        />
                        {repo.relatedVideo.title}
                      </span>
                    </div>
                  )
                }


              </Link>
            </motion.div>
          );
        })}
        
        {/* Mobile GitHub link */}
        <Link
          href="https://github.com/susmitpy"
          target="_blank"
          className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-mono text-white/60 bg-white/5 rounded-lg border border-white/10 mt-4"
        >
          <Github className="w-4 h-4" />
          View GitHub Profile
        </Link>
      </div>
    </section>
  );
};
