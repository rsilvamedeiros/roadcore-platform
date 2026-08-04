"use client";

import { Drawer, buttonVariants } from "@roadcore/ui";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getTenantTheme } from "@/lib/tenant-theme";
import { BrandLogo } from "@/components/brand-logo";

export interface HeaderProps { tenant: string }

export function Header({ tenant }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const theme = getTenantTheme(tenant);
  const links = [
    { href: `/${tenant}`, label: "Início" },
    { href: `/${tenant}/catalog`, label: "Veículos" },
    { href: `/${tenant}/sell`, label: "Venda seu veículo" },
    { href: `/${tenant}/financing`, label: "Financiamento" },
    { href: `/${tenant}/freight`, label: "Fretes" },
    { href: `/${tenant}/about`, label: "A empresa" },
    { href: `/${tenant}/advertise`, label: "Anuncie" },
  ];
  const logo = theme.logoSrc ? <Image src={theme.logoSrc} alt={theme.name} width={190} height={52} priority className="h-[52px] w-auto max-w-[180px] object-contain sm:max-w-[205px]" /> : <BrandLogo name={theme.name} />;

  return <>
    <div className="bg-[#111112] py-2 text-center text-[11px] font-medium text-slate-400"><span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-primary align-middle"/>Atendimento especializado em veículos pesados · Seg a sex, 8h às 18h</div>
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/95 shadow-[0_1px_12px_rgba(0,0,0,.04)] backdrop-blur-xl">
      <div className="page-shell flex h-[80px] items-center justify-between gap-5">
        <Link href={`/${tenant}`} className="flex items-center gap-3 text-foreground" aria-label={theme.name}>{logo}</Link>
        <nav aria-label="Principal" className="hidden items-center gap-5 xl:flex">
          {links.map((item) => <Link key={item.label} href={item.href} className="relative py-7 text-[13px] font-semibold text-[#4b4b4b] transition after:absolute after:inset-x-0 after:bottom-4 after:h-0.5 after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:text-black hover:after:scale-x-100">{item.label}</Link>)}
        </nav>
        <div className="hidden items-center gap-4 sm:flex">
          <div className="hidden border-r pr-4 text-right xl:block"><p className="text-[9px] font-bold uppercase tracking-wider text-muted">Central de vendas</p><p className="mt-0.5 text-xs font-bold text-foreground">(41) 3333-2026</p></div>
          <Link href={`/${tenant}/login`} className="text-[13px] font-semibold text-foreground hover:text-primary">Entrar</Link>
          <Link href={`/${tenant}/contact`} className={buttonVariants("primary", "min-h-11 rounded-xl px-5 py-2 text-[13px] !text-white")}>Falar com especialista <span aria-hidden="true" className="ml-2">→</span></Link>
        </div>
        <div className="xl:hidden"><Drawer open={open} onOpenChange={setOpen} title="Navegação" trigger={<><svg viewBox="0 0 24 24" width="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h16M4 12h16M4 17h16" /></svg><span className="sr-only">Abrir menu</span></>}>
          <nav className="flex flex-col gap-5">{links.map(item => <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}<Link href={`/${tenant}/login`} onClick={() => setOpen(false)}>Área do cliente</Link></nav>
        </Drawer></div>
      </div>
    </header>
  </>;
}
