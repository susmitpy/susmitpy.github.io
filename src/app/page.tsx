"use client";

import { ActionBar } from "@/components/ActionBar";
import { BentoGrid, BentoGridItem } from "@/components/BentoGrid";
import { FeaturedWork } from "@/components/FeaturedWork";
import { FloatingMenu } from "@/components/FloatingMenu";
import HeroSection from "@/components/HeroSection";
import { MapComponent } from "@/components/MapComponent";
import { PipelineVisualizer } from "@/components/PipelineVisualizer";
import { TalksCarousel } from "@/components/TalksCarousel";
import { TechStack } from "@/components/TechStack";
import { CaseStudies } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-100 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 p-4 md:p-8 relative">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Bento Grid Section */}
        <BentoGrid className="md:auto-rows-[20rem]">
          {/* Hero Section - Large Cell */}
          <BentoGridItem
            className="md:col-span-2 md:row-span-1 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800"
            header={<HeroSection />}
          />

          {/* Tech Stack - Tall Cell */}
          <BentoGridItem
            className="md:col-span-1 md:row-span-2 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800"
            header={<TechStack />}
          />

          {/* Map - Square Cell */}
          <BentoGridItem
            className="md:col-span-1 md:row-span-1 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800"
            header={<MapComponent />}
          />

          {/* Talks - Medium Cell */}
          <BentoGridItem
            className="md:col-span-1 md:row-span-1 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800"
            header={<TalksCarousel />}
          />

          {/* Pipeline Visualizer - Wide Cell */}
          <BentoGridItem
            className="md:col-span-3 md:row-span-1 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800"
            header={<PipelineVisualizer />}
          />
        </BentoGrid>

        {/* Featured Work Section */}
        <section id="projects" className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-neutral-800 dark:text-neutral-200">
            Featured Work
          </h2>
          <div className="space-y-8">
            {CaseStudies.map((study, idx) => (
              <FeaturedWork key={idx} caseStudy={study} />
            ))}
          </div>
        </section>

      </div>

      <ActionBar />
      {/* FloatingMenu is now visible on all screens for better navigation */}
      <FloatingMenu />
    </main>
  );
}
