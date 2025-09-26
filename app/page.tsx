import { url } from "inspector/promises";
import Storefront from "../components/Storefront";
import { fetchEntries } from "../lib/contentful";
import { client } from '../lib/contentful'; 

type CFProductFields = {
  name: string;
  price: number; // stored as number in your content model
  description?: string;
  image?: { fields: { file: { url: string } } }; // adjust to your model
};

async function getAssetUrl(assetId: string) {
  const asset = await client.getAsset(assetId);
  console.log("Fetched asset:", asset);
  const urlPath = asset?.fields?.file?.url;
  console.log("Asset URL path:", urlPath);
  return urlPath ? (urlPath.startsWith('//') ? `https:${urlPath}` : urlPath) : null;
}

// mapEntriesToProducts becomes async
async function mapEntriesToProductsAsync(entries: any) {
  if (!entries) return [];

  // Build an array of promises where we fetch the asset url if present.
  const products = await Promise.all(
    entries.items.map(async (entry: any) => {
      const f = entry.fields;
      const assetLinkId = f?.featuredProductImage?.sys?.id;
      let imageUrl: string | null = null;
      if (assetLinkId) {
        try {
          imageUrl = await getAssetUrl(assetLinkId); // your client.getAsset helper
        } catch (err) {
          console.error('Failed to fetch asset', assetLinkId, err);
        }
      }
      return {
        id: entry.sys.id,
        name: f.name ?? f.name ?? '',
        price: f.price ?? 0,
        description: f.description ?? '',
        image: imageUrl ?? undefined,
      };
    })
  );

  return products;
}

export default async function Home() {
  const entries = await fetchEntries<CFProductFields>({ content_type: "pageProduct" });
  const products = await mapEntriesToProductsAsync(entries);
  console.log("Fetched products:", products);
  
  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
        <Storefront products={products}/>
      </main>
      <footer className="row-start-3 flex gap-[24px] mt-5 p-6 flex-wrap items-center justify-center text-sm text-gray-500">
         FabloFashion.com © 2025 
         email your query to fablofashion@outlook.com 
      </footer>
    </div>
  );
}
