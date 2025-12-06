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
    <main className="min-h-screen relative" style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-primary)' }}>
      <div className="max-w-7xl mx-auto">

        {/* Hero & Key Features - No wrapper, uses default bg-main */}
        <div className="p-4 md:p-8">
          <div className="space-y-16">
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
          </div>
        </div>

        <SectionDivider />

        {/* Featured Work Section - Alternate background */}
        <section id="projects" className="section-wrapper">
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

        {/* Experience Timeline - Main background */}
        <section id="experience" className="section-wrapper">
          <ExperienceTimeline />
        </section>

        <SectionDivider />

        {/* Tech Blogs - Alternate background */}
        <section id="blogs" className="section-wrapper">
          <BlogGrid />
        </section>

        <SectionDivider />

        {/* Side Projects - Main background */}
        <div className="section-wrapper">
          <SideProjects />
        </div>

        {/* Open Source - Same section, no wrapper */}
        <section id="opensource" className="px-4 md:px-8 pb-16">
          <OpenSourceList />
        </section>

        <SectionDivider />

        {/* Skills - Alternate background */}
        <section id="skills" className="section-wrapper">
          <SkillsSection />
        </section>

        <SectionDivider />

        {/* Certifications - Main background */}
        <section id="certifications" className="section-wrapper">
          <CertificationsMarquee />
        </section>

        <SectionDivider />

        {/* Testimonials - Alternate background */}
        <section id="testimonials" className="section-wrapper">
          <TestimonialsCarousel />
        </section>

        <SectionDivider />

        {/* Connect Section - Main background */}
        <section id="connect" className="section-wrapper">
          <ConnectSection />
        </section>

        {/* Book Shelf - Alternate background */}
        <section id="books" className="section-wrapper">
          <BookShelf />
        </section>
      </div>

      <ActionBar />
      <FloatingMenu />
    </main>
  );
}
