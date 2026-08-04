import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Checkbox } from "./checkbox";

describe("Checkbox", () => {
  it("renders the label and toggles on click", async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(<Checkbox label="Accept terms" onCheckedChange={onCheckedChange} />);

    await user.click(screen.getByRole("checkbox", { name: "Accept terms" }));

    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it("starts checked when defaultChecked is set", () => {
    render(<Checkbox label="Accept terms" defaultChecked />);

    expect(screen.getByRole("checkbox", { name: "Accept terms" })).toBeChecked();
  });
});
