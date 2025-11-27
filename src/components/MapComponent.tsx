import { MapPin } from "lucide-react";

export const MapComponent = () => {
  return (
    <div className="relative w-full h-full bg-neutral-100 dark:bg-neutral-800 rounded-xl overflow-hidden flex items-center justify-center">
      {/* Abstract Map Background */}
      <div className="absolute inset-0 opacity-20">
         <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 0 L100 0 L100 100 L0 100 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <path d="M20 0 L20 100" stroke="currentColor" strokeWidth="0.5" />
            <path d="M40 0 L40 100" stroke="currentColor" strokeWidth="0.5" />
            <path d="M60 0 L60 100" stroke="currentColor" strokeWidth="0.5" />
            <path d="M80 0 L80 100" stroke="currentColor" strokeWidth="0.5" />
            <path d="M0 20 L100 20" stroke="currentColor" strokeWidth="0.5" />
            <path d="M0 40 L100 40" stroke="currentColor" strokeWidth="0.5" />
            <path d="M0 60 L100 60" stroke="currentColor" strokeWidth="0.5" />
            <path d="M0 80 L100 80" stroke="currentColor" strokeWidth="0.5" />
         </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="relative">
            <div className="absolute -inset-1 bg-blue-500/30 rounded-full animate-ping" />
            <MapPin className="w-8 h-8 text-blue-600 dark:text-blue-400 relative z-10" />
        </div>
        <h3 className="mt-2 font-bold text-neutral-800 dark:text-neutral-200">
          Mumbai, India
        </h3>
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          Open to Remote
        </p>
      </div>
    </div>
  );
};
