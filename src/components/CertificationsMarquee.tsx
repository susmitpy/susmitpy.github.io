"use client";

import { BadgesData } from "@/lib/data";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import Link from "next/link";

// Category colors
const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  "Flink": { bg: "bg-orange-500/10", text: "text-orange-400", border: "border-orange-500/20" },
  "Neo4j": { bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/20" },
  "MongoDB": { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20" },
};

interface BadgeCardProps {
  badge: {
    title: string;
    category: string;
    credlyId?: string;
    url?: string;
    can_embed?: boolean;
  };
  index: number;
}

const BadgeCard = ({ badge, index }: BadgeCardProps) => {
  const colors = categoryColors[badge.category] || { 
    bg: "bg-indigo-500/10", 
    text: "text-indigo-400", 
    border: "border-indigo-500/20" 
  };
  
  const href = badge.credlyId 
    ? `https://www.credly.com/badges/${badge.credlyId}/public_url`
    : badge.url || "#";

  return (
    <Link
      href={href}
      target="_blank"
      className="flex-shrink-0 w-72 group"
    >
      <div className={`p-4 bg-obsidian-800/50 rounded-xl border border-white/[0.05] hover:border-indigo-500/20 transition-all duration-300 h-full`}>
        <div className="flex items-start gap-3">
          <div className={`w-10 h-10 rounded-lg ${colors.bg} ${colors.border} border flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
            <Award className={`w-5 h-5 ${colors.text}`} />
          </div>
          <div className="flex-1 min-w-0">
            <span className={`inline-block px-2 py-0.5 text-[10px] font-mono ${colors.bg} ${colors.text} ${colors.border} border rounded mb-2`}>
              {badge.category}
            </span>
            <h4 className="text-xs font-mono font-medium text-white/80 leading-relaxed line-clamp-2 group-hover:text-indigo-400 transition-colors">
              {badge.title}
            </h4>
          </div>
          <ExternalLink className="w-3.5 h-3.5 text-white/20 group-hover:text-indigo-400 flex-shrink-0 transition-colors" />
        </div>
      </div>
    </Link>
  );
};

export const CertificationsMarquee = () => {
  // Duplicate badges for infinite scroll effect
  const duplicatedBadges = [...BadgesData.badges, ...BadgesData.badges];

  return (
    <section id="certifications" className="py-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h2 className="text-2xl md:text-3xl font-mono font-bold text-white mb-2">
          {BadgesData.heading}
        </h2>
        <p className="text-sm text-white/40 font-mono">Verified credentials and certifications</p>
      </motion.div>

      {/* Infinite scrolling marquee */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        
        {/* Desktop: Auto-scrolling marquee with drag */}
        <div className="hidden md:block">
          <motion.div
            className="flex gap-4 cursor-grab active:cursor-grabbing"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            drag="x"
            dragConstraints={{ left: -1000, right: 0 }}
            dragElastic={0.1}
            whileDrag={{ cursor: "grabbing" }}
          >
            {duplicatedBadges.map((badge, idx) => (
              <BadgeCard key={idx} badge={badge} index={idx} />
            ))}
          </motion.div>
        </div>

        {/* Mobile: Faster marquee with drag */}
        <div className="md:hidden">
          <motion.div
            className="flex gap-4 cursor-grab active:cursor-grabbing"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            drag="x"
            dragConstraints={{ left: -1000, right: 0 }}
            dragElastic={0.1}
            whileDrag={{ cursor: "grabbing" }}
          >
            {duplicatedBadges.map((badge, idx) => (
              <BadgeCard key={idx} badge={badge} index={idx} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Badge count */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 text-center"
      >
        <span className="text-xs font-mono text-white/30">
          {BadgesData.badges.length} verified certifications
        </span>
      </motion.div>
    </section>
  );
};
