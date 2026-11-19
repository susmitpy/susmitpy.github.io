"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Bot,
  GitBranch,
  Layers,
  Search,
  Workflow,
  Github,
  PlayCircle,
  ExternalLink,
  Rocket,
  Plug,
} from "lucide-react";
import { AgenticData } from "@/lib/data";
import { StatCard, type Tone } from "./StatCard";
import { DiagramCard } from "./DiagramCard";
import {
  RUN_CHART,
  SELECTOR_CHART,
  TOPOLOGY_CHART,
  DELIVERY_CHART,
  MONITOR_CHART,
  MEMORY_CHART,
  NOTES_CHART,
  PARALLEL_CHART,
  TMUX_CHART,
  CONTEXT_CHART,
  REQUIREMENT_CHART,
  PROVENANCE_CHART,
  QA_CHART,
  RELEASE_CHART,
} from "./diagrams";

const BROW_REPO = "https://github.com/susmitpy/brow";
const BROW_DEMO = "https://youtu.be/-8JNMW7W0Es";
const BROW_DEMO_EMBED = "https://www.youtube-nocookie.com/embed/-8JNMW7W0Es";

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="space-y-8 scroll-mt-24">
      <h2 className="text-3xl font-bold text-white max-w-3xl">{title}</h2>
      {children}
    </section>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return <div className="space-y-4 text-lg text-gray-400 leading-relaxed max-w-3xl">{children}</div>;
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-gray-300 max-w-3xl">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <div className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((t) => (
        <span
          key={t}
          className="px-3 py-1.5 text-xs font-mono bg-white/[0.03] text-white/70 rounded-lg border border-white/10"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

const statIcons = [Layers, Workflow, Search, Github];
const statTones: Tone[] = ["blue", "indigo", "green", "amber"];

export function Hero() {
  return (
    <section className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-sm font-medium">
          <Bot className="w-4 h-4" />
          {AgenticData.eyebrow}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          {AgenticData.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed">{AgenticData.thesis}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {AgenticData.stats.map((s, i) => (
          <StatCard key={s.label} icon={statIcons[i]} label={s.label} value={s.value} tone={statTones[i]} />
        ))}
      </motion.div>
    </section>
  );
}

export function ContextSection() {
  return (
    <Section id="context" title="The Context">
      <Prose>
        <p>
          At SkillRev I am a full-stack developer on a client project: a property-tax management system for US
          counties. I first owned the tax part and later moved to the payment portal, a single codebase serving
          three states. The work is done as part of a team, not solo, and the autonomous tooling below was built
          with a teammate contributing.
        </p>
        <p>
          Development on this project is agentic with Claude Code. The stack is incidental to the workflow
          described here, but for reference:
        </p>
      </Prose>
      <Chips
        items={[
          "TypeScript",
          "Vue.js",
          "Node.js",
          "MongoDB",
          "Kubernetes (AKS)",
          "Azure Blob Storage",
          "Azure DevOps",
          "Caddy",
        ]}
      />
      <Prose>
        <p>
          I act as an internal advocate for agentic development and implement and improve AI-led engineering
          workflows and tooling across projects. Everything below is internal tooling unless noted.
        </p>
      </Prose>
    </Section>
  );
}

export function OperatingModelSection() {
  return (
    <Section id="operating-model" title="From Assisted to Autonomous">
      <Prose>
        <p>
          The first version of this tooling wrapped workflow around a developer driving agents: a worktree and a
          Claude session per ticket, with sub-agents for each phase. It grew into a fleet of unattended agents.
          On a schedule, a cloud instance boots, picks the tickets worth doing, sets up an isolated environment for
          each, runs an orchestrator with specialist sub-agents, and shuts itself down. A person reviews the
          outcome, or, depending on task type, the pipeline has review built in.
        </p>
      </Prose>
      <DiagramCard
        title="scheduled-run.diagram"
        chart={RUN_CHART}
        description="Diagram: a scheduler boots the cloud instance. The run pulls the code, syncs the code graph and refreshes the PR-history corpus, then the LLM ticket selector picks tickets. Each ticket gets a worktree with the lowest unused port prefix and its infrastructure, then a requirement file with attachment text and a prior-art file. One orchestrator run starts per ticket. When a run finishes the ticket-ready hook runs and the instance is stopped; an error trap also stops it on failure, and optional steps are written so they can never trigger shutdown."
      />
    </Section>
  );
}

