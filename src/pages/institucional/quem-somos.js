import Link from 'next/link';
import Image from 'next/image';

const marcos = [
  {
    ano: '2022',
    titulo: 'Imersao no campo',
    descricao:
      'Realizamos entrevistas tecnicas no Vale do Ribeira com produtores e veterinario para mapear lacunas reais de manejo bubalino.',
  },
  {
    ano: '2023',
    titulo: 'Primeiro prototipo',
    descricao:
      'Estruturamos a base da aplicacao com foco em registros zootecnicos, sanitarios, reprodutivos e produtivos em rotina de campo.',
  },
  {
    ano: '2024',
    titulo: 'Evolucao para plataforma',
    descricao:
      'Integramos painel web, aplicativo mobile, API central e camadas de inteligencia para apoiar decisoes tecnicas e gerenciais.',
  },
  {
    ano: 'Hoje',
    titulo: 'Escala com suporte humano',
    descricao:
      'Seguimos evoluindo com feedback continuo e suporte especializado para adaptar a plataforma a diferentes perfis de propriedade.',
  },
];

const fundamentosTecnicos = [
  {
    titulo: 'Fluxo integrado de operacao',
    descricao: 'Conectamos coleta mobile, processamento na API e analise no painel web em um unico fluxo de decisao.',
  },
  {
    titulo: 'Arquitetura orientada a consistencia',
    descricao: 'Base de dados estruturada para manter historico consolidado de lactacao, sanidade, reproducao e desempenho individual.',
  },
  {
    titulo: 'IA aplicada ao manejo',
    descricao: 'Alertas sanitarios e previsao de producao para antecipar risco e priorizar acao tecnica com mais seguranca.',
  },
];

export default function QuemSomosPage() {
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
            Quem <span className="relative inline-block"><span className="relative z-10">somos</span><span className="absolute bottom-1 left-0 w-full h-3 bg-[#FFCF78] opacity-60 -z-10"></span></span>
          </h1>

          <p className="text-base md:text-lg text-[#404040]/75 font-medium max-w-3xl mx-auto">
            A Buffs nasceu da observacao direta do campo. Transformamos pesquisa aplicada em uma plataforma digital voltada ao manejo bubalino com profundidade tecnica e uso pratico.
          </p>
        </div>
      </section>

      <section className="pb-8 md:pb-12">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
          <article className="bg-white border border-black/5 rounded-[2rem] p-7 md:p-9 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-5">Nossa historia</h2>
            <div className="space-y-4 text-[#404040]/80 font-medium leading-relaxed">
              <p>
                O projeto surgiu da necessidade de superar o controle fragmentado em planilhas e anotacoes manuais, que dificultava consolidacao de historico e tomada de decisao no tempo certo.
              </p>
              <p>
                A partir da pesquisa de campo, estruturamos uma solucao multiplataforma com aplicativo mobile, painel web e API central para garantir consistencia dos dados entre operacao e gestao.
              </p>
              <p>
                Hoje, seguimos evoluindo com inteligencia aplicada ao manejo, mantendo foco em resultado pratico para produtor, veterinario e gestor da propriedade.
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



      <section className="pb-12 md:pb-16">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="bg-white border border-black/5 rounded-[2rem] p-7 md:p-9 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Marcos da jornada</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {marcos.map((marco) => (
                <article key={marco.titulo} className="rounded-2xl border border-black/10 bg-[#FDFBF7] p-5">
                  <p className="text-xs font-black uppercase tracking-widest text-[#FCA90F] mb-2">{marco.ano}</p>
                  <h3 className="text-lg font-bold text-[#43310B] mb-2">{marco.titulo}</h3>
                  <p className="text-sm text-[#404040]/80 font-medium leading-relaxed">{marco.descricao}</p>
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
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Vamos construir essa evolucao juntos?</h2>
              <p className="text-sm md:text-base text-[#404040]/80 font-medium">
                Se voce quer profissionalizar a gestao da sua operacao bubalina, nossa equipe pode orientar um plano de implantacao alinhado ao seu contexto tecnico.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Link href="/contato/fale-conosco" className="flex items-center justify-center w-full sm:w-auto bg-[#43310B] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-black transition-colors active:scale-95 whitespace-nowrap">
                Fale Conosco
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
