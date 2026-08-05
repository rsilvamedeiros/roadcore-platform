import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { getMockSessionKey } from "./mock-session";
import { LogoutButton } from "./logout-button";

const replace = vi.fn();
vi.mock("next/navigation", () => ({ useRouter: () => ({ replace }) }));

describe("LogoutButton", () => {
  beforeEach(() => {
    replace.mockClear();
    window.localStorage.clear();
  });

  it("clears the local session and returns to tenant login", async () => {
    const user = userEvent.setup();
    window.localStorage.setItem(getMockSessionKey("fogueiracaminhoes"), "mock-session");
    render(<LogoutButton tenant="fogueiracaminhoes" />);

    await user.click(screen.getByRole("button", { name: "Sair" }));

    expect(window.localStorage.getItem(getMockSessionKey("fogueiracaminhoes"))).toBeNull();
    expect(replace).toHaveBeenCalledWith("/fogueiracaminhoes/login");
  });
});
