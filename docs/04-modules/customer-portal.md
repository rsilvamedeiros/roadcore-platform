# Portal do cliente

## Objetivo

Fornecer capacidades de portal do cliente respeitando tenant, filial, permissões, auditoria e módulos contratados.

## Capacidades

- fretes;
- propostas;
- documentos;
- cobranças;
- atendimento;

## Casos de uso mínimos

- listar com paginação, filtros e ordenação;
- criar e editar com validação;
- consultar histórico;
- aplicar permissões;
- anexar documentos quando aplicável;
- emitir eventos relevantes;
- registrar auditoria em ações críticas.

## Estados

Definir estados explícitos e transições permitidas. Transições críticas devem registrar autor, data, motivo e contexto.

## Regras transversais

- dados sempre isolados por tenant;
- exclusão preferencialmente lógica em registros históricos;
- integrações devem ser idempotentes;
- alterações financeiras preservam memória de cálculo;
- telas devem tratar ausência de permissão e módulo desabilitado.

## Métricas

- volume;
- tempo de ciclo;
- taxa de conclusão;
- pendências;
- erros;
- impacto financeiro ou operacional quando aplicável.

## Questões de descoberta

- Quais campos são obrigatórios na operação real?
- Quem cria, aprova, executa e encerra?
- Quais documentos são necessários?
- Quais exceções existem?
- Quais relatórios são usados atualmente?
- Quais integrações são indispensáveis?
