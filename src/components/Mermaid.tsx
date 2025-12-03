"use client";

import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

interface MermaidProps {
  chart: string;
  className?: string;
}

let mermaidInitialized = false;

export const Mermaid = ({ chart, className = "" }: MermaidProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");

  useEffect(() => {
    // Initialize mermaid once
    if (!mermaidInitialized) {
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
      mermaidInitialized = true;
    }

    const renderDiagram = async () => {
      if (chart && ref.current) {
        try {
          const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
          const { svg: generatedSvg } = await mermaid.render(id, chart);
          setSvg(generatedSvg);
        } catch (error) {
          console.error("Error rendering mermaid diagram:", error);
        }
      }
    };

    renderDiagram();
  }, [chart]);

  return (
    <div
      ref={ref}
      className={className}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};
