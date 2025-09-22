import { createClient, EntryCollection, EntrySkeletonType } from "contentful";

const space = process.env.CONTENTFUL_SPACE_ID || "";
const accessToken = process.env.CONTENTFUL_CDA_TOKEN || "";

if (!space || !accessToken) {
  // We don't throw here so local dev without env vars still works; callers should handle empty responses.
  console.warn("CONTENTFUL_SPACE_ID or CONTENTFUL_CDA_TOKEN is not set. Contentful requests will fail.");
}

export const client = createClient({
  space,
  accessToken,
});

export async function fetchEntries<Fields extends Record<string, any> = Record<string, any>>(query = {}): Promise<EntryCollection<EntrySkeletonType<Fields>> | null> {
  if (!space || !accessToken) return null;
  return client.getEntries<EntrySkeletonType<Fields>>(query as any);
}
