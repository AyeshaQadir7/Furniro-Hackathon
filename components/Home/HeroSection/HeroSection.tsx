import React from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

async function fetchHeroSection() {
  const query = `*[_type == "heroSection"][0] {
    title,
    subtitle,
    description,
    ctaText,
    ctaLink,
    backgroundImage
  }`;

  const data = await client.fetch(query);
  return data;
}

export default async function HeroSection() {
  const hero = await fetchHeroSection();

  return (
    <section className="relative w-full h-screen">
      {/* Hero Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={urlFor(hero.backgroundImage.asset).url()}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      {/* Text Overlay */}
      <div className="relative h-full flex items-center justify-end px-4 mx-4 sm:px-8 md:px-16 lg:px-24 text-start text-white gap-4 sm:gap-8">
        <div className="bg-Creame py-8 sm:py-12 px-6 sm:px-8 rounded-md text-DarkBrown max-w-md md:max-w-lg lg:max-w-xl mt-[-200px] md:mt-0 shadow-lg">
          <h3 className="text-lg sm:text-lg font-medium">{hero.subtitle}</h3>
          <h2 className="text-4xl sm:text-4xl lg:text-5xl font-bold my-4 text-Gold">
            {hero.title}
          </h2>
          <p className="text-md sm:text-base mb-4 text-DarkBrown">
            {hero.description}
          </p>
          <button className="px-8 md:px-10 py-3 sm:py-4 bg-Gold hover:bg-yellow-600 text-white text-xl sm:text-base">
            <Link href={hero.ctaLink || "/"}>{hero.ctaText}</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
