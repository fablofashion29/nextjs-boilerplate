'use client';
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {products as defaultProducts, Product} from "@/lib/products";
import ProductCard from "../ProductCard";
import Link from "next/link";
import Image from "next/image";
import SliderCard from "../SliderCard";

function SliderComponent({ products }: { products?: Product[] }) {
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

const settings = {
    dots: false,
    infinite: false,
    arrows: false,
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
               <div className="productcard-wrapper p-4" key={index}>
                   <SliderCard product={product} />
                </div>
            ))}
      </Slider>
         )}
    </div>
  );
}

export default SliderComponent;
