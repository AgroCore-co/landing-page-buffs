import Link from 'next/link';
import { getRamoBySlug, getRamoPaths, ramos } from '../../data/ramos';
import { getSolutionBySlug } from '../../data/solutions';

const recursosTransversais = [
  'Prontuario no celular para identificar animal e registrar eventos de campo com rapidez.',
  'Fluxo integrado entre app mobile, API central e painel web para garantir consistencia de dados.',
  'Predicao de producao com Random Forest e alertas sanitarios para antecipar riscos operacionais.',
];

export default function RamoDetalhePage({ ramo, relatedRamos, recommendedSolutions }) {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#43310B] selection:bg-[#FFCF78] selection:text-[#43310B]">
      <section className="relative overflow-hidden pt-10 pb-8 md:pt-16 md:pb-12">
        <div className="absolute -top-12 right-1/4 w-96 h-96 bg-[#FFCF78]/15 rounded-full blur-[110px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E9D9B4]/25 rounded-full blur-[90px] pointer-events-none"></div>

        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 space-y-5">
          <Link href="/ramos" className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-black/5 rounded-full shadow-sm text-[10px] font-bold uppercase tracking-widest text-[#404040] hover:border-black/10 transition-colors">
            Voltar para Ramos
          </Link>

          <p className="text-[11px] font-bold uppercase tracking-widest text-[#FCA90F]">{ramo.category}</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08]">
            {ramo.title}
          </h1>
          <p className="text-base md:text-lg text-[#404040]/75 font-medium max-w-4xl">{ramo.intro}</p>

          <div className="flex flex-wrap gap-2 pt-1">
            {ramo.kpis.map((kpi) => (
              <span key={kpi} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FFF8ED] border border-[#FFCF78]/35 text-[#43310B]">
                {kpi}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-8 md:pb-12">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-start">
          <article className="bg-white border border-black/5 rounded-[2rem] p-7 md:p-9 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-5">Principais desafios do ramo</h2>
            <ul className="space-y-3">
              {ramo.challenges.map((challenge) => (
                <li key={challenge} className="flex items-start gap-3 rounded-xl border border-black/10 bg-[#FDFBF7] px-4 py-3">
                  <span className="mt-1 inline-flex w-4 h-4 rounded-full bg-[#FFCF78]/70"></span>
                  <span className="text-sm text-[#404040]/85 font-medium leading-relaxed">{challenge}</span>
                </li>
              ))}
            </ul>
          </article>

          <aside className="bg-white border border-black/5 rounded-[2rem] p-7 md:p-8 shadow-sm">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-5">Como a Buffs atua</h3>
            <div className="space-y-3">
              {ramo.approach.map((item) => (
                <div key={item} className="rounded-xl border border-black/10 bg-[#FDFBF7] p-4">
                  <p className="text-sm text-[#404040]/80 font-medium leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-[#FFCF78]/35 bg-[#FFF8ED] p-4">
              <p className="text-xs font-black uppercase tracking-widest text-[#FCA90F] mb-2">Diagnostico recomendado</p>
              <p className="text-sm text-[#404040]/80 font-medium leading-relaxed">
                Inicie com um recorte da operacao, rode 30 dias de coleta estruturada e compare indicadores no painel para validar ganho com seguranca.
              </p>
            </div>

            <div className="mt-6 rounded-xl border border-black/10 bg-white p-4">
              <p className="text-xs font-black uppercase tracking-widest text-[#FCA90F] mb-3">Recursos que atravessam o ramo</p>
              <ul className="space-y-2">
                {recursosTransversais.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 inline-flex w-2 h-2 rounded-full bg-[#FFCF78]/80"></span>
                    <span className="text-sm text-[#404040]/80 font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="pb-8 md:pb-12">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="bg-white border border-black/5 rounded-[2rem] p-7 md:p-9 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Solucoes recomendadas para este ramo</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommendedSolutions.map((solution) => (
                <article key={solution.slug} className="rounded-2xl border border-black/10 bg-[#FDFBF7] p-5">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#FCA90F] mb-2">{solution.category}</p>
                  <h3 className="text-base font-bold text-[#43310B] mb-2">{solution.title}</h3>
                  <p className="text-sm text-[#404040]/80 font-medium leading-relaxed mb-4">{solution.shortDescription}</p>
                  <Link href={`/solucoes/${solution.slug}`} className="inline-flex text-xs font-bold text-[#43310B] hover:text-black transition-colors">
                    Ver solucao
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
          <div className="rounded-[2rem] border border-[#FFCF78]/30 bg-[#FFF8ED] p-7 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Quer um plano para {ramo.title.toLowerCase()}?</h2>
            <p className="text-sm md:text-base text-[#404040]/80 font-medium mb-6">
              Nossa equipe monta um roteiro de implantacao com prioridades de curto prazo, arquitetura de dados e acompanhamento pratico da operacao.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Link href="/contato/fale-conosco" className="flex items-center justify-center w-full sm:w-auto bg-[#43310B] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-black transition-colors active:scale-95 whitespace-nowrap">
                Fale Conosco
              </Link>
              <Link href="/contato/ligamos-para-voce" className="flex items-center justify-center w-full sm:w-auto bg-white text-[#43310B] border border-black/10 px-8 py-4 rounded-full font-bold text-sm hover:bg-black/5 transition-colors active:scale-95 whitespace-nowrap">
                Ligamos para Voce
              </Link>
            </div>
          </div>

          <div className="bg-white border border-black/5 rounded-[2rem] p-7 md:p-9 shadow-sm">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-5">Outros ramos atendidos</h3>
            <div className="space-y-3">
              {relatedRamos.map((item) => (
                <article key={item.slug} className="rounded-xl border border-black/10 bg-[#FDFBF7] p-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#FCA90F] mb-2">{item.category}</p>
                  <h4 className="text-base font-bold text-[#43310B] mb-2">{item.title}</h4>
                  <p className="text-sm text-[#404040]/80 font-medium leading-relaxed mb-3">{item.shortDescription}</p>
                  <Link href={`/ramos/${item.slug}`} className="inline-flex text-xs font-bold text-[#43310B] hover:text-black transition-colors">
                    Ver ramo
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export function getStaticPaths() {
  return {
    paths: getRamoPaths(),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const slug = params?.slug;
  const ramo = getRamoBySlug(slug);

  if (!ramo) {
    return {
      notFound: true,
    };
  }

  const relatedRamos = ramos.filter((item) => item.slug !== slug).slice(0, 3);
  const recommendedSolutions = ramo.recommendedSolutionSlugs
    .map((solutionSlug) => getSolutionBySlug(solutionSlug))
    .filter(Boolean);

  return {
    props: {
      ramo,
      relatedRamos,
      recommendedSolutions,
    },
  };
}
