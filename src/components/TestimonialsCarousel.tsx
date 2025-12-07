"use client";

import { TestimonialsData } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const CARD_GAP = 16; // 1rem gap between cards

export const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobileCurrentIndex, setMobileCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardWidthRef = useRef<number>(0);
  const testimonials = TestimonialsData.testimonials;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Cache card width on mount and resize
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const updateCardWidth = () => {
      const card = container.querySelector('.testimonial-card');
      if (card) {
        cardWidthRef.current = card.clientWidth;
      }
    };

    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    return () => window.removeEventListener('resize', updateCardWidth);
  }, []);

  // Track scroll position to update mobile current index
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = cardWidthRef.current;
      
      // Guard against invalid card width
      if (!cardWidth || cardWidth <= 0) return;
      
      const index = Math.round(scrollLeft / (cardWidth + CARD_GAP));
      setMobileCurrentIndex(Math.min(index, testimonials.length - 1));
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-16">
      <SectionHeader
        eyebrow="Endorsements"
        title={TestimonialsData.heading}
      />

      {/* Desktop: Large quote cards */}
      <div className="hidden md:block">
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-obsidian-800/50 rounded-2xl border border-white/[0.05] p-8 md:p-12 relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl" />
              
              {/* Quote icon */}
              <Quote className="w-12 h-12 text-indigo-500/20 mb-6" />
              
              {/* Testimonial text */}
              <blockquote className="relative z-10">
                <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 font-light italic">
                  &ldquo;{testimonials[currentIndex].review}&rdquo;
                </p>
                
                {/* Author */}
                <footer className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white font-mono font-bold text-lg">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div>
                    <cite className="not-italic font-mono font-semibold text-white/90 block">
                      {testimonials[currentIndex].name}
                    </cite>
                    <span className="text-sm text-white/50">
                      {testimonials[currentIndex].designation}
                    </span>
                  </div>
                </footer>
              </blockquote>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-white/60" />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex 
                      ? "bg-indigo-400 w-6" 
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-white/60" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile: Swipeable cards */}
      <div className="md:hidden">
        <div 
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory -mx-4 px-4"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="snap-center flex-shrink-0 w-[80vw] max-w-sm testimonial-card"
            >
              <div className="bg-obsidian-800/50 rounded-xl border border-white/[0.05] p-6 h-full">
                <Quote className="w-8 h-8 text-indigo-500/20 mb-4" />
                
                <p className="text-sm text-white/70 leading-relaxed mb-6 italic line-clamp-6">
                  &ldquo;{testimonial.review}&rdquo;
                </p>
                
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.05]">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white font-mono font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <span className="font-mono font-medium text-white/90 text-sm block">
                      {testimonial.name}
                    </span>
                    <span className="text-xs text-white/50">
                      {testimonial.designation}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      
        {/* Dots indicator for mobile */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                const container = scrollContainerRef.current;
                const cardWidth = cardWidthRef.current;
                
                // Guard against invalid card width
                if (!container || !cardWidth || cardWidth <= 0) return;
                
                container.scrollTo({
                  left: idx * (cardWidth + CARD_GAP),
                  behavior: 'smooth'
                });
              }}
              className={`h-2 rounded-full transition-all ${
                idx === mobileCurrentIndex 
                  ? "bg-indigo-400 w-6" 
                  : "bg-white/20 w-2 hover:bg-white/40"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
