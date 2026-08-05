import Link from "next/link";

import { blogPosts } from "@/features/marketplace/blog-posts";

export default async function BlogPage({ params }: { params: Promise<{ tenant: string }> }) {
  const { tenant } = await params;
  return <main className="flex-1">
    <section className="border-b bg-surface"><div className="page-shell py-16 sm:py-20"><p className="eyebrow">Conteúdo para a estrada</p><h1 className="mt-3 max-w-3xl text-5xl font-semibold tracking-[-.04em]">Conhecimento para decidir e operar melhor.</h1><p className="mt-5 max-w-2xl leading-7 text-muted">Guias práticos sobre compra, financiamento, manutenção e gestão de veículos pesados.</p></div></section>
    <section className="page-shell py-16"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{blogPosts.map((post, index) => <article key={post.slug} className="group flex flex-col overflow-hidden rounded-2xl border bg-white"><div className={`relative aspect-[16/8] overflow-hidden ${index % 2 ? "bg-[#171717]" : "bg-gradient-to-br from-primary-700 to-[#171717]"}`}><span className="absolute bottom-4 left-5 text-5xl font-black text-white/[.08]">0{index + 1}</span></div><div className="flex flex-1 flex-col p-6"><div className="flex items-center justify-between gap-3"><span className="text-[10px] font-bold uppercase tracking-wider text-primary">{post.tag}</span><span className="text-[10px] text-muted">{post.readTime}</span></div><h2 className="mt-3 text-xl font-semibold leading-7 transition group-hover:text-primary">{post.title}</h2><p className="mt-3 text-sm leading-6 text-muted">{post.excerpt}</p><Link href={`/${tenant}/blog/${post.slug}`} className="mt-auto pt-6 text-sm font-bold">Ler conteúdo →</Link></div></article>)}</div></section>
  </main>;
}
