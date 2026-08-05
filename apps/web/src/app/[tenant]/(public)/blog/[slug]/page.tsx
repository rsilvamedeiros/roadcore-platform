import Link from "next/link";
import { notFound } from "next/navigation";

import { blogPosts } from "@/features/marketplace/blog-posts";

export default async function BlogPostPage({ params }: { params: Promise<{ tenant: string; slug: string }> }) {
  const { tenant, slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  const related = blogPosts.filter((item) => item.slug !== slug).slice(0, 3);

  return <main className="flex-1 bg-white">
    <article>
      <header className="border-b bg-[#111112] text-white"><div className="page-shell max-w-4xl py-16 sm:py-24"><nav className="text-xs text-neutral-500"><Link href={`/${tenant}`}>Início</Link><span className="mx-2">/</span><Link href={`/${tenant}/blog`}>Conteúdos</Link></nav><p className="mt-10 text-xs font-bold uppercase tracking-[.18em] text-primary-400">{post.tag}</p><h1 className="mt-4 text-balance text-4xl font-semibold tracking-[-.04em] sm:text-6xl">{post.title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">{post.excerpt}</p><p className="mt-8 text-xs text-neutral-500">{post.readTime} · Atualizado em agosto de 2026</p></div></header>
      <div className="page-shell grid max-w-5xl gap-12 py-14 lg:grid-cols-[1fr_240px] lg:py-20"><div className="max-w-3xl"><p className="text-lg leading-8 text-muted">{post.intro}</p>{post.sections.map((section) => <section key={section.title} className="mt-10"><h2 className="text-2xl font-semibold tracking-tight">{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 leading-7 text-muted">{paragraph}</p>)}</section>)}<div className="mt-12 rounded-2xl bg-surface p-6"><p className="text-xs font-bold uppercase tracking-wider text-primary">Importante</p><p className="mt-3 text-sm leading-6 text-muted">Este conteúdo tem caráter informativo. Confirme requisitos técnicos, financeiros ou documentais com profissionais e órgãos responsáveis pelo seu caso.</p></div></div><aside className="h-fit rounded-2xl border p-5 lg:sticky lg:top-28"><p className="text-xs font-bold uppercase tracking-wider text-muted">Precisa de ajuda?</p><h2 className="mt-3 font-semibold">Converse com quem entende de veículos pesados.</h2><Link href={`/${tenant}/contact`} className="mt-5 inline-flex text-sm font-bold text-primary">Falar com especialista →</Link></aside></div>
    </article>
    <section className="border-t bg-surface"><div className="page-shell py-14"><div className="flex items-end justify-between"><h2 className="text-2xl font-semibold">Continue lendo</h2><Link href={`/${tenant}/blog`} className="text-sm font-bold text-primary">Ver todos →</Link></div><div className="mt-7 grid gap-4 md:grid-cols-3">{related.map((item) => <Link key={item.slug} href={`/${tenant}/blog/${item.slug}`} className="rounded-2xl border bg-white p-5 transition hover:border-primary"><span className="text-[10px] font-bold uppercase text-primary">{item.tag}</span><h3 className="mt-3 font-semibold leading-6">{item.title}</h3></Link>)}</div></div></section>
  </main>;
}
