import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const sections = ['sobre', 'projeto', 'vivencia', 'equipe', 'faq', 'contato'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Active section detection
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 80 && rect.bottom >= 80;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#projeto', label: 'O Projeto' },
    { href: '#vivencia', label: 'Vivência' },
    { href: '#equipe', label: 'Equipe' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.4, ease: [0.76, 0, 0.24, 1] }}
      className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-500 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md shadow-[0_1px_0_rgba(116,69,51,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24 flex justify-between items-center h-16 md:h-20">

        {/* Logo */}
        <a href="#" aria-label="AgroCore - Início">
          <img src="/agrocore-logo.svg" alt="AgroCore" className="h-7 sm:h-8 md:h-10 w-auto" />
        </a>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-x-6 lg:gap-x-8">
          {navLinks.map(({ href, label }) => {
            const id = href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <a
                key={href}
                href={href}
                className={`relative text-[10px] md:text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-200 ${
                  isActive ? 'text-text-primary' : 'text-text-primary/60 hover:text-text-primary'
                }`}
              >
                {label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA mobile */}
        <a
          href="#contato"
          className="md:hidden text-[9px] font-bold tracking-[0.2em] uppercase border border-text-primary px-4 py-2 text-text-primary hover:bg-text-primary hover:text-text-light transition-all duration-300"
        >
          Contato
        </a>
      </div>
    </motion.header>
  );
}