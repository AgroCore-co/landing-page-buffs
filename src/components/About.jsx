import React, { useRef } from 'react';
import Image from 'next/image';
import { m, useScroll, useTransform, useSpring } from 'framer-motion';
import { ease, dur, viewport, clipUp, fadeSide, stagger } from '@/lib/motion';

const TIMELINE = [
  {
    year: '2023',
    title: 'O Encontro',
    desc: 'Cinco estudantes da Fatec Registro se uniram em torno de um mesmo desafio.',
  },
  {
    year: '2024',
    title: 'O Protótipo',
    desc: 'Primeiras linhas de código, estruturação da API e validação da ideia.',
  },
  {
    year: '2025',
    title: 'O Reconhecimento',
    desc: 'Apresentação na FETEPS e amadurecimento do projeto Buffs.',
  },
];

export default function About() {
  const sectionRef = useRef(null);

  // A seção não é mais `min-h-screen`: seis seções de tela cheia seguidas
  // achatam o ritmo da página. Aqui o conteúdo define a altura.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // A linha da timeline se desenha conforme a seção atravessa a viewport.
  const lineScale = useSpring(
    useTransform(scrollYProgress, [0.15, 0.75], [0, 1]),
    { stiffness: 120, damping: 30, restDelta: 0.001 }
  );
  const asideY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 lg:py-40 bg-background overflow-hidden flex items-center"
    >
      {/* --- ALAS DECORATIVAS (ocultas no mobile) --- */}
      <m.div
        style={{ y: asideY }}
        className="absolute left-0 top-0 h-full w-[10vw] lg:w-[15vw] pointer-events-none z-0 hidden md:block"
        aria-hidden="true"
      >
        <svg className="h-full w-full opacity-20" viewBox="0 0 100 1000" preserveAspectRatio="none">
          <m.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={viewport}
            transition={{ duration: 1.8, ease: ease.out }}
            d="M-20,100 L80,350 L-20,600 L70,850"
            stroke="var(--color-text-primary)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </m.div>

      <m.div
        style={{ y: asideY }}
        className="absolute right-0 top-0 h-full w-[10vw] lg:w-[15vw] pointer-events-none z-0 hidden md:block"
        aria-hidden="true"
      >
        <svg className="h-full w-full opacity-20" viewBox="0 0 100 1000" preserveAspectRatio="none">
          <m.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            // Faltava `viewport once` — a animação reiniciava a cada passagem.
            viewport={viewport}
            transition={{ duration: 1.8, ease: ease.out, delay: 0.12 }}
            d="M120,150 L20,400 L120,650 L30,900"
            stroke="var(--color-text-primary)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </m.div>

      {/* --- CONTEÚDO --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Lado Esquerdo: Texto + Foto do Grupo */}
          <div className="space-y-10 md:space-y-12">
            <m.div
              variants={fadeSide(-24)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <span className="text-primary-strong font-black tracking-[0.3em] uppercase text-[11px] md:text-xs mb-4 md:mb-6 block">
                Quem somos
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary uppercase mb-6 md:mb-8 tracking-tighter leading-[1] md:leading-[0.9]">
                Nossa <br /> História
              </h2>
              <div className="space-y-4 md:space-y-6 max-w-md">
                <p className="text-base sm:text-lg md:text-xl text-text-primary/80 font-light leading-relaxed">
                  A AgroCore nasceu na Fatec Registro, da união de estudantes
                  determinados a transformar uma ideia de sala de aula em um projeto
                  real de tecnologia para o campo: o Buffs.
                </p>
              </div>
            </m.div>

            {/* FOTO DO GRUPO — revelação por clip-path em vez de fade+y */}
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={stagger(0.12)}
              className="relative group max-w-[280px] sm:max-w-sm md:max-w-md"
            >
              <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-full h-full border-2 border-primary -z-10 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:bottom-0 group-hover:right-0" />

              <m.div
                variants={clipUp}
                className="relative aspect-video bg-text-primary/5 overflow-hidden border border-text-primary/10"
              >
                <Image
                  src="/grupo.jpg"
                  alt="A equipe AgroCore reunida"
                  fill
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 384px, 448px"
                  className="object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                />
              </m.div>

              <m.p
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0, transition: { duration: dur.fast } },
                }}
                className="text-[11px] font-bold text-text-primary/60 uppercase tracking-[0.2em] mt-4 md:mt-6"
              >
                Equipe AgroCore
              </m.p>
            </m.div>
          </div>

          {/* Lado Direito: Timeline */}
          <div className="relative ml-4 md:ml-6 lg:ml-0 h-fit">
            {/* Trilho + linha que se desenha com o scroll (scrub, não delay). */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-text-primary/10" aria-hidden="true" />
            <m.div
              style={{ scaleY: lineScale, originY: 0 }}
              className="absolute left-0 top-0 bottom-0 w-px bg-primary-accent"
              aria-hidden="true"
            />

            <m.ol
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={stagger(0.12, 0.1)}
              className="relative"
            >
              {TIMELINE.map((item) => (
                <m.li
                  key={item.year}
                  variants={{
                    hidden: { opacity: 0, x: 16 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: dur.base, ease: ease.out },
                    },
                  }}
                  className="mb-8 md:mb-10 last:mb-0 relative pl-8 md:pl-10"
                >
                  <span
                    className="absolute left-[-4.5px] top-1.5 md:left-[-5px] w-[9px] h-[9px] rounded-full bg-primary-accent ring-4 ring-background"
                    aria-hidden="true"
                  />
                  <span className="text-[11px] font-bold text-primary-strong uppercase tracking-widest block mb-1">
                    {item.year}
                  </span>
                  <h3 className="text-text-primary font-bold text-base md:text-lg leading-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-primary/70 text-sm leading-relaxed max-w-[280px] md:max-w-xs">
                    {item.desc}
                  </p>
                </m.li>
              ))}
            </m.ol>
          </div>

        </div>
      </div>
    </section>
  );
}
