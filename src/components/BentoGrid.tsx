import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={cn(
        "row-span-1 rounded-xl group/bento transition-all duration-300",
        "p-4 bg-obsidian-900 border border-white/[0.05]",
        "hover:border-indigo-500/20 hover:shadow-glow",
        "flex flex-col space-y-4 overflow-hidden relative",
        className
      )}
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover/bento:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative z-10 flex-1">
        {header}
      </div>

      {(title || description) && (
        <div className="relative z-10 group-hover/bento:translate-x-1 transition-transform duration-200">
          {icon}
          {title && (
            <div className="font-mono font-bold text-white/90 mb-1 text-sm">
              {title}
            </div>
          )}
          {description && (
            <div className="font-sans font-normal text-white/50 text-xs">
              {description}
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};
