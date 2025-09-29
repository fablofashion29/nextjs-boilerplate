"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Product } from "../lib/products";
import { useState } from "react";

type Props = {
  product: Product;
  onAdd: (product: Product) => void;
};

export default function ProductCard({ product, onAdd }: Props) {
  console.log("Rendering product:", product);
  console.log("Product image URL:", product.image);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async (product: Product) => {
    console.log("Adding product to cart:", product);
    setIsAdding(true);
    onAdd(product);
     // Simulate adding to cart (replace with your actual cart logic)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsAdding(false);
   // setIsAdding(false);
  };

  return (
    <div className="border rounded-lg p-4 flex flex-col gap-3">
      <Link href={`/products/${product.id}`} className="w-full h-40 relative bg-gray-100 flex items-center justify-center rounded overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            width={120}
            height={120}
            unoptimized // allow external full URLs
          />
        ) : (
          <div className="text-sm text-gray-500">No image</div>
        )}
      </Link>
      <div className="flex-1">
  <h3 className="font-semibold"><Link href={`/products/${product.id}`} className="hover:underline">{product.name}</Link></h3>
        <p className="text-sm text-gray-600 mt-1">{product.description}</p>
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="font-medium">{(product.price / 100).toLocaleString(undefined, { style: 'currency', currency: 'USD' })}</div>
        <button
          type="button"
          onClick={() => handleAddToCart(product)}
          disabled={isAdding}
          className="bg-black text-white rounded px-3 py-1 cursor-pointer text-sm hover:opacity-90"
        >
          {isAdding ? "Adding..." : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
