"use client";
import React, { useMemo, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Header from "./Header";
import Navigation from "./Navigation";
import { products as defaultProducts, Product } from "../lib/products";
import Banner from "./Banner";

type CartItem = { product: Product; quantity: number };

export default function Storefront({ products }: { products?: Product[] }) {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [flashMessage, setFlashMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      const msg = sessionStorage.getItem('flashMessage');
      if (msg) {
        setFlashMessage(msg);
        sessionStorage.removeItem('flashMessage');
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const found = prev.find((p) => p.product.id === product.id);
      if (found) {
        return prev.map((p) => p.product.id === product.id ? { ...p, quantity: p.quantity + 1 } : p);
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((p) => p.product.id !== productId));
  };

  const total = useMemo(() => cart.reduce((s, c) => s + c.product.price * c.quantity, 0), [cart]);

  return (
    <div className="max-w-5xl mx-auto w-full">
  {flashMessage && (
    <div className="bg-green-50 border border-green-200 text-green-800 p-3 rounded mb-4">
      <div className="flex items-center justify-between">
        <div>{flashMessage}</div>
        <button onClick={() => setFlashMessage(null)} className="text-sm text-green-700 underline">Dismiss</button>
      </div>
    </div>
  )}
  <Header cartCount={cart.reduce((s, c) => s + c.quantity, 0)} onToggleCart={() => setCartOpen((v) => !v)} />
  <Navigation />
  {/* Banner with background image */}
      <Banner 
        title="Launching Soon"
        subtitle="Best Kurtis and Suits Collection in affordable Prices"
        backgroundImage="/images/banner.png"
        className="min-h-screen flex items-center"
      />
  {/* If a products prop is provided, check for data. If it's an empty array show fallback message. */}
  {Array.isArray(products) && products.length === 0 ? (
    <div className="py-8 text-center text-gray-600">No products available.</div>
  ) : (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {(products && products.length > 0 ? products : defaultProducts).map((p) => (
        <ProductCard key={p.id} product={p} onAdd={addToCart} />
      ))}
    </section>
  )}

      {cartOpen && (
        <aside className="fixed right-6 top-20 w-80 bg-white border rounded p-4 shadow-lg">
          <h4 className="font-semibold mb-3">Your cart</h4>
          {cart.length === 0 ? (
            <div className="text-sm text-gray-500">Cart is empty.</div>
          ) : (
            <div className="flex flex-col gap-3">
              {cart.map((item) => (
                <div key={item.product.id} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{item.product.name}</div>
                    <div className="text-sm text-gray-500">{item.quantity} × {(item.product.price/100).toLocaleString(undefined, { style: 'currency', currency: 'USD' })}</div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="font-medium">{((item.product.price * item.quantity)/100).toLocaleString(undefined, { style: 'currency', currency: 'USD' })}</div>
                    <button onClick={() => removeFromCart(item.product.id)} className="text-sm text-red-600">Remove</button>
                  </div>
                </div>
              ))}

              <div className="border-t pt-3 flex items-center justify-between">
                <div className="font-semibold">Total</div>
                <div className="font-semibold">{(total/100).toLocaleString(undefined, { style: 'currency', currency: 'USD' })}</div>
              </div>

              <button className="bg-black text-white py-2 rounded mt-2">Checkout</button>
            </div>
          )}
        </aside>
      )}
    </div>
  );
}
