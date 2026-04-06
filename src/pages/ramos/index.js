import Link from 'next/link';
import { ramos } from '../../data/ramos';

const baseComumRamos = [
  {
    titulo: 'Fluxo integrado de manejo',
    descricao: 'Coleta mobile em campo, processamento em API central e leitura gerencial no painel web.',
  },
  {
    titulo: 'Base tecnica unificada',
    descricao: 'Dados zootecnicos, sanitarios, reprodutivos e produtivos organizados em historico unico por animal.',
  },
  {
    titulo: 'Inteligencia aplicada ao campo',
    descricao: 'Alertas sanitarios e previsao produtiva para reduzir decisao no escuro e priorizar acao.',
  },
];

export default function RamosPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#43310B] selection:bg-[#FFCF78] selection:text-[#43310B]">
      <section className="relative overflow-hidden pt-10 pb-8 md:pt-16 md:pb-12">
        <div className="absolute -top-12 right-1/4 w-96 h-96 bg-[#FFCF78]/15 rounded-full blur-[110px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E9D9B4]/25 rounded-full blur-[90px] pointer-events-none"></div>

        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-black/5 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#FCA90F]"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#404040]">Ramos</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08]">
            Buffs para cada <span className="relative inline-block"><span className="relative z-10">tipo de operacao</span><span className="absolute bottom-1 left-0 w-full h-3 bg-[#FFCF78] opacity-60 -z-10"></span></span>
          </h1>

          <p className="text-base md:text-lg text-[#404040]/75 font-medium max-w-4xl mx-auto">
            Atuamos com foco em tres frentes: manejo, laticinio e melhoramento genetico, mantendo o mesmo fluxo operacional e a mesma base de dados em todos os contextos.
          </p>
        </div>
      </section>

      <section className="pb-12 md:pb-16">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 mb-8 md:mb-10">
          <div className="rounded-[2rem] border border-black/10 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Base comum dos tres ramos</h2>
            <p className="text-sm md:text-base text-[#404040]/80 font-medium leading-relaxed max-w-4xl">
              Mesmo com rotinas diferentes, os tres contextos dependem de informacao confiavel, prontuario individual e suporte analitico para sustentar performance ao longo dos ciclos.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mt-6">
              {baseComumRamos.map((item) => (
                <article key={item.titulo} className="rounded-2xl border border-black/10 bg-[#FDFBF7] p-5">
                  <h3 className="text-base font-bold tracking-tight text-[#43310B] mb-2">{item.titulo}</h3>
                  <p className="text-sm text-[#404040]/80 font-medium leading-relaxed">{item.descricao}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {ramos.map((ramo) => (
            <article key={ramo.slug} className="bg-white border border-black/5 rounded-[1.8rem] p-6 md:p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#FCA90F] mb-3">{ramo.category}</p>
              <h2 className="text-2xl font-bold tracking-tight mb-3">{ramo.title}</h2>
              <p className="text-sm text-[#404040]/80 font-medium leading-relaxed mb-5 min-h-20">{ramo.shortDescription}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {ramo.kpis.slice(0, 2).map((kpi) => (
                  <span key={kpi} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FFF8ED] border border-[#FFCF78]/35 text-[#43310B]">
                    {kpi}
                  </span>
                ))}
              </div>

              <Link
                href={`/ramos/${ramo.slug}`}
                className="inline-flex items-center justify-center w-full bg-[#43310B] text-white px-5 py-3 rounded-full font-bold text-xs hover:bg-black transition-colors"
              >
                Ver detalhes do ramo
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="rounded-[2rem] border border-[#FFCF78]/30 bg-[#FFF8ED] p-7 md:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Nao encontrou seu contexto exato?</h2>
              <p className="text-sm md:text-base text-[#404040]/80 font-medium">
                Nosso time monta um plano de implantacao personalizado com fluxo operacional, indicadores e prioridades praticas de curto prazo.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Link href="/contato/fale-conosco" className="flex items-center justify-center w-full sm:w-auto bg-[#43310B] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-black transition-colors active:scale-95 whitespace-nowrap">
                Fale Conosco
              </Link>
              <Link href="/solucoes" className="flex items-center justify-center w-full sm:w-auto bg-white text-[#43310B] border border-black/10 px-8 py-4 rounded-full font-bold text-sm hover:bg-black/5 transition-colors active:scale-95 whitespace-nowrap">
                Ver solucoes
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
