# Ambientes

- local;
- development;
- staging;
- production.

Cada ambiente possui banco, storage, Redis e credenciais próprios.

Dados reais não devem ser copiados para ambientes inferiores sem anonimização.

## Variáveis de ambiente

- todo app mantém um `.env.example` versionado, atualizado a cada variável nova;
- `.env*` reais nunca são versionados (ver `.gitignore`);
- no frontend (Next.js), apenas variáveis explicitamente públicas usam prefixo `NEXT_PUBLIC_`; qualquer segredo (chave de API, connection string, secret de sessão) nunca recebe esse prefixo;
- segredos de produção/staging vivem em cofre/provedor de deploy, não em arquivo local;
- variáveis por tenant (quando existirem) não substituem o isolamento por `tenant_id`; são apenas configuração de ambiente.
