"use client"

import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <SkillsSection />
    </main>
  );
}
