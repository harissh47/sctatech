import React, { useState } from 'react';
import { sendContactForm } from './api/contactapi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const Contact = () => {
  // Form state
  const [form, setForm] = useState({
    user: '',
    phone: '',
    email: '',
    message: '',
    interested: 'infrastructure',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  // Handle radio group change
  const handleRadioChange = (value: string) => {
    setForm((prev) => ({ ...prev, interested: value }));
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');
    try {
      await sendContactForm(form);
      setSuccess('Message sent successfully!');
      setForm({ user: '', phone: '', email: '', message: '', interested: 'infrastructure' });
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-cloud-dark -z-10"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(138,43,226,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(65,105,225,0.05)_1px,transparent_1px)] bg-[size:50px_50px] -z-10"></div>
      
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cloud-purple to-cloud-blue bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-foreground/70">
            Have questions? Ready to start your cloud journey? Our team is here to help.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="animate-on-scroll opacity-0">
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <Label htmlFor="user">Name</Label>
                  <Input
                    id="user"
                    type="text"
                    placeholder="John"
                    className="mt-1 bg-white/5 border-white/10 placeholder:text-foreground/30"
                    value={form.user}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="mt-1 bg-white/5 border-white/10 placeholder:text-foreground/30"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Mobile Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 912345XXXX"
                    className="mt-1 bg-white/5 border-white/10 placeholder:text-foreground/30"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Label>What are you interested in?</Label>
                  <RadioGroup value={form.interested} onValueChange={handleRadioChange} className="mt-2 space-y-3">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Cloud Infrastructure" id="infrastructure" />
                      <Label htmlFor="infrastructure">Cloud Infrastructure</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Data Storage & Management" id="storage" />
                      <Label htmlFor="storage">Data Storage & Management</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="AI & Machine Learning" id="ai" />
                      <Label htmlFor="ai">AI & Machine Learning</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Security & Compliance" id="security" />
                      <Label htmlFor="security">Security & Compliance</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Other" id="other" />
                      <Label htmlFor="other">Other</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us what you're looking for..."
                    className="mt-1 h-32 bg-white/5 border-white/10 placeholder:text-foreground/30"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button
                  className="w-full bg-gradient-to-r from-cloud-purple to-cloud-blue hover:opacity-90 transition-opacity"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
                {success && <div className="text-green-600 text-center">{success}</div>}
                {error && <div className="text-red-600 text-center">{error}</div>}
              </form>
            </div>
          </div>
          
          <div className="space-y-8 animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Our Offices</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cloud-purple to-cloud-blue flex items-center justify-center text-white shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="m12 2 2 5h5l-4 4 2 5-5-3-5 3 2-5-4-4h5z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Chennai (HQ)</h4>
                    <p className="text-foreground/70 text-sm mt-1">
                    3135, Splendour,<br />
                    172, Kamaraj Nagar,OMR<br />
                    Chennai, India
                    </p>
                  </div>
                </div>
                
  
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cloud-purple">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span className="text-foreground/70">+91 9444855167                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cloud-purple">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                  <span className="text-foreground/70">connect@sctatech.com
                  </span>
                </div>
                
              </div>
              
              <div className="mt-6">
                <h4 className="font-medium mb-3">Follow Us</h4>
                <div className="flex items-center gap-4">
                  {/* <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                    </svg>
                  </a> */}
                  <a href="https://www.linkedin.com/company/sctatechnologies/" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect width="4" height="12" x="2" y="9"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </a>
                  <a href="https://x.com/sctatech" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 