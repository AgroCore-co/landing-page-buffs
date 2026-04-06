export const solutions = [
  {
    slug: 'dados-zootecnicos',
    title: 'Dados Zootecnicos',
    category: 'Base tecnica',
    shortDescription:
      'Centralize o historico individual de cada animal para tomar decisoes com rastreabilidade completa.',
    intro:
      'Com dados organizados por animal, a equipe deixa de depender de memoria ou cadernos dispersos e passa a operar com padrao tecnico.',
    features: [
      'Ficha individual com eventos de manejo e historico completo.',
      'Registro de peso, categoria, lote e observacoes tecnicas.',
      'Busca rapida por animal, lote ou status.',
      'Atualizacao simples para rotina de curral.',
    ],
    outcomes: [
      'Menos retrabalho para localizar informacoes de campo.',
      'Decisoes tecnicas com base em historico confiavel.',
      'Padrao unico de registro para toda a equipe.',
    ],
    metrics: ['Rastreabilidade individual', 'Qualidade de cadastro', 'Consistencia de registros'],
  },
  {
    slug: 'controle-sanitario',
    title: 'Controle Sanitario',
    category: 'Saude do rebanho',
    shortDescription:
      'Acompanhe vacinacoes, protocolos e ocorrencias sanitarias sem perder prazos criticos.',
    intro:
      'A solucao sanitaria organiza calendario, lotes e aplicacoes para reduzir falhas operacionais e proteger a produtividade.',
    features: [
      'Calendario de vacinacao por periodo e categoria.',
      'Controle de tratamentos com historico de aplicacao.',
      'Alertas para pendencias e vencimentos proximos.',
      'Consulta rapida de status sanitario por lote.',
    ],
    outcomes: [
      'Menor risco de perda de prazo em protocolos.',
      'Equipe alinhada sobre o que foi aplicado e quando.',
      'Mais previsibilidade no planejamento sanitario.',
    ],
    metrics: ['Cobertura de vacinacao', 'Pendencias em aberto', 'Aderencia a protocolo'],
  },
  {
    slug: 'ciclo-reprodutivo',
    title: 'Ciclo Reprodutivo',
    category: 'Reproducao',
    shortDescription:
      'Monitore cio, monta, prenhez e parto com visao cronologica de todo o ciclo reprodutivo.',
    intro:
      'A plataforma conecta eventos reprodutivos para reduzir perda de informacao e apoiar decisoes no momento certo.',
    features: [
      'Registro de cio, cobertura e confirmacao de prenhez.',
      'Linha do tempo reprodutiva por matriz.',
      'Alertas para janelas criticas do ciclo.',
      'Acompanhamento de eficiencia reprodutiva por lote.',
    ],
    outcomes: [
      'Melhor taxa de acompanhamento de matrizes.',
      'Menos falhas por perda de timing operacional.',
      'Mais controle sobre desempenho reprodutivo.',
    ],
    metrics: ['Taxa de prenhez', 'Intervalo entre eventos', 'Animais em acompanhamento'],
  },
  {
    slug: 'medias-de-producao',
    title: 'Medias de Producao',
    category: 'Performance',
    shortDescription:
      'Visualize medias de producao em janelas semanais, mensais e anuais para guiar a operacao.',
    intro:
      'Com historico produtivo consolidado, fica mais facil detectar variacoes, agir rapido e proteger margem da propriedade.',
    features: [
      'Historico de producao por animal e por lote.',
      'Consolidacao de medias por periodo.',
      'Comparativo de desempenho entre janelas.',
      'Visao simplificada para decisoes diarias.',
    ],
    outcomes: [
      'Identificacao antecipada de queda de desempenho.',
      'Planejamento mais assertivo da rotina de producao.',
      'Acompanhamento continuo dos resultados do rebanho.',
    ],
    metrics: ['Media por periodo', 'Variacao de producao', 'Tendencia de desempenho'],
  },
  {
    slug: 'analise-de-dados',
    title: 'Analise de Dados',
    category: 'Inteligencia',
    shortDescription:
      'Transforme registros operacionais em indicadores praticos para orientar estrategia e priorizacao.',
    intro:
      'A camada analitica organiza os dados da fazenda em visoes claras para decidir onde agir primeiro.',
    features: [
      'Painel com indicadores-chave da operacao.',
      'Comparativos de performance por periodo e categoria.',
      'Leitura de tendencias para apoiar planejamento.',
      'Visao integrada de producao, sanidade e reproducao.',
    ],
    outcomes: [
      'Mais velocidade para detectar gargalos.',
      'Priorizacao baseada em dado, nao em suposicao.',
      'Gestao mais profissional da propriedade.',
    ],
    metrics: ['Indicadores consolidados', 'Tempo de resposta gerencial', 'Evolucao de performance'],
  },
  {
    slug: 'manejo-sustentavel',
    title: 'Manejo Sustentavel',
    category: 'Longo prazo',
    shortDescription:
      'Apoie decisoes de manejo com foco em longevidade do rebanho e equilibrio da operacao.',
    intro:
      'A solucao combina rotina tecnica e visao de continuidade para fortalecer produtividade sem perder sustentabilidade.',
    features: [
      'Rotina organizada para manejo preventivo.',
      'Acompanhamento de historico para decisoes de longo prazo.',
      'Visao integrada de saude, reproducao e producao.',
      'Padrao operacional para manter consistencia.',
    ],
    outcomes: [
      'Mais estabilidade na conducao do rebanho.',
      'Reducao de perdas por falta de acompanhamento.',
      'Base tecnica para crescimento sustentavel.',
    ],
    metrics: ['Consistencia operacional', 'Evolucao sanitaria', 'Estabilidade produtiva'],
  },
];

export function getSolutionBySlug(slug) {
  return solutions.find((solution) => solution.slug === slug);
}

export function getSolutionPaths() {
  return solutions.map((solution) => ({ params: { slug: solution.slug } }));
}
