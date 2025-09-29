import Image from "next/image";
import React from "react";
import PageHeader from "@/components/Page/PageHeader"

export const metadata = {
  title: "About — Fablo Fashion",
  description: "About Fablo Fashion — sustainable, stylish clothing",
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <PageHeader logoSrc="/fablo-fashion.png" altText="Fablo Fashion Logo" />
      <h1 className="text-3xl font-bold mb-4">About Fablo Fashion</h1>
      <p className="text-gray-700 mb-6">
        Fablo Fashion is a small, independent brand dedicated to creating
        sustainable, timeless pieces. We believe in quality craftsmanship,
        responsible sourcing, and designs that last season after season.
      </p>

      <div className="mb-8">
        <Image
          src="/fablo-fashion.png"
          alt="Fablo Fashion"
          width={1200}
          height={400}
          className="w-full h-auto rounded-lg shadow-sm"
        />
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Our Mission</h2>
        <p className="text-gray-700">
          We aim to make fashion that feels good to wear and good for the
          planet. From eco-friendly materials to low-waste production, every
          choice is guided by our commitment to sustainability.
        </p>

        <h2 className="text-xl font-semibold">Craftsmanship</h2>
        <p className="text-gray-700">
          Each piece is thoughtfully designed and produced in small batches to
          ensure high standards and minimal waste.
        </p>

        <h2 className="text-xl font-semibold">Get in touch</h2>
        <p className="text-gray-700">
          Questions? Collaborations? Email us at <a href="mailto:hello@fablo.com" className="underline">hello@fablo.com</a>.
        </p>
      </section>
    </main>
  );
}
