import { Heart, Share, ShoppingCart } from "lucide-react";
import Image from "next/image";

const ProductSection = () => {
  const products = [
    {
      id: 1,
      name: "Nordic Table",
      price: "$200.00",
      des: "Stylish and Elegant",
      image: "/assets/products/p1.png",
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
    },
    {
      id: 4,
      name: "Nordic Table",
      price: "$200.00",
      des: "Stylish and Elegant",
      image: "/assets/products/p4.png",
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
    },
    {
      id: 7,
      name: "Nordic Table",
      price: "$200.00",
      des: "Stylish and Elegant",
      image: "/assets/products/p7.png",
    },
    {
      id: 8,
      name: "Nordic Table",
      price: "$200.00",
      des: "Stylish and Elegant",
      image: "/assets/products/p8.png",
    },
  ];

  return (
    <>
      <h2 className="flex justify-center mt-14 mb-8 text-zinc-800 text-4xl font-semibold">
        Our Products
      </h2>

      {/* Wrapper for horizontally scrollable products on mobile */}
      <div className="overflow-x-auto sm:overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16 mx-4 sm:mx-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative group w-full max-w-sm mx-auto overflow-hidden bg-zinc-100 rounded-md transition-all duration-300 ease-in-out"
            >
              {/* Product Image */}
              <div className="relative w-full h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-300 ease-in-out"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

                {/* Add to Cart Button */}
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white text-Gold px-8 py-4 font-semibold mb-4">
                    Add to cart
                  </button>

                  {/* Hover Icons (Like and Share) */}
                  <div className="absolute inset-0 flex justify-center items-end gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-6">
                    <button className="text-white hover:text-Gold">
                      <Heart />
                    </button>
                    <button className="text-white hover:text-Gold">
                      <Share />
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
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductSection;
