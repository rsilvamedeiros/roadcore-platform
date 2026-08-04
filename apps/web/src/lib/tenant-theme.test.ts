import { describe, expect, it } from "vitest";

import { getTenantTheme } from "./tenant-theme";

describe("getTenantTheme", () => {
  it("returns the neutral core theme for an unknown tenant", () => {
    const theme = getTenantTheme("default");

    expect(theme.name).toBe("RoadCore Platform");
    expect(theme.logoSrc).toBeNull();
    expect(theme.colors).toBeUndefined();
  });

  it("returns the fogueiracaminhoes override", () => {
    const theme = getTenantTheme("fogueiracaminhoes");

    expect(theme.name).toBe("Fogueira Caminhões");
    expect(theme.logoSrc).toBe("/tenants/fogueiracaminhoes/logo.jpg");
    expect(theme.colors?.primary).toBe("#c11a1a");
  });
});
