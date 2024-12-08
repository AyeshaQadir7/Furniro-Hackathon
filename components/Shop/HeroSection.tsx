import React from "react";
import Image from "next/image";
import { Grid, List, SlidersHorizontal } from "lucide-react";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="relative w-full bg-Creame">
      {/* Image container */}
      <div className="relative w-full h-64 ">
        <Image
          src={"/assets/shop/heroImage.png"}
          alt={"main image"}
          layout="fill"
          objectFit="cover"
        />
        {/* Text overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-center">
          <h2 className="text-4xl font-semibold">Shop</h2>
          <p className="mt-2 text-xl">
            <Link href={"/"}>Home &gt; </Link>
            <span className="opacity-70">Shop</span>
          </p>
        </div>
      </div>

      <div className="py-8 px-4 sm:px-8 w-full items-center">
        {/* Filter and sorting section */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-center   sm:space-y-0">
          {/* Filter */}
          <div className="flex items-center space-x-2 gap-4">
            <SlidersHorizontal size={24} className="" />
            <p className=" text-sm ">Filter</p>

            {/* View options */}
            <Grid size={24} className="cursor-pointer " />
            <List size={24} className="cursor-pointer " />

            {/* Show results */}
            <div className="flex items-start space-x-2">
              <p className="text-sm ">
                | Showing <span className="font-semibold">1-10</span> of{" "}
                <span className="font-semibold">100</span> results
              </p>
            </div>
          </div>

          {/* Sort By */}
          <div className="flex items-center space-x-2 gap-3">
            <p className="text-md ">Show</p>
            <select className=" p-2  text-sm bg-white">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>

            <p className="text-md ">Sort By</p>
            <select className=" p-2 text-sm bg-white">
              <option value="default">Default</option>
              <option value="price">Price</option>
              <option value="popularity">Popularity</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
