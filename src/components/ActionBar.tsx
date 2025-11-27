"use client";

import { ConnectData } from "@/lib/data";
import { Mail, FileText, Calendar } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ActionBar = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(ConnectData.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="bg-white text-black px-3 py-1 rounded-md text-xs font-mono font-medium shadow-lg"
          >
            Copied to clipboard!
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="flex items-center gap-1 p-1.5 bg-obsidian-900/90 backdrop-blur-md border border-white/10 rounded-full shadow-xl">
        <button
          onClick={copyEmail}
          className="p-2.5 rounded-full hover:bg-white/10 transition-colors text-white/60 hover:text-indigo-400 relative group"
          aria-label="Copy Email"
        >
          <Mail className="w-4 h-4" />
          <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-obsidian-800 border border-white/10 text-white text-xs font-mono rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Copy Email
          </span>
        </button>
        
        <div className="w-px h-4 bg-white/10" />
        
        <a
          href="/resume.pdf" 
          target="_blank"
          className="p-2.5 rounded-full hover:bg-white/10 transition-colors text-white/60 hover:text-indigo-400 relative group"
          aria-label="View Resume"
        >
          <FileText className="w-4 h-4" />
          <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-obsidian-800 border border-white/10 text-white text-xs font-mono rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            View Resume
          </span>
        </a>

        <div className="w-px h-4 bg-white/10" />

        <a
          href="https://calendly.com/"
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full text-xs font-mono font-medium transition-colors"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Call</span>
        </a>
      </div>
    </div>
  );
};
