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
    expect(screen.getByRole("link", { name: "Browse the catalog" })).toHaveAttribute(
      "href",
      "/default/catalog",
    );
    expect(screen.getByRole("link", { name: "Sign in" })).toHaveAttribute(
      "href",
      "/default/login",
    );
    expect(screen.getByText("Marketplace")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Featured listings" })).toBeInTheDocument();
    expect(screen.getAllByRole("article")).not.toHaveLength(0);
  });
});
