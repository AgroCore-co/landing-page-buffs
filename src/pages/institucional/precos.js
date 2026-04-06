import React, { useState } from 'react';
import Link from 'next/link';

const planos = [
  {
    nome: 'Basico',
    descricao: 'Ideal para iniciar a digitalizacao do manejo com fluxo simples.',
    mensal: '000',
    anual: '000',
    cta: 'Assinar Basico',
    destaque: false,
    beneficios: ['Ate 50 matrizes', 'Coleta em campo no app mobile', 'Registro zootecnico e sanitario unificado', 'Sincronizacao com a API central'],
  },
  {
    nome: 'Essencial',
    descricao: 'Para consolidar rotina tecnica com dados rastreaveis.',
    mensal: '000',
    anual: '000',
    cta: 'Assinar Essencial',
    destaque: false,
    beneficios: ['Ate 150 matrizes', 'Controle reprodutivo e produtivo integrado', 'Painel web com indicadores consolidados', 'Historico tecnico por animal', 'Suporte via WhatsApp'],
  },
  {
    nome: 'Profissional',
    descricao: 'Gestao integrada com IA aplicada ao manejo.',
    mensal: '000',
    anual: '000',
    cta: 'Assinar Profissional',
    destaque: true,
    beneficios: ['Ate 400 matrizes', 'Arvore genealogica e prontuario individual', 'Alertas sanitarios e previsao com Random Forest', 'Relatorios gerenciais para decisao baseada em dados', 'Importacao de planilhas'],
  },
  {
    nome: 'Avancado',
    descricao: 'Para operacoes de medio e grande porte com governanca de dados.',
    mensal: '000',
    anual: '000',
    cta: 'Assinar Avancado',
    destaque: false,
    beneficios: ['Ate 800 matrizes', 'Multi-usuarios (ate 3 acessos)', 'Comparativos de desempenho por lote e periodo', 'Analise preditiva para priorizacao tecnica', 'Suporte prioritario rapido'],
  },
  {
    nome: 'Corporativo',
    descricao: 'Arquitetura completa para multiplas unidades e rebanhos.',
    mensal: '000',
    anual: '000',
    cta: 'Falar com Consultor',
    destaque: false,
    beneficios: ['Animais ilimitados', 'Gestao de multiplas propriedades', 'Integracao via API e governanca de dados', 'Gerente de conta exclusivo', 'Infraestrutura preparada para escala continua'],
  },
];

const entregasBase = [
  'Fluxo integrado entre app mobile, painel web e API central.',
  'Historico completo de lactacao, sanidade, reproducao e manejo por animal.',
  'Inteligencia aplicada com alertas e previsao produtiva (R2 preliminar de 0,73).',
];

