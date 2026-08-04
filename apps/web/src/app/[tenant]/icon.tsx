import { ImageResponse } from "next/og";

import { getTenantTheme } from "@/lib/tenant-theme";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

interface IconProps {
  params: Promise<{ tenant: string }>;
}

export default async function Icon({ params }: IconProps) {
  const { tenant } = await params;
  const theme = getTenantTheme(tenant);
  const background = theme.primary?.[600] ?? "#1841b4";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background,
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5}>
          <path d="M4 19c4-9 8-13 16-15" strokeLinecap="round" />
          <circle cx="20" cy="4" r="1.8" fill="white" stroke="none" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
