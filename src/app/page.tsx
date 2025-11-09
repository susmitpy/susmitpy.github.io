"use client"

import BadgesSection from '@/components/BadgesSection';
import { BlogsSection } from '@/components/Blogs';
import { Connect } from '@/components/Connect';
import { FloatingMenu } from '@/components/FloatingMenu';
import HeroSection from '@/components/HeroSection';
import LiveProjects from '@/components/LiveProjects';
import RecommendedBooks from '@/components/RecommendedBooks';
import Repos from '@/components/Repos';
import SkillsSection from '@/components/SkillsSection';
import { TalksSection } from '@/components/Talks';
import TestimonialsSections from '@/components/TestimonialsSection';
import { WorkExp } from '@/components/WorkExperience';



export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <SkillsSection />
      <LiveProjects />
      <Repos />
      <BlogsSection />
      <TalksSection />
      <BadgesSection />
      <TestimonialsSections />
      <WorkExp />      
      <Connect />
      <RecommendedBooks />
      <FloatingMenu />
    </main>
  );
}
