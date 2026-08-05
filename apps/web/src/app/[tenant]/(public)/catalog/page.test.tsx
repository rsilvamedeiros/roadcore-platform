import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import CatalogPage from "./page";

describe("CatalogPage", () => {
  it("renders the listing grid linking to each listing's detail page", async () => {
    const ui = await CatalogPage({ params: Promise.resolve({ tenant: "fogueiracaminhoes" }) });
    render(ui);

    expect(screen.getByRole("heading", { name: "Encontre seu próximo veículo" })).toBeInTheDocument();
    const articles = screen.getAllByRole("article");
    expect(articles.length).toBeGreaterThan(0);
    expect(articles[0].closest("a")).toHaveAttribute("href", "/fogueiracaminhoes/catalog/vw-8-150-e-worker");
  });

  it("renders an actionable empty state for a category without inventory", async () => {
    const ui = await CatalogPage({
      params: Promise.resolve({ tenant: "fogueiracaminhoes" }),
      searchParams: Promise.resolve({ category: "carretas" }),
    });
    render(ui);

    expect(screen.getByRole("heading", { name: "Carretas" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Nenhum veículo encontrado" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Limpar filtros" })).toHaveAttribute("href", "/fogueiracaminhoes/catalog");
  });
});
