import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageNavProps {
  backHref?: string;
  backLabel?: string;
  action?: { href: string; label: string };
}

export function PageNav({ backHref = "/", backLabel = "Back to Portfolio", action }: PageNavProps) {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#020617]/80 border-b border-white/[0.05]">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href={backHref}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {backLabel}
        </Link>
        {action && (
          <Link
            href={action.href}
            target="_blank"
            className="px-4 py-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-sm font-medium transition-all"
          >
            {action.label}
          </Link>
        )}
      </div>
    </nav>
  );
}
