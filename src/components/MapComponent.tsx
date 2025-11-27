"use client";

import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

export const MapComponent = () => {
  return (
    <div className="relative w-full h-full bg-obsidian-900 rounded-xl overflow-hidden flex items-center justify-center">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl" />

      {/* Abstract lines */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M20 0 L20 100" stroke="currentColor" strokeWidth="0.3" className="text-white" />
          <path d="M40 0 L40 100" stroke="currentColor" strokeWidth="0.3" className="text-white" />
          <path d="M60 0 L60 100" stroke="currentColor" strokeWidth="0.3" className="text-white" />
          <path d="M80 0 L80 100" stroke="currentColor" strokeWidth="0.3" className="text-white" />
          <path d="M0 20 L100 20" stroke="currentColor" strokeWidth="0.3" className="text-white" />
          <path d="M0 40 L100 40" stroke="currentColor" strokeWidth="0.3" className="text-white" />
          <path d="M0 60 L100 60" stroke="currentColor" strokeWidth="0.3" className="text-white" />
          <path d="M0 80 L100 80" stroke="currentColor" strokeWidth="0.3" className="text-white" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="relative">
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -inset-2 bg-indigo-500/30 rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.2, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            className="absolute -inset-1 bg-indigo-400/20 rounded-full"
          />
          <div className="w-10 h-10 bg-indigo-500/20 rounded-full flex items-center justify-center border border-indigo-500/30">
            <MapPin className="w-5 h-5 text-indigo-400 relative z-10" />
          </div>
        </div>
        <h3 className="mt-3 font-mono font-bold text-white/90 text-sm">
          Mumbai, India
        </h3>
        <p className="text-xs text-white/40 font-mono mt-1">
          Open to Remote
        </p>
      </motion.div>
    </div>
  );
};
