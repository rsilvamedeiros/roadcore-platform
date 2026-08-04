# Regras transversais de negócio

- Toda operação pertence a um tenant e, quando aplicável, a uma filial.
- Valores financeiros devem registrar moeda e precisão decimal.
- Regras de comissão devem ser versionadas e preservar a regra usada no cálculo.
- Mudanças de status críticas devem manter histórico.
- Documentos podem possuir validade, versão, status e responsável.
- Veículo, carreta e motorista devem possuir disponibilidade derivada de eventos.
- Uma viagem não deve ser iniciada com composição incompatível ou bloqueada sem exceção autorizada.
- Cancelamentos devem registrar motivo e impacto financeiro.
- Operações irreversíveis devem exigir confirmação e permissão específica.
- Toda integração externa deve suportar reprocessamento seguro.
