// @ts-nocheck
"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ACCENT = "#34d399";
const CYAN = "#22d3ee";
const PURPLE = "#a78bfa";
const AMBER = "#fbbf24";
const EXPECTED_SLIDE_COUNT = 31;

function Badge({ children, tone = "advanced" }) {
  const styles = {
    advanced: "border-amber-300/40 bg-amber-300/10 text-amber-200",
    interactive: "border-cyan-300/40 bg-cyan-300/10 text-cyan-200",
    reference: "border-slate-300/30 bg-slate-300/10 text-slate-200",
    demo: "border-emerald-300/30 bg-emerald-300/10 text-emerald-200",
  };

  return (
    <div className={`rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.2em] ${styles[tone] || styles.advanced}`}>
      {children}
    </div>
  );
}

function Code({ children, small = false }) {
  return (
    <pre className={`overflow-auto whitespace-pre-wrap rounded-2xl border border-emerald-300/20 bg-black/60 p-5 font-mono text-emerald-100 shadow-2xl ${small ? "text-sm" : "text-lg"}`}>
      <code>{children}</code>
    </pre>
  );
}

function Callout({ title, children, tone = "emerald" }) {
  const toneMap = {
    emerald: "border-emerald-300/30 bg-emerald-300/10",
    amber: "border-amber-300/30 bg-amber-300/10",
    cyan: "border-cyan-300/30 bg-cyan-300/10",
    rose: "border-rose-300/30 bg-rose-300/10",
    purple: "border-purple-300/30 bg-purple-300/10",
  };

  return (
    <div className={`rounded-2xl border p-5 ${toneMap[tone] || toneMap.emerald}`}>
      <div className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">{title}</div>
      <div className="text-xl leading-relaxed text-slate-100">{children}</div>
    </div>
  );
}

function SlideShell({ title, subtitle, badge, children }) {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 p-10 text-white shadow-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(52,211,153,0.16),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(34,211,238,0.12),transparent_25%),radial-gradient(circle_at_55%_90%,rgba(167,139,250,0.12),transparent_30%)]" />
      <div
        className="absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />
      <div className="relative z-10 flex items-start justify-between gap-6">
        <div>
          <h1 className="max-w-5xl text-5xl font-black tracking-tight text-white">{title}</h1>
          {subtitle ? <p className="mt-3 max-w-4xl text-2xl leading-snug text-slate-300">{subtitle}</p> : null}
        </div>
        {badge ? <div className="flex gap-2">{badge}</div> : null}
      </div>
      <div className="relative z-10 mt-8 flex min-h-0 flex-1 flex-col justify-center">{children}</div>
    </div>
  );
}

