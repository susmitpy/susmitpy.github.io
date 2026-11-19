import type { Metadata } from "next";
import { PageNav } from "@/components/agentic/PageNav";
import {
  Hero,
  ContextSection,
  OperatingModelSection,
  SelectorSection,
  FleetSection,
  DeliverySection,
  OperationsSection,
  ParallelismSection,
  ContextEngineeringSection,
  ProvenanceSection,
  QaSection,
  PlatformSection,
  ReleaseSection,
  LinksSection,
} from "@/components/agentic/sections";

export const metadata: Metadata = {
  title: "Autonomous Agent Fleet | Susmit Vengurlekar",
  description:
    "An autonomous agent fleet built for a US county property-tax client project: scheduled unattended cloud runs, an LLM ticket selector, a worktree per ticket, an orchestrator with 10 specialist sub-agents, a delivery agent, a stall monitor, PR-history retrieval, agent memory over MCP and release automation.",
  openGraph: {
    title: "Autonomous Agent Fleet | Susmit Vengurlekar",
    description:
      "Scheduled unattended runs, LLM ticket selector, orchestrator with 10 sub-agents, delivery agent, PR-history retrieval, agent memory, QA agent (brow) and release automation.",
    type: "article",
  },
};

export default function AgenticWorkflowPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-gray-200 selection:bg-indigo-500/30">
      <PageNav action={{ href: "https://github.com/susmitpy/brow", label: "View brow" }} />
      <main className="max-w-5xl mx-auto px-6 py-12 md:py-20 space-y-24">
        <Hero />
        <ContextSection />
        <OperatingModelSection />
        <SelectorSection />
        <FleetSection />
        <DeliverySection />
        <ParallelismSection />
        <ContextEngineeringSection />
        <ProvenanceSection />
        <QaSection />
        <OperationsSection />
        <PlatformSection />
        <ReleaseSection />
        <LinksSection />
      </main>
    </div>
  );
}
