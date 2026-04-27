import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const brandYellow = "#ffcf78";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full py-12 md:py-20 bg-[#43310b] flex flex-col items-center justify-center overflow-hidden font-sans border-t border-white/5">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] md:w-[800px] md:h-[300px] rounded-full bg-[#ffcf78]/5 blur-[80px] md:blur-[120px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        
        {/* Ícones Sociais */}
        <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-10">
          <motion.a 
            whileHover={{ scale: 1.1, borderColor: brandYellow, color: brandYellow }}
            href="#" 
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 transition-colors duration-300"
            aria-label="Facebook"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
            </svg>
          </motion.a>

          <motion.a 
            whileHover={{ scale: 1.1, borderColor: brandYellow, color: brandYellow }}
            href="#" 
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z"/>
            </svg>
          </motion.a>

          <motion.a 
            whileHover={{ scale: 1.1, borderColor: brandYellow, color: brandYellow }}
            href="#" 
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 transition-colors duration-300"
            aria-label="Instagram"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" stroke="currentColor" fill="none"/>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" fill="currentColor"/>
            </svg>
          </motion.a>
        </div>

        {/* Links — agora inclui FAQ */}
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3 md:gap-x-8 md:gap-y-4 text-[9px] sm:text-[10px] md:text-xs font-medium tracking-[0.15em] md:tracking-[0.2em] text-white/40 uppercase mb-10 md:mb-12">
          <a href="#sobre"      className="hover:text-[#ffcf78] transition-colors duration-200">Sobre</a>
          <a href="#tecnologia" className="hover:text-[#ffcf78] transition-colors duration-200">Tecnologia</a>
          <a href="#solucoes"   className="hover:text-[#ffcf78] transition-colors duration-200">Soluções</a>
          <a href="#diferencial" className="hover:text-[#ffcf78] transition-colors duration-200">Diferencial</a>
          <a href="#vivencia"   className="hover:text-[#ffcf78] transition-colors duration-200">Vivência</a>
          <a href="#faq"        className="hover:text-[#ffcf78] transition-colors duration-200">FAQ</a>
          <a href="#contato"    className="hover:text-[#ffcf78] transition-colors duration-200">Contato</a>
        </div>

        <div className="text-center">
          <p className="text-[9px] md:text-xs font-light tracking-widest text-white/30 uppercase">
            © {currentYear} Buffs. Todos os direitos reservados.
          </p>
        </div>

      </div>

      <div className="absolute -bottom-6 md:-bottom-10 opacity-[0.02] text-white select-none pointer-events-none">
        <span className="text-[20vw] md:text-[15vw] font-black tracking-tighter leading-none">BUFFS</span>
      </div>

    </footer>
  );
}