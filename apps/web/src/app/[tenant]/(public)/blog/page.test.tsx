import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import BlogPage from "./page";

describe("BlogPage", () => {
  it("links every editorial card to its article", async () => {
    render(await BlogPage({ params: Promise.resolve({ tenant: "fogueiracaminhoes" }) }));

    expect(screen.getAllByRole("article")).toHaveLength(6);
    expect(screen.getAllByRole("link", { name: "Ler conteúdo →" })[0]).toHaveAttribute(
      "href",
      "/fogueiracaminhoes/blog/como-escolher-caminhao-usado",
    );
  });
});
