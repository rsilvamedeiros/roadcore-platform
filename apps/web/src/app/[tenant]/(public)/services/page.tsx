import Link from "next/link";
const groups = [
  [
    "Oficinas e manutenção",
    "Mecânica diesel, elétrica, suspensão e atendimento móvel.",
  ],
  ["Pneus e recapagem", "Lojas, recapadoras e assistência para sua frota."],
  [
    "Rastreamento e tecnologia",
    "Telemetria, segurança, gestão e conectividade.",
  ],
  ["Seguros", "Proteção para veículo, carga e responsabilidade civil."],
  ["Documentação", "Despachantes, laudos, transferência e regularização."],
  ["Implementos", "Reformas, adaptações e soluções sob medida."],
];
export default async function ServicesPage({
  params,
}: {
  params: Promise<{ tenant: string }>;
}) {
  const { tenant } = await params;
  return (
    <main className="flex-1 bg-surface">
      <div className="page-shell py-16 sm:py-20">
        <p className="eyebrow">Central de serviços</p>
        <h1 className="mt-3 max-w-3xl text-5xl font-semibold tracking-[-.04em]">
          Parceiros para manter seu negócio em movimento.
        </h1>
        <p className="mt-5 max-w-2xl leading-7 text-muted">
          Encontre fornecedores especializados no setor de transporte e veículos
          pesados.
        </p>
        <div className="mt-8 panel grid gap-3 p-4 sm:grid-cols-[1.5fr_1fr_auto]">
          <input
            placeholder="Qual serviço você procura?"
            className="rounded-xl bg-surface px-4 py-3 text-sm outline-none"
          />
          <select className="rounded-xl bg-surface px-4 py-3 text-sm">
            <option>Todo o Brasil</option>
            <option>Paraná</option>
          </select>
          <button className="rounded-xl bg-[#171717] px-6 py-3 text-sm font-bold text-white">
            Buscar
          </button>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {groups.map(([a, b]) => (
            <article key={a} className="panel p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 font-bold text-primary">
                ✓
              </span>
              <h2 className="mt-6 text-lg font-semibold">{a}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{b}</p>
              <Link
                href={`/${tenant}/contact`}
                className="mt-5 inline-flex text-sm font-bold text-primary"
              >
                Ver fornecedores →
              </Link>
            </article>
          ))}
        </div>
      </div>
      <section className="border-t bg-white"><div className="page-shell grid gap-10 py-16 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">Rede com critério</p><h2 className="mt-3 text-3xl font-semibold tracking-tight">Mais confiança na hora de escolher um fornecedor.</h2><p className="mt-4 leading-7 text-muted">A plataforma organiza especialidades e localização para facilitar o primeiro contato. Antes de contratar, confirme escopo, prazo, garantia e condições diretamente com a empresa.</p></div><div className="grid gap-4 sm:grid-cols-3">{[["01","Descreva a necessidade"],["02","Compare especialistas"],["03","Solicite uma proposta"]].map(([number,title]) => <div key={number} className="rounded-2xl bg-surface p-5"><span className="text-xs font-bold text-primary">{number}</span><h3 className="mt-5 font-semibold">{title}</h3></div>)}</div></div></section>
      <section className="page-shell py-14"><div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#171717] p-8 text-white sm:flex-row sm:items-center"><div><p className="text-xs font-bold uppercase tracking-wider text-primary-400">É fornecedor?</p><h2 className="mt-2 text-2xl font-semibold">Apresente seus serviços para quem vive a estrada.</h2></div><Link href={`/${tenant}/advertise`} className="shrink-0 rounded-xl bg-primary px-5 py-3 text-sm font-bold">Quero fazer parte →</Link></div></section>
    </main>
  );
}
