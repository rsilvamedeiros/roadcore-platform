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
  const background = theme.primary?.[900] ?? "#111112";
  const road = theme.primary?.[400] ?? "#ed2929";
  const isFogueira = tenant === "fogueiracaminhoes";

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
        {isFogueira ? (
          <svg width="25" height="25" viewBox="0 0 32 32" fill="none">
            <path d="M6 19C8 10 16 4 26 4c-4 3-6 6-6.5 9.5 2.5-1 4.5-2.5 6.5-5-1 9-6 17-15 19.5 2.5-2.5 3.5-5 3.5-7.5-2.5 2-5 3-8.5 3.5 2-2 2.5-3.5 0-5Z" fill={road} />
            <path d="M11 26c4-4 7-8 9-15-1 8-3 13-6 17" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth={2.5}>
            <path d="M3.5 20c2.6-9.9 7.5-15.4 18-19.4" stroke={road} strokeLinecap="round" />
            <path d="M14 19c1.7-5.4 4-8.3 8-11" stroke="white" strokeLinecap="round" />
          </svg>
        )}
      </div>
    ),
    { ...size },
  );
}
