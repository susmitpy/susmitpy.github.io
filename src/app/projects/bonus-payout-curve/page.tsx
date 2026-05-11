"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, Target, Users, DollarSign, Activity, Gauge } from "lucide-react";
import { prefix } from "@/lib/prefix";

const INITIAL = {
  people: 999,
  aboveStart: 960,
  engagement: 96.1,
  meaningful: 53.75,
  budget: 99900,
  cost: 85410.36,
  utilization: 85.5,
  sales: 998448,
  sensitivity: {
    incSales: 1098292.8,
    incCost: 123897.01,
    incUtil: 124.02,
    decSales: 898603.2,
    decCost: 18007.68,
    decUtil: 18.03,
  },
  percentiles: [
    { p: 10, bonus: 19.91, perf: 93.0 },
    { p: 20, bonus: 31.55, perf: 95.0 },
    { p: 30, bonus: 50.03, perf: 97.0 },
    { p: 40, bonus: 79.38, perf: 99.0 },
    { p: 50, bonus: 100.0, perf: 100.0 },
    { p: 60, bonus: 108.53, perf: 101.8 },
    { p: 70, bonus: 113.34, perf: 103.0 },
    { p: 80, bonus: 119.9, perf: 105.0 },
    { p: 90, bonus: 127.19, perf: 108.0 },
    { p: 100, bonus: 139.5, perf: 119.0 },
  ],
};

const OPTIMIZED = {
  people: 1000,
  aboveStart: 900,
  engagement: 90.0,
  meaningful: 48.1,
  budget: 100000,
  cost: 93382.5,
  utilization: 93.38,
  sales: 1000019,
  sensitivity: {
    incSales: 1100021,
    incCost: 127096.27,
    incUtil: 127.1,
    decSales: 900017,
    decCost: 51033.81,
    decUtil: 51.03,
  },
  percentiles: [
    { p: 10, bonus: 15.0, perf: 87.0 },
    { p: 20, bonus: 22.76, perf: 89.2 },
    { p: 30, bonus: 37.25, perf: 92.0 },
    { p: 40, bonus: 72.88, perf: 96.0 },
    { p: 50, bonus: 108.8, perf: 99.0 },
    { p: 60, bonus: 131.16, perf: 103.0 },
    { p: 70, bonus: 146.32, perf: 108.0 },
    { p: 80, bonus: 150.0, perf: 112.0 },
    { p: 90, bonus: 150.0, perf: 119.0 },
    { p: 100, bonus: 150.0, perf: 125.0 },
  ],
};

const BEST = {
  startPoint: 87,
  midPoint: 98,
  maxPoint: 110,
  startBonus: 15,
  midBonus: 101,
  maxBonus: 150,
};

function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  tone = "indigo",
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  sub?: string;
  tone?: "indigo" | "violet" | "green" | "amber";
}) {
  const toneMap = {
    indigo: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    violet: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    green: "text-green-400 bg-green-500/10 border-green-500/20",
    amber: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  };
  return (
    <div className="flex flex-col gap-2 p-5 bg-white/[0.02] rounded-xl border border-white/[0.05]">
      <div className={`inline-flex items-center justify-center w-9 h-9 rounded-lg border ${toneMap[tone]}`}>
        <Icon className="w-4 h-4" />
      </div>
      <div className="text-xs font-mono uppercase tracking-wider text-white/40">{label}</div>
      <div className="text-2xl font-bold text-white font-mono">{value}</div>
      {sub && <div className="text-xs text-white/50">{sub}</div>}
    </div>
  );
}

