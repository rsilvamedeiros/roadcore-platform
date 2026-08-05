import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ContentAdminPage from "./page";

describe("ContentAdminPage", () => {
  it("links the RoadCore content module to Payload CMS", () => {
    render(<ContentAdminPage />);

    expect(screen.getByRole("heading", { name: "Conteúdo do site" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Abrir editor de conteúdo/ })).toHaveAttribute("href", "/cms");
    expect(screen.getAllByRole("article")).toHaveLength(6);
  });
});
