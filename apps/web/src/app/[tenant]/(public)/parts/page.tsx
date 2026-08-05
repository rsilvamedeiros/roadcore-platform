import Link from "next/link";
const parts = [
  "Motor e componentes",
  "Câmbio e transmissão",
  "Freios",
  "Suspensão",
  "Elétrica e iluminação",
  "Cabine e acabamento",
  "Pneus e rodas",
  "Filtros e lubrificantes",
];
export default async function PartsPage({
  params,
}: {
  params: Promise<{ tenant: string }>;
}) {
  const { tenant } = await params;
  return (
    <main className="flex-1">
      <section className="bg-[#171717] text-white">
        <div className="page-shell py-16 sm:py-20">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-primary-400">
            Marketplace de peças
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-[-.04em]">
            A peça certa. O caminhão de volta à estrada.
          </h1>
          <div className="mt-8 grid max-w-4xl gap-3 rounded-2xl bg-white p-4 sm:grid-cols-[1fr_auto]">
            <input
              placeholder="Digite peça, código, marca ou modelo"
              className="rounded-xl bg-surface px-4 py-3 text-sm text-foreground outline-none"
            />
            <button className="rounded-xl bg-primary px-7 py-3 text-sm font-bold text-white">
              Buscar peças
            </button>
          </div>
        </div>
      </section>
      <section className="page-shell py-16">
        <h2 className="text-2xl font-semibold">Compre por categoria</h2>
        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {parts.map((x, i) => (
            <Link
              key={x}
              href={`/${tenant}/contact`}
              className="group min-h-36 rounded-2xl border p-5 transition hover:border-primary hover:shadow-lg"
            >
              <span className="text-xs font-bold text-primary">0{i + 1}</span>
              <h3 className="mt-12 text-sm font-semibold group-hover:text-primary">
                {x}
              </h3>
            </Link>
          ))}
        </div>
      </section>
      <section className="bg-surface"><div className="page-shell grid gap-10 py-16 lg:grid-cols-[1.1fr_.9fr]"><div><p className="eyebrow">Antes de comprar</p><h2 className="mt-3 text-3xl font-semibold">Confirme aplicação, código e procedência.</h2><p className="mt-4 max-w-xl leading-7 text-muted">Ano e modelo nem sempre bastam para identificar uma peça. Tenha em mãos chassi, código original, motorização e fotos para reduzir erros de aplicação.</p><div className="mt-7 grid gap-3 sm:grid-cols-3">{["Código da peça","Dados do veículo","Garantia e troca"].map((item) => <span key={item} className="rounded-xl border bg-white p-4 text-sm font-semibold">✓ {item}</span>)}</div></div><div className="panel p-7"><p className="text-xs font-bold uppercase tracking-wider text-primary">Não encontrou?</p><h2 className="mt-3 text-xl font-semibold">Nossa equipe ajuda a encaminhar sua busca.</h2><p className="mt-3 text-sm leading-6 text-muted">Envie os dados do veículo e descreva a peça ou serviço necessário.</p><Link href={`/${tenant}/contact`} className="mt-6 inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white">Solicitar atendimento →</Link></div></div></section>
    </main>
  );
}
