# Arquitetura

## Decisão inicial

Monorepo com monólito modular.

## Motivos

- um time inicial pequeno;
- alto grau de descoberta;
- domínios ainda em evolução;
- necessidade de transações consistentes;
- compartilhamento intenso de identidade, permissões, arquivos e auditoria;
- menor custo operacional;
- possibilidade de extração futura.

## Limites

O monólito não deve virar código sem fronteiras. Cada domínio expõe contratos e evita acesso direto ao interior de outro módulo.

## Camadas

- **Domínio**: entidades, valores e regras invariantes.
- **Aplicação**: casos de uso e orquestração.
- **Infraestrutura**: persistência, filas e integrações.
- **Apresentação**: HTTP, jobs e eventos.
- **Contratos**: DTOs, eventos e interfaces estáveis.

## Extração futura

Um módulo pode ser extraído quando houver:

- escala operacional distinta;
- necessidade de deploy independente;
- equipe dedicada;
- isolamento de falha;
- tecnologia específica;
- fronteira de dados madura.
