import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const brandBrown = "var(--color-text-primary)";
  const easePremium = [0.76, 0, 0.24, 1];

  return (
      <section id="sobre" className="relative w-full min-h-screen py-20 lg:py-0 bg-background overflow-hidden flex items-center">
      
      {/* --- ALA ESQUERDA (Oculta no mobile para manter a tela limpa) --- */}
      <div className="absolute left-0 top-0 h-full w-[10vw] lg:w-[15vw] pointer-events-none z-0 hidden md:block">
        <svg className="h-full w-full opacity-20" viewBox="0 0 100 1000" preserveAspectRatio="none">
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            d="M-20,100 L80,350 L-20,600 L70,850"
            stroke={brandBrown}
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* --- ALA DIREITA (Oculta no mobile para manter a tela limpa) --- */}
      <div className="absolute right-0 top-0 h-full w-[10vw] lg:w-[15vw] pointer-events-none z-0 hidden md:block">
        <svg className="h-full w-full opacity-20" viewBox="0 0 100 1000" preserveAspectRatio="none">
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
            d="M120,150 L20,400 L120,650 L30,900"
            stroke={brandBrown}
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* --- CONTEÚDO CENTRALIZADO --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Lado Esquerdo: Texto + Foto do Grupo */}
          <div className="space-y-10 md:space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: easePremium }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-black tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 md:mb-6 block">
                Quem somos
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary uppercase mb-6 md:mb-8 tracking-tighter leading-[1] md:leading-[0.9]">
                Nossa <br /> História
              </h2>
              <div className="space-y-4 md:space-y-6 max-w-md">
                <p className="text-base sm:text-lg md:text-xl text-text-primary/80 font-light leading-relaxed">
                  A AgroCore nasceu na Fatec Registro, da união de cinco estudantes determinados a transformar uma ideia de sala de aula em um projeto real de tecnologia para o campo: o Buffs.
                </p>
              </div>
            </motion.div>

            {/* FOTO DO GRUPO */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: easePremium, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group max-w-[280px] sm:max-w-sm md:max-w-md"
            >
              {/* Moldura Decorativa Amarela - Ajustada para não estourar no mobile */}
              <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-full h-full border-2 border-primary -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-500"></div>

              <div className="aspect-video bg-text-primary/5 overflow-hidden border border-text-primary/10">
                <img 
                  src="/grupo.jpg"
                  alt="Equipe AgroCore"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
              </div>
              
              <p className="text-[9px] md:text-[10px] font-bold text-text-primary/40 uppercase tracking-[0.2em] mt-4 md:mt-6">
Equipe AgroCore
              </p>
            </motion.div>
          </div>

          {/* Lado Direito: Timeline */}
          <motion.div 
            className="relative border-l border-text-primary/10 ml-4 md:ml-6 lg:ml-0 h-fit"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            {[
              { year: "2023", title: "O Encontro", desc: "Cinco estudantes da Fatec Registro se uniram em torno de um mesmo desafio." },
              { year: "2024", title: "O Protótipo", desc: "Primeiras linhas de código, estruturação da API e validação da ideia." },
              { year: "2025", title: "O Reconhecimento", desc: "Apresentação na FETEPS e amadurecimento do projeto Buffs." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + (index * 0.2) }}
                className="mb-8 md:mb-10 last:mb-0 relative pl-8 md:pl-10"
              >
                {/* Bolinha da Timeline */}
                <div className="absolute left-[-4.5px] top-1.5 md:left-[-5px] w-[8px] h-[8px] md:w-[9px] md:h-[9px] rounded-full bg-primary" />

                <span className="text-[9px] md:text-[10px] font-bold text-primary uppercase tracking-widest block mb-1">
                  {item.year}
                </span>
                <h4 className="text-text-primary font-bold text-base md:text-lg leading-none mb-2">
                  {item.title}
                </h4>
                <p className="text-text-primary/60 text-xs md:text-sm max-w-[260px] md:max-w-xs leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}