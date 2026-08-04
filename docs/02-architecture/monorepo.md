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

## Regras

- `apps` podem depender de `packages`.
- `packages` não dependem de `apps`.
- pacotes de domínio não importam UI;
- contratos devem evitar dependências de framework;
- ciclos são proibidos;
- comandos comuns devem existir na raiz.
