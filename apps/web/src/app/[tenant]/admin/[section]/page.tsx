import Link from "next/link";
import { notFound } from "next/navigation";

import { adminSections } from "@/features/admin/admin-sections";

export default async function AdminSectionPage({ params }: { params: Promise<{ tenant: string; section: string }> }) {
  const { tenant, section } = await params;
  const definition = adminSections[section];
  if (!definition) notFound();
  const actionHref = section === "commercial" ? `/${tenant}/admin/commercial/leads/new` : `/${tenant}/admin/${section}`;
  return <main className="p-5 sm:p-8"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow">{definition.eyebrow}</p><h1 className="mt-2 text-3xl font-semibold tracking-tight">{definition.title}</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{definition.description}</p></div><Link href={actionHref} className="rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white">+ {definition.primaryAction}</Link></div>
    <section className="mt-8 grid gap-4 md:grid-cols-3">{definition.stats.map(([label,value,note]) => <article key={label} className="panel p-5"><p className="text-sm text-muted">{label}</p><p className="mt-3 text-2xl font-semibold">{value}</p><p className="mt-2 text-xs text-primary">{note}</p></article>)}</section>
    <section className="panel mt-7 overflow-hidden"><div className="flex items-center justify-between border-b p-5"><div><h2 className="font-semibold">Visão recente</h2><p className="mt-1 text-xs text-muted">Registros e pendências do módulo</p></div><button className="text-xs font-bold text-primary">Ver todos →</button></div><div className="divide-y">{definition.records.map(([title,detail,status]) => <div key={title} className="flex flex-col justify-between gap-2 p-5 sm:flex-row sm:items-center"><div><p className="text-sm font-semibold">{title}</p><p className="mt-1 text-xs text-muted">{detail}</p></div><span className="w-fit rounded-full bg-primary-50 px-3 py-1 text-[10px] font-bold text-primary">{status}</span></div>)}</div></section>
  </main>;
}
