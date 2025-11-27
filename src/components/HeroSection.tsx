import { HeroData } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
    return (
        <div className="flex flex-col justify-center h-full p-6 md:p-10 relative overflow-hidden group">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] animate-pulse delay-700" />
            </div>

            <div className="relative z-10">
                <h1 className="text-4xl md:text-6xl font-bold text-neutral-800 dark:text-neutral-100 mb-4 tracking-tight font-mono">
                    {HeroData.name}
                </h1>
                <h2 className="text-xl md:text-2xl font-semibold text-neutral-600 dark:text-neutral-300 mb-6 max-w-2xl">
                    {HeroData.headline}
                </h2>
                <p className="text-neutral-500 dark:text-neutral-400 max-w-xl mb-8 leading-relaxed">
                    {HeroData.subHeadline}
                </p>

                <div className="flex flex-wrap gap-3">
                    {HeroData.titles.map((title, idx) => (
                        <span key={idx} className="px-3 py-1 text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 rounded-full border border-neutral-200 dark:border-neutral-700">
                            {title}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
