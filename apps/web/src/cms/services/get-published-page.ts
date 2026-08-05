import config from "@payload-config";
import { getPayload } from "payload";

/**
 * Trusted server-side content query. Tenant scope is mandatory even though the
 * Local API uses overrideAccess to serve published documents without a CMS user.
 */
export async function getPublishedPage(tenantSlug: string, pageSlug: string) {
  if (!tenantSlug || !pageSlug) throw new Error("Tenant and page slugs are required.");
  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: "pages",
    overrideAccess: true,
    draft: false,
    depth: 2,
    limit: 1,
    where: {
      and: [
        { "tenant.slug": { equals: tenantSlug } },
        { slug: { equals: pageSlug } },
        { _status: { equals: "published" } },
      ],
    },
  });
  return result.docs[0] ?? null;
}
