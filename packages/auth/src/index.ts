export const permissions = [
  "dashboard.read",
  "crm.customer.read", "crm.customer.create", "crm.customer.update",
  "crm.lead.read", "crm.lead.create", "crm.lead.update",
  "asset.listing.read", "asset.listing.create", "asset.listing.update", "asset.listing.publish",
  "financial.proposal.read", "financial.proposal.create", "financial.proposal.approve",
  "financial.entry.read", "financial.entry.create", "financial.entry.approve",
  "transport.operation.read", "transport.operation.create", "transport.operation.dispatch",
  "fleet.vehicle.read", "fleet.vehicle.create", "fleet.vehicle.update",
  "fleet.driver.read", "fleet.driver.create", "fleet.driver.update",
  "maintenance.order.read", "maintenance.order.create", "maintenance.order.update",
  "report.commercial.read", "report.operational.read", "report.financial.read",
  "user.read", "user.invite", "user.role.manage", "tenant.settings.manage",
  "driver.schedule.read", "driver.checklist.create", "driver.expense.create",
  "driver.incident.create", "driver.delivery.confirm",
] as const;

export type Permission = (typeof permissions)[number];
export type AccessSurface = "admin" | "driver-portal";
export type AdminRoleId = "administrator" | "manager" | "sales" | "inventory" | "finance" | "operations" | "fleet" | "maintenance" | "driver";

export interface AccessScreen {
  id: string;
  name: string;
  description: string;
  path: string;
  surface: AccessSurface;
  requiredPermission: Permission;
}

export const accessScreens: readonly AccessScreen[] = [
  { id: "admin-overview", name: "Visão geral", description: "Indicadores, alertas e atalhos da empresa.", path: "/admin", surface: "admin", requiredPermission: "dashboard.read" },
  { id: "commercial", name: "Comercial", description: "Clientes, leads, negociações e propostas.", path: "/admin/commercial", surface: "admin", requiredPermission: "crm.lead.read" },
  { id: "inventory", name: "Estoque", description: "Veículos, anúncios, fotos e publicação.", path: "/admin/inventory", surface: "admin", requiredPermission: "asset.listing.read" },
  { id: "finance", name: "Financeiro", description: "Propostas, entradas, aprovações e fluxo financeiro.", path: "/admin/finance", surface: "admin", requiredPermission: "financial.entry.read" },
  { id: "operations", name: "Operações", description: "Fretes, viagens, despacho e acompanhamento.", path: "/admin/operations", surface: "admin", requiredPermission: "transport.operation.read" },
  { id: "fleet", name: "Frota", description: "Veículos operacionais, motoristas e disponibilidade.", path: "/admin/fleet", surface: "admin", requiredPermission: "fleet.vehicle.read" },
  { id: "maintenance", name: "Manutenção", description: "Ordens de serviço, preventivas e pendências.", path: "/admin/maintenance", surface: "admin", requiredPermission: "maintenance.order.read" },
  { id: "reports", name: "Relatórios", description: "Visões comerciais, operacionais e financeiras.", path: "/admin/reports", surface: "admin", requiredPermission: "report.commercial.read" },
  { id: "users", name: "Usuários e acessos", description: "Convites, perfis e permissões.", path: "/admin/users", surface: "admin", requiredPermission: "user.read" },
  { id: "settings", name: "Configurações", description: "Empresa, filiais, módulos e identidade.", path: "/admin/settings", surface: "admin", requiredPermission: "tenant.settings.manage" },
  { id: "driver-home", name: "Minha jornada", description: "Agenda, checklist, despesas, ocorrências e entregas.", path: "/portal/driver", surface: "driver-portal", requiredPermission: "driver.schedule.read" },
] as const;

export interface AdminRoleTemplate {
  id: AdminRoleId;
  name: string;
  description: string;
  surface: AccessSurface;
  permissions: readonly Permission[];
}

const managerPermissions = permissions.filter((permission) => !permission.startsWith("driver.") && permission !== "tenant.settings.manage" && permission !== "user.role.manage" && !permission.endsWith(".approve"));

export const adminRoleTemplates: readonly AdminRoleTemplate[] = [
  { id: "administrator", name: "Administrador", description: "Acesso total, todos os cadastros, usuários, permissões e configurações.", surface: "admin", permissions },
  { id: "manager", name: "Gerência", description: "Visão ampla da empresa, equipes, indicadores e relatórios.", surface: "admin", permissions: managerPermissions },
  { id: "sales", name: "Comercial", description: "Clientes, leads, negociações, anúncios e propostas.", surface: "admin", permissions: ["dashboard.read", "crm.customer.read", "crm.customer.create", "crm.customer.update", "crm.lead.read", "crm.lead.create", "crm.lead.update", "asset.listing.read", "financial.proposal.read", "financial.proposal.create", "report.commercial.read"] },
  { id: "inventory", name: "Estoque", description: "Cadastro, atualização, fotos e publicação de veículos.", surface: "admin", permissions: ["dashboard.read", "asset.listing.read", "asset.listing.create", "asset.listing.update", "asset.listing.publish", "report.commercial.read"] },
  { id: "finance", name: "Financeiro", description: "Propostas, lançamentos, aprovações e relatórios financeiros.", surface: "admin", permissions: ["dashboard.read", "financial.proposal.read", "financial.proposal.create", "financial.proposal.approve", "financial.entry.read", "financial.entry.create", "financial.entry.approve", "report.financial.read"] },
  { id: "operations", name: "Operações", description: "Fretes, viagens, despacho e acompanhamento de entregas.", surface: "admin", permissions: ["dashboard.read", "transport.operation.read", "transport.operation.create", "transport.operation.dispatch", "fleet.vehicle.read", "fleet.driver.read", "report.operational.read"] },
  { id: "fleet", name: "Frota", description: "Veículos, motoristas, documentos e disponibilidade operacional.", surface: "admin", permissions: ["dashboard.read", "fleet.vehicle.read", "fleet.vehicle.create", "fleet.vehicle.update", "fleet.driver.read", "fleet.driver.create", "fleet.driver.update", "maintenance.order.read", "report.operational.read"] },
  { id: "maintenance", name: "Manutenção", description: "Ordens de serviço, planos preventivos e atualização técnica.", surface: "admin", permissions: ["dashboard.read", "fleet.vehicle.read", "maintenance.order.read", "maintenance.order.create", "maintenance.order.update", "report.operational.read"] },
  { id: "driver", name: "Motorista", description: "Agenda, checklist, despesas, ocorrências e confirmação de entrega.", surface: "driver-portal", permissions: ["driver.schedule.read", "driver.checklist.create", "driver.expense.create", "driver.incident.create", "driver.delivery.confirm"] },
] as const;

export function getAdminRoleTemplate(roleId: AdminRoleId) { return adminRoleTemplates.find((role) => role.id === roleId); }
export function roleHasPermission(role: AdminRoleTemplate, permission: Permission) { return role.permissions.includes(permission); }
export function getScreensForRole(role: AdminRoleTemplate) { return accessScreens.filter((screen) => screen.surface === role.surface && roleHasPermission(role, screen.requiredPermission)); }
