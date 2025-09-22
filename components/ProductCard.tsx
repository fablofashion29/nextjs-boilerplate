"use client";
import Image from "next/image";
import React from "react";
import { Product } from "../lib/products";

type Props = {
  product: Product;
  onAdd: (product: Product) => void;
};

export default function ProductCard({ product, onAdd }: Props) {
  return (
    <div className="border rounded-lg p-4 flex flex-col gap-3">
      <div className="w-full h-40 relative bg-gray-100 flex items-center justify-center rounded">
        {product.image ? (
          <Image src={product.image} alt={product.name} width={120} height={120} />
        ) : (
          <div className="text-sm text-gray-500">No image</div>
        )}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{product.description}</p>
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="font-medium">{(product.price / 100).toLocaleString(undefined, { style: 'currency', currency: 'USD' })}</div>
        <button
          onClick={() => onAdd(product)}
          className="bg-black text-white rounded px-3 py-1 text-sm hover:opacity-90"
        >
          Add
        </button>
      </div>
    </div>
  );
}
