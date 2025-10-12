'use client';
import React from "react";
import { Product } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SliderCard({ product }: { product: any }) {
    const [isAdding, setIsAdding] = useState(false);

    const handleAddToCart = async (product: Product) => {
      console.log("Adding product to cart:", product);
      setIsAdding(true);
      // onAdd(product);
       // Simulate adding to cart (replace with your actual cart logic)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsAdding(false);
      // window.scrollTo({ top: 0, behavior: "smooth" });
     // setIsAdding(false);
    };
    return (
        <>
            <div className="p-4">
                    {product.image ? (
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={200}
                            height={200}
                            className="w-full h-auto"
                            unoptimized // allow external full URLs
                        />
                    ) : (
                        <div className="text-sm text-gray-500">No image</div>
                    )}
                    </div>
                      <div className="flex text-center justify-center">
  <h3 className="font-semibold"><Link href={`/products/${product.id}`} className="hover:underline">{product.name}</Link></h3>
        {/* <p className="text-sm text-gray-600 mt-1">{product.description}</p> */}
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
        </>
    );
}