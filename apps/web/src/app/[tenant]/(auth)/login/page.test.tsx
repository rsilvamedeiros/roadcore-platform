import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import LoginPage from "./page";

describe("LoginPage", () => {
  it("uses tenant identity and tenant-scoped links", async () => {
    render(await LoginPage({ params: Promise.resolve({ tenant: "fogueiracaminhoes" }) }));

    expect(screen.getByText(/ambiente da Fogueira Caminhões/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Fale com o suporte" })).toHaveAttribute("href", "/fogueiracaminhoes/contact");
    expect(screen.getByRole("link", { name: /Voltar para o site/ })).toHaveAttribute("href", "/fogueiracaminhoes");
    expect(screen.getByText("Administrador")).toBeInTheDocument();
    expect(screen.getByText("Gerência")).toBeInTheDocument();
    expect(screen.getByText("Comercial")).toBeInTheDocument();
    expect(screen.getByText("Estoque")).toBeInTheDocument();
    expect(screen.getByText("Financeiro")).toBeInTheDocument();
    expect(screen.getByText("Operações")).toBeInTheDocument();
    expect(screen.getByText("Frota")).toBeInTheDocument();
    expect(screen.getByText("Manutenção")).toBeInTheDocument();
    expect(screen.getByText("Motorista")).toBeInTheDocument();
  });
});
