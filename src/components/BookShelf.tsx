"use client";

import { BooksData } from "@/lib/data";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

// Book cover colors for visual interest
const bookColors = [
  "from-indigo-600 to-indigo-800",
  "from-violet-600 to-violet-800",
  "from-purple-600 to-purple-800",
  "from-fuchsia-600 to-fuchsia-800",
  "from-pink-600 to-pink-800",
  "from-rose-600 to-rose-800",
  "from-blue-600 to-blue-800",
];

interface BookSpineProps {
  title: string;
  index: number;
}

const BookSpine = ({ title, index }: BookSpineProps) => {
  const colorClass = bookColors[index % bookColors.length];
  
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -30 }}
      whileInView={{ opacity: 1, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        rotateY: 10, 
        translateZ: 10,
        transition: { duration: 0.2 }
      }}
      className="relative cursor-pointer group perspective-1000"
      style={{ transformStyle: "preserve-3d" }}
      title={title}
    >
      {/* Book spine */}
      <div 
        className={`relative h-48 md:h-56 w-12 md:w-14 rounded-r-sm bg-gradient-to-b ${colorClass} shadow-lg`}
        style={{
          transform: "rotateY(-15deg)",
          transformOrigin: "left center",
        }}
      >
        {/* Spine texture */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
        
        {/* Title (vertical) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span 
            className="text-[10px] md:text-xs font-mono font-medium text-white/90 whitespace-nowrap"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              transform: "rotate(180deg)",
              maxHeight: "90%",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </span>
        </div>
        
        {/* Spine highlight */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/10" />
      </div>

      {/* Hover tooltip */}
      <div className="absolute -top-14 left-1/2 -translate-x-1/2 px-3 py-2 bg-obsidian-900 rounded-lg border border-white/20 shadow-xl z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        <p className="text-xs font-mono text-white whitespace-normal max-w-xs">
          {title}
        </p>
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-3 h-3 rotate-45 bg-obsidian-900 border-r border-b border-white/20" />
      </div>
    </motion.div>
  );
};

const BookCover = ({ title, index }: BookSpineProps) => {
  const colorClass = bookColors[index % bookColors.length];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div 
        className={`relative h-40 w-28 rounded-lg bg-gradient-to-br ${colorClass} shadow-lg overflow-hidden`}
      >
        {/* Cover texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        
        {/* Title */}
        <div className="absolute inset-0 p-3 flex flex-col justify-end">
          <span className="text-[10px] font-mono font-medium text-white/90 leading-tight line-clamp-3">
            {title}
          </span>
        </div>
        
        {/* Book spine effect */}
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-black/20" />
      </div>

      {/* Tooltip for mobile */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-obsidian-900 rounded-lg border border-white/20 shadow-xl z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        <p className="text-xs font-mono text-white whitespace-normal max-w-xs">
          {title}
        </p>
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-3 h-3 rotate-45 bg-obsidian-900 border-r border-b border-white/20" />
      </div>
    </motion.div>
  );
};

export const BookShelf = () => {
  return (
    <section id="books" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h2 className="text-2xl md:text-3xl font-mono font-bold text-white mb-2 flex items-center gap-3">
          <BookOpen className="w-7 h-7 text-indigo-400" />
          {BooksData.heading}
        </h2>
        <p className="text-sm text-white/40 font-mono">Books that shaped my thinking</p>
      </motion.div>

      {/* Desktop: 3D Bookshelf with spines */}
      <div className="hidden md:block">
        <div className="relative bg-obsidian-800/30 rounded-2xl border border-white/[0.05] p-8 overflow-hidden">
          {/* Shelf background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-obsidian-900/50 to-obsidian-900/80 pointer-events-none" />
          
          {/* Books on shelf */}
          <div className="relative flex items-end justify-center gap-1 min-h-[280px]" style={{ perspective: "1000px" }}>
            {BooksData.books.map((book, idx) => (
              <BookSpine key={idx} title={book} index={idx} />
            ))}
          </div>
          
          {/* Shelf */}
          <div className="absolute bottom-6 left-8 right-8 h-3 bg-gradient-to-b from-amber-900/40 to-amber-950/60 rounded-sm shadow-lg">
            <div className="absolute inset-x-0 top-0 h-1 bg-amber-800/30 rounded-t-sm" />
          </div>
        </div>
      </div>

      {/* Mobile: Horizontal scrollable list */}
      <div className="md:hidden">
        <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory -mx-4 px-4">
          {BooksData.books.map((book, idx) => (
            <div key={idx} className="snap-start flex-shrink-0">
              <BookCover title={book} index={idx} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
