# Git

## Branches

- `main`: produção;
- branches curtas por feature/fix;
- releases opcionais conforme maturidade.

## Commits

Conventional Commits, sempre em inglês, no formato:

```text
<type>(<optional scope>): <short imperative summary>

<optional body explaining why, not what>
```

Tipos comuns: `feat`, `fix`, `refactor`, `chore`, `docs`, `test`, `perf`, `build`, `ci`.

Commits são criados manualmente, após o código ser validado (build, lint, tipos e testes passando).

## Pull request

Deve informar:

- problema;
- solução;
- testes;
- riscos;
- migração;
- screenshots;
- documentação.
