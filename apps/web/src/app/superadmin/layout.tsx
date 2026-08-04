import type { ReactNode } from "react";

export default function SuperadminLayout({ children }: { children: ReactNode }) {
  return <div className="flex min-h-full flex-col">{children}</div>;
}
