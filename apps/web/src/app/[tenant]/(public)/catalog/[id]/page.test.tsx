import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import ListingPage from "./page";

vi.mock("next/navigation", () => ({
  notFound: vi.fn(() => {
    throw new Error("NEXT_NOT_FOUND");
  }),
}));

describe("ListingPage", () => {
  it("renders the listing details for a known id", async () => {
    const ui = await ListingPage({
      params: Promise.resolve({ tenant: "fogueiracaminhoes", id: "vw-8-150-e-worker" }),
    });
    render(ui);

    expect(
      screen.getByRole("heading", { name: "Volkswagen 8-150 E Worker" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Tenho interesse neste veículo/ })).toHaveAttribute(
      "href",
      "/fogueiracaminhoes/contact",
    );
    expect(screen.getByRole("region", { name: /Galeria de fotos/ })).toBeInTheDocument();
  });

  it("calls notFound for an unknown id", async () => {
    await expect(
      ListingPage({ params: Promise.resolve({ tenant: "default", id: "does-not-exist" }) }),
    ).rejects.toThrow("NEXT_NOT_FOUND");
  });
});
