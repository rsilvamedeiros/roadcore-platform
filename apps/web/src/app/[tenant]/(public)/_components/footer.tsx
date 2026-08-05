import Link from "next/link";
import Image from "next/image";
import { getTenantTheme } from "@/lib/tenant-theme";
import { BrandLogo } from "@/components/brand-logo";

export interface FooterProps { tenant: string }
export function Footer({ tenant }: FooterProps) {
  const theme = getTenantTheme(tenant);
  return <footer className="border-t-4 border-primary-600 bg-[#0c0c0d] text-white">
    <div className="page-shell grid gap-10 py-14 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
      <div>{theme.logoSrc ? <Image src={theme.logoSrcDark ?? theme.logoSrc} alt={theme.name} width={230} height={62} className="h-[62px] w-auto object-contain" /> : <BrandLogo name={theme.name} inverted />}<p className="mt-6 max-w-[340px] border-l-2 border-primary-600 pl-4 text-[15px] font-medium leading-7 tracking-[-.01em] text-neutral-300">Conectamos pessoas, veículos e operações para fazer <span className="text-white">negócios avançarem com segurança.</span></p></div>
      <div><h3 className="text-sm font-semibold">Marketplace</h3><div className="mt-4 flex flex-col gap-3 text-sm text-neutral-400 [&_a]:transition-colors [&_a:hover]:text-primary-400"><Link href={`/${tenant}/catalog`}>Caminhões e carretas</Link><Link href={`/${tenant}/dealers`}>Revendas verificadas</Link><Link href={`/${tenant}/parts`}>Peças e acessórios</Link><Link href={`/${tenant}/blog`}>Conteúdo</Link></div></div>
      <div><h3 className="text-sm font-semibold">Soluções</h3><div className="mt-4 flex flex-col gap-3 text-sm text-neutral-400 [&_a]:transition-colors [&_a:hover]:text-primary-400"><Link href={`/${tenant}/sell`}>Venda seu veículo</Link><Link href={`/${tenant}/financing`}>Financiamento</Link><Link href={`/${tenant}/freight`}>Fretes</Link><Link href={`/${tenant}/services`}>Serviços e manutenção</Link><Link href={`/${tenant}/advertise`}>Anuncie na plataforma</Link></div></div>
      <div><h3 className="text-sm font-semibold">Atendimento</h3><div className="mt-4 space-y-3 text-sm text-neutral-400"><p>(41) 3333-2026</p><p>contato@roadcore.com.br</p><p>Curitiba · Paraná</p></div></div>
    </div>
    <div className="border-t border-white/[.08] bg-black/20"><div className="page-shell flex flex-col gap-3 py-5 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} {theme.name}. Todos os direitos reservados.</span><div className="flex gap-5"><Link href={`/${tenant}/privacy`} className="transition hover:text-white">Privacidade</Link><Link href={`/${tenant}/terms`} className="transition hover:text-white">Termos de uso</Link><Link href={`/${tenant}/contact`} className="transition hover:text-white">Atendimento</Link></div></div></div>
  </footer>;
}
