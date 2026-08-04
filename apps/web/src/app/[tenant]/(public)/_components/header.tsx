"use client";

import { Drawer, buttonVariants } from "@roadcore/ui";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getTenantTheme } from "@/lib/tenant-theme";
import { BrandMark } from "./brand-mark";

export interface HeaderProps { tenant: string }

export function Header({ tenant }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const theme = getTenantTheme(tenant);
  const links = [
    { href: `/${tenant}`, label: "Início" },
    { href: `/${tenant}/catalog`, label: "Estoque" },
    { href: `/${tenant}/contact`, label: "Venda seu veículo" },
    { href: `/${tenant}/contact`, label: "Fale conosco" },
  ];
  const logo = theme.logoSrc ? <Image src={theme.logoSrc} alt="" width={38} height={38} className="h-10 w-10 rounded-xl object-cover" /> : <BrandMark />;

  return <>
    <div className="bg-primary-900 py-2 text-center text-xs font-medium text-primary-100">Atendimento especializado em veículos pesados · Seg a sex, 8h às 18h</div>
    <header className="sticky top-0 z-40 border-b border-border/80 bg-white/90 backdrop-blur-xl">
      <div className="page-shell flex h-[72px] items-center justify-between gap-5">
        <Link href={`/${tenant}`} className="flex items-center gap-3 font-semibold text-foreground">{logo}<span>{theme.name}</span></Link>
        <nav aria-label="Principal" className="hidden items-center gap-7 lg:flex">
          {links.map((item) => <Link key={item.label} href={item.href} className="text-sm font-medium text-muted transition hover:text-primary">{item.label}</Link>)}
        </nav>
        <div className="hidden items-center gap-3 sm:flex">
          <Link href={`/${tenant}/login`} className="text-sm font-semibold text-foreground hover:text-primary">Área do cliente</Link>
          <Link href={`/${tenant}/contact`} className={buttonVariants("primary")}>Solicitar atendimento</Link>
        </div>
        <div className="lg:hidden"><Drawer open={open} onOpenChange={setOpen} title="Navegação" trigger={<><svg viewBox="0 0 24 24" width="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h16M4 12h16M4 17h16" /></svg><span className="sr-only">Abrir menu</span></>}>
          <nav className="flex flex-col gap-5">{links.map(item => <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}<Link href={`/${tenant}/login`} onClick={() => setOpen(false)}>Área do cliente</Link></nav>
        </Drawer></div>
      </div>
    </header>
  </>;
}
