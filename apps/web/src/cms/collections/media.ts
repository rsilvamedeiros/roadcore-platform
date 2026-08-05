import path from "node:path";
import type { CollectionConfig } from "payload";
import { authenticated } from "../access";

export const Media: CollectionConfig = {
  slug: "media",
  labels: { singular: "Arquivo", plural: "Mídia" },
  admin: { useAsTitle: "alt", group: "Conteúdo do site" },
  access: { create: authenticated, delete: authenticated, read: () => true, update: authenticated },
  upload: { staticDir: path.resolve(process.cwd(), "public", "cms-media"), imageSizes: [{ name: "thumbnail", width: 480, height: 320, position: "centre" }, { name: "card", width: 960, height: 600, position: "centre" }], mimeTypes: ["image/*", "application/pdf"] },
  fields: [
    { name: "alt", type: "text", label: "Texto alternativo", required: true },
    { name: "caption", type: "textarea", label: "Legenda" },
  ],
};
