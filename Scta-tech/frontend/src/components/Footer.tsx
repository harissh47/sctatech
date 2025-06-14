import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const getHref = (href: string) => {
    // If it's already an absolute URL or a different page link, return as is
    if (href.startsWith('http') || href.startsWith('/') || href === '#') {
      return href;
    }
    
    // If it's a section link and we're not on the home page, prefix with '/'
    if (href.startsWith('#') && !isHomePage) {
      return '/' + href;
    }
    
    return href;
  };

  return (
    <footer className="bg-cloud-dark border-t border-white/10 pt-16 pb-8">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/logo.png" 
                alt="SCTA Technologies Logo" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-4 text-foreground/70 max-w-xs">
              Empowering Business with AI & Cloud Solutions
            </p>
          </div>
          
          <FooterColumn 
            title="Company" 
            links={[
              { name: "About Us", href: getHref("#about") },
              { name: "Careers", href: "/careers" },
              { name: "Contact", href: getHref("#contact") },
              { name: "Privacy Policy", href: "/privacy-policy" }
            ]} 
          />
          
          <FooterColumn 
            title="Product" 
            links={[
              { name: "Features", href: getHref("#features") },
              { name: "Solutions", href: getHref("#cloudservices") },
              // { name: "Pricing", href: getHref("#pricing") },
              // { name: "Customers", href: "#" }
            ]}
          />
          
          <FooterColumn 
            title="Resources" 
            links={[
              { name: "Documentation", href: "#" },
              // { name: "API Reference", href: "#" },
              // { name: "Blog", href: "#" },
              // { name: "Community", href: "#" }
            ]} 
          />
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/70 text-sm">
            © {new Date().getFullYear()} <b>SCTA Technologies.</b> All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* <SocialLink icon="facebook" href="#" /> */}
            <SocialLink icon="twitter" href="https://x.com/sctatech" />
            <SocialLink icon="linkedin" href="https://www.linkedin.com/company/sctatechnologies/" />
            {/* <SocialLink icon="instagram" href="#" /> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, links }: { title: string; links: { name: string; href: string }[] }) => {
  return (
    <div>
      <h3 className="font-semibold mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <a 
              href={link.href} 
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SocialLink = ({ icon, href }: { icon: string; href: string }) => {
  return (
    <a 
      href={href}
      className="text-foreground/70 hover:text-foreground transition-colors"
    >
      <span className="sr-only">{icon}</span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {icon === 'facebook' && (
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        )}
        {icon === 'twitter' && (
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        )}
        {icon === 'linkedin' && (
          <>
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </>
        )}
        {icon === 'instagram' && (
          <>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </>
        )}
      </svg>
    </a>
  );
};

export default Footer;
