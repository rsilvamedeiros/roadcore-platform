import { adminRoleTemplates, getAdminRoleTemplate, getScreensForRole, roleHasPermission } from "@roadcore/auth";
import { describe, expect, it } from "vitest";

describe("admin role templates", () => {
  it("gives only administrators tenant and role management access", () => {
    const administrator = getAdminRoleTemplate("administrator");
    const manager = getAdminRoleTemplate("manager");

    expect(administrator).toBeDefined();
    expect(manager).toBeDefined();
    expect(roleHasPermission(administrator!, "tenant.settings.manage")).toBe(true);
    expect(roleHasPermission(manager!, "tenant.settings.manage")).toBe(false);
    expect(roleHasPermission(manager!, "user.role.manage")).toBe(false);
  });

  it("keeps financial approval outside sales access", () => {
    const sales = getAdminRoleTemplate("sales");
    const finance = getAdminRoleTemplate("finance");

    expect(adminRoleTemplates).toHaveLength(9);
    expect(roleHasPermission(sales!, "financial.proposal.approve")).toBe(false);
    expect(roleHasPermission(finance!, "financial.proposal.approve")).toBe(true);
  });

  it("keeps drivers in their own portal with journey-only permissions", () => {
    const driver = getAdminRoleTemplate("driver");

    expect(driver?.surface).toBe("driver-portal");
    expect(roleHasPermission(driver!, "driver.delivery.confirm")).toBe(true);
    expect(roleHasPermission(driver!, "crm.lead.read")).toBe(false);
    expect(getScreensForRole(driver!)).toHaveLength(1);
    expect(getScreensForRole(driver!)[0]?.path).toBe("/portal/driver");
  });

  it("gives administrators every administrative screen and permission", () => {
    const administrator = getAdminRoleTemplate("administrator");

    expect(administrator?.permissions).toHaveLength(44);
    expect(getScreensForRole(administrator!)).toHaveLength(11);
  });
});
