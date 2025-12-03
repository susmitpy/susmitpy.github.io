"use client";

import { ConnectData } from "@/lib/data";
import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  BookOpen,
  Code2
} from "lucide-react";
import Link from "next/link";

const socialIcons: Record<string, React.ElementType> = {
  linkedin: Linkedin,
  github: Github,
  medium: BookOpen,
  hackerrank: Code2,
  email: Mail,
};

const socialLabels: Record<string, string> = {
  linkedin: "LinkedIn",
  github: "GitHub",
  medium: "Medium",
  hackerrank: "HackerRank",
  email: "Email",
};

export const ConnectSection = () => {
  return (
    <section id="connect" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-4">
          {ConnectData.heading}
        </h2>
        <p className="text-white/50 mb-12 max-w-lg mx-auto">
          {ConnectData.description}
        </p>

        {/* Social links */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {Object.entries(ConnectData.socials).map(([key, value], idx) => {
            const Icon = socialIcons[key] || ExternalLink;
            const label = socialLabels[key] || key;
            const href = key === "email" ? `mailto:${value}` : value;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link
                  href={href}
                  target={key === "email" ? undefined : "_blank"}
                  className="group flex items-center gap-3 px-5 py-3 bg-obsidian-800/50 rounded-xl border border-white/[0.05] hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-indigo-500/10 transition-colors">
                    <Icon className="w-5 h-5 text-white/60 group-hover:text-indigo-400 transition-colors" />
                  </div>
                  <div className="text-left">
                    <span className="block text-sm font-mono font-medium text-white/80 group-hover:text-white transition-colors">
                      {label}
                    </span>
                    <span className="text-xs text-white/40">
                      {key === "email" ? value : "Connect"}
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-indigo-400 transition-colors ml-2" />
                </Link>
              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
};
