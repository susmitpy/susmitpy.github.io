"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

interface Node {
  id: string;
  label: string;
  description: string;
  metrics: string;
  x: number;
  y: number;
  icon: string;
  color: string;
}

interface Edge {
  from: string;
  to: string;
  label?: string;
}

const nodes: Node[] = [
  {
    id: "producer",
    label: "Producer",
    description: "Event Generator",
    metrics: "10k events/sec",
    x: 5,
    y: 50,
    icon: "⚡",
    color: "#6366f1",
  },
  {
    id: "kafka",
    label: "Kafka",
    description: "Message Broker",
    metrics: "50k msgs/sec throughput",
    x: 28,
    y: 50,
    icon: "◈",
    color: "#6366f1",
  },
  {
    id: "flink",
    label: "Flink",
    description: "Stream Processor",
    metrics: "Real-time aggregation",
    x: 52,
    y: 50,
    icon: "△",
    color: "#818cf8",
  },
  {
    id: "neo4j",
    label: "Neo4j",
    description: "Graph Database",
    metrics: "1M+ nodes traversal",
    x: 76,
    y: 30,
    icon: "◉",
    color: "#a78bfa",
  },
  {
    id: "postgres",
    label: "PostgreSQL",
    description: "Analytics Store",
    metrics: "OLAP queries",
    x: 76,
    y: 70,
    icon: "▣",
    color: "#c4b5fd",
  },
];

const edges: Edge[] = [
  { from: "producer", to: "kafka", label: "events" },
  { from: "kafka", to: "flink", label: "stream" },
  { from: "flink", to: "neo4j", label: "graph" },
  { from: "flink", to: "postgres", label: "metrics" },
];

interface Particle {
  id: number;
  edgeIndex: number;
  progress: number;
}