export function SelectorSection() {
  return (
    <Section id="selector" title="LLM Ticket Selector">
      <Prose>
        <p>
          The selector lists backlog and todo tickets for one user and filters out blacklisted tickets and tickets
          that already have a worktree, using the git worktree list as the authority. It sorts by due date and
          priority, then asks a CLI agent to pick one urgent anchor ticket plus up to N-1 independent tickets, with
          critical and high bugs ranked first. The agent is Claude or Codex, switchable with a single setting.
        </p>
        <p>
          Ticket content is treated as untrusted data, and tickets referenced by a selected ticket are fetched as
          context only.
        </p>
      </Prose>
      <DiagramCard
        title="ticket-selector.diagram"
        chart={SELECTOR_CHART}
        description="Diagram: backlog and todo tickets for one user are filtered to drop blacklisted tickets and those with an existing worktree, then sorted by due date and priority with critical and high bugs first. A CLI agent, Claude or Codex, treats ticket content as untrusted data and picks one urgent anchor plus up to N-1 independent tickets. Referenced tickets are supplied as context only."
      />
    </Section>
  );
}

export function FleetSection() {
  return (
    <Section id="fleet" title="Orchestrator and 10 Specialist Sub-agents">
      <Prose>
        <p>
          Each selected ticket gets one agent run in an auto mode, led by an orchestrator that delegates to ten
          specialists: planner, implement, reviewer, browser-tester, pre-pr-runner, bug-analyzer, data-detective,
          advisor, explorer and delivery. Launchers are provider-agnostic, for Claude and for Codex.
        </p>
        <p>
          Sub-agent depth is limited to 2 with constrained spawning rules, and scratch checkpoint files let an
          interrupted sub-agent resume instead of restart. The pre-PR runner executes lint, typecheck and the
          gates; these are resource heavy, so it takes a global lock and only one gate runs across all worktrees at
          a time. A plan lint script checks plans. The agents run inside an isolated box in a no-approvals mode.
        </p>
      </Prose>
      <DiagramCard
        title="sub-agent-topology.diagram"
        chart={TOPOLOGY_CHART}
        description="Diagram: an orchestrator agent delegates to ten specialist sub-agents: planner, implement, reviewer, browser-tester, pre-pr-runner, bug-analyzer, data-detective, advisor, explorer and delivery. Sub-agent depth is capped at 2. Scratch checkpoint files let interrupted agents resume, a global lock lets one pre-PR gate run at a time, and the memory MCP server is wired into the planner, advisor, implement, browser-tester and data-detective agents."
      />
    </Section>
  );
}

export function DeliverySection() {
  return (
    <Section id="delivery" title="Delivery Agent and Merge Policy">
      <Prose>
        <p>
          The delivery agent runs a PR preflight and checks for merge conflicts with git merge-tree. It resolves
          only strictly mechanical conflicts, by merging the target into the source and never by rebase or
          force-push, and hands intent-bearing conflicts back. It then re-runs the pre-PR gates.
        </p>
        <p>
          The merge policy depends on task type: some tickets auto-merge because review is built into the agent
          pipeline, and others get human review.
        </p>
      </Prose>
      <DiagramCard
        title="delivery-agent.diagram"
        chart={DELIVERY_CHART}
        description="Diagram: after a PR preflight, a merge-conflict check runs. No conflicts goes straight to the pre-PR gates; strictly mechanical conflicts are resolved by merging the target into the source and then gates re-run; intent-bearing conflicts are handed back. The result is a pull request that is auto-merged when review is built into the pipeline for that task type, or sent to human review."
      />
    </Section>
  );
}

