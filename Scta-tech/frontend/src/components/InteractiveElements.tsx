
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const FloatingElements = () => {
  const elementsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!elementsRef.current) return;
    
    const elements = elementsRef.current.querySelectorAll('.floating-element');
    
    elements.forEach((element) => {
      gsap.to(element, {
        y: 'random(-20, 20)',
        x: 'random(-20, 20)',
        rotation: 'random(-10, 10)',
        duration: 'random(3, 6)',
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 'random(0, 3)'
      });
    });
    
    return () => {
      gsap.killTweensOf(elements);
    };
  }, []);
  
  return (
    <div ref={elementsRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="floating-element absolute w-16 h-16 rounded-full bg-gradient-to-r from-cloud-purple/20 to-cloud-blue/20 backdrop-blur-2xl"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.5 + Math.random() * 0.3
          }}
        ></div>
      ))}
    </div>
  );
};

export const ScrollReveal = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!elementRef.current) return;
    
    gsap.fromTo(
      elementRef.current,
      { 
        y: 50, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: elementRef.current,
          start: 'top 80%',
        }
      }
    );
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <div ref={elementRef} className={`${className} opacity-0`}>
      {children}
    </div>
  );
};

export const HoverCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const tiltX = (y - centerY) / 10;
      const tiltY = (centerX - x) / 10;
      
      gsap.to(card, {
        rotationX: tiltX,
        rotationY: tiltY,
        duration: 0.5,
        ease: 'power2.out',
        transformPerspective: 1000,
      });
    };
    
    const handleMouseLeave = () => {
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.5,
        ease: 'power2.out'
      });
    };
    
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return (
    <div 
      ref={cardRef} 
      className={`${className} transition-shadow duration-300 hover:shadow-xl`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
};

export default { FloatingElements, ScrollReveal, HoverCard };
