import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import {products as defaultProducts, Product} from "@/lib/products";
import ProductCard from "../ProductCard";
import Link from "next/link";
import Image from "next/image";
export function CarouselDemo( { products }: { products?: Product[] }) {
  console.log("CarouselDemo products:", products);
    const handleCart = () => {
    console.log("Add to cart:");
    };
  return (
    <>
     {Array.isArray(products) && products.length === 0 ? (
        <div className="py-8 text-center text-gray-600">No products available.</div>
      ) : (
     
    <Carousel className="w-full max-w-xs md:max-w-3xl lg:max-w-5xl">
      <CarouselContent>
        {(products && products.length > 0 ? products : defaultProducts).map((product, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full h-auto"
                unoptimized // allow external full URLs
          />
        ) : (
          <div className="text-sm text-gray-500">No image</div>
        )}
      
      <div className="flex text-center justify-center">
  <h3 className="font-semibold"><Link href={`/products/${product.id}`} className="hover:underline">{product.name}</Link></h3>
        {/* <p className="text-sm text-gray-600 mt-1">{product.description}</p> */}
      </div>
                
         
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
     )}
    </>
  )
}
