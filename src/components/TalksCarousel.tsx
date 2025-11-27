import { TalksData } from "@/lib/data";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const TalksCarousel = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex items-center justify-between mb-4 px-2">
        <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
          Latest Talks
        </h3>
        <Link
          href="/talks"
          className="text-xs text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-300 transition-colors"
        >
          View All
        </Link>
      </div>
      
      <div className="flex-1 overflow-x-auto pb-4 hide-scrollbar flex gap-4 px-2">
        {TalksData.talks.slice(0, 5).map((talk, index) => (
          <Link
            key={index}
            href={talk.link}
            target="_blank"
            className="flex-shrink-0 w-64 group relative rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800"
          >
            <div className="aspect-video relative bg-neutral-100 dark:bg-neutral-800">
               <Image
                  src={talk.src}
                  alt={talk.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <PlayCircle className="w-10 h-10 text-white" />
                </div>
            </div>
            <div className="p-3 bg-white dark:bg-neutral-900">
              <div className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-1">
                {talk.category}
              </div>
              <h4 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 line-clamp-2">
                {talk.title}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
