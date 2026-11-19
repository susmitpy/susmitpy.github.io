export type Tone = "indigo" | "green" | "blue" | "amber";

interface StatCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  tone?: Tone;
}

export function StatCard({ icon: Icon, label, value, tone = "indigo" }: StatCardProps) {
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
      <div className="text-lg font-bold text-gray-100 leading-snug">{value}</div>
    </div>
  );
}
