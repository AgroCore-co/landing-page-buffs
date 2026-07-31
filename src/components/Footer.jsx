import React from 'react';

const LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#projeto', label: 'O Projeto' },
  { href: '#vivencia', label: 'Vivência' },
  { href: '#equipe', label: 'Equipe' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contato', label: 'Contato' },
];

// Fora do componente: o ano não muda entre render e hidratação.
const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative w-full py-12 md:py-20 bg-text-primary flex flex-col items-center justify-center overflow-hidden font-sans border-t border-white/5">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] md:w-[800px] md:h-[300px] rounded-full bg-primary/5 blur-[80px] md:blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        <nav
          aria-label="Rodapé"
          className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3 md:gap-x-8 md:gap-y-4 text-[11px] md:text-xs font-medium tracking-[0.15em] md:tracking-[0.2em] text-white/65 uppercase mb-10 md:mb-12"
        >
          {LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="rounded-sm hover:text-primary-on-dark transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        <p className="text-[11px] md:text-xs font-light tracking-widest text-white/55 uppercase text-center">
          © {CURRENT_YEAR} AgroCore. Todos os direitos reservados.
        </p>
      </div>

      <div
        className="absolute -bottom-6 md:-bottom-10 opacity-[0.03] text-white select-none pointer-events-none"
        aria-hidden="true"
      >
        <span className="text-[18vw] md:text-[13vw] font-black tracking-tighter leading-none">
          AGROCORE
        </span>
      </div>
    </footer>
  );
}
