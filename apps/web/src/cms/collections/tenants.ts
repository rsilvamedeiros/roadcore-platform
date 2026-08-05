import type { CollectionConfig } from "payload";
import { administrators, authenticated } from "../access";

export const Tenants: CollectionConfig = {
  slug: "tenants",
  labels: { singular: "Tenant", plural: "Tenants" },
  admin: { useAsTitle: "name", group: "Plataforma" },
  access: { create: administrators, delete: administrators, read: authenticated, update: administrators },
  fields: [
    { name: "name", type: "text", label: "Nome", required: true },
    { name: "slug", type: "text", label: "Slug", required: true, unique: true, index: true },
    { name: "domain", type: "text", label: "Domínio", unique: true },
    { name: "active", type: "checkbox", label: "Ativo", defaultValue: true },
  ],
};
