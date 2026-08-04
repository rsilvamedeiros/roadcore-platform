import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Drawer } from "./dialog";

describe("Drawer", () => {
  it("opens on trigger click", async () => {
    const user = userEvent.setup();
    render(
      <Drawer trigger="Details" title="Trip details">
        Trip content
      </Drawer>,
    );

    await user.click(screen.getByRole("button", { name: "Details" }));

    expect(await screen.findByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Trip details")).toBeInTheDocument();
  });
});