export default function PrecosPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [animatingPrice, setAnimatingPrice] = useState(false);

  const togglePricing = () => {
    setAnimatingPrice(true);
    window.setTimeout(() => {
      setIsAnnual((previous) => !previous);
      setAnimatingPrice(false);
    }, 220);
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#43310B] selection:bg-[#FFCF78] selection:text-[#43310B]">
      <section className="relative overflow-hidden pt-10 pb-8 md:pt-16 md:pb-12">
        <div className="absolute -top-10 right-1/4 w-96 h-96 bg-[#FFCF78]/15 rounded-full blur-[110px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#E9D9B4]/20 rounded-full blur-[90px] pointer-events-none"></div>

        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-black/5 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#FCA90F]"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#404040]">Institucional</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08]">
            Planos e <span className="relative inline-block"><span className="relative z-10">Precos</span><span className="absolute bottom-1 left-0 w-full h-3 bg-[#FFCF78] opacity-60 -z-10"></span></span>
          </h1>

          <p className="text-base md:text-lg text-[#404040]/75 font-medium max-w-3xl mx-auto">
            Escolha o plano ideal para sua realidade e evolua o manejo com fluxo operacional estruturado, dados confiaveis e suporte especializado.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex justify-center items-center gap-3 sm:gap-4 mb-12">
            <span className={`text-sm font-bold transition-colors duration-300 ${!isAnnual ? 'text-[#43310B]' : 'text-[#404040]/40'}`}>Mensal</span>
            <button
              onClick={togglePricing}
              className={`relative w-16 h-8 rounded-full focus:outline-none transition-colors duration-300 shadow-inner ${isAnnual ? 'bg-[#FFCF78]' : 'bg-black/10'}`}
              aria-label="Alternar entre plano mensal e anual"
            >
              <span className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isAnnual ? 'translate-x-8' : ''}`}></span>
            </button>
            <span className={`text-sm font-bold transition-colors duration-300 flex items-center gap-2 ${isAnnual ? 'text-[#43310B]' : 'text-[#404040]/40'}`}>
              Anual <span className="px-2.5 py-1 bg-green-100 text-green-700 rounded-full text-[10px] uppercase tracking-widest font-black shadow-sm">20% Off</span>
            </span>
          </div>

          <div className="mb-10 rounded-[1.6rem] border border-[#FFCF78]/35 bg-[#FFF8ED] p-5 md:p-6">
            <p className="text-[10px] font-black uppercase tracking-widest text-[#FCA90F] mb-3">Entregas comuns em todos os planos</p>
            <div className="grid md:grid-cols-3 gap-3">
              {entregasBase.map((item) => (
                <div key={item} className="rounded-xl border border-black/10 bg-white px-4 py-3">
                  <p className="text-sm text-[#404040]/80 font-medium leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch">
            {planos.map((plano) => (
              <article
                key={plano.nome}
                className={`rounded-[2rem] p-6 lg:p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 ${
                  plano.destaque
                    ? 'bg-[#FFF8ED] border-2 border-[#FFCF78] shadow-xl shadow-[#FFCF78]/10 hover:shadow-2xl hover:shadow-[#FFCF78]/20'
                    : 'bg-white border border-black/5 hover:border-black/15 hover:shadow-xl'
                }`}
              >
                {plano.destaque && (
                  <div className="self-center mb-3 bg-[#FFCF78] text-[#43310B] px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white">
                    Mais Escolhido
                  </div>
                )}

                <div className="mb-6">
                  <h2 className="text-xl font-bold text-[#43310B] mb-1">{plano.nome}</h2>
                  <p className="text-[#404040]/60 text-xs font-medium min-h-8">{plano.descricao}</p>
                </div>

                <div className="mb-6 pb-6 border-b border-black/5">
                  <div className="flex items-end gap-1">
                    <span className={`text-4xl font-bold text-[#43310B] tracking-tighter transition-opacity duration-200 ${animatingPrice ? 'opacity-0' : 'opacity-100'}`}>
                      R$ {isAnnual ? plano.anual : plano.mensal}
                    </span>
                    <span className="text-[#404040]/50 text-xs font-medium mb-1">/mes</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plano.beneficios.map((beneficio) => (
                    <li key={beneficio} className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`mt-0.5 flex-shrink-0 ${plano.destaque ? 'text-[#FCA90F]' : 'text-green-500'}`}><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span className="text-[#404040]/80 text-xs font-medium">{beneficio}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plano.nome === 'Corporativo' ? '/contato/fale-conosco' : '/contato/ligamos-para-voce'}
                  className={`w-full text-center px-4 py-3 rounded-full font-bold text-xs transition-colors mt-auto ${
                    plano.destaque
                      ? 'bg-[#43310B] text-white hover:bg-black'
                      : 'bg-[#FDFBF7] border border-black/10 text-[#43310B] hover:bg-black/5'
                  }`}
                >
                  {plano.cta}
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[1.6rem] border border-black/10 bg-white px-6 py-6 md:px-8 md:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm md:text-base text-[#404040]/80 font-medium">
              Tem duvidas sobre qual plano escolher? Nossa equipe pode te orientar com base no tamanho da sua operacao.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contato/fale-conosco" className="inline-flex justify-center bg-white border border-black/10 text-[#43310B] px-5 py-3 rounded-full text-sm font-bold hover:bg-[#FDFBF7] transition-colors">
                Fale Conosco
              </Link>
              <Link href="/contato/ligamos-para-voce" className="inline-flex justify-center bg-[#43310B] text-white px-5 py-3 rounded-full text-sm font-bold hover:bg-black transition-colors">
                Ligamos para Voce
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
