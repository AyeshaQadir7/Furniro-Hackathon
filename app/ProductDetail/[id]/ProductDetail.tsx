"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Product {
  _id: number;
  name: string;
  price: string;
  des: string;
  des2: string;
  images: string[];
  sku: string;
  category: string;
  tags: string[];
  sizes: string[];
  colors: string[];
}

export default function ProductDetail({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const handleQuantityChange = (type: string) => {
    if (type === "increment") {
      setQuantity(quantity + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      {/* Banner */}
      <div className="bg-Creame flex items-center gap-6 px-8 py-6">
        <div className="flex gap-4">
          <Link href={"/"} className="opacity-60">
            <h3>Home</h3>
          </Link>
          <ChevronRight strokeWidth={1.5} />
          <Link href={"/shop"} className="opacity-60">
            <h3>Shop</h3>
          </Link>
          <ChevronRight strokeWidth={1.5} />
        </div>
        <div className="text-4xl font-extralight opacity-80">|</div>
        <div>{product.name}</div>
      </div>

      {/* Product Detail */}
      <div className="container my-8 mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-DarkBrown">
        {/* Product Images Section */}
        <div className="flex gap-6">
          {/* Thumbnail Images (Left Side) */}
          <div className="flex flex-col gap-4">
            {product.images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={product.name}
                width={100}
                height={100}
                className={`rounded-sm cursor-pointer ${
                  selectedImage === img ? "border border-DarkBrown" : ""
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>

          {/* Main Product Image */}
          <div>
            <Image
              src={selectedImage}
              alt={product.name}
              width={500}
              height={500}
              className="rounded-sm"
            />
          </div>
        </div>

        {/* Product Details Section */}
        <div className="text-start">
          <h1 className="text-4xl font-semibold mb-4">{product.name}</h1>
          <p className="text-2xl text-DarkBrown opacity-80 mb-6">
            {product.price}
          </p>
          <p className="text-md text-gray-700 mb-6">{product.des}</p>

          {/* Sizes */}
          <div className="mb-4">
            <h3 className="text-md font-medium opacity-80">Sizes</h3>
            <div className="flex gap-4 mt-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="bg-Creame rounded-md px-4 py-2 hover:bg-Gold hover:text-white transition"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="mb-6">
            <h3 className="text-md font-medium opacity-80">Colors</h3>
            <div className="flex gap-4 mt-2">
              {product.colors.map((color) => (
                <div
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full cursor-pointer border-2 ${
                    selectedColor === color ? "border-Gold" : "border-gray-400"
                  }`}
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mb-6 flex items-center gap-6 ">
            <div className="flex items-center gap-2 border border-DarkBrown rounded-lg border-opacity-60">
              <button
                onClick={() => handleQuantityChange("decrement")}
                className="px-3 py-1"
              >
                -
              </button>
              <span className="px-2 py-2">{quantity}</span>
              <button
                onClick={() => handleQuantityChange("increment")}
                className=" px-3 py-1 "
              >
                +
              </button>
            </div>
            {/* Add to Cart */}
            <button className="items-center py-2 px-6 gap-2 border border-DarkBrown rounded-lg border-opacity-80 hover:bg-Creame transition">
              Add to Cart
            </button>
          </div>

          <div className="border-b-2 my-14"></div>

          {/* Additional Details */}
          <div className="text-DarkBrown opacity-65">
            <p>
              <span className="mr-3">SKU:</span> {product.sku}
            </p>
            <p>
              <span className="mr-3">Category:</span> {product.category}
            </p>
            <p>
              <span className="mr-3">Tags:</span> {product.tags.join(", ")}
            </p>
          </div>
        </div>
      </div>

      <div className="border-b-2 my-14"></div>

      {/* Description */}
      <div className="flex flex-col items-center justify-center ">
        <h3 className="font-semibold text-xl my-6">Description</h3>
        <p className="text-sm text-gray-600 mb-6 w-2/3">{product.des2}</p>
      </div>
    </>
  );
}
