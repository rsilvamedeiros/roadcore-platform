# RoadCore Platform

Plataforma SaaS white-label para marketplace de ativos pesados, contratação de fretes, gestão de transportadoras, frota, oficina e ERP empresarial.

## Visão

A RoadCore nasce para atender empresas que comercializam caminhões, ônibus, máquinas, implementos e outros ativos pesados, além de transportadoras que precisam controlar operações, motoristas, rotas, fretes, manutenções, custos, financeiro, fiscal, contábil e administrativo.

A Fogueira Caminhões, de Itapeva-SP, é o primeiro tenant e caso real de validação. A plataforma, entretanto, não deve conter regras, identidade ou estruturas exclusivas da Fogueira no núcleo do produto.

## Posicionamento

**Enterprise Marketplace, Transport Management, Fleet and ERP Platform.**

## Princípios

- Uma única base de código.
- Multi-tenant desde a primeira versão.
- White-label configurável sem fork.
- Monólito modular preparado para extrações futuras.
- Domínios independentes e regras de negócio explícitas.
- Segurança, auditoria e rastreabilidade por padrão.
- Experiência responsiva para escritório, vendedores, gestores e motoristas.
- Módulos licenciáveis por tenant.
- Configuração antes de customização.
- Evolução incremental orientada por dados.

## Pilares do produto

1. **Área pública e marketplace**
   - Venda, compra, troca e financiamento de veículos e equipamentos.
   - Catálogo de caminhões, ônibus, máquinas, implementos, peças e outros ativos.
   - Solicitação e contratação de fretes.
   - Captação de leads, propostas, simulações e atendimento.

2. **TMS e operação da transportadora**
   - Solicitações, cotações, ordens de transporte, viagens, rotas, cargas e entregas.
   - Motoristas próprios, agregados, terceiros e comissionados.
   - Comprovações de entrega, ocorrências, documentos e rastreabilidade.
   - Custos, margens, adiantamentos, comissões e acertos.

3. **Frota, oficina e manutenção**
   - Cavalo mecânico, carreta, semirreboque, ônibus, máquina e implemento.
   - Planos preventivos, ordens de serviço, pneus, peças e abastecimentos.
   - Histórico técnico, custos e indisponibilidade.

4. **ERP empresarial**
   - Financeiro, fiscal, contábil, compras, estoque, patrimônio, RH e administrativo.
   - Centros de custo, DRE gerencial, contas a pagar e receber, conciliação e orçamento.
   - Documentos, contratos, fornecedores, clientes e auditoria.

## Arquitetura

A arquitetura inicial é um **monólito modular em monorepo**, evitando a complexidade prematura de microfrontends e microsserviços.

```text
roadcore-platform/
├── apps/
│   ├── web/              # área pública, portal e backoffice em Next.js
│   ├── api/              # API modular
│   └── worker/           # processamento assíncrono
├── packages/
│   ├── ui/
│   ├── design-system/
│   ├── auth/
│   ├── database/
│   ├── contracts/
│   ├── shared/
│   ├── config/
│   └── observability/
├── docs/
├── infrastructure/
└── scripts/
```

## Stack sugerida

A versão exata das dependências deve ser definida no bootstrap, após verificação de compatibilidade.

### Frontend

- Next.js com App Router
- React
- TypeScript
- Tailwind CSS
- Ark UI ou Park UI como base de componentes
- TanStack Query
- TanStack Table
- React Hook Form
- Zod
- Motion
- biblioteca de gráficos compatível com SSR e acessibilidade

### Backend e dados

- NestJS ou API modular equivalente
- PostgreSQL
- Prisma ou Drizzle, conforme decisão registrada em ADR
- Redis
- BullMQ
- Storage compatível com S3
- Busca inicialmente em PostgreSQL; Meilisearch/OpenSearch apenas quando necessário

### Qualidade

- ESLint
- Prettier
- TypeScript strict
- Vitest
- Testing Library
- Playwright
- Conventional Commits
- CI com lint, tipos, testes, build e migrações validadas

## Primeiros passos

1. Leia `CLAUDE.md`.
2. Leia `docs/00-overview/vision.md`.
3. Leia `docs/02-architecture/architecture.md`.
4. Leia `docs/02-architecture/engineering-principles.md`.
5. Leia o documento do módulo que será desenvolvido.
6. Registre decisões estruturais em `docs/adr/`.
7. Não implemente funcionalidades específicas de um tenant no núcleo da plataforma.

## Roadmap inicial

### Fase 0 — Fundação

- Monorepo
- Design system
- Multi-tenancy
- Autenticação
- RBAC
- feature flags
- auditoria
- observabilidade
- CI/CD

### Fase 1 — Comercial público

- Site white-label
- Catálogo de ativos
- Página de anúncio
- leads
- proposta
- troca
- financiamento
- solicitação de frete

### Fase 2 — Operação interna

- CRM
- estoque de ativos
- clientes e fornecedores
- fretes
- viagens
- motoristas
- frota
- manutenção
- custos

### Fase 3 — ERP

- contas a pagar e receber
- fluxo de caixa
- centros de custo
- compras
- estoque de peças
- fiscal
- contabilidade gerencial
- RH
- relatórios

### Fase 4 — Expansão

- aplicativo do motorista
- telemetria
- integrações fiscais
- integrações bancárias
- marketplace multiempresa
- automações e recursos assistidos por IA

## Documentação

O índice completo está em [`docs/README.md`](docs/README.md).
