"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Trash } from "lucide-react";

function Cart() {
  const [quantity, setQuantity] = useState(1);
  const price = 50;
  const subtotal = quantity * price;

  const handleQuantityChange = (e: { target: { value: string } }) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 text-DarkBrown">
      {/* Cart Items Section */}
      <div className="lg:col-span-2 space-y-6">
        {/* Header */}
        <div className="bg-Creame rounded-lg grid grid-cols-6 items-center text-xs md:text-lg font-medium px-3 md:px-6 py-3">
          <h2 className="col-span-3 md:col-span-2">Product</h2>
          <h2 className="hidden md:block">Price</h2>
          <h2>Quantity</h2>
          <h2 className="hidden md:block">Subtotal</h2>
        </div>

        {/* Product Item */}
        <div className="grid grid-cols-6 items-center border-b pb-4 px-3 gap-4">
          <div className="col-span-4 md:col-span-2 flex items-center space-x-4">
            <Image
              src="/assets/cart/c1.png"
              alt="Product"
              width={80}
              height={80}
              className="object-cover"
            />
            <h3 className="text-sm md:text-lg">Asgaard sofa</h3>
          </div>

          {/* Price (Hidden on Mobile) */}
          <p className="text-gray-600 hidden md:block">${price.toFixed(2)}</p>

          {/* Quantity and Trash Inline */}
          <div className="col-span-2 flex items-center justify-between gap-2">
            <input
              type="number"
              className="w-16 text-center border rounded-md focus:ring-0"
              value={quantity}
              onChange={handleQuantityChange}
            />
            <Trash className="cursor-pointer text-DarkBrown" />
          </div>

          {/* Subtotal for Desktop */}
          <p className="text-gray-900 font-semibold hidden md:block">
            ${subtotal.toFixed(2)}
          </p>
        </div>

        {/* Subtotal for Mobile (Visible Only on Small Screens) */}
        <div className="flex justify-between items-center text-sm font-medium md:hidden mt-3">
          <p>Subtotal:</p>
          <p className="text-gray-900">${subtotal.toFixed(2)}</p>
        </div>
      </div>

      {/* Summary Section */}
      <div className="p-4 md:p-6 rounded-lg h-fit bg-Creame">
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">
          Cart Totals
        </h2>
        <div className="flex justify-between mb-4">
          <p className="text-gray-600">Subtotal</p>
          <p className="text-gray-900">${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between mb-6">
          <p className="text-gray-600">Total</p>
          <p className="text-Gold text-lg md:text-xl font-semibold">
            ${subtotal.toFixed(2)}
          </p>
        </div>
        <button className="w-full bg-transparent border border-DarkBrown text-DarkBrown py-3 rounded-lg hover:bg-white transition">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
