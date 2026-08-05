import Link from "next/link";
import { adminRoleTemplates } from "@roadcore/auth";

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
      <LoginForm />
      <details className="group mt-6 rounded-xl border bg-surface px-4 py-3">
        <summary className="flex cursor-pointer list-none items-center justify-between text-xs font-bold text-foreground">Perfis de acesso configurados <span className="text-primary transition group-open:rotate-45">+</span></summary>
        <div className="mt-4 grid gap-3 border-t pt-4">
          {adminRoleTemplates.map((role) => <div key={role.id} className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary"/><div><p className="text-xs font-bold">{role.name}</p><p className="mt-1 text-[11px] leading-4 text-muted">{role.description}</p></div></div>)}
          <p className="mt-1 text-[10px] leading-4 text-muted">O perfil é vinculado à sua conta pelo administrador e não pode ser alterado nesta tela.</p>
        </div>
      </details>
      <div className="mt-7 border-t pt-6 text-center"><p className="text-xs leading-5 text-muted">Problemas para acessar? <Link href={`/${tenant}/contact`} className="font-bold text-primary">Fale com o suporte</Link></p></div>
    </div>
    <Link href={`/${tenant}`} className="mx-auto mt-6 flex w-fit items-center gap-2 text-xs font-semibold text-muted transition hover:text-foreground"><span aria-hidden="true">←</span> Voltar para o site</Link>
  </main>;
}
