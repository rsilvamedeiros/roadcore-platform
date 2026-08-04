export interface TenantColorScale {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  foreground: string;
}

export interface TenantTheme {
  name: string;
  logoSrc: string | null;
  primary?: TenantColorScale;
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
 *
 * The primary scale was computed from the tenant's real brand red
 * (#c11a1a, sampled from their logo) by shifting HSL lightness at fixed
 * steps — same method used for the core palette in
 * packages/design-system/src/styles/tokens.css — so tenant overrides get
 * the same tonal range as the core theme, not just a single hue swap.
 */
const tenantThemes: Record<string, TenantTheme> = {
  fogueiracaminhoes: {
    name: "Fogueira Caminhões",
    logoSrc: "/tenants/fogueiracaminhoes/logo.jpg",
    primary: {
      50: "#fdeded",
      100: "#fadbdb",
      200: "#f5b7b7",
      300: "#ee8181",
      400: "#e74b4b",
      500: "#c11a1a",
      600: "#9d1515",
      700: "#791010",
      800: "#550b0b",
      900: "#3a0808",
      foreground: "#ffffff",
    },
  },
};

export function getTenantTheme(tenant: string): TenantTheme {
  return tenantThemes[tenant] ?? defaultTheme;
}
