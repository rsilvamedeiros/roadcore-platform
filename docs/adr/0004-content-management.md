# ADR 0004 — Gestão de conteúdo público

## Status

Decidido em 2026-08-05.

## Contexto

A área pública white-label precisa permitir que equipes autorizadas alterem páginas, textos, mídia, navegação, publicações, campanhas e metadados sem deploy. Conteúdo editorial não deve ser misturado com entidades operacionais como veículos, leads, propostas, fretes, frota ou financeiro.

## Opções consideradas

- módulo CMS próprio;
- Strapi;
- Directus;
- Payload CMS;
- SaaS editorial externo.

## Decisão

Adotar Payload CMS integrado ao `apps/web`, usando PostgreSQL, editor Lexical e plugin oficial multi-tenant.

O painel gerado pelo Payload vive em `/cms`. A navegação RoadCore expõe o módulo em `/[tenant]/admin/content`, mantendo o CMS como parte da experiência administrativa sem conflitar com as rotas dinâmicas do tenant.

## Limites

O CMS administra apenas apresentação pública e conteúdo editorial:

- páginas e blocos controlados;
- publicações;
- mídia;
- navegação;
- configurações públicas;
- campanhas, banners e SEO.

Entidades operacionais permanecem nos módulos de domínio da RoadCore. O CMS pode referenciá-las por identificador estável, mas nunca se torna sua fonte de verdade.

## Multi-tenancy e segurança

- coleções editoriais possuem tenant obrigatório;
- o painel filtra conteúdo pelo tenant selecionado;
- consultas públicas no servidor devem receber o slug do tenant explicitamente;
- rascunhos nunca são retornados por consultas públicas;
- publicação e alteração de estrutura exigem permissões distintas;
- mídia privada futura deve usar storage com URL assinada; mídia pública editorial pode ser publicada via CDN;
- segredos do Payload são exclusivamente server-side.

## Consequências

- nova dependência relevante dentro do monólito;
- migrações do Payload passam a fazer parte do processo de deploy;
- banco PostgreSQL e storage persistente são obrigatórios;
- autenticação do CMS será inicialmente própria e depois integrada à identidade RoadCore;
- o frontend migra gradualmente de fixtures para consultas editoriais, mantendo fallback durante a transição.

## Revisão

Reavaliar a integração após a migração da home e do blog, especialmente experiência editorial, isolamento por tenant, custo de build e operação de mídia.
