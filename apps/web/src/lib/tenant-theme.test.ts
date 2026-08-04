import { describe, expect, it } from "vitest";

import { getTenantTheme } from "./tenant-theme";

describe("getTenantTheme", () => {
  it("returns the neutral core theme for an unknown tenant", () => {
    const theme = getTenantTheme("default");

    expect(theme.name).toBe("RoadCore Platform");
    expect(theme.logoSrc).toBeNull();
    expect(theme.primary).toBeUndefined();
  });

  it("returns the fogueiracaminhoes override with a full color scale", () => {
    const theme = getTenantTheme("fogueiracaminhoes");

    expect(theme.name).toBe("Fogueira Caminhões");
    expect(theme.logoSrc).toBe("/tenants/fogueiracaminhoes/logo.jpg");
    expect(theme.primary?.[500]).toBe("#c11a1a");
    expect(theme.primary?.[50]).toBe("#fdeded");
    expect(theme.primary?.[900]).toBe("#3a0808");
  });
});
