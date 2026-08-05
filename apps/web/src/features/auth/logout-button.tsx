"use client";

import { useRouter } from "next/navigation";

import { clearMockSession } from "./mock-session";

export function LogoutButton({ tenant, inverted = false }: { tenant: string; inverted?: boolean }) {
  const router = useRouter();

  if (process.env.NODE_ENV === "production") return null;

  return <button type="button" onClick={() => { clearMockSession(tenant); router.replace(`/${tenant}/login`); }} className={`rounded-lg px-3 py-2 text-xs font-bold transition ${inverted ? "border border-white/15 text-white hover:bg-white/10" : "border bg-white text-foreground hover:border-primary hover:text-primary"}`}>Sair</button>;
}
