import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { AdminSessionProfile } from "./admin-session-profile";
import { getMockSessionKey } from "./mock-session";

vi.mock("next/navigation", () => ({ useRouter: () => ({ replace: vi.fn() }) }));

describe("AdminSessionProfile", () => {
  it("shows the connected mock profile in the header control", () => {
    window.localStorage.setItem(getMockSessionKey("fogueiracaminhoes"), JSON.stringify({ roleId: "sales", name: "Comercial", username: "comercial" }));

    render(<AdminSessionProfile tenant="fogueiracaminhoes" />);

    expect(screen.getByText("Comercial")).toBeInTheDocument();
    expect(screen.getByText("@comercial")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Sair" })).toBeInTheDocument();
  });
});
