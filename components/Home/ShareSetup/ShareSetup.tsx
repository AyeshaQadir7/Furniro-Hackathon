import React from "react";
import Image from "next/image";

function ShareSetup() {
  return (
    <section className="relative py-8 px-4 sm:px-8 w-full md:min-h-screen md:my-8">
      <p className="text-gray-600 font-semibold text-center">
        Share your setup with
      </p>
      <h2 className="font-bold text-2xl sm:text-3xl mb-2 text-zinc-700 text-center">
        #FurniroFurniture
      </h2>
      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
        <Image
          src="/assets/shareyoursetup.png"
          alt="Share your setup"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </section>
  );
}

export default ShareSetup;
