import { CaseStudy } from "@/lib/data";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

export const FeaturedWork = ({ caseStudy }: { caseStudy: CaseStudy }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 h-full">
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full">
              Case Study
            </span>
          </div>
          <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            {caseStudy.title}
          </h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                The Challenge
              </h4>
              <p className="text-neutral-700 dark:text-neutral-300 mt-1">
                {caseStudy.problem}
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                The Solution
              </h4>
              <p className="text-neutral-700 dark:text-neutral-300 mt-1">
                {caseStudy.solution}
              </p>
            </div>

             <div>
              <h4 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                Impact
              </h4>
              <p className="text-neutral-700 dark:text-neutral-300 mt-1">
                {caseStudy.impact}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {caseStudy.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="mt-6">
            <Link 
                href={caseStudy.repoLink}
                target="_blank"
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-white hover:underline"
            >
                <Github className="w-4 h-4" />
                View Source
                <ArrowUpRight className="w-4 h-4" />
            </Link>
        </div>
      </div>

      <div className="flex-1 bg-neutral-100 dark:bg-neutral-800 rounded-lg p-4 flex items-center justify-center min-h-[200px] md:min-h-full relative overflow-hidden group">
        {/* Placeholder for architecture diagram or code snippet */}
        <div className="absolute inset-0 bg-grid-neutral-200/50 dark:bg-grid-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
        
        <div className="relative z-10 p-4 bg-white dark:bg-neutral-900 rounded-md shadow-sm border border-neutral-200 dark:border-neutral-700 group-hover:scale-105 transition-transform duration-300">
            <pre className="text-xs text-neutral-600 dark:text-neutral-300 font-mono">
                <code>
{`// System Architecture
Source -> Kafka -> Flink -> Sink

job = env.from_source(
    kafka_source, 
    WatermarkStrategy.no_watermarks(), 
    "Kafka Source"
)

job.sink_to(sink)`}
                </code>
            </pre>
        </div>
      </div>
    </div>
  );
};
