import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import HomePage from "./page";

describe("HomePage", () => {
  it("renders the platform name and the @roadcore/ui components", () => {
    render(<HomePage />);

    expect(screen.getByRole("heading", { name: "RoadCore Platform" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Request a quote" })).toBeInTheDocument();
    expect(screen.getByText("Notify me")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Company name")).toBeInTheDocument();
    expect(screen.getByRole("combobox", { name: "Asset type" })).toBeInTheDocument();
    expect(screen.getByText("I agree to be contacted")).toBeInTheDocument();
  });
});
