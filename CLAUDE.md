# CLAUDE.md — RoadCore Platform

## Missão

Você está colaborando na construção da RoadCore Platform, uma plataforma SaaS white-label, multi-tenant e modular para marketplace de ativos pesados, contratação e operação de fretes, gestão de transportadoras, frota, oficina e ERP.

A Fogueira Caminhões é o primeiro tenant. Ela não representa o limite do produto.

## Antes de alterar código

1. Leia o `README.md`.
2. Leia `docs/00-overview/vision.md`.
3. Leia `docs/02-architecture/engineering-principles.md`.
4. Leia `docs/02-architecture/architecture.md`.
5. Leia a documentação do módulo envolvido.
6. Verifique ADRs existentes.
7. Identifique impacto em tenant, permissões, auditoria, integrações e testes.

## Regras obrigatórias

- Não criar solução exclusiva para a Fogueira dentro do core.
- Não introduzir microfrontend ou microsserviço sem ADR aprovado.
- Não acessar dados sem escopo explícito de tenant.
- Não confiar em `tenantId` enviado livremente pelo cliente.
- Não colocar regra de negócio em componente React.
- Não duplicar componente existente.
- Não usar cores, logos ou textos fixos de tenant.
- Não codificar menus estáticos quando dependem de módulo ou permissão.
- Não esconder ação apenas no frontend; autorização deve existir no backend.
- Não executar efeito financeiro, fiscal ou operacional sem idempotência quando aplicável.
- Não excluir registros críticos de forma irreversível sem regra documentada.
- Não misturar valores monetários em `float`.
- Não misturar datas locais, UTC e datas civis sem tipo e regra explícitos.
- Não criar dependência circular entre módulos.
- Não alterar contrato público sem versionamento ou migração.
- Não criar dependência nova sem justificar necessidade, manutenção e licença.

## Arquitetura

A solução começa como monólito modular em monorepo.

Cada módulo deve conter, conforme necessidade:

```text
modules/<module>/
├── domain/
├── application/
├── infrastructure/
├── presentation/
├── contracts/
├── tests/
└── index.ts
```

O frontend também deve ser organizado por domínio:

```text
features/<feature>/
├── components/
├── hooks/
├── services/
├── schemas/
├── types/
├── permissions/
└── tests/
```

## Multi-tenancy

Toda entidade de negócio pertencente a cliente deve possuir isolamento por tenant.

O tenant deve ser resolvido a partir de contexto confiável:

- domínio validado;
- sessão autenticada;
- API key;
- token interno assinado.

Nunca derive autorização apenas de parâmetros de rota ou payload.

## White-label

A identidade deve ser carregada por configuração:

- logo;
- ícones;
- paleta;
- tipografia;
- bordas;
- sombras;
- conteúdos;
- dados institucionais;
- domínio;
- menus públicos;
- módulos habilitados.

Use design tokens semânticos. Não use nomes como `fogueiraRed`.

## Segurança

Aplicar:

- autenticação forte;
- RBAC;
- escopo por tenant;
- rate limit;
- proteção contra CSRF quando aplicável;
- validação de entrada;
- logs de auditoria;
- secrets fora do repositório;
- URLs assinadas para arquivos privados;
- proteção de dados pessoais e empresariais;
- princípio do menor privilégio.

## Qualidade

Toda feature deve considerar:

- estado vazio;
- loading;
- erro;
- acessibilidade;
- responsividade;
- permissão negada;
- tenant sem módulo contratado;
- auditoria;
- testes;
- observabilidade;
- internacionalização;
- idempotência quando houver efeitos externos.

## Forma de trabalhar

Ao receber uma tarefa:

1. Identifique o domínio e os casos de uso.
2. Liste entidades, regras e permissões afetadas.
3. Proponha uma implementação pequena e coerente.
4. Evite abstrações prematuras.
5. Reutilize contratos e componentes existentes.
6. Atualize documentação.
7. Crie ou atualize testes.
8. Informe riscos e decisões.

## Padrões de resposta no Claude Code

Antes de implementar alterações relevantes, apresente:

- objetivo;
- arquivos afetados;
- decisões;
- riscos;
- plano de validação.

Após implementar, apresente:

- resumo;
- testes executados;
- limitações;
- documentação atualizada;
- próximos passos necessários.

## Fonte da verdade

Em caso de conflito:

1. Regras legais e de segurança.
2. ADR aprovado.
3. Documentação de arquitetura.
4. Documentação do domínio.
5. Convenções gerais.
6. Código legado.

Se código e documentação divergirem, sinalize a divergência. Não assuma silenciosamente que o código está correto.
