import { Badge, buttonVariants } from "@roadcore/ui";
import Link from "next/link";

const pillars = [
  {
    title: "Marketplace",
    description: "Browse trucks, trailers, buses and heavy equipment from verified sellers.",
  },
  {
    title: "Freight & TMS",
    description: "Request quotes, dispatch trips and track deliveries end to end.",
  },
  {
    title: "Fleet & maintenance",
    description: "Keep vehicles, preventive plans and service orders under control.",
  },
  {
    title: "ERP",
    description: "Financial, purchasing and cost tracking connected to every operation.",
  },
];

interface HomePageProps {
  params: Promise<{ tenant: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { tenant } = await params;

  return (
    <main className="flex flex-1 flex-col">
      <section className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-24 text-center">
        <Badge variant="info">Marketplace · TMS · Fleet · ERP</Badge>
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Run your heavy asset business on one platform
        </h1>
        <p className="max-w-xl text-muted">
          Buy, sell and finance trucks, trailers and equipment. Dispatch freight, manage your
          fleet and keep the books straight — all in one place.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href={`/${tenant}/catalog`} className={buttonVariants("primary")}>
            Browse the catalog
          </Link>
          <Link href={`/${tenant}/login`} className={buttonVariants("secondary")}>
            Sign in
          </Link>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto grid max-w-5xl gap-6 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col gap-2 rounded-lg border border-border bg-surface-elevated p-6"
            >
              <h2 className="text-sm font-semibold text-foreground">{pillar.title}</h2>
              <p className="text-sm text-muted">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
