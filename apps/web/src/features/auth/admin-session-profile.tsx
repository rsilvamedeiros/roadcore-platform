"use client";

import { useSyncExternalStore } from "react";

import { LogoutButton } from "./logout-button";
import { getMockSessionKey, type MockSession } from "./mock-session";

const fallbackSession: MockSession = { roleId: "administrator", name: "Administrador", username: "admin" };

export function AdminSessionProfile({ tenant }: { tenant: string }) {
  const storedSession = useSyncExternalStore(
    (onStoreChange) => {
      window.addEventListener("storage", onStoreChange);
      return () => window.removeEventListener("storage", onStoreChange);
    },
    () => window.localStorage.getItem(getMockSessionKey(tenant)),
    () => null,
  );
  let session = fallbackSession;
  if (storedSession) {
    try { session = JSON.parse(storedSession) as MockSession; } catch { session = fallbackSession; }
  }
  const initials = session.name.slice(0, 2).toUpperCase();

  return <div className="flex items-center gap-3 border-l pl-3">
    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">{initials}</span>
    <div className="hidden min-w-0 sm:block"><p className="max-w-32 truncate text-xs font-bold text-foreground">{session.name}</p><p className="mt-0.5 max-w-32 truncate text-[10px] text-muted">@{session.username}</p></div>
    <LogoutButton tenant={tenant}/>
  </div>;
}
