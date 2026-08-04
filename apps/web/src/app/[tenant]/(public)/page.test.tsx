import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import HomePage from "./page";

describe("HomePage", () => {
  it("renders the hero content and the tenant-scoped calls to action", async () => {
    const ui = await HomePage({ params: Promise.resolve({ tenant: "default" }) });
    render(ui);

    expect(
      screen.getByRole("heading", { name: "Run your heavy asset business on one platform" }),
    ).toBeInTheDocument();

    const catalogLinks = screen.getAllByRole("link", { name: "Browse the catalog" });
    expect(catalogLinks.length).toBeGreaterThan(0);
    for (const link of catalogLinks) {
      expect(link).toHaveAttribute("href", "/default/catalog");
    }

    const signInLinks = screen.getAllByRole("link", { name: "Sign in" });
    expect(signInLinks.length).toBeGreaterThan(0);
    for (const link of signInLinks) {
      expect(link).toHaveAttribute("href", "/default/login");
    }

    expect(screen.getByText("Marketplace")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Featured listings" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "How it works" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Ready to get started?" })).toBeInTheDocument();
    expect(screen.getAllByRole("article")).not.toHaveLength(0);
  });
});
