import { createClient, EntryCollection } from "contentful";

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

export async function fetchEntries<T = any>(query = {}): Promise<EntryCollection<T> | null> {
  if (!space || !accessToken) return null;
  return client.getEntries<T>(query as any);
}
