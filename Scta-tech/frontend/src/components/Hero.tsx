import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target); // Animate once per element
        }
      },
      { threshold: 0.1 }
    );
  
    const elements = document.querySelectorAll('.hero-animate');
  
    elements.forEach((el) => {
      // Animate immediately if already in viewport
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('animate-fade-in');
      } else {
        observer.observe(el);
      }
    });
  
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Cloud/AI particles animation
  useEffect(() => {
    if (!heroRef.current) return;
    
    const heroElement = heroRef.current;
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'absolute inset-0 overflow-hidden -z-10';
    heroElement.appendChild(particlesContainer);
    
    // Create particles
    const particleCount = window.innerWidth < 768 ? 15 : 30;
    const particles: HTMLDivElement[] = [];
    
    const createParticle = (isCloud: boolean) => {
      const particle = document.createElement('div');
      
      // Randomly decide if this will be a cloud or data node
      if (isCloud) {
        // Cloud style
        particle.className = 'absolute rounded-full bg-white/10 backdrop-blur-sm';
        particle.style.width = `${Math.random() * 80 + 40}px`;
        particle.style.height = `${Math.random() * 40 + 20}px`;
        particle.style.borderRadius = '40%';
        particle.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.2)';
        // Add cloud drift animation
        particle.style.animation = `cloud-drift ${Math.random() * 15 + 15}s infinite alternate`;
      } else {
        // Data node/AI circuit style
        particle.className = 'absolute bg-gradient-to-r from-cloud-purple/30 to-cloud-blue/30';
        particle.style.width = `${Math.random() * 30 + 5}px`;
        particle.style.height = `${Math.random() * 30 + 5}px`;
        // Make some rectangles and some circles for variety
        particle.style.borderRadius = Math.random() > 0.5 ? '50%' : '3px';
        // Add pulsing animation
        particle.style.animation = `pulse-glow ${Math.random() * 3 + 2}s infinite alternate`;
      }
      
      // Common styles and positioning
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      particle.style.opacity = `${Math.random() * 0.5 + 0.1}`;
      particle.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
      
      particlesContainer.appendChild(particle);
      return particle;
    };
    
    // Create initial particles
    for (let i = 0; i < particleCount; i++) {
      const isCloud = Math.random() > 0.6; // 40% chance for cloud, 60% for data node
      const particle = createParticle(isCloud);
      particles.push(particle);
      
      // Add random animation
      const duration = Math.random() * 70 + 30;
      const xDirection = Math.random() > 0.5 ? 1 : -1;
      const yDirection = Math.random() > 0.5 ? 1 : -1;
      const xAmount = Math.random() * 300 * xDirection;
      const yAmount = Math.random() * 200 * yDirection;
      
      // Animate position
      particle.animate(
        [
          { transform: `translate(0, 0) scale(${Math.random() * 0.5 + 0.5})` },
          { transform: `translate(${xAmount}px, ${yAmount}px) scale(${Math.random() * 0.7 + 0.3})` }
        ],
        {
          duration: duration * 1000,
          iterations: Infinity,
          direction: 'alternate',
          easing: 'ease-in-out'
        }
      );
    }
    
    // Connect some particles with lines to represent data transfer (for AI theme)
    const connectionsContainer = document.createElement('div');
    connectionsContainer.className = 'absolute inset-0 pointer-events-none -z-5';
    heroElement.appendChild(connectionsContainer);
    
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.className = 'absolute inset-0';
    connectionsContainer.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    
    const drawConnections = () => {
      if (!ctx) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections between some particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          // Only connect some particles
          if (Math.random() > 0.98) {
            const rect1 = particles[i].getBoundingClientRect();
            const rect2 = particles[j].getBoundingClientRect();
            
            const x1 = rect1.left + rect1.width / 2;
            const y1 = rect1.top + rect1.height / 2;
            const x2 = rect2.left + rect2.width / 2;
            const y2 = rect2.top + rect2.height / 2;
            
            const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
            
            // Only connect if they're not too far apart
            if (distance < 300) {
              // Draw line
              ctx.beginPath();
              ctx.moveTo(x1, y1);
              ctx.lineTo(x2, y2);
              
              // Create gradient for connection line
              const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
              gradient.addColorStop(0, 'rgba(147, 51, 234, 0.2)'); // cloud-purple with opacity
              gradient.addColorStop(1, 'rgba(59, 130, 246, 0.2)'); // cloud-blue with opacity
              
              ctx.strokeStyle = gradient;
              ctx.lineWidth = 1;
              ctx.stroke();
              
              // Draw small data packet moving along the line
              const packetPosition = (Date.now() % 3000) / 3000;
              const packetX = x1 + (x2 - x1) * packetPosition;
              const packetY = y1 + (y2 - y1) * packetPosition;
              
              ctx.beginPath();
              ctx.arc(packetX, packetY, 2, 0, Math.PI * 2);
              ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
              ctx.fill();
            }
          }
        }
      }
      
      requestAnimationFrame(drawConnections);
    };
    
    const animation = requestAnimationFrame(drawConnections);
    
    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup function
    return () => {
      if (heroElement.contains(particlesContainer)) {
        heroElement.removeChild(particlesContainer);
      }
      if (heroElement.contains(connectionsContainer)) {
        heroElement.removeChild(connectionsContainer);
      }
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animation);
    };
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg -z-20"></div>
      
      {/* Grid overlay effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)] -z-10"></div>
      
      <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-10 z-10">
        <div className="space-y-4 hero-animate opacity-0">
          <div className="inline-block rounded-full bg-cloud-purple/10 px-3 py-1 text-sm backdrop-blur-sm border border-cloud-purple/20">
            Empowering Business with AI & Cloud Solutions
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
            <span className="bg-gradient-to-r from-white to-white/75 bg-clip-text text-transparent">
              Transform Your Business with
            </span>
            <br />
            <span className="bg-gradient-to-r from-cloud-purple to-cloud-blue bg-clip-text text-transparent">
              Intelligent Technology
            </span>
          </h1>
          <p className="mx-auto max-w-[700px] text-lg md:text-xl text-foreground/80 md:leading-normal">
            We design and deploy state-of-the-art AI Solutions and Cloud Technologies to reshape the future for our clients.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 min-[400px]:gap-6 hero-animate opacity-0">
          <Button size="lg" className="bg-gradient-to-r from-cloud-purple to-cloud-blue hover:opacity-90 transition-opacity text-white rounded-full px-8">
            <a href="#cloudservices">Explore Solutions</a>
          </Button>
          <Button size="lg" variant="outline" className="border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 rounded-full px-8">
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
        
        <div className="relative w-full max-w-3xl mx-auto hero-animate opacity-0">
          <div className="glass-card rounded-2xl p-2 md:p-4">
            <div className="bg-cloud-dark/80 rounded-xl overflow-hidden">
              <div className="flex gap-2 p-3 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="p-4 text-left font-mono text-sm text-green-400">
                <p>$ scta-ai init</p>
                <p className="mt-2">Initializing AI environment...</p>
                <p>Setting up intelligent infrastructure...</p>
                <p>Configuring cloud integration...</p>
                <p className="mt-2 text-white">✓ Your AI & Cloud solution is ready!</p>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cloud-purple to-cloud-blue px-6 py-2 rounded-full text-white font-medium">
            Deploy in days, not months
          </div>
        </div>
      </div>
      
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#features" className="text-white/70 hover:text-white transition-colors">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 19V5"/>
            <path d="m5 12 7 7 7-7"/>
          </svg>
        </a>
      </div> */}
    </div>
  );
};

export default Hero;
