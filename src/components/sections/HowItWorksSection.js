const fluxoOperacional = [
  {
    etapa: '01',
    titulo: 'Coleta em campo (Mobile)',
    descricao:
      'Funcionario ou veterinario registra dados zootecnicos, sanitarios, reprodutivos e produtivos direto no app mobile.',
  },
  {
    etapa: '02',
    titulo: 'API central processa tudo',
    descricao:
      'As informacoes seguem para a API em Node.js/Nest.js, que valida, organiza e atualiza o banco principal em tempo real.',
  },
  {
    etapa: '03',
    titulo: 'IA de alertas sanitarios',
    descricao:
      'Durante registros de ordenha, a IA analisa sinais compativeis com mastite e classifica prioridade de alerta em alta, media ou baixa.',
  },
  {
    etapa: '04',
    titulo: 'IA de previsao produtiva',
    descricao:
      'O modelo Random Forest Regressor estima producao individual de leite e classifica potencial produtivo para apoiar decisoes.',
  },
  {
    etapa: '05',
    titulo: 'Gestao no painel web',
    descricao:
      'No escritorio, gestor acompanha indicadores, prontuario individual, alertas e previsoes para decidir com base em evidencia.',
  },
];

const arquitetura = [
  {
    camada: 'Web App',
    stack: 'React + Next.js',
    papel: 'Painel gerencial com visao consolidada de produtividade, sanidade e rebanho.',
  },
  {
    camada: 'Mobile App',
    stack: 'React Native',
    papel: 'Registro rapido em campo para rotina operacional de funcionarios e veterinarios.',
  },
  {
    camada: 'API e Regras',
    stack: 'TypeScript + Nest.js',
    papel: 'Orquestra dados, integra IA e garante consistencia entre mobile, web e banco.',
  },
  {
    camada: 'Dados',
    stack: 'PostgreSQL + Supabase',
    papel: 'Historico estruturado de lactacao, sanidade, reproducao e desempenho individual.',
  },
  {
    camada: 'Infra e Deploy',
    stack: 'Vercel + AWS EC2 + GitHub Actions',
    papel: 'Hospedagem escalavel e publicacao automatica para evolucao continua da plataforma.',
  },
];

const fundamentosIA = [
  'Predicao individual com base em dias em lactacao, historico produtivo, idade, idade no primeiro parto e intervalo entre partos.',
  'Classificacao de potencial produtivo em faixas operacionais para priorizacao de manejo.',
  'Resultado preliminar com R2 de 0,73, indicando desempenho consistente para apoio pratico a decisao.',
];

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-20 md:py-24 border-t border-black/5 bg-[#FFF8ED]/45">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-black/10 rounded-full">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#404040]">Como Funciona</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#43310B] leading-tight">
            Fluxo real da plataforma no <span className="highlight-stroke">manejo bubalino</span>
          </h2>
          <p className="text-sm md:text-base text-[#404040]/80 font-medium">
            Modelo baseado na metodologia do artigo: operacao integrada entre app mobile, painel web, API central e inteligencia artificial aplicada ao campo.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 mb-6">
          <article className="bg-white border border-black/10 rounded-[2rem] p-7 md:p-9 shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#43310B] mb-5">Fluxo operacional</h3>
            <ol className="space-y-3">
              {fluxoOperacional.map((item) => (
                <li key={item.etapa} className="rounded-xl border border-black/10 bg-[#FDFBF7] px-4 py-4 flex items-start gap-3">
                  <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-[#FFCF78]/70 text-[#43310B] text-[11px] font-black mt-0.5">
                    {item.etapa}
                  </span>
                  <div>
                    <p className="text-sm md:text-base font-bold text-[#43310B] mb-1">{item.titulo}</p>
                    <p className="text-sm text-[#404040]/80 font-medium leading-relaxed">{item.descricao}</p>
                  </div>
                </li>
              ))}
            </ol>
          </article>

          <aside className="bg-white border border-black/10 rounded-[2rem] p-7 md:p-8 shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#43310B] mb-5">Inteligencia aplicada</h3>
            <ul className="space-y-3">
              {fundamentosIA.map((item) => (
                <li key={item} className="rounded-xl border border-black/10 bg-[#FDFBF7] px-4 py-3 text-sm text-[#404040]/85 font-medium leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-xl border border-[#FFCF78]/35 bg-[#FFF8ED] px-4 py-4">
              <p className="text-xs font-black uppercase tracking-widest text-[#FCA90F] mb-2">Palavras-chave do estudo</p>
              <p className="text-sm text-[#404040]/80 font-medium leading-relaxed">
                API RESTful, sistema de informacao para bubalinocultura, manejo de rebanho e Random Forest Regressor para previsao da producao de leite.
              </p>
            </div>
          </aside>
        </div>

        <div className="bg-white border border-black/10 rounded-[2rem] p-7 md:p-9 shadow-sm">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#43310B] mb-5">Arquitetura da solucao</h3>
          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-4">
            {arquitetura.map((item) => (
              <article key={item.camada} className="rounded-2xl border border-black/10 bg-[#FDFBF7] p-5">
                <p className="text-[10px] font-black uppercase tracking-widest text-[#FCA90F] mb-2">{item.camada}</p>
                <h4 className="text-base font-bold text-[#43310B] mb-2">{item.stack}</h4>
                <p className="text-sm text-[#404040]/80 font-medium leading-relaxed">{item.papel}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}