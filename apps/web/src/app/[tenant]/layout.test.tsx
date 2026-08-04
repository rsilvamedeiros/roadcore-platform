import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import TenantLayout from "./layout";

describe("TenantLayout", () => {
  it("does not override core colors for the default tenant", async () => {
    const ui = await TenantLayout({
      children: <div>content</div>,
      params: Promise.resolve({ tenant: "default" }),
    });
    const { container } = render(ui);

    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper.style.getPropertyValue("--primary")).toBe("");
  });

  it("applies the tenant's color override", async () => {
    const ui = await TenantLayout({
      children: <div>content</div>,
      params: Promise.resolve({ tenant: "fogueiracaminhoes" }),
    });
    const { container } = render(ui);

    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper.style.getPropertyValue("--primary")).toBe("#c11a1a");
  });
});
