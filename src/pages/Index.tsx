import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { CoordinatorSection } from '@/components/CoordinatorSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { Footer } from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Refresh ScrollTrigger after page load
    ScrollTrigger.refresh();
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <CoordinatorSection />
      <BenefitsSection />
      <Footer />
    </main>
  );
};

export default Index;
