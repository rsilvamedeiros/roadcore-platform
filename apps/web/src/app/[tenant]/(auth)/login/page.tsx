import Link from "next/link";

import { getTenantTheme } from "@/lib/tenant-theme";

import { LoginForm } from "./login-form";

export default async function LoginPage({ params }: { params: Promise<{ tenant: string }> }) {
  const { tenant } = await params;
  const theme = getTenantTheme(tenant);

  return <main className="mx-auto w-full max-w-[460px]">
    <div className="rounded-[28px] border border-black/[.07] bg-white p-7 shadow-[0_28px_80px_-36px_rgba(0,0,0,.28)] sm:p-10">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary" aria-hidden="true"><svg viewBox="0 0 24 24" width="21" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v2"/></svg></div>
      <p className="mt-7 text-xs font-bold uppercase tracking-[.18em] text-primary">Área administrativa</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-[-.035em] sm:text-4xl">Bem-vindo de volta.</h1>
      <p className="mt-3 text-sm leading-6 text-muted">Entre com seus dados para acessar o ambiente da {theme.name}.</p>
      <LoginForm tenant={tenant} />
      <div className="mt-7 border-t pt-6 text-center"><p className="text-xs leading-5 text-muted">Problemas para acessar? <Link href={`/${tenant}/contact`} className="font-bold text-primary">Fale com o suporte</Link></p></div>
    </div>
    <Link href={`/${tenant}`} className="mx-auto mt-6 flex w-fit items-center gap-2 text-xs font-semibold text-muted transition hover:text-foreground"><span aria-hidden="true">←</span> Voltar para o site</Link>
  </main>;
}
