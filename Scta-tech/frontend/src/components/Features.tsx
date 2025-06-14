import React from 'react';

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Expert Team",
      description: "Our team comprises experienced AI specialists and cloud experts working across the globe with a client-centric approach.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      id: 2,
      title: "Multi-Cloud Architecture",
      description: "We specialize in enabling customers to effortlessly embrace, integrate, and deploy cloud-neutral environments.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
          <path d="M22 19a7 7 0 1 0-13.36-4"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "AI-Driven Solutions",
      description: "Transforming business challenges into innovative AI-powered solutions that drive growth and efficiency.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a8 8 0 0 0-8 8c0 6 8 12 8 12s8-6 8-12a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "Business Insights",
      description: "Unlock business growth and elevate customer success with the power of AI + Data analysis and deep industry knowledge.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18"/>
          <path d="m19 9-5 5-4-4-3 3"/>
        </svg>
      )
    },
    {
      id: 5,
      title: "Security & Compliance",
      description: "Our solutions incorporate cutting-edge security technology, ensuring regulatory compliance and data protection.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      )
    },
    {
      id: 6,
      title: "Digital Transformation",
      description: "We help businesses modernize their infrastructure and processes with innovative technology solutions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
          <path d="M12 9v4"/>
          <path d="M12 17h.01"/>
        </svg>
      )
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-cloud-dark -z-10"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(138,43,226,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(65,105,225,0.05)_1px,transparent_1px)] bg-[size:50px_50px] -z-10"></div>
      
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cloud-purple to-cloud-blue bg-clip-text text-transparent">
            Why Choose SCTA
          </h2>
          <p className="text-lg text-foreground/70">
            A dynamic team of professionals united by a shared passion for unlocking the transformative potential of AI and cloud technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="glass-card p-6 rounded-xl hover:translate-y-[-5px] transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cloud-purple to-cloud-blue flex items-center justify-center text-white mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
