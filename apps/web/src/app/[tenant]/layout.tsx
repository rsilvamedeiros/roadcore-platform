import type { CSSProperties, ReactNode } from "react";

import { getTenantTheme } from "@/lib/tenant-theme";

interface TenantLayoutProps {
  children: ReactNode;
  params: Promise<{ tenant: string }>;
}

export default async function TenantLayout({ children, params }: TenantLayoutProps) {
  const { tenant } = await params;
  const theme = getTenantTheme(tenant);

  const style = theme.primary
    ? ({
        "--primary-50": theme.primary[50],
        "--primary-100": theme.primary[100],
        "--primary-200": theme.primary[200],
        "--primary-300": theme.primary[300],
        "--primary-400": theme.primary[400],
        "--primary-500": theme.primary[500],
        "--primary-600": theme.primary[600],
        "--primary-700": theme.primary[700],
        "--primary-800": theme.primary[800],
        "--primary-900": theme.primary[900],
        "--primary": theme.primary[500],
        "--primary-foreground": theme.primary.foreground,
      } as CSSProperties)
    : undefined;

  return (
    <div style={style} className="flex min-h-full flex-1 flex-col">
      {children}
    </div>
  );
}
