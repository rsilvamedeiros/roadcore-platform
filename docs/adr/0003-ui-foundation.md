# ADR 0003 — Fundação de UI

## Status

Decidido. Revisado em 2026-08-04.

## Opções

- Ark UI;
- Park UI;
- React Aria Components;
- composição própria.

## Critérios

Acessibilidade, SSR, liberdade visual, manutenção, bundle e experiência de desenvolvimento.

## Decisão

Ark UI (primitivos acessíveis, headless) com estilos próprios em Tailwind CSS, escritos internamente em `packages/ui` sobre os tokens de `packages/design-system`.

## Histórico

A decisão original (2026-08-03) era Park UI sobre Ark UI + Tailwind. Na implementação, verificamos que o Park UI atual (sob a org `chakra-ui`) documenta e mantém apenas a variante Panda CSS; o suporte a Tailwind não consta mais na documentação oficial, e o único material de Tailwind encontrado é um mirror não oficial de terceiro. Depender dele violaria a regra de dependência de `CLAUDE.md` (manutenção incerta). Como o projeto já compromete Tailwind CSS como engine de estilo (`README.md`) e o token system já estava implementado, a decisão foi revisada para usar Ark UI diretamente, sem a camada Park UI.

## Justificativa

- Ark UI fornece primitivos já acessíveis e testados (padrões ARIA, gerenciamento de foco, teclado), sem necessidade de reimplementá-los;
- estilo é 100% nosso desde o início — reforça a exigência de identidade própria e evita herdar aparência de terceiro;
- compatível com Server Components/SSR; componentes interativos (Ark UI) ficam isolados como Client Components, o resto da árvore permanece Server Component;
- mantém Tailwind CSS como única engine de estilo do frontend, sem introduzir Panda CSS em paralelo.

## Revisão

Se, durante a implementação de `packages/ui`, surgir atrito real de acessibilidade, bundle ou customização com Ark UI, reabrir este ADR com o caso concreto.
