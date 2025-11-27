"use client";

import { ActionBar } from "@/components/ActionBar";
import { ArchitectureLab } from "@/components/ArchitectureLab";
import { BentoGrid, BentoGridItem } from "@/components/BentoGrid";
import { BlogGrid } from "@/components/BlogGrid";
import { BookShelf } from "@/components/BookShelf";
import { CertificationsMarquee } from "@/components/CertificationsMarquee";
import { ConnectSection } from "@/components/ConnectSection";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { FeaturedWork } from "@/components/FeaturedWork";
import { FloatingMenu } from "@/components/FloatingMenu";
import HeroSection from "@/components/HeroSection";
import { MapComponent } from "@/components/MapComponent";
import { OpenSourceList } from "@/components/OpenSourceList";
import { SideProjects } from "@/components/SideProjects";
import { TalksCarousel } from "@/components/TalksCarousel";
import { TechStack } from "@/components/TechStack";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { CaseStudies } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-4 md:p-8 relative">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Bento Grid Section */}
        <BentoGrid className="md:auto-rows-[20rem]">
          {/* Hero Section - Large Cell */}
          <BentoGridItem
            className="md:col-span-2 md:row-span-1"
            header={<HeroSection />}
          />

          {/* Tech Stack - Tall Cell */}
          <BentoGridItem
            className="md:col-span-1 md:row-span-2"
            header={<TechStack />}
          />

          {/* Map - Square Cell */}
          <BentoGridItem
            className="md:col-span-1 md:row-span-1"
            header={<MapComponent />}
          />

          {/* Talks - Medium Cell */}
          <BentoGridItem
            className="md:col-span-1 md:row-span-1"
            header={<TalksCarousel />}
          />

          {/* Architecture Lab - Wide Cell */}
          <BentoGridItem
            className="md:col-span-3 md:row-span-1"
            header={<ArchitectureLab />}
          />
        </BentoGrid>

        {/* Featured Work Section */}
        <section id="projects" className="py-12">
          <h2 className="text-2xl md:text-3xl font-mono font-bold text-white mb-2">
            Featured Work
          </h2>
          <p className="text-sm text-white/40 font-mono mb-8">Enterprise-grade systems I&apos;ve architected</p>
          <div className="space-y-8">
            {CaseStudies.map((study, idx) => (
              <FeaturedWork key={idx} caseStudy={study} index={idx} />
            ))}
          </div>
        </section>

        {/* Experience Timeline */}
        <ExperienceTimeline />

        {/* Tech Blogs */}
        <BlogGrid />

        {/* Side Projects */}
        <SideProjects />

        {/* Open Source */}
        <OpenSourceList />

        {/* Certifications */}
        <CertificationsMarquee />

        {/* Book Shelf */}
        <BookShelf />

        {/* Testimonials */}
        <TestimonialsCarousel />

        {/* Connect Section */}
        <ConnectSection />

      </div>

      <ActionBar />
      <FloatingMenu />
    </main>
  );
}
