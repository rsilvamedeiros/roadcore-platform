import Link from "next/link";
import { getTenantTheme } from "@/lib/tenant-theme";
import { BrandLogo } from "@/components/brand-logo";

export interface FooterProps { tenant: string }
export function Footer({ tenant }: FooterProps) {
  const theme = getTenantTheme(tenant);
  return <footer className="bg-[#08152e] text-white">
    <div className="page-shell grid gap-10 py-14 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
      <div><BrandLogo name={theme.name} inverted /><p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">Conectamos pessoas, veículos e operações para fazer negócios avançarem com segurança.</p></div>
      <div><h3 className="text-sm font-semibold">Encontre seu veículo</h3><div className="mt-4 flex flex-col gap-3 text-sm text-slate-400"><Link href={`/${tenant}/catalog`}>Caminhões</Link><Link href={`/${tenant}/catalog`}>Carretas</Link><Link href={`/${tenant}/catalog`}>Ônibus</Link></div></div>
      <div><h3 className="text-sm font-semibold">Serviços</h3><div className="mt-4 flex flex-col gap-3 text-sm text-slate-400"><Link href={`/${tenant}/sell`}>Venda seu veículo</Link><Link href={`/${tenant}/financing`}>Financiamento</Link><Link href={`/${tenant}/freight`}>Fretes</Link></div></div>
      <div><h3 className="text-sm font-semibold">Atendimento</h3><div className="mt-4 space-y-3 text-sm text-slate-400"><p>(41) 3333-2026</p><p>contato@roadcore.com.br</p><p>Curitiba · Paraná</p></div></div>
    </div>
    <div className="border-t border-white/10"><div className="page-shell flex flex-col gap-2 py-5 text-xs text-slate-500 sm:flex-row sm:justify-between"><span>© {new Date().getFullYear()} {theme.name}. Todos os direitos reservados.</span><span>Privacidade · Termos de uso</span></div></div>
  </footer>;
}
