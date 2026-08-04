import type { ReactNode } from "react";

export default function BackofficeLayout({ children }: { children: ReactNode }) {
  return <div className="flex min-h-full flex-col">{children}</div>;
}
