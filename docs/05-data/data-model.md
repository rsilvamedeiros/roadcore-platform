# Modelo de dados

## Princípios

- UUID/ULID ou identificador consistente;
- `tenant_id` obrigatório nas entidades de negócio;
- timestamps;
- autor de criação/alteração quando relevante;
- soft delete para históricos;
- índices compostos;
- dinheiro em decimal;
- enums com evolução controlada;
- JSON apenas para dados realmente flexíveis;
- histórico para regras versionadas.

## Núcleos

Identidade, tenant, comercial, ativos, transportes, frota, manutenção, financeiro, pessoas, documentos e auditoria.
