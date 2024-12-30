import React from "react";
import Image from "next/image";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="relative w-full h-screen">
      {/* Hero Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/heroImage.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      {/* Text Overlay */}
      <div className="relative h-full flex items-center justify-end px-4 mx-4 sm:px-8 md:px-16 lg:px-24 text-start text-white gap-4 sm:gap-8">
        <div className="bg-Creame py-8 sm:py-12 px-6 sm:px-8 rounded-md text-DarkBrown max-w-md md:max-w-lg lg:max-w-xl mt-[-200px] md:mt-0 shadow-lg">
          <h3 className="text-lg sm:text-lg font-medium">New Arrival</h3>
          <h2 className="text-4xl sm:text-4xl lg:text-5xl font-bold my-4 text-Gold">
            Discover our <br />
            New Collection
          </h2>
          <p className="text-md sm:text-base mb-4 text-DarkBrown">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            tempore?
          </p>
          <button className="px-8 md:px-10 py-3 sm:py-4 bg-Gold hover:bg-yellow-600 text-white text-xl sm:text-base">
            <Link href={"/"}> Buy Now</Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
