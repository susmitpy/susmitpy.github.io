"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "projectPromoBannerDismissed";

type BrandWordmarkVariant = "default" | "on-dark" | "badge";

type BrandWordmarkProps = {
  className?: string;
  variant?: BrandWordmarkVariant;
  forShare?: boolean;
};

export const BRAND_TAGLINE =
  "Engage, Educate, and Convert.";

function BrandWordmark({
  className,
  variant = "default",
  forShare = false
}: BrandWordmarkProps) {
  const forTextClass =
    variant === "default"
      ? "text-slate-900"
      : variant === "on-dark"
        ? "text-white"
        : "text-slate-900";

  const quizTextClass =
    variant === "default"
      ? "text-[#5B21B6]"
      : variant === "on-dark"
        ? "text-violet-400"
        : "text-[#5B21B6]";

  return (
    <span
      className={cn(
        "inline-flex items-baseline font-semibold",
        variant === "badge" &&
        "rounded-md bg-white/95 px-2 py-0.5 shadow-sm ring-1 ring-slate-200/80",
        className,
      )}
    >
      <span className={forTextClass}>For</span>
      {forShare && (<>&nbsp;</>)}
      <span className={cn("font-bold", quizTextClass)}>Quiz</span>
    </span>
  );
}

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
          {/* Card with subtle shadow */}
          <div className="relative group">
            {/* Subtle accent shadow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#5B21B6] via-[#2979FF] to-[#5B21B6] rounded-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></div>
            
            {/* Main content - White background */}
            <div className="relative bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
              {/* Content wrapper */}
              <div className="relative p-5 md:p-6">
                {/* Close button */}
                <button
                  onClick={handleDismiss}
                  className="absolute top-3 right-3 p-1.5 rounded hover:bg-gray-100 border border-gray-200 hover:border-gray-300 transition-all duration-200 group/close"
                  aria-label="Close banner"
                  type="button"
                >
                  <X 
                    className="w-4 h-4 text-gray-500 group-hover/close:text-gray-700 transition-colors" 
                    strokeWidth={2}
                  />
                </button>

                {/* Text content */}
                <div className="pr-8 mb-4">
                  <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                    <span className="inline-block mr-2 text-lg" role="img" aria-label="rocket">
                      🚀
                    </span>
                    <span className="font-semibold text-gray-900">Built something new!</span>
                    {" "}Check out{" "}
                    <BrandWordmark className="text-base md:text-lg" />
                    {" "}- <span className="font-medium">
                      <span className="text-[#0D47A1]">Engage</span>
                      <span className="text-gray-800">, </span>
                      <span className="text-[#065F46]">Educate</span>
                      <span className="text-gray-800">, and </span>
                      <span className="text-[#B45309]">Convert</span>
                      <span className="text-gray-800">.</span>
                    </span>
                  </p>
                </div>

                {/* CTA button - Following ForQuiz design system */}
                <button
                  onClick={handleVisitWebsite}
                  className="w-full md:w-auto px-6 py-3 bg-[#5B21B6] hover:bg-[#4C1D95] text-white text-base font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#5B21B6] focus:ring-offset-2"
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
