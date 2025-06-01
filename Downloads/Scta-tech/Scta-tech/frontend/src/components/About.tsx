import React from 'react';
import { Button } from '@/components/ui/button';

const About = () => {
  const uniqueFeatures = [
    {
      id: 1,
      number: "01",
      title: "Tailored Strategies",
      description: "We provide bespoke AI solutions crafted to fit your specific business requirements. Our approach ensures maximum efficiency and innovative outcomes."
    },
    {
      id: 2,
      number: "02",
      title: "Deep Industry Knowledge",
      description: "Our team's extensive experience across various sectors equips us with insights necessary for impactful AI implementations. We understand your industry like no one else."
    },
    {
      id: 3,
      number: "03",
      title: "Sustainable Partnerships",
      description: "We believe in nurturing long-term relationships that promote growth and success. Our commitment to your journey extends beyond project completion."
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-cloud-dark -z-10"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(138,43,226,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(65,105,225,0.05)_1px,transparent_1px)] bg-[size:50px_50px] -z-10"></div>
      
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cloud-purple to-cloud-blue bg-clip-text text-transparent">
            Innovative AI Solutions
          </h2>
          <p className="text-lg text-foreground/70">
            Transforming your business challenges into AI-driven innovations. Empowering organizations with tailored strategies for growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="animate-on-scroll opacity-0">
            <div className="glass-card p-6 rounded-xl overflow-hidden">
              <img 
                src="/scta-team.png" 
                alt="Our Team" 
                className="w-full h-auto rounded-lg mb-6" 
              />
              <div className="bg-gradient-to-r from-cloud-purple to-cloud-blue h-1 w-24 mb-6"></div>
              <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
              <p className="text-foreground/70 mb-4">
                SCTATech was founded with a vision to lead in AI consultancy. Starting with a small team of passionate experts, we've grown into a trusted partner for businesses seeking innovative AI solutions.              </p>
              <p className="text-foreground/70 mb-4">
                Over the years, we've delivered impactful results across industries—partnering with startups and Fortune 500 companies alike. Our focus remains on driving transformation, reducing challenges, and maximizing growth through cutting-edge AI technology.              </p>
              {/* <p className="text-foreground/70">
                We have partnered with a diverse range of clients, from startups to Fortune 500 companies, across various industries. Our expertise has empowered organizations to embrace AI advancements effectively, minimizing operational challenges and maximizing growth potential.
              </p> */}
            </div>
          </div>
          
          <div className="space-y-6 animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-6 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cloud-purple to-cloud-blue flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h3.8a2 2 0 0 0 1.4-.6L12 4.6a2 2 0 0 1 1.4-.6h3.8a2 2 0 0 1 2 2v2.4Z"/>
                  <path d="M14 14v4"/>
                  <path d="M10 14v4"/>
                  <path d="M17 9v8"/>
                  <path d="M7 9v8"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-foreground/70">By fostering strong relationships, we ensure that every client receives customized strategies tailored to their unique business needs. Our track record speaks for itself, showcasing numerous successful transformations and satisfied partners.</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cloud-purple to-cloud-blue flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 18.5A9 9 0 1 1 18.5 18.5"/>
                  <path d="M2.5 4.5A9 9 0 0 1 13 18.5"/>
                  <path d="m15 12 5 6"/>
                  <path d="m15 18 5-6"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
              <p className="text-foreground/70">To be at the forefront of AI innovation, enabling businesses worldwide to harness the transformative power of artificial intelligence. We envision a future where AI becomes an intuitive and integral part of every successful enterprise, driving unprecedented growth and efficiency.</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cloud-purple to-cloud-blue flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v4"/>
                  <path d="m6.41 6.41 2.83 2.83"/>
                  <path d="M2 12h4"/>
                  <path d="m6.41 17.59 2.83-2.83"/>
                  <path d="M12 22v-4"/>
                  <path d="m17.59 17.59-2.83-2.83"/>
                  <path d="M22 12h-4"/>
                  <path d="m17.59 6.41-2.83 2.83"/>
                  <circle cx="12" cy="12" r="4"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">What Sets Us Apart</h3>
              <div className="space-y-4 mt-4">
                {uniqueFeatures.map((feature) => (
                  <div key={feature.id} className="flex gap-4">
                    <div className="text-xl font-bold text-cloud-purple shrink-0">{feature.number}</div>
                    <div>
                      <h4 className="font-medium mb-1">{feature.title}</h4>
                      <p className="text-foreground/70 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* <div className="flex justify-center">
              <Button className="bg-gradient-to-r from-cloud-purple to-cloud-blue hover:opacity-90 transition-opacity">
                Get Started
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 