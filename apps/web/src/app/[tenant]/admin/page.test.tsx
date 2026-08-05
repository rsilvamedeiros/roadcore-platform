import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import AdminHomePage from "./page";

describe("AdminHomePage", () => {
  it("renders every administrative module for administrators", async () => {
    render(await AdminHomePage({ params: Promise.resolve({ tenant: "fogueiracaminhoes" }) }));

    expect(screen.getByRole("heading", { name: "Bom dia, administrador." })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Nova oportunidade/ })).toHaveAttribute("href", "/fogueiracaminhoes/admin/commercial/leads/new");
    expect(screen.getByRole("link", { name: /Usuários e acessos/ })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Configurações/ })).toBeInTheDocument();
  });
});
