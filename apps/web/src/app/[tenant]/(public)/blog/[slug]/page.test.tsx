import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import BlogPostPage from "./page";

vi.mock("next/navigation", () => ({
  notFound: vi.fn(() => { throw new Error("NEXT_NOT_FOUND"); }),
}));

describe("BlogPostPage", () => {
  it("renders a known article", async () => {
    render(await BlogPostPage({ params: Promise.resolve({ tenant: "fogueiracaminhoes", slug: "como-escolher-caminhao-usado" }) }));
    expect(screen.getByRole("heading", { name: "Como escolher um caminhão usado sem cair em armadilhas" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Falar com especialista →" })).toHaveAttribute("href", "/fogueiracaminhoes/contact");
  });

  it("returns not found for an unknown article", async () => {
    await expect(BlogPostPage({ params: Promise.resolve({ tenant: "fogueiracaminhoes", slug: "unknown" }) })).rejects.toThrow("NEXT_NOT_FOUND");
  });
});
