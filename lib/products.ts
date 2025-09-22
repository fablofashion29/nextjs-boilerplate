export type Product = {
  id: string;
  name: string;
  price: number; // cents
  description: string;
  image?: string;
  sku?: string;
};

export const products: Product[] = [
  {
    id: "prod_1",
    name: "Classic White Tee",
    price: 1999,
    description: "Soft, 100% cotton white t-shirt — the wardrobe staple.",
    image: "/file.svg",
    sku: "CW-TEE-001",
  },
  {
    id: "prod_2",
    name: "Denim Jacket",
    price: 7999,
    description: "Durable denim jacket with a relaxed fit.",
    image: "/globe.svg",
    sku: "DN-JKT-002",
  },
  {
    id: "prod_3",
    name: "Runner Sneakers",
    price: 10999,
    description: "Lightweight sneakers for everyday wear.",
    image: "/window.svg",
    sku: "RN-SNK-003",
  },
  {
    id: "prod_4",
    name: "Leather Belt",
    price: 2999,
    description: "Full-grain leather belt with classic buckle.",
    image: "/next.svg",
    sku: "LB-BLT-004",
  },
];
