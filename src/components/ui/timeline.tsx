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
    <div className="w-full bg-[#2f2f2f] font-sans md:px-10 min-h-screen" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20 bg-[#2f2f2f]">
        {data.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={index}
            className="flex justify-start pt-12 md:pt-16 md:gap-10 border-b border-[#40E0D0]/20"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="relative">
                <motion.div
                  className={`h-12 absolute md:-left-6 w-12 rounded-full bg-[#2f2f2f] flex items-center justify-center ${activeIndex === index
                    ? "ring-2 ring-[#40E0D0] ring-offset-2 ring-offset-[#2f2f2f]"
                    : ""
                    }`}
                  whileHover={{ scale: 1.1, backgroundColor: "#40E0D0" }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className={`h-5 w-5 rounded-full transition-colors duration-300 ${activeIndex === index ? "bg-[#40E0D0]" : "bg-[#40E0D0]/30"
                      } border border-[#40E0D0]/50`}
                  />
                </motion.div>
              </div>
              <h3 className="hidden md:block text-2xl md:text-6xl font-bold text-white ml-12">
                {item.title}
              </h3>
            </div>

            <motion.div
              className="relative pl-20 pr-4 md:pl-4 w-full bg-[#2f2f2f] rounded-lg p-6
                                shadow-[0_0_15px_rgba(64,224,208,0.1)] hover:shadow-[0_0_20px_rgba(64,224,208,0.2)]
                                transition-all duration-300"
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(64, 224, 208, 0.05)",
              }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-white">
                {item.title}
              </h3>
              <div className="text-gray-300 font-regular">{item.content}</div>
            </motion.div>
          </motion.div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-[1.35rem] left-8 top-0 overflow-hidden w-[3px] bg-gradient-to-b from-transparent via-[#40E0D0]/30 to-transparent"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-full bg-gradient-to-t from-[#40E0D0] via-[#40E0D0] to-[#40E0D0]/50"
          />
        </div>
      </div>
    </div>
  );
};