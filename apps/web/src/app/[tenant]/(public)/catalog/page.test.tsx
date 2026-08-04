import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import CatalogPage from "./page";

describe("CatalogPage", () => {
  it("renders the listing grid", () => {
    render(<CatalogPage />);

    expect(screen.getByRole("heading", { name: "Catalog" })).toBeInTheDocument();
    expect(screen.getAllByRole("article").length).toBeGreaterThan(0);
  });
});
