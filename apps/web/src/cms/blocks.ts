import type { Block } from "payload";

export const heroBlock: Block = {
  slug: "hero",
  labels: { singular: "Destaque principal", plural: "Destaques principais" },
  fields: [
    { name: "eyebrow", type: "text", label: "Chamada curta" },
    { name: "heading", type: "text", label: "Título", required: true },
    { name: "description", type: "textarea", label: "Descrição" },
    { name: "image", type: "upload", relationTo: "media", label: "Imagem" },
    { name: "primaryAction", type: "group", label: "Ação principal", fields: [{ name: "label", type: "text", label: "Texto" }, { name: "href", type: "text", label: "Destino" }] },
    { name: "secondaryAction", type: "group", label: "Ação secundária", fields: [{ name: "label", type: "text", label: "Texto" }, { name: "href", type: "text", label: "Destino" }] },
  ],
};

export const richTextBlock: Block = {
  slug: "richText",
  labels: { singular: "Conteúdo rico", plural: "Conteúdos ricos" },
  fields: [
    { name: "heading", type: "text", label: "Título" },
    { name: "content", type: "richText", label: "Conteúdo", required: true },
  ],
};

export const featureGridBlock: Block = {
  slug: "featureGrid",
  labels: { singular: "Grade de benefícios", plural: "Grades de benefícios" },
  fields: [
    { name: "eyebrow", type: "text", label: "Chamada curta" },
    { name: "heading", type: "text", label: "Título", required: true },
    { name: "items", type: "array", label: "Itens", minRows: 1, fields: [{ name: "title", type: "text", label: "Título", required: true }, { name: "description", type: "textarea", label: "Descrição", required: true }] },
  ],
};

export const callToActionBlock: Block = {
  slug: "callToAction",
  labels: { singular: "Chamada para ação", plural: "Chamadas para ação" },
  fields: [
    { name: "heading", type: "text", label: "Título", required: true },
    { name: "description", type: "textarea", label: "Descrição" },
    { name: "label", type: "text", label: "Texto do botão", required: true },
    { name: "href", type: "text", label: "Destino", required: true },
  ],
};

export const pageBlocks = [heroBlock, richTextBlock, featureGridBlock, callToActionBlock];
