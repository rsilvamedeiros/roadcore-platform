import type { AdminRoleId } from "@roadcore/auth";

export interface MockAccessProfile {
  roleId: AdminRoleId;
  name: string;
  username: string;
  password: string;
  destination: string;
}

export const mockAccessProfiles: readonly MockAccessProfile[] = [
  { roleId: "administrator", name: "Administrador", username: "admin", password: "admin123", destination: "/admin" },
  { roleId: "manager", name: "Gerência", username: "gerencia", password: "gerencia123", destination: "/admin" },
  { roleId: "sales", name: "Comercial", username: "comercial", password: "comercial123", destination: "/admin/commercial" },
  { roleId: "inventory", name: "Estoque", username: "estoque", password: "estoque123", destination: "/admin/inventory" },
  { roleId: "finance", name: "Financeiro", username: "financeiro", password: "financeiro123", destination: "/admin/finance" },
  { roleId: "operations", name: "Operações", username: "operacoes", password: "operacoes123", destination: "/admin/operations" },
  { roleId: "fleet", name: "Frota", username: "frota", password: "frota123", destination: "/admin/fleet" },
  { roleId: "maintenance", name: "Manutenção", username: "manutencao", password: "manutencao123", destination: "/admin/maintenance" },
  { roleId: "driver", name: "Motorista", username: "motorista", password: "motorista123", destination: "/portal/driver" },
] as const;
