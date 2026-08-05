import { postgresAdapter } from "@payloadcms/db-postgres";
import { multiTenantPlugin } from "@payloadcms/plugin-multi-tenant";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "node:path";
import { buildConfig } from "payload";
import sharp from "sharp";

import { Campaigns } from "./src/cms/collections/campaigns";
import { Media } from "./src/cms/collections/media";
import { Navigation } from "./src/cms/collections/navigation";
import { Pages } from "./src/cms/collections/pages";
import { Posts } from "./src/cms/collections/posts";
import { SiteSettings } from "./src/cms/collections/site-settings";
import { Tenants } from "./src/cms/collections/tenants";
import { Users } from "./src/cms/collections/users";

function requiredServerEnv(name: "DATABASE_URL" | "PAYLOAD_SECRET", buildFallback: string) {
  const value = process.env[name];
  if (value) return value;
  if (process.env.NODE_ENV !== "production" || process.env.NEXT_PHASE === "phase-production-build") return buildFallback;
  throw new Error(`${name} must be configured to run the CMS in production.`);
}

const databaseUrl = requiredServerEnv("DATABASE_URL", "postgresql://postgres:postgres@localhost:5432/roadcore");
const payloadSecret = requiredServerEnv("PAYLOAD_SECRET", "build-or-local-development-only");

export default buildConfig({
  admin: {
    user: "cms-users",
    meta: { titleSuffix: "· RoadCore Conteúdo" },
  },
  routes: { admin: "/cms", api: "/cms-api" },
  editor: lexicalEditor(),
  db: postgresAdapter({ pool: { connectionString: databaseUrl } }),
  secret: payloadSecret,
  sharp,
  typescript: { outputFile: path.resolve(process.cwd(), "src", "cms", "payload-types.ts") },
  collections: [Tenants, Users, Media, Pages, Posts, Navigation, SiteSettings, Campaigns],
  plugins: [
    multiTenantPlugin({
      tenantsSlug: "tenants",
      collections: {
        media: {}, pages: {}, posts: {}, campaigns: {},
        navigation: { isGlobal: true },
        "site-settings": { isGlobal: true },
      },
      userHasAccessToAllTenants: (user) => (user as { roles?: string[] } | null)?.roles?.includes("administrator") ?? false,
    }),
  ],
});
