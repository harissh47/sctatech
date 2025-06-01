import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md py-2" : "bg-transparent py-4"
      )}
    >
      <nav className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/logo.png" 
            alt="SCTA Technologies Logo" 
            className="h-12 w-auto"
          />
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <NavLink href={isHomePage ? "#features" : "/#features"}>Features</NavLink>
          <NavLink href={isHomePage ? "#services" : "/#services"}>AI Services</NavLink>
          <NavLink href={isHomePage ? "#cloudservices" : "/#cloudservices"}>Cloud Services</NavLink>
          <NavLink href={isHomePage ? "#stats" : "/#stats"}>Stats</NavLink>
          <NavLink href={isHomePage ? "#about" : "/#about"}>About</NavLink>
          <NavLink href={isHomePage ? "#team" : "/#team"}>Team</NavLink>
          <NavLink href={isHomePage ? "#faq" : "/#faq"}>FAQ</NavLink>
          <NavLink href={isHomePage ? "#contact" : "/#contact"}>Contact</NavLink>
        </div>
        
        <div className="flex items-center gap-4">
          {/* <Button variant="ghost" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button 
            className="bg-gradient-to-r from-cloud-purple to-cloud-blue hover:opacity-90 transition-opacity"
          >
            Get Started
          </Button> */}
        </div>
      </nav>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  // If the href is an absolute path (starts with a /), use Link
  if (href.startsWith('/') && !href.includes('#')) {
    return (
      <Link 
        to={href}
        className="text-foreground/70 hover:text-foreground transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-cloud-purple after:transition-all"
      >
        {children}
      </Link>
    );
  }
  
  // Otherwise use a regular anchor tag for hash links or external links
  return (
    <a 
      href={href}
      className="text-foreground/70 hover:text-foreground transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-cloud-purple after:transition-all"
    >
      {children}
    </a>
  );
};

export default Navbar;
