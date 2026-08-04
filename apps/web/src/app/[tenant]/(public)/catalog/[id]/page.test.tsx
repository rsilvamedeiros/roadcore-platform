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
      params: Promise.resolve({ tenant: "default", id: "1" }),
    });
    render(ui);

    expect(
      screen.getByRole("heading", { name: "Heavy truck — sample listing" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Contact seller" })).toHaveAttribute(
      "href",
      "/default/contact",
    );
  });

  it("calls notFound for an unknown id", async () => {
    await expect(
      ListingPage({ params: Promise.resolve({ tenant: "default", id: "does-not-exist" }) }),
    ).rejects.toThrow("NEXT_NOT_FOUND");
  });
});