export const ArchitectureLab = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [particleId, setParticleId] = useState(0);

  const spawnParticle = useCallback(() => {
    const newParticle: Particle = {
      id: particleId,
      edgeIndex: 0,
      progress: 0,
    };
    setParticleId((prev) => prev + 1);
    setParticles((prev) => [...prev.slice(-15), newParticle]);
  }, [particleId]);

  useEffect(() => {
    const interval = setInterval(spawnParticle, 800);
    return () => clearInterval(interval);
  }, [spawnParticle]);

  useEffect(() => {
    const animationFrame = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => {
            const newProgress = p.progress + 0.02;
            if (newProgress >= 1) {
              if (p.edgeIndex < edges.length - 1) {
                // Handle fork at Flink
                if (p.edgeIndex === 1) {
                  return {
                    ...p,
                    edgeIndex: Math.random() > 0.5 ? 2 : 3,
                    progress: 0,
                  };
                }
                return { ...p, edgeIndex: p.edgeIndex + 1, progress: 0 };
              }
              return null;
            }
            return { ...p, progress: newProgress };
          })
          .filter(Boolean) as Particle[]
      );
    }, 30);
    return () => clearInterval(animationFrame);
  }, []);

  const getNodePosition = (id: string) => {
    const node = nodes.find((n) => n.id === id);
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
  };

  const getParticlePosition = (particle: Particle) => {
    const edge = edges[particle.edgeIndex];
    if (!edge) return { x: 0, y: 0 };

    const from = getNodePosition(edge.from);
    const to = getNodePosition(edge.to);

    return {
      x: from.x + (to.x - from.x) * particle.progress,
      y: from.y + (to.y - from.y) * particle.progress,
    };
  };

  const isNodeHighlighted = (nodeId: string) => {
    if (!activeNode) return false;
    const connectedEdges = edges.filter(
      (e) => e.from === activeNode || e.to === activeNode
    );
    return (
      nodeId === activeNode ||
      connectedEdges.some((e) => e.from === nodeId || e.to === nodeId)
    );
  };

  const isEdgeHighlighted = (edge: Edge) => {
    if (!activeNode) return false;
    return edge.from === activeNode || edge.to === activeNode;
  };

  return (
    <div className="relative w-full h-full min-h-[280px] bg-obsidian-900 rounded-xl overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Header */}
      <div className="absolute top-4 left-4 z-20">
        <h3 className="text-sm font-mono font-bold text-white/90 tracking-wide">
          ARCHITECTURE LAB
        </h3>
        <p className="text-xs text-white/40 mt-1">
          Click nodes to explore the pipeline
        </p>
      </div>

      {/* SVG for edges */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
        <defs>
          <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(99, 102, 241, 0.3)" />
            <stop offset="100%" stopColor="rgba(167, 139, 250, 0.3)" />
          </linearGradient>
          <linearGradient
            id="edgeGradientActive"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="rgba(99, 102, 241, 0.8)" />
            <stop offset="100%" stopColor="rgba(167, 139, 250, 0.8)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Draw edges */}
        {edges.map((edge, idx) => {
          const from = getNodePosition(edge.from);
          const to = getNodePosition(edge.to);
          const isActive = isEdgeHighlighted(edge);

          return (
            <g key={idx}>
              <line
                x1={`${from.x + 6}%`}
                y1={`${from.y}%`}
                x2={`${to.x - 6}%`}
                y2={`${to.y}%`}
                stroke={isActive ? "url(#edgeGradientActive)" : "url(#edgeGradient)"}
                strokeWidth={isActive ? 2 : 1}
                strokeDasharray={isActive ? "none" : "4,4"}
                filter={isActive ? "url(#glow)" : "none"}
                className="transition-all duration-300"
              />
            </g>
          );
        })}
      </svg>

      {/* Particles */}
      {particles.map((particle) => {
        const pos = getParticlePosition(particle);
        return (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              transform: "translate(-50%, -50%)",
              zIndex: 5,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          />
        );
      })}

      {/* Nodes */}
      {nodes.map((node) => {
        const isActive = activeNode === node.id;
        const isHighlighted = isNodeHighlighted(node.id);

        return (
          <motion.div
            key={node.id}
            className={`absolute cursor-pointer group`}
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: "translate(-50%, -50%)",
              zIndex: 10,
            }}
            onClick={() => setActiveNode(isActive ? null : node.id)}
          >
            {/* Node circle */}
            <div
              className={`relative w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                isActive || isHighlighted
                  ? "bg-obsidian-700 shadow-glow-lg"
                  : "bg-obsidian-800 hover:bg-obsidian-700"
              }`}
              style={{
                border: `1px solid ${
                  isActive
                    ? node.color
                    : isHighlighted
                    ? `${node.color}66`
                    : "rgba(255,255,255,0.1)"
                }`,
                boxShadow: isActive
                  ? `0 0 30px ${node.color}40`
                  : "none",
              }}
            >
              <span
                className="text-xl"
                style={{ color: isActive ? node.color : "#a3a3a3" }}
              >
                {node.icon}
              </span>
            </div>

            {/* Label */}
            <div
              className={`absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-300 ${
                isActive ? "text-white" : "text-white/50"
              }`}
            >
              <span className="text-xs font-mono font-medium">{node.label}</span>
            </div>

            {/* Tooltip */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  className="absolute left-1/2 -translate-x-1/2 -top-24 w-48 p-3 bg-obsidian-800 rounded-lg border border-white/10 shadow-xl z-50"
                  style={{ borderColor: `${node.color}40` }}
                >
                  <div
                    className="text-xs font-mono font-bold mb-1"
                    style={{ color: node.color }}
                  >
                    {node.label}
                  </div>
                  <div className="text-xs text-white/70 mb-2">
                    {node.description}
                  </div>
                  <div className="text-xs font-mono text-white/40 border-t border-white/10 pt-2">
                    {node.metrics}
                  </div>
                  {/* Arrow */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-3 h-3 rotate-45 bg-obsidian-800"
                    style={{ borderRight: `1px solid ${node.color}40`, borderBottom: `1px solid ${node.color}40` }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}

      {/* Legend */}
      <div className="absolute bottom-4 right-4 flex items-center gap-3 z-20">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          <span className="text-[10px] text-white/40 font-mono">Data Flow</span>
        </div>
      </div>
    </div>
  );
};
