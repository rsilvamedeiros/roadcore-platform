import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Tooltip } from "./tooltip";

describe("Tooltip", () => {
  it("shows its content on hover", async () => {
    const user = userEvent.setup();
    render(<Tooltip content="Vehicle documents are up to date">Status</Tooltip>);

    await user.hover(screen.getByRole("button", { name: "Status" }));

    expect(await screen.findByText("Vehicle documents are up to date")).toBeInTheDocument();
  });
});
