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
    <section id="projeto" className="relative w-full min-h-screen lg:h-screen flex flex-col lg:flex-row overflow-hidden font-sans bg-text-primary">

      {/* --- LADO ESQUERDO: CONTEÚDO --- */}
      <div className="w-full lg:w-1/2 h-auto lg:h-full flex items-center justify-center p-6 sm:p-12 lg:p-16 xl:p-24 py-16 md:py-24 relative z-10">

        {/* Efeito luminoso ajustado para mobile */}
        <div className="absolute top-0 left-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full bg-primary/5 blur-[80px] md:blur-[120px] pointer-events-none"></div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-xl w-full"
        >
          <motion.div variants={itemVariants} className="mb-6 md:mb-8">
            <span className="bg-primary text-text-primary text-[9px] sm:text-[10px] md:text-xs font-black tracking-[0.3em] uppercase px-3 py-1.5 md:px-4 md:py-2 inline-block">
              O Projeto
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-text-light uppercase leading-[1.1] lg:leading-[1.2] tracking-tighter mb-6 md:mb-8"
          >
O projeto que desenvolvemos juntos
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-text-light/70 text-sm sm:text-base lg:text-lg font-light leading-relaxed mb-10 md:mb-12"
          >
O Buffs é a plataforma de gestão para a bubalinocultura criada pela AgroCore. Ele centraliza os dados do rebanho, automatiza relatórios e usa inteligência artificial para apoiar decisões no campo — desenvolvido de ponta a ponta pelos cinco integrantes da equipe, da ideia ao código.
          </motion.p>

          <motion.div variants={itemVariants}>
            <a
              href="#equipe"
              className="group relative inline-block overflow-hidden border border-primary px-8 py-3 md:px-10 md:py-4 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-primary transition-colors duration-300 hover:text-text-primary"
            >
              <span className="relative z-10">Conheça a equipe</span>
              <div className="absolute inset-0 z-0 h-full w-full translate-y-full bg-primary transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0"></div>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* --- LADO DIREITO: IMAGEM PRINCIPAL + CARD FLUTUANTE --- */}
      <div className="w-full lg:w-1/2 h-[60vh] sm:h-[70vh] lg:h-full relative overflow-hidden shrink-0">

        {/* Imagem principal — fundo completo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: easePremium }}
          viewport={{ once: true }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src="/image1.png"
            alt="AgroCore - imagem do projeto"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-text-primary/25" />
        </motion.div>

        {/* Card flutuante com image2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: easePremium }}
          viewport={{ once: true }}
          className="absolute bottom-8 left-8 md:bottom-10 md:left-10 w-[62%] aspect-video overflow-hidden border-2 border-primary shadow-2xl z-10"
        >
          <img
            src="/image2.png"
            alt="AgroCore - dashboard do projeto"
            className="w-full h-full object-cover object-top"
          />
          {/* Linha de acento no topo do card */}
          <div className="absolute top-0 left-0 w-12 h-[3px] bg-primary" />
        </motion.div>

        {/* Número decorativo no canto superior direito */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: easePremium }}
          viewport={{ once: true }}
          className="absolute top-6 right-6 z-10 text-text-light/20 text-[80px] font-black leading-none select-none pointer-events-none"
        >
          01
        </motion.div>

      </div>
    </section>
  );
}