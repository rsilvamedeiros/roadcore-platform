import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Select } from "./select";

const options = [
  { label: "Truck", value: "truck" },
  { label: "Trailer", value: "trailer" },
];

describe("Select", () => {
  it("opens and selects an option", async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(
      <Select
        label="Asset type"
        options={options}
        placeholder="Choose one"
        onValueChange={onValueChange}
      />,
    );

    await user.click(screen.getByRole("combobox", { name: "Asset type" }));
    await user.click(await screen.findByRole("option", { name: "Trailer" }));

    expect(onValueChange).toHaveBeenCalledWith("trailer");
  });
});
