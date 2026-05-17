import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const brandHighlight = "var(--color-primary)";
  const easePremium = [0.76, 0, 0.24, 1];

  return (
    <section aria-label="Início" className="relative w-full min-h-screen bg-background overflow-hidden font-sans text-text-primary">
      
      {/* --- EFEITO DE REVELAÇÃO --- */}
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 1.2, ease: easePremium, delay: 0.2 }}
        style={{ transformOrigin: "right" }}
        className="fixed top-0 left-0 w-full h-full bg-text-primary z-[60] pointer-events-none"
      />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 1.2, ease: easePremium, delay: 0.35 }}
        style={{ transformOrigin: "right" }}
        className="fixed top-0 left-0 w-full h-full bg-primary z-[50] pointer-events-none"
      />

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-30px) scale(1.05); }
          }
          .animate-float { animation: float 8s ease-in-out infinite; }
          .animate-float-delayed { animation: float 10s ease-in-out infinite 4s; }

          @keyframes scrollBounce {
            0%, 100% { transform: translateY(0); opacity: 1; }
            50% { transform: translateY(8px); opacity: 0.5; }
          }
          .animate-scroll-bounce { animation: scrollBounce 1.8s ease-in-out infinite; }
        `}
      </style>

      {/* Imagem de Fundo animada */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=2069&auto=format&fit=crop" 
          alt="Agricultor com tablet" 
          className="object-cover w-full h-full grayscale-[30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 md:from-background via-background/90 md:via-background/95 to-background/60 md:to-background/50"></div>
      </motion.div>

      {/* Elementos Decorativos Suaves */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden"
      >
        <div className="absolute -top-12 -right-12 w-[300px] h-[300px] md:-top-24 md:-right-16 md:w-[600px] md:h-[600px] rounded-full bg-primary/40 blur-[80px] md:blur-[120px] animate-float mix-blend-multiply"></div>
        <div className="absolute -bottom-20 -left-20 w-[250px] h-[250px] md:-bottom-40 md:-left-40 md:w-[500px] md:h-[500px] rounded-full bg-primary-hover/50 blur-[60px] md:blur-[100px] animate-float-delayed mix-blend-multiply"></div>
      </motion.div>

      {/* Linhas geométricas */}
      <motion.svg 
        initial={{ opacity: 0, x: 150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, delay: 0.8, ease: easePremium }}
        className="absolute right-0 bottom-0 h-full w-[120%] md:w-[50%] lg:w-[45%] z-0 pointer-events-none opacity-20 md:opacity-90" 
        viewBox="0 0 1000 1000" 
        preserveAspectRatio="none"
      >
        <g stroke={brandHighlight} strokeWidth="6" fill="none" strokeLinecap="square" strokeLinejoin="miter">
          <polyline points="700,0 700,500 -100,1000" />
          <polyline points="800,0 800,562.5 0,1062.5" />
          <polyline points="900,0 900,625 100,1125" />
          <polyline points="1000,0 1000,687.5 200,1187.5" />
        </g>
      </motion.svg>

      {/* Conteúdo Hero — padding-top para compensar a navbar fixa */}
      <div className="relative z-10 flex flex-col h-screen max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 1.3 }
            }
          }}
          className="flex-1 flex flex-col justify-center items-start text-left max-w-4xl pt-20 md:pt-24 pb-16 md:pb-24"
        >
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easePremium } }
            }}
            className="text-4xl sm:text-5xl lg:text-[3.8rem] font-bold leading-[1.15] md:leading-[1.2] tracking-[0.03em] uppercase text-text-primary"
          >
             <span className="text-primary drop-shadow-sm">AgroCore.</span> Tecnologia e propósito para o campo.
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="mt-5 md:mt-6 text-base sm:text-lg md:text-xl text-text-primary/80 max-w-2xl leading-relaxed"
          >
            Somos a <strong>AgroCore</strong>. Unimos tecnologia, dados e propósito para transformar a gestão na pecuária. Conheça a equipe por trás do projeto.
          </motion.p>
          
          <motion.div 
            variants={{
              hidden: { scaleX: 0, opacity: 0 },
              visible: { scaleX: 1, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } }
            }}
            style={{ originX: 0 }}
            className="w-12 md:w-14 h-[3px] bg-primary mt-6 md:mt-8 mb-8 md:mb-12"
          />

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
          >
            <a 
              href="#equipe"
              className="inline-block border border-text-primary px-6 py-3 md:px-8 md:py-4 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-text-primary hover:bg-text-primary hover:text-text-light transition-all duration-300"
            >
              Conheça a equipe
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-text-primary/40">Scroll</span>
          <div className="w-[1px] h-8 bg-text-primary/20 relative overflow-hidden">
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: '100%' }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-x-0 top-0 h-full bg-primary"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}