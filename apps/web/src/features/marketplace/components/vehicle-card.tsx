import { Badge } from "@roadcore/ui";

export interface VehicleListing {
  id: string;
  title: string;
  priceInCents: number;
  location: string;
  status: "available" | "reserved" | "sold";
}

const statusLabel: Record<VehicleListing["status"], string> = {
  available: "Disponível",
  reserved: "Reservado",
  sold: "Vendido",
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
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-elevated transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-[0_18px_45px_rgba(0,0,0,.1)]">
      <div
        className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-[#202023] to-[#0d0d0e] text-primary-700 transition-colors group-hover:text-primary-500"
        aria-hidden="true"
      >
        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#171717] shadow-sm">Seminovo certificado</span>
        <svg viewBox="0 0 24 24" width="72" height="72" fill="none" stroke="currentColor" strokeWidth="1.25">
          <path
            d="M3 16V7a1 1 0 0 1 1-1h9v10M3 16h1m0 0a2 2 0 1 0 4 0m-4 0h9m4 0h1a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-.29-.7L20 9h-4v7m0 0a2 2 0 1 0 4 0m-4 0h-3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold text-foreground">{listing.title}</h3>
          <Badge variant={statusVariant[listing.status]}>{statusLabel[listing.status]}</Badge>
        </div>
        <p className="text-sm text-muted">2022 · Diesel · {listing.location}</p>
        <div className="mt-auto flex items-end justify-between border-t pt-4"><p className="text-lg font-bold text-foreground">
          {formatPrice(listing.priceInCents)}
        </p><span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#171717] text-white transition group-hover:bg-primary">↗</span></div>
      </div>
    </article>
  );
}
