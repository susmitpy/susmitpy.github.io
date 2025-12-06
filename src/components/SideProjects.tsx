"use client";

import { ProjectsData } from "@/lib/data";
import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

interface ProjectCardProps {
  project: {
    name: string;
    description: string;
    link: string;
    imagePath: string;
    gifPath: string;
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Mobile: Play GIF on 50% viewability
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const showGif = isHovered || (typeof window !== 'undefined' && window.innerWidth < 768 && isVisible);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <Link
        href={project.link}
        target="_blank"
        className="block bg-obsidian-800/50 rounded-xl border border-white/[0.05] hover:border-indigo-500/20 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
      >
        {/* Image/GIF Container */}
        <div className="aspect-video relative bg-gradient-to-br from-obsidian-800 via-obsidian-700 to-indigo-900">

          <Image
            src={showGif ? project.gifPath : project.imagePath}
            alt={project.name}
            fill
            className="object-contain transition-all duration-500"
            unoptimized={showGif}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-obsidian-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          
          {/* Play indicator */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: showGif ? 0 : 1, 
              opacity: showGif ? 0 : 1 
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-sm font-mono font-semibold text-white/90 mb-1 group-hover:text-indigo-400 transition-colors">
                {project.name}
              </h3>
              <p className="text-xs text-white/50 leading-relaxed">
                {project.description}
              </p>
            </div>
            <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-indigo-400 flex-shrink-0 transition-colors" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export const SideProjects = () => {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h2 className="text-2xl md:text-3xl font-mono font-bold text-white mb-2">
          {ProjectsData.heading}
        </h2>
        <p className="text-sm text-white/40 font-mono">
          <span className="hidden md:inline">{ProjectsData.desktopMessage}</span>
          <span className="md:hidden">{ProjectsData.mobileMessage}</span>
        </p>
      </motion.div>

      {/* Desktop: Masonry-style grid */}
      <div className="hidden md:grid project-grid md:grid-cols-3 gap-6">
        {ProjectsData.projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} index={idx} />
        ))}
      </div>

      {/* Mobile: Stacked cards */}
      <div className="md:hidden space-y-4">
        {ProjectsData.projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
};
