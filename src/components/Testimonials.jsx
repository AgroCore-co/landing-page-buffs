import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials() {
  const visits = [
    {
      id: 1,
      location: "Levitare",
      date: "Fevereiro 2025",
      image: "/image3-slide.png",
      description: "Primeira visita em campo para conhecer o manejo e entender como a operação funciona na prática."
    },
    {
      id: 2,
      location: "Instituto de Zootecnia",
      date: "Fevereiro 2026",
      image: "/image2-slide.png",
      description: "Primeiros testes do aplicativo mobile em ambiente offline no curral."
    },
    {
      id: 3,
      location: "Gilson Lara",
      date: "Março 2025",
      image: "/image1-slide.png",
      description: "Mapeamento de rotina de manejo e identificação de gargalos operacionais."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((newDirection) => {
    setDirection(newDirection);
    setActiveIndex((prev) => (prev + newDirection + visits.length) % visits.length);
  }, [visits.length]);

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 10000);
    return () => clearInterval(timer);
  }, [paginate]);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  return (
    <section id="vivencia" className="relative w-full min-h-screen py-16 md:py-24 flex flex-col items-center justify-center overflow-hidden bg-background">
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-primary/5 blur-[80px] md:blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-8 md:mb-12">
          <span className="text-[9px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-text-primary/50 block mb-3 md:mb-4">
            Vivência Real
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary uppercase tracking-tighter leading-tight">
            Onde a tecnologia <br /> encontra o curral.
          </h2>
        </div>

        <div className="relative w-full flex items-center justify-center overflow-x-hidden touch-pan-y">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="relative w-full max-w-4xl cursor-grab active:cursor-grabbing"
            >
              <div className="relative w-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-[0_20px_40px_-10px_rgba(116,69,51,0.15)] md:shadow-[0_40px_80px_-20px_rgba(116,69,51,0.2)] border border-white select-none">

                <img
                  src={visits[activeIndex].image}
                  alt={visits[activeIndex].location}
                  className="w-full h-auto pointer-events-none"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-text-primary/90 via-text-primary/40 to-transparent flex flex-col justify-end p-6 sm:p-8 md:p-12 text-white">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3 md:mb-4">
                      <span className="bg-primary text-text-primary text-[9px] md:text-[10px] font-black px-2.5 py-1 md:px-3 rounded-full uppercase tracking-widest">
                        {visits[activeIndex].date}
                      </span>
                      <span className="text-white/80 text-[10px] md:text-xs font-medium uppercase tracking-widest flex items-center gap-2">
                         <span className="hidden sm:inline">•</span> {visits[activeIndex].location}
                      </span>
                    </div>
                    <p className="text-base sm:text-lg md:text-2xl font-light leading-relaxed max-w-2xl text-white/95">
                      {visits[activeIndex].description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 md:mt-12 flex flex-col items-center gap-4 md:gap-6">
          <div className="flex items-center gap-3 md:gap-4">
            {visits.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1);
                  setActiveIndex(index);
                }}
                className={`transition-all duration-500 rounded-full ${
                  index === activeIndex ? 'w-10 md:w-12 h-1.5 bg-text-primary' : 'w-2.5 md:w-3 h-1.5 bg-text-primary/15 hover:bg-text-primary/30'
                }`}
              />
            ))}
          </div>

          <div className="w-32 md:w-48 h-[1px] bg-text-primary/10 relative overflow-hidden">
             <motion.div 
                key={`bar-${activeIndex}`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 6, ease: "linear" }}
                style={{ originX: 0 }}
                className="h-full bg-primary"
             />
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 md:px-12 pointer-events-none hidden lg:flex">
        <button 
          onClick={() => paginate(-1)}
          className="pointer-events-auto w-12 h-12 rounded-full bg-white/80 backdrop-blur-md shadow-lg flex items-center justify-center text-text-primary hover:bg-text-primary hover:text-white transition-all focus:outline-none"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
        </button>
        <button 
          onClick={() => paginate(1)}
          className="pointer-events-auto w-12 h-12 rounded-full bg-white/80 backdrop-blur-md shadow-lg flex items-center justify-center text-text-primary hover:bg-text-primary hover:text-white transition-all focus:outline-none"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>

    </section>
  );
}