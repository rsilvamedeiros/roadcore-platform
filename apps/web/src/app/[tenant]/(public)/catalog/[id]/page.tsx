import { Badge, buttonVariants } from "@roadcore/ui";
import Link from "next/link";
import { notFound } from "next/navigation";
import { VehicleCard } from "@/features/marketplace/components/vehicle-card";
import { VehicleGallery } from "@/features/marketplace/components/vehicle-gallery";
import { sampleListings } from "@/features/marketplace/sample-listings";

const labels = {
  available: "Disponível",
  reserved: "Reservado",
  sold: "Vendido",
} as const;
const variants = {
  available: "success",
  reserved: "warning",
  sold: "neutral",
} as const;
const dots = {
  available: "bg-emerald-500",
  reserved: "bg-amber-500",
  sold: "bg-neutral-500",
} as const;
const fallbackSpecs = [
  ["Quilometragem", "348.000 km"],
  ["Câmbio", "Automatizado"],
  ["Potência", "540 cv"],
  ["Tração", "6x4"],
  ["Implemento", "Cavalo mecânico"],
  ["Cor", "Branco"],
] as Array<[string, string]>;

export default async function ListingPage({
  params,
}: {
  params: Promise<{ tenant: string; id: string }>;
}) {
  const { tenant, id } = await params;
  const item = sampleListings.find((x) => x.id === id);
  if (!item) notFound();
  const price =
    item.priceInCents === null
      ? "Preço sob consulta"
      : new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(item.priceInCents / 100);
  const gallery = item.gallery ?? (item.imageSrc ? [item.imageSrc] : []);
  const specs = item.specs ?? fallbackSpecs;
  const related = sampleListings.filter((x) => x.id !== id).slice(0, 2);
  return (
    <main className="flex-1 bg-surface">
      <div className="page-shell py-8 sm:py-12">
        <nav className="flex items-center gap-2 text-xs text-muted">
          <Link href={`/${tenant}`}>Início</Link>
          <span>/</span>
          <Link href={`/${tenant}/catalog`}>Estoque</Link>
          <span>/</span>
          <span className="text-foreground">{item.title}</span>
        </nav>
        <div className="mt-7 grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
          <VehicleGallery
            images={gallery}
            title={item.title}
            notice={item.historyNotice ?? "Seminovo certificado"}
            noticeTone={item.historyStatus === "reported" ? "warning" : "neutral"}
          />
          <aside className="panel h-fit p-6 sm:p-8 lg:sticky lg:top-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Cód. RC-{2040 + sampleListings.indexOf(item)}
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight">
                  {item.title}
                </h1>
              </div>
              <Badge variant={variants[item.status]}>
                <span
                  className={`h-1.5 w-1.5 rounded-full ${dots[item.status]}`}
                />
                {labels[item.status]}
              </Badge>
            </div>
            <p className="mt-3 text-sm text-muted">
              {item.year ?? "2022"} · Diesel · {item.location}
            </p>
            <p className="mt-7 text-3xl font-bold">{price}</p>
            <p className="mt-1 text-xs text-muted">
              Consulte condições de pagamento e financiamento
            </p>
            <div className="mt-7 grid grid-cols-2 gap-4 border-y py-5">
              {specs.map(([a, b]) => (
                <div key={a}>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">
                    {a}
                  </p>
                  <p className="mt-1 text-sm font-semibold">{b}</p>
                </div>
              ))}
            </div>
            <Link
              href={`/${tenant}/contact`}
              className={`${buttonVariants("primary")} mt-7 w-full !text-white`}
            >
              Tenho interesse neste veículo →
            </Link>
            <Link
              href={`/${tenant}/financing`}
              className={`${buttonVariants("secondary")} mt-3 w-full`}
            >
              Simular financiamento
            </Link>
            <div className="mt-5 flex justify-center gap-5 text-[10px] text-muted">
              <span>✓ Compra segura</span>
              <span>✓ Suporte documental</span>
            </div>
          </aside>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
          <article className="panel p-7">
            <h2 className="text-xl font-semibold">Sobre este veículo</h2>
            <p className="mt-4 leading-7 text-muted">
              {item.description ??
                "Veículo selecionado pela equipe Fogueira Caminhões, com documentação disponível para conferência e atendimento especializado durante toda a negociação."}
            </p>
            {item.historyStatus === "reported" && (
              <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
                <strong className="block">Com sinistro informado</strong>
                Solicite à equipe os documentos e detalhes disponíveis antes de
                avançar na negociação.
              </div>
            )}
            <h3 className="mt-8 font-semibold">Destaques do anúncio</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {(
                item.features ?? [
                  "Procedência verificada",
                  "Atendimento especializado",
                ]
              ).map((x) => (
                <span
                  key={x}
                  className="rounded-lg bg-surface px-3 py-2 text-sm"
                >
                  ✓ {x}
                </span>
              ))}
            </div>
            <p className="mt-6 text-xs leading-5 text-muted">
              As informações estão sujeitas a confirmação. Consulte nossa equipe
              antes de concluir a negociação.
            </p>
          </article>
          <aside className="panel p-7">
            <p className="text-xs font-bold uppercase tracking-wider text-primary">
              Vendedor verificado
            </p>
            <h2 className="mt-3 text-xl font-semibold">Fogueira Caminhões</h2>
            <p className="mt-2 text-sm text-muted">
              Atendimento nacional · Responde rapidamente
            </p>
            <div className="mt-6 space-y-3 border-y py-5 text-sm">
              {[
                ["No portal desde", "2018"],
                ["Veículos anunciados", "24"],
                ["Avaliação", "4,9 / 5"],
              ].map(([a, b]) => (
                <div key={a} className="flex justify-between">
                  <span className="text-muted">{a}</span>
                  <strong>{b}</strong>
                </div>
              ))}
            </div>
            <Link
              href={`/${tenant}/contact`}
              className="mt-6 inline-flex text-sm font-bold text-primary"
            >
              Falar com a revenda →
            </Link>
          </aside>
        </div>
        <section className="py-16">
          <div className="flex items-end justify-between">
            <div>
              <p className="eyebrow">Você também pode gostar</p>
              <h2 className="mt-2 text-3xl font-semibold">
                Veículos semelhantes
              </h2>
            </div>
            <Link
              href={`/${tenant}/catalog`}
              className="text-sm font-bold text-primary"
            >
              Ver todo estoque →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:max-w-4xl">
            {related.map((x) => (
              <Link key={x.id} href={`/${tenant}/catalog/${x.id}`}>
                <VehicleCard listing={x} />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
