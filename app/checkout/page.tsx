import React from "react";
import Link from "next/link";
// import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function CheckoutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full space-y-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          {/* <ArrowLeft className="h-4 w-4" /> */}
            <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Link>

        <div className="border rounded-lg p-6 space-y-6">
          <h1 className="text-3xl font-bold">Checkout</h1>

          <div className="space-y-4">
            <div className="border-b pb-4">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Product Name</p>
                  <p className="text-sm text-muted-foreground">Quantity: 1</p>
                </div>
                <p className="font-semibold">$99.99</p>
              </div>
            </div>

            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total</span>
              <span>$99.99</span>
            </div>

            <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition" disabled>
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
