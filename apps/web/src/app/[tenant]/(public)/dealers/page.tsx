import Link from "next/link";
const dealers = [
  ["Fogueira Caminhões", "Curitiba, PR", "24 veículos"],
  ["Rota Sul Pesados", "Joinville, SC", "38 veículos"],
  ["Via Norte Seminovos", "São Paulo, SP", "52 veículos"],
  ["Central Truck", "Cascavel, PR", "19 veículos"],
  ["Pampa Caminhões", "Caxias do Sul, RS", "31 veículos"],
  ["Horizonte Pesados", "Goiânia, GO", "27 veículos"],
];
export default async function DealersPage({
  params,
}: {
  params: Promise<{ tenant: string }>;
}) {
  const { tenant } = await params;
  return (
    <main className="flex-1 bg-surface">
      <div className="page-shell py-16 sm:py-20">
        <p className="eyebrow">Rede profissional</p>
        <h1 className="mt-3 text-5xl font-semibold tracking-[-.04em]">
          Revendas verificadas.
        </h1>
        <p className="mt-4 text-muted">
          Estoques profissionais e atendimento especializado em todo o Brasil.
        </p>
        <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {dealers.map(([name, location, stock]) => (
            <Link
              key={name}
              href={`/${tenant}/catalog`}
              className="panel group p-6"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#171717] text-sm font-black text-primary-400">
                {name
                  .split(" ")
                  .map((x) => x[0])
                  .slice(0, 2)}
              </div>
              <h2 className="mt-6 text-lg font-semibold group-hover:text-primary">
                {name}
              </h2>
              <p className="mt-2 text-sm text-muted">{location}</p>
              <div className="mt-5 flex justify-between border-t pt-4 text-xs">
                <span>{stock}</span>
                <span className="font-bold text-primary">Ver estoque →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <section className="border-t bg-white"><div className="page-shell grid gap-10 py-16 lg:grid-cols-2"><div><p className="eyebrow">O que verificamos</p><h2 className="mt-3 text-3xl font-semibold">Informações essenciais para negociar melhor.</h2><p className="mt-4 leading-7 text-muted">O selo organiza empresas com perfil profissional e dados de contato identificados. Cada veículo continua sujeito à conferência técnica, documental e comercial antes do fechamento.</p></div><div className="grid gap-3 sm:grid-cols-2">{["Identificação da empresa","Canais de atendimento","Localização informada","Estoque com dados completos"].map((item) => <div key={item} className="rounded-xl border bg-surface p-4 text-sm font-medium">✓ {item}</div>)}</div></div></section>
      <section className="page-shell py-14"><div className="rounded-3xl bg-primary p-8 text-white sm:flex sm:items-center sm:justify-between"><div><h2 className="text-2xl font-semibold">Sua revenda também pode estar aqui.</h2><p className="mt-2 text-sm text-white/75">Centralize estoque, contatos e presença digital em um perfil profissional.</p></div><Link href={`/${tenant}/advertise`} className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-primary sm:mt-0">Conhecer soluções →</Link></div></section>
    </main>
  );
}
