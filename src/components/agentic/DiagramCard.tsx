"use client";

import { Mermaid } from "@/components/Mermaid";

interface DiagramCardProps {
  title: string;
  chart: string;
  /** Plain-text description rendered under the diagram (client-rendered SVG is invisible to crawlers). */
  description: string;
}

export function DiagramCard({ title, chart, description }: DiagramCardProps) {
  return (
    <figure className="space-y-3">
      <div className="bg-[#0f172a] border border-white/[0.1] rounded-2xl overflow-hidden">
        <div className="bg-[#1e293b] px-4 py-2 border-b border-white/[0.05] text-xs font-mono text-gray-400">
          {title}
        </div>
        <div className="p-6 overflow-x-auto">
          <Mermaid chart={chart} className="mermaid-diagram min-w-[320px]" />
        </div>
      </div>
      <figcaption className="text-sm text-gray-400 leading-relaxed">{description}</figcaption>
    </figure>
  );
}
