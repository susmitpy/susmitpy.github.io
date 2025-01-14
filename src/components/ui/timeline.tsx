"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-gradient-to-b from-white to-gray-50 dark:from-neutral-950 dark:to-neutral-900 font-sans md:px-10 min-h-screen"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={index}
            className="flex justify-start pt-12 md:pt-16 md:gap-10"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <motion.div 
                className={`h-12 absolute left-3 md:left-3 w-12 rounded-full bg-white dark:bg-black flex items-center justify-center
                  ${activeIndex === index ? 'ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-black' : ''}`}
                whileHover={{ scale: 1.1 }}
              >
                <div className={`h-5 w-5 rounded-full transition-colors duration-300
                  ${activeIndex === index ? 'bg-blue-500' : 'bg-neutral-200 dark:bg-neutral-800'}
                  border border-neutral-300 dark:border-neutral-700`} />
              </motion.div>
              <h3 className="hidden md:block text-xl md:pl-24 md:text-6xl font-bold 
                transition-colors duration-300
                text-neutral-400 dark:text-neutral-600">
                {item.title}
              </h3>
            </div>

            <motion.div 
              className="relative pl-20 pr-4 md:pl-4 w-full bg-white dark:bg-neutral-900 rounded-lg p-6 shadow-lg
                hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}
            </motion.div>
          </motion.div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[3px] bg-gradient-to-b from-transparent via-neutral-200 dark:via-neutral-700 to-transparent"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-full bg-gradient-to-t from-blue-500 to-purple-500"
          />
        </div>
      </div>
    </div>
  );
};
