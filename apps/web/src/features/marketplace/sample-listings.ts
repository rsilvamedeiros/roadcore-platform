import type { VehicleListing } from "./components/vehicle-card";

/**
 * Placeholder data — no inventory/database module exists yet
 * (docs/04-modules/marketplace.md, docs/04-modules/assets.md).
 * Replace once the assets module ships; keep tenant-neutral until then.
 */
export const sampleListings: VehicleListing[] = [
  {
    id: "1",
    title: "Heavy truck — sample listing",
    priceInCents: 32000000,
    location: "Sample city, ST",
    status: "available",
  },
  {
    id: "2",
    title: "Trailer — sample listing",
    priceInCents: 8500000,
    location: "Sample city, ST",
    status: "available",
  },
  {
    id: "3",
    title: "Bus — sample listing",
    priceInCents: 45000000,
    location: "Sample city, ST",
    status: "reserved",
  },
];
