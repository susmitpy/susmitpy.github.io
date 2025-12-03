"use client";

import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

interface MermaidProps {
  chart: string;
  className?: string;
}

// Singleton initialization tracker
const MermaidInitializer = (() => {
  let initialized = false;
  
  return {
    isInitialized: () => initialized,
    initialize: () => {
      if (!initialized) {
        mermaid.initialize({
          startOnLoad: false,
          theme: "dark",
          themeVariables: {
            primaryColor: "#6366f1",
            primaryTextColor: "#e0e7ff",
            primaryBorderColor: "#818cf8",
            lineColor: "#818cf8",
            secondaryColor: "#8b5cf6",
            tertiaryColor: "#1e293b",
            background: "#0f172a",
            mainBkg: "#1e293b",
            secondBkg: "#0f172a",
            textColor: "#e0e7ff",
            border1: "#475569",
            border2: "#334155",
            arrowheadColor: "#818cf8",
            fontFamily: "ui-monospace, monospace",
            fontSize: "14px",
          },
          flowchart: {
            curve: "basis",
            padding: 20,
          },
        });
        initialized = true;
      }
    },
  };
})();

export const Mermaid = ({ chart, className = "" }: MermaidProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!chart) return;

    const renderDiagram = async () => {
      setIsLoading(true);
      try {
        // Initialize mermaid once using singleton pattern
        MermaidInitializer.initialize();

        // Use slice instead of deprecated substr
        const id = `mermaid-${Math.random().toString(36).slice(2, 11)}`;
        const { svg: generatedSvg } = await mermaid.render(id, chart);
        
        // Set the SVG content via state
        setSvg(generatedSvg);
        setIsLoading(false);
      } catch (error) {
        console.error("Error rendering mermaid diagram:", error);
        setIsLoading(false);
      }
    };

    renderDiagram();
  }, [chart]);

  if (isLoading && !svg) {
    return (
      <div ref={containerRef} className={`${className} opacity-50 transition-opacity`}>
        <div className="text-white/40 text-sm">Loading diagram...</div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef} 
      className={`${className} opacity-100 transition-opacity`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};
