import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import DriverPortalPage from "./page";

describe("DriverPortalPage", () => {
  it("renders only driver journey actions", async () => {
    render(await DriverPortalPage({ params: Promise.resolve({ tenant: "fogueiracaminhoes" }) }));

    expect(screen.getByRole("heading", { name: "Sua jornada de hoje" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Checklist/ })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Entrega/ })).toBeInTheDocument();
    expect(screen.queryByText("Usuários e acessos")).not.toBeInTheDocument();
  });
});
