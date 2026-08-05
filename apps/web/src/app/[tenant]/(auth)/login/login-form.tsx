"use client";

import { Button, Input } from "@roadcore/ui";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import { mockAccessProfiles } from "./mock-access";
import { saveMockSession } from "@/features/auth/mock-session";

export function LoginForm({ tenant }: { tenant: string }) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const showMockAccess = process.env.NODE_ENV !== "production";

  const openProfile = (username: string, profilePassword: string, destination: string) => {
    setIdentifier(username);
    setPassword(profilePassword);
    setError("");
    const profile = mockAccessProfiles.find((item) => item.username === username);
    if (profile) saveMockSession(tenant, { roleId: profile.roleId, name: profile.name, username: profile.username });
    router.push(`/${tenant}${destination}`);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!showMockAccess) return;
    const profile = mockAccessProfiles.find((item) => item.username === identifier.trim().toLowerCase() && item.password === password);
    if (!profile) {
      setError("Usuário ou senha de demonstração inválidos.");
      return;
    }
    saveMockSession(tenant, { roleId: profile.roleId, name: profile.name, username: profile.username });
    router.push(`/${tenant}${profile.destination}`);
  };

  return <>
    <form className="mt-8 flex flex-col gap-5" aria-label="Acesso à plataforma" onSubmit={handleSubmit}>
      <label className="text-sm font-semibold text-foreground">E-mail ou usuário
        <Input aria-label="E-mail ou usuário" name="identifier" type="text" autoComplete="username" placeholder="Digite seu e-mail ou usuário" required value={identifier} onChange={(event) => setIdentifier(event.target.value)} className="mt-2 min-h-12 bg-white" />
      </label>
      <label className="text-sm font-semibold text-foreground">Senha
        <span className="relative mt-2 block">
          <Input aria-label="Senha" name="password" type={showPassword ? "text" : "password"} autoComplete="current-password" placeholder="Digite sua senha" required value={password} onChange={(event) => setPassword(event.target.value)} className="min-h-12 bg-white pr-20" />
          <button type="button" onClick={() => setShowPassword((visible) => !visible)} aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"} className="absolute inset-y-0 right-3 my-auto h-fit text-xs font-bold text-primary transition hover:text-primary-700">{showPassword ? "Ocultar" : "Mostrar"}</button>
        </span>
      </label>
      <div className="flex items-center justify-between gap-4"><label className="flex cursor-pointer items-center gap-2 text-xs text-muted"><input type="checkbox" name="remember" className="h-4 w-4 rounded border-neutral-300 accent-primary" />Manter conectado</label><button type="button" className="text-xs font-bold text-primary transition hover:text-primary-700">Esqueci minha senha</button></div>
      {error && <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-xs font-medium text-red-700">{error}</p>}
      <Button variant="primary" type="submit" className="mt-1 min-h-12 w-full !font-bold" style={{ color: "#ffffff" }}>Entrar no ambiente <span aria-hidden="true">→</span></Button>
    </form>

    {showMockAccess && <details className="group mt-6 rounded-xl border border-dashed border-primary-200 bg-primary-50/40 px-4 py-3" open>
      <summary className="flex cursor-pointer list-none items-center justify-between text-xs font-bold text-foreground">Acessos locais de demonstração <span className="text-primary transition group-open:rotate-45">+</span></summary>
      <p className="mt-2 text-[10px] leading-4 text-muted">Clique em um perfil para entrar diretamente. Disponível apenas fora de produção.</p>
      <div className="mt-3 grid max-h-64 gap-2 overflow-y-auto pr-1">
        {mockAccessProfiles.map((profile) => <button key={profile.roleId} type="button" onClick={() => openProfile(profile.username, profile.password, profile.destination)} className="rounded-xl border bg-white p-3 text-left transition hover:border-primary hover:shadow-sm" aria-label={`Entrar como ${profile.name}`}><span className="flex items-center justify-between gap-3"><strong className="text-xs">{profile.name}</strong><span className="text-[10px] font-bold text-primary">Entrar →</span></span><span className="mt-2 grid grid-cols-2 gap-2 font-mono text-[10px] text-muted"><span>user: {profile.username}</span><span>senha: {profile.password}</span></span></button>)}
      </div>
    </details>}
  </>;
}
