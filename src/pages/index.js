import React, { useState, useEffect } from 'react';
import HeroSection from '../components/sections/HeroSection';
import ProblemSection from '../components/sections/ProblemSection';
import FeaturesBenefitsSection from '../components/sections/FeaturesBenefitsSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import FinalCtaSection from '../components/sections/FinalCtaSection';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Controle da barra de progresso de leitura
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Animacao de entrada suave ao rolar
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observerInstance.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid-bg selection:bg-primary selection:text-heading font-sans text-heading min-h-screen">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Caveat:wght@700&display=swap');

        body {
          margin: 0;
          background-color: #fdfbf7;
          color: #43310b;
          font-family: "Poppins", sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        .font-sans { font-family: "Poppins", sans-serif; }
        .font-cursive { font-family: "Caveat", cursive; }

        .grid-bg {
          background-size: 50px 50px;
          background-image:
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
        }
        .highlight-stroke { position: relative; display: inline-block; }
        .highlight-stroke::after {
          content: "";
          position: absolute;
          left: -2%;
          bottom: 8px;
          width: 104%;
          height: 12px;
          background-color: #ffcf78;
          z-index: -1;
          border-radius: 4px;
          opacity: 0.5;
        }
        .container-custom {
          max-width: 1800px;
          margin: 0 auto;
          padding: 0 16px;
        }
        @media (min-width: 640px) {
          .container-custom {
            padding: 0 24px;
          }
        }
        @media (min-width: 1024px) {
          .container-custom {
            padding: 0 40px;
          }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%) rotate(25deg); }
          20% { transform: translateX(250%) rotate(25deg); }
          100% { transform: translateX(250%) rotate(25deg); }
        }
        .btn-mirror { position: relative; overflow: hidden; }
        .btn-mirror::after {
          content: "";
          position: absolute;
          top: -50%;
          left: -100%;
          width: 50%;
          height: 200%;
          background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.4), transparent);
          transform: rotate(25deg);
          animation: shimmer 4s infinite;
          pointer-events: none;
        }

        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.5, 0, 0, 1), transform 0.8s cubic-bezier(0.5, 0, 0, 1);
        }
        .reveal-on-scroll.is-revealed {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes fadeInUpHero {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-animate {
          opacity: 0;
          animation: fadeInUpHero 0.8s cubic-bezier(0.5, 0, 0, 1) forwards;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }

        @keyframes floatBackground {
          0% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
          100% { transform: translateY(0px) scale(1); }
        }
        .animate-float { animation: floatBackground 10s ease-in-out infinite; }
        .animate-float-delayed { animation: floatBackground 12s ease-in-out infinite 3s; }

      `,
        }}
      />

      <div
        className="fixed top-0 left-0 h-1 bg-[#FCA90F] z-[70] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <HeroSection />
      <ProblemSection />
      <FeaturesBenefitsSection />
      <HowItWorksSection />
      <FinalCtaSection />
    </div>
  );
}