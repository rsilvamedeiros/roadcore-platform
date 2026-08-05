import type { Access } from "payload";

export const authenticated: Access = ({ req }) => Boolean(req.user);

export const administrators: Access = ({ req }) => {
  const roles = (req.user as { roles?: string[] } | null)?.roles ?? [];
  return roles.includes("administrator");
};

export const publishers: Access = ({ req }) => {
  const roles = (req.user as { roles?: string[] } | null)?.roles ?? [];
  return roles.includes("administrator") || roles.includes("publisher");
};

export const publishedOrAuthenticated: Access = ({ req }) => {
  if (req.user) return true;
  return { _status: { equals: "published" } };
};
