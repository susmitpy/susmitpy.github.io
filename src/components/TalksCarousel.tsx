"use client";

import { TalksData } from "@/lib/data";
import { PlayCircle, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const TalksCarousel = () => {
  return (
    <div className="w-full h-full flex flex-col bg-obsidian-900 rounded-xl">
      <div className="flex items-center justify-between mb-3 px-1">
        <h3 className="text-sm font-mono font-bold text-white/90 tracking-wide">
          SPEAKER
        </h3>
        <Link
          href="/talks"
          className="text-xs font-mono text-white/40 hover:text-indigo-400 transition-colors flex items-center gap-1"
        >
          View All
          <ExternalLink className="w-3 h-3" />
        </Link>
      </div>
      
      <div className="flex-1 overflow-x-auto pb-2 hide-scrollbar flex gap-3 px-1">
        {TalksData.talks.slice(0, 5).map((talk, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              href={talk.link}
              target="_blank"
              className="flex-shrink-0 w-56 group relative rounded-lg overflow-hidden border border-white/[0.05] hover:border-indigo-500/30 transition-all duration-300 block"
            >
              <div className="aspect-video relative bg-obsidian-800">
                <Image
                  src={talk.src}
                  alt={talk.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20"
                  >
                    <PlayCircle className="w-5 h-5 text-white" />
                  </motion.div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <div className="text-[10px] font-mono text-indigo-400/80 mb-1 uppercase tracking-wider">
                  {talk.category}
                </div>
                <h4 className="text-xs font-medium text-white/90 line-clamp-2 leading-relaxed">
                  {talk.title}
                </h4>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
