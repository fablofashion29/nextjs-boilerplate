'use client';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {products as defaultProducts, Product} from "@/lib/products";
import ProductCard from "../ProductCard";
import Link from "next/link";
import Image from "next/image";

function SliderComponent({ products }: { products?: Product[] }) {
const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container w-full">
        {Array.isArray(products) && products.length === 0 ? (
        <div className="py-8 text-center text-gray-600">No products available.</div>
      ) : (
      <Slider {...settings}>
            {(products && products.length > 0 ? products : defaultProducts).map((product, index) => (
                <div key={index} className="p-2">
                    {product.image ? (
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={300}
                            height={300}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="w-full h-auto"
                            unoptimized // allow external full URLs
                        />
                    ) : (
                        <div className="text-sm text-gray-500">No image</div>
                    )}
                    </div>
            ))}
      </Slider>
         )}
    </div>
  );
}

export default SliderComponent;
