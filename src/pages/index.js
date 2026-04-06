import React, { useState, useEffect } from 'react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnnual, setIsAnnual] = useState(false);
  const [animatingPrice, setAnimatingPrice] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      // Controle da Navbar e Barra de Aviso
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Controle da Barra de Progresso de Leitura
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Script para Animação de Rolagem (Fade-in suave)
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach(entry => {
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handlePricingToggle = () => {
    setAnimatingPrice(true);
    setTimeout(() => {
      setIsAnnual(!isAnnual);
      setAnimatingPrice(false);
    }, 300);
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="grid-bg selection:bg-primary selection:text-heading font-sans text-heading min-h-screen">
      {/* Estilos Globais e Customizados */}
      <style dangerouslySetInnerHTML={{
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
          padding: 0 40px;
        }
        .nav-scrolled {
          background-color: rgba(255, 255, 255, 0.7) !important;
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          padding-top: 0.75rem !important;
          padding-bottom: 0.75rem !important;
          top: 0 !important;
        }
        .announcement-hidden { transform: translateY(-100%); }
        
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

        .faq-content-wrapper {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.4s ease;
        }
        .faq-content-wrapper.open { grid-template-rows: 1fr; }
        .faq-content-inner { overflow: hidden; }
      `}} />

      {/* BARRA DE PROGRESSO DE LEITURA */}
      <div 
        className="fixed top-0 left-0 h-1 bg-[#FCA90F] z-[70] transition-all duration-150 ease-out" 
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* ANNOUNCEMENT BAR (FAIXA DE AVISO) */}
      <div className={`fixed top-0 left-0 w-full h-8 z-[60] bg-[#43310B] text-white flex items-center justify-center text-[10px] sm:text-[11px] md:text-xs font-medium tracking-wide shadow-sm transition-transform duration-300 ${isScrolled ? 'announcement-hidden' : ''}`}>
        <span className="flex items-center gap-2 px-4 text-center">
          <span className="text-[#FFCF78] text-sm animate-pulse">🔥</span> 
          Aproveite os valores especiais de lançamento por tempo limitado. 
          <a href="#planos" className="font-bold text-[#FFCF78] hover:text-white underline underline-offset-2 transition-colors ml-1 hidden sm:inline-block">Ver planos</a>
        </span>
      </div>

      {/* Header / Navigation */}
      <nav className={`bg-transparent fixed w-full z-50 py-4 md:py-6 transition-all duration-300 ${isScrolled ? 'nav-scrolled' : 'top-8'}`}>
        <div className="container-custom flex items-center justify-between">
          {/* Logo Buffs */}
          <div className="flex items-center gap-2">
            <svg className="h-10 w-auto" viewBox="0 0 491 159" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M430.028 151.575C436.771 153.749 443.445 154.836 450.048 154.836C477.234 154.836 490.827 144.034 490.827 122.43C490.827 114.995 488.965 108.787 485.242 103.807C481.519 98.8269 475.548 94.9691 467.329 92.2335L448.889 122.955C451.789 123.976 454.072 124.924 455.738 125.797C458.548 127.2 459.953 128.813 459.953 130.637C459.953 132.531 459.145 134.004 457.53 135.056C455.984 136.108 453.104 136.634 448.889 136.634C443.059 136.634 437.333 135.792 431.714 134.109C426.164 132.425 422.195 130.426 419.807 128.112L417.067 145.051C418.964 147.156 423.284 149.33 430.028 151.575ZM442.04 120.747C425.672 115.837 417.489 105.666 417.489 90.2344C417.489 83.9215 419.315 78.5204 422.968 74.0313C426.621 69.472 431.292 66.1752 436.982 64.1411C442.672 62.1069 449.03 61.0898 456.054 61.0898C468.067 61.0898 476.918 63.2993 482.608 67.7184L484.505 69.507L479.868 84.5528C475.232 79.9934 468.839 77.7138 460.691 77.7138C454.017 77.7138 450.68 79.6778 450.68 83.6058C450.68 84.7281 450.926 85.6751 451.418 86.4466C451.91 87.1481 452.718 87.7794 453.842 88.3405C455.036 88.8315 456.195 89.2524 457.319 89.6031C458.443 89.8837 460.023 90.3045 462.061 90.8657L442.04 120.747Z" fill="#43310B" />
              <path d="M417.069 134.109C389.081 152.193 389.079 118.492 413.777 119.665C400.607 129.707 408.361 134.139 417.069 134.109Z" fill="#43310B" />
              <path d="M67.0168 135.816C72.0043 135.816 75.6572 134.413 77.9754 131.608C80.2935 128.802 81.4526 125.47 81.4526 121.612V114.247C81.4526 109.688 79.9774 106.461 77.027 104.568C74.0766 102.604 70.7399 101.622 67.0168 101.622H58.7978V135.816H67.0168ZM79.9774 64.6911C79.9774 60.4825 78.8183 57.5716 76.5002 55.9583C74.182 54.2748 70.8452 53.4331 66.4899 53.4331H58.7978V83.8402H67.3329C71.4072 83.8402 74.5332 82.262 76.7109 79.1055C78.8886 75.879 79.9774 71.9509 79.9774 67.3215V64.6911ZM74.182 157.385C68.7027 157.385 61.6077 157.245 52.8971 156.965C44.1864 156.684 37.9344 156.509 34.141 156.438H24.0254V33.1266H42.2546C46.6802 33.1266 51.738 32.9863 57.428 32.7058C63.118 32.355 67.2275 32.1797 69.7564 32.1797C77.9754 32.1797 84.8947 32.846 90.5145 34.1788C96.2045 35.5115 100.665 37.5106 103.897 40.176C107.128 42.8415 109.411 45.9278 110.746 49.4349C112.151 52.9421 112.853 57.1156 112.853 61.9555C112.853 69.3907 111.132 75.7737 107.69 81.1046C104.248 86.4355 99.2603 89.7673 92.7273 91.1C109.306 92.5731 117.595 102.288 117.595 120.245C117.595 125.646 116.787 130.556 115.171 134.975C113.556 139.323 111.062 143.216 107.69 146.653C104.388 150.02 99.8925 152.651 94.2025 154.545C88.5125 156.438 81.839 157.385 74.182 157.385Z" fill="#43310B" />
              <path d="M0.64377 1.90625C15.4616 31.498 59.7712 15.0581 64.7105 39.7179C29.655 46.2938 28.634 26.5661 7.22872 41.362C12.1674 26.5661 -1.00462 31.498 0.64377 1.90625Z" fill="#43310B" stroke="#43310B" />
              <path d="M124.321 1.90625C109.503 31.498 65.1936 15.0581 60.2544 39.7179C95.3099 46.2938 96.3309 26.5661 117.736 41.362C112.797 26.5661 125.969 31.498 124.321 1.90625Z" fill="#43310B" stroke="#43310B" />
              <path d="M186.975 143.107C186.554 144.089 185.676 145.387 184.341 147C183.077 148.613 180.42 151.848 178.312 153.812C176.666 152.168 174.818 144.259 171.727 145.592C168.636 146.995 161.717 142.304 158.555 142.304C148.651 142.304 139.794 138.928 140.445 146.293C136.23 140.401 134.5 134.76 134.5 121.012V83.5554L130.812 79.7677V67.668H169.062V127.64C168.992 130.797 169.519 133.147 170.643 134.69C171.767 136.163 173.804 136.899 176.754 136.899C177.176 136.899 177.562 136.899 177.913 136.899C178.265 136.829 178.616 136.759 178.967 136.689C179.318 136.549 179.599 136.443 179.81 136.373C180.091 136.303 180.407 136.198 180.758 136.058C181.11 135.847 181.391 135.672 181.601 135.532C181.812 135.391 182.093 135.216 182.444 135.005C182.796 134.725 183.041 134.514 183.182 134.374C183.393 134.234 183.674 134.023 184.025 133.743C184.446 133.392 184.762 133.147 184.973 133.006V83.5554L179.283 79.7677V67.668H219.43V144.539L201.362 145.592L186.975 143.107Z" fill="#43310B" />
              <path d="M178.314 153.814C151.972 142.307 135.507 142.307 125.629 158.747V137.375H178.314V153.814Z" fill="#43310B" />
              <path d="M178.314 153.814C151.972 142.307 135.507 142.307 125.629 158.747V137.375H178.314V153.814Z" stroke="#43310B" />
              <path d="M178.314 153.814C204.657 142.307 221.121 142.307 231 158.747V137.375H178.314V153.814Z" fill="#43310B" />
              <path d="M178.314 153.814C204.657 142.307 221.121 142.307 231 158.747V137.375H178.314V153.814Z" stroke="#43310B" />
              <path fillRule="evenodd" clipRule="evenodd" d="M291.587 155.649H257.76L257.763 84.7344V66.2166V57.0629C257.763 49.9784 258.746 43.8408 260.713 38.6502C262.68 33.4596 265.42 29.4264 268.932 26.5505C272.515 23.6746 276.449 21.6054 280.734 20.3428C285.089 19.0101 289.936 18.3438 295.275 18.3438C300.052 18.3438 304.547 18.975 308.762 20.2376C312.977 21.5002 315.611 22.6576 316.665 23.7097L312.661 39.7024C309.289 38.0189 305.812 37.1772 302.229 37.1772C301.316 37.1772 300.473 37.2474 299.7 37.3877C294.291 38.2294 291.587 42.8238 291.587 51.1708V66.2166V84.7344V155.649Z" fill="#43310B" />
              <path d="M311.673 74.2383H244.17L237.584 95.6101H301.794L311.673 74.2383Z" fill="#43310B" stroke="#43310B" />
              <path d="M415.4 28.2122L426.925 34.7881L423.632 13.4163L436.804 8.48438L441.743 19.9923L426.925 34.7881L441.743 31.5001L438.45 44.652L408.814 67.6678L415.4 28.2122Z" fill="#43310B" />
              <path fillRule="evenodd" clipRule="evenodd" d="M373.909 155.649H340.082L340.085 84.7344V66.2166V57.0629C340.085 49.9784 341.068 43.8408 343.035 38.6502C345.002 33.4596 347.742 29.4264 351.254 26.5505C354.837 23.6746 358.771 21.6054 363.056 20.3428C367.411 19.0101 372.258 18.3438 377.597 18.3438C382.374 18.3438 386.87 18.975 391.085 20.2376C395.299 21.5002 397.934 22.6576 398.987 23.7097L394.983 39.7024C391.611 38.0189 388.134 37.1772 384.552 37.1772C383.638 37.1772 382.795 37.2474 382.023 37.3877C376.614 38.2294 373.909 51.1708V66.2166V84.7344V155.649Z" fill="#43310B" />
              <path d="M393.995 74.2383H326.492L319.906 95.6101H384.117L393.995 74.2383Z" fill="#43310B" stroke="#43310B" />
            </svg>
          </div>

          {/* Nav Links Desktop */}
          <div className="hidden md:flex items-center gap-12">
            <a href="#solucoes" className="text-[11px] font-bold uppercase tracking-widest text-[#404040] hover:text-[#43310B] transition-colors">Soluções</a>
            <a href="#comparativo" className="text-[11px] font-bold uppercase tracking-widest text-[#404040] hover:text-[#43310B] transition-colors">Comparativo</a>
            <a href="#como-funciona" className="text-[11px] font-bold uppercase tracking-widest text-[#404040] hover:text-[#43310B] transition-colors">Como Funciona</a>
            <a href="#tecnologia" className="text-[11px] font-bold uppercase tracking-widest text-[#404040] hover:text-[#43310B] transition-colors">Tecnologia</a>
            <a href="#planos" className="text-[11px] font-bold uppercase tracking-widest text-[#404040] hover:text-[#43310B] transition-colors">Planos</a>
            <a href="#" className="text-[12px] font-bold text-[#43310B] hover:opacity-70 ml-2">Login</a>
            <button className="bg-[#43310B] text-white px-6 py-3 rounded-full font-bold text-[11px] hover:bg-black transition-all whitespace-nowrap">
              Quero melhorar minha produção
            </button>
          </div>

          {/* Botão Menu Mobile */}
          <button onClick={toggleMobileMenu} className="md:hidden text-[#43310B] p-2 focus:outline-none cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </nav>

      {/* Menu Mobile Overlay */}
      <div className={`fixed inset-0 bg-white z-[100] transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out flex flex-col pt-24 px-8 pb-8 md:hidden`}>
        <button onClick={toggleMobileMenu} className="absolute top-8 right-8 text-[#43310B] p-2 focus:outline-none hover:rotate-90 transition-transform duration-300 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <div className="flex flex-col gap-6 text-2xl font-bold text-[#43310B] mt-10">
          <a href="#solucoes" onClick={toggleMobileMenu} className="hover:text-[#FCA90F] transition-colors">Soluções</a>
          <a href="#comparativo" onClick={toggleMobileMenu} className="hover:text-[#FCA90F] transition-colors">Comparativo</a>
          <a href="#como-funciona" onClick={toggleMobileMenu} className="hover:text-[#FCA90F] transition-colors">Como Funciona</a>
          <a href="#tecnologia" onClick={toggleMobileMenu} className="hover:text-[#FCA90F] transition-colors">Tecnologia</a>
          <a href="#planos" onClick={toggleMobileMenu} className="hover:text-[#FCA90F] transition-colors">Planos</a>
          <div className="h-px w-full bg-black/10 my-4"></div>
          <a href="#" onClick={toggleMobileMenu} className="text-[#404040]/60 text-xl hover:text-[#43310B] transition-colors">Login Produtor</a>
          <button className="bg-[#43310B] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-black transition-all w-full mt-4">
            Quero melhorar minha produção
          </button>
        </div>
      </div>

      {/* HERO SECTION */}
      <header className="relative h-[100dvh] min-h-[760px] overflow-hidden">
        {/* Elementos Decorativos Suaves (Flutuantes) */}
        <div className="absolute -top-24 -right-16 w-[600px] h-[600px] rounded-full bg-[#FFCF78]/20 blur-[120px] pointer-events-none animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#E9D9B4]/30 blur-[100px] pointer-events-none animate-float-delayed"></div>

        <div className="container-custom relative z-10 h-full pt-32 md:pt-36 pb-8 md:pb-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
          {/* Conteúdo Esquerdo (Com animação em cascata) */}
          <div className="space-y-8 md:space-y-10 max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white border border-black/10 rounded-full shadow-sm hero-animate delay-100">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#404040]">SaaS de Gestão Bubalina</span>
            </div>

            <h1 className="text-6xl md:text-[6.2rem] font-bold tracking-tighter text-[#43310B] leading-[0.95] hero-animate delay-200">
              Gestão inteligente<br />
              para gerar lucro<br />
              na <span className="font-cursive text-[#FFCF78] highlight-stroke">Bubalinocultura</span>
            </h1>

            <p className="text-lg md:text-xl text-[#404040]/80 font-normal max-w-3xl leading-relaxed hero-animate delay-300">
              Buffs é a plataforma de controle completa da produção leiteira e do manejo de búfalas. Oferecemos controle preciso de dados zootécnicos, sanitários e reprodutivos para decisões estratégicas reais.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 hero-animate delay-400">
              <button className="btn-mirror bg-[#FFCF78] hover:bg-[#FCA90F] text-[#43310B] px-8 py-4 rounded-full font-bold text-sm shadow-md transition-all flex items-center gap-3 group active:scale-95">
                Quero mais controle do meu rebanho
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
              <a href="#como-funciona" className="text-sm font-bold text-[#43310B]/80 hover:text-[#43310B] transition-colors inline-flex items-center gap-2 group px-7 py-4 rounded-full border border-black/10 bg-white/50 backdrop-blur-sm hover:bg-white hover:-translate-y-1 shadow-sm hover:shadow-md">
                Ver como evitar prejuízos no manejo
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* SECTION: THE PROBLEM */}
      <section id="solucoes" className="py-24 md:py-32 bg-white/40 backdrop-blur-sm border-t border-black/5">
        <div className="container-custom reveal-on-scroll">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-left">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#43310B] leading-[1.1]">
                Planilhas de Excel não<br />
                comunicam <span className="italic text-[#FCA90F]">cio</span> ou <span className="italic text-[#FCA90F]">doenças</span>.
              </h2>
              <p className="text-lg text-[#404040]/70 font-normal leading-relaxed">
                Anotar dados que se perdem gera prejuízo. Nossa plataforma foi desenhada para oferecer um controle rigoroso das médias semanais, mensais e anuais, auxiliando o proprietário na gestão de produção e rentabilidade.
              </p>
              <div className="bg-[#FFF8ED] border border-[#FFCF78]/30 rounded-2xl px-5 py-4">
                <p className="text-sm md:text-base font-bold text-[#43310B] leading-relaxed">
                  Mais controle reprodutivo = mais prenhez = mais produção.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-[#FFCF78]/20 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#FCA90F]"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <p className="font-bold text-[#43310B] text-lg group-hover:text-[#FCA90F] transition-colors">Decisões Estratégicas</p>
                    <p className="text-[#404040]/60 text-sm">Transforme números isolados em insights poderosos para sua propriedade.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-[#FFCF78]/20 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#FCA90F]"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <p className="font-bold text-[#43310B] text-lg group-hover:text-[#FCA90F] transition-colors">Médias em Tempo Real</p>
                    <p className="text-[#404040]/60 text-sm">Acompanhe a evolução da produção de leite com dashboards intuitivos.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#5E4B28] to-[#7A6640] rounded-[2.5rem] p-8 md:p-12 text-[#FFF8ED] space-y-8 relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFCF78]/10 rounded-full blur-3xl animate-float"></div>
              <div className="inline-block px-4 py-1 rounded-full border border-white/20 text-[10px] uppercase font-bold tracking-widest text-[#FFCF78]">Tecnologia Especializada</div>
              <h3 className="text-3xl font-bold tracking-tight leading-tight italic font-cursive">"Onde os dados encontram o curral"</h3>
              <ul className="space-y-6">
                <li className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                  <span className="text-4xl font-extrabold text-[#FFCF78]">01</span>
                  <p className="text-lg text-[#FFF8ED] leading-snug font-medium">Cálculo automático de taxa de concepção e peso ao desmame.</p>
                </li>
                <li className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                  <span className="text-4xl font-extrabold text-[#FFCF78]">02</span>
                  <p className="text-lg text-[#FFF8ED] leading-snug font-medium">Monitoramento reprodutivo completo das búfalas.</p>
                </li>
                <li className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                  <span className="text-4xl font-extrabold text-[#FFCF78]">03</span>
                  <p className="text-lg text-[#FFF8ED] leading-snug font-medium">Controle sanitário ágil para medidas preventivas rápidas.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: COMPARATIVO (EXCEL VS BUFFS) */}
      <section id="comparativo" className="py-24 md:py-32 relative">
        <div className="container-custom reveal-on-scroll">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-black/5 rounded-full">
               <span className="text-[10px] font-bold uppercase tracking-widest text-[#404040]">A Evolução do Manejo</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#43310B] leading-tight">
              Adeus planilhas.<br/> Olá, <span className="highlight-stroke">Gestão Inteligente</span>.
            </h2>
            <p className="text-sm md:text-base text-[#404040]/70 font-medium">
              Cada ciclo reprodutivo perdido impacta diretamente no faturamento da propriedade.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Lado Planilhas */}
            <div className="bg-white border border-black/5 p-10 md:p-14 rounded-[2.5rem] hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="inline-block px-4 py-1 rounded-full bg-[#404040]/5 text-[10px] uppercase font-bold tracking-widest text-[#404040] mb-8">
                Método Tradicional
              </div>
              <ul className="space-y-8">
                <li className="flex items-center gap-4">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-red-400/80"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </div>
                  <span className="font-medium text-lg text-[#404040]/70">Anotações dispersas</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-red-400/80"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </div>
                  <span className="font-medium text-lg text-[#404040]/70">Sem alertas de manejo</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-red-400/80"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </div>
                  <span className="font-medium text-lg text-[#404040]/70">Decisões baseadas no achismo</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-red-400/80"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </div>
                  <span className="font-medium text-lg text-[#404040]/70">Perda de informações valiosas</span>
                </li>
              </ul>
            </div>

            {/* Lado Buffs */}
            <div className="bg-[#FFF8ED] border border-[#FFCF78]/20 p-10 md:p-14 rounded-[2.5rem] relative overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-[#FFCF78]/20 transition-all duration-300">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFCF78]/20 rounded-full blur-3xl pointer-events-none animate-float"></div>

              <div className="inline-block px-4 py-1 rounded-full bg-[#FFCF78]/20 text-[10px] uppercase font-bold tracking-widest text-[#43310B] mb-8 relative z-10">
                Plataforma Buffs
              </div>
              <ul className="space-y-8 relative z-10">
                <li className="flex items-center gap-4">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#FCA90F]"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="font-bold text-lg text-[#43310B]">Dados centralizados e seguros</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#FCA90F]"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="font-bold text-lg text-[#43310B]">Monitoramento reprodutivo ativo</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#FCA90F]"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="font-bold text-lg text-[#43310B]">Decisões baseadas em dados</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#FCA90F]"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="font-bold text-lg text-[#43310B]">Histórico completo da produção</span>
                </li>
              </ul>
              <div className="mt-8 relative z-10 rounded-2xl border border-[#FFCF78]/30 bg-white/80 px-5 py-4">
                <p className="text-sm md:text-base font-bold text-[#43310B] leading-relaxed">
                  Redução de falhas sanitárias = menos prejuízo com tratamentos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: PARA QUEM É O BUFFS (IDENTIFICAÇÃO) */}
      <section id="para-quem" className="py-24 md:py-32 border-t border-black/5">
        <div className="container-custom reveal-on-scroll">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-black/5 rounded-full">
               <span className="text-[10px] font-bold uppercase tracking-widest text-[#404040]">Perfil</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#43310B] leading-tight">
              Para quem foi feito o <span className="highlight-stroke">Buffs?</span>
            </h2>
            <p className="text-sm md:text-base text-[#404040]/70 font-medium max-w-2xl mx-auto">
              Desenhado exclusivamente para quem vive a realidade do campo e quer profissionalizar a gestão da fazenda de forma prática.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Perfil 1: Leite */}
            <div className="bg-white border border-black/5 p-10 rounded-[2.5rem] hover:border-[#FFCF78]/30 transition-all duration-300 group hover:-translate-y-2 shadow-sm hover:shadow-xl">
              <div className="w-14 h-14 bg-[#FDFBF7] rounded-2xl flex items-center justify-center mb-6 border border-black/5 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#FCA90F]"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>
              </div>
              <h4 className="text-xl font-bold text-[#43310B] mb-3">Produtores focados em leite</h4>
              <p className="text-[#404040]/70 text-sm leading-relaxed font-medium">Acompanhe a curva de lactação, controle dias em leite (DEL) e planeje a secagem de cada matriz com precisão para não perder rentabilidade.</p>
            </div>

            {/* Perfil 2: Genética */}
            <div className="bg-white border border-black/5 p-10 rounded-[2.5rem] hover:border-[#FFCF78]/30 transition-all duration-300 group hover:-translate-y-2 shadow-sm hover:shadow-xl">
              <div className="w-14 h-14 bg-[#FDFBF7] rounded-2xl flex items-center justify-center mb-6 border border-black/5 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#FCA90F]"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
              </div>
              <h4 className="text-xl font-bold text-[#43310B] mb-3">Foco em evolução genética</h4>
              <p className="text-[#404040]/70 text-sm leading-relaxed font-medium">Identifique rapidamente as melhores matrizes e reprodutores. Acompanhe taxas de concepção e peso ao desmame para melhorar o rebanho.</p>
            </div>

            {/* Perfil 3: Sair do Papel */}
            <div className="bg-[#FFF8ED] border border-[#FFCF78]/20 p-10 rounded-[2.5rem] hover:border-[#FFCF78]/40 transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden shadow-sm hover:shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFCF78]/20 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500 animate-float"></div>
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 border border-[#FFCF78]/10 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300 relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#FCA90F]"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
              </div>
              <h4 className="text-xl font-bold text-[#43310B] mb-3 relative z-10">Fazendas que querem sair do papel</h4>
              <p className="text-[#43310B]/70 text-sm leading-relaxed font-medium relative z-10">Dê adeus aos cadernos rasgados, anotações perdidas e quadros apagados no curral. Centralize tudo no celular e decida com confiança.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: NOSSA HISTÓRIA / QUEM SOMOS */}
      <section id="quem-somos" className="py-24 md:py-32 bg-[#FFF8ED] border-t border-black/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#FFCF78]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2 animate-float"></div>
        
        <div className="container-custom reveal-on-scroll relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-black/5 rounded-full shadow-sm">
               <span className="text-[10px] font-bold uppercase tracking-widest text-[#404040]">Nossa Raiz</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#43310B] leading-tight">
              Nascida no curral.<br /> <span className="highlight-stroke">Feita para o produtor.</span>
            </h2>
            
            <div className="bg-white/60 backdrop-blur-md border border-black/5 p-8 md:p-12 rounded-[2.5rem] shadow-sm text-left md:text-center mt-8 hover:shadow-xl transition-shadow duration-500">
              <p className="text-lg md:text-xl text-[#404040]/80 font-medium leading-relaxed">
                A Buffs não nasceu dentro de um escritório fechado. <strong className="text-[#43310B]">Ela é o resultado de uma profunda imersão no campo.</strong> 
                <br/><br/>
                Nossa equipe passou por uma longa jornada de pesquisa lado a lado com produtores para entender a verdadeira realidade da bubalinocultura. Ouvimos as dores de quem perde informações em cadernos de campo e precisa tomar decisões baseadas no "achismo". Unimos essa pesquisa de ponta à tecnologia para criar exatamente a ferramenta que o mercado de búfalos precisava.
              </p>
            </div>
            
            <div className="pt-6">
               <p className="text-3xl font-cursive font-bold text-[#FCA90F]">Tecnologia feita com quem entende do rebanho.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: COMO FUNCIONA NA PRATICA */}
      <section id="como-funciona" className="py-24 md:py-32 bg-white border-t border-black/5">
        <div className="container-custom reveal-on-scroll">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FDFBF7] border border-black/5 rounded-full">
               <span className="text-[10px] font-bold uppercase tracking-widest text-[#404040]">Passo a Passo</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#43310B] leading-tight">
              Como funciona na <span className="highlight-stroke">prática</span>
            </h2>
            <p className="text-2xl text-[#FCA90F] font-cursive font-bold tracking-wide">
              Simples no uso. Poderoso na decisão.
            </p>
            <p className="text-sm md:text-base text-[#404040]/70 font-medium max-w-2xl mx-auto">
              Quanto mais você demora para organizar seus dados, mais decisões são tomadas no escuro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#FDFBF7] border border-black/5 p-8 md:p-10 rounded-[2rem] hover:border-black/10 hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
              <div className="text-5xl font-black text-black/5 mb-8 font-sans">1</div>
              <h4 className="text-xl font-bold text-[#43310B] mb-3">Cadastre seus animais</h4>
              <p className="text-[#404040]/60 text-sm leading-relaxed font-medium">Insira o seu rebanho no sistema de forma rápida para iniciar o acompanhamento.</p>
            </div>
            <div className="bg-[#FDFBF7] border border-black/5 p-8 md:p-10 rounded-[2rem] hover:border-black/10 hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
              <div className="text-5xl font-black text-black/5 mb-8 font-sans">2</div>
              <h4 className="text-xl font-bold text-[#43310B] mb-3">Registre eventos</h4>
              <p className="text-[#404040]/60 text-sm leading-relaxed font-medium">Anotações diárias simples como cio, aplicação de vacina e pesagem de produção.</p>
            </div>
            <div className="bg-[#FDFBF7] border border-black/5 p-8 md:p-10 rounded-[2rem] hover:border-black/10 hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
              <div className="text-5xl font-black text-black/5 mb-8 font-sans">3</div>
              <h4 className="text-xl font-bold text-[#43310B] mb-3">A plataforma analisa</h4>
              <p className="text-[#404040]/60 text-sm leading-relaxed font-medium">O sistema cruza e processa todos os dados de forma automática em tempo real.</p>
            </div>
            <div className="bg-[#FFF8ED] border border-[#FFCF78]/20 p-8 md:p-10 rounded-[2rem] relative overflow-hidden group hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFCF78]/20 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-700 animate-float"></div>
              <div className="text-5xl font-black text-[#FFCF78]/40 mb-8 font-sans relative z-10">4</div>
              <h4 className="text-xl font-bold text-[#43310B] mb-3 relative z-10">Você recebe insights</h4>
              <p className="text-[#43310B]/70 text-sm leading-relaxed font-medium relative z-10">Insights acionáveis, relatórios e alertas prontos para guiar sua tomada de decisão.</p>
            </div>
          </div>
          <div className="mt-10 md:mt-12 rounded-[1.5rem] border border-black/10 bg-[#FDFBF7] px-6 md:px-8 py-5 md:py-6 text-center hover:shadow-md transition-shadow">
            <p className="text-sm md:text-base font-bold text-[#43310B] leading-relaxed">
              Dados organizados = decisões mais rápidas = mais eficiência no campo.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: FEATURES GRID */}
      <section id="tecnologia" className="py-24 md:py-32 border-t border-black/5">
        <div className="container-custom reveal-on-scroll">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#43310B] leading-tight">
              Gestão 360° do seu <span className="highlight-stroke">rebanho</span>
            </h2>
            <p className="text-lg text-[#404040]/60">Controle total de cada animal, do nascimento à produção final.</p>
          </div>

          <div className="max-w-5xl mx-auto mb-14 rounded-[2rem] border border-[#FFCF78]/25 bg-[#FFF8ED] px-6 md:px-10 py-8 md:py-10 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FFCF78]/20 rounded-full blur-3xl pointer-events-none animate-float"></div>
            <div className="relative z-10 space-y-4">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#FCA90F]">Inteligência aplicada ao manejo</p>
              <p className="text-base md:text-lg text-[#43310B]/80 font-medium leading-relaxed max-w-4xl">
                A plataforma analisa padrões de comportamento, dados reprodutivos e históricos para gerar alertas e apoiar decisões no momento certo.
              </p>
              <p className="text-sm md:text-base font-bold text-[#43310B]">Decida no momento certo.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-black/5 p-10 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#FDFBF7] rounded-2xl flex items-center justify-center mb-6 border border-black/5 group-hover:bg-[#FFCF78] group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#43310B]"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" y1="22" x2="12" y2="12"></line></svg>
              </div>
              <h4 className="text-xl font-bold text-[#43310B] mb-3 tracking-tight">Dados Zootécnicos</h4>
              <p className="text-[#404040]/70 text-sm leading-relaxed font-medium">Controle preciso de indicadores para melhor gestão do desempenho individual.</p>
            </div>
            <div className="bg-white border border-black/5 p-10 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#FDFBF7] rounded-2xl flex items-center justify-center mb-6 border border-black/5 group-hover:bg-[#FFCF78] group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#43310B]"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h4 className="text-xl font-bold text-[#43310B] mb-3 tracking-tight">Controle Sanitário</h4>
              <p className="text-[#404040]/70 text-sm leading-relaxed font-medium">Acompanhamento rigoroso de vacinações e protocolos de tratamento.</p>
            </div>
            <div className="bg-white border border-black/5 p-10 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#FDFBF7] rounded-2xl flex items-center justify-center mb-6 border border-black/5 group-hover:bg-[#FFCF78] group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#43310B]"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              </div>
              <h4 className="text-xl font-bold text-[#43310B] mb-3 tracking-tight">Ciclo Reprodutivo</h4>
              <p className="text-[#404040]/70 text-sm leading-relaxed font-medium">Monitoramento completo da monta, prenhez e supervisão de cio.</p>
            </div>
            <div className="bg-white border border-black/5 p-10 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#FDFBF7] rounded-2xl flex items-center justify-center mb-6 border border-black/5 group-hover:bg-[#FFCF78] group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#43310B]"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
              </div>
              <h4 className="text-xl font-bold text-[#43310B] mb-3 tracking-tight">Médias de Produção</h4>
              <p className="text-[#404040]/70 text-sm leading-relaxed font-medium">Histórico detalhado de médias semanais, mensais e anuais de leite.</p>
            </div>
            <div className="bg-white border border-black/5 p-10 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#FDFBF7] rounded-2xl flex items-center justify-center mb-6 border border-black/5 group-hover:bg-[#FFCF78] group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#43310B]"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
              </div>
              <h4 className="text-xl font-bold text-[#43310B] mb-3 tracking-tight">Análise de Dados</h4>
              <p className="text-[#404040]/70 text-sm leading-relaxed font-medium">Estatísticas avançadas e inteligência de dados para gestão estratégica.</p>
            </div>
            <div className="bg-white border border-black/5 p-10 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#FDFBF7] rounded-2xl flex items-center justify-center mb-6 border border-black/5 group-hover:bg-[#FFCF78] group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#43310B]"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C10 14.5 12 15 15 15"></path></svg>
              </div>
              <h4 className="text-xl font-bold text-[#43310B] mb-3 tracking-tight">Manejo Sustentável</h4>
              <p className="text-[#404040]/70 text-sm leading-relaxed font-medium">Ferramentas focadas na longevidade e equilíbrio do rebanho bubalino.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: WHY BUFFS? */}
      <section className="py-24 md:py-32 bg-[#43310B] text-white rounded-[3rem] md:rounded-[5rem] mx-4 mb-24 relative overflow-hidden reveal-on-scroll">
        <div className="absolute inset-0 grid-bg opacity-5 pointer-events-none"></div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1 rounded-full bg-[#FFCF78]/10 border border-[#FFCF78]/20 text-[10px] uppercase font-bold tracking-widest text-[#FFCF78]">Diferencial Único</div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">Por que escolher a plataforma Buffs?</h2>
              <p className="text-lg text-white/70 font-normal leading-relaxed">
                Nossa solução foi desenvolvida especificamente para o manejo de búfalas, considerando as particularidades desta espécie e as necessidades dos produtores. Transformamos dados técnicos em decisões de negócio.
              </p>
              <div className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4">
                <p className="text-sm md:text-base text-white/80 font-medium leading-relaxed">
                  Pensado para uso direto no campo, com registro rápido e acesso simples às informações mais importantes do rebanho.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <p className="text-[#FFCF78] font-cursive text-2xl">Transformando o manejo com tecnologia avançada.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-4 hover:bg-white/10 transition-colors">
                <h5 className="text-lg font-bold text-[#FFCF78]">Interface Intuitiva</h5>
                <p className="text-white/60 text-sm">Fácil de usar no dia a dia do campo, sem complicações técnicas.</p>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-4 hover:bg-white/10 transition-colors">
                <h5 className="text-lg font-bold text-[#FFCF78]">Relatórios Detalhados</h5>
                <p className="text-white/60 text-sm">Visão panorâmica da produção para aumentar a produtividade.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: GATILHOS DE SEGURANÇA (TRUST BANNER) */}
      <section className="py-16 bg-white border-t border-black/5">
        <div className="container-custom reveal-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 text-center md:divide-x divide-black/5">
            <div className="px-8 space-y-4 group">
              <div className="w-14 h-14 mx-auto bg-[#FFCF78]/20 text-[#FCA90F] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
              </div>
              <h5 className="font-bold text-[#43310B] text-lg">Nuvem Segura</h5>
              <p className="text-sm text-[#404040]/60 font-medium leading-relaxed">
                Esqueça pen drives ou planilhas corrompidas. Seus dados ficam protegidos com backup automático 24h.
              </p>
            </div>
            <div className="px-8 space-y-4 group">
              <div className="w-14 h-14 mx-auto bg-[#FFCF78]/20 text-[#FCA90F] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m2 2 20 20"></path><path d="M8.53 8.53C5.52 9.57 3 12 3 12s4.73 5 9 5c1.59 0 3.08-.43 4.39-1.15"></path><path d="M15.42 15.42C17.81 14.28 21 12 21 12s-3.03-3.66-6.68-4.73"></path><line x1="12" y1="12" x2="12.01" y2="12"></line></svg>
              </div>
              <h5 className="font-bold text-[#43310B] text-lg">Modo Offline</h5>
              <p className="text-sm text-[#404040]/60 font-medium leading-relaxed">
                Sem sinal no curral? Não tem problema. Registre os dados offline e o app sincroniza quando conectar.
              </p>
            </div>
            <div className="px-8 space-y-4 group">
              <div className="w-14 h-14 mx-auto bg-[#FFCF78]/20 text-[#FCA90F] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h5 className="font-bold text-[#43310B] text-lg">Suporte Especializado</h5>
              <p className="text-sm text-[#404040]/60 font-medium leading-relaxed">
                Atendimento com humanos que entendem a realidade do campo e estão prontos para te ajudar em português.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: PLANOS / PRICING */}
      <section id="planos" className="py-24 md:py-32 bg-white border-t border-black/5 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#FFCF78]/10 rounded-full blur-[120px] pointer-events-none animate-float"></div>

        <div className="container-custom relative z-10 reveal-on-scroll">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FDFBF7] border border-black/5 rounded-full">
               <span className="text-[10px] font-bold uppercase tracking-widest text-[#404040]">Investimento</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#43310B] leading-tight">
              Escolha o plano ideal para o seu <span className="highlight-stroke">rebanho</span>
            </h2>
            <p className="text-sm md:text-base text-[#404040]/70 font-medium max-w-xl mx-auto">
              Sem taxas ocultas, sem fidelidade amarrada. Cancele quando quiser.
            </p>
          </div>

          {/* Pricing Toggle (Mensal / Anual) */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 mb-16">
            <span className={`text-sm font-bold transition-colors duration-300 ${!isAnnual ? 'text-[#43310B]' : 'text-[#404040]/40'}`}>Mensal</span>
            <button onClick={handlePricingToggle} className={`relative w-16 h-8 rounded-full focus:outline-none transition-colors duration-300 shadow-inner ${isAnnual ? 'bg-[#FFCF78]' : 'bg-black/10'}`}>
              <div className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isAnnual ? 'translate-x-8' : ''}`}></div>
            </button>
            <span className={`text-sm font-bold transition-colors duration-300 flex items-center gap-2 ${isAnnual ? 'text-[#43310B]' : 'text-[#404040]/40'}`}>
              Anual <span className="px-2.5 py-1 bg-green-100 text-green-700 rounded-full text-[10px] uppercase tracking-widest font-black shadow-sm">20% Off</span>
            </span>
          </div>

          <div className="max-w-[1500px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch w-full">
            
            {/* Plano 1: Básico */}
            <div className="bg-[#FDFBF7] border border-black/5 rounded-[2rem] p-6 lg:p-8 flex flex-col hover:border-black/15 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#43310B] mb-1">Básico</h3>
                <p className="text-[#404040]/60 text-xs font-medium h-8">Ideal para pequenas propriedades iniciais.</p>
              </div>
              <div className="mb-6 pb-6 border-b border-black/5">
                <div className="flex items-end gap-1">
                  <span className={`text-4xl font-bold text-[#43310B] tracking-tighter transition-opacity duration-300 ${animatingPrice ? 'opacity-0' : 'opacity-100'}`}>R$ {isAnnual ? '77' : '97'}</span>
                  <span className="text-[#404040]/50 text-xs font-medium mb-1">/mês</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span className="text-[#404040]/80 text-xs font-medium">Até 50 matrizes</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span className="text-[#404040]/80 text-xs font-medium">Controle zootécnico simples</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span className="text-[#404040]/80 text-xs font-medium">App com modo Offline</span>
                </li>
              </ul>
              <button className="w-full bg-white border border-black/10 text-[#43310B] px-4 py-3 rounded-full font-bold text-xs hover:bg-black/5 transition-colors active:scale-95 mt-auto">
                Assinar Básico
              </button>
            </div>

            {/* Plano 2: Essencial */}
            <div className="bg-[#FDFBF7] border border-black/5 rounded-[2rem] p-6 lg:p-8 flex flex-col hover:border-black/15 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#43310B] mb-1">Essencial</h3>
                <p className="text-[#404040]/60 text-xs font-medium h-8">Para quem quer sair das anotações no papel.</p>
              </div>
              <div className="mb-6 pb-6 border-b border-black/5">
                <div className="flex items-end gap-1">
                  <span className={`text-4xl font-bold text-[#43310B] tracking-tighter transition-opacity duration-300 ${animatingPrice ? 'opacity-0' : 'opacity-100'}`}>R$ {isAnnual ? '119' : '149'}</span>
                  <span className="text-[#404040]/50 text-xs font-medium mb-1">/mês</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span className="text-[#404040]/80 text-xs font-medium">Até 150 matrizes</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span className="text-[#404040]/80 text-xs font-medium">Controle reprodutivo básico</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span className="text-[#404040]/80 text-xs font-medium">Dashboards simplificados</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span className="text-[#404040]/80 text-xs font-medium">Suporte via WhatsApp</span>
                </li>
              </ul>
              <button className="w-full bg-white border border-black/10 text-[#43310B] px-4 py-3 rounded-full font-bold text-xs hover:bg-black/5 transition-colors active:scale-95 mt-auto">
                Assinar Essencial
              </button>
            </div>

            {/* Plano 3: Profissional (Destaque alinhado reto) */}
            <div className="bg-[#FFF8ED] border-2 border-[#FFCF78] rounded-[2rem] p-6 lg:p-8 flex flex-col relative shadow-xl shadow-[#FFCF78]/10 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#FFCF78]/20 transition-all duration-300">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFCF78] text-[#43310B] px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white whitespace-nowrap">
                Mais Escolhido
              </div>
              
              <div className="mb-6 mt-2">
                <h3 className="text-xl font-bold text-[#43310B] mb-1">Profissional</h3>
                <p className="text-[#43310B]/60 text-xs font-medium h-8">Gestão completa para maximizar resultados.</p>
              </div>
              <div className="mb-6 pb-6 border-b border-[#FFCF78]/20">
                <div className="flex items-end gap-1">
                  <span className={`text-4xl font-bold text-[#43310B] tracking-tighter transition-opacity duration-300 ${animatingPrice ? 'opacity-0' : 'opacity-100'}`}>R$ {isAnnual ? '237' : '297'}</span>
                  <span className="text-[#43310B]/50 text-xs font-medium mb-1">/mês</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#FCA90F] mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span className="text-[#43310B]/90 text-xs font-bold">Até 400 matrizes</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#FCA90F] mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span className="text-[#43310B]/90 text-xs font-medium">Alertas inteligentes de cio e manejo</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#FCA90F] mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span className="text-[#43310B]/90 text-xs font-medium">Relatórios e inteligência de dados</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#FCA90F] mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span className="text-[#43310B]/90 text-xs font-medium">Importação grátis de planilhas</span>
                </li>
              </ul>
              <button className="w-full bg-[#43310B] text-white px-4 py-3 rounded-full font-bold text-xs hover:bg-black transition-colors active:scale-95 mt-auto">
                Assinar Profissional
              </button>
            </div>

            {/* Plano 4: Avançado */}
            <div className="bg-[#FDFBF7] border border-black/5 rounded-[2rem] p-6 lg:p-8 flex flex-col hover:border-black/15 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#43310B] mb-1">Avançado</h3>
                <p className="text-[#404040]/60 text-xs font-medium h-8">Fazendas de médio e grande porte.</p>
              </div>
              <div className="mb-6 pb-6 border-b border-black/5">
                <div className="flex items-end gap-1">
                  <span className={`text-4xl font-bold text-[#43310B] tracking-tighter transition-opacity duration-300 ${animatingPrice ? 'opacity-0' : 'opacity-100'}`}>R$ {isAnnual ? '397' : '497'}</span>
                  <span className="text-[#404040]/50 text-xs font-medium mb-1">/mês</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span className="text-[#404040]/80 text-xs font-medium">Até 800 matrizes</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span className="text-[#404040]/80 text-xs font-medium">Multi-usuários (até 3 acessos)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span className="text-[#404040]/80 text-xs font-medium">Análises de curva de lactação personalizadas</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span className="text-[#404040]/80 text-xs font-medium">Suporte prioritário rápido</span>
                </li>
              </ul>
              <button className="w-full bg-white border border-black/10 text-[#43310B] px-4 py-3 rounded-full font-bold text-xs hover:bg-black/5 transition-colors active:scale-95 mt-auto">
                Assinar Avançado
              </button>
            </div>

            {/* Plano 5: Corporativo */}
            <div className="bg-[#FDFBF7] border border-black/5 rounded-[2rem] p-6 lg:p-8 flex flex-col hover:border-black/15 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#43310B] mb-1">Corporativo</h3>
                <p className="text-[#404040]/60 text-xs font-medium h-8">Solução ilimitada para múltiplos rebanhos.</p>
              </div>
              <div className="mb-6 pb-6 border-b border-black/5">
                <div className="flex items-end gap-1">
                  <span className={`text-4xl font-bold text-[#43310B] tracking-tighter transition-opacity duration-300 ${animatingPrice ? 'opacity-0' : 'opacity-100'}`}>R$ {isAnnual ? '717' : '897'}</span>
                  <span className="text-[#404040]/50 text-xs font-medium mb-1">/mês</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span className="text-[#404040]/80 text-xs font-medium font-bold">Animais ilimitados</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span className="text-[#404040]/80 text-xs font-medium">Gestão de múltiplas propriedades</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span className="text-[#404040]/80 text-xs font-medium">Integração de dados via API</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span className="text-[#404040]/80 text-xs font-medium">Gerente de conta exclusivo</span>
                </li>
              </ul>
              <button className="w-full bg-white border border-black/10 text-[#43310B] px-4 py-3 rounded-full font-bold text-xs hover:bg-black/5 transition-colors active:scale-95 mt-auto">
                Falar com Consultor
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: FAQ (PERGUNTAS FREQUENTES) */}
      <section id="faq" className="py-24 md:py-32 bg-[#FDFBF7] border-t border-black/5">
        <div className="container-custom reveal-on-scroll">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-black/5 rounded-full">
               <span className="text-[10px] font-bold uppercase tracking-widest text-[#404040]">Tire suas dúvidas</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#43310B] leading-tight">
              Perguntas <span className="highlight-stroke">Frequentes</span>
            </h2>
            <p className="text-sm md:text-base text-[#404040]/70 font-medium">
              Tudo o que você precisa saber antes de transformar a gestão da sua propriedade.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {/* Pergunta 1 */}
            <div className="bg-white border border-black/5 rounded-[1.5rem] overflow-hidden hover:border-[#FFCF78]/30 transition-colors">
              <button onClick={() => toggleFaq(1)} className="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none group cursor-pointer">
                <span className="font-bold text-[#43310B] text-lg group-hover:text-[#FCA90F] transition-colors">Preciso ter internet no curral para usar a plataforma?</span>
                <div className={`w-8 h-8 rounded-full bg-[#FDFBF7] flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${openFaqIndex === 1 ? 'rotate-45' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#FCA90F]"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </div>
              </button>
              <div className={`faq-content-wrapper ${openFaqIndex === 1 ? 'open' : ''}`}>
                <div className="faq-content-inner">
                  <p className="px-8 pb-6 text-[#404040]/70 text-sm leading-relaxed font-medium pt-2">
                    Não. Sabemos que a conexão no campo pode ser instável. O aplicativo Buffs possui um modo offline que permite registrar os dados mesmo sem internet. Assim que o seu celular ou tablet se conectar a uma rede, as informações são sincronizadas automaticamente com o sistema.
                  </p>
                </div>
              </div>
            </div>

            {/* Pergunta 2 */}
            <div className="bg-white border border-black/5 rounded-[1.5rem] overflow-hidden hover:border-[#FFCF78]/30 transition-colors">
              <button onClick={() => toggleFaq(2)} className="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none group cursor-pointer">
                <span className="font-bold text-[#43310B] text-lg group-hover:text-[#FCA90F] transition-colors">O sistema é muito complicado para quem não tem costume com tecnologia?</span>
                <div className={`w-8 h-8 rounded-full bg-[#FDFBF7] flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${openFaqIndex === 2 ? 'rotate-45' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#FCA90F]"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </div>
              </button>
              <div className={`faq-content-wrapper ${openFaqIndex === 2 ? 'open' : ''}`}>
                <div className="faq-content-inner">
                  <p className="px-8 pb-6 text-[#404040]/70 text-sm leading-relaxed font-medium pt-2">
                    De forma alguma. A interface do Buffs foi desenhada especificamente para ser simples, limpa e direta ao ponto. Focamos no que realmente importa para o produtor, sem menus confusos ou excesso de botões. Se você sabe mandar uma mensagem no celular, saberá usar o Buffs.
                  </p>
                </div>
              </div>
            </div>

            {/* Pergunta 3 */}
            <div className="bg-white border border-black/5 rounded-[1.5rem] overflow-hidden hover:border-[#FFCF78]/30 transition-colors">
              <button onClick={() => toggleFaq(3)} className="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none group cursor-pointer">
                <span className="font-bold text-[#43310B] text-lg group-hover:text-[#FCA90F] transition-colors">Meus dados antigos do Excel podem ser importados?</span>
                <div className={`w-8 h-8 rounded-full bg-[#FDFBF7] flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${openFaqIndex === 3 ? 'rotate-45' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#FCA90F]"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </div>
              </button>
              <div className={`faq-content-wrapper ${openFaqIndex === 3 ? 'open' : ''}`}>
                <div className="faq-content-inner">
                  <p className="px-8 pb-6 text-[#404040]/70 text-sm leading-relaxed font-medium pt-2">
                    Sim! Nossa equipe de suporte auxilia na migração inicial dos seus dados. Você não perderá seu histórico de produção ou anotações zootécnicas passadas. Cuidamos dessa transição para que você comece já com o pé direito.
                  </p>
                </div>
              </div>
            </div>

            {/* Pergunta 4 */}
            <div className="bg-white border border-black/5 rounded-[1.5rem] overflow-hidden hover:border-[#FFCF78]/30 transition-colors">
              <button onClick={() => toggleFaq(4)} className="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none group cursor-pointer">
                <span className="font-bold text-[#43310B] text-lg group-hover:text-[#FCA90F] transition-colors">A plataforma serve apenas para grandes propriedades?</span>
                <div className={`w-8 h-8 rounded-full bg-[#FDFBF7] flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${openFaqIndex === 4 ? 'rotate-45' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#FCA90F]"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </div>
              </button>
              <div className={`faq-content-wrapper ${openFaqIndex === 4 ? 'open' : ''}`}>
                <div className="faq-content-inner">
                  <p className="px-8 pb-6 text-[#404040]/70 text-sm leading-relaxed font-medium pt-2">
                    Não. O Buffs atende desde pequenos produtores até grandes operações. A organização de dados e a prevenção de perdas reprodutivas são vitais para a lucratividade, independentemente de você ter 20 ou 2.000 búfalas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: CTA FINAL */}
      <section className="py-12 md:py-20 relative px-4 border-t border-black/5">
        <div className="container-custom reveal-on-scroll">
          <div className="bg-[#FFF8ED] rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden border border-[#FFCF78]/20 max-w-6xl mx-auto hover:shadow-xl transition-shadow duration-500">
            {/* Elementos Decorativos */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFCF78]/20 rounded-full blur-3xl pointer-events-none animate-float"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFCF78]/20 rounded-full blur-3xl pointer-events-none animate-float-delayed"></div>

            <div className="relative z-10 space-y-10">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-[#43310B] leading-[1.1]">
                Quem controla os <span className="highlight-stroke">dados</span>,<br /> controla o resultado.
              </h2>
              <p className="text-2xl md:text-3xl text-[#43310B]/80 font-bold font-cursive max-w-2xl mx-auto">
                Quem controla o resultado, aumenta o lucro.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                <button className="w-full sm:w-auto bg-[#43310B] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-black transition-colors active:scale-95">
                  Quero melhorar minha produção
                </button>
                <button className="w-full sm:w-auto bg-white text-[#43310B] border border-black/10 px-8 py-4 rounded-full font-bold text-sm hover:bg-black/5 transition-colors active:scale-95">
                  Ver como evitar prejuízos no manejo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-24 border-t border-black/5 bg-white">
        <div className="container-custom reveal-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            <div className="space-y-6">
              <p className="text-2xl font-bold text-[#43310B] tracking-tighter">Buffs</p>
              <p className="text-[#404040]/50 text-sm leading-relaxed font-medium">
                  Transformando o manejo de bubalinos com tecnologia avançada e soluções integradas de alta precisão.
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="font-bold text-[#43310B] text-[10px] uppercase tracking-widest">Contato</p>
              <ul className="space-y-4 text-[#404040]/70 text-sm font-medium">
                <li className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FCA90F]"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  +55 (13) 99725-4676
                </li>
                <li className="flex items-start gap-3 leading-snug">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FCA90F] mt-1 flex-shrink-0"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  Av. Clara Gianotti de Souza, 257<br />Registro - SP, 11900-000
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <p className="font-bold text-[#43310B] text-[10px] uppercase tracking-widest">Links Rápidos</p>
              <ul className="space-y-2 text-[#404040]/60 text-sm font-medium">
                <li><a href="#" className="hover:text-[#FCA90F] hover:translate-x-1 inline-block transition-transform">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-[#FCA90F] hover:translate-x-1 inline-block transition-transform">Projeto Buffs</a></li>
                <li><a href="#" className="hover:text-[#FCA90F] hover:translate-x-1 inline-block transition-transform">Nossa Equipe</a></li>
                <li><a href="#" className="hover:text-[#FCA90F] hover:translate-x-1 inline-block transition-transform">Contato</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <p className="font-bold text-[#43310B] text-[10px] uppercase tracking-widest">Acesso</p>
              <ul className="space-y-2 text-[#404040]/60 text-sm font-medium">
                <li><a href="#" className="hover:text-[#FCA90F] hover:translate-x-1 inline-block transition-transform">Login Produtor</a></li>
                <li><a href="#" className="hover:text-[#FCA90F] hover:translate-x-1 inline-block transition-transform">Agendar Demonstração</a></li>
                <li><a href="#" className="hover:text-[#FCA90F] hover:translate-x-1 inline-block transition-transform">Privacidade</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-black/5">
            <p className="text-[10px] font-bold text-[#404040]/30 uppercase tracking-widest text-center">&copy; 2026 Buffs - Gestão Bubalina Inteligente. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Botão WhatsApp Flutuante */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 group flex flex-col items-end">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mb-3 bg-white text-[#43310B] text-xs font-bold px-4 py-2 rounded-xl shadow-lg border border-black/10 transform origin-bottom-right translate-y-2 group-hover:translate-y-0">
          Tire suas dúvidas
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-[#25D366] rounded-full opacity-40 animate-ping"></div>
          <a 
            href="https://wa.me/5513997254676?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20plataforma%20Buffs." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="relative bg-[#25D366] text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.405-.883-.733-1.48-1.638-1.653-1.935-.173-.298-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
          </a>
        </div>
      </div>

    </div>
  );
}