import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ContactPage from "./page";

describe("ContactPage", () => {
  it("renders the contact form", () => {
    render(<ContactPage />);

    expect(screen.getByRole("heading", { name: "Get in touch" })).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("E-mail")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Message")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Send message" })).toBeInTheDocument();
  });
});
