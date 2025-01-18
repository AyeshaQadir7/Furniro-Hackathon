"use client";
import { Heart, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

// Define Product Type
interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  productImage: string;
  dicountPercentage?: string;
  isNew?: string;
}

const ProductSection = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"] | order(_createdAt desc)[0...16] { 
          _id, 
          title, 
          price, 
         description, 
          "productImage": productImage.asset->url, 
          dicountPercentage, 
          isNew 
        }`;
        const data = await client.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section>
      <h2 className="flex justify-center mt-14 mb-8 text-DarkBrown text-4xl font-semibold">
        Our Products
      </h2>

      <div className="overflow-x-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16 px-4 sm:px-16">
          {products.map((product) => (
            <Link
              key={product._id}
              href={`/ProductDetail/${product._id}`}
              passHref
            >
              <div className="relative group w-full max-w-sm justify-center overflow-hidden bg-zinc-100 rounded-md transition-all duration-300 ease-in-out mb-6 cursor-pointer">
                {/* Product Image */}
                <div className="relative w-full h-68">
                  {/* Conditional Discount Tag */}
                  {product.dicountPercentage && (
                    <div className="absolute top-4 right-4 bg-red-400 text-white text-sm font-normal py-3 px-1 rounded-full">
                      <span className="mx-2 my-4">
                        {product.dicountPercentage}%
                      </span>
                    </div>
                  )}

                  {/* Conditional New Tag */}
                  {product.isNew && (
                    <div className="absolute top-4 right-4 bg-teal-400 leading-tight text-white text-sm font-medium py-4 px-2 rounded-full">
                      New
                      {product.isNew}
                    </div>
                  )}

                  <Image
                    src={product.productImage}
                    alt="hello"
                    width={300}
                    height={400}
                    className="object-cover w-full h-80 transition-transform duration-300 ease-in-out"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-DarkBrown opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>

                  {/* Add to Cart Button Hover Icons (Like and Share) */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-Gold px-6 py-2 font-semibold  hover:bg-Gold hover:text-white transition-all duration-300">
                      Add to Cart
                    </button>
                    <div className="flex justify-center gap-6">
                      <button className="text-white hover:text-Gold transition-colors duration-300">
                        <Heart />
                      </button>
                      <button className="text-white hover:text-Gold transition-colors duration-300">
                        <Share2 />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-4 text-start">
                  <h3 className="text-xl font-medium mb-2 text-zinc-800">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-1">
                    {product.description}
                  </p>
                  <p className="mb-4 text-zinc-800 text-lg">{product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
