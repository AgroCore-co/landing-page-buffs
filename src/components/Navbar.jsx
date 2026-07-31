import React, { useState, useEffect } from 'react';
import { m } from 'framer-motion';
import { ease } from '@/lib/motion';

const NAV_LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#projeto', label: 'O Projeto' },
  { href: '#vivencia', label: 'Vivência' },
  { href: '#equipe', label: 'Equipe' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contato', label: 'Contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Antes isto rodava `getBoundingClientRect` em 6 elementos a cada evento
    // de scroll — leitura de layout forçada dezenas de vezes por segundo.
    // O IntersectionObserver entrega a mesma informação sem tocar no layout.
    const targets = NAV_LINKS.map(({ href }) =>
      document.getElementById(href.slice(1))
    ).filter(Boolean);

    if (!targets.length) return;

    const visible = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.intersectionRatio);
          else visible.delete(entry.target.id);
        }

        if (!visible.size) return;
        // Seção com maior área visível vence.
        const [topId] = [...visible.entries()].sort((a, b) => b[1] - a[1])[0];
        setActiveSection(topId);
      },
      {
        // Descarta a faixa sob a navbar para a seção só ativar quando
        // realmente domina a viewport.
        rootMargin: '-80px 0px -35% 0px',
        threshold: [0.15, 0.35, 0.6, 0.85],
      }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <m.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.65, ease: ease.out }}
      className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-500 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md shadow-[0_1px_0_rgba(116,69,51,0.12)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24 flex justify-between items-center h-16 md:h-20">
        {/* Logo */}
        <a
          href="#"
          aria-label="AgroCore — voltar ao topo"
          className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-strong"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/agrocore-logo.svg"
            alt="AgroCore"
            width={160}
            height={40}
            className="h-7 sm:h-8 md:h-10 w-auto"
          />
        </a>

        {/* Links */}
        <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-x-6 lg:gap-x-8">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = activeSection === href.slice(1);
            return (
              <a
                key={href}
                href={href}
                aria-current={isActive ? 'true' : undefined}
                className={`relative py-1 text-[11px] md:text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-200 rounded-sm ${
                  isActive
                    ? 'text-text-primary'
                    : 'text-text-primary/70 hover:text-text-primary'
                }`}
              >
                {label}
                {isActive && (
                  <m.span
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-primary-accent"
                    transition={{ type: 'spring', stiffness: 320, damping: 32 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA mobile */}
        <a
          href="#contato"
          className="group relative md:hidden overflow-hidden text-[11px] font-bold tracking-[0.2em] uppercase border border-text-primary px-4 py-2 text-text-primary transition-colors duration-300 hover:text-text-light"
        >
          <span className="relative z-10">Contato</span>
          <span className="absolute inset-0 z-0 translate-y-full bg-text-primary transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0" />
        </a>
      </div>
    </m.header>
  );
}
