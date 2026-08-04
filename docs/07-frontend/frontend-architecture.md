# Arquitetura frontend

## Next.js

Usar App Router. Priorizar Server Components para leitura e composição. Usar Client Components apenas onde há interação, estado local ou API do navegador.

## Organização

- rotas por superfície;
- features por domínio;
- componentes compartilhados no design system;
- serviços tipados;
- schemas próximos do caso de uso;
- autorização refletida na UI.

## Superfícies sugeridas

- `(public)`;
- `(portal)`;
- `(backoffice)`;
- `(superadmin)`;
- `(auth)`.
