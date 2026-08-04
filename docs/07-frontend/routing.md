# Roteamento

## Estrutura por tenant

Todas as superfícies, exceto `superadmin`, vivem sob `/[tenant]/...`, onde `tenant` é o slug do cliente (ex: `/fogueiracaminhoes`). O slug `default` cobre o caso sem tenant definido; `/` redireciona para `/default`.

## Resolução de tenant

- segmento de rota (`/[tenant]`) é o mecanismo primário no bootstrap;
- domínio/subdomínio próprio de um tenant (quando existir) é resolvido em middleware, que reescreve a requisição para o mesmo `/[tenant]/...` interno — a URL pública do tenant não precisa expor o slug;
- para rotas privadas, sessão, API key e token interno continuam válidos, como descrito em `docs/02-architecture/multi-tenancy.md`.

## Superadmin

Fica fora de `/[tenant]`; é cross-tenant por definição (`docs/02-architecture/multi-tenancy.md`).

## Regras

- URLs estáveis;
- slugs amigáveis no catálogo;
- redirects controlados;
- breadcrumbs;
- estado de filtros serializável quando útil;
- páginas de 403, 404 e módulo indisponível.
