"use client";

import { ConnectData } from "@/lib/data";
import { Copy, Mail, FileText, Calendar } from "lucide-react";
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
            className="bg-neutral-900 dark:bg-white text-white dark:text-black px-3 py-1 rounded-md text-xs font-medium shadow-lg"
          >
            Copied to clipboard!
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="flex items-center gap-2 p-1 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 rounded-full shadow-xl">
        <button
          onClick={copyEmail}
          className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-600 dark:text-neutral-300 relative group"
          aria-label="Copy Email"
        >
          <Mail className="w-5 h-5" />
           <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-neutral-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Copy Email
          </span>
        </button>
        
        <div className="w-px h-4 bg-neutral-200 dark:bg-neutral-700" />
        
        <a
          href="/resume.pdf" 
          target="_blank"
          className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-600 dark:text-neutral-300 relative group"
          aria-label="View Resume"
        >
          <FileText className="w-5 h-5" />
           <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-neutral-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            View Resume
          </span>
        </a>

        <div className="w-px h-4 bg-neutral-200 dark:bg-neutral-700" />

        <a
          href="https://calendly.com/" // Placeholder
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium transition-colors"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Call</span>
        </a>
      </div>
    </div>
  );
};
