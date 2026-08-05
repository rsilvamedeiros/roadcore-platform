import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { LoginForm } from "./login-form";

const push = vi.fn();
vi.mock("next/navigation", () => ({ useRouter: () => ({ push }) }));

describe("LoginForm", () => {
  it("renders accessible login fields", () => {
    render(<LoginForm tenant="fogueiracaminhoes" />);

    expect(screen.getByRole("textbox", { name: "E-mail ou usuário" })).toHaveAttribute("autocomplete", "username");
    expect(screen.getByLabelText("Senha")).toHaveAttribute("type", "password");
    expect(screen.getByRole("button", { name: /Entrar no ambiente/ })).toBeInTheDocument();
  });

  it("toggles password visibility", async () => {
    const user = userEvent.setup();
    render(<LoginForm tenant="fogueiracaminhoes" />);

    await user.click(screen.getByRole("button", { name: "Mostrar senha" }));
    expect(screen.getByLabelText("Senha")).toHaveAttribute("type", "text");
    expect(screen.getByRole("button", { name: "Ocultar senha" })).toBeInTheDocument();
  });

  it("opens a local profile directly with visible mock credentials", async () => {
    const user = userEvent.setup();
    render(<LoginForm tenant="fogueiracaminhoes" />);

    expect(screen.getByText("user: admin")).toBeInTheDocument();
    expect(screen.getByText("senha: admin123")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Entrar como Administrador" }));

    expect(push).toHaveBeenCalledWith("/fogueiracaminhoes/admin");
    expect(window.localStorage.getItem("roadcore:mock-session:fogueiracaminhoes")).toContain('"roleId":"administrator"');
  });
});
