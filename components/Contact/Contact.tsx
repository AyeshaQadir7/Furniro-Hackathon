import React from "react";
import Image from "next/image";
import Link from "next/link";

function Contact() {
  return (
    <section className="relative w-full bg-Creame">
      {/* Image container */}
      <div className="relative w-full h-64 ">
        <Image
          src={"/assets/blog/heroImage.png"}
          alt={"main image"}
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
        {/* Text overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-center">
          <h2 className="text-4xl font-semibold">Contact</h2>
          <p className="mt-2 text-xl">
            <Link href={"/"}>Home &gt; </Link>
            <span className="opacity-70">Contact</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
