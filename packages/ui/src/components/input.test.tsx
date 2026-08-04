import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Input } from "./input";

describe("Input", () => {
  it("accepts typed text", async () => {
    const user = userEvent.setup();
    render(<Input aria-label="Company name" />);

    const input = screen.getByRole("textbox", { name: "Company name" });
    await user.type(input, "RoadCore");

    expect(input).toHaveValue("RoadCore");
  });

  it("is disabled when the disabled prop is set", () => {
    render(<Input aria-label="Company name" disabled />);

    expect(screen.getByRole("textbox", { name: "Company name" })).toBeDisabled();
  });
});
