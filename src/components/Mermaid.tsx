"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";

interface MermaidProps {
  chart: string;
  className?: string;
}

export const Mermaid = ({ chart, className = "" }: MermaidProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize mermaid with configuration
    mermaid.initialize({
      startOnLoad: true,
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

    if (ref.current) {
      // Clear any previous content
      ref.current.innerHTML = chart;
      
      // Render the mermaid diagram
      mermaid.contentLoaded();
    }
  }, [chart]);

  return <div ref={ref} className={className} />;
};
