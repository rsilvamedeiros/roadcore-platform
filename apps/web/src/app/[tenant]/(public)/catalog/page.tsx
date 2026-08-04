import Link from "next/link";

import { VehicleCard } from "@/features/marketplace/components/vehicle-card";
import { sampleListings } from "@/features/marketplace/sample-listings";

interface CatalogPageProps {
  params: Promise<{ tenant: string }>;
}

export default async function CatalogPage({ params }: CatalogPageProps) {
  const { tenant } = await params;

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 px-6 py-16">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Catalog</h1>
        <p className="text-muted">
          Search and filters are not implemented yet — see docs/04-modules/marketplace.md.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sampleListings.map((listing) => (
          <Link key={listing.id} href={`/${tenant}/catalog/${listing.id}`}>
            <VehicleCard listing={listing} />
          </Link>
        ))}
      </div>
    </main>
  );
}