function StageBlock({ title, data, imgSrc, accent }: { title: string; data: typeof INITIAL; imgSrc: string; accent: "amber" | "green" }) {
  const ring = accent === "amber" ? "border-amber-500/20" : "border-green-500/20";
  const chipTone = accent === "amber" ? "bg-amber-500/10 text-amber-400 border-amber-500/20" : "bg-green-500/10 text-green-400 border-green-500/20";
  return (
    <div className={`bg-obsidian-900 rounded-2xl border ${ring} p-6 md:p-8`}>
      <div className="flex items-center gap-3 mb-6">
        <span className={`px-3 py-1 text-xs font-mono font-medium rounded-full border ${chipTone}`}>{accent === "amber" ? "Baseline" : "Optimized"}</span>
        <h3 className="text-xl md:text-2xl font-bold text-white font-mono">{title}</h3>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 mb-6 overflow-hidden">
        <Image src={imgSrc} alt={title} width={1600} height={600} className="w-full h-auto rounded-lg" unoptimized />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <StatCard icon={Users} label="People" value={data.people.toLocaleString()} sub={`${data.aboveStart} ≥ start`} tone="indigo" />
        <StatCard icon={Activity} label="Engagement" value={`${data.engagement}%`} sub={`Meaningful ${data.meaningful}%`} tone="violet" />
        <StatCard icon={Gauge} label="Budget Util." value={`${data.utilization}%`} sub={`$${data.cost.toLocaleString()} / $${data.budget.toLocaleString()}`} tone={accent === "green" ? "green" : "amber"} />
        <StatCard icon={DollarSign} label="Total Sales" value={`$${(data.sales / 1000).toFixed(0)}k`} tone="indigo" />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-white/40 mb-3">Percentile · Bonus % · Performance %</div>
          <div className="overflow-hidden rounded-lg border border-white/[0.05]">
            <table className="w-full text-sm font-mono">
              <thead className="bg-white/[0.03] text-white/50 text-xs">
                <tr>
                  <th className="text-left px-3 py-2">P</th>
                  <th className="text-right px-3 py-2">Bonus %</th>
                  <th className="text-right px-3 py-2">Perf %</th>
                </tr>
              </thead>
              <tbody>
                {data.percentiles.map((row) => (
                  <tr key={row.p} className="border-t border-white/[0.04] text-white/70">
                    <td className="px-3 py-1.5">{row.p}</td>
                    <td className="text-right px-3 py-1.5">{row.bonus.toFixed(2)}</td>
                    <td className="text-right px-3 py-1.5">{row.perf.toFixed(1)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-white/40 mb-3">Sensitivity Analysis (±10% sales)</div>
          <div className="space-y-3">
            <div className="p-4 rounded-lg border border-white/[0.05] bg-white/[0.02]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-green-400">+10% Sales</span>
                <TrendingUp className="w-3 h-3 text-green-400" />
              </div>
              <div className="text-2xl font-bold text-white font-mono">{data.sensitivity.incUtil}%</div>
              <div className="text-xs text-white/50 mt-1">cost ${data.sensitivity.incCost.toLocaleString()} · sales ${(data.sensitivity.incSales / 1000).toFixed(0)}k</div>
            </div>
            <div className="p-4 rounded-lg border border-white/[0.05] bg-white/[0.02]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-rose-400">-10% Sales</span>
                <TrendingUp className="w-3 h-3 text-rose-400 rotate-180" />
              </div>
              <div className="text-2xl font-bold text-white font-mono">{data.sensitivity.decUtil}%</div>
              <div className="text-xs text-white/50 mt-1">cost ${data.sensitivity.decCost.toLocaleString()} · sales ${(data.sensitivity.decSales / 1000).toFixed(0)}k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CodeBlock({ children, label }: { children: string; label: string }) {
  return (
    <div className="bg-obsidian-900/80 rounded-lg border border-white/10 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2 border-b border-white/5 bg-black/20">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <span className="text-[10px] text-white/40 font-mono ml-2">{label}</span>
      </div>
      <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-white/80 leading-relaxed">
        <code>{children}</code>
      </pre>
    </div>
  );
}

export default function BonusPayoutCurvePage() {
  return (
    <main className="min-h-screen bg-obsidian-950 text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 md:py-16">
        <Link
          href={`${prefix}/`}
          className="inline-flex items-center gap-2 text-sm font-mono text-white/60 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to portfolio
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-mono font-medium bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20">
              Case Study
            </span>
            <span className="px-3 py-1 text-xs font-mono text-white/40 rounded-full border border-white/10">
              Algorithmic Optimization
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white font-mono tracking-tight mb-4">
            Bonus Payout Curve Generator
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-3xl leading-relaxed">
            A parametric payout-curve generator tuned by a genetic algorithm to hit a target budget utilization
            while keeping engagement inside a stakeholder-defined band.
          </p>
        </motion.div>

        {/* Problem · Solution · Impact */}
        <div className="grid md:grid-cols-3 gap-4 mt-10">
          <div className="p-5 rounded-xl border border-white/[0.05] bg-white/[0.02]">
            <div className="text-xs font-mono uppercase tracking-wider text-indigo-400/80 mb-2">The Challenge</div>
            <p className="text-white/70 text-sm leading-relaxed">
              Designing a fair bonus curve is a six-parameter, non-convex problem - start/mid/max points and bonuses
              all interact, and the curve must respect budget while sustaining engagement.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-white/[0.05] bg-white/[0.02]">
            <div className="text-xs font-mono uppercase tracking-wider text-violet-400/80 mb-2">The Solution</div>
            <p className="text-white/70 text-sm leading-relaxed">
              Piecewise fit: exponential growth from start→mid, saturation growth from mid→max. Wrap it in a DEAP
              GA that drives budget utilization toward 100% (minimizing{" "}
              <span className="font-mono text-violet-300">|100 − utilization|</span>) with penalties for engagement
              out of band.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-white/[0.05] bg-white/[0.02]">
            <div className="text-xs font-mono uppercase tracking-wider text-green-400/80 mb-2">Impact</div>
            <p className="text-white/70 text-sm leading-relaxed">
              Utilization climbed from <span className="font-mono text-green-300">85.5% → 93.4%</span> at a clean{" "}
              <span className="font-mono text-green-300">90.0%</span> engagement rate. Manual judgment replaced by a
              reproducible, auditable calibration.
            </p>
          </div>
        </div>

        {/* Tech stack */}
        <div className="mt-8 flex flex-wrap gap-2">
          {["Python", "NumPy", "SciPy", "DEAP (GA)", "Pandas", "Plotly"].map((t) => (
            <span key={t} className="px-3 py-1.5 text-xs font-mono bg-white/[0.03] text-white/70 rounded-lg border border-white/10">
              {t}
            </span>
          ))}
        </div>

        {/* Baseline */}
        <section className="mt-14">
          <StageBlock
            title="Before optimization"
            data={INITIAL}
            imgSrc={`${prefix}/projects/bonus-payout/initial.png`}
            accent="amber"
          />
        </section>

        {/* Best params */}
        <section className="mt-10">
          <div className="bg-gradient-to-br from-indigo-500/[0.08] via-violet-500/[0.05] to-transparent rounded-2xl border border-indigo-500/20 p-6 md:p-8">
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-4 h-4 text-indigo-400" />
              <h3 className="text-lg font-bold text-white font-mono">GA-tuned parameters</h3>
            </div>
            <p className="text-white/60 text-sm mb-5">
              100 individuals · 50 generations · tournament select (k=3) · two-point crossover · uniform-int mutation
              (indpb=0.2) · DeltaPenalty for monotonicity infeasibility.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
              {([
                ["Start Pt", BEST.startPoint],
                ["Mid Pt", BEST.midPoint],
                ["Max Pt", BEST.maxPoint],
                ["Start Bonus", BEST.startBonus],
                ["Mid Bonus", BEST.midBonus],
                ["Max Bonus", BEST.maxBonus],
              ] as const).map(([k, v]) => (
                <div key={k} className="p-3 rounded-lg border border-white/[0.05] bg-white/[0.02]">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-white/40">{k}</div>
                  <div className="text-xl font-bold text-white font-mono mt-1">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Optimized */}
        <section className="mt-10">
          <StageBlock
            title="After optimization"
            data={OPTIMIZED}
            imgSrc={`${prefix}/projects/bonus-payout/optimized.png`}
            accent="green"
          />
        </section>

        {/* Methodology */}
        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-mono mb-6">Methodology</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white font-mono mb-3">1. Piecewise curve fit</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Performance below <span className="font-mono">start_point</span> → 0 bonus. Above{" "}
                <span className="font-mono">max_point</span> → capped at max bonus. Between, two regimes:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <CodeBlock label="lower_section · exponential fit">{`def fit_exponential(self, x, y):
    log_y = np.log(y)
    m, c = np.polyfit(x, log_y, 1)
    exponent = np.exp(m)
    return exponent**x * np.exp(c)`}</CodeBlock>
                <CodeBlock label="upper_section · saturation growth">{`def saturation_growth_model(self, x, L, k):
    return L - (L - self.mid_bonus) * np.exp(
        -k * (x - self.mid_point)
    )

# fit with bounds and p0 around mid/max bonus
popt, _ = curve_fit(model, x, y,
    p0=(max_bonus, 1e-3),
    bounds=([mid_bonus, 0], [max_bonus, 10]))`}</CodeBlock>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white font-mono mb-3">2. Objective &amp; feasibility</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Objective = <span className="font-mono">|100 − budget_utilization|</span> — the absolute gap to a
                100% spend target, so over-spend and under-spend are both penalized. Engagement-rate violations add
                a fixed penalty. Monotonic ordering of points/bonuses enforced via DEAP&apos;s{" "}
                <span className="font-mono">DeltaPenalty</span>.
              </p>
              <CodeBlock label="objective + GA wiring">{`def objective(x):
    sp, mp, xp, sb, mb, xb = np.array(x).round().astype(int)
    payout = PayoutGen(data, sp, mp, xp, sb, mb, xb, avg_bonus_amt).gen_payout()

    obj = abs(100 - payout.stats.budget_utilization)
    if not 80 <= payout.stats.engagement_rate <= 90:
        obj += 1000
    if payout.stats.meaningful_engagement_rate < 50:
        obj += 1000
    return obj

toolbox.register("evaluate", lambda ind: (objective(ind),))
toolbox.decorate("evaluate", tools.DeltaPenalty(feasible, 1000.0, distance))
toolbox.register("mate",   tools.cxTwoPoint)
toolbox.register("mutate", tools.mutUniformInt, low=lows, up=highs, indpb=0.2)
toolbox.register("select", tools.selTournament, tournsize=3)

algorithms.eaSimple(pop, toolbox, cxpb=0.7, mutpb=0.2, ngen=50)`}</CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white font-mono mb-3">3. Sensitivity analysis</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                For every candidate curve, sales are perturbed ±10% and attainment is re-bucketed against the
                fitted payout. The baseline curve was brittle (18% utilization at −10% sales); the optimized
                curve is more robust (51% utilization at −10% sales) at the cost of slightly higher upside
                exposure (127% vs 124%).
              </p>
            </div>
          </div>
        </section>

        <div className="mt-16 pt-8 border-t border-white/[0.05]">
          <Link
            href={`${prefix}/`}
            className="inline-flex items-center gap-2 text-sm font-mono text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
