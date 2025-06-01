
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Pricing = () => {
  const tiers = [
    {
      name: "Startup",
      price: "$29",
      period: "/month",
      description: "Perfect for small teams and startups",
      features: [
        "2 CPU cores",
        "4GB RAM",
        "100GB Storage",
        "1TB Bandwidth",
        "Basic support"
      ],
      highlight: false,
      buttonText: "Start Free Trial"
    },
    {
      name: "Business",
      price: "$99",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "8 CPU cores",
        "16GB RAM",
        "500GB Storage",
        "5TB Bandwidth",
        "Priority support",
        "Advanced analytics"
      ],
      highlight: true,
      buttonText: "Get Started"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large-scale operations",
      features: [
        "Dedicated resources",
        "Custom RAM allocation",
        "Unlimited storage",
        "Unlimited bandwidth",
        "24/7 premium support",
        "Custom security solutions"
      ],
      highlight: false,
      buttonText: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-cloud-dark -z-10"></div>
      
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cloud-purple to-cloud-blue bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-foreground/70">
            Choose the plan that works for your needs. No hidden fees, no surprises.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-xl p-6 overflow-hidden ${
                tier.highlight 
                  ? 'glass-card border-2 border-cloud-purple/50' 
                  : 'border border-white/10 bg-background/40'
              }`}
            >
              {tier.highlight && (
                <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-cloud-purple to-cloud-blue py-1 text-center text-white text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className={`pt-${tier.highlight ? '6' : '0'}`}>
                <h3 className="text-xl font-semibold">{tier.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="ml-1 text-foreground/70">{tier.period}</span>
                </div>
                <p className="mt-2 text-foreground/70">{tier.description}</p>
                
                <ul className="mt-6 space-y-3 text-sm">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-4 w-4 text-cloud-purple mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`mt-8 w-full ${
                    tier.highlight 
                      ? 'bg-gradient-to-r from-cloud-purple to-cloud-blue hover:opacity-90' 
                      : 'bg-background'
                  }`}
                >
                  {tier.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
