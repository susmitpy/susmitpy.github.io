"use client";

import { CaseStudy } from "@/lib/data";
import { ArrowUpRight, Github, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Mermaid } from "./Mermaid";
import { useState } from "react";

// Architecture diagram snippets for each case study using Mermaid syntax
const architectureSnippets: Record<string, string> = {
  "Real-Time Click-Through Rate Analysis": `graph TB
    subgraph "Data Generation"
        Producer[Go Kafka Producer<br/>~5 impressions/sec<br/>25% click probability]
    end
    
    subgraph "Message Streaming - Kafka"
        ImpTopic[Impressions Topic]
        ClickTopic[Clicks Topic]
    end
    
    subgraph "Stream Processing - Apache Flink"
        ImpSource[Impression Source]
        ClickSource[Click Source]
        IntervalJoin[Interval Join<br/>15s window<br/>match on impr_id]
        TumblingWindow[Tumbling Window<br/>30s aggregation<br/>group by campaign_id]
        Calc[Calculate CTR<br/>clicks/impressions]
    end
    
    subgraph "Data Persistence"
        FileSink[File Sink<br/>Partitioned CSV]
        Output[./output/ctr_results]
    end
    
    subgraph "Orchestration"
        Docker[Docker Compose]
        Kafka[Kafka Broker]
        JobMgr[Flink JobManager]
        TaskMgr[Flink TaskManager]
    end
    
    Producer -->|impressions| ImpTopic
    Producer -->|clicks delayed<br/>up to 10s| ClickTopic
    
    ImpTopic --> ImpSource
    ClickTopic --> ClickSource
    
    ImpSource --> IntervalJoin
    ClickSource --> IntervalJoin
    IntervalJoin -->|matched events| TumblingWindow
    TumblingWindow --> Calc
    Calc --> FileSink
    FileSink --> Output
    
    Docker -.manages.- Kafka
    Docker -.manages.- JobMgr
    Docker -.manages.- TaskMgr
    
    style Producer fill:#4f46e5
    style FileSink fill:#10b981
    style IntervalJoin fill:#8b5cf6
    style Docker fill:#475569`,
  "Kong API Gateway with Observability": `graph TB
    subgraph "Client Layer"
        Client[Client Request]
    end
    
    subgraph "API Gateway - Kong"
        Kong[Kong Gateway]
        subgraph "Plugin Chain"
            JWT[JWT Plugin<br/>Authentication]
            OTEL[OpenTelemetry Plugin<br/>Tracing]
            Prom[Prometheus Plugin<br/>Metrics]
            Custom[Custom Lua Plugin<br/>Header Extraction]
        end
        Upstream[Dynamic Upstreams<br/>Load Balancing]
        Health[Health Checks<br/>Active & Passive]
    end
    
    subgraph "Backend Services"
        Auth[Auth Service<br/>FastAPI + JWT]
        Sound[Sound Monitor Service<br/>FastAPI]
    end
    
    subgraph "Observability Stack"
        OTELCol[OpenTelemetry<br/>Collector]
        OpenObs[OpenObserve<br/>Logs, Traces, Metrics]
    end
    
    subgraph "Data Layer"
        PG[(PostgreSQL<br/>Kong Config)]
    end
    
    Client --> Kong
    Kong --> JWT --> OTEL --> Prom --> Custom
    Custom --> Upstream
    Upstream --> Health
    Health -.monitors.- Auth
    Health -.monitors.- Sound
    Upstream -->|route /auth| Auth
    Upstream -->|route /monitor| Sound
    
    Kong --> OTELCol
    Auth --> OTELCol
    Sound --> OTELCol
    OTELCol --> OpenObs
    
    Kong -.reads config.- PG
    
    style Kong fill:#4f46e5
    style OTELCol fill:#8b5cf6
    style OpenObs fill:#10b981
    style Auth fill:#0ea5e9
    style Sound fill:#0ea5e9`,
  "QnA on Knowledge Graph": `graph TB
    subgraph "User Interface"
        Query[User Query<br/>Natural Language]
    end
    
    subgraph "RAG Pipeline - Step 1: Vector Search"
        Embed1[Query Embedding<br/>LLM]
        VectorSearch[Vector Similarity Search<br/>Neo4j Vector Index]
        RelevantData[Relevant Nodes &<br/>Relationships]
    end
    
    subgraph "RAG Pipeline - Step 2: Cypher Generation"
        Context[Build Context<br/>from Entities]
        LLM1[LLM<br/>Ollama/GitHub Models]
        CypherQuery[Generated<br/>Cypher Query]
    end
    
    subgraph "RAG Pipeline - Step 3: Query Execution"
        Neo4jExec[Execute Cypher<br/>against Neo4j]
        ResultData[Retrieved Data<br/>from Graph]
    end
    
    subgraph "RAG Pipeline - Step 4: Answer Generation"
        LLM2[LLM<br/>Final Answer Generation]
        Answer[Natural Language<br/>Answer]
    end
    
    subgraph "Knowledge Graph - Neo4j"
        KG[(Neo4j Database<br/>Nodes & Relationships)]
        Embeddings[Vector Embeddings<br/>stored in Neo4j]
        Indexes[Vector Indexes]
    end
    
    Query --> Embed1
    Embed1 --> VectorSearch
    VectorSearch -.queries.- Embeddings
    VectorSearch -.uses.- Indexes
    VectorSearch --> RelevantData
    
    RelevantData --> Context
    Context --> LLM1
    LLM1 --> CypherQuery
    
    CypherQuery --> Neo4jExec
    Neo4jExec -.executes.- KG
    Neo4jExec --> ResultData
    
    ResultData --> LLM2
    Query -.provides context.- LLM2
    LLM2 --> Answer
    
    style Query fill:#4f46e5
    style VectorSearch fill:#8b5cf6
    style LLM1 fill:#f59e0b
    style Neo4jExec fill:#10b981
    style LLM2 fill:#f59e0b
    style Answer fill:#10b981`,
};

export const FeaturedWork = ({ caseStudy, index = 0 }: { caseStudy: CaseStudy; index?: number }) => {
  const isReversed = index % 2 === 1;
  const snippet = architectureSnippets[caseStudy.title] || "";
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} gap-8 p-6 md:p-8 bg-obsidian-900 rounded-2xl border border-white/[0.05] hover:border-indigo-500/20 transition-all duration-300 group`}
    >
      {/* Content Side */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-mono font-medium bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20">
              Case Study
            </span>
            <span className="px-3 py-1 text-xs font-mono text-white/40 rounded-full border border-white/10">
              #{String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 font-mono tracking-tight">
            {caseStudy.title}
          </h3>

          {/* Problem / Solution / Impact */}
          <div className="space-y-5">
            <div className="group/section">
              <h4 className="text-xs font-mono font-semibold text-indigo-400/80 uppercase tracking-wider mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                The Challenge
              </h4>
              <p className="text-white/60 text-sm leading-relaxed pl-3.5">
                {caseStudy.problem}
              </p>
            </div>

            <div className="group/section">
              <h4 className="text-xs font-mono font-semibold text-violet-400/80 uppercase tracking-wider mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
                The Solution
              </h4>
              <p className="text-white/60 text-sm leading-relaxed pl-3.5">
                {caseStudy.solution}
              </p>
            </div>

            <div className="group/section">
              <h4 className="text-xs font-mono font-semibold text-green-400/80 uppercase tracking-wider mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                Impact
              </h4>
              <p className="text-white/60 text-sm leading-relaxed pl-3.5">
                {caseStudy.impact}
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div className="mt-8">
          <div className="flex flex-wrap gap-2">
            {caseStudy.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs font-mono bg-white/[0.03] text-white/70 rounded-lg border border-white/10 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 flex items-center gap-4">
          <Link
            href={caseStudy.repoLink}
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-mono font-medium text-white bg-white/5 rounded-lg border border-white/10 hover:border-indigo-500/30 hover:bg-indigo-500/10 transition-all duration-200 group/btn"
          >
            <Github className="w-4 h-4" />
            View Source
            <ArrowUpRight className="w-3 h-3 opacity-50 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
          </Link>

          {/* Mobile toggle button for architecture diagram */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="md:hidden inline-flex items-center gap-2 px-4 py-2 text-sm font-mono font-medium text-white bg-white/5 rounded-lg border border-white/10 hover:border-indigo-500/30 hover:bg-indigo-500/10 transition-all duration-200"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Hide Architecture
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                Show Architecture
              </>
            )}
          </button>
        </div>

        {/* Mobile Architecture Diagram - Collapsible */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-6 bg-obsidian-800/50 rounded-xl p-6 relative overflow-hidden border border-white/[0.03]"
            >
              {/* Grid pattern */}
              <div className="absolute inset-0 bg-grid-pattern opacity-20" />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-violet-500/5" />

              {/* Code/Diagram display */}
              <div className="relative z-10 w-full">
                <div className="bg-obsidian-900/80 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden">
                  {/* Terminal header */}
                  <div className="flex items-center gap-2 px-4 py-2 border-b border-white/5 bg-black/20">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                    <span className="text-[10px] text-white/30 font-mono ml-2">
                      architecture.diagram
                    </span>
                  </div>

                  {/* Diagram content */}
                  <div className="p-4 overflow-x-auto">
                    <Mermaid chart={snippet} className="mermaid-diagram min-w-[300px]" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Architecture Diagram Side - Desktop Only */}
      <div className="hidden md:flex flex-1 bg-obsidian-800/50 rounded-xl p-6 items-center justify-center min-h-full relative overflow-hidden border border-white/[0.03]">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-violet-500/5" />

        {/* Code/Diagram display */}
        <div className="relative z-10 w-full group-hover:scale-[1.02] transition-transform duration-300">
          <div className="bg-obsidian-900/80 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-2 border-b border-white/5 bg-black/20">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              <span className="text-[10px] text-white/30 font-mono ml-2">
                architecture.diagram
              </span>
            </div>

            {/* Diagram content */}
            <div className="p-4">
              <Mermaid chart={snippet} className="mermaid-diagram" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
