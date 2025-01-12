"use client"

import { BlogsSection } from '@/components/Blogs';
import HeroSection from '@/components/HeroSection';
import LiveProjects from '@/components/LiveProjects';
import Repos from '@/components/Repos';
import SkillsSection from '@/components/SkillsSection';
import { TalksSection } from '@/components/Talks';



export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <SkillsSection />
      <LiveProjects />
      <Repos />
      <BlogsSection />
      <TalksSection />
    </main>
  );
}
