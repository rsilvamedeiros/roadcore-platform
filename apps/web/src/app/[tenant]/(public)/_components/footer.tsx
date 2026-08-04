import Link from "next/link";

export interface FooterProps {
  tenant: string;
}

export function Footer({ tenant }: FooterProps) {
  const year = new Date().getFullYear();

  const footerLinks = [
    { href: `/${tenant}`, label: "Home" },
    { href: `/${tenant}/catalog`, label: "Catalog" },
    { href: `/${tenant}/login`, label: "Login" },
  ];

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {year} RoadCore Platform. All rights reserved.</p>
        <nav aria-label="Footer" className="flex flex-wrap gap-4">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      {/*
        Tenant institutional data (legal name, CNPJ, address) belongs here
        once white-label config / tenant resolution exists.
        See docs/01-business/white-label.md.
      */}
    </footer>
  );
}
