import React from 'react';
import { motion } from 'framer-motion';

export default function Features() {
  const easePremium = [0.76, 0, 0.24, 1];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
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
    <section id="tecnologia" className="relative w-full min-h-screen lg:h-screen flex flex-col lg:flex-row overflow-hidden font-sans bg-[#43310b]">

      {/* --- LADO ESQUERDO: CONTEÚDO --- */}
      <div className="w-full lg:w-1/2 h-auto lg:h-full flex items-center justify-center p-6 sm:p-12 lg:p-16 xl:p-24 py-16 md:py-24 relative z-10">

        {/* Efeito luminoso ajustado para mobile */}
        <div className="absolute top-0 left-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full bg-[#ffcf78]/5 blur-[80px] md:blur-[120px] pointer-events-none"></div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-xl w-full"
        >
          <motion.div variants={itemVariants} className="mb-6 md:mb-8">
            <span className="bg-[#ffcf78] text-[#43310b] text-[9px] sm:text-[10px] md:text-xs font-black tracking-[0.3em] uppercase px-3 py-1.5 md:px-4 md:py-2 inline-block">
              Tecnologia
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-[#fafafa] uppercase leading-[1.1] lg:leading-[1.2] tracking-tighter mb-6 md:mb-8"
          >
            Tecnologia acessível que simplifica processos
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-[#fafafa]/70 text-sm sm:text-base lg:text-lg font-light leading-relaxed mb-10 md:mb-12"
          >
            Recolha e centralize dados num único lugar! A plataforma Buffs conta com uma tecnologia que automatiza a emissão de relatórios, prioriza a usabilidade, permite a integração com outros softwares e o uso de dados já existentes.
          </motion.p>

          <motion.div variants={itemVariants}>
            <a
              href="#"
              className="group relative inline-block overflow-hidden border border-[#ffcf78] px-8 py-3 md:px-10 md:py-4 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#ffcf78] transition-colors duration-300 hover:text-[#43310b]"
            >
              <span className="relative z-10">Saiba Mais</span>
              <div className="absolute inset-0 z-0 h-full w-full translate-y-full bg-[#ffcf78] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0"></div>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* --- LADO DIREITO: IMAGENS COM CORTE DIAGONAL --- */}
      <div className="w-full lg:w-1/2 h-[50vh] sm:h-[60vh] lg:h-full relative overflow-hidden shrink-0">

        {/* Imagem de Fundo */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: easePremium }}
          viewport={{ once: true }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
            alt="Homem a trabalhar no computador"
            className="w-full h-full object-cover grayscale-[40%]"
          />
          <div className="absolute inset-0 bg-[#43310b]/20 mix-blend-multiply"></div>
        </motion.div>

        {/* Imagem Diagonal em cima */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.4, ease: easePremium }}
          viewport={{ once: true }}
          className="absolute inset-0 w-full h-full z-10 shadow-2xl"
          style={{
            clipPath: "polygon(0 75%, 100% 25%, 100% 100%, 0% 100%)"
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2070&auto=format&fit=crop"
            alt="Utilização de aplicação móvel no campo"
            className="w-full h-full object-cover grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-[#ffcf78]/10 mix-blend-overlay"></div>
          
          {/* Linha de borda diagonal preservada conforme o design original */}
          <div 
            className="absolute top-0 left-0 w-full h-full border-t-[3px] border-[#ffcf78]/40" 
            style={{ transform: "rotate(-26deg) scale(1.5) translateY(20%)" }}
          ></div>
        </motion.div>

      </div>
    </section>
  );
}