import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fablo Fashion",
  description: "Shop the latest trends in fashion at Fablo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/fablo-fashion.png" type="image/png" />
        <meta charSet="UTF-8" />
        <link rel="shortcut icon" href="/favicon-icon-fablofashion.png" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Fablo Fashion</title>
        <meta name="description" content="Shop the latest trends in fashion at Fablo." />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
