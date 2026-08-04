import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import PublicLayout from "./layout";

describe("PublicLayout", () => {
  it("renders the header, the page content and the footer", () => {
    render(
      <PublicLayout>
        <main>Page content</main>
      </PublicLayout>,
    );

    expect(screen.getByRole("link", { name: "RoadCore" })).toBeInTheDocument();
    expect(screen.getByText("Page content")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
