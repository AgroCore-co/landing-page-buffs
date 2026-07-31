import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { m, useScroll, useTransform } from 'framer-motion';
import { ease, dur, maskUp, stagger, splitWords } from '@/lib/motion';

const HEADLINE = 'Tecnologia e propósito para o campo.';

export default function Hero() {
  const sectionRef = useRef(null);
  // As duas cortinas de revelação ficavam `fixed` e z-[50]/[60] para sempre,
  // mesmo com scaleX 0. Agora saem do DOM assim que terminam.
  const [curtainsDone, setCurtainsDone] = useState(false);

  // Parallax ligado ao scroll (não ao tempo): o fundo desliza e desfoca
  // enquanto a seção sai, dando profundidade sem custo de layout.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  const words = splitWords(HEADLINE);

  return (
    <section
      ref={sectionRef}
      aria-label="Início"
      className="relative w-full min-h-screen bg-background overflow-hidden font-sans text-text-primary"
    >
      {/* --- CORTINAS DE REVELAÇÃO ---
          Encurtadas de 1.2s/delay 0.35 para 0.8s/delay 0.12. O site inteiro
          passa de ~2.5s até parecer vivo para ~1.2s. */}
      {!curtainsDone && (
        <>
          <m.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: 0.8, ease: ease.premium }}
            style={{ transformOrigin: 'right' }}
            className="fixed top-0 left-0 w-full h-full bg-text-primary z-[60] pointer-events-none"
          />
          <m.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: 0.8, ease: ease.premium, delay: 0.12 }}
            onAnimationComplete={() => setCurtainsDone(true)}
            style={{ transformOrigin: 'right' }}
            className="fixed top-0 left-0 w-full h-full bg-primary z-[50] pointer-events-none"
          />
        </>
      )}

      {/* Imagem de fundo — LCP da página, por isso `priority`. */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 w-full h-[115%] z-0 will-change-transform"
      >
        <Image
          src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=2069&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover grayscale-[30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 md:from-background via-background/90 md:via-background/95 to-background/60 md:to-background/50" />
      </m.div>

      {/* Elementos Decorativos Suaves */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.5 }}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden"
      >
        <div className="absolute -top-12 -right-12 w-[300px] h-[300px] md:-top-24 md:-right-16 md:w-[600px] md:h-[600px] rounded-full bg-primary/40 blur-[80px] md:blur-[120px] animate-float mix-blend-multiply" />
        <div className="absolute -bottom-20 -left-20 w-[250px] h-[250px] md:-bottom-40 md:-left-40 md:w-[500px] md:h-[500px] rounded-full bg-primary-hover/50 blur-[60px] md:blur-[100px] animate-float-delayed mix-blend-multiply" />
      </m.div>

      {/* Linhas geométricas — `pathLength` em vez de translate: desenha em vez
          de deslizar, e não força repaint de uma área tão larga. */}
      <m.svg
        initial="hidden"
        animate="visible"
        className="absolute right-0 bottom-0 h-full w-[120%] md:w-[50%] lg:w-[45%] z-0 pointer-events-none opacity-20 md:opacity-90"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <g
          stroke="var(--color-primary)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="square"
          strokeLinejoin="miter"
        >
          {[
            '700,0 700,500 -100,1000',
            '800,0 800,562.5 0,1062.5',
            '900,0 900,625 100,1125',
            '1000,0 1000,687.5 200,1187.5',
          ].map((points, i) => (
            <m.polyline
              key={points}
              points={points}
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: {
                  pathLength: 1,
                  opacity: 1,
                  transition: {
                    duration: 1.2,
                    ease: ease.out,
                    delay: 0.45 + i * 0.08,
                  },
                },
              }}
            />
          ))}
        </g>
      </m.svg>

      {/* Conteúdo Hero */}
      <div className="relative z-10 flex flex-col h-screen max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <m.div
          initial="hidden"
          animate="visible"
          variants={stagger(0.06, 0.55)}
          style={{ y: contentY, opacity: contentOpacity }}
          className="flex-1 flex flex-col justify-center items-start text-left max-w-4xl pt-20 md:pt-24 pb-16 md:pb-24 will-change-transform"
        >
          {/* Revelação por máscara, palavra a palavra: cada palavra sobe de
              dentro de um container com overflow hidden. Lê muito mais caro
              que o fade+y e não custa nenhuma biblioteca extra. */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.8rem] font-bold leading-[1.15] md:leading-[1.2] tracking-[0.03em] uppercase text-text-primary flex flex-wrap gap-x-[0.28em]">
            <span className="inline-flex overflow-hidden py-[0.08em]">
              <m.span variants={maskUp} className="inline-block text-primary-accent">
                AgroCore.
              </m.span>
            </span>
            {words.map((word, i) => (
              <span
                key={`${word}-${i}`}
                className="inline-flex overflow-hidden py-[0.08em]"
              >
                <m.span variants={maskUp} className="inline-block">
                  {word}
                </m.span>
              </span>
            ))}
          </h1>

          <m.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: dur.base, ease: ease.out },
              },
            }}
            className="mt-5 md:mt-6 text-base sm:text-lg md:text-xl text-text-primary/80 max-w-2xl leading-relaxed"
          >
            Somos a <strong>AgroCore</strong>. Unimos tecnologia, dados e propósito
            para transformar a gestão na pecuária. Conheça a equipe por trás do
            projeto.
          </m.p>

          <m.div
            variants={{
              hidden: { scaleX: 0, opacity: 0 },
              visible: {
                scaleX: 1,
                opacity: 1,
                transition: { duration: dur.base, ease: ease.premium },
              },
            }}
            style={{ originX: 0 }}
            className="w-12 md:w-14 h-[3px] bg-primary-accent mt-6 md:mt-8 mb-8 md:mb-12"
          />

          <m.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: dur.fast, ease: ease.out },
              },
            }}
          >
            <a
              href="#equipe"
              className="group relative inline-block overflow-hidden border border-text-primary px-6 py-3 md:px-8 md:py-4 text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-text-primary transition-colors duration-300 hover:text-text-light"
            >
              <span className="relative z-10">Conheça a equipe</span>
              {/* Preenchimento que sobe no hover — mesma linguagem dos outros
                  CTAs da página, que antes usavam `transition-all`. */}
              <span className="absolute inset-0 z-0 translate-y-full bg-text-primary transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0" />
            </a>
          </m.div>
        </m.div>

        {/* Scroll Indicator */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
          aria-hidden="true"
        >
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-text-primary/60">
            Scroll
          </span>
          <div className="w-[1px] h-8 bg-text-primary/20 relative overflow-hidden">
            <m.div
              initial={{ y: '-100%' }}
              animate={{ y: '100%' }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-x-0 top-0 h-full bg-primary-accent"
            />
          </div>
        </m.div>
      </div>
    </section>
  );
}
