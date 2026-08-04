import { Badge, buttonVariants } from "@roadcore/ui";
import Link from "next/link";
import { notFound } from "next/navigation";

import { sampleListings } from "@/features/marketplace/sample-listings";

const statusLabel = {
  available: "Available",
  reserved: "Reserved",
  sold: "Sold",
} as const;

const statusVariant = {
  available: "success",
  reserved: "warning",
  sold: "neutral",
} as const;

function formatPrice(cents: number) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    cents / 100,
  );
}

interface ListingPageProps {
  params: Promise<{ tenant: string; id: string }>;
}

export default async function ListingPage({ params }: ListingPageProps) {
  const { tenant, id } = await params;
  const listing = sampleListings.find((item) => item.id === id);

  if (!listing) {
    notFound();
  }

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-6 py-16 sm:py-20">
      <Link href={`/${tenant}/catalog`} className="text-sm text-muted hover:text-foreground">
        ← Back to catalog
      </Link>

      <div className="grid gap-8 lg:grid-cols-[3fr_2fr]">
        <div
          className="flex aspect-video items-center justify-center rounded-lg bg-surface text-muted"
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path
              d="M3 16V7a1 1 0 0 1 1-1h9v10M3 16h1m0 0a2 2 0 1 0 4 0m-4 0h9m4 0h1a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-.29-.7L20 9h-4v7m0 0a2 2 0 1 0 4 0m-4 0h-3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-start justify-between gap-3">
            <h1 className="text-2xl font-semibold text-foreground">{listing.title}</h1>
            <Badge variant={statusVariant[listing.status]}>{statusLabel[listing.status]}</Badge>
          </div>
          <p className="text-muted">{listing.location}</p>
          <p className="text-3xl font-semibold text-foreground">
            {formatPrice(listing.priceInCents)}
          </p>
          <p className="text-sm text-muted">
            Placeholder listing — no real inventory data yet, see
            docs/04-modules/marketplace.md.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href={`/${tenant}/contact`} className={buttonVariants("primary")}>
              Contact seller
            </Link>
            <Link href={`/${tenant}/catalog`} className={buttonVariants("secondary")}>
              View more listings
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
