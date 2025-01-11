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
      <div className="relative h-full flex items-center justify-end px-4 sm:px-8 text-start text-white gap-4">
        <div className="bg-Creame py-8 px-6 rounded-md text-DarkBrown max-w-lg shadow-lg">
          <h3 className="text-lg font-medium">{hero.subtitle}</h3>
          <h2 className="text-5xl font-bold my-4 text-Gold">{hero.title}</h2>
          <p className="text-md mb-4 text-DarkBrown">{hero.description}</p>
          <button className="px-8 py-3 bg-Gold hover:bg-yellow-600 text-white text-xl">
            <Link href={hero.ctaLink || "/"}>{hero.ctaText}</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
