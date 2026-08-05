import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";
import { getTenantTheme } from "@/lib/tenant-theme";

export default async function AuthLayout({ children, params }: { children: ReactNode; params: Promise<{ tenant: string }> }) {
  const { tenant } = await params;
  const theme = getTenantTheme(tenant);
  const logo = theme.logoSrcDark ?? theme.logoSrc;

  return <div className="grid min-h-screen bg-white lg:grid-cols-[1.05fr_.95fr]">
    <aside className="relative hidden min-h-screen overflow-hidden bg-[#111112] text-white lg:flex lg:flex-col">
      {theme.authBackgroundSrc && <Image src={theme.authBackgroundSrc} alt="" fill priority sizes="55vw" className="object-cover opacity-55" />}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_85%,color-mix(in_srgb,var(--primary)_35%,transparent),transparent_38%)]" />
      <div className="relative flex min-h-screen flex-col p-10 xl:p-14">
        <Link href={`/${tenant}`} aria-label={`Voltar para ${theme.name}`} className="w-fit">
          {logo ? <Image src={logo} alt={theme.name} width={250} height={70} priority className="h-14 w-auto object-contain" /> : <BrandLogo name={theme.name} inverted />}
        </Link>
        <div className="mt-auto max-w-xl pb-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.18em] text-white/75 backdrop-blur"><span className="h-1.5 w-1.5 rounded-full bg-primary" />Ambiente seguro</span>
          <blockquote className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-[-.04em] xl:text-5xl">Seu estoque, oportunidades e negociações em um só lugar.</blockquote>
          <p className="mt-5 max-w-lg text-sm leading-7 text-neutral-300">Acesse o ambiente comercial para acompanhar veículos, contatos e o andamento de cada negócio.</p>
          <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/15 pt-6 text-xs text-neutral-400"><span>✓ Dados protegidos</span><span>✓ Acesso individual</span><span>✓ Suporte especializado</span></div>
        </div>
      </div>
    </aside>
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[linear-gradient(145deg,#fff_0%,var(--surface)_100%)] px-5 py-24 sm:px-10">
      <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-primary-100/70 blur-3xl" />
      <Link href={`/${tenant}`} aria-label={`Voltar para ${theme.name}`} className="absolute left-6 top-6 z-10 lg:hidden">
        {theme.logoSrc ? <Image src={theme.logoSrc} alt={theme.name} width={210} height={55} priority className="h-11 w-auto object-contain" /> : <BrandLogo name={theme.name} />}
      </Link>
      <div className="relative w-full">{children}</div>
      <p className="absolute bottom-6 text-center text-[10px] text-muted">© {new Date().getFullYear()} {theme.name} · Ambiente protegido</p>
    </section>
  </div>;
}
