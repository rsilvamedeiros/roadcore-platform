# ADR 0002 — Banco compartilhado por tenant

## Status

Proposto.

## Decisão

Usar banco e schema compartilhados, com `tenant_id` e escopo obrigatório.

## Riscos

Vazamento lógico entre tenants.

## Mitigações

Camada de acesso, índices, testes, auditoria, contexto confiável e possível RLS após validação.
