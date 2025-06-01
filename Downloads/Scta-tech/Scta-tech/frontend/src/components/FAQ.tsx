import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      id: "item-1",
      question: "What makes SCTATech a leader in cloud strategy?",
      answer: 'SCTATech excels in cloud strategy by translating complex technologies into practical strategies. Our forward-thinking approach ensures our solutions are both transformative and aligned with your vision.'
    },
    {
      id: "item-2",
      question: "What cloud services does new_sctatech offer?",
      answer: "At SCTATech, we focus on personalised cloud solutions that streamline processes and support business expansion. From cloud migration to optimisation, our team delivers strategies designed to elevate your business."
    },
    {
      id: "item-3",
      question: "How does SCTATech guarantee success?",
      answer: "SCTATech guarantees success through a thorough understanding of your business goals. Our approach involves detailed analysis, strategic planning, and continuous improvement to ensure impactful cloud transformations."
    }
  ];

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-cloud-dark -z-10"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(138,43,226,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(65,105,225,0.05)_1px,transparent_1px)] bg-[size:50px_50px] -z-10"></div>
      
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cloud-purple to-cloud-blue bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-foreground/70">
            Find answers to common questions about our cloud platform.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto glass-card p-6 rounded-xl animate-on-scroll opacity-0">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-b border-white/10 last:border-0">
                <AccordionTrigger className="text-left font-medium py-4 text-lg hover:text-cloud-purple transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-16 text-center animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
          <div className="inline-block glass-card p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">Can't find what you're looking for?</h3>
            <p className="text-foreground/70 mb-4">
              Our support team is here to help with any other questions you might have.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cloud-purple to-cloud-blue px-6 py-3 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
            >
              Contact Support
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 