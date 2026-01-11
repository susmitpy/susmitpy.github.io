"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const STORAGE_KEY = "projectPromoBannerDismissed";

export const ProjectPromoBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    // Check if banner was previously dismissed in this session
    const isDismissed = sessionStorage.getItem(STORAGE_KEY);
    
    if (!isDismissed) {
      setIsVisible(true);
    }
    
    setIsMounted(true);
  }, []);

  const handleDismiss = (): void => {
    setIsVisible(false);
    sessionStorage.setItem(STORAGE_KEY, "true");
  };

  const handleVisitWebsite = (): void => {
    window.open("https://forquiz.fusebytes.in", "_blank", "noopener,noreferrer");
  };

  // Don't render anything on server or if not mounted
  if (!isMounted) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            duration: 0.5 
          }}
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999] w-[calc(100%-2rem)] md:w-auto max-w-md"
        >
          {/* Glassmorphism container with glow effect */}
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-60 group-hover:opacity-80 transition duration-300"></div>
            
            {/* Main content */}
            <div className="relative backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent pointer-events-none"></div>
              
              {/* Content wrapper */}
              <div className="relative p-4 md:p-5">
                {/* Close button */}
                <button
                  onClick={handleDismiss}
                  className="absolute top-2 right-2 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 group/close"
                  aria-label="Close banner"
                  type="button"
                >
                  <X 
                    className="w-4 h-4 text-white/60 group-hover/close:text-white/90 transition-colors" 
                    strokeWidth={2}
                  />
                </button>

                {/* Text content */}
                <div className="pr-8 mb-4">
                  <p className="text-sm md:text-base text-white/90 leading-relaxed">
                    <span className="inline-block mr-2 text-lg" role="img" aria-label="rocket">
                      🚀
                    </span>
                    <span className="font-semibold text-white">Built something new!</span>
                    {" "}Check out{" "}
                    <span className="font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      ForQuiz
                    </span>
                    {" "}- An AI-powered Quiz Platform.
                  </p>
                </div>

                {/* CTA button */}
                <button
                  onClick={handleVisitWebsite}
                  className="w-full md:w-auto px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-sm font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black/40"
                  type="button"
                >
                  Visit Website →
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
