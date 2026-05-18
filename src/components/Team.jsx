import React from 'react';
import { motion } from 'framer-motion';

export default function Team() {
  const easePremium = [0.76, 0, 0.24, 1];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: easePremium },
    },
  };

  const members = [
    {
      id: '01',
      name: 'Vinicius Souza Ramos',
      role: 'Mobile Developer',
      bio: 'Responsável pelo desenvolvimento do aplicativo mobile, garantindo uma experiência fluida e offline no campo.',
      image: '/vini4.png',
    },
    {
      id: '02',
      name: 'Paulo Cesar Pedro Candiani',
      role: 'Frontend Developer & UX/UI',
      bio: 'Desenvolve as interfaces web e cuida da experiência do usuário, unindo design e código para um produto intuitivo.',
      image: '/pc1.png',
    },
    {
      id: '03',
      name: 'João Pedro Kuzinor de Lima',
      role: 'Frontend Developer',
      bio: 'Constrói as interfaces e componentes visuais do projeto, transformando design em código funcional.',
      image: '/joaolima5.png',
    },
    {
      id: '04',
      name: 'Gabriel Guimarães Carneiro',
      role: 'IA Developer',
      bio: 'Desenvolve os modelos preditivos e algoritmos de inteligência artificial que sustentam as análises do AgroCore.',
      image: '/gabriel2.png',
    },
    {
      id: '05',
      name: 'João Pedro Dias Barreto',
      role: 'Backend Developer',
      bio: 'Responsável pela API, banco de dados e infraestrutura que conectam o app ao servidor com segurança e performance.',
      image: '/barreto3.png',
    },
  ];

  return (
    <section
      id="equipe"
      className="relative w-full py-20 md:py-32 bg-text-primary overflow-hidden font-sans flex flex-col items-center justify-center"
    >
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-primary/10 blur-[100px] md:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-primary/[0.06] blur-[100px] md:blur-[140px] pointer-events-none" />

      {/* Marca d'água */}
      <div className="absolute -bottom-6 md:-bottom-12 left-1/2 -translate-x-1/2 opacity-[0.03] text-text-light select-none pointer-events-none">
        <span className="text-[22vw] md:text-[16vw] font-black tracking-tighter leading-none">TIME</span>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 w-full">

        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: easePremium }}
          className="text-center mb-14 md:mb-20 flex flex-col items-center"
        >
          <span className="text-primary text-[10px] md:text-xs font-black tracking-[0.3em] uppercase block mb-4">
            Quem faz acontecer
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-light uppercase tracking-tighter leading-[0.95] max-w-4xl">
Conheça a <span className="text-primary">AgroCore</span>
          </h2>
          <div className="w-12 md:w-14 h-[3px] bg-primary mt-6 md:mt-8" />
          <p className="mt-6 text-text-light/60 text-sm sm:text-base md:text-lg font-light max-w-2xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Somos cinco estudantes da Fatec
            Registro que transformaram uma ideia em um projeto real de tecnologia para o campo.
          </p>
        </motion.div>

        {/* Cards dos integrantes */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-5xl mx-auto"
        >
          {members.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="group relative w-full sm:w-[280px] lg:w-[300px] transition-transform duration-500 hover:-translate-y-3"
            >
              {/* Foto */}
              <div className="relative overflow-hidden aspect-[3/4] bg-primary/10">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700"
                />

                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-text-primary/70 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />

                {/* Número */}
                <span className="absolute top-4 right-4 text-text-light/40 text-2xl md:text-3xl font-black leading-none">
                  {member.id}
                </span>

                {/* Tag do cargo */}
                <div className="absolute bottom-4 left-4 bg-primary text-text-primary text-[9px] md:text-[10px] font-black tracking-[0.15em] uppercase px-3 py-1.5 shadow-lg">
                  {member.role}
                </div>

                {/* Moldura no hover */}
                <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Texto */}
              <div className="pt-5">
                <h3 className="text-text-light font-bold text-lg md:text-xl uppercase tracking-tight leading-tight">
                  {member.name}
                </h3>
                <div className="w-8 h-[2px] bg-primary my-3 group-hover:w-16 transition-all duration-500" />
                <p className="text-text-light/50 text-xs md:text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Rodapé da seção */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center mt-14 md:mt-20"
        >
          <p className="text-text-light/40 text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase">
            Fatec Registro &nbsp;•&nbsp; Projeto Buffs
          </p>
        </motion.div>

      </div>
    </section>
  );
}
