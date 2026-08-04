import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/catalog", label: "Catalog" },
  { href: "/login", label: "Login" },
];

export function Header() {
  return (
    <header className="border-b border-border bg-surface-elevated">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-foreground">
          RoadCore
        </Link>
        <nav aria-label="Main" className="flex flex-wrap gap-6 text-sm">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-muted hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