export function ParallelismSection() {
  return (
    <Section id="parallelism" title="Worktree per Ticket">
      <Prose>
        <p>
          One git worktree per ticket, created with the lowest unused port prefix (1 to 7), each with its own
          docker-compose and infrastructure. The Caddy port is injected dynamically into the environment file, so
          several tickets run side by side in the local frontend.
        </p>
      </Prose>
      <DiagramCard
        title="worktrees.diagram"
        chart={PARALLEL_CHART}
        description="Diagram: one repository fans out into one worktree per ticket. Each worktree runs its own docker-compose with Caddy on a distinct port prefix, paired with its own agent run."
      />
      <Prose>
        <p>
          For hands-on work the dev environment is tmux with one session per worktree and four panes. A small CLI
          opens that layout and manages worktrees.
        </p>
      </Prose>
      <DiagramCard
        title="tmux-layout.diagram"
        chart={TMUX_CHART}
        description="Diagram: each tmux session has four panes: a shell; Claude Code; Claude Code with a custom Agents.md; and neovim with lazygit. A small CLI opens this layout and manages worktrees."
      />
    </Section>
  );
}

export function ContextEngineeringSection() {
  return (
    <Section id="context-engineering" title="Context Engineering and Memory">
      <Prose>
        <p>
          The PR-history tool normalises Azure DevOps PRs and ticket history into a shared Postgres database,
          with commits, changed files, discussions and PR-to-ticket links. Search uses a hand-written BM25 scorer.
          Ranking evidence, git evidence and ticket-link evidence are kept separate from inference notes, and an
          explain command gives code provenance for a file and line. The most recent PRs are re-ingested on every
          run.
        </p>
        <p>
          Retrieval quality is measured, not assumed: eval commands cover ticket search (with ablation and
          title-weight experiments) and related tickets. The prior-art file this produces goes to the orchestrator
          along with the requirement file; if a ticket mentions another ticket id, that description is fetched too.
        </p>
      </Prose>
      <DiagramCard
        title="pr-history.diagram"
        chart={CONTEXT_CHART}
        description="Diagram: the ticket portal and Azure DevOps PRs are synced incrementally into a shared Postgres corpus. The current ticket description is searched with a hand-written BM25 scorer; ranking, git and ticket-link evidence stay separate from inference notes and are written to a prior-art markdown file, which goes to the orchestrator with the requirement file. Retrieval evals with ablation measure search quality."
      />
      <Prose>
        <p>
          Requirement assembly fetches the ticket title, description and comments into one markdown file and
          downloads the attachments. PDFs go through the doc-extract MCP server (PDF text plus OCR for images),
          images go through OCR, and everything is appended. doc-extract is read-only, with typed errors and
          path, type and size guardrails, and is enabled for several agents under both the Claude and Codex
          launchers.
        </p>
      </Prose>
      <DiagramCard
        title="requirement-assembly.diagram"
        chart={REQUIREMENT_CHART}
        description="Diagram: the ticket title, description and comments become one requirement markdown file. Downloaded attachments are routed by type: PDFs through the doc-extract MCP server (text extraction and OCR for images) and images through OCR, with the output appended to the requirement file."
      />
      <Prose>
        <p>
          Agent memory is a Qdrant-backed service exposed over MCP: search, create, update and merge memories,
          secret-aware storage, per-agent ids, and tools to record when a memory was used and what the outcome was,
          so the memory lifecycle is tracked. It is seeded for the county project and wired into the planner,
          advisor, implement, browser-tester and data-detective agents.
        </p>
      </Prose>
      <DiagramCard
        title="agent-memory.diagram"
        chart={MEMORY_CHART}
        description="Diagram: an agent with its own id searches, creates, updates and merges memories through a memory MCP server backed by a vector store, and records memory use and memory outcome back to the server."
      />
    </Section>
  );
}

