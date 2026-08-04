# RBAC e autorização

## Conceitos

- recurso;
- ação;
- papel;
- permissão;
- escopo;
- restrição por filial;
- propriedade;
- aprovação.

## Exemplo

`transport.trip.read`, `transport.trip.create`, `transport.trip.dispatch`, `financial.payable.approve`.

## Regras

- backend é fonte de verdade;
- frontend usa permissões para UX;
- permissões são granulares;
- papéis são configuráveis com modelos iniciais;
- operações críticas podem exigir dupla aprovação;
- alteração de papel é auditada.
