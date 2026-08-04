# Design system

## Objetivo

Criar identidade própria, moderna e flexível, sem herdar a aparência reconhecível do shadcn/ui.

## Base decidida

Park UI (Ark UI + Tailwind CSS), conforme `docs/adr/0003-ui-foundation.md`. Estilos são substituídos por tokens próprios; a aparência padrão do Park UI não deve vazar para produção.

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
