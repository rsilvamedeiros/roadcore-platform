import type { CollectionConfig } from "payload";
import { pageBlocks } from "../blocks";
import { authenticated, publishedOrAuthenticated } from "../access";

export const Pages: CollectionConfig = {
  slug: "pages",
  labels: { singular: "Página", plural: "Páginas" },
  admin: { useAsTitle: "title", defaultColumns: ["title", "slug", "_status", "updatedAt"], group: "Conteúdo do site", livePreview: { url: ({ data }) => `/${typeof data.tenant === "object" ? data.tenant?.slug ?? "default" : "default"}/${data.slug === "home" ? "" : data.slug}` } },
  access: { create: authenticated, delete: authenticated, read: publishedOrAuthenticated, update: authenticated },
  versions: { drafts: { autosave: true, schedulePublish: true }, maxPerDoc: 25 },
  fields: [
    { name: "title", type: "text", label: "Título interno", required: true },
    { name: "slug", type: "text", label: "Slug", required: true, index: true },
    { name: "layout", type: "blocks", label: "Seções da página", blocks: pageBlocks, required: true },
    { name: "seo", type: "group", label: "SEO", fields: [{ name: "title", type: "text", label: "Título" }, { name: "description", type: "textarea", label: "Descrição" }, { name: "image", type: "upload", relationTo: "media", label: "Imagem social" }] },
  ],
};
