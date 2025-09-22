"use client";
import React from "react";

type Props = {
  cartCount: number;
  onToggleCart: () => void;
};

export default function Header({ cartCount, onToggleCart }: Props) {
  return (
    <header className="w-full flex items-center justify-between py-4">
      <div className="text-xl font-bold">Fablo Fashion</div>
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleCart}
          className="relative bg-gray-100 px-3 py-1 rounded"
          aria-label="Toggle cart"
        >
          Cart
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">{cartCount}</span>
          )}
        </button>
      </div>
    </header>
  );
}
