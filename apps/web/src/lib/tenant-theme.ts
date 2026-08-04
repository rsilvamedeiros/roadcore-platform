export interface TenantTheme {
  name: string;
  logoSrc: string | null;
  colors?: {
    primary: string;
    primaryForeground: string;
  };
}

const defaultTheme: TenantTheme = {
  name: "RoadCore Platform",
  logoSrc: null,
};

/**
 * Temporary fixture standing in for real tenant/white-label config
 * (docs/04-modules/tenant.md is not implemented yet — no tenant database
 * or config API exists). Only tenants listed here get an override; every
 * other slug, including "default", keeps the neutral core tokens from
 * packages/design-system. See docs/01-business/white-label.md.
 */
const tenantThemes: Record<string, TenantTheme> = {
  fogueiracaminhoes: {
    name: "Fogueira Caminhões",
    logoSrc: "/tenants/fogueiracaminhoes/logo.jpg",
    colors: {
      primary: "#c11a1a",
      primaryForeground: "#ffffff",
    },
  },
};

export function getTenantTheme(tenant: string): TenantTheme {
  return tenantThemes[tenant] ?? defaultTheme;
}
