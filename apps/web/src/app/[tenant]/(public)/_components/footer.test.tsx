import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Footer } from "./footer";

describe("Footer", () => {
  it("renders the current year and tenant-scoped navigation links", () => {
    render(<Footer tenant="default" />);

    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(`${year}.*RoadCore Platform`))).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Catalog" })).toHaveAttribute(
      "href",
      "/default/catalog",
    );
  });

  it("uses the tenant's own name when a theme override exists", () => {
    render(<Footer tenant="fogueiracaminhoes" />);

    expect(screen.getByText(/Fogueira Caminhões/)).toBeInTheDocument();
  });
});
