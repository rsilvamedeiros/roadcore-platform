import type { AdminRoleId } from "@roadcore/auth";

export interface MockSession {
  roleId: AdminRoleId;
  name: string;
  username: string;
}

export function getMockSessionKey(tenant: string) {
  return `roadcore:mock-session:${tenant}`;
}

export function saveMockSession(tenant: string, session: MockSession) {
  window.localStorage.setItem(getMockSessionKey(tenant), JSON.stringify(session));
}

export function clearMockSession(tenant: string) {
  window.localStorage.removeItem(getMockSessionKey(tenant));
}
