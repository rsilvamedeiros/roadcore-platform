import type { ReactNode } from "react";

import { Footer } from "./_components/footer";
import { Header } from "./_components/header";

interface PublicLayoutProps {
  children: ReactNode;
  params: Promise<{ tenant: string }>;
}

export default async function PublicLayout({ children, params }: PublicLayoutProps) {
  const { tenant } = await params;

  return (
    <div className="flex min-h-full flex-col">
      <Header tenant={tenant} />
      {children}
      <Footer tenant={tenant} />
    </div>
  );
}
