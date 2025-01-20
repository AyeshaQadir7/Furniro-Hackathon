import { Heart, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductSection = () => {
  const products = [
    {
      id: 1,
      name: "Nordic Table",
      price: "$200.00",
      des: "Stylish and Elegant",
      image: "/assets/products/p1.png",
      discount: "-30%",
    },
    {
      id: 2,
      name: "Nordic Table",
      price: "$200.00",
      des: "Stylish and Elegant",
      image: "/assets/products/p2.png",
    },
    {
      id: 3,
      name: "Nordic Table",
      price: "$200.00",
      des: "Stylish and Elegant",
      image: "/assets/products/p3.png",
      discount: "-50%",
    },
    {
      id: 4,
      name: "Nordic Table",
      price: "$200.00",
      des: "Stylish and Elegant",
      image: "/assets/products/p4.png",
      new: "New",
    },
    {
      id: 5,
      name: "Nordic Table",
      price: "$200.00",
      des: "Stylish and Elegant",
      image: "/assets/products/p5.png",
    },
    {
      id: 6,
      name: "Nordic Table",
      price: "$200.00",
      des: "Stylish and Elegant",
      image: "/assets/products/p6.png",
      new: "New",
    },
    {
      id: 7,
      name: "Nordic Table",
      price: "$200.00",
      des: "Stylish and Elegant",
      image: "/assets/products/p7.png",
      discount: "-50% ",
    },
    {
      id: 8,
      name: "Nordic Table",
      price: "$200.00",
      des: "Stylish and Elegant",
      image: "/assets/products/p8.png",
      new: "New",
    },
  ];

  return (
    <section>
      <h2 className="flex justify-center mt-14 mb-8 text-DarkBrown text-4xl font-semibold">
        Our Products
      </h2>

      <div className="overflow-x-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16 px-4 sm:px-16">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/ProductDetail/${product.id}`}
              passHref
            >
              <div className="relative group w-full max-w-sm justify-center overflow-hidden bg-zinc-100 rounded-md transition-all duration-300 ease-in-out mb-6 cursor-pointer">
                {/* Product Image */}
                <div className="relative w-full h-68">
                  {/* Conditional Discount Tag */}
                  {product.discount && (
                    <div className="absolute top-4 right-4 bg-red-400 text-white text-sm font-normal py-4 px-2 rounded-full">
                      {product.discount}
                    </div>
                  )}

                  {/* Conditional New Tag */}
                  {product.new && (
                    <div className="absolute top-4 right-4 bg-teal-400 leading-tight text-white text-sm font-medium py-4 px-2 rounded-full">
                      {product.new}
                    </div>
                  )}

                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-300 ease-in-out"
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
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.des}</p>
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