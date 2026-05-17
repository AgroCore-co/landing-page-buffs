import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

function AnimatedNumber({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: [0.76, 0, 0.24, 1],
        onUpdate(v) {
          if (ref.current) {
            ref.current.textContent = Math.round(v);
          }
        }
      });
      return () => controls.stop();
    }
  }, [value, inView]);

  return <span ref={ref}>0</span>;
}

export default function Stats() {
  const easePremium = [0.76, 0, 0.24, 1];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const statsData = [
    {
      prefix: "",
      number: "5",
      suffix: "",
      label: "Integrantes dedicados",
    },
    {
      prefix: "+ ",
      number: "2",
      suffix: " anos",
      label: "De desenvolvimento",
    },
    {
      prefix: "+ ",
      number: "8",
      suffix: "",
      label: "Tecnologias aplicadas",
    },
  ];

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center font-sans bg-background">

      {/* Fundo com imagem */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      >
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2064&auto=format&fit=crop"
          alt="Paisagem agrícola com névoa"
          className="object-cover w-full h-full opacity-40 grayscale-[50%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background"></div>
      </motion.div>

      {/* Elemento decorativo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[100px] pointer-events-none mix-blend-multiply"></div>

      {/* Conteúdo principal */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-center text-center relative z-10 w-full"
      >

        {/* Cabeçalho */}
        <motion.div variants={itemVariants} className="mb-20 md:mb-28 flex flex-col items-center">
          <span className="text-[10px] md:text-xs font-black tracking-[0.4em] uppercase text-text-primary/60 mb-4 block">
            O grupo em números
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-text-primary uppercase max-w-4xl tracking-tighter">
            Um time pequeno, <br className="hidden md:block" /> um impacto real.
          </h2>
          <div className="w-16 h-[3px] bg-primary mt-8"></div>
        </motion.div>

        {/* Grelha de estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-16 w-full">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center justify-center relative group"
            >
              <div className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-110 transition-transform duration-700 rounded-2xl -z-10 blur-xl"></div>

              <div className="flex items-baseline justify-center text-text-primary mb-2 whitespace-nowrap">
                {stat.prefix && (
                  <span className="text-4xl md:text-6xl font-medium text-primary mr-2 md:mr-3 tracking-tighter">
                    {stat.prefix}
                  </span>
                )}
                <span className="text-6xl md:text-[5.5rem] lg:text-8xl font-bold tracking-tighter leading-none">
                  <AnimatedNumber value={Number(stat.number)} />
                </span>
                {stat.suffix && (
                  <span className="text-xl md:text-2xl lg:text-3xl font-bold ml-1 md:ml-2 tracking-tight text-text-primary">
                    {stat.suffix}
                  </span>
                )}
              </div>

              <p className="text-sm md:text-base font-medium tracking-[0.15em] uppercase text-text-primary/70 mt-4">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}