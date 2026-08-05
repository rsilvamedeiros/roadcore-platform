import type { CollectionConfig } from "payload";
import { authenticated } from "../access";

export const SiteSettings: CollectionConfig = {
  slug: "site-settings",
  labels: { singular: "Configuração do site", plural: "Configurações do site" },
  admin: { useAsTitle: "name", group: "Conteúdo do site" },
  access: { create: authenticated, delete: authenticated, read: () => true, update: authenticated },
  fields: [
    { name: "name", type: "text", label: "Nome interno", required: true, defaultValue: "Configuração principal" },
    { name: "contact", type: "group", label: "Contato público", fields: [{ name: "phone", type: "text", label: "Telefone" }, { name: "whatsapp", type: "text", label: "WhatsApp" }, { name: "email", type: "email", label: "E-mail" }, { name: "address", type: "textarea", label: "Endereço" }] },
    { name: "social", type: "group", label: "Redes sociais", fields: [{ name: "instagram", type: "text", label: "Instagram" }, { name: "facebook", type: "text", label: "Facebook" }, { name: "youtube", type: "text", label: "YouTube" }] },
    { name: "footerText", type: "textarea", label: "Texto do rodapé" },
    { name: "defaultSeo", type: "group", label: "SEO padrão", fields: [{ name: "title", type: "text", label: "Título" }, { name: "description", type: "textarea", label: "Descrição" }, { name: "image", type: "upload", relationTo: "media", label: "Imagem social" }] },
  ],
};
