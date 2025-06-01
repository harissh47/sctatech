import React from 'react';
import { Link } from 'react-router-dom';

const Team = () => {
  const team = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer",
      bio: "With over 20 years in cloud technology and AI research, Sarah leads our vision for next-generation cloud solutions.",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      bio: "Former head of infrastructure at major tech giants, Michael brings unparalleled expertise in scaling cloud systems.",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Amara Patel",
      role: "VP of Product",
      bio: "A product visionary with experience building solutions that serve millions of users worldwide.",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Chief Security Officer",
      bio: "Cybersecurity expert with a mission to make cloud computing both powerful and secure for every business.",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      name: "Jennifer Walsh",
      role: "Chief Revenue Officer",
      bio: "Passionate about helping businesses unlock their potential through strategic cloud adoption.",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      name: "Alex Thompson",
      role: "Head of Customer Success",
      bio: "Dedicated to ensuring every customer maximizes value and achieves their goals with our platform.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="team" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-cloud-dark -z-10"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(138,43,226,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(65,105,225,0.05)_1px,transparent_1px)] bg-[size:50px_50px] -z-10"></div>
      
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cloud-purple to-cloud-blue bg-clip-text text-transparent">
            Our Leadership Team
          </h2>
          <p className="text-lg text-foreground/70">
            Meet the experts leading the way in cloud innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div 
              key={member.id}
              className="glass-card rounded-xl overflow-hidden transition-transform duration-300 hover:translate-y-[-5px] animate-on-scroll opacity-0"
              style={{ animationDelay: `${0.1 * member.id}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-cloud-purple mb-3">{member.role}</p>
                <p className="text-foreground/70 text-sm">{member.bio}</p>
                
                <div className="mt-4 flex items-center gap-3">
                  <a href="#" className="text-foreground/70 hover:text-cloud-purple transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="#" className="text-foreground/70 hover:text-cloud-purple transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block glass-card p-6 rounded-xl max-w-2xl animate-on-scroll opacity-0">
            <h3 className="text-xl font-semibold mb-4">Join Our Team</h3>
            <p className="text-foreground/70 mb-6">
              We're always looking for talented individuals who are passionate about cloud technology and innovation.
              Check out our open positions and join us in shaping the future of cloud computing.
            </p>
            <Link 
              to="/careers"
              className="inline-flex items-center gap-2 text-cloud-purple hover:underline transition-all"
            >
              View Open Positions
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team; 