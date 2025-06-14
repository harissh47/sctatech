import React, { useEffect } from 'react';

const Stats = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const counterEl = entry.target;
            const target = parseInt(counterEl.getAttribute('data-target') || '0', 10);
            const duration = 2000; // animation duration in ms
            const stepTime = 20;
            const totalSteps = duration / stepTime;
            const stepSize = target / totalSteps;
            let currentCount = 0;
            
            const updateCounter = () => {
              currentCount += stepSize;
              if (currentCount < target) {
                counterEl.textContent = `${Math.ceil(currentCount)}`;
                setTimeout(updateCounter, stepTime);
              } else {
                counterEl.textContent = `${target}`;
              }
            };
            
            updateCounter();
            observer.unobserve(counterEl);
          }
        });
      },
      { threshold: 0.5 }
    );
    
    const counterElements = document.querySelectorAll('.counter-number');
    counterElements.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      counterElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="stats" className="py-16 relative bg-gradient-to-b from-cloud-dark to-background">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard number={5} suffix="+" label="Additional Services" />
          <StatCard number={3} suffix="+" label="Enterprise Consultancy" />
          <StatCard number={3} suffix="+" label="Cloud Migration" />
          <StatCard number={3} suffix="+" label="Cloud Assessment" />
        </div>
        
        {/* <div className="flex flex-wrap justify-center gap-8 mt-16">
          <ClientLogo name="Acme Inc" />
          <ClientLogo name="TechCorp" />
          <ClientLogo name="Innovate" />
          <ClientLogo name="FutureSys" />
          <ClientLogo name="DataFlow" />
        </div> */}
      </div>
    </section>
  );
};

const StatCard = ({ number, suffix, label }: { number: number; suffix: string; label: string }) => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center">
        <span 
          className="counter-number text-3xl md:text-5xl font-bold bg-gradient-to-r from-cloud-purple to-cloud-blue bg-clip-text text-transparent"
          data-target={number}
        >
          0
        </span>
        <span className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cloud-purple to-cloud-blue bg-clip-text text-transparent">
          {suffix}
        </span>
      </div>
      <p className="text-foreground/80 mt-2">{label}</p>
    </div>
  );
};

const ClientLogo = ({ name }: { name: string }) => {
  return (
    <div className="h-12 px-6 flex items-center justify-center border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
      <span className="font-medium text-foreground/90">{name}</span>
    </div>
  );
};

export default Stats;
