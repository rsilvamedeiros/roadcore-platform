# Multi-tenancy

## Estratégia inicial

Banco compartilhado com coluna `tenant_id` nas tabelas de negócio, índices compostos e escopo obrigatório na camada de dados.

## Contexto do tenant

Pode ser resolvido por:

- host público validado;
- sessão;
- API key;
- token interno.

## Requisitos

- unicidade normalmente composta por tenant;
- cache com chave contendo tenant;
- logs com tenant;
- arquivos com namespace;
- jobs com contexto explícito;
- eventos com tenant;
- testes de isolamento.

## Superadmin

Acesso cross-tenant deve ser excepcional, auditado e protegido por permissão distinta.
