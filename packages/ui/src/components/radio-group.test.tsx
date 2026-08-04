import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { RadioGroup } from "./radio-group";

const options = [
  { label: "Owned", value: "owned" },
  { label: "Leased", value: "leased" },
];

describe("RadioGroup", () => {
  it("selects an option on click", async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(<RadioGroup label="Ownership" options={options} onValueChange={onValueChange} />);

    await user.click(screen.getByRole("radio", { name: "Leased" }));

    expect(onValueChange).toHaveBeenCalledWith("leased");
  });
});