function HeroVisual({ variant = "hero" }) {
  const captions = {
    hero: "SQL enters. Storage, visibility, locks, and WAL negotiate the truth.",
    detective: "The app asked for one row. PostgreSQL opened a crime investigation.",
    multiverse: "MVCC: everyone gets their own version of reality.",
    vacuum: "Vacuum will clean it up. Eventually.",
    closing: "A read-update is a negotiated path, not two simple operations.",
  };
  const caption = captions[variant] || captions.hero;
  const palette = variant === "vacuum" ? [AMBER, CYAN, PURPLE] : variant === "multiverse" ? [PURPLE, CYAN, ACCENT] : [ACCENT, CYAN, PURPLE];

  return (
    <div className="grid grid-cols-[1.1fr_0.9fr] items-center gap-10">
      <h2 className="text-6xl font-black leading-tight text-white">{caption}</h2>
      <svg viewBox="0 0 520 430" className="h-[430px] w-full rounded-3xl border border-white/10 bg-black/40 p-4 shadow-2xl" role="img" aria-label={caption}>
        <defs>
          <filter id={`glow-${variant}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect x="40" y="60" width="440" height="290" rx="38" fill="rgba(15,23,42,0.85)" stroke="rgba(255,255,255,0.18)" />
        <ellipse cx="260" cy="138" rx="145" ry="45" fill="rgba(52,211,153,0.12)" stroke={palette[0]} strokeWidth="3" filter={`url(#glow-${variant})`} />
        <path d="M115 138v126c0 25 65 45 145 45s145-20 145-45V138" fill="rgba(34,211,238,0.08)" stroke={palette[1]} strokeWidth="3" />
        <ellipse cx="260" cy="264" rx="145" ry="45" fill="rgba(167,139,250,0.12)" stroke={palette[2]} strokeWidth="3" />
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i} transform={`translate(${145 + i * 56}, ${185 + (i % 2) * 28})`}>
            <rect width="38" height="28" rx="7" fill="rgba(255,255,255,0.08)" stroke={palette[i % 3]} />
            <circle cx="12" cy="14" r="4" fill={palette[i % 3]} />
            <path d="M21 10h11M21 17h8" stroke="white" opacity="0.55" />
          </g>
        ))}
        {variant === "detective" ? (
          <g transform="translate(307 82)">
            <circle cx="45" cy="45" r="30" fill="none" stroke={AMBER} strokeWidth="8" />
            <path d="M66 66l40 40" stroke={AMBER} strokeWidth="10" strokeLinecap="round" />
            <text x="-10" y="140" fill="white" fontSize="18" fontWeight="800">WHERE name = ?</text>
          </g>
        ) : null}
        {variant === "multiverse" ? [0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${95 + i * 125}, 325)`}>
            <circle cx="42" cy="22" r="18" fill={palette[i]} opacity="0.75" />
            <rect x="14" y="42" width="58" height="46" rx="18" fill={palette[i]} opacity="0.35" />
            <text x="20" y="114" fill="white" fontSize="13">snapshot {i + 1}</text>
          </g>
        )) : null}
        {variant === "vacuum" ? (
          <g transform="translate(165 315)">
            <rect x="0" y="0" width="190" height="52" rx="26" fill="rgba(251,191,36,0.24)" stroke={AMBER} strokeWidth="3" />
            <circle cx="42" cy="54" r="13" fill={CYAN} />
            <circle cx="148" cy="54" r="13" fill={CYAN} />
            <text x="44" y="34" fill="white" fontSize="19" fontWeight="900">VACUUM</text>
          </g>
        ) : null}
        <path d="M70 385c80-30 160-30 240 0s130 25 170-10" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="3" strokeDasharray="10 12" />
      </svg>
    </div>
  );
}

function FlowDiagram() {
  const nodes = ["SQL", "Planner / Executor", "Indexes + Heap", "MVCC visibility", "WAL", "Cleanup later"];
  return (
    <div className="grid grid-cols-6 gap-3">
      {nodes.map((node, i) => (
        <div key={node} className="relative rounded-2xl border border-white/10 bg-white/5 p-5 text-center shadow-xl">
          <div className="text-3xl font-black text-emerald-300">{i + 1}</div>
          <div className="mt-3 text-lg font-semibold text-white">{node}</div>
          {i < nodes.length - 1 ? <div className="absolute -right-4 top-1/2 z-20 text-3xl text-cyan-300">→</div> : null}
        </div>
      ))}
    </div>
  );
}

function HeapScanVisual() {
  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="space-y-4">
        <Code>{`SELECT id, company\nFROM users\nWHERE name = 'susmit';`}</Code>
        <Callout title="Mental model" tone="cyan">Without a useful index, PostgreSQL may inspect heap pages and test row versions against the filter.</Callout>
      </div>
      <div className="grid grid-cols-4 gap-3 rounded-3xl border border-white/10 bg-black/40 p-6">
        {Array.from({ length: 24 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.2, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.015 }}
            className={`h-16 rounded-xl border p-2 ${i === 14 ? "border-emerald-300 bg-emerald-300/25" : "border-slate-600 bg-slate-800/70"}`}
          >
            <div className="h-2 w-1/2 rounded bg-white/30" />
            <div className="mt-2 h-2 w-3/4 rounded bg-white/20" />
            <div className="mt-2 h-2 w-2/3 rounded bg-white/10" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function PlannerToggle() {
  const modes = [
    { key: "none", label: "No index", steps: ["Heap scan", "Filter name", "Return id, company"], note: "Simple to reason about, expensive as table grows." },
    { key: "name", label: "Index(name)", steps: ["B-tree lookup", "Heap fetch", "Visibility check", "Return columns"], note: "Index narrows candidates, but heap is still involved." },
    { key: "cover", label: "Covering index", steps: ["B-tree lookup", "Visibility map", "Maybe skip heap", "Return from index"], note: "Fast when query columns are in index and visibility map cooperates." },
  ];
  const [mode, setMode] = useState("none");
  const current = modes.find((item) => item.key === mode) || modes[0];

  return (
    <div>
      <div className="mb-8 flex w-fit rounded-2xl border border-white/10 bg-black/50 p-1">
        {modes.map((item) => (
          <button
            type="button"
            key={item.key}
            onClick={() => setMode(item.key)}
            className={`rounded-xl px-5 py-3 text-lg font-bold transition ${mode === item.key ? "bg-emerald-300 text-slate-950" : "text-slate-300 hover:bg-white/10"}`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-[1fr_0.7fr] gap-8">
        <div className="flex items-center justify-between gap-4 rounded-3xl border border-white/10 bg-black/40 p-8">
          {current.steps.map((step, i) => (
            <React.Fragment key={`${current.key}-${step}`}>
              <motion.div layout className="rounded-2xl border border-cyan-300/30 bg-cyan-300/10 p-5 text-center text-xl font-bold text-white">{step}</motion.div>
              {i < current.steps.length - 1 ? <div className="text-3xl text-emerald-300">→</div> : null}
            </React.Fragment>
          ))}
        </div>
        <Callout title="What changed?" tone="emerald">{current.note}</Callout>
      </div>
    </div>
  );
}

function ToastDiagram() {
  return (
    <div className="grid grid-cols-[0.95fr_1.05fr] gap-8">
      <div className="space-y-5">
        <Code small>{`CREATE TABLE users (\n  id bigint PRIMARY KEY,\n  name text,\n  company text,\n  bio text,\n  profile jsonb\n);`}</Code>
        <Callout title="Key point" tone="amber">Having a large column on the table is not the same as selecting it. Selecting or filtering large values changes the cost profile.</Callout>
      </div>
      <svg viewBox="0 0 650 400" className="h-[400px] w-full rounded-3xl border border-white/10 bg-black/40 p-4" role="img" aria-label="TOAST diagram">
        <defs>
          <marker id="arrowToast" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
            <path d="M0,0 L0,6 L9,3 z" fill="white" />
          </marker>
        </defs>
        <rect x="40" y="55" width="260" height="270" rx="24" fill="rgba(52,211,153,0.1)" stroke={ACCENT} strokeWidth="3" />
        <text x="70" y="95" fill="white" fontSize="24" fontWeight="900">users heap tuple</text>
        {["id", "name", "company", "bio pointer", "profile pointer"].map((label, i) => (
          <g key={label} transform={`translate(70 ${125 + i * 36})`}>
            <rect width="185" height="24" rx="7" fill={i > 2 ? "rgba(251,191,36,0.22)" : "rgba(255,255,255,0.10)"} />
            <text x="12" y="17" fill="white" fontSize="15">{label}</text>
          </g>
        ))}
        <path d="M255 238 C360 220 375 135 455 135" stroke={AMBER} strokeWidth="4" fill="none" markerEnd="url(#arrowToast)" />
        <path d="M255 274 C355 295 390 280 455 260" stroke={CYAN} strokeWidth="4" fill="none" markerEnd="url(#arrowToast)" />
        <rect x="455" y="90" width="150" height="95" rx="18" fill="rgba(251,191,36,0.16)" stroke={AMBER} strokeWidth="3" />
        <text x="482" y="128" fill="white" fontSize="20" fontWeight="800">TOAST</text>
        <text x="482" y="154" fill="white" fontSize="14">bio chunks</text>
        <rect x="455" y="220" width="150" height="95" rx="18" fill="rgba(34,211,238,0.16)" stroke={CYAN} strokeWidth="3" />
        <text x="482" y="258" fill="white" fontSize="20" fontWeight="800">TOAST</text>
        <text x="482" y="284" fill="white" fontSize="14">jsonb chunks</text>
      </svg>
    </div>
  );
}

function VersionTimeline() {
  const versions = [
    { label: "v1", company: "oldco", state: "visible to older snapshots", tone: "cyan" },
    { label: "v2", company: "skillrev", state: "created by UPDATE", tone: "emerald" },
    { label: "dead later", company: "oldco", state: "cleanup candidate", tone: "rose" },
  ];

  return (
    <div className="grid grid-cols-3 gap-6">
      {versions.map((version, i) => (
        <div key={version.label} className={`rounded-3xl border p-7 ${version.tone === "emerald" ? "border-emerald-300/40 bg-emerald-300/10" : version.tone === "rose" ? "border-rose-300/40 bg-rose-300/10" : "border-cyan-300/40 bg-cyan-300/10"}`}>
          <div className="text-5xl font-black">{version.label}</div>
          <div className="mt-5 text-2xl">company = <span className="font-bold text-white">{version.company}</span></div>
          <div className="mt-4 text-xl text-slate-300">{version.state}</div>
          {i < 2 ? <div className="mt-8 text-4xl text-emerald-300">→</div> : null}
        </div>
      ))}
    </div>
  );
}

function IsolationToggle() {
  const levels = {
    rc: { label: "Read Committed", sees: "Each statement gets a fresh snapshot.", conflict: "A later SELECT can see T2's committed change. UPDATE rechecks the latest committed row." },
    rr: { label: "Repeatable Read", sees: "Transaction keeps a stable snapshot from its first real statement.", conflict: "If T2 changed the row after T1's snapshot, T1's update can fail with a serialization/concurrent-update error." },
    ser: { label: "Serializable", sees: "Like repeatable snapshot behavior plus anomaly detection.", conflict: "Application must be ready to retry when PostgreSQL detects unsafe read/write dependencies." },
  };
  const [level, setLevel] = useState("rc");
  const current = levels[level];

  return (
    <div>
      <div className="mb-6 flex w-fit rounded-2xl border border-white/10 bg-black/50 p-1">
        {Object.entries(levels).map(([key, item]) => (
          <button key={key} type="button" onClick={() => setLevel(key)} className={`rounded-xl px-5 py-3 text-lg font-bold transition ${level === key ? "bg-cyan-300 text-slate-950" : "text-slate-300 hover:bg-white/10"}`}>{item.label}</button>
        ))}
      </div>
      <div className="grid grid-cols-[1fr_0.8fr] gap-8">
        <Code small>{`T1: BEGIN;\nT1: SELECT company FROM users WHERE name = 'susmit';\n\nT2: UPDATE users SET company = 'other' WHERE name = 'susmit';\nT2: COMMIT;\n\nT1: SELECT company FROM users WHERE name = 'susmit';\nT1: UPDATE users SET company = 'skillrev' WHERE name = 'susmit';`}</Code>
        <div className="space-y-5">
          <Callout title="Repeated read" tone="cyan">{current.sees}</Callout>
          <Callout title="Update conflict" tone="rose">{current.conflict}</Callout>
        </div>
      </div>
    </div>
  );
}

function CommitRollbackToggle() {
  const [outcome, setOutcome] = useState("commit");
  const [internals, setInternals] = useState(false);

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div className="flex rounded-2xl border border-white/10 bg-black/50 p-1">
          {["commit", "rollback"].map((item) => (
            <button key={item} type="button" onClick={() => setOutcome(item)} className={`rounded-xl px-7 py-3 text-lg font-bold uppercase transition ${outcome === item ? "bg-emerald-300 text-slate-950" : "text-slate-300 hover:bg-white/10"}`}>{item}</button>
          ))}
        </div>
        <button type="button" onClick={() => setInternals((value) => !value)} className={`rounded-2xl border px-5 py-3 text-lg font-bold ${internals ? "border-amber-300 bg-amber-300/20 text-amber-100" : "border-white/10 bg-white/5 text-slate-200"}`}>Show internals</button>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="rounded-3xl border border-white/10 bg-black/40 p-8">
          <div className="mb-6 text-2xl font-black">Logical view</div>
          {outcome === "commit" ? <Callout title="COMMIT" tone="emerald">New value becomes visible to future snapshots; old version waits for cleanup when safe.</Callout> : <Callout title="ROLLBACK" tone="rose">The update is logically undone; the old value remains the visible committed version.</Callout>}
        </div>
        <div className="rounded-3xl border border-white/10 bg-black/40 p-8">
          <div className="mb-6 text-2xl font-black">{internals ? "Tuple-level view" : "Keep it simple"}</div>
          {internals ? (
            <table className="w-full overflow-hidden rounded-2xl text-left text-lg">
              <thead className="bg-white/10 text-slate-200"><tr><th className="p-3">tuple</th><th className="p-3">xmin</th><th className="p-3">xmax</th><th className="p-3">state</th></tr></thead>
              <tbody>
                <tr className="border-t border-white/10"><td className="p-3">old</td><td className="p-3">100</td><td className="p-3">120</td><td className="p-3">{outcome === "commit" ? "old/dead later" : "visible"}</td></tr>
                <tr className="border-t border-white/10"><td className="p-3">new</td><td className="p-3">120</td><td className="p-3">0</td><td className="p-3">{outcome === "commit" ? "visible later" : "aborted/invisible"}</td></tr>
              </tbody>
            </table>
          ) : <div className="text-6xl font-black text-slate-300">{outcome === "commit" ? "visible" : "undone"}</div>}
        </div>
      </div>
    </div>
  );
}

function PathFlow() {
  const steps = ["BEGIN", "SELECT", "Plan", "Index / heap", "Visibility", "id returned", "UPDATE", "Row lock", "New tuple", "WAL", "COMMIT / ROLLBACK", "Cleanup later"];
  return (
    <div className="grid grid-cols-4 gap-4">
      {steps.map((step, i) => (
        <div key={step} className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-sm font-bold text-emerald-300">{String(i + 1).padStart(2, "0")}</div>
          <div className="mt-2 text-xl font-black">{step}</div>
        </div>
      ))}
    </div>
  );
}

function PrimaryKeyTable() {
  const rows = [
    ["bigint sequence", "High", "Small", "DB-centered", "Fast and compact, less globally portable"],
    ["UUID v4", "Random", "Larger", "Distributed", "Easy uniqueness, random index inserts"],
    ["UUID v7 / ULID-style", "Time-ordered-ish", "Larger", "Distributed", "Better locality than v4, still wider than bigint"],
  ];

  return (
    <table className="w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 text-left text-xl">
      <thead className="bg-white/10">
        <tr><th className="p-4">PK</th><th className="p-4">Insert locality</th><th className="p-4">Index width</th><th className="p-4">Generation</th><th className="p-4">Tradeoff</th></tr>
      </thead>
      <tbody>
        {rows.map((row) => <tr key={row[0]} className="border-t border-white/10">{row.map((cell) => <td key={cell} className="p-4">{cell}</td>)}</tr>)}
      </tbody>
    </table>
  );
}

function TupleMetadataTable() {
  return (
    <>
      <table className="w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 text-left text-xl">
        <thead className="bg-white/10"><tr><th className="p-4">version</th><th className="p-4">id</th><th className="p-4">company</th><th className="p-4">xmin</th><th className="p-4">xmax</th><th className="p-4">ctid</th></tr></thead>
        <tbody>
          <tr className="border-t border-white/10"><td className="p-4">old</td><td className="p-4">42</td><td className="p-4">oldco</td><td className="p-4">100</td><td className="p-4">120</td><td className="p-4">(0,5)</td></tr>
          <tr className="border-t border-white/10"><td className="p-4">new</td><td className="p-4">42</td><td className="p-4">skillrev</td><td className="p-4">120</td><td className="p-4">0</td><td className="p-4">(0,9)</td></tr>
        </tbody>
      </table>
      <div className="mt-6 grid grid-cols-3 gap-4">
        <Callout title="xmin" tone="emerald">Who inserted this row version?</Callout>
        <Callout title="xmax" tone="amber">Who deleted/updated this version?</Callout>
        <Callout title="ctid" tone="rose">Physical location, not a stable app ID.</Callout>
      </div>
    </>
  );
}

function FurtherReadingList() {
  const items = [
    "PostgreSQL source-code execution path — trace executor/storage functions after you know the mental model.",
    "Buffer manager internals — shared buffers, page pins, and replacement policy deserve their own talk.",
    "WAL record format — useful for storage engineers, but not needed for commit intuition.",
    "Full B-tree implementation — deeper than scan paths, locality, and write maintenance.",
    "Vacuum freezing and transaction ID wraparound — critical operations topic, separate from read-update basics.",
    "Serializable Snapshot Isolation theory — read after the talk if you want anomaly proofs.",
    "Benchmarking UUID vs bigint — measure in your workload instead of trusting generic numbers.",
  ];
  return <div className="grid grid-cols-2 gap-4 text-xl">{items.map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4">• {item}</div>)}</div>;
}

function slide(title, subtitle, _notes, content, badge = null) {
  return {
    title,
    render: () => <SlideShell title={title} subtitle={subtitle} badge={badge}>{content}</SlideShell>,
  };
}

const slides = [
  slide("Dissecting Read-Update in PostgreSQL", "DB is just read and write, right?", "Open with the anchor question. The goal is a mental model, not memorizing internals.", <HeroVisual variant="hero" />),
  slide("The deceptively simple transaction", "We will keep returning to this same read → update → commit path.", "Keep this SQL as the thread for the whole talk. Use lowercase identifiers.", <Code>{`BEGIN;\n\nSELECT id, company\nFROM users\nWHERE name = 'susmit';\n\nUPDATE users\nSET company = 'skillrev'\nWHERE id = $id;\n\nCOMMIT;`}</Code>),
  slide("SQL is only the surface", "A statement crosses several layers before it becomes a durable change.", "Frame the system layers: planner, heap/index, MVCC, locks, WAL, cleanup.", <FlowDiagram />),
  slide("The app asked for one row", "PostgreSQL opened a crime investigation.", "Humor breather. Query execution is investigation: find candidates, verify visibility, fetch values.", <HeroVisual variant="detective" />),
  slide("SELECT without an index", "PostgreSQL may need to inspect heap pages and filter row versions.", "Explain heap scan at a high level. Avoid buffer internals here.", <HeapScanVisual />),
  slide("SELECT with index on name", "The index finds candidates. It does not remove the heap from the story.", "Indexes narrow the search, but PostgreSQL indexes are secondary structures.", <div className="grid grid-cols-2 gap-8"><Code>{`CREATE INDEX idx_users_name\nON users(name);`}</Code><Callout title="Index scan path" tone="cyan">B-tree lookup → heap tuple location → visibility check → return id and company.</Callout></div>),
  slide("Interactive planner path toggle", "Change the index shape; watch the access path change.", "Ask which path the audience expects, then toggle through the options.", <PlannerToggle />, <Badge tone="interactive">INTERACTIVE</Badge>),
  slide("Covering index is not magic", "A covering index makes index-only scan possible; visibility still has a vote.", "This is not advanced. Distinguish covering index from actual index-only scan.", <div className="grid grid-cols-2 gap-8"><Code>{`CREATE INDEX idx_users_name_cover\nON users(name)\nINCLUDE (id, company);`}</Code><div className="space-y-5"><Callout title="Requirement 1" tone="emerald">The query references only columns stored in the index.</Callout><Callout title="Requirement 2" tone="amber">The visibility map must allow PostgreSQL to avoid heap visibility checks.</Callout></div></div>),
  slide("TEXT / JSONB and TOAST", "Large columns change row-shape economics.", "Introduce bio/profile only here. Projection matters; filtering or returning large values changes cost.", <><ToastDiagram /><div className="mt-5"><Callout title="Small JSONB caveat" tone="purple">JSONB filtering is powerful, but index strategy matters: GIN/expression indexes can help and also add write-maintenance cost.</Callout></div></>, <Badge>ADVANCED</Badge>),
  slide("Data already added", "The table is not only current rows; it is row versions plus visibility rules.", "Introduce row versions: visible, old, aborted, dead later.", <VersionTimeline />, <Badge>ADVANCED</Badge>),
  slide("What does SELECT actually see?", "MVCC means each statement sees a consistent snapshot.", "A statement sees a snapshot, not arbitrary in-progress data.", <div className="grid grid-cols-3 gap-6"><Callout title="Committed before query" tone="emerald">Visible if it matches the statement snapshot.</Callout><Callout title="Concurrent uncommitted" tone="rose">Not visible to a plain SELECT.</Callout><Callout title="Committed after query starts" tone="amber">Not visible to that statement in Read Committed.</Callout></div>, <Badge>ADVANCED</Badge>),
  slide("Everyone gets their own version of reality", "MVCC is less spooky once you remember each transaction has a snapshot.", "Humor breather before UPDATE.", <HeroVisual variant="multiverse" />),
  slide("UPDATE is not edit-in-place", "The logical row changes. The physical storage gets a new row version.", "Central update takeaway: PostgreSQL creates a new row version.", <div className="grid grid-cols-[0.85fr_1.15fr] gap-8"><Code>{`UPDATE users\nSET company = 'skillrev'\nWHERE id = $id;`}</Code><VersionTimeline /></div>),
  slide("Tuple metadata", "xmin, xmax, and ctid are the row-version breadcrumbs.", "Explain only enough to understand visibility and why ctid is not an app ID.", <TupleMetadataTable />, <Badge>ADVANCED</Badge>),
  slide("HOT update", "Sometimes PostgreSQL can reduce update overhead.", "If company is not indexed and the page has space, HOT may avoid new index entries.", <><div className="grid grid-cols-2 gap-8"><Callout title="HOT may be possible" tone="emerald">Updated columns are not referenced by indexes, and there is enough free space on the same heap page.</Callout><Callout title="HOT blocked / less likely" tone="rose">Updating a column used in an index or INCLUDE column usually means index maintenance.</Callout></div><div className="mt-8 rounded-3xl border border-white/10 bg-black/40 p-6 text-2xl"><span className="font-black text-emerald-300">For this query:</span> updating <code className="rounded bg-white/10 px-2">company</code> is cheaper when <code className="rounded bg-white/10 px-2">company</code> is not part of any index.</div></>, <Badge>ADVANCED</Badge>),
  slide("What does UPDATE block?", "MVCC allows reads to continue, but conflicting writes must coordinate.", "Plain SELECT usually continues. Competing UPDATE/DELETE/SELECT FOR UPDATE may wait.", <div className="grid grid-cols-3 gap-6"><Callout title="Plain SELECT" tone="emerald">Usually not blocked by another row update.</Callout><Callout title="UPDATE / DELETE same row" tone="rose">May wait for the row lock.</Callout><Callout title="SELECT FOR UPDATE" tone="amber">Locks rows as if they may be updated.</Callout></div>),
  slide("Interactive isolation toggle", "Visibility changes by isolation level; conflicting updates can become retries.", "Show both read behavior and update conflict behavior.", <IsolationToggle />, <><Badge tone="interactive">INTERACTIVE</Badge><Badge>ADVANCED</Badge></>),
  slide("Primary key choice", "integer vs UUID vs ULID-style identifiers: mostly locality, width, and generation tradeoffs.", "Keep this conceptual; avoid benchmark claims.", <PrimaryKeyTable />),
  slide("What happens at COMMIT?", "Durability and visibility are related, but cleanup is separate.", "Commit is not flushing every data page; WAL is the durable record.", <div className="grid grid-cols-3 gap-6"><Callout title="WAL first" tone="emerald">Changes are logged so crash recovery can redo them.</Callout><Callout title="Data pages later" tone="cyan">PostgreSQL does not need to flush every touched heap/index page at commit.</Callout><Callout title="Visible to future snapshots" tone="amber">The new tuple version becomes the committed truth for later statements.</Callout></div>),
  slide("Interactive commit vs rollback", "Same update path. Different visibility outcome.", "Use the default logical view first, then toggle internals.", <CommitRollbackToggle />, <Badge tone="interactive">INTERACTIVE</Badge>),
  slide("After rollback", "The app sees undo. PostgreSQL still has cleanup work to do later.", "Rollback releases locks and logically undoes the transaction.", <div className="grid grid-cols-3 gap-6"><Callout title="Locks released" tone="emerald">Other transactions can proceed.</Callout><Callout title="New version invisible" tone="rose">The attempted update does not become committed data.</Callout><Callout title="Cleanup later" tone="amber">Vacuum/cleanup eventually removes unneeded row versions.</Callout></div>),
  slide("The full read-update path", "The simple transaction now has a complete internal story.", "Recap the entire path.", <PathFlow />),
  slide("Practical checklist", "What backend engineers should remember.", "Make this useful for code reviews and schema design.", <div className="grid grid-cols-2 gap-4 text-xl">{["Indexes help locate rows; they do not remove MVCC visibility rules.", "Covering indexes help when query columns and visibility map cooperate.", "Large TEXT/JSONB columns matter most when selected, filtered, or indexed.", "UPDATE creates a new row version, not a simple overwrite.", "Updating indexed columns is more expensive than updating non-indexed columns.", "Isolation level changes repeated reads and conflict behavior.", "COMMIT makes durable/visible; cleanup is separate.", "ROLLBACK is logical undo; physical cleanup is separate."].map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4"><span className="text-emerald-300">✓ </span>{item}</div>)}</div>),
  slide("Vacuum will clean it up", "Eventually.", "Humor breather before closing. Do not imply vacuum is instant.", <HeroVisual variant="vacuum" />),
  slide("A read-update is a negotiated path", "Not two simple operations.", "Close with storage, visibility, concurrency, and durability.", <HeroVisual variant="closing" />),
  slide("Appendix: visibility map", "Why index-only scan can still become heap work.", "Use only if asked.", <div className="grid grid-cols-3 gap-6"><Callout title="Index has values" tone="emerald">The index can return id and company.</Callout><Callout title="But visibility lives elsewhere" tone="amber">Visibility metadata is not in normal index entries.</Callout><Callout title="Visibility map" tone="cyan">If all-visible bit is set, heap can often be skipped.</Callout></div>, <Badge>ADVANCED</Badge>),
  slide("Appendix: HOT update deeper dive", "Heap-only tuple chains reduce index churn when conditions allow.", "Use if someone asks why fillfactor or indexed columns matter.", <div className="grid grid-cols-2 gap-8"><Code small>{`-- HOT-friendly direction\nCREATE INDEX idx_users_name ON users(name);\nUPDATE users SET company = 'skillrev' WHERE id = 42;\n\n-- Less HOT-friendly\nCREATE INDEX idx_users_name_cover\nON users(name) INCLUDE (company);`}</Code><Callout title="Operational hint" tone="amber">Fillfactor can leave free page space, increasing the chance that updated row versions fit on the same heap page.</Callout></div>, <Badge>ADVANCED</Badge>),
  slide("Appendix: UUID / ULID caveats", "Avoid cargo-culting primary key choices.", "UUID v7 is documented in current PostgreSQL. ULID is conceptual/application-level.", <div className="grid grid-cols-3 gap-6"><Callout title="bigint" tone="emerald">Compact and insertion-friendly, but centralized sequence semantics.</Callout><Callout title="UUID v4" tone="rose">Great for distributed generation, but random B-tree insertion patterns.</Callout><Callout title="UUID v7 / ULID-style" tone="cyan">Time-sortable direction improves locality intuition, but measure in your workload.</Callout></div>, <Badge>ADVANCED</Badge>),
  slide("Appendix: anomalies and retries", "Serializable correctness often means application retry discipline.", "Serializable detects unsafe dependency patterns and may require retry logic.", <div className="grid grid-cols-2 gap-8"><Callout title="Repeatable Read" tone="amber">Stable snapshot, but conflicting updates may fail.</Callout><Callout title="Serializable" tone="rose">Prevents serialization anomalies by aborting one transaction when needed; retry is part of the contract.</Callout></div>, <Badge>ADVANCED</Badge>),
  slide("Appendix: demo SQL to try later", "Use EXPLAIN to verify the path in your own database.", "Do not claim specific output; it depends on data and settings.", <Code small>{`EXPLAIN (ANALYZE, BUFFERS)\nSELECT id, company\nFROM users\nWHERE name = 'susmit';\n\nCREATE INDEX idx_users_name ON users(name);\n\nCREATE INDEX idx_users_name_cover\nON users(name) INCLUDE (id, company);\n\nEXPLAIN (ANALYZE, BUFFERS)\nUPDATE users\nSET company = 'skillrev'\nWHERE id = 42;`}</Code>, <Badge tone="demo">DEMO</Badge>),
  slide("Further reading", "Topics intentionally not covered deeply today.", "This replaces exclusions. Each bullet is intentionally not covered deeply.", <FurtherReadingList />, <Badge tone="reference">REFERENCE</Badge>),
];

function runDeckSmokeTests(deck) {
  if (!Array.isArray(deck)) throw new Error("slides must be an array");
  if (deck.length !== EXPECTED_SLIDE_COUNT) throw new Error(`expected ${EXPECTED_SLIDE_COUNT} slides, received ${deck.length}`);
  deck.forEach((item, index) => {
    if (!item.title || typeof item.title !== "string") throw new Error(`slide ${index + 1} is missing a title`);
    if (typeof item.render !== "function") throw new Error(`slide ${index + 1} is missing a render function`);
  });
  const titles = deck.map((item) => item.title);
  if (titles[0] !== "Dissecting Read-Update in PostgreSQL") throw new Error("first slide title changed unexpectedly");
  if (titles.includes("Engineering Guild Meet")) throw new Error("Engineering Guild Meet label should not appear as a slide title");
  if (titles.includes("References")) throw new Error("References slide should have been removed");
  if (!titles.includes("Further reading")) throw new Error("deck must include a Further reading slide");
  if (!titles.includes("Appendix: demo SQL to try later")) throw new Error("deck must include the demo SQL appendix slide");
  const duplicateTitles = titles.filter((title, index) => titles.indexOf(title) !== index);
  if (duplicateTitles.length > 0) throw new Error(`duplicate slide title found: ${duplicateTitles[0]}`);
  return true;
}

runDeckSmokeTests(slides);

export default function Page() {
  const [index, setIndex] = useState(0);
  const slideData = slides[index];
  const progress = ((index + 1) / slides.length) * 100;

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
        setIndex((currentIndex) => Math.min(slides.length - 1, currentIndex + 1));
      }
      if (event.key === "ArrowLeft" || event.key === "PageUp") {
        setIndex((currentIndex) => Math.max(0, currentIndex - 1));
      }
      if (event.key.toLowerCase() === "f") {
        if (document.fullscreenElement) {
          document.exitFullscreen?.();
        } else {
          document.documentElement.requestFullscreen?.();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const renderedSlide = useMemo(() => slideData.render(), [slideData]);

  return (
    <div className="min-h-screen bg-black p-5 text-white">
      <div className="mx-auto flex aspect-video max-h-[calc(100vh-40px)] max-w-[calc((100vh-40px)*1.777)] flex-col">
        <div className="relative flex-1 overflow-hidden rounded-[2rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 60, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -60, scale: 0.98 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="h-full"
            >
              {renderedSlide}
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-0 left-0 h-1 bg-emerald-300 transition-all" style={{ width: `${progress}%` }} />
          {index === 0 ? (
            <div className="absolute bottom-5 left-8 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-sm text-slate-300 backdrop-blur">
              ← / → navigate&nbsp;&nbsp; F fullscreen
            </div>
          ) : null}
          <div className="absolute bottom-5 right-8 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-sm font-bold text-slate-200 backdrop-blur">
            {index + 1} / {slides.length}
          </div>
        </div>
      </div>
    </div>
  );
}
