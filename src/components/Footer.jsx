import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full py-12 md:py-20 bg-text-primary flex flex-col items-center justify-center overflow-hidden font-sans border-t border-white/5">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] md:w-[800px] md:h-[300px] rounded-full bg-primary/5 blur-[80px] md:blur-[120px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        
        {/* Links — agora inclui FAQ */}
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3 md:gap-x-8 md:gap-y-4 text-[9px] sm:text-[10px] md:text-xs font-medium tracking-[0.15em] md:tracking-[0.2em] text-white/40 uppercase mb-10 md:mb-12">
          <a href="#sobre"    className="hover:text-primary transition-colors duration-200">Sobre</a>
          <a href="#projeto"  className="hover:text-primary transition-colors duration-200">O Projeto</a>
          <a href="#vivencia" className="hover:text-primary transition-colors duration-200">Vivência</a>
          <a href="#equipe"   className="hover:text-primary transition-colors duration-200">Equipe</a>
          <a href="#faq"      className="hover:text-primary transition-colors duration-200">FAQ</a>
          <a href="#contato"  className="hover:text-primary transition-colors duration-200">Contato</a>
        </div>

        <div className="text-center">
          <p className="text-[9px] md:text-xs font-light tracking-widest text-white/30 uppercase">
            © {currentYear} AgroCore. Todos os direitos reservados.
          </p>
        </div>

      </div>

      <div className="absolute -bottom-6 md:-bottom-10 opacity-[0.02] text-white select-none pointer-events-none">
        <span className="text-[18vw] md:text-[13vw] font-black tracking-tighter leading-none">AGROCORE</span>
      </div>

    </footer>
  );
}