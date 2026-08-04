import { Badge, buttonVariants } from "@roadcore/ui";
import Link from "next/link";

import { VehicleCard } from "@/features/marketplace/components/vehicle-card";
import { sampleListings } from "@/features/marketplace/sample-listings";

import { ErpIcon, FleetIcon, FreightIcon, MarketplaceIcon } from "./_components/icons";

const pillars = [
  {
    title: "Marketplace",
    description: "Browse trucks, trailers, buses and heavy equipment from verified sellers.",
    Icon: MarketplaceIcon,
  },
  {
    title: "Freight & TMS",
    description: "Request quotes, dispatch trips and track deliveries end to end.",
    Icon: FreightIcon,
  },
  {
    title: "Fleet & maintenance",
    description: "Keep vehicles, preventive plans and service orders under control.",
    Icon: FleetIcon,
  },
  {
    title: "ERP",
    description: "Financial, purchasing and cost tracking connected to every operation.",
    Icon: ErpIcon,
  },
];

const steps = [
  {
    title: "Browse the catalog",
    description: "Filter by asset type, condition and location across verified listings.",
  },
  {
    title: "Request a quote",
    description: "Talk to the seller or request a freight quote directly from the listing.",
  },
  {
    title: "Get matched",
    description: "The sales team confirms availability, terms and financing options.",
  },
  {
    title: "Close the deal",
    description: "Finish the paperwork and take delivery — all tracked in one place.",
  },
];

interface HomePageProps {
  params: Promise<{ tenant: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { tenant } = await params;

  return (
    <main className="flex flex-1 flex-col">
      <section className="bg-gradient-to-b from-primary-50 to-background">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-20 text-center sm:py-28">
          <Badge variant="info">Marketplace · TMS · Fleet · ERP</Badge>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            Run your heavy asset business on one platform
          </h1>
          <p className="max-w-xl text-base text-muted sm:text-lg">
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
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-foreground">Featured listings</h2>
              <p className="mt-1 text-sm text-muted">A sample of what buyers find in the catalog.</p>
            </div>
            <Link
              href={`/${tenant}/catalog`}
              className="shrink-0 text-sm font-medium text-primary hover:underline"
            >
              View all →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sampleListings.map((listing) => (
              <VehicleCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-semibold text-foreground">One platform, every operation</h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-muted">
              Each module works on its own or together, so you only turn on what you need.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ title, description, Icon }) => (
              <div
                key={title}
                className="flex flex-col gap-3 rounded-lg border border-border bg-surface-elevated p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-100 text-primary-700">
                  <Icon />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{title}</h3>
                <p className="text-sm text-muted">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-semibold text-foreground">How it works</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-primary-900">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-16 text-center sm:py-20">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Ready to get started?</h2>
          <p className="max-w-xl text-sm text-primary-100">
            Browse the catalog or sign in to manage your listings, freight and fleet.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href={`/${tenant}/catalog`} className={buttonVariants("primary")}>
              Browse the catalog
            </Link>
            <Link
              href={`/${tenant}/login`}
              className="inline-flex items-center justify-center rounded-md border border-primary-100/40 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-800"
            >
              Sign in
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
