"use client";
import React from "react";
import Image from "next/image";

type Props = {
  cartCount: number;
  onToggleCart: () => void;
};

export default function Header({ cartCount, onToggleCart }: Props) {
  return (
    <header className="w-full flex items-center justify-between py-2">
      <a href="/" className="flex items-center gap-2">
        <Image
          className="dark:invert"
          src="/fablo-fashion-logo.png"
          alt="Fablo Fashion Logo"
          width={337}
          height={105}
          priority
        />
      </a>
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleCart}
          className="relative bg-gray-100 px-3 py-1 rounded flex items-center"
          aria-label="Toggle cart"
        >
          <Image
            src="/cart.svg"
            alt="Cart"
            width={24}
            height={24}
            priority
          />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">{cartCount}</span>
          )}
        </button>
      </div>
    </header>
  );
}
