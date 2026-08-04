import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Header } from "./header";

describe("Header", () => {
  it("renders the brand and the desktop navigation links", () => {
    render(<Header />);

    expect(screen.getByRole("link", { name: "RoadCore" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: "Catalog" })).toHaveAttribute("href", "/catalog");
    expect(screen.getByRole("link", { name: "Login" })).toHaveAttribute("href", "/login");
  });

  it("opens the mobile menu in a drawer and closes it when a link is clicked", async () => {
    const user = userEvent.setup();
    render(<Header />);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Open menu" }));

    const drawer = await screen.findByRole("dialog");
    expect(within(drawer).getByRole("link", { name: "Catalog" })).toHaveAttribute(
      "href",
      "/catalog",
    );

    await user.click(within(drawer).getByRole("link", { name: "Catalog" }));

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
