import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <>
      <hr className="my-8 border-gray-300" />
      <section className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full px-6 md:px-16 py-6">
        {/* Brand and Address */}
        <div className="text-center md:text-start ">
          <h1 className="text-3xl font-bold text-DarkBrown mb-4">Furniro.</h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            400 University Drive Suite 200 Coral
            <br />
            Gables, FL 33134 USA
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h2 className="text-lg font-semibold text-DarkBrown mb-4">Links</h2>
          <div className="flex flex-col gap-y-3">
            <Link className="hover:text-gray-900 text-gray-600" href="/">
              Home
            </Link>
            <Link className="hover:text-gray-900 text-gray-600" href="/shop">
              Shop
            </Link>
            <Link className="hover:text-gray-900 text-gray-600" href="/blog">
              Blog
            </Link>
            <Link className="hover:text-gray-900 text-gray-600" href="/contact">
              Contact
            </Link>
          </div>
        </div>

        {/* Help Section */}
        <div>
          <h2 className="text-lg font-semibold text-DarkBrown mb-4">Help</h2>
          <div className="flex flex-col gap-y-3">
            <Link className="hover:text-gray-900 text-gray-600" href="/">
              Payment Options
            </Link>
            <Link className="hover:text-gray-900 text-gray-600" href="/">
              Returns
            </Link>
            <Link className="hover:text-gray-900 text-gray-600" href="/">
              Privacy Policies
            </Link>
          </div>
        </div>

        {/* Newsletter Section */}
        <div>
          <h2 className="text-lg font-semibold text-DarkBrown mb-4">
            Newsletter
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Subscribe to stay updated on our latest news and offers.
          </p>
          <form className="flex items-center justify-start">
            <input
              type="email"
              className="w-60 py-2 underline  text-DarkBrown text-start  focus:outline-none focus:ring-0"
              placeholder="Enter your email address"
            />
            <button className="px-2 py-2 font-semibold uppercase underline">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <hr className="my-6 border-gray-300" />

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-4 px-6 md:px-16 py-2 text-gray-600">
        <p>© 2024 Furniro. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link
            className="hover:text-gray-900 text-gray-600 transition"
            href="/"
          >
            Terms of Service
          </Link>
          <Link
            className="hover:text-gray-900 text-gray-600 transition"
            href="/"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
