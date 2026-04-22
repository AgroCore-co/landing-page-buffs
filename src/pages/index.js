import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Componentes da página inicial
import HeroSection from '../components/sections/HeroSection';
import ProblemSection from '../components/sections/ProblemSection';
import FeaturesBenefitsSection from '../components/sections/FeaturesBenefitsSection';

// Dados da seção Quem Somos
const marcos = [
  {
    ano: '2023 (2º semestre)',
    titulo: 'Início do Buffs',
    descricao:
      'Nascimento da ideia do Buffs com foco em resolver problemas reais do manejo bubalino, iniciando pesquisas, validações e primeiros conceitos do sistema.',
  },
  {
    ano: '2024',
    titulo: 'Primeiro protótipo funcional',
    descricao:
      'Desenvolvimento das primeiras versões da aplicação, estruturando funcionalidades essenciais como registros zootécnicos, sanitários e produtivos.',
  },
  {
    ano: '2025 (1º semestre)',
    titulo: 'Evolução e validação',
    descricao:
      'Refinamento do sistema com melhorias de usabilidade, testes em cenários reais e consolidação da proposta como uma plataforma digital para o campo.',
  },
  {
    ano: '2025 (2º semestre)',
    titulo: 'Participação na FETEPS',
    descricao:
      'O Buffs alcança reconhecimento ao ser selecionado para a FETEPS, marcando um avanço importante na visibilidade e validação do projeto.',
  },
];

// Dados da seção Dúvidas Frequentes
const faqData = [
  {
    question: 'Preciso ter internet no curral para usar a plataforma?',
    answer:
      'Não. O app Buffs permite registrar dados em campo mesmo sem internet. Quando a conexão retorna, as informações são sincronizadas automaticamente com a API e com o painel web.',
  },
  {
    question: 'O sistema é complicado para quem não tem costume com tecnologia?',
    answer:
      'Não. O fluxo foi desenhado para rotina real de fazenda: coleta simples no mobile para operação e leitura consolidada no web para gestão, sem etapas desnecessárias.',
  },
 
  
  {
    question: 'Quais dados do rebanho consigo acompanhar?',
    answer:
      'Você acompanha dados zootécnicos, sanitários, reprodutivos e produtivos, incluindo lactação por animal, prontuário individual e histórico consolidado para análise técnica.',
  },
  {
    question: 'Consigo visualizar a árvore genealógica dos animais?',
    answer:
      'Sim. A plataforma permite consultar a linhagem para apoiar seleção de matrizes, controle genético e comparação de desempenho entre grupos de animais.',
  },
  {
    question: 'Como funciona a predição de produção com IA?',
    answer:
      'A predição utiliza Random Forest Regressor com variáveis como dias em lactação, histórico produtivo, idade, idade no primeiro parto e intervalo entre partos. No projeto, o resultado preliminar foi R2 de 0,73.',
  },
  {
    question: 'Posso registrar no celular e analisar depois no escritório?',
    answer:
      'Sim. O fluxo foi projetado para isso: coleta no app mobile, processamento na API e acompanhamento no painel web com dados sincronizados em tempo real.',
  },
  {
    question: 'Minhas informações ficam seguras?',
    answer:
      'Sim. Os dados ficam em infraestrutura em nuvem com acesso controlado, reduzindo perda de informação e garantindo continuidade do histórico da propriedade.',
  },
  
];

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex((previous) => (previous === index ? null : index));
  };

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
    // Animação de entrada suave ao rolar
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

      {/* --- 1. HERO SECTION --- */}
      <HeroSection />

      {/* --- 2. SEÇÃO MIGRADA: QUEM SOMOS --- */}
      <div className="relative">
        <section className="relative overflow-hidden pt-10 pb-8 md:pt-16 md:pb-12 reveal-on-scroll">
          <div className="absolute -top-12 right-1/4 w-96 h-96 bg-[#FFCF78]/15 rounded-full blur-[110px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E9D9B4]/25 rounded-full blur-[90px] pointer-events-none"></div>

          <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 text-center space-y-5">
            

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08]">
              Quem <span className="relative inline-block"><span className="relative z-10">somos</span><span className="absolute bottom-1 left-0 w-full h-3 bg-[#FFCF78] opacity-60 -z-10"></span></span>
            </h2>

            <p className="text-base md:text-lg text-[#404040]/75 font-medium max-w-3xl mx-auto">
              A Buffs nasceu da observação direta do campo. Transformamos pesquisa aplicada em uma plataforma digital voltada ao manejo bubalino com profundidade técnica e uso prático.
            </p>
          </div>
        </section>

        <section className="pb-8 md:pb-12 reveal-on-scroll">
          <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
            <article className="bg-white border border-black/5 rounded-[2rem] p-7 md:p-9 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-5">Nossa história</h3>
              <div className="space-y-4 text-[#404040]/80 font-medium leading-relaxed">
                <p>
                  O projeto surgiu da necessidade de superar o controle fragmentado em planilhas e anotações manuais, que dificultava consolidação de histórico e tomada de decisão no tempo certo.
                </p>
                <p>
                  A partir da pesquisa de campo, estruturamos uma solução multiplataforma com aplicativo mobile, painel web e API central para garantir consistência dos dados entre operação e gestão.
                </p>
                <p>
                  Hoje, seguimos evoluindo com inteligência aplicada ao manejo, mantendo foco em resultado prático para produtor, veterinário e gestor da propriedade.
                </p>
              </div>
            </article>

            <aside className="bg-white border border-black/5 rounded-[2rem] p-7 md:p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-5">Nosso time</h3>
              <div className="rounded-2xl overflow-hidden border border-black/10 bg-[#FDFBF7]">
                <Image
                  src="/images/buffs-equipe.png"
                  alt="Equipe Buffs reunida"
                  width={1600}
                  height={1067}
                  className="w-full h-[280px] md:h-[360px] object-cover"
                  priority
                />
              </div>
            </aside>
          </div>
        </section>

        <section className="pb-12 md:pb-16 reveal-on-scroll">
          <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="bg-white border border-black/5 rounded-[2rem] p-7 md:p-9 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Marcos da jornada</h3>
              <div className="grid md:grid-cols-2 gap-5">
                {marcos.map((marco) => (
                  <article key={marco.titulo} className="rounded-2xl border border-black/10 bg-[#FDFBF7] p-5">
                    <p className="text-xs font-black uppercase tracking-widest text-[#FCA90F] mb-2">{marco.ano}</p>
                    <h4 className="text-lg font-bold text-[#43310B] mb-2">{marco.titulo}</h4>
                    <p className="text-sm text-[#404040]/80 font-medium leading-relaxed">{marco.descricao}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* --- FIM DA SEÇÃO MIGRADA: QUEM SOMOS --- */}

      {/* --- 3. DEMAIS SEÇÕES ORIGINAIS --- */}
      <ProblemSection />
      <FeaturesBenefitsSection />

      {/* --- 4. SEÇÃO MIGRADA: FAQ --- */}
      <div className="relative">
        <section className="relative overflow-hidden pt-10 pb-8 md:pt-16 md:pb-12 reveal-on-scroll">
          <div className="absolute -top-12 right-1/4 w-96 h-96 bg-[#FFCF78]/15 rounded-full blur-[110px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E9D9B4]/25 rounded-full blur-[90px] pointer-events-none"></div>

          <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 text-center space-y-5">
            

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08]">
              Dúvidas <span className="relative inline-block"><span className="relative z-10">Frequentes</span><span className="absolute bottom-1 left-0 w-full h-3 bg-[#FFCF78] opacity-60 -z-10"></span></span>
            </h2>

            <p className="text-base md:text-lg text-[#404040]/75 font-medium max-w-3xl mx-auto">
              Reunimos as principais perguntas para explicar, de forma direta, o fluxo operacional, a arquitetura e a inteligência aplicada da plataforma.
            </p>
          </div>
        </section>

        <section className="pb-12 md:pb-16 reveal-on-scroll">
          <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="bg-white border border-black/5 rounded-[2rem] p-7 md:p-9 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Perguntas e respostas</h3>
              <p className="text-sm md:text-base text-[#404040]/80 font-medium mb-6">
                Clique nos itens para ver detalhes técnicos e operacionais de cada tema.
              </p>

              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <article
                    key={faq.question}
                    className="rounded-[1.5rem] border border-black/10 bg-[#FDFBF7] overflow-hidden hover:border-[#FFCF78]/50 transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left px-6 py-5 md:px-8 md:py-6 flex justify-between items-center gap-5 cursor-pointer"
                      aria-expanded={openFaqIndex === index}
                    >
                      <span
                        className={`font-bold text-base md:text-lg transition-colors ${
                          openFaqIndex === index ? 'text-[#FCA90F]' : 'text-[#43310B]'
                        }`}
                      >
                        {faq.question}
                      </span>
                      <span
                        className={`w-10 h-10 rounded-full bg-white border border-black/10 inline-flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                          openFaqIndex === index ? 'rotate-45 border-[#FFCF78]/40 bg-[#FFF8ED]' : ''
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-[#FCA90F]"
                        >
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </span>
                    </button>

                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                        openFaqIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 md:px-8 pb-6 md:pb-8 pt-3 border-t border-black/10">
                          <p className="text-[#404040]/80 text-sm md:text-base leading-relaxed font-medium">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
      {/* --- FIM DA SEÇÃO MIGRADA: FAQ --- */}

   
    </div>
  );
}