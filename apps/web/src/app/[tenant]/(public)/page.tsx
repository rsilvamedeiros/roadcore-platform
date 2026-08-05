import Link from "next/link";
import Image from "next/image";
import { VehicleCard } from "@/features/marketplace/components/vehicle-card";
import { sampleListings } from "@/features/marketplace/sample-listings";
import { MarketplaceExpansion } from "./_components/marketplace-expansion";

const categories = [
  ["Caminhões", "Rodoviários, urbanos e vocacionais", "truck"],
  ["Carretas", "Baú, graneleira, prancha e mais", "trailer"],
  ["Ônibus", "Rodoviários e urbanos selecionados", "bus"],
  ["Máquinas", "Equipamentos prontos para produzir", "machine"],
];
const services = [
  [
    "Venda seu veículo",
    "Avaliação justa, anúncio profissional e compradores qualificados.",
    "sell",
  ],
  [
    "Financie sua compra",
    "Condições comparadas e suporte em toda a análise de crédito.",
    "financing",
  ],
  [
    "Transporte com segurança",
    "Cotação e acompanhamento da origem até a entrega.",
    "freight",
  ],
];
const brands = [
  "Volvo",
  "Scania",
  "Mercedes-Benz",
  "Volkswagen",
  "DAF",
  "Iveco",
  "Randon",
  "Facchini",
];
const popularSearches = [
  "Cavalo mecânico 6x4",
  "Caminhão truck",
  "Carreta graneleira",
  "Caminhão baú",
  "Bitrem",
  "Caminhão basculante",
];

function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="transition-transform group-hover:translate-x-1"
    >
      →
    </span>
  );
}
function AssetIcon({ type }: { type: string }) {
  if (type === "trailer")
    return (
      <svg
        viewBox="0 0 64 32"
        width="180"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M4 6h43v17H4zM47 13h8l5 6v4H47M13 23a4 4 0 1 0 8 0m25 0a4 4 0 1 0 8 0M4 23h9m8 0h25" />
      </svg>
    );
  if (type === "bus")
    return (
      <svg
        viewBox="0 0 64 32"
        width="180"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M7 25V8c0-3 2-5 5-5h38c4 0 7 3 7 7v15M7 19h50M14 8h35v7H14zM13 25a4 4 0 1 0 8 0m25 0a4 4 0 1 0 8 0M21 25h25" />
      </svg>
    );
  if (type === "machine")
    return (
      <svg
        viewBox="0 0 64 32"
        width="180"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M9 23h38l8 5H13L5 24V11h11l6 12M16 11l7-8h12l5 20M45 10h8v13M27 8h6v7h-6z" />
      </svg>
    );
  return (
    <svg
      viewBox="0 0 64 32"
      width="180"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M4 23V5h34v18M38 12h12l9 8v3M12 23a4 4 0 1 0 8 0m29 0a4 4 0 1 0 8 0M20 23h29M4 23h8M43 16h10" />
    </svg>
  );
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ tenant: string }>;
}) {
  const { tenant } = await params;
  return (
    <main className="flex-1 bg-white">
      <section className="relative overflow-hidden bg-[#0b0b0c] text-white">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute -right-28 top-10 h-[520px] w-[520px] rounded-full bg-primary-700/20 blur-[120px]" />
        <div className="page-shell relative grid min-h-[690px] items-center gap-14 py-20 lg:grid-cols-[1.05fr_.95fr]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[.16em] text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
              Especialistas em veículos pesados
            </div>
            <h1 className="mt-7 text-balance text-5xl font-semibold leading-[1.02] tracking-[-.055em] sm:text-6xl lg:text-[76px]">
              Potência para quem{" "}
              <span className="text-primary-500">faz acontecer.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
              Encontre, venda e financie veículos pesados com procedência
              comprovada e atendimento de quem entende a estrada.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href={`/${tenant}/catalog`}
                className="group inline-flex min-h-13 items-center gap-3 rounded-xl bg-primary-600 px-6 py-3 text-sm font-bold text-white shadow-[0_12px_32px_rgba(207,23,23,.3)] transition hover:-translate-y-0.5 hover:bg-primary-500"
              >
                Ver veículos disponíveis <Arrow />
              </Link>
              <Link
                href={`/${tenant}/sell`}
                className="inline-flex min-h-13 items-center rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold transition hover:border-white/40 hover:bg-white/10"
              >
                Quero vender meu veículo
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-slate-500">
              <span>✓ Vistoria e procedência</span>
              <span>✓ Financiamento personalizado</span>
              <span>✓ Atendimento nacional</span>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="relative ml-auto max-w-[520px] rotate-[1.5deg] rounded-[32px] border border-white/10 bg-[#151517] p-3 shadow-2xl">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
                <Image
                  src="/tenants/fogueiracaminhoes/vehicles/ford-cargo-2428e/01.jpg"
                  alt="Ford Cargo 2428e disponível na Fogueira Caminhões"
                  fill
                  priority
                  sizes="520px"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-primary-600 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white">
                  Destaque
                </span>
              </div>
              <div className="flex justify-end p-5">
                <Link
                  href={`/${tenant}/catalog/ford-cargo-2428e`}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition hover:bg-primary hover:text-white"
                >
                  ↗
                </Link>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-8 rounded-2xl border border-white/10 bg-black/80 px-5 py-4 backdrop-blur">
              <strong className="text-xl">4,9</strong>
              <span className="ml-2 text-sm text-yellow-400">★★★★★</span>
              <p className="mt-1 text-[10px] text-slate-500">
                Avaliação dos nossos clientes
              </p>
            </div>
          </div>
        </div>
        <div className="page-shell relative -mb-px">
          <form className="grid gap-3 rounded-t-2xl border border-white/10 bg-white p-4 text-foreground shadow-2xl sm:grid-cols-[1.6fr_1fr_1fr_auto]">
            <label className="rounded-xl bg-surface px-4 py-3">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-muted">
                O que você procura?
              </span>
              <input
                className="mt-1 w-full bg-transparent text-sm outline-none"
                placeholder="Marca, modelo ou palavra-chave"
              />
            </label>
            <label className="rounded-xl bg-surface px-4 py-3">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-muted">
                Categoria
              </span>
              <select className="mt-1 w-full bg-transparent text-sm outline-none">
                <option>Todos os veículos</option>
                <option>Caminhões</option>
                <option>Carretas</option>
              </select>
            </label>
            <label className="rounded-xl bg-surface px-4 py-3">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-muted">
                Faixa de preço
              </span>
              <select className="mt-1 w-full bg-transparent text-sm outline-none">
                <option>Qualquer valor</option>
                <option>Até R$ 300 mil</option>
                <option>Acima de R$ 500 mil</option>
              </select>
            </label>
            <button className="rounded-xl bg-[#171717] px-7 py-3 text-sm font-bold text-white transition hover:bg-primary-600">
              Buscar veículos
            </button>
          </form>
        </div>
      </section>

      <section className="border-b">
        <div className="page-shell grid grid-cols-2 py-7 sm:grid-cols-4">
          {[
            ["+1.200", "negócios realizados"],
            ["18 anos", "de mercado"],
            ["26 estados", "atendidos"],
            ["98%", "recomendam a RoadCore"],
          ].map(([a, b], i) => (
            <div key={b} className={`px-4 py-3 ${i ? "sm:border-l" : ""}`}>
              <strong className="text-2xl tracking-tight sm:text-3xl">
                {a}
              </strong>
              <p className="mt-1 text-xs text-muted">{b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-shell py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow">Comece pela categoria</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-.035em]">
            Máquinas que movem negócios.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(([title, copy, type], i) => (
            <Link
              key={title}
              href={`/${tenant}/catalog?type=${type}`}
              className="group relative min-h-64 overflow-hidden rounded-2xl bg-[#171717] p-6 text-white"
            >
              <div className="absolute -bottom-1 -right-10 text-primary-500/25 transition duration-500 group-hover:-translate-x-2 group-hover:scale-105 group-hover:text-primary-500/55">
                <AssetIcon type={type} />
              </div>
              <span className="text-xs text-slate-500">0{i + 1}</span>
              <h3 className="mt-24 text-xl font-semibold">{title}</h3>
              <p className="relative z-10 mt-2 max-w-[170px] text-xs leading-5 text-slate-400">
                {copy}
              </p>
              <span className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition group-hover:border-primary group-hover:bg-primary">
                ↗
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#f5f5f3]">
        <div className="page-shell py-20 sm:py-28">
          <div className="flex items-end justify-between">
            <div>
              <p className="eyebrow">Escolhas da semana</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-.035em]">
                Prontos para a estrada.
              </h2>
            </div>
            <Link
              href={`/${tenant}/catalog`}
              className="group hidden items-center gap-2 text-sm font-bold sm:flex"
            >
              Ver estoque completo <Arrow />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {sampleListings.map((item) => (
              <Link key={item.id} href={`/${tenant}/catalog/${item.id}`}>
                <VehicleCard listing={item} />
              </Link>
            ))}
          </div>
          <Link
            href={`/${tenant}/catalog`}
            className="mt-8 flex min-h-12 items-center justify-center rounded-xl border border-black/15 text-sm font-bold sm:hidden"
          >
            Ver estoque completo
          </Link>
        </div>
      </section>

      <section className="overflow-hidden bg-[#111112] text-white">
        <div className="page-shell grid gap-12 py-20 lg:grid-cols-[1.05fr_.95fr] lg:py-28">
          <div className="self-center">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-primary-400">
              Especialistas em veículos pesados
            </p>
            <h2 className="mt-5 text-balance text-4xl font-black uppercase leading-[1.02] tracking-[-.045em] sm:text-5xl lg:text-6xl">
              Compra e venda de{" "}
              <span className="text-primary-500">caminhões usados</span> e
              seminovos.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-neutral-400">
              Para quem quer comprar com procedência ou vender pelo melhor
              valor. Conectamos seu próximo negócio a uma rede nacional de
              compradores, lojistas e transportadores.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/${tenant}/catalog`}
                className="inline-flex min-h-12 items-center rounded-xl bg-primary-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-primary-500"
              >
                Quero comprar um caminhão →
              </Link>
              <Link
                href={`/${tenant}/sell`}
                className="inline-flex min-h-12 items-center rounded-xl border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Quero vender meu caminhão
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[.04] p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[.16em] text-neutral-500">
              Receba oportunidades
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">
              Não encontrou o modelo ideal?
            </h3>
            <p className="mt-2 text-sm leading-6 text-neutral-400">
              Conte o que procura e avisaremos quando uma oportunidade
              compatível entrar no estoque.
            </p>
            <form className="mt-7 grid gap-3">
              <input
                aria-label="Nome"
                placeholder="Seu nome"
                className="h-12 rounded-xl border border-white/10 bg-white/[.06] px-4 text-sm text-white outline-none placeholder:text-neutral-600 focus:border-primary"
              />
              <input
                aria-label="WhatsApp"
                placeholder="WhatsApp com DDD"
                className="h-12 rounded-xl border border-white/10 bg-white/[.06] px-4 text-sm text-white outline-none placeholder:text-neutral-600 focus:border-primary"
              />
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  aria-label="Marca"
                  placeholder="Marca desejada"
                  className="h-12 rounded-xl border border-white/10 bg-white/[.06] px-4 text-sm text-white outline-none placeholder:text-neutral-600 focus:border-primary"
                />
                <input
                  aria-label="Modelo"
                  placeholder="Modelo / configuração"
                  className="h-12 rounded-xl border border-white/10 bg-white/[.06] px-4 text-sm text-white outline-none placeholder:text-neutral-600 focus:border-primary"
                />
              </div>
              <button className="mt-1 h-12 rounded-xl bg-white text-sm font-bold text-[#171717] transition hover:bg-primary hover:text-white">
                Cadastrar meu interesse
              </button>
              <p className="text-center text-[10px] text-neutral-600">
                Sem spam. Somente oportunidades compatíveis com sua busca.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="border-b bg-white">
        <div className="page-shell py-16 sm:py-20">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Encontre pela marca</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                As mais procuradas da estrada.
              </h2>
            </div>
            <Link
              href={`/${tenant}/catalog`}
              className="text-sm font-bold text-primary"
            >
              Todas as marcas →
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {brands.map((brand) => (
              <Link
                key={brand}
                href={`/${tenant}/catalog?brand=${encodeURIComponent(brand)}`}
                className="group flex h-20 items-center justify-center rounded-xl border bg-white px-3 text-center text-xs font-black uppercase tracking-tight text-neutral-500 transition hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-lg"
              >
                {brand}
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="mr-2 text-xs font-semibold text-muted">
              Buscas populares:
            </span>
            {popularSearches.map((search) => (
              <Link
                key={search}
                href={`/${tenant}/catalog?q=${encodeURIComponent(search)}`}
                className="rounded-full bg-surface px-3 py-2 text-xs font-medium text-neutral-600 transition hover:bg-primary-50 hover:text-primary"
              >
                {search}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">Soluções completas</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-.035em]">
              Do primeiro contato à chave na mão.
            </h2>
            <p className="mt-5 max-w-md leading-7 text-muted">
              Nossa equipe cuida dos detalhes para você focar no que realmente
              importa: fazer o seu negócio avançar.
            </p>
          </div>
          <div className="divide-y border-y">
            {services.map(([title, copy, route], i) => (
              <Link
                key={title}
                href={`/${tenant}/${route}`}
                className="group grid gap-4 py-8 sm:grid-cols-[60px_1fr_auto] sm:items-center"
              >
                <span className="text-sm font-bold text-primary">0{i + 1}</span>
                <div>
                  <h3 className="text-xl font-semibold transition group-hover:text-primary">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{copy}</p>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border transition group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111112] text-white">
        <div className="page-shell grid gap-12 py-20 lg:grid-cols-[1fr_1.1fr] lg:py-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-primary-400">
              Quem já fez negócio
            </p>
            <blockquote className="mt-6 text-balance text-3xl font-medium leading-tight tracking-[-.03em] sm:text-4xl">
              “Atendimento transparente do início ao fim. Encontramos o caminhão
              certo e recebemos tudo pronto para rodar.”
            </blockquote>
            <div className="mt-8">
              <strong className="text-sm">Carlos Mendes</strong>
              <p className="mt-1 text-xs text-slate-500">
                Transportadora Horizonte · Paraná
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10">
            {[
              ["4,9/5", "nota média"],
              ["48h", "tempo médio de retorno"],
              ["92%", "compram novamente"],
              ["100%", "suporte documental"],
            ].map(([a, b]) => (
              <div key={b} className="bg-[#171719] p-7 sm:p-9">
                <strong className="text-3xl text-primary-500">{a}</strong>
                <p className="mt-2 text-xs text-slate-500">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="page-shell grid gap-12 py-20 lg:grid-cols-[.85fr_1.15fr] lg:py-24">
          <div>
            <p className="eyebrow">Dúvidas frequentes</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-.035em]">
              Informação para negociar melhor.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-muted">
              Respostas diretas para as principais dúvidas de quem compra ou
              vende veículos pesados.
            </p>
            <Link
              href={`/${tenant}/contact`}
              className="mt-7 inline-flex text-sm font-bold text-primary"
            >
              Ainda tem dúvidas? Fale conosco →
            </Link>
          </div>
          <div className="divide-y border-y">
            {[
              [
                "Os caminhões passam por vistoria?",
                "Sim. Avaliamos condições mecânicas, documentação e histórico antes da publicação.",
              ],
              [
                "Posso usar meu caminhão na troca?",
                "Sim. Fazemos uma avaliação de mercado e o veículo pode compor a entrada da negociação.",
              ],
              [
                "Vocês oferecem financiamento?",
                "Trabalhamos com instituições parceiras e buscamos condições para pessoa física ou jurídica.",
              ],
              [
                "Atendem clientes de outros estados?",
                "Sim. Atendemos em todo o Brasil e apoiamos também a logística de entrega.",
              ],
            ].map(([q, a]) => (
              <details key={q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  <span>{q}</span>
                  <span className="text-xl text-primary transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pt-3 text-sm leading-6 text-muted">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-20">
        <div className="relative overflow-hidden rounded-[28px] bg-primary-600 px-7 py-14 text-white sm:px-14 sm:py-16">
          <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full border-[70px] border-white/5" />
          <div className="relative max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-primary-100">
              Pronto para negociar?
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              Seu próximo grande negócio começa aqui.
            </h2>
            <p className="mt-5 text-primary-100">
              Fale com um especialista e descubra o melhor caminho para comprar
              ou vender.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/${tenant}/contact`}
                className="inline-flex min-h-12 items-center rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#171717] transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Falar com especialista →
              </Link>
              <Link
                href={`/${tenant}/catalog`}
                className="inline-flex min-h-12 items-center rounded-xl border border-white/30 px-6 py-3 text-sm font-bold hover:bg-white/10"
              >
                Explorar veículos
              </Link>
            </div>
          </div>
        </div>
      </section>
      <MarketplaceExpansion tenant={tenant} />
    </main>
  );
}
