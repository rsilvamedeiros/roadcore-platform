"use client";

import { Button, Input } from "@roadcore/ui";
import { useState } from "react";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return <form className="mt-8 flex flex-col gap-5" aria-label="Acesso à plataforma">
    <label className="text-sm font-semibold text-foreground">E-mail
      <Input aria-label="E-mail" name="email" type="email" autoComplete="email" placeholder="seuemail@empresa.com.br" required className="mt-2 min-h-12 bg-white" />
    </label>
    <label className="text-sm font-semibold text-foreground">Senha
      <span className="relative mt-2 block">
        <Input aria-label="Senha" name="password" type={showPassword ? "text" : "password"} autoComplete="current-password" placeholder="Digite sua senha" required className="min-h-12 bg-white pr-20" />
        <button type="button" onClick={() => setShowPassword((visible) => !visible)} aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"} className="absolute inset-y-0 right-3 my-auto h-fit text-xs font-bold text-primary transition hover:text-primary-700">{showPassword ? "Ocultar" : "Mostrar"}</button>
      </span>
    </label>
    <div className="flex items-center justify-between gap-4">
      <label className="flex cursor-pointer items-center gap-2 text-xs text-muted"><input type="checkbox" name="remember" className="h-4 w-4 rounded border-neutral-300 accent-primary" />Manter conectado</label>
      <button type="button" className="text-xs font-bold text-primary transition hover:text-primary-700">Esqueci minha senha</button>
    </div>
    <Button variant="primary" type="submit" className="mt-1 min-h-12 w-full !font-bold" style={{ color: "#ffffff" }}>Entrar no ambiente <span aria-hidden="true">→</span></Button>
  </form>;
}
