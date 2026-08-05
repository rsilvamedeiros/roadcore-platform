import Link from "next/link";

const areas = [
  ["Páginas", "Textos, seções controladas, SEO e preview."],
  ["Publicações", "Artigos, categorias, capas e agendamento."],
  ["Mídia", "Imagens, documentos, textos alternativos e recortes."],
  ["Campanhas", "Banners, posições, períodos e chamadas."],
  ["Navegação", "Menus, subitens, ordem e visibilidade."],
  ["Configurações", "Contato público, redes sociais, rodapé e SEO padrão."],
];

export default function ContentAdminPage() {
  return <main className="p-5 sm:p-8"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow">Presença digital</p><h1 className="mt-2 text-3xl font-semibold tracking-tight">Conteúdo do site</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-muted">Administre o conteúdo público por tenant com rascunhos, versões, preview e publicação controlada.</p></div><Link href="/cms" className="rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white">Abrir editor de conteúdo →</Link></div>
    <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{areas.map(([title, description], index) => <article key={title} className="panel p-5"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-xs font-black text-primary">0{index + 1}</span><h2 className="mt-5 font-semibold">{title}</h2><p className="mt-2 text-sm leading-6 text-muted">{description}</p></article>)}</section>
    <section className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5"><p className="text-xs font-bold uppercase tracking-wider text-amber-900">Configuração inicial</p><p className="mt-2 text-sm leading-6 text-amber-950">Na primeira abertura, crie o usuário editorial administrador e o tenant <strong>fogueiracaminhoes</strong>. O CMS exige PostgreSQL e as variáveis <code>DATABASE_URL</code> e <code>PAYLOAD_SECRET</code>.</p></section>
  </main>;
}