export function ProvenanceSection() {
  return (
    <Section id="provenance" title="Code Provenance">
      <Prose>
        <p>
          A skill plus a script that takes agents from code to git commit, to the PR that introduced it (PRs are
          squash merged), to the ticket id, and finally to the ticket description. Agents can learn the origin and
          intent of code instead of guessing from the code alone.
        </p>
      </Prose>
      <DiagramCard
        title="provenance.diagram"
        chart={PROVENANCE_CHART}
        description="Diagram: a line of code maps to its git commit, then to the squash-merged PR that introduced it, then to the ticket id and the ticket description, giving the agent the origin and intent of the code."
      />
    </Section>
  );
}

export function QaSection() {
  return (
    <Section id="qa-agent" title="QA Agent and brow">
      <Prose>
        <p>
          The QA agent records video of its testing, splits it into chapters and adds audio narration, producing
          a narrated evidence video. A small part is open source as{" "}
          <Link href={BROW_REPO} target="_blank" className="text-indigo-300 hover:text-indigo-200 underline">
            brow
          </Link>
          , which works against any deployed URL. The internal version also has access to the codebase.
        </p>
      </Prose>
      <DiagramCard
        title="qa-agent.diagram"
        chart={QA_CHART}
        description="Diagram: the QA agent tests the application while recording video, the recording is split into chapters, audio narration is added, and the result is a narrated evidence video."
      />
      <div className="space-y-3">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/[0.1] bg-black">
          <iframe
            src={BROW_DEMO_EMBED}
            title="brow demo video"
            loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link
          href={BROW_REPO}
          target="_blank"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] transition-all"
        >
          <Github className="w-4 h-4" />
          brow on GitHub
        </Link>
        <Link
          href={BROW_DEMO}
          target="_blank"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] transition-all"
        >
          <PlayCircle className="w-4 h-4" />
          Demo video
        </Link>
      </div>
    </Section>
  );
}

export function OperationsSection() {
  return (
    <Section id="operations" title="Keeping the Fleet Running">
      <Prose>
        <p>
          When an agent run finishes, a ticket-ready hook verifies the outcome report, syncs agent files to main,
          prunes and merges QA videos, tears down docker, logs, and marks the ticket inactive for the stall monitor
          (a set, not a toggle, so it is idempotent).
        </p>
        <p>
          The stall monitor is a Python app that reads SQLite and transcript data. It sweeps tickets, auto-heals
          stalled sessions and tracks active or inactive state per ticket. Its dashboard prices tokens per thread,
          so cost is visible per conversation.
        </p>
        <p>
          The PA supervisor is an always-on headless Claude session on the box, which I use from my phone over
          remote control. It reads the fleet through an ops MCP server (fleet status and ticket activity) and a
          CLI, under a strict policy of read-only actions versus actions that need asking first.
        </p>
      </Prose>
      <DiagramCard
        title="fleet-operations.diagram"
        chart={MONITOR_CHART}
        description="Diagram: the stall monitor sweeps agent sessions and transcripts, auto-heals stalled ones and feeds a dashboard with per-ticket state and token cost per thread. The ticket-ready hook marks tickets inactive. A PA supervisor session, reachable from a phone over remote control, reads fleet status and ticket activity through an ops MCP server."
      />
    </Section>
  );
}

