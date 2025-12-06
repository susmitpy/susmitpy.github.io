"use client";

import { TalksData } from "@/lib/data";
import { PlayCircle, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const ITEMS_PER_PAGE = 5;

export const TalksCarousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(TalksData.talks.length / ITEMS_PER_PAGE);
  
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const visibleTalks = TalksData.talks.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  
  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };
  
  const goToNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  return (
    <div className="w-full h-full flex flex-col bg-obsidian-900 rounded-xl" id="talks">
      <div className="flex items-center justify-between mb-3 px-1">
        <h3 className="text-sm font-mono font-bold text-white/90 tracking-wide">
          SPEAKER
        </h3>
        <div className="flex items-center gap-2">
          <button
            onClick={goToPrevPage}
            className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all"
            aria-label="Previous talks"
          >
            <ChevronLeft className="w-4 h-4 text-white/60" />
          </button>
          <span className="text-xs font-mono text-white/40 min-w-[40px] text-center">
            {currentPage + 1}/{totalPages}
          </span>
          <button
            onClick={goToNextPage}
            className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all"
            aria-label="Next talks"
          >
            <ChevronRight className="w-4 h-4 text-white/60" />
          </button>
        </div>
      </div>
      
      <div className="flex-1 overflow-x-auto pb-2 hide-scrollbar flex gap-3 px-1">
        {visibleTalks.map((talk, index) => (
          <motion.div
            key={`${currentPage}-${index}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              href={talk.link}
              target="_blank"
              className="flex-shrink-0 w-56 group relative rounded-lg overflow-hidden border border-white/[0.05] hover:border-indigo-500/30 transition-all duration-300 block"
            >
              <div className="aspect-video relative bg-gradient-to-br from-obsidian-800 via-obsidian-700 to-indigo-900">
                <Image
                  src={talk.src}
                  alt={talk.title}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-110"

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
                <div className="text-[10px] font-mono text-white/90 mb-1 uppercase tracking-wider">
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
