import type { ReactNode } from "react";

import { Footer } from "./_components/footer";
import { Header } from "./_components/header";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
