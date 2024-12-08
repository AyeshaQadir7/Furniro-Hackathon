import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <>
      <hr className="my-8" />
      <section className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full h-auto px-4 md:px-16 sm:px-8 py-8">
        <div>
          <h1 className="text-2xl font-bold mb-2">Furniro.</h1>
          <p className="text-base leading-relaxed opacity-90 mt-4">
            400 University Drive Suite 200 Coral
            <br />
            Gables, FL 33134 USA
          </p>
        </div>
        <div>
          <h1 className=" opacity-75 text-base font-semibold mb-2">Links</h1>
          <nav className="flex flex-col gap-y-2 mt-6">
            <Link className="hover:underline font-medium" href="/">
              Home
            </Link>
            <Link className="hover:underline font-medium" href="/shop">
              Shop
            </Link>
            <Link className="hover:underline font-medium" href="/about">
              About
            </Link>
            <Link className="hover:underline font-medium" href="/contact">
              Contact
            </Link>
          </nav>
        </div>
        <div>
          <h1 className="opacity-75 text-base font-semibold mb-2">Help</h1>
          <nav className="flex flex-col gap-y-2 mt-6">
            <Link className="hover:underline font-medium" href="/">
              Payment Options
            </Link>
            <Link className="hover:underline font-medium" href="/shop">
              Returns
            </Link>
            <Link className="hover:underline font-medium" href="/about">
              Privacy Policies
            </Link>
          </nav>
        </div>
        <div>
          <h1 className="opacity-75 text-base font-semibold mb-2">
            Newsletter
          </h1>
          <form className="mt-6 flex ">
            <input
              type="text"
              className="focus:outline-none py-2 rounded-md w-full sm:w-auto underline"
              placeholder="Enter Your Email Address"
            />
            <button className=" text-black underline md:px-2 py-2 ">
              Subscribe
            </button>
          </form>
        </div>
      </section>
      <hr className="my-8" />
      <div className="flex items-center md:px-10 px-4 pb-5">
        <p>2023 Furniro. All rights reserved</p>
      </div>
    </>
  );
}

export default Footer;
