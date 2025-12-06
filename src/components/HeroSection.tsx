"use client";

import { HeroData } from "@/lib/data";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";

const TypewriterText = ({ text }: { text: string }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }, 40);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text]);

    return (
        <span>
            {displayedText}
            <span className="animate-pulse text-indigo-400">|</span>
        </span>
    );
};

export default function HeroSection() {
    return (
        <div className="hero-container flex flex-col md:flex-row justify-center min-h-screen p-6 md:p-10 relative overflow-hidden group" id="header">
          {/* Location badge - top right */}
          <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute top-2 right-4 md:top-4 md:right-6 flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full border border-white/10 z-20"
          >
              <MapPin className="w-3 h-3 text-indigo-400" />
              <span className="text-xs font-mono text-white/70">Mumbai, India</span>
              <span className="text-sm">🇮🇳</span>
          </motion.div>

          {/* Gradient orbs */}
          <div className="absolute inset-0 z-0 overflow-hidden">
              <motion.div
                  animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.15, 0.25, 0.15],
                  }}
                  transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                  }}
                  className="absolute top-[-30%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px]"
              />
              <motion.div
                  animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                  }}
                  className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-violet-500/15 rounded-full blur-[100px]"
              />
          </div>

          {/* Content */}
          <div className="relative z-10">
              {/* Name with subtle animation - Larger on desktop */}
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
              >
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-mono mb-3" style={{ color: 'var(--text-primary)' }}>
                      {HeroData.name}
                  </h1>
              </motion.div>

              {/* Headline - Massive and commanding */}
              <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 max-w-2xl leading-relaxed"
                  style={{ color: 'var(--text-primary)' }}
              >
                  <TypewriterText text={HeroData.headline} />
              </motion.h2>

              {/* Subheadline */}
              <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-sm md:text-base max-w-3xl mb-6 leading-relaxed"
                  style={{ color: 'var(--text-muted)' }}
              >
                  {HeroData.subHeadline}
              </motion.p>

              {/* Role tags */}
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-wrap gap-2"
              >
                  {HeroData.titles.map((title, idx) => (
              <span
                  key={idx}
                          className="px-3 py-1.5 text-xs md:text-sm font-mono font-medium bg-white/5 rounded-md border border-white/10 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-300"
                          style={{ color: 'var(--text-muted)' }}
              >
                  {title}
              </span>
          ))}
              </motion.div>
          </div>
      </div>
  );
}
