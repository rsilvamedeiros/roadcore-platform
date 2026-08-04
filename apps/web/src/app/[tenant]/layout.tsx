import type { CSSProperties, ReactNode } from "react";

import { getTenantTheme } from "@/lib/tenant-theme";

interface TenantLayoutProps {
  children: ReactNode;
  params: Promise<{ tenant: string }>;
}

export default async function TenantLayout({ children, params }: TenantLayoutProps) {
  const { tenant } = await params;
  const theme = getTenantTheme(tenant);

  const style = theme.colors
    ? ({
        "--primary": theme.colors.primary,
        "--primary-foreground": theme.colors.primaryForeground,
      } as CSSProperties)
    : undefined;

  return (
    <div style={style} className="flex min-h-full flex-1 flex-col">
      {children}
    </div>
  );
}
