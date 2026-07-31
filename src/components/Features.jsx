import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { m } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ease, viewport, fadeUp, stagger, prefersReducedMotion } from '@/lib/motion';

export default function Features() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const mediaRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);

    // O pin só faz sentido no layout lado a lado. No mobile as colunas
    // empilham e prender a tela atrapalharia a leitura.
    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          // `+=90%` cria o espaço de scroll que o pin consome. Sem isso a
          // seção teria exatamente 100vh e o scrub não teria percurso.
          end: '+=90%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      tl.fromTo(mediaRef.current, { scale: 1 }, { scale: 1.16, ease: 'none' }, 0)
        .fromTo(cardRef.current, { y: 0 }, { y: -56, ease: 'none' }, 0)
        .fromTo(leftRef.current, { y: 0 }, { y: -28, ease: 'none' }, 0);
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="projeto"
      ref={sectionRef}
      className="relative w-full min-h-screen lg:h-screen flex flex-col lg:flex-row overflow-hidden font-sans bg-text-primary"
    >
      {/* --- LADO ESQUERDO: CONTEÚDO --- */}
      <div
        ref={leftRef}
        className="w-full lg:w-1/2 h-auto lg:h-full flex items-center justify-center p-6 sm:p-12 lg:p-16 xl:p-24 py-16 md:py-24 relative z-10 will-change-transform"
      >
        <div
          className="absolute top-0 left-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full bg-primary/10 blur-[80px] md:blur-[120px] pointer-events-none"
          aria-hidden="true"
        />

        <m.div
          variants={stagger(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="max-w-xl w-full"
        >
          <m.div variants={fadeUp} className="mb-6 md:mb-8">
            {/* Verde vivo sobre marrom dá 2.1:1. Este tom claro dá 6.6:1. */}
            <span className="bg-primary-300 text-primary-900 text-[11px] md:text-xs font-black tracking-[0.3em] uppercase px-3 py-1.5 md:px-4 md:py-2 inline-block">
              O Projeto
            </span>
          </m.div>

          <m.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-text-light uppercase leading-[1.1] lg:leading-[1.2] tracking-tighter mb-6 md:mb-8"
          >
            O projeto que desenvolvemos juntos
          </m.h2>

          <m.p
            variants={fadeUp}
            className="text-text-light/80 text-sm sm:text-base lg:text-lg font-light leading-relaxed mb-10 md:mb-12"
          >
            O Buffs é a plataforma de gestão para a bubalinocultura criada pela
            AgroCore. Ele centraliza os dados do rebanho, automatiza relatórios e
            usa inteligência artificial para apoiar decisões no campo —
            desenvolvido de ponta a ponta pelos integrantes da equipe, da ideia ao
            código.
          </m.p>

          <m.div variants={fadeUp}>
            <a
              href="#equipe"
              className="group relative inline-block overflow-hidden border border-primary-glow px-8 py-3 md:px-10 md:py-4 text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-primary-on-dark transition-colors duration-300 hover:text-primary-900"
            >
              <span className="relative z-10">Conheça a equipe</span>
              <span className="absolute inset-0 z-0 h-full w-full translate-y-full bg-primary-300 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0" />
            </a>
          </m.div>
        </m.div>
      </div>

      {/* --- LADO DIREITO: IMAGEM PRINCIPAL + CARD FLUTUANTE --- */}
      <div className="w-full lg:w-1/2 h-[60vh] sm:h-[70vh] lg:h-full relative overflow-hidden shrink-0">
        <div ref={mediaRef} className="absolute inset-0 w-full h-full will-change-transform">
          <m.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: ease.out }}
            viewport={viewport}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src="/image1.png"
              alt="Tela principal do aplicativo Buffs em uso"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-text-primary/25" />
          </m.div>
        </div>

        {/* Card flutuante */}
        <m.div
          ref={cardRef}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: ease.premium }}
          viewport={viewport}
          className="absolute bottom-8 left-8 md:bottom-10 md:left-10 w-[62%] aspect-video overflow-hidden border-2 border-primary-300 shadow-2xl z-10 will-change-transform"
        >
          <Image
            src="/image2.png"
            alt="Dashboard de indicadores do rebanho no Buffs"
            fill
            sizes="(max-width: 1024px) 62vw, 31vw"
            className="object-cover object-top"
          />
          <div className="absolute top-0 left-0 w-12 h-[3px] bg-primary-300" />
        </m.div>

        {/* Número decorativo */}
        <m.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          viewport={viewport}
          aria-hidden="true"
          className="absolute top-6 right-6 z-10 text-text-light/20 text-[80px] font-black leading-none select-none pointer-events-none"
        >
          01
        </m.span>
      </div>
    </section>
  );
}
