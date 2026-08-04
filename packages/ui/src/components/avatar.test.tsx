import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Avatar } from "./avatar";

describe("Avatar", () => {
  it("renders the fallback initials when there is no image", () => {
    render(<Avatar alt="Jane Doe" fallback="JD" />);

    expect(screen.getByText("JD")).toBeInTheDocument();
  });
});
