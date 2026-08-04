import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { VehicleCard } from "./vehicle-card";
import type { VehicleListing } from "./vehicle-card";

const listing: VehicleListing = {
  id: "1",
  title: "Heavy truck — sample listing",
  priceInCents: 32000000,
  location: "Sample city, ST",
  status: "available",
};

describe("VehicleCard", () => {
  it("renders the listing title, formatted price, location and status", () => {
    render(<VehicleCard listing={listing} />);

    expect(screen.getByText("Heavy truck — sample listing")).toBeInTheDocument();
    expect(screen.getByText("Sample city, ST")).toBeInTheDocument();
    expect(screen.getByText("Available")).toBeInTheDocument();
    expect(screen.getByText(/R\$\s*320\.000,00/)).toBeInTheDocument();
  });
});
