"use client"

import HeroSection from '@/components/HeroSection';
import LiveProjects from '@/components/LiveProjects';
import SkillsSection from '@/components/SkillsSection';

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <SkillsSection />
      <LiveProjects />
    </main>
  );
}
