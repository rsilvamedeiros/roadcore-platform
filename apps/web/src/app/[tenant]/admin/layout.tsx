import { accessScreens } from "@roadcore/auth";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";
import { getTenantTheme } from "@/lib/tenant-theme";
import { AdminSessionProfile } from "@/features/auth/admin-session-profile";

export default async function AdminLayout({ children, params }: { children: ReactNode; params: Promise<{ tenant: string }> }) {
  const { tenant } = await params;
  const theme = getTenantTheme(tenant);
  const screens = accessScreens.filter((screen) => screen.surface === "admin");

  return <div className="min-h-screen bg-[#f6f6f7] lg:grid lg:grid-cols-[260px_1fr]">
    <aside className="hidden border-r border-white/10 bg-[#111112] p-5 text-white lg:flex lg:flex-col">
      <Link href={`/${tenant}/admin`} className="border-b border-white/10 px-2 pb-6">{theme.logoSrcDark ? <Image src={theme.logoSrcDark} alt={theme.name} width={210} height={50} className="h-11 w-auto object-contain"/> : <BrandLogo name={theme.name} inverted/>}</Link>
      <nav className="mt-6 space-y-1" aria-label="Administração">{screens.map((screen) => <Link key={screen.id} href={`/${tenant}${screen.path}`} className="group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-neutral-400 transition hover:bg-white/[.07] hover:text-white"><span>{screen.name}</span><span className="opacity-0 transition group-hover:opacity-100">→</span></Link>)}</nav>
    </aside>
    <div className="min-w-0"><header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-white/95 px-5 backdrop-blur sm:px-8"><div><p className="text-[10px] font-bold uppercase tracking-wider text-muted">Painel administrativo</p><p className="text-sm font-semibold">{theme.name}</p></div><div className="flex items-center gap-3"><Link href={`/${tenant}`} className="hidden text-xs font-semibold text-muted md:block">Ver site ↗</Link><AdminSessionProfile tenant={tenant}/></div></header>{children}</div>
  </div>;
}
