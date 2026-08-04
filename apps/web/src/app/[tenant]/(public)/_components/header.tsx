"use client";

import { Drawer, buttonVariants } from "@roadcore/ui";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { getTenantTheme } from "@/lib/tenant-theme";

export interface HeaderProps { tenant: string }

interface MenuItem {
  label: string;
  href: string;
  description?: string;
}

interface MenuGroup extends MenuItem {
  children?: MenuItem[];
}

export function Header({ tenant }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const theme = getTenantTheme(tenant);
  const route = (path = "") => `/${tenant}${path}`;
  const menu: MenuGroup[] = [
    { label: "Início", href: route() },
    {
      label: "Veículos",
      href: route("/catalog"),
      children: [
        { label: "Estoque completo", href: route("/catalog"), description: "Todos os veículos disponíveis" },
        { label: "Caminhões", href: route("/catalog?category=caminhoes"), description: "Leves, médios e pesados" },
        { label: "Carretas", href: route("/catalog?category=carretas"), description: "Implementos para sua operação" },
        { label: "Máquinas", href: route("/catalog?category=maquinas"), description: "Equipamentos selecionados" },
      ],
    },
    {
      label: "Venda seu veículo",
      href: route("/sell"),
      children: [
        { label: "Quero vender", href: route("/sell"), description: "Envie os dados do seu veículo" },
        { label: "Avaliação especializada", href: route("/evaluation"), description: "Descubra o valor de mercado" },
        { label: "Venda em consignação", href: route("/consignment"), description: "Nós cuidamos da negociação" },
      ],
    },
    {
      label: "Soluções",
      href: route("/services"),
      children: [
        { label: "Financiamento", href: route("/financing"), description: "Crédito para o próximo negócio" },
        { label: "Fretes", href: route("/freight"), description: "Conecte carga e transporte" },
        { label: "Peças e serviços", href: route("/parts"), description: "Parceiros para manter a operação" },
        { label: "Revendas", href: route("/dealers"), description: "Rede de empresas verificadas" },
      ],
    },
    {
      label: "A empresa",
      href: route("/about"),
      children: [
        { label: "Sobre a Fogueira", href: route("/about"), description: "Nossa história e nosso jeito" },
        { label: "Conteúdos", href: route("/blog"), description: "Informação para quem vive a estrada" },
        { label: "Fale conosco", href: route("/contact"), description: "Atendimento próximo e direto" },
        { label: "Anuncie sua marca", href: route("/advertise"), description: "Publicidade para o setor pesado" },
      ],
    },
  ];

  const logo = theme.logoSrc
    ? <Image src={theme.logoSrc} alt={theme.name} width={230} height={55} priority className="h-auto w-[190px] object-contain sm:w-[220px]" />
    : <BrandLogo name={theme.name} />;

  const isActive = (item: MenuGroup) => pathname === item.href || item.children?.some(child => pathname === child.href.split("?")[0]);

  return <>
    <div className="bg-[#111112] py-2 text-center text-[11px] font-medium tracking-[.015em] text-slate-400"><span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-primary align-middle"/>Atendimento especializado em veículos pesados · Seg a sex, 8h às 18h</div>
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/95 shadow-[0_1px_12px_rgba(0,0,0,.04)] backdrop-blur-xl">
      <div className="mx-auto flex h-[88px] w-full max-w-[1440px] items-center justify-between gap-7 px-5 sm:px-8 lg:px-10">
        <Link href={route()} className="flex shrink-0 items-center text-foreground" aria-label={theme.name}>{logo}</Link>

        <nav aria-label="Principal" className="hidden flex-1 items-stretch justify-center self-stretch xl:flex">
          {menu.map(item => <div key={item.label} className="group relative flex items-center">
            <Link href={item.href} className={`relative flex h-full items-center gap-1.5 px-3 [font-family:var(--font-header-nav)] text-[16px] font-semibold tracking-[.015em] transition-colors after:absolute after:inset-x-3 after:bottom-0 after:h-[3px] after:origin-center after:rounded-t-full after:bg-primary after:transition-transform ${isActive(item) ? "text-[#111112] after:scale-x-100" : "text-neutral-600 after:scale-x-0 hover:text-[#111112] group-hover:after:scale-x-100"}`}>
              {item.label}
              {item.children && <svg aria-hidden="true" viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" className="transition-transform duration-200 group-hover:rotate-180"><path d="m4 6 4 4 4-4"/></svg>}
            </Link>
            {item.children && <div className="pointer-events-none absolute left-1/2 top-[calc(100%-8px)] w-[300px] -translate-x-1/2 translate-y-2 rounded-2xl border border-black/10 bg-white p-2 opacity-0 shadow-[0_24px_60px_-18px_rgba(0,0,0,.3)] transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="mb-1 border-b px-3 py-2 text-[9px] font-black uppercase tracking-[.17em] text-primary">{item.label}</div>
              {item.children.map(child => <Link key={child.label} href={child.href} className="group/item flex rounded-xl px-3 py-3 transition hover:bg-neutral-50">
                <span className="min-w-0"><strong className="block text-[13px] font-bold tracking-[-.01em] text-[#202022] group-hover/item:text-primary">{child.label}</strong><span className="mt-1 block text-[11px] leading-4 text-neutral-500">{child.description}</span></span>
                <span className="ml-auto pl-3 text-neutral-300 transition group-hover/item:translate-x-0.5 group-hover/item:text-primary">→</span>
              </Link>)}
            </div>}
          </div>)}
        </nav>

        <div className="hidden shrink-0 items-center gap-4 sm:flex">
          <Link href={route("/login")} className="text-[13px] font-bold tracking-[-.01em] text-foreground transition hover:text-primary">Entrar</Link>
          <Link href={route("/contact")} className={buttonVariants("primary", "min-h-11 rounded-xl px-5 py-2 text-[13px] !font-bold !text-white")}>Falar com especialista <span aria-hidden="true" className="ml-2">→</span></Link>
        </div>

        <div className="xl:hidden"><Drawer open={open} onOpenChange={setOpen} title="Navegação" trigger={<><svg viewBox="0 0 24 24" width="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h16M4 12h16M4 17h16" /></svg><span className="sr-only">Abrir menu</span></>}>
          <nav className="flex flex-col gap-7">{menu.map(item => <div key={item.label}><Link href={item.href} onClick={() => setOpen(false)} className="text-base font-bold">{item.label}</Link>{item.children && <div className="mt-3 grid gap-3 border-l-2 border-primary-100 pl-4">{item.children.map(child => <Link key={child.label} href={child.href} onClick={() => setOpen(false)} className="text-sm text-neutral-600">{child.label}</Link>)}</div>}</div>)}<Link href={route("/login")} onClick={() => setOpen(false)} className="font-bold">Área do cliente</Link></nav>
        </Drawer></div>
      </div>
    </header>
  </>;
}
