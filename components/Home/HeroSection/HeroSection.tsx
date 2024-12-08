import React from "react";
import Image from "next/image";

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
      <div className="relative h-full flex items-center justify-end px-4 sm:px-8 md:px-16 lg:px-24 text-start text-white gap-4 sm:gap-8">
        <div className="bg-Creame py-8 sm:py-12 px-6 sm:px-8 rounded-md text-gray-950 max-w-md md:max-w-lg lg:max-w-xl mt-[-300px] md:mt-0">
          <h3 className="text-lg sm:text-lg font-medium">New Arrival</h3>
          <h2 className="text-4xl sm:text-4xl lg:text-5xl font-bold my-4 text-Gold">
            Discover our <br />
            New Collection
          </h2>
          <p className="text-md sm:text-base mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            tempore?
          </p>
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-Gold hover:bg-yellow-700 text-white text-lg sm:text-base">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
