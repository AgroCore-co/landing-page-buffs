import React from 'react';
import { motion } from 'framer-motion';

export default function Product1() {
  const easePremium = [0.76, 0, 0.24, 1];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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
    <section id="solucoes" className="relative w-full min-h-screen lg:h-screen flex flex-col lg:flex-row overflow-hidden font-sans bg-[#fafafa]">

      {/* LADO ESQUERDO: IMAGEM */}
      <div className="w-full lg:w-1/2 h-[45vh] sm:h-[50vh] lg:h-full relative overflow-hidden shrink-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: easePremium }}
          viewport={{ once: true }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=2070&auto=format&fit=crop"
            alt="Produtor de búfalos utilizando tablet para monitorar fomento"
            className="w-full h-full object-cover grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-[#43310b]/10 mix-blend-multiply"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/20 to-transparent pointer-events-none hidden lg:block"></div>
        </motion.div>
      </div>

      {/* LADO DIREITO: CONTEÚDO */}
      <div className="w-full lg:w-1/2 h-auto lg:h-full flex items-center justify-center p-6 sm:p-12 lg:p-16 xl:p-32 py-12 md:py-24 relative z-10">
        <div className="absolute bottom-0 right-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full bg-[#ffcf78]/10 blur-[80px] md:blur-[120px] pointer-events-none"></div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-xl w-full"
        >
          <motion.div variants={itemVariants} className="mb-6 md:mb-8">
            <span className="bg-[#ffcf78] text-[#43310b] text-[9px] sm:text-[10px] md:text-xs font-black tracking-[0.3em] uppercase px-3 py-1.5 md:px-4 md:py-2 inline-block shadow-sm">
              O Meu Lote
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-[#43310b] uppercase leading-[1.1] lg:leading-[1.2] tracking-tighter mb-6 md:mb-8"
          >
            Conexão Direta: Do curral ao fomento industrial
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-[#43310b]/70 text-sm sm:text-base lg:text-lg font-light leading-relaxed mb-10 md:mb-12"
          >
            Elimine as barreiras entre o campo e o laticínio. Compartilhe dados de lactação, sanidade e alertas de mastite em tempo real, permitindo que a supervisão técnica atue de forma preditiva e transparente na qualidade do leite bubalino.
          </motion.p>

          <motion.div variants={itemVariants}>
            <a
              href="#contato"
              className="group relative inline-block overflow-hidden border-2 border-[#43310b] px-8 py-3 md:px-10 md:py-4 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#43310b] transition-colors duration-300 hover:text-[#ffcf78]"
            >
              <span className="relative z-10">Ver Detalhes do Fomento</span>
              <div className="absolute inset-0 z-0 h-full w-full translate-y-full bg-[#43310b] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0"></div>
            </a>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}