const funcionalidades = [
  'Registro zootecnico individual com metricas corporais e historico do rebanho.',
  'Controle sanitario com vacinas, medicamentos, tratamentos e rastreabilidade.',
  'Gestao do ciclo reprodutivo com cruzamentos, gestacoes e partos.',
  'Monitoramento da producao de leite por animal durante o ciclo produtivo.',
  'Visualizacao da arvore genealogica para apoiar selecao de matrizes e controle genetico.',
  'Predicao de producao de leite com IA e alertas inteligentes para tomada de decisao.',
  'Gestao de producao e comercializacao do leite, incluindo volumes e manejo de piquetes e confinamento.',
];

const beneficios = [
  'Menos retrabalho com planilhas separadas e menos risco de erro manual.',
  'Historico consolidado do rebanho em uma unica plataforma.',
  'Visao integrada de saude, reproducao, desempenho e produtividade.',
  'Acompanhamento individualizado para decisoes tecnicas mais precisas.',
  'Apoio estrategico para selecao, reproducao e comercializacao do leite.',
  'Mais eficiencia operacional no campo e no escritorio.',
];

const destaques = [
  {
    titulo: 'Arvore Genealogica',
    descricao: 'Controle de linhagem para priorizar matrizes mais produtivas e apoiar melhoramento genetico.',
  },
  {
    titulo: 'Prontuario no Celular',
    descricao: 'Identificacao rapida do animal em campo, com acesso imediato ao historico completo.',
  },
  {
    titulo: 'IA Aplicada ao Manejo',
    descricao: 'Predicoes de producao e alertas automatizados para reduzir decisao no escuro.',
  },
];

export default function FeaturesBenefitsSection() {
  return (
    <section id="features-beneficios" className="py-20 md:py-24 border-t border-black/5 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FDFBF7] border border-black/5 rounded-full">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#404040]">Features / Beneficios</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#43310B] leading-tight">
            Plataforma completa para <span className="highlight-stroke">gestao bubalina</span>
          </h2>
          <p className="text-sm md:text-base text-[#404040]/70 font-medium">
            Estruturada a partir de demandas reais de produtores e validada com foco em eficiencia, rastreabilidade e decisao baseada em dados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 md:mb-10">
          {destaques.map((item) => (
            <article key={item.titulo} className="rounded-[1.6rem] border border-black/10 bg-[#FDFBF7] p-6 md:p-7">
              <h3 className="text-xl font-bold text-[#43310B] tracking-tight mb-2">{item.titulo}</h3>
              <p className="text-sm text-[#404040]/80 font-medium leading-relaxed">{item.descricao}</p>
            </article>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6">
          <article className="bg-white border border-black/10 rounded-[2rem] p-7 md:p-9 shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#43310B] mb-5">Funcionalidades essenciais</h3>
            <ol className="space-y-3">
              {funcionalidades.map((funcionalidade, index) => (
                <li key={funcionalidade} className="rounded-xl border border-black/10 bg-[#FDFBF7] px-4 py-3 flex items-start gap-3">
                  <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-[#FFCF78]/60 text-[#43310B] text-xs font-black mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-sm text-[#404040]/85 font-medium leading-relaxed">{funcionalidade}</span>
                </li>
              ))}
            </ol>
          </article>

          <aside className="bg-[#FFF8ED] border border-[#FFCF78]/35 rounded-[2rem] p-7 md:p-8 shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#43310B] mb-5">Beneficios para a operacao</h3>
            <ul className="space-y-3">
              {beneficios.map((beneficio) => (
                <li key={beneficio} className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-[#404040]/85 font-medium leading-relaxed">
                  {beneficio}
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-xl border border-black/10 bg-white px-4 py-4">
              <p className="text-xs font-black uppercase tracking-widest text-[#FCA90F] mb-2">Resultado preliminar</p>
              <p className="text-sm text-[#404040]/80 font-medium leading-relaxed">
                O modelo preditivo de IA do projeto atingiu R2 de 0,73, reforcando o potencial de uso pratico para apoio a decisoes de manejo.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
