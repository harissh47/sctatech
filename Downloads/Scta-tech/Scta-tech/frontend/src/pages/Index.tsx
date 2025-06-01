import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Services from '@/components/Services';
import CloudServices from '@/components/CloudServices';
import Team from '@/components/Team';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';

const Index = () => {
  useEffect(() => {
    // Initialize animation observers for elements that come into view
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });
    
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <CloudServices />
      <Stats />
      <About />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
