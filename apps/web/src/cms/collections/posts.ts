import type { CollectionConfig } from "payload";
import { authenticated, publishedOrAuthenticated } from "../access";

export const Posts: CollectionConfig = {
  slug: "posts",
  labels: { singular: "Publicação", plural: "Publicações" },
  admin: { useAsTitle: "title", defaultColumns: ["title", "category", "_status", "publishedAt"], group: "Conteúdo do site" },
  access: { create: authenticated, delete: authenticated, read: publishedOrAuthenticated, update: authenticated },
  versions: { drafts: { autosave: true, schedulePublish: true }, maxPerDoc: 30 },
  fields: [
    { name: "title", type: "text", label: "Título", required: true },
    { name: "slug", type: "text", label: "Slug", required: true, index: true },
    { name: "category", type: "text", label: "Categoria", required: true },
    { name: "excerpt", type: "textarea", label: "Resumo", required: true },
    { name: "cover", type: "upload", relationTo: "media", label: "Capa" },
    { name: "content", type: "richText", label: "Conteúdo", required: true },
    { name: "publishedAt", type: "date", label: "Data de publicação", admin: { date: { pickerAppearance: "dayAndTime" } } },
  ],
};
