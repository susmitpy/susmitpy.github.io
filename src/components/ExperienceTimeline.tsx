"use client";

import { ExpData } from "@/lib/data";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

interface TimelineItemProps {
  heading: string;
  timeline?: string;
  points?: string[];
  isLeft: boolean;
  index: number;
  icon: "work" | "education";
}

const TimelineItem = ({ heading, timeline, points, isLeft, index, icon }: TimelineItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldCollapse = points && points.length > 3;
  const displayPoints = shouldCollapse && !isExpanded ? points.slice(0, 3) : points;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex items-start gap-6 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}
    >
      {/* Content */}
      <div className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"} text-left`}>
        <div className={`p-5 bg-obsidian-800/50 rounded-xl border border-white/[0.05] hover:border-indigo-500/20 transition-all duration-300 group`}>
          {/* Timeline badge */}
          {timeline && (
            <span className="inline-block px-2 py-1 text-[10px] font-mono text-indigo-400/80 bg-indigo-500/10 rounded mb-3 border border-indigo-500/20">
              {timeline}
            </span>
          )}
          
          {/* Heading */}
          <h4 className="text-sm md:text-base font-mono font-semibold text-white/90 mb-3 leading-relaxed">
            {heading}
          </h4>
          
          {/* Points */}
          {displayPoints && displayPoints.length > 0 && (
            <ul className={`space-y-2 text-left ${isLeft ? "md:text-left" : ""}`}>
              {displayPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-white/50 leading-relaxed">
                  <span className="w-1 h-1 bg-indigo-400/60 rounded-full mt-1.5 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          )}
          
          {/* Expand/Collapse button */}
          {shouldCollapse && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-3 flex items-center gap-1 text-xs font-mono text-indigo-400/80 hover:text-indigo-400 transition-colors"
            >
              {isExpanded ? (
                <>
                  Show Less <ChevronUp className="w-3 h-3" />
                </>
              ) : (
                <>
                  Show More <ChevronDown className="w-3 h-3" />
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Timeline node - visible on desktop only */}
      <div className="hidden md:flex flex-col items-center">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
          icon === "work" 
            ? "bg-indigo-500/10 border-indigo-500/30" 
            : "bg-violet-500/10 border-violet-500/30"
        }`}>
          {icon === "work" ? (
            <Briefcase className="w-4 h-4 text-indigo-400" />
          ) : (
            <GraduationCap className="w-4 h-4 text-violet-400" />
          )}
        </div>
        <div className="w-px h-full bg-gradient-to-b from-white/10 to-transparent min-h-[40px]" />
      </div>

      {/* Spacer for alternating layout on desktop */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
};

const MobileTimelineItem = ({ heading, timeline, points, index, icon }: Omit<TimelineItemProps, 'isLeft'>) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldCollapse = points && points.length > 3;
  const displayPoints = shouldCollapse && !isExpanded ? points.slice(0, 3) : points;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-start gap-4"
    >
      {/* Timeline line and node */}
      <div className="flex flex-col items-center">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center border flex-shrink-0 ${
          icon === "work" 
            ? "bg-indigo-500/10 border-indigo-500/30" 
            : "bg-violet-500/10 border-violet-500/30"
        }`}>
          {icon === "work" ? (
            <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
          ) : (
            <GraduationCap className="w-3.5 h-3.5 text-violet-400" />
          )}
        </div>
        <div className="w-px flex-1 bg-gradient-to-b from-white/10 to-transparent min-h-[20px]" />
      </div>

      {/* Content */}
      <div className="flex-1 pb-6">
        <div className="p-4 bg-obsidian-800/50 rounded-xl border border-white/[0.05] hover:border-indigo-500/20 transition-all duration-300">
          {timeline && (
            <span className="inline-block px-2 py-1 text-[10px] font-mono text-indigo-400/80 bg-indigo-500/10 rounded mb-2 border border-indigo-500/20">
              {timeline}
            </span>
          )}
          
          <h4 className="text-sm font-mono font-semibold text-white/90 mb-2 leading-relaxed">
            {heading}
          </h4>
          
          {displayPoints && displayPoints.length > 0 && (
            <ul className="space-y-1.5">
              {displayPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-white/50 leading-relaxed">
                  <span className="w-1 h-1 bg-indigo-400/60 rounded-full mt-1.5 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          )}
          
          {shouldCollapse && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 flex items-center gap-1 text-xs font-mono text-indigo-400/80 hover:text-indigo-400 transition-colors"
            >
              {isExpanded ? (
                <>
                  Show Less <ChevronUp className="w-3 h-3" />
                </>
              ) : (
                <>
                  Show More <ChevronDown className="w-3 h-3" />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const ExperienceTimeline = () => {
  const experiences: Array<{
    heading: string;
    timeline?: string;
    points?: string[];
    icon: "work" | "education";
  }> = [
    { ...ExpData.exp.skillrev, icon: "work" as const },
    { ...ExpData.exp.aidax, icon: "work" as const },
    { ...ExpData.exp.xcellen, icon: "work" as const },
    { ...ExpData.exp.zeza_lead, icon: "work" as const },
    { ...ExpData.exp.zeza, icon: "work" as const },
    { ...ExpData.exp.flyer, icon: "work" as const },
  ];

  return (
    <section id="experience" className="py-16">
      <SectionHeader
        eyebrow="Career Path"
        title={ExpData.heading}
      />

      {/* Desktop Timeline (Alternating) */}
      <div className="hidden md:block space-y-2">
        {experiences.map((exp, idx) => (
          <TimelineItem
            key={idx}
            heading={exp.heading}
            timeline={exp.timeline}
            points={exp.points}
            isLeft={idx % 2 === 0}
            index={idx}
            icon={exp.icon}
          />
        ))}
      </div>

      {/* Mobile Timeline (Vertical) */}
      <div className="md:hidden">
        {experiences.map((exp, idx) => (
          <MobileTimelineItem
            key={idx}
            heading={exp.heading}
            timeline={exp.timeline}
            points={exp.points}
            index={idx}
            icon={exp.icon}
          />
        ))}
      </div>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 pt-8 border-t border-white/[0.05]"
      >
        <h3 className="text-lg font-mono font-bold text-white/90 mb-6 flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-violet-400" />
          Education
        </h3>
        <div className="grid md:grid-cols-2 gap-3">
          {ExpData.exp.education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-4 bg-obsidian-800/30 rounded-lg border border-white/[0.05] hover:border-violet-500/20 transition-all"
            >
              <p className="text-xs text-white/60 leading-relaxed">{edu}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
