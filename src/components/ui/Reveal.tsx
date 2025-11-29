"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "full";
  delay?: number;
  className?: string;
}

export const Reveal = ({ 
  children, 
  width = "fit-content", 
  delay = 0,
  className = ""
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 20, filter: "blur(5px)" }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: "easeOut",
      }}
      style={{ width: width === "full" ? "100%" : "fit-content" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
