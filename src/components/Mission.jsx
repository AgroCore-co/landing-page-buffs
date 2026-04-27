import React from 'react';
import { motion } from 'framer-motion';

export default function Diferencial() {
  const easePremium = [0.76, 0, 0.24, 1];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: easePremium },
    },
  };

  return (
    <section id="diferencial" className="relative w-full min-h-screen py-16 md:py-24 flex items-center justify-center overflow-hidden font-sans bg-[#f0ebe0]">
      
      {/* --- FUNDO DECORATIVO COM LINHAS GEOMÉTRICAS --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 flex items-center justify-center"
      >
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" className="w-full h-full opacity-[0.02] md:opacity-[0.03] text-[#43310b]">
          <g stroke="currentColor" strokeWidth="60" fill="none">
            <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2.5, delay: 0.2 }} d="M-200 800 L720 100 L1640 800" />
            <motion.circle cx="720" cy="450" r="300" />
          </g>
        </svg>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 flex flex-col items-center text-center"
      >
        {/* BADGE DE DIFERENCIAL BIOLÓGICO */}
        <motion.div 
          variants={itemVariants}
          className="mb-6 md:mb-8 flex items-center gap-2 md:gap-3 bg-[#43310b] px-4 py-1.5 md:px-5 md:py-2 rounded-full shadow-lg"
        >
          <span className="text-[9px] sm:text-[10px] md:text-xs font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase text-[#ffcf78]">
            Calibrado para o Ciclo de 300 Dias
          </span>
        </motion.div>

        {/* TÍTULO - Escala fluida e entrelinhas ajustadas */}
        <motion.h2 
          variants={itemVariants} 
          className="text-[2.2rem] sm:text-5xl md:text-6xl lg:text-8xl font-black text-[#43310b] uppercase leading-[1.1] md:leading-[0.9] tracking-tighter mb-6 md:mb-10 max-w-6xl"
        >
          O Sistema que Entende <br /> 
          <span className="text-[#ffcf78] drop-shadow-sm">que Búfala não é Boi.</span>
        </motion.h2>

        {/* SUBTÍTULO */}
        <motion.p 
          variants={itemVariants} 
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#43310b]/80 mb-12 md:mb-16 max-w-4xl font-light leading-relaxed px-2"
        >
          Pare de ver alertas de "atraso" em búfalas saudáveis. Enquanto softwares genéricos usam o ciclo bovino de 9 meses, 
          o <strong>Buffs é o único calibrado para a gestação real de 10 meses</strong> do seu rebanho.
        </motion.p>

        {/* GRID DE FUNCIONALIDADES BIOLÓGICAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-5xl mb-12 md:mb-16 text-left">
          
          {/* Card 01 */}
          <motion.div 
            variants={itemVariants} 
            className="group relative overflow-hidden bg-white p-6 md:p-8 border-b-4 border-[#ffcf78] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-default"
          >
            {/* Elemento Decorativo (Número Fundo) */}
            <div className="absolute -bottom-6 -right-2 text-[8rem] font-black text-[#ffcf78]/10 group-hover:text-[#ffcf78]/20 transition-colors duration-500 select-none pointer-events-none leading-none">
              01
            </div>

            <div className="relative z-10">
              <h4 className="text-[#43310b] font-bold uppercase tracking-widest text-xs sm:text-sm mb-2 md:mb-3">
                Precisão Zootécnica
              </h4>
              <p className="text-[#43310b]/60 text-xs sm:text-sm leading-relaxed">
                Cálculo automático de data de parto e secagem baseado nos 300 dias da biologia bubalina. Previsões que batem com a realidade do curral.
              </p>
            </div>
          </motion.div>

          {/* Card 02 */}
          <motion.div 
            variants={itemVariants} 
            className="group relative overflow-hidden bg-white p-6 md:p-8 border-b-4 border-[#43310b] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-default"
          >
            {/* Elemento Decorativo (Número Fundo) */}
            <div className="absolute -bottom-6 -right-2 text-[8rem] font-black text-[#43310b]/[0.03] group-hover:text-[#43310b]/[0.08] transition-colors duration-500 select-none pointer-events-none leading-none">
              02
            </div>

            <div className="relative z-10">
              <h4 className="text-[#43310b] font-bold uppercase tracking-widest text-xs sm:text-sm mb-2 md:mb-3">
                Gestão de Alertas Realistas
              </h4>
              <p className="text-[#43310b]/60 text-xs sm:text-sm leading-relaxed">
                Fim das notificações irrelevantes. Seus alertas sanitários e reprodutivos respeitam o tempo de cada matriz, otimizando o manejo técnico.
              </p>
            </div>
          </motion.div>
          
        </div>

      </motion.div>
    </section>
  );
}