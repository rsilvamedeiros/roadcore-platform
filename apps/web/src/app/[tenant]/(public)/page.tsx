import { buttonVariants } from "@roadcore/ui";
import Link from "next/link";
import { VehicleCard } from "@/features/marketplace/components/vehicle-card";
import { sampleListings } from "@/features/marketplace/sample-listings";

const benefits = [
  ["Curadoria de verdade", "Veículos vistoriados e histórico transparente para uma decisão segura."],
  ["Negociação assistida", "Especialistas acompanham você da proposta à entrega das chaves."],
  ["Tudo em um só lugar", "Financiamento, documentação, troca e logística sem complicação."],
];

export default async function HomePage({ params }: { params: Promise<{ tenant: string }> }) {
  const { tenant } = await params;
  return <main className="flex-1">
    <section className="relative overflow-hidden bg-[#08152e] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(59,130,246,.28),transparent_34%),radial-gradient(circle_at_10%_100%,rgba(29,78,216,.2),transparent_30%)]" />
      <div className="page-shell relative grid min-h-[610px] items-center gap-12 py-20 lg:grid-cols-[1.05fr_.95fr]">
        <div><p className="mb-5 text-xs font-semibold uppercase tracking-[.2em] text-blue-300">Negócios que movem o Brasil</p><h1 className="text-balance max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-.04em] sm:text-6xl lg:text-7xl">O veículo certo para o seu próximo caminho.</h1><p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">Compra, venda e gestão de veículos pesados com procedência, atendimento humano e tecnologia de ponta.</p><div className="mt-9 flex flex-wrap gap-3"><Link href={`/${tenant}/catalog`} className={buttonVariants("primary")}>Explorar estoque →</Link><Link href={`/${tenant}/contact`} className="inline-flex items-center rounded-md border border-white/25 px-4 py-2 text-sm font-semibold hover:bg-white/10">Quero vender meu veículo</Link></div></div>
        <div className="relative hidden lg:block"><div className="absolute -inset-8 rounded-full bg-blue-500/10 blur-3xl" /><div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur"><div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400/30 to-slate-950 text-blue-200"><svg viewBox="0 0 24 24" width="180" fill="none" stroke="currentColor" strokeWidth=".8"><path d="M3 16V7a1 1 0 0 1 1-1h9v10M3 16h1m0 0a2 2 0 1 0 4 0m-4 0h9m4 0h1a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-.29-.7L20 9h-4v7m0 0a2 2 0 1 0 4 0m-4 0h-3" /></svg></div><div className="mt-5 flex justify-between"><div><p className="text-xs text-slate-400">Destaque da semana</p><p className="mt-1 font-semibold">Volvo FH 540 6x4 · 2022</p></div><span className="h-fit rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-300">Disponível</span></div></div></div>
      </div>
    </section>
    <section className="border-b border-border bg-white"><div className="page-shell grid divide-y py-1 sm:grid-cols-3 sm:divide-x sm:divide-y-0">{[["+ 1.200","veículos negociados"],["18 anos","de experiência"],["4,9 / 5","avaliação dos clientes"]].map(([a,b])=><div key={b} className="px-6 py-7 text-center"><strong className="text-2xl text-primary-900">{a}</strong><p className="mt-1 text-xs uppercase tracking-wider text-muted">{b}</p></div>)}</div></section>
    <section className="page-shell py-20 sm:py-28"><div className="flex items-end justify-between gap-4"><div><p className="eyebrow">Seleção especial</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Oportunidades em destaque</h2><p className="mt-3 text-muted">Veículos selecionados pela nossa equipe, prontos para trabalhar.</p></div><Link href={`/${tenant}/catalog`} className="hidden text-sm font-semibold text-primary sm:block">Ver estoque completo →</Link></div><div className="mt-10 grid gap-6 md:grid-cols-3">{sampleListings.map(item=><Link key={item.id} href={`/${tenant}/catalog/${item.id}`}><VehicleCard listing={item} /></Link>)}</div></section>
    <section className="bg-surface"><div className="page-shell py-20 sm:py-24"><div className="max-w-xl"><p className="eyebrow">Por que escolher a gente</p><h2 className="mt-3 text-3xl font-semibold tracking-tight">Confiança em cada quilômetro.</h2></div><div className="mt-12 grid gap-6 md:grid-cols-3">{benefits.map(([title,copy],i)=><article key={title} className="panel p-7"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-sm font-bold text-primary">0{i+1}</span><h3 className="mt-6 text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted">{copy}</p></article>)}</div></div></section>
    <section className="page-shell py-20"><div className="overflow-hidden rounded-3xl bg-primary-800 px-7 py-12 text-white sm:px-14 sm:py-16"><div className="max-w-2xl"><p className="text-sm font-semibold text-primary-200">Tem um veículo para vender?</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Nós cuidamos de todo o caminho.</h2><p className="mt-4 text-primary-100">Avaliação justa, divulgação profissional e apoio documental.</p><Link href={`/${tenant}/contact`} className="mt-7 inline-flex rounded-md bg-white px-5 py-3 text-sm font-semibold text-primary-900">Solicitar avaliação gratuita</Link></div></div></section>
  </main>;
}
