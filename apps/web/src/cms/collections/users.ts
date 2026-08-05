import type { CollectionConfig } from "payload";
import { administrators, authenticated } from "../access";

export const Users: CollectionConfig = {
  slug: "cms-users",
  labels: { singular: "Usuário editorial", plural: "Usuários editoriais" },
  auth: true,
  admin: { useAsTitle: "email", group: "Plataforma" },
  access: { create: administrators, delete: administrators, read: authenticated, update: administrators },
  fields: [
    { name: "name", type: "text", label: "Nome", required: true },
    { name: "roles", type: "select", label: "Perfis editoriais", hasMany: true, required: true, defaultValue: ["editor"], options: [{ label: "Administrador", value: "administrator" }, { label: "Publicador", value: "publisher" }, { label: "Editor", value: "editor" }] },
  ],
};
