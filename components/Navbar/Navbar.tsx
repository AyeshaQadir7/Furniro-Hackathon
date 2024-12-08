"use client";
import { Heart, Menu, Search, ShoppingCart, UserRound } from "lucide-react";
import React from "react";
import Image from "next/image";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

function Navbar() {
  return (
    <>
      {/* Navbar for large screens */}
      <nav className="hidden md:flex items-center justify-between px-10 py-6 max-w-screen-[1300px]">
        {/* Logo */}
        <Image
          src={"/assets/logo.png"}
          alt="furniro"
          width={200}
          height={200}
        />

        {/* Navigation Links */}
        <ul className="flex gap-14 text-lg">
          <li className="hover:text-gray-600 cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-gray-600 cursor-pointer">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="hover:text-gray-600 cursor-pointer">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="hover:text-gray-600 cursor-pointer">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Search and Icons */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-8">
            <button aria-label="signin">
              <Link href="/signin">
                <UserRound />
              </Link>
            </button>
            <button aria-label="search">
              <Link href="/search">
                <Search />
              </Link>
            </button>
            <button aria-label="wish list">
              <Link href="/wishlist">
                <Heart />
              </Link>
            </button>

            <Sheet>
              <SheetTrigger>
                <ShoppingCart />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="my-8 text-xl border-b-2">
                    Shopping Cart
                  </SheetTitle>
                  <SheetDescription>
                    <div className="container mx-auto px-4 py-8">
                      {/* Cart Item */}
                      <div className="border-b pb-6 mb-6">
                        {/* Product 1 */}
                        <div className="flex items-center gap-8">
                          {/* Image Section */}
                          <div className="w-32 h-32 flex-shrink-0">
                            <Image
                              src="/assets/cart/c1.png"
                              alt="Product Name"
                              width={128}
                              height={128}
                              className="w-full h-full object-cover rounded"
                            />
                          </div>

                          {/* Details Section */}
                          <div className="flex flex-col flex-grow">
                            {/* Product Name */}
                            <h2 className="text-lg font-semibold mb-2">
                              Asgaard Sofa
                            </h2>

                            {/* Quantity and Price */}
                            <div className="mb-4">
                              {/* Quantity */}
                              <div className="flex items-center gap-2">
                                <span className="text-gray-600">
                                  Quantity: 1 x
                                </span>
                              </div>
                              {/* Price */}
                              <div className="flex items-start gap-2 mt-2">
                                <span className="text-gray-600">Price:</span>
                                <span className="font-medium text-Gold">
                                  $150.00
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Product 2 */}
                        <div className="flex items-center gap-8 mt-8">
                          {/* Image Section */}
                          <div className="w-32 h-32 flex-shrink-0">
                            <Image
                              src="/assets/cart/c2.png"
                              alt="Product Name"
                              width={128}
                              height={128}
                              className="w-full h-full object-cover rounded"
                            />
                          </div>

                          {/* Details Section */}
                          <div className="flex flex-col flex-grow">
                            {/* Product Name */}
                            <h2 className="text-lg font-semibold mb-2">
                              Nordic Table
                            </h2>

                            {/* Quantity and Price */}
                            <div className="mb-4">
                              {/* Quantity */}
                              <div className="flex items-center gap-2">
                                <span className="text-gray-600">
                                  Quantity: 2 x
                                </span>
                              </div>
                              {/* Price */}
                              <div className="flex items-start gap-2 mt-2">
                                <span className="text-gray-600">Price:</span>
                                <span className="font-medium text-Gold">
                                  $300.00
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Subtotal */}
                      <div className="flex justify-between items-center mt-6">
                        <span className="text-gray-600 text-xl">Subtotal:</span>
                        <span className="text-xl font-semibold text-Gold">
                          $450.00
                        </span>
                      </div>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Navbar for small screens */}
      <nav className="flex justify-between items-center px-4 py-6 md:hidden">
        {/* Logo */}
        <Image
          src={"/assets/logo.png"}
          alt="furniro"
          width={150}
          height={150}
        />

        {/* Hamburger Menu */}
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              {/* Sheet Logo */}
              <SheetTitle className="mt-8 uppercase font-bold text-xl">
                {/* Logo */}
                <Image
                  src={"/assets/logo.png"}
                  alt="furniro"
                  width={150}
                  height={150}
                  className="my-12"
                />
              </SheetTitle>
              <SheetDescription>
                {/* Navigation Links */}
                <ul className="flex flex-col items-start gap-6 text-lg">
                  <li className="hover:text-gray-600 cursor-pointer">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer">
                    <Link href="/shop">Shop</Link>
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer">
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer">
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>

                {/* Icons */}
                <div className="flex gap-6 my-6">
                  <button aria-label="signin">
                    <Link href="/signin">
                      <UserRound />
                    </Link>
                  </button>
                  <button aria-label="search">
                    <Link href="/search">
                      <Search />
                    </Link>
                  </button>
                  <button aria-label="wish list">
                    <Link href="/wishlist">
                      <Heart />
                    </Link>
                  </button>
                  <Sheet>
                    <SheetTrigger>
                      <ShoppingCart />
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle className="my-8 text-xl border-b-2">
                          Shopping Cart
                        </SheetTitle>
                        <SheetDescription>
                          <div className="container mx-auto px-4 py-8">
                            {/* Cart Item */}
                            <div className="border-b pb-6 mb-6">
                              {/* Product 1 */}
                              <div className="flex items-center gap-8">
                                {/* Image Section */}
                                <div className="w-32 h-32 flex-shrink-0">
                                  <Image
                                    src="/assets/cart/c1.png"
                                    alt="Product Name"
                                    width={128}
                                    height={128}
                                    className="w-full h-full object-cover rounded"
                                  />
                                </div>

                                {/* Details Section */}
                                <div className="flex flex-col flex-grow">
                                  {/* Product Name */}
                                  <h2 className="text-lg font-semibold mb-2">
                                    Asgaard Sofa
                                  </h2>

                                  {/* Quantity and Price */}
                                  <div className="mb-4">
                                    {/* Quantity */}
                                    <div className="flex items-center gap-2">
                                      <span className="text-gray-600">
                                        Quantity: 1 x
                                      </span>
                                    </div>
                                    {/* Price */}
                                    <div className="flex items-start gap-2 mt-2">
                                      <span className="text-gray-600">
                                        Price:
                                      </span>
                                      <span className="font-medium text-Gold">
                                        $150.00
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Product 2 */}
                              <div className="flex items-center gap-8 mt-8">
                                {/* Image Section */}
                                <div className="w-32 h-32 flex-shrink-0">
                                  <Image
                                    src="/assets/cart/c2.png"
                                    alt="Product Name"
                                    width={128}
                                    height={128}
                                    className="w-full h-full object-cover rounded"
                                  />
                                </div>

                                {/* Details Section */}
                                <div className="flex flex-col flex-grow">
                                  {/* Product Name */}
                                  <h2 className="text-lg font-semibold mb-2">
                                    Nordic Table
                                  </h2>

                                  {/* Quantity and Price */}
                                  <div className="mb-4">
                                    {/* Quantity */}
                                    <div className="flex items-center gap-2">
                                      <span className="text-gray-600">
                                        Quantity: 2 x
                                      </span>
                                    </div>
                                    {/* Price */}
                                    <div className="flex items-start gap-2 mt-2">
                                      <span className="text-gray-600">
                                        Price:
                                      </span>
                                      <span className="font-medium text-Gold">
                                        $300.00
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Subtotal */}
                            <div className="flex justify-between items-center mt-6">
                              <span className="text-gray-600 text-xl">
                                Subtotal:
                              </span>
                              <span className="text-xl font-semibold text-Gold">
                                $450.00
                              </span>
                            </div>
                          </div>
                        </SheetDescription>
                      </SheetHeader>
                    </SheetContent>
                  </Sheet>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </>
  );
}

export default Navbar;
