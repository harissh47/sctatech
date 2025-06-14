import React from 'react';

const CloudServices = () => {
  const cloudServices = [
    {
      id: 1,
      title: "Cloud Assessment",
      description: "Comprehensive evaluation of your cloud environment for optimization opportunities.",
      services: [
        {
          name: "Multi-cloud Assessment",
          items: ["AWS, Azure, Google Cloud Platform", "IAAS, PAAS services", "Serverless Services", "Containers", "Industry best practices"]
        },
        {
          name: "Assessment Within Cloud",
          items: ["Infra & Apps", "Serverless functions", "Containers", "Industry best practices", "Security best practices"]
        },
        {
          name: "Cloud Transformation Assessment",
          items: ["Infra & Apps", "Data Validation", "Modernization", "Serverless Architecture", "Scaling Architecture"]
        }
      ]
    },
    {
      id: 2,
      title: "Cloud Migration",
      description: "Seamless transition between different cloud environments with minimal disruption.",
      services: [
        {
          name: "Cloud to Cloud Migration",
          items: ["Any public cloud to any public cloud", "IAAS and PAAS Service", "Data Migration", "Monolithic to Microservices", "EKS, ECS, AKS, GKE"]
        },
        {
          name: "Public to Private Cloud Migration",
          items: ["Any Public Cloud to Private cloud", "IAAS to IAAS", "PAAS to IAAS", "Data Migration"]
        },
        {
          name: "Private to Public Cloud Migration",
          items: ["Private cloud to any Public cloud", "IAAS to IAAS", "IAAS to PAAS", "Data Migration", "Containerization", "Serverless Migration"]
        }
      ]
    },
    {
      id: 3,
      title: "Enterprise Consultancy",
      description: "Strategic guidance for optimizing your cloud infrastructure and maximizing ROI.",
      services: [
        {
          name: "Cost Optimization",
          items: ["Study and optimize cost for the existing Cloud Environment", "Study and optimize technology / services for the existing Cloud Environment"]
        },
        {
          name: "Business Insights",
          items: ["Business insights & Trending based on Data analysis - End to End", "Unlock business growth and elevate customer success with the power of AI + Data"]
        },
        {
          name: "IT Architecture",
          items: ["Top-down approach of IT Auto scale architecture design as per business projection", "Design the target environment as per customer business requirement"]
        }
      ]
    }
  ];

  return (
    <section id="cloudservices" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-cloud-dark -z-10"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(138,43,226,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(65,105,225,0.05)_1px,transparent_1px)] bg-[size:50px_50px] -z-10"></div>
      
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cloud-purple to-cloud-blue bg-clip-text text-transparent">
            Cloud Solutions
          </h2>
          <p className="text-lg text-white">
            Solutions for Cloud Technology and Apps - Cloud Neutral Preferred Partner
          </p>
        </div>
        
        {cloudServices.map((cloudService) => (
          <div key={cloudService.id} className="mb-16 animate-on-scroll opacity-0" style={{ animationDelay: `${0.1 * cloudService.id}s` }}>
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-cloud-purple to-cloud-blue bg-clip-text text-transparent">{cloudService.title}</h3>
              <p className="text-white mb-6">{cloudService.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cloudService.services.map((service, index) => (
                  <div key={index} className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <h4 className="font-medium text-cloud-purple mb-3">{service.name}</h4>
                    <ul className="space-y-2">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-sm">
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
                            className="text-cloud-purple mt-0.5 shrink-0"
                          >
                            <path d="M5 12h14"/>
                            <path d="m12 5 7 7-7 7"/>
                          </svg>
                          <span className="text-white">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        
        <div className="glass-card p-6 rounded-xl animate-on-scroll opacity-0" style={{ animationDelay: '0.4s' }}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-cloud-purple to-cloud-blue bg-clip-text text-transparent">Additional Services</h3>
            <p className="text-white">Complete suite of cloud solutions to support your business</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <h4 className="font-medium text-cloud-purple mb-3">Managed Service</h4>
              <ul className="space-y-2 text-sm text-white">
                <li>Single partner for end-to-end cloud managed service</li>
                <li>Proactive monitoring and predictive event & alert handling</li>
                <li>Product engineering capability and certified people</li>
              </ul>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <h4 className="font-medium text-cloud-purple mb-3">FinOps</h4>
              <ul className="space-y-2 text-sm text-white">
                <li>Multi-Cloud Support</li>
                <li>Data-driven analysis for resource right-sizing</li>
                <li>Automated comprehensive resource and service optimization</li>
              </ul>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <h4 className="font-medium text-cloud-purple mb-3">Landing Zone Design</h4>
              <ul className="space-y-2 text-sm text-white">
                <li>Top-down approach of IT Auto scale architecture</li>
                <li>Design the target Cloud environment</li>
                <li>Architect most secure and multi cloud adaptability</li>
              </ul>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <h4 className="font-medium text-cloud-purple mb-3">DevOps & Security</h4>
              <ul className="space-y-2 text-sm text-white">
                <li>Vulnerability Management</li>
                <li>Cloud Compliance</li>
                <li>Niche skills with rich industry experience</li>
              </ul>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <h4 className="font-medium text-cloud-purple mb-3">Observability</h4>
              <ul className="space-y-2 text-sm text-white">
                <li>Dynatrace Engaging Partner</li>
                <li>Datadog Authorized Partner</li>
                <li>Infra/APM Monitoring & Management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudServices; 