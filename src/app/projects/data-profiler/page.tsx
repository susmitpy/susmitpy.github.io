"use client";

import Link from "next/link";
import Image from "next/image";
import { prefix } from "@/lib/prefix";
import { motion } from "framer-motion";
import { ArrowLeft, Database, Code2, ShieldCheck, TerminalSquare, Server, Cpu } from "lucide-react";
import { Mermaid } from "@/components/Mermaid";
import { useEffect, useState } from "react";

const ARCHITECTURE_CHART = `
graph TD
    classDef default fill:#1e293b,stroke:#475569,stroke-width:2px,color:#e0e7ff;
    classDef core fill:#4f46e5,stroke:#818cf8,stroke-width:2px,color:#ffffff;
    classDef db fill:#0f172a,stroke:#3b82f6,stroke-width:2px,color:#93c5fd;
    
    PO[Profiler Orchestrator]:::core -->|Instantiates| AF[Adapter Factory]
    AF -->|Snowflake| S[Snowflake Adapter]:::db
    AF -->|Databricks| DB[Databricks Adapter]:::db
    AF -->|DuckDB| D[DuckDB Adapter]:::db
    AF -->|SQLite| SQ[SQLite Adapter]:::db
    
    S -->|Pushdown Aggregations| CS[(Checkpoint Store)]
    DB -->|Pushdown Aggregations| CS
    D -->|Pushdown Aggregations| CS
    SQ -->|Pushdown Aggregations| CS
`;

function TerminalAnimation() {
  const [lines, setLines] = useState<number>(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setLines((prev) => (prev < 8 ? prev + 1 : prev));
    }, 800);
    return () => clearInterval(timer);
  }, []);

  const terminalLines = [
    { text: "$ uv run python -m src.main --concurrency 4", color: "text-green-400 font-bold" },
    { text: "[INFO] Initializing Adapter Factory...", color: "text-blue-400" },
    { text: "[INFO] Connected to Snowflake Warehouse (COMPUTE_WH).", color: "text-gray-300" },
    { text: "[INFO] Discovered 10,000 tables. Starting concurrent engine...", color: "text-gray-300" },
    { text: "[WARN] CheckpointStore: found valid checkpoint. Resuming from table 9,999...", color: "text-yellow-400" },
    { text: "[INFO] Profiling table: PROD.PUBLIC.USERS...", color: "text-gray-300" },
    { text: "[SUCCESS] Profiling complete. Total errors: 0", color: "text-green-400 font-bold" },
    { text: "[INFO] Artifact saved to profiler_output.json (1.2MB)", color: "text-gray-300" },
  ];

  return (
    <div className="w-full bg-[#0d1117] rounded-xl border border-white/[0.1] shadow-2xl overflow-hidden font-mono text-sm">
      <div className="flex items-center px-4 py-3 border-b border-white/[0.1] bg-white/[0.02]">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="mx-auto text-xs text-gray-500">uv-profiler-run</div>
      </div>
      <div className="p-5 min-h-[260px] flex flex-col gap-2">
        {terminalLines.map((line, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={idx < lines ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className={`${line.color} ${idx >= lines ? "hidden" : "block"}`}
          >
            {line.text}
          </motion.div>
        ))}
        {lines >= 8 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="w-2 h-4 bg-gray-400 mt-1"
          />
        )}
      </div>
    </div>
  );
}

type Tone = "indigo" | "green" | "blue" | "amber";

interface StatCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  tone?: Tone;
}

