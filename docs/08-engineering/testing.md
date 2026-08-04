# Estratégia de testes

## Ferramentas

- unitário e integração: Vitest;
- componentes e hooks de UI: Testing Library (`@testing-library/react`);
- E2E: Playwright;
- mocks de rede em teste de componente/integração: MSW (Mock Service Worker), nunca mock manual de `fetch`.

## Unitários

Regras, cálculos, transições, comissões e validações.

## Integração

Banco, repositórios, casos de uso, autorização e isolamento de tenant.

No frontend: componentes conectados a dados (Server Components com fetch, formulários com validação, tabelas com filtro/paginação).

## E2E

Jornadas críticas:

- login;
- cadastro de anúncio;
- solicitação de frete;
- criação e execução de viagem;
- manutenção;
- lançamento e pagamento;
- troca de tenant;
- permissão negada.

## Convenções

- arquivo de teste vive em `tests/` dentro do módulo/feature, ou colocado como `*.test.ts(x)` junto ao arquivo testado — escolher um padrão por pacote e manter consistente;
- nome do teste descreve comportamento, não implementação;
- teste de regra de negócio não depende de UI nem de HTTP;
- teste de integração usa banco real (ou equivalente local), não mock de repositório;
- teste de isolamento de tenant é obrigatório em qualquer caso de uso que leia ou escreva dado de negócio;
- `pnpm test` (via Turborepo) roda unitário e integração em todo pacote; E2E roda separado (`pnpm test:e2e`), não bloqueia todo PR por padrão, mas bloqueia release.

## Princípio

Mais testes onde o custo do erro é maior.
