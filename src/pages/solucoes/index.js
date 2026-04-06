import Link from 'next/link';
import { solutions } from '../../data/solutions';

const diferenciaisPlataforma = [
  {
    titulo: 'Arvore genealogica aplicada',
    descricao: 'Linhas de parentesco para apoiar selecao de matrizes e controle genetico com mais seguranca.',
  },
  {
    titulo: 'Prontuario no celular',
    descricao: 'Identificacao rapida em campo com historico completo por animal, mesmo em rotina intensa.',
  },
  {
    titulo: 'IA para tomada de decisao',
    descricao: 'Predicao de producao e alertas inteligentes para agir antes que o desvio vire prejuizo.',
  },
];

export default function SolucoesPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#43310B] selection:bg-[#FFCF78] selection:text-[#43310B]">
      <section className="relative overflow-hidden pt-10 pb-8 md:pt-16 md:pb-12">
        <div className="absolute -top-12 right-1/4 w-96 h-96 bg-[#FFCF78]/15 rounded-full blur-[110px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E9D9B4]/25 rounded-full blur-[90px] pointer-events-none"></div>

        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-black/5 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#FCA90F]"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#404040]">Solucoes</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08]">
            Solucoes para cada <span className="relative inline-block"><span className="relative z-10">frente da fazenda</span><span className="absolute bottom-1 left-0 w-full h-3 bg-[#FFCF78] opacity-60 -z-10"></span></span>
          </h1>

          <p className="text-base md:text-lg text-[#404040]/75 font-medium max-w-3xl mx-auto">
            Cada modulo da Buffs resolve um problema especifico da operacao. Explore as solucoes e veja como aplicar no seu contexto de campo.
          </p>
        </div>
      </section>

      <section className="pb-12 md:pb-16">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 mb-8 md:mb-10">
          <div className="rounded-[2rem] border border-[#FFCF78]/35 bg-[#FFF8ED] p-6 md:p-8">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
              <div className="max-w-3xl">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Base unica para todas as solucoes</h2>
                <p className="text-sm md:text-base text-[#404040]/80 font-medium leading-relaxed">
                  Toda solucao da Buffs parte da mesma espinha dorsal: registro individual, rastreabilidade tecnica e inteligencia aplicada para decidir no momento certo.
                </p>
              </div>


            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-6">
              {diferenciaisPlataforma.map((item) => (
                <article key={item.titulo} className="rounded-2xl border border-black/10 bg-white p-5">
                  <h3 className="text-base font-bold tracking-tight text-[#43310B] mb-2">{item.titulo}</h3>
                  <p className="text-sm text-[#404040]/80 font-medium leading-relaxed">{item.descricao}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((solution) => (
            <article key={solution.slug} className="bg-white border border-black/5 rounded-[1.6rem] p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#FCA90F] mb-3">{solution.category}</p>
              <h2 className="text-xl font-bold tracking-tight mb-3">{solution.title}</h2>
              <p className="text-sm text-[#404040]/80 font-medium leading-relaxed mb-5 min-h-20">{solution.shortDescription}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {solution.metrics.slice(0, 2).map((metric) => (
                  <span key={metric} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FFF8ED] border border-[#FFCF78]/35 text-[#43310B]">
                    {metric}
                  </span>
                ))}
              </div>

              <Link
                href={`/solucoes/${solution.slug}`}
                className="inline-flex items-center justify-center w-full bg-[#43310B] text-white px-5 py-3 rounded-full font-bold text-xs hover:bg-black transition-colors"
              >
                Ver detalhes da solucao
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="rounded-[2rem] border border-[#FFCF78]/30 bg-[#FFF8ED] p-7 md:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Quer ajuda para priorizar por onde comecar?</h2>
              <p className="text-sm md:text-base text-[#404040]/80 font-medium">
                Nosso time pode montar um plano de implantacao considerando momento da sua operacao e metas de curto prazo.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Link href="/contato/fale-conosco" className="flex items-center justify-center w-full sm:w-auto bg-[#43310B] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-black transition-colors active:scale-95 whitespace-nowrap">
                Falar com especialista
              </Link>
              <Link href="/institucional/precos" className="flex items-center justify-center w-full sm:w-auto bg-white text-[#43310B] border border-black/10 px-8 py-4 rounded-full font-bold text-sm hover:bg-black/5 transition-colors active:scale-95 whitespace-nowrap">
                Ver planos e precos
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
