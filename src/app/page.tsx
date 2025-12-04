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
import { KeySkills } from "@/components/KeySkills";
import { OpenSourceList } from "@/components/OpenSourceList";
import { SideProjects } from "@/components/SideProjects";
import { TalksCarousel } from "@/components/TalksCarousel";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CaseStudies } from "@/lib/data";
import SkillsSection from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#141414] text-[#e5e5e5] p-4 md:p-8 relative">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Bento Grid Section */}
        <BentoGrid className="md:auto-rows-[20rem]">
          {/* Hero Section - Large Cell */}
          <BentoGridItem
            className="md:col-span-2 md:row-span-1"
            header={<HeroSection />}
          />

          {/* Key Skills - Single row (replaces tall TechStack) */}
          <BentoGridItem
            className="md:col-span-1 md:row-span-1"
            header={<KeySkills />}
          />

          {/* Talks/Speaker - Full width across all 3 columns (below Hero and Key Skills) */}
          <BentoGridItem
            className="md:col-span-3 md:row-span-1"
            header={<TalksCarousel />}
          />

          {/* Architecture Lab - Wide Cell */}
          <BentoGridItem
            className="md:col-span-3 md:row-span-1"
            header={<ArchitectureLab />}
          />
        </BentoGrid>

        <SectionDivider />

        {/* Featured Work Section */}
        <section id="projects" className="py-12">
          <SectionHeader
            eyebrow="Case Studies"
            title="Featured Work"
          />
          <div className="space-y-8">
            {CaseStudies.map((study, idx) => (
              <Reveal key={idx} width="full" delay={idx * 0.1}>
                <FeaturedWork caseStudy={study} index={idx} />
              </Reveal>
            ))}
          </div>
        </section>

        <SectionDivider />

        {/* Experience Timeline */}
        <section id="experience">
          <ExperienceTimeline />
        </section>

        <SectionDivider />

        {/* Tech Blogs */}
        <section id="blogs">
          <BlogGrid />
        </section>

        <SectionDivider />

        {/* Side Projects */}
        <SideProjects />

        {/* Open Source */}
        <section id="opensource">
          <OpenSourceList />
        </section>

        <SectionDivider />

        <section id="skills">
          <SkillsSection />
        </section>

        <SectionDivider />

        {/* Certifications */}
        <section id="certifications">
          <CertificationsMarquee />
        </section>

        <SectionDivider />

        {/* Testimonials */}
        <section id="testimonials">
          <TestimonialsCarousel />
        </section>

        <SectionDivider />

        {/* Connect Section */}
        <section id="connect">
          <ConnectSection />
        </section>


        {/* Book Shelf */}
        <section id="books">
          <BookShelf />
        </section>
      </div>

      <ActionBar />
      <FloatingMenu />
    </main>
  );
}
