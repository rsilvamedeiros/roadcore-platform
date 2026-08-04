# Monorepo

## Estrutura proposta

```text
apps/web
apps/api
apps/worker
packages/ui
packages/design-system
packages/database
packages/auth
packages/contracts
packages/shared
packages/config
packages/observability
```

## Ferramentas

- Gerenciador de pacotes: `pnpm` (via `corepack`).
- Orquestração de tarefas: `Turborepo`, com pipeline `dev`, `build`, `lint`, `typecheck`, `test`.
- Versão do Node fixada em `.nvmrc` / `engines` no `package.json` raiz.
- Cada `app` e `package` possui seu próprio `package.json`; scripts comuns (`lint`, `test`, `build`, `typecheck`) devem existir em todos para o Turborepo orquestrar.

## Regras

- `apps` podem depender de `packages`.
- `packages` não dependem de `apps`.
- pacotes de domínio não importam UI;
- contratos devem evitar dependências de framework;
- ciclos são proibidos;
- comandos comuns devem existir na raiz.
