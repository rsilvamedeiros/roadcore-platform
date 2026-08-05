# RBAC e autorização

## Conceitos

- recurso;
- ação;
- papel;
- permissão;
- escopo;
- restrição por filial;
- propriedade;
- aprovação.

## Exemplo

`transport.trip.read`, `transport.trip.create`, `transport.trip.dispatch`, `financial.payable.approve`.

## Regras

- backend é fonte de verdade;
- frontend usa permissões para UX;
- permissões são granulares;
- papéis são configuráveis com modelos iniciais;
- operações críticas podem exigir dupla aprovação;
- alteração de papel é auditada.

## Modelos administrativos iniciais

O pacote `@roadcore/auth` fornece modelos iniciais configuráveis para os perfis Administrador, Gerência, Comercial, Estoque, Financeiro, Operações, Frota, Manutenção e Motorista. Eles são pontos de partida por tenant, não papéis fixos no frontend.

- **Administrador**: configura tenant, usuários, papéis e todas as áreas;
- **Gerência**: acompanha operação e relatórios, sem alterar configurações críticas ou papéis;
- **Comercial**: leads, negociações e criação de propostas;
- **Estoque**: cadastro, atualização e publicação de veículos;
- **Financeiro**: propostas, aprovações e relatórios financeiros.
- **Operações**: fretes, viagens, despacho e entregas;
- **Frota**: veículos operacionais, motoristas, documentos e disponibilidade;
- **Manutenção**: ordens de serviço e planos preventivos;
- **Motorista**: agenda, checklist, despesas, ocorrências e confirmação de entrega em portal próprio.

O Administrador possui todas as permissões, todos os cadastros e acesso a todas as telas administrativas. O perfil Motorista não acessa a superfície `/admin`; sua entrada é direcionada ao portal operacional em `/portal/driver`.

O papel é associado à identidade autenticada. A tela de login nunca permite ao usuário escolher ou elevar seu próprio nível de acesso.
