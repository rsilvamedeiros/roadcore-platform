import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Popover } from "./popover";

describe("Popover", () => {
  it("opens its content on trigger click", async () => {
    const user = userEvent.setup();
    render(
      <Popover trigger="Driver info" title="Driver">
        License valid until 2027.
      </Popover>,
    );

    await user.click(screen.getByRole("button", { name: "Driver info" }));

    expect(await screen.findByText("License valid until 2027.")).toBeInTheDocument();
  });
});
