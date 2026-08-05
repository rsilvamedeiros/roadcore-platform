import Link from "next/link";

import { VehicleCard } from "@/features/marketplace/components/vehicle-card";
import { sampleListings } from "@/features/marketplace/sample-listings";

const categoryLabels: Record<string, string> = {
  caminhoes: "Caminhões",
  carretas: "Carretas",
  maquinas: "Máquinas",
};

interface CatalogPageProps {
  params: Promise<{ tenant: string }>;
  searchParams?: Promise<{ category?: string; query?: string; location?: string }>;
}

export default async function CatalogPage({ params, searchParams }: CatalogPageProps) {
  const { tenant } = await params;
  const filters = (await searchParams) ?? {};
  const category = filters.category ?? "";
  const query = filters.query?.trim().toLocaleLowerCase("pt-BR") ?? "";
  const location = filters.location ?? "";
  const categoryMatches = !category || category === "caminhoes";
  const listings = sampleListings.filter((item) => {
    const matchesQuery = !query || `${item.title} ${item.year ?? ""}`.toLocaleLowerCase("pt-BR").includes(query);
    const matchesLocation = !location || item.location.endsWith(location);
    return categoryMatches && matchesQuery && matchesLocation;
  });
  const hasFilters = Boolean(category || query || location);

  return <main className="flex-1 bg-surface">
    <section className="border-b bg-white"><div className="page-shell py-14 sm:py-20">
      <nav className="text-xs text-muted"><Link href={`/${tenant}`}>Início</Link><span className="mx-2">/</span><span>Estoque</span></nav>
      <div className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="eyebrow">Nosso estoque</p><h1 className="mt-3 text-4xl font-semibold tracking-tight">{categoryLabels[category] ?? "Encontre seu próximo veículo"}</h1><p className="mt-3 text-muted">Procedência e transparência para escolher com segurança.</p></div><span className="text-sm text-muted">{listings.length} {listings.length === 1 ? "veículo encontrado" : "veículos encontrados"}</span></div>
      <form className="panel mt-9 grid gap-3 p-4 sm:grid-cols-[2fr_1fr_1fr_auto]" action={`/${tenant}/catalog`}>
        <input name="query" defaultValue={filters.query} aria-label="Buscar" placeholder="Busque por marca, modelo ou ano" className="rounded-lg border bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"/>
        <select name="category" defaultValue={category} aria-label="Tipo" className="rounded-lg border bg-white px-4 py-3 text-sm"><option value="">Todos os tipos</option><option value="caminhoes">Caminhões</option><option value="carretas">Carretas</option><option value="maquinas">Máquinas</option></select>
        <select name="location" defaultValue={location} aria-label="Localização" className="rounded-lg border bg-white px-4 py-3 text-sm"><option value="">Todo o Brasil</option><option value="SP">São Paulo</option><option value="MG">Minas Gerais</option></select>
        <button className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white">Buscar</button>
      </form>
    </div></section>
    <section className="page-shell py-12 sm:py-16">
      {listings.length ? <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{listings.map((item) => <Link key={item.id} href={`/${tenant}/catalog/${item.id}`}><VehicleCard listing={item}/></Link>)}</div> : <div className="panel mx-auto max-w-2xl px-6 py-14 text-center"><span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary">⌕</span><h2 className="mt-5 text-xl font-semibold">Nenhum veículo encontrado</h2><p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted">Ainda não há anúncios que combinem com esses filtros. Limpe a busca ou conte para nossa equipe o que você procura.</p><div className="mt-6 flex flex-wrap justify-center gap-3">{hasFilters && <Link href={`/${tenant}/catalog`} className="rounded-xl border bg-white px-5 py-3 text-sm font-bold">Limpar filtros</Link>}<Link href={`/${tenant}/contact`} className="rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white">Cadastrar interesse</Link></div></div>}
    </section>
  </main>;
}
