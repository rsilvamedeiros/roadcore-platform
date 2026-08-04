# ADR 0003 — Fundação de UI

## Status

Decidido.

## Opções

- Ark UI;
- Park UI;
- React Aria Components;
- composição própria.

## Critérios

Acessibilidade, SSR, liberdade visual, manutenção, bundle e experiência de desenvolvimento.

## Decisão

Park UI, construído sobre Ark UI (primitivos acessíveis, headless) com Tailwind CSS.

## Justificativa

- primitivos já acessíveis e testados (Ark UI), sem necessidade de reimplementar padrões ARIA;
- estilos vêm como ponto de partida editável, não como dependência de aparência fixa — compatível com a exigência de identidade própria e white-label;
- compatível com Server Components/SSR;
- reduz tempo de bootstrap do design system em relação a composição própria, sem abrir mão de trocar a camada visual depois, já que a base (Ark UI) é headless.

## Revisão

Se, durante a implementação de `packages/design-system`, surgir atrito real de acessibilidade, bundle ou customização, reabrir este ADR com o caso concreto.
