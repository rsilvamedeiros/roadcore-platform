import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import AdminNewLeadPage from "./page";

describe("AdminNewLeadPage", () => {
  it("renders the lead form fields", () => {
    render(<AdminNewLeadPage />);

    expect(screen.getByRole("heading", { name: "New lead" })).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Company name")).toBeInTheDocument();
    expect(screen.getByRole("combobox", { name: "Asset type" })).toBeInTheDocument();
    expect(screen.getByText("I agree to be contacted")).toBeInTheDocument();
    expect(screen.getByText("Notify sales team")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Save lead" })).toBeInTheDocument();
  });
});