export function PlatformSection() {
  const cards = [
    {
      icon: Layers,
      title: "Team ticket portal",
      body: "The team uses its own project-management portal with custom views, added functionality, a Slack integration and an MCP server, so agents work against the same tickets people do. I contributed heavily to it as part of the team.",
    },
    {
      icon: GitBranch,
      title: "Dependency graph and Up for Grabs",
      body: "I proposed using the existing blocks and blocked-by ticket links to build a dependency graph view and an Up for Grabs list, so it is easy to see which ticket to pick first.",
    },
    {
      icon: Search,
      title: "Supporting tools",
      body: "A code graph used by the planner, a ticket blacklist CLI, a worktree CLI (list, doctor, delete, toggle active, sync auth) and a reproducible dev environment with tool install scripts.",
    },
    {
      icon: Workflow,
      title: "Standup generator",
      body: "A Python script pulls my tickets (working on, worked on), completed tasks and Azure DevOps PRs for a date, links PRs to tickets, adds PRs not tied to tickets, and writes a Slack rich-text standup with hyperlinks, split into done and planned. It started on Asana and was extended to the team ticket portal.",
    },
  ];
  return (
    <Section id="platform" title="Platform Glue">
      <div className="grid md:grid-cols-2 gap-4">
        {cards.map((c) => (
          <div key={c.title} className="p-5 bg-white/[0.02] rounded-xl border border-white/[0.05] space-y-2">
            <div className="flex items-center gap-3 text-gray-100 font-semibold">
              <c.icon className="w-5 h-5 text-indigo-400" />
              {c.title}
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">{c.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function ReleaseSection() {
  return (
    <Section id="release" title="Release Automation">
      <Prose>
        <p>
          On a project that uses Asana, an Azure DevOps service hook fires on classic release pipeline stage
          completion and calls a Python Azure Function. The function validates a shared secret and filters by
          stage, then computes exactly which builds were newly deployed from the deployment history: the current
          deployment minus the previous successful one, which avoids release-ordering off-by-one errors.
        </p>
        <p>
          It resolves build to PR to the full PR description to every Asana task link in it (several per PR, in
          old and new URL formats). A UAT stage success moves tasks to UAT / Awaiting Deployment without completing
          them; a PROD stage success moves them to Deployed and marks them complete. The handler is idempotent, so
          duplicate backend and frontend hooks are safe. This used to be done by hand.
        </p>
      </Prose>
      <DiagramCard
        title="release-automation.diagram"
        chart={RELEASE_CHART}
        description="Diagram: an Azure DevOps service hook on stage completion calls a Python Azure Function that validates a shared secret and filters by stage, computes newly deployed builds as current minus previous successful deployment, follows build to PR to PR description to all Asana task links, then moves tasks to UAT / Awaiting Deployment on a UAT stage or to Deployed and complete on a PROD stage."
      />
      <Prose>
        <p>
          The release-notes generator is a separate Python script in a shared team scripts repository. It reads
          the backend and frontend release pipelines, maps builds to PRs to Asana tasks (title and assignee),
          handles multiple tickets per release, maps Asana assignees to Slack users and posts a Slack Block Kit
          direct message. It is configured per project, excludes blocked repositories per pipeline, and teammates
          run it following its README.
        </p>
      </Prose>
      <DiagramCard
        title="release-notes.diagram"
        chart={NOTES_CHART}
        description="Diagram: backend and frontend Azure DevOps releases yield builds, which map to PRs with full descriptions and then to Asana tasks with title and assignee, several per release. Assignees are mapped to Slack users and the result is posted as a Slack Block Kit direct message. Configuration is per project and blocked repositories are excluded."
      />
    </Section>
  );
}

export function LinksSection() {
  const links = [
    { href: BROW_REPO, label: "brow on GitHub", icon: Github },
    { href: BROW_DEMO, label: "brow demo video", icon: PlayCircle },
    { href: "https://github.com/susmitpy", label: "GitHub profile", icon: ExternalLink },
    { href: "/", label: "Back to portfolio", icon: Rocket },
  ];
  return (
    <Section id="links" title="Links">
      <div className="flex flex-wrap gap-3">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] transition-all"
          >
            <l.icon className="w-4 h-4" />
            {l.label}
          </Link>
        ))}
      </div>
    </Section>
  );
}
