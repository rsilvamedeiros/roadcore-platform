import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Tabs } from "./tabs";

const items = [
  { value: "overview", label: "Overview", content: "Overview content" },
  { value: "history", label: "History", content: "History content" },
];

describe("Tabs", () => {
  it("switches content when a different tab is selected", async () => {
    const user = userEvent.setup();
    render(<Tabs items={items} />);

    expect(screen.getByText("Overview content")).toBeInTheDocument();

    await user.click(screen.getByRole("tab", { name: "History" }));

    expect(await screen.findByText("History content")).toBeInTheDocument();
  });
});
