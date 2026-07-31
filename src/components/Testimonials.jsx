import React, { useState, useEffect, useCallback, useRef } from 'react';
import { m, AnimatePresence, useInView } from 'framer-motion';
import { prefersReducedMotion } from '@/lib/motion';

/** Autoplay e barra de progresso agora saem do mesmo número.
 *  Antes o intervalo era 10s e a barra 6s: ela enchia e ficava 4s parada. */
const AUTOPLAY_MS = 8000;

const VISITS = [
  {
    id: 1,
    location: 'Levitare',
    date: 'Fevereiro 2025',
    video: '/levitare-01-03-2025.mp4',
    description:
      'Primeira visita em campo para conhecer o manejo e entender como a operação funciona na prática.',
  },
  {
    id: 2,
    location: 'Instituto de Zootecnia',
    date: 'Fevereiro 2026',
    video: '/zootecnico-01-07-2025mp4.mp4',
    description: 'Primeiros testes do aplicativo mobile em ambiente offline no curral.',
  },
  {
    id: 3,
    location: 'Gilson Lara',
    date: 'Março 2025',
    video: '/gilson-29-03-2025.mp4',
    description: 'Mapeamento de rotina de manejo e identificação de gargalos operacionais.',
  },
];

const SWIPE_THRESHOLD = 8000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

const variants = {
  enter: (direction) => ({ x: direction > 0 ? '100%' : '-100%', opacity: 0 }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 32 },
      opacity: { duration: 0.25 },
    },
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 32 },
      opacity: { duration: 0.2 },
    },
  }),
};

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [paused, setPaused] = useState(false);

  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const inView = useInView(sectionRef, { margin: '-20% 0px -20% 0px' });

  const goTo = useCallback((index, dir) => {
    setDirection(dir);
    setActiveIndex(index);
  }, []);

  const paginate = useCallback((newDirection) => {
    setDirection(newDirection);
    setActiveIndex((prev) => (prev + newDirection + VISITS.length) % VISITS.length);
  }, []);

  // O timer depende de `activeIndex`, então qualquer interação manual o
  // reinicia. Antes o intervalo era independente e podia trocar o slide
  // 200ms depois de o usuário clicar num ponto.
  useEffect(() => {
    if (paused || !inView || prefersReducedMotion()) return;
    const timer = setTimeout(() => paginate(1), AUTOPLAY_MS);
    return () => clearTimeout(timer);
  }, [activeIndex, paused, inView, paginate]);

  // Os três vídeos somam ~67MB. Só o ativo é montado, e ele pausa quando a
  // seção sai da viewport — decodificar vídeo fora de tela é desperdício puro
  // de CPU e bateria.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (inView && !paused) {
      const play = video.play();
      if (play?.catch) play.catch(() => {});
    } else {
      video.pause();
    }
  }, [inView, paused, activeIndex]);

  const active = VISITS[activeIndex];

  return (
    <section
      id="vivencia"
      ref={sectionRef}
      className="relative w-full py-20 md:py-28 flex flex-col items-center justify-center overflow-hidden bg-background"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-primary/5 blur-[80px] md:blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-[11px] font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-text-primary/70 block mb-3 md:mb-4">
            Vivência Real
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary uppercase tracking-tighter leading-tight">
            Onde a tecnologia <br /> encontra o curral.
          </h2>
        </div>

        <div
          className="relative w-full flex items-center justify-center overflow-x-hidden touch-pan-y"
          aria-roledescription="carrossel"
          aria-label="Visitas de campo da equipe AgroCore"
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <m.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragEnd={(_, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -SWIPE_THRESHOLD) paginate(1);
                else if (swipe > SWIPE_THRESHOLD) paginate(-1);
              }}
              role="group"
              aria-roledescription="slide"
              aria-label={`${activeIndex + 1} de ${VISITS.length}: ${active.location}`}
              className="relative w-full max-w-4xl cursor-grab active:cursor-grabbing"
            >
              <div className="relative w-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-[0_20px_40px_-10px_rgba(116,69,51,0.15)] md:shadow-[0_40px_80px_-20px_rgba(116,69,51,0.2)] border border-white/60 select-none bg-text-primary/5">
                <video
                  ref={videoRef}
                  key={active.video}
                  src={active.video}
                  className="w-full h-auto aspect-video object-cover pointer-events-none"
                  // `metadata` em vez do padrão `auto`: o browser não baixa o
                  // arquivo inteiro antes de o usuário chegar na seção.
                  preload="metadata"
                  muted
                  loop
                  playsInline
                  aria-label={`Vídeo da visita em ${active.location}`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-text-primary/90 via-text-primary/45 to-transparent flex flex-col justify-end p-6 sm:p-8 md:p-12 text-white">
                  <m.div
                    initial={{ y: 16, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3 md:mb-4">
                      <span className="bg-primary-300 text-primary-900 text-[11px] font-black px-2.5 py-1 md:px-3 rounded-full uppercase tracking-widest">
                        {active.date}
                      </span>
                      <span className="text-white/90 text-[11px] md:text-xs font-medium uppercase tracking-widest flex items-center gap-2">
                        <span className="hidden sm:inline" aria-hidden="true">•</span>
                        {active.location}
                      </span>
                    </div>
                    <p className="text-base sm:text-lg md:text-2xl font-light leading-relaxed max-w-2xl text-white">
                      {active.description}
                    </p>
                  </m.div>
                </div>
              </div>
            </m.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 md:mt-12 flex flex-col items-center gap-4 md:gap-6">
          <div className="flex items-center gap-3 md:gap-4" role="tablist" aria-label="Escolher visita">
            {VISITS.map((visit, index) => (
              <button
                key={visit.id}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Ver visita em ${visit.location}`}
                onClick={() => goTo(index, index > activeIndex ? 1 : -1)}
                className={`transition-all duration-500 rounded-full ${
                  index === activeIndex
                    ? 'w-10 md:w-12 h-1.5 bg-text-primary'
                    : 'w-2.5 md:w-3 h-1.5 bg-text-primary/25 hover:bg-text-primary/50'
                }`}
              />
            ))}
          </div>

          <div className="w-32 md:w-48 h-[1px] bg-text-primary/15 relative overflow-hidden" aria-hidden="true">
            <m.div
              key={`bar-${activeIndex}-${paused}`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: paused ? 0 : 1 }}
              transition={{ duration: paused ? 0 : AUTOPLAY_MS / 1000, ease: 'linear' }}
              style={{ originX: 0 }}
              className="h-full bg-primary-accent"
            />
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 w-full justify-between px-4 md:px-12 pointer-events-none hidden lg:flex">
        <button
          type="button"
          onClick={() => paginate(-1)}
          aria-label="Visita anterior"
          className="pointer-events-auto w-12 h-12 rounded-full bg-white/85 backdrop-blur-md shadow-lg flex items-center justify-center text-text-primary hover:bg-text-primary hover:text-white transition-colors duration-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => paginate(1)}
          aria-label="Próxima visita"
          className="pointer-events-auto w-12 h-12 rounded-full bg-white/85 backdrop-blur-md shadow-lg flex items-center justify-center text-text-primary hover:bg-text-primary hover:text-white transition-colors duration-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
