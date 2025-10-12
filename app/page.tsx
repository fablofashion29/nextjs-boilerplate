import { url } from "inspector/promises";
import Storefront from "../components/Storefront";
import { fetchEntries } from "../lib/contentful";
import { client } from '../lib/contentful'; 
import Banner from "@/components/Banner";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import ProductCard from "@/components/ProductCard";
import { CarouselDemo } from "@/components/Blocks/Carousel";
import SliderComponent from "@/components/Blocks/Slider";

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

const addToCart = (product: any) => {
  console.log("Add to cart:", product);
};

export default async function Home() {
  const entries = await fetchEntries<CFProductFields>({ content_type: "pageProduct" });
  const products = await mapEntriesToProductsAsync(entries);
  console.log("Fetched products:", products);
  
  return (
    <div className="homepage-container">
    <Banner 
        title="Launching Soon"
        subtitle="Best Kurtis and Suits Collection in affordable Prices"
        backgroundImage="/images/banner.png"
        className="min-h-screen flex items-center"
      />
      <div className="flex md:hidden relative w-full h-auto mb-4 text-center justify-around">
              <Image src="/images/banner-mobile.png" alt="Banner"  width={300} height={145}/>
          </div>

       
<div className="carousel-homepage-container flex items-center justify-around mb-8 w-full">
  


  <CarouselDemo products={products} />
 
  </div>
  <div className="slider-homepage-container flex w-full m-0 p-0 items-center justify-around mb-8">
  <SliderComponent products={products} />
  </div>
    </div>
  );
}
