"use client";

import { Drawer } from "@roadcore/ui";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { getTenantTheme } from "@/lib/tenant-theme";

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
    </svg>
  );
}

export interface HeaderProps {
  tenant: string;
}

export function Header({ tenant }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = getTenantTheme(tenant);

  const navItems = [
    { href: `/${tenant}`, label: "Home" },
    { href: `/${tenant}/catalog`, label: "Catalog" },
    { href: `/${tenant}/login`, label: "Login" },
  ];

  return (
    <header className="border-b border-border bg-surface-elevated">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href={`/${tenant}`}
          className="flex items-center gap-2 text-lg font-semibold text-foreground"
        >
          {theme.logoSrc ? (
            <Image
              src={theme.logoSrc}
              alt=""
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
          ) : null}
          {theme.name}
        </Link>

        <nav aria-label="Main" className="hidden gap-6 text-sm sm:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-muted hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="sm:hidden">
          <Drawer
            open={menuOpen}
            onOpenChange={setMenuOpen}
            title="Menu"
            trigger={
              <>
                <MenuIcon />
                <span className="sr-only">Open menu</span>
              </>
            }
          >
            <nav aria-label="Mobile" className="flex flex-col gap-4 text-sm">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-foreground"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </Drawer>
        </div>
      </div>
    </header>
  );
}
