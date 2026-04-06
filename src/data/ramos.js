export const ramos = [
  {
    slug: 'leite-bubalino',
    title: 'Leite Bubalino',
    category: 'Producao',
    shortDescription:
      'Operacoes focadas em qualidade e constancia de producao, com rotina intensa de lactacao e manejo reprodutivo.',
    intro:
      'No ramo leiteiro, pequenos desvios operacionais viram perda acumulada no fim do mes. A rotina precisa ser rapida, precisa e padronizada.',
    challenges: [
      'Oscilacao de media de producao sem causa clara.',
      'Dificuldade para acompanhar DEL e janela de secagem.',
      'Decisoes baseadas em anotacoes incompletas.',
    ],
    approach: [
      'Consolidar historico de producao por animal e por lote.',
      'Acompanhar ciclo reprodutivo para proteger continuidade da lactacao.',
      'Criar alertas operacionais para reduzir atraso em manejo critico.',
    ],
    kpis: ['Media diaria por lote', 'DEL medio', 'Taxa de prenhez em lactacao'],
    recommendedSolutionSlugs: ['medias-de-producao', 'ciclo-reprodutivo', 'controle-sanitario'],
  },
  {
    slug: 'melhoramento-genetico',
    title: 'Melhoramento Genetico',
    category: 'Evolucao de rebanho',
    shortDescription:
      'Projetos de selecao que exigem historico confiavel para comparar matrizes, reprodutores e desempenho ao longo do tempo.',
    intro:
      'Sem rastreabilidade e comparativo tecnico, o melhoramento perde consistencia. O foco e transformar dado de campo em criterio de selecao.',
    challenges: [
      'Dados dispersos dificultam comparacao entre linhagens.',
      'Falta de historico integrado entre reproducao e desempenho.',
      'Baixa visibilidade de evolucao de indicadores por ciclo.',
    ],
    approach: [
      'Organizar fichas zootecnicas com linha do tempo completa.',
      'Relacionar eventos reprodutivos ao resultado produtivo.',
      'Comparar tendencias por grupo para apoiar selecao tecnica.',
    ],
    kpis: ['Evolucao por linhagem', 'Taxa de concepcao', 'Desempenho comparativo'],
    recommendedSolutionSlugs: ['dados-zootecnicos', 'ciclo-reprodutivo', 'analise-de-dados'],
  },
  {
    slug: 'cria-e-recria',
    title: 'Cria e Recria',
    category: 'Desenvolvimento animal',
    shortDescription:
      'Operacoes com foco em crescimento, saude e padrao de manejo das categorias jovens para ganho de consistencia.',
    intro:
      'A fase de cria e recria define desempenho futuro do rebanho. O controle tecnico nessa etapa reduz perdas silenciosas.',
    challenges: [
      'Baixa padronizacao de acompanhamento por categoria.',
      'Falhas em calendario sanitario de animais jovens.',
      'Dificuldade para detectar desvios cedo.',
    ],
    approach: [
      'Estruturar rotina de registro por fase de desenvolvimento.',
      'Manter controle sanitario preventivo em dia.',
      'Acompanhar evolucao de desempenho por grupo.',
    ],
    kpis: ['Aderencia a protocolo', 'Evolucao por fase', 'Ocorrencias sanitarias'],
    recommendedSolutionSlugs: ['controle-sanitario', 'dados-zootecnicos', 'manejo-sustentavel'],
  },
];

export function getRamoBySlug(slug) {
  return ramos.find((ramo) => ramo.slug === slug);
}

export function getRamoPaths() {
  return ramos.map((ramo) => ({ params: { slug: ramo.slug } }));
}
