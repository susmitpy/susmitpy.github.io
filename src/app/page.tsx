"use client"

import { BlogsSection } from '@/components/Blogs';
import { Connect } from '@/components/Connect';
import HeroSection from '@/components/HeroSection';
import LiveProjects from '@/components/LiveProjects';
import Repos from '@/components/Repos';
import SkillsSection from '@/components/SkillsSection';
import { TalksSection } from '@/components/Talks';
import TestimonialsSections from '@/components/TestimonialsSection';



export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <SkillsSection />
      <LiveProjects />
      <Repos />
      <BlogsSection />
      <TalksSection />
      <TestimonialsSections />
      <Connect />
    </main>
  );
}
