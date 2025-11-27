"use client";

import { motion } from "framer-motion";
import { Database, Server, HardDrive } from "lucide-react";
import { useState } from "react";

export const PipelineVisualizer = () => {
  const [processing, setProcessing] = useState(false);

  const injectEvent = () => {
    if (processing) return;
    setProcessing(true);
    setTimeout(() => setProcessing(false), 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-4 bg-neutral-100 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
      <h3 className="text-lg font-bold text-neutral-700 dark:text-neutral-200 mb-4">
        Data Pipeline Lab
      </h3>
      
      <div className="flex items-center justify-between w-full max-w-md relative">
        {/* Source */}
        <div className="flex flex-col items-center z-10">
          <div className="p-3 bg-white dark:bg-neutral-800 rounded-full border border-neutral-200 dark:border-neutral-700 shadow-sm">
            <Server className="w-6 h-6 text-blue-500" />
          </div>
          <span className="text-xs mt-2 text-neutral-500">Source</span>
        </div>

        {/* Pipe */}
        <div className="flex-1 h-2 bg-neutral-200 dark:bg-neutral-700 mx-2 relative rounded-full overflow-hidden">
             {/* Particle */}
            {processing && (
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "400%" }}
                    transition={{ duration: 1.5, ease: "linear" }}
                    className="absolute top-0 left-0 h-full w-1/4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                />
            )}
        </div>

        {/* Stream Processing (Flink) */}
        <div className="flex flex-col items-center z-10">
             <div className={`p-3 bg-white dark:bg-neutral-800 rounded-full border border-neutral-200 dark:border-neutral-700 shadow-sm transition-colors duration-300 ${processing ? "border-purple-500 shadow-purple-500/20" : ""}`}>
                <Database className={`w-6 h-6 ${processing ? "text-purple-500" : "text-neutral-400"}`} />
            </div>
            <span className="text-xs mt-2 text-neutral-500">Stream</span>
        </div>

         {/* Pipe 2 */}
         <div className="flex-1 h-2 bg-neutral-200 dark:bg-neutral-700 mx-2 relative rounded-full overflow-hidden">
             {/* Particle 2 */}
            {processing && (
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "400%" }}
                    transition={{ duration: 1.5, delay: 0.75, ease: "linear" }}
                    className="absolute top-0 left-0 h-full w-1/4 bg-gradient-to-r from-purple-500 to-green-500 rounded-full"
                />
            )}
        </div>


        {/* Storage */}
        <div className="flex flex-col items-center z-10">
          <div className="p-3 bg-white dark:bg-neutral-800 rounded-full border border-neutral-200 dark:border-neutral-700 shadow-sm">
            <HardDrive className="w-6 h-6 text-green-500" />
          </div>
          <span className="text-xs mt-2 text-neutral-500">Storage</span>
        </div>
      </div>

      <button
        onClick={injectEvent}
        disabled={processing}
        className="mt-8 px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-md text-sm font-medium hover:opacity-90 disabled:opacity-50 transition-opacity"
      >
        {processing ? "Processing..." : "Inject Event"}
      </button>
    </div>
  );
};
