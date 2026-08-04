import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Switch } from "./switch";

describe("Switch", () => {
  it("renders the label and toggles on click", async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(<Switch label="Enable feature" onCheckedChange={onCheckedChange} />);

    await user.click(screen.getByRole("checkbox", { name: "Enable feature" }));

    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });
});
