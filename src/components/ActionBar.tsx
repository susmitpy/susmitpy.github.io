"use client";

import { ConnectData } from "@/lib/data";
import { Mail, FileText, Calendar, Users, ChevronUp } from "lucide-react";
import { FaLinkedin, FaGithub, FaHackerrank } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const socialItems = [
  { 
    label: 'Copy Email', 
    icon: Mail,
    action: 'copy',
    value: ConnectData.socials.email
  },
  { 
    label: 'LinkedIn', 
    icon: FaLinkedin,
    action: 'link',
    value: ConnectData.socials.linkedin
  },
  { 
    label: 'HackerRank', 
    icon: FaHackerrank,
    action: 'link',
    value: ConnectData.socials.hackerrank
  },
  { 
    label: 'GitHub', 
    icon: FaGithub,
    action: 'link',
    value: ConnectData.socials.github
  },
];

export const ActionBar = () => {
  const [copied, setCopied] = useState(false);
  const [isSocialsOpen, setIsSocialsOpen] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(ConnectData.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSocialClick = (item: typeof socialItems[0]) => {
    if (item.action === 'copy') {
      copyEmail();
    } else {
      window.open(item.value, '_blank', 'noopener,noreferrer');
    }
    setIsSocialsOpen(false);
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
        {/* Socials popup menu */}
        <div className="relative">
          <AnimatePresence>
            {isSocialsOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                className="absolute bottom-14 right-0 mb-2 bg-obsidian-800/95 backdrop-blur-md rounded-xl border border-white/10 shadow-xl overflow-hidden min-w-[160px]"
              >
                {socialItems.map((item, idx) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => handleSocialClick(item)}
                    className="flex items-center gap-3 w-full px-4 py-2.5 text-left hover:bg-white/5 text-sm font-mono text-white/70 hover:text-indigo-400 transition-colors border-b border-white/5 last:border-0"
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          
          <button
            onClick={() => setIsSocialsOpen(!isSocialsOpen)}
            className="p-2.5 rounded-full hover:bg-white/10 transition-colors text-white/60 hover:text-indigo-400 relative group"
            aria-label="Socials"
          >
            {isSocialsOpen ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <Users className="w-4 h-4" />
            )}
            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-obsidian-800 border border-white/10 text-white text-xs font-mono rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Socials
            </span>
          </button>
        </div>
        
        <div className="w-px h-4 bg-white/10" />
        
        <a
          href="https://bit.ly/susmit-resume" 
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full hover:bg-white/10 transition-colors text-white/60 hover:text-indigo-400 relative group"
          aria-label="View Resume"
        >
          <FileText className="w-4 h-4" />
          <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-obsidian-800 border border-white/10 text-white text-xs font-mono rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            View Resume
          </span>
        </a>
      </div>
    </div>
  );
};
