import { Badge } from "@roadcore/ui";

export interface VehicleListing {
  id: string;
  title: string;
  priceInCents: number;
  location: string;
  status: "available" | "reserved" | "sold";
}

const statusLabel: Record<VehicleListing["status"], string> = {
  available: "Available",
  reserved: "Reserved",
  sold: "Sold",
};

const statusVariant: Record<VehicleListing["status"], "success" | "warning" | "neutral"> = {
  available: "success",
  reserved: "warning",
  sold: "neutral",
};

function formatPrice(cents: number) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    cents / 100,
  );
}

export function VehicleCard({ listing }: { listing: VehicleListing }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-border bg-surface-elevated">
      <div
        className="flex aspect-[4/3] items-center justify-center bg-surface text-muted"
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path
            d="M3 16V7a1 1 0 0 1 1-1h9v10M3 16h1m0 0a2 2 0 1 0 4 0m-4 0h9m4 0h1a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-.29-.7L20 9h-4v7m0 0a2 2 0 1 0 4 0m-4 0h-3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold text-foreground">{listing.title}</h3>
          <Badge variant={statusVariant[listing.status]}>{statusLabel[listing.status]}</Badge>
        </div>
        <p className="text-sm text-muted">{listing.location}</p>
        <p className="mt-auto text-base font-semibold text-foreground">
          {formatPrice(listing.priceInCents)}
        </p>
      </div>
    </article>
  );
}
