<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:project-rules -->
# Regras do projeto landing-page-buffs

## Escopo
- Criar e evoluir uma landing page de alta conversao.
- Priorizar UX, responsividade, performance e SEO.

## Stack oficial
- Next.js 16 (Pages Router).
- React 19.
- Tailwind CSS 4.

## Diretrizes de implementacao
- Fazer mudancas pequenas e objetivas.
- Preservar estrutura existente em src/pages.
- Evitar dependencias novas sem necessidade.
- Garantir acessibilidade basica (contraste, foco, labels).

## Validacao obrigatoria antes de concluir
- Rodar: npm run lint
- Rodar: npm run build
- Corrigir erros antes de finalizar.

## Restricoes
- Nao migrar para App Router sem solicitacao explicita.
- Nao remover estilos globais sem substituicao equivalente.
- Nao alterar configuracoes centrais sem justificar.

## Formato da entrega
- Resumo curto do que foi feito.
- Lista de arquivos alterados.
- Proximos passos sugeridos.

## Nota sobre versao do Next
- Este projeto usa uma versao com mudancas importantes.
- Consultar node_modules/next/dist/docs ao usar APIs e convencoes do framework.
<!-- END:project-rules -->
