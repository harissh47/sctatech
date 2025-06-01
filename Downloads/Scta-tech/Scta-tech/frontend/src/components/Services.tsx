import React from 'react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Automated Customer Support",
      description: "Enhance user experience with AI-powered support solutions that are available 24/7.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
        </svg>
      ),
      features: ["Instant responses", "24x7 availability", "Personalized interactions", "Reduced support costs"]
    },
    {
      id: 2,
      title: "Personalized Marketing",
      description: "Leverage AI-powered insights to create targeted campaigns that resonate with your audience.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/>
          <path d="M18 14h-8"/>
          <path d="M15 18h-5"/>
          <path d="M10 6h8v4h-8V6Z"/>
        </svg>
      ),
      features: ["Customer segmentation", "Targeted messaging", "Improved conversion rates", "Marketing analytics"]
    },
    {
      id: 3,
      title: "Inventory Optimization",
      description: "Streamline operations with AI-driven inventory management to reduce costs and improve efficiency.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"/>
          <circle cx="17" cy="7" r="5"/>
        </svg>
      ),
      features: ["Demand forecasting", "Inventory management", "Cost reduction", "Stock optimization"]
    },
    {
      id: 4,
      title: "Knowledge Discovery & Management",
      description: "Build intelligent systems that deliver precise answers from vast datasets and automate knowledge management.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 16v-4"/>
          <path d="M12 8h.01"/>
        </svg>
      ),
      features: ["Intelligent search", "Dynamic FAQs", "Content summarization", "Document generation"]
    },
    {
      id: 5,
      title: "Technical HelpDesk Support",
      description: "Empower IT teams with AI-driven support solutions that automate routine tasks and enhance productivity.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      ),
      features: ["Instant L1/L2 support", "Environment-specific answers", "Document generation", "Knowledge base creation"]
    },
    {
      id: 6,
      title: "AI-Based Healthcare Scheduling",
      description: "Optimize healthcare operations with AI-powered scheduling systems that improve patient experience.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"/>
          <path d="M16 2v4"/>
          <path d="M8 2v4"/>
          <path d="M3 10h18"/>
        </svg>
      ),
      features: ["Patient-friendly interface", "Provider-focused AI tools", "Personalized recommendations", "Improved efficiency"]
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-cloud-dark -z-10"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(138,43,226,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(65,105,225,0.05)_1px,transparent_1px)] bg-[size:50px_50px] -z-10"></div>
      
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cloud-purple to-cloud-blue bg-clip-text text-transparent">
            AI-Driven Solutions
          </h2>
          <p className="text-lg text-foreground/70">
            Empowering businesses with state-of-the-art AI solutions to reshape the future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="glass-card p-6 rounded-xl animate-on-scroll opacity-0"
              style={{ animationDelay: `${0.1 * service.id}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cloud-purple to-cloud-blue flex items-center justify-center text-white shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-foreground/70 mb-4">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          className="text-cloud-purple"
                        >
                          <path d="M20 6 9 17l-5-5"/>
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-on-scroll opacity-0">
          <Button
            className="bg-gradient-to-r from-cloud-purple to-cloud-blue hover:opacity-90 transition-opacity text-white rounded-full px-8 py-6 text-lg"
            onClick={() => {
              window.location.hash = "#contact";
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Request Custom AI Solution
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services; 