import React, { useState } from 'react';
import Link from 'next/link';

const faqData = [
  {
    question: 'Preciso ter internet no curral para usar a plataforma?',
    answer:
      'Nao. O app Buffs permite registrar dados em campo mesmo sem internet. Quando a conexao retorna, as informacoes sao sincronizadas automaticamente com a API e com o painel web.',
  },
  {
    question: 'O sistema e complicado para quem nao tem costume com tecnologia?',
    answer:
      'Nao. O fluxo foi desenhado para rotina real de fazenda: coleta simples no mobile para operacao e leitura consolidada no web para gestao, sem etapas desnecessarias.',
  },
  {
    question: 'Posso importar meus dados antigos de Excel?',
    answer:
      'Sim. Nossa equipe apoia a migracao das planilhas para preservar historicos de manejo, producao, reproducao e sanidade em uma base estruturada.',
  },
  {
    question: 'A plataforma serve apenas para propriedades grandes?',
    answer:
      'Nao. A plataforma foi pensada para diferentes portes de operacao, desde propriedades pequenas ate fazendas com estruturas maiores e maior volume de dados.',
  },
  {
    question: 'Existe fidelidade ou taxa de cancelamento?',
    answer:
      'Nao ha taxa oculta. Voce pode escolher plano mensal ou anual e ajustar conforme o momento da operacao.',
  },
  {
    question: 'Quais dados do rebanho consigo acompanhar?',
    answer:
      'Voce acompanha dados zootecnicos, sanitarios, reprodutivos e produtivos, incluindo lactacao por animal, prontuario individual e historico consolidado para analise tecnica.',
  },
  {
    question: 'Consigo visualizar a arvore genealogica dos animais?',
    answer:
      'Sim. A plataforma permite consultar a linhagem para apoiar selecao de matrizes, controle genetico e comparacao de desempenho entre grupos de animais.',
  },
  {
    question: 'Como funciona a predicao de producao com IA?',
    answer:
      'A predicao utiliza Random Forest Regressor com variaveis como dias em lactacao, historico produtivo, idade, idade no primeiro parto e intervalo entre partos. No projeto, o resultado preliminar foi R2 de 0,73.',
  },
  {
    question: 'Posso registrar no celular e analisar depois no escritorio?',
    answer:
      'Sim. O fluxo foi projetado para isso: coleta no app mobile, processamento na API e acompanhamento no painel web com dados sincronizados em tempo real.',
  },
  {
    question: 'Minhas informacoes ficam seguras?',
    answer:
      'Sim. Os dados ficam em infraestrutura em nuvem com acesso controlado, reduzindo perda de informacao e garantindo continuidade do historico da propriedade.',
  },
  {
    question: 'Como funciona o suporte?',
    answer:
      'Oferecemos suporte humanizado com time que entende rotina de campo, incluindo orientacao para uso de indicadores, alertas e fluxo operacional da plataforma.',
  },
];

export default function DuvidasFrequentesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex((previous) => (previous === index ? null : index));
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#43310B] selection:bg-[#FFCF78] selection:text-[#43310B]">
      <section className="relative overflow-hidden pt-10 pb-8 md:pt-16 md:pb-12">
        <div className="absolute -top-12 right-1/4 w-96 h-96 bg-[#FFCF78]/15 rounded-full blur-[110px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E9D9B4]/25 rounded-full blur-[90px] pointer-events-none"></div>

        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-black/5 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#FCA90F]"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#404040]">Institucional</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08]">
            Duvidas <span className="relative inline-block"><span className="relative z-10">Frequentes</span><span className="absolute bottom-1 left-0 w-full h-3 bg-[#FFCF78] opacity-60 -z-10"></span></span>
          </h1>

          <p className="text-base md:text-lg text-[#404040]/75 font-medium max-w-3xl mx-auto">
            Reunimos as principais perguntas para explicar, de forma direta, o fluxo operacional, a arquitetura e a inteligencia aplicada da plataforma.
          </p>
        </div>
      </section>

      <section className="pb-12 md:pb-16">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="bg-white border border-black/5 rounded-[2rem] p-7 md:p-9 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Perguntas e respostas</h2>
            <p className="text-sm md:text-base text-[#404040]/80 font-medium mb-6">
              Clique nos itens para ver detalhes tecnicos e operacionais de cada tema.
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

      <section className="pb-20 md:pb-24">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="rounded-[2rem] border border-[#FFCF78]/30 bg-[#FFF8ED] p-7 md:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Ainda ficou alguma duvida?</h2>
              <p className="text-sm md:text-base text-[#404040]/80 font-medium">
                Nosso time pode te orientar sobre o melhor caminho para sua operacao e plano ideal.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Link
                href="/contato/fale-conosco"
                className="flex items-center justify-center w-full sm:w-auto bg-[#43310B] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-black transition-colors active:scale-95 whitespace-nowrap"
              >
                Fale Conosco
              </Link>
              <Link
                href="/contato/ligamos-para-voce"
                className="flex items-center justify-center w-full sm:w-auto bg-white text-[#43310B] border border-black/10 px-8 py-4 rounded-full font-bold text-sm hover:bg-black/5 transition-colors active:scale-95 whitespace-nowrap"
              >
                Ligamos para Voce
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
