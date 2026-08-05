import type { CollectionConfig } from "payload";
import { authenticated, publishedOrAuthenticated } from "../access";

export const Campaigns: CollectionConfig = {
  slug: "campaigns",
  labels: { singular: "Campanha", plural: "Campanhas e banners" },
  admin: { useAsTitle: "name", defaultColumns: ["name", "placement", "_status", "startsAt", "endsAt"], group: "Conteúdo do site" },
  access: { create: authenticated, delete: authenticated, read: publishedOrAuthenticated, update: authenticated },
  versions: { drafts: { autosave: true, schedulePublish: true }, maxPerDoc: 20 },
  fields: [
    { name: "name", type: "text", label: "Nome interno", required: true },
    { name: "placement", type: "select", label: "Posição", required: true, options: [{ label: "Home · principal", value: "home-hero" }, { label: "Home · intermediário", value: "home-inline" }, { label: "Catálogo · topo", value: "catalog-top" }, { label: "Blog · lateral", value: "blog-sidebar" }] },
    { name: "heading", type: "text", label: "Título", required: true },
    { name: "description", type: "textarea", label: "Descrição" },
    { name: "image", type: "upload", relationTo: "media", label: "Imagem", required: true },
    { name: "action", type: "group", label: "Ação", fields: [{ name: "label", type: "text", label: "Texto" }, { name: "href", type: "text", label: "Destino" }] },
    { name: "startsAt", type: "date", label: "Início" },
    { name: "endsAt", type: "date", label: "Fim" },
  ],
};
