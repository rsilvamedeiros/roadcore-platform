import Link from "next/link";

import { getTenantTheme } from "@/lib/tenant-theme";

import { BrandMark } from "./brand-mark";

export interface FooterProps {
  tenant: string;
}

export function Footer({ tenant }: FooterProps) {
  const year = new Date().getFullYear();
  const theme = getTenantTheme(tenant);

  const columns = [
    {
      title: "Marketplace",
      links: [
        { href: `/${tenant}`, label: "Home" },
        { href: `/${tenant}/catalog`, label: "Catalog" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: `/${tenant}/contact`, label: "Contact" },
        { href: `/${tenant}/login`, label: "Login" },
      ],
    },
  ];

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-12 sm:grid-cols-[2fr_1fr_1fr]">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            {theme.logoSrc ? (
              // eslint-disable-next-line @next/next/no-img-element -- decorative footer mark, no next/image optimization needed
              <img
                src={theme.logoSrc}
                alt=""
                width={28}
                height={28}
                className="rounded-full object-cover"
              />
            ) : (
              <BrandMark />
            )}
            <span className="font-semibold text-foreground">{theme.name}</span>
          </div>
          <p className="max-w-xs text-sm text-muted">
            Marketplace, TMS, fleet and ERP for heavy assets — all in one platform.
          </p>
        </div>
        {columns.map((column) => (
          <div key={column.title} className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-foreground">{column.title}</h3>
            <nav aria-label={column.title} className="flex flex-col gap-2">
              {column.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-4 text-xs text-muted">
          &copy; {year} {theme.name}. All rights reserved.
        </div>
      </div>
      {/*
        Full tenant institutional data (legal name, CNPJ, address) belongs
        here once white-label config / tenant resolution exists.
        See docs/01-business/white-label.md.
      */}
    </footer>
  );
}
