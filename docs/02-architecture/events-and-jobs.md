# Eventos e jobs

## Eventos internos

Usar eventos para desacoplar reações, não para esconder fluxo essencial.

Exemplos:

- `FreightQuoteAccepted`
- `TripStarted`
- `TripDelivered`
- `MaintenanceOrderClosed`
- `CommissionCalculated`
- `ReceivableCreated`

## Jobs

- notificações;
- importações;
- geração de documentos;
- sincronizações;
- processamento de imagens;
- recálculos;
- relatórios.

Cada job deve ter idempotência, tentativas, backoff e dead-letter.
