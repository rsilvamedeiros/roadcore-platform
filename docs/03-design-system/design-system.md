# Design system

## Objetivo

Criar identidade própria, moderna e flexível, sem herdar a aparência reconhecível do shadcn/ui.

## Base decidida

Ark UI (primitivos headless) + Tailwind CSS, com estilo próprio escrito em `packages/ui`, conforme `docs/adr/0003-ui-foundation.md`. Não há dependência de Park UI nem de sua aparência padrão.

## Camadas

1. Primitivos acessíveis.
2. Design tokens.
3. Componentes básicos.
4. Componentes compostos.
5. Padrões de tela.
6. Temas por tenant.

## Critérios

- acessibilidade;
- estabilidade;
- liberdade visual;
- tree-shaking;
- SSR;
- documentação;
- manutenção;
- licenciamento.
