import type { CollectionConfig } from "payload";
import { authenticated } from "../access";

export const Navigation: CollectionConfig = {
  slug: "navigation",
  labels: { singular: "Navegação", plural: "Navegação" },
  admin: { useAsTitle: "name", group: "Conteúdo do site" },
  access: { create: authenticated, delete: authenticated, read: () => true, update: authenticated },
  fields: [
    { name: "name", type: "text", label: "Nome interno", required: true, defaultValue: "Navegação principal" },
    { name: "items", type: "array", label: "Itens", fields: [{ name: "label", type: "text", label: "Texto", required: true }, { name: "href", type: "text", label: "Destino", required: true }, { name: "visible", type: "checkbox", label: "Visível", defaultValue: true }, { name: "children", type: "array", label: "Subitens", fields: [{ name: "label", type: "text", label: "Texto", required: true }, { name: "href", type: "text", label: "Destino", required: true }] }] },
  ],
};
