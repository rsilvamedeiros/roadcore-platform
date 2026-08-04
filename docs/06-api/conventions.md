# Convenções de API

## Estilo

REST inicialmente, com contratos explícitos e OpenAPI.

## Recursos

URLs em plural, identificadores opacos e ações especiais apenas quando não representáveis como recurso.

## Resposta de erro

```json
{
  "code": "TRIP_INVALID_TRANSITION",
  "message": "A viagem não pode ser iniciada.",
  "details": {},
  "correlationId": "..."
}
```

## Requisitos

- paginação;
- filtros documentados;
- ordenação;
- idempotency key em operações críticas;
- versionamento;
- autorização;
- tenant no contexto;
- correlação.
