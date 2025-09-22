import Image from "next/image";
import React from "react";
import { fetchEntries } from "../../../lib/contentful";
import { products as fallbackProducts, Product } from "../../../lib/products";

type Params = { params: { id: string } };

async function fetchProductById(id: string): Promise<Product | null> {
  // Try Contentful first
  try {
    const entries = await fetchEntries<{ name: string; price: number; description?: string; sku?: string; featuredProductImage?: any }>({ content_type: "pageProduct", 'sys.id': id });
    const item = entries?.items?.[0];
    if (item) {
      const f = (item as any).fields;
      const assetLinkId = f?.featuredProductImage?.sys?.id;
      let imageUrl: string | undefined;
      if (assetLinkId) {
        // contentful client used elsewhere to fetch asset — we skip here for brevity
        // the Home page mapping handles asset fetching; for now use undefined
      }
      return {
        id: (item as any).sys.id,
        name: f.name ?? "",
        price: f.price ?? 0,
        description: f.description ?? "",
        image: imageUrl,
        sku: f.sku ?? undefined,
      };
    }
  } catch (err) {
    // ignore and fallback
    console.warn("Contentful fetch failed for product", id, err);
  }

  // fallback to local products
  const p = fallbackProducts.find((p) => p.id === id);
  return p ?? null;
}

export default async function ProductPage({ params }: Params) {
  const { id } = params;
  const product = await fetchProductById(id);

  if (!product) {
    return <div className="max-w-3xl mx-auto py-12 px-4">Product not found.</div>;
  }

  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <div className="flex gap-8 items-start">
        <div className="w-1/2">
          {product.image ? (
            // use Image when available
            <Image src={product.image} alt={product.name} width={800} height={800} className="w-full h-auto rounded" />
          ) : (
            <div className="w-full h-64 bg-gray-100 flex items-center justify-center">No image</div>
          )}
        </div>

        <div className="w-1/2">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <div className="text-lg font-semibold mb-4">{(product.price/100).toLocaleString(undefined, { style: 'currency', currency: 'USD' })}</div>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <button className="bg-black text-white px-4 py-2 rounded">Add to cart</button>
        </div>
      </div>
    </main>
  );
}
