import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import CatalogPage from "./page";

describe("CatalogPage", () => {
  it("renders the listing grid linking to each listing's detail page", async () => {
    const ui = await CatalogPage({ params: Promise.resolve({ tenant: "default" }) });
    render(ui);

    expect(screen.getByRole("heading", { name: "Catalog" })).toBeInTheDocument();
    const articles = screen.getAllByRole("article");
    expect(articles.length).toBeGreaterThan(0);
    expect(articles[0].closest("a")).toHaveAttribute("href", "/default/catalog/1");
  });
});