function StatCard({ icon: Icon, label, value, tone = "indigo" }: StatCardProps) {
  const toneMap: Record<Tone, string> = {
    indigo: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    green: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    blue: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    amber: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  };
  return (
    <div className="flex flex-col gap-2 p-5 bg-white/[0.02] rounded-xl border border-white/[0.05]">
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg ${toneMap[tone]}`}>
          <Icon className="w-5 h-5" />
        </div>
        <span className="text-gray-400 text-sm font-medium">{label}</span>
      </div>
      <div className="text-2xl font-bold text-gray-100">{value}</div>
    </div>
  );
}

export default function DataProfilerPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-gray-200 selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#020617]/80 border-b border-white/[0.05]">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/susmitpy/Data-Profiler"
              target="_blank"
              className="px-4 py-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-sm font-medium transition-all"
            >
              View Repository
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-20 space-y-24">
        {/* Header Section */}
        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-sm font-medium">
              <Database className="w-4 h-4" />
              Data Engineering & Architecture
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Scalable Multi-Engine Data Profiler
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed">
              Producing deterministic, highly structured database intelligence to give AI agents the deep context they need to write perfect SQL.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl overflow-hidden border border-white/[0.05] bg-white/[0.02]"
          >
            <Image 
              src={`${prefix}/projects/data-profiler/hero.webp`}
              alt="Data Profiler"
              width={1600}
              height={900}
              className="w-full h-auto object-cover"
              unoptimized
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            <StatCard icon={Server} label="Supported Engines" value="4 (incl. Snowflake)" tone="blue" />
            <StatCard icon={Cpu} label="Execution Model" value="Concurrent" tone="indigo" />
            <StatCard icon={ShieldCheck} label="Test Coverage" value="77% (49 tests)" tone="green" />
            <StatCard icon={TerminalSquare} label="Tooling" value="uv, pydantic, ruff" tone="amber" />
          </motion.div>
        </section>

        {/* The Why (The Hook) */}
        <section className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <h2 className="text-3xl font-bold text-white">Why ?</h2>
            <div className="prose prose-invert prose-lg text-gray-400">
              <p>
                While building Aiden (an AI Data Engineer), we realized LLMs hallucinate SQL when they only see column names. They need to know that a <code className="text-indigo-300 bg-indigo-500/10 px-1 rounded">status</code> column only contains &apos;OPEN&apos; and &apos;CLOSED&apos;, or that a <code className="text-indigo-300 bg-indigo-500/10 px-1 rounded">revenue</code> column has no negative values.
              </p>
              <p>
                Every database speaks a different dialect. Snowflake uses <code className="text-indigo-300 bg-indigo-500/10 px-1 rounded">NUMBER(10,2)</code>, DuckDB uses <code className="text-indigo-300 bg-indigo-500/10 px-1 rounded">HUGEINT</code>. Fetching this at scale without crashing the warehouse is a massive engineering challenge. This profiler acts as the universal translator and orchestrator to pull this deep context reliably.
              </p>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-blue-500/20 blur-3xl rounded-full" />
            <div className="relative p-6 bg-white/[0.02] border border-white/[0.05] rounded-2xl space-y-4">
              <div className="flex gap-2 items-center text-sm font-semibold text-gray-300 mb-2">
                <Code2 className="w-4 h-4 text-indigo-400" />
                Problem Statement
              </div>
              <blockquote className="text-gray-400 italic border-l-2 border-indigo-500 pl-4">
                &quot;How do we extract statistical metadata (histograms, cardinality, null ratios) across completely different data warehouses without dealing with mismatched data types or timeout crashes on massive schemas?&quot;
              </blockquote>
            </div>
          </div>
        </section>

        {/* Highlight 1: The Architecture */}
        <section className="space-y-8">
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-white">Architecture & The Adapter Pattern</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              If tomorrow we need to support PostgreSQL or BigQuery, the core orchestrator doesn't change-we simply write a new Adapter. The Adapter Factory dynamically dispatches queries to the underlying engine while pushing heavy statistical aggregations directly down to the warehouse.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="bg-[#0f172a] border border-white/[0.1] rounded-2xl p-6 overflow-hidden">
              <Mermaid chart={ARCHITECTURE_CHART} />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/[0.1] shadow-xl">
              <div className="bg-[#1e293b] px-4 py-2 border-b border-white/[0.05] text-xs font-mono text-gray-400 flex items-center justify-between">
                <span>src/adapters/base.py</span>
                <span>python</span>
              </div>
              <pre className="p-6 bg-[#0d1117] overflow-x-auto text-sm leading-loose">
                <code className="flex flex-col text-gray-300">
                  <div><span className="text-pink-400">from</span> abc <span className="text-pink-400">import</span> ABC, abstractmethod</div>
                  <div><span className="text-pink-400">from</span> pydantic <span className="text-pink-400">import</span> BaseModel</div>
                  <div className="h-6"></div>
                  <div><span className="text-pink-400">class</span> <span className="text-yellow-200">DatabaseAdapter</span>(ABC):</div>
                  <div className="pl-4"><span className="text-blue-300">@abstractmethod</span></div>
                  <div className="pl-4"><span className="text-pink-400">def</span> <span className="text-blue-200">get_tables</span>(<span className="text-orange-300">self</span>, schema: <span className="text-emerald-300">str</span>) -&gt; <span className="text-emerald-300">list</span>[<span className="text-emerald-300">str</span>]:</div>
                  <div className="pl-8"><span className="text-pink-400">pass</span></div>
                  <div className="h-6"></div>
                  <div className="pl-4"><span className="text-blue-300">@abstractmethod</span></div>
                  <div className="pl-4"><span className="text-pink-400">def</span> <span className="text-blue-200">profile_column</span>(<span className="text-orange-300">self</span>, table: <span className="text-emerald-300">str</span>, col: <span className="text-emerald-300">str</span>) -&gt; <span className="text-emerald-300">dict</span>:</div>
                  <div className="pl-8"><span className="text-pink-400">pass</span></div>
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* Highlight 2: Resilience & Concurrency */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 rounded-2xl overflow-hidden border border-white/[0.1] shadow-xl">
            <div className="bg-[#1e293b] px-4 py-2 border-b border-white/[0.05] text-xs font-mono text-gray-400 flex items-center justify-between">
              <span>profiler_output.json</span>
              <span>json</span>
            </div>
            <pre className="p-6 bg-[#0d1117] overflow-x-auto text-sm leading-relaxed">
              <code className="flex flex-col">
                <div><span className="text-gray-400">&#123;</span></div>
                <div className="pl-4"><span className="text-blue-300">"table"</span>: <span className="text-green-300">"users"</span>,</div>
                <div className="pl-4"><span className="text-blue-300">"column"</span>: <span className="text-green-300">"status"</span>,</div>
                <div className="pl-4"><span className="text-indigo-400 font-bold bg-indigo-500/10 rounded px-1">"harmonized_type"</span>: <span className="text-green-300 font-bold bg-green-500/10 rounded px-1">"STRING"</span>,</div>
                <div className="pl-4"><span className="text-blue-300">"metrics"</span>: <span className="text-gray-400">&#123;</span></div>
                <div className="pl-8"><span className="text-blue-300">"null_ratio"</span>: <span className="text-orange-300">0.0</span>,</div>
                <div className="pl-8"><span className="text-blue-300">"approx_distinct_count"</span>: <span className="text-orange-300">2</span>,</div>
                <div className="pl-8"><span className="text-amber-400 font-bold bg-amber-500/10 rounded px-1">"histogram"</span>: <span className="text-gray-400">[</span></div>
                <div className="pl-12"><span className="text-gray-400">&#123;</span><span className="text-blue-300">"bucket"</span>: <span className="text-green-300">"OPEN"</span>, <span className="text-blue-300">"frequency"</span>: <span className="text-orange-300">8450</span><span className="text-gray-400">&#125;</span>,</div>
                <div className="pl-12"><span className="text-gray-400">&#123;</span><span className="text-blue-300">"bucket"</span>: <span className="text-green-300">"CLOSED"</span>, <span className="text-blue-300">"frequency"</span>: <span className="text-orange-300">1550</span><span className="text-gray-400">&#125;</span></div>
                <div className="pl-8"><span className="text-gray-400">]</span></div>
                <div className="pl-4"><span className="text-gray-400">&#125;</span></div>
                <div><span className="text-gray-400">&#125;</span></div>
              </code>
            </pre>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl font-bold text-white">Resilience & Context Harmonization</h2>
            <div className="prose prose-invert prose-lg text-gray-400">
              <p>
                Profiling 10,000 tables takes time. If the network drops at table 9,999, you shouldn't have to start over.
              </p>
              <p>
                The engine runs concurrent threads but strictly updates a <code className="text-indigo-300 bg-indigo-500/10 px-1 rounded">checkpoint.json</code> file, allowing it to seamlessly resume exactly where it left off.
              </p>
              <p>
                Notice the <code className="text-indigo-300 bg-indigo-500/10 px-1 rounded">harmonized_type</code> in the output artifact. It maps proprietary database types (like Snowflake's NUMBER) into a universal taxonomy, standardizing context for the downstream LLM agents.
              </p>
            </div>
          </div>
        </section>

        {/* Highlight 3: DevEx & Tooling */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-xl">
            <h2 className="text-3xl font-bold text-white">Production-Grade DevEx</h2>
            <div className="prose prose-invert prose-lg text-gray-400">
              <p>
                Tooling choices were made prioritizing speed, strict validation, and maintainability:
              </p>
              <ul className="space-y-2 mt-4 text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                  <span><strong>uv:</strong> Lightning-fast dependency management & virtual environments.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                  <span><strong>Pydantic v2:</strong> Strict data validation ensuring the output JSON always conforms to the expected schema.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                  <span><strong>Ruff & Pyright:</strong> Blazing fast linting and strict static typing.</span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <TerminalAnimation />
          </div>
        </section>

      </main>
    </div>
  );
}
