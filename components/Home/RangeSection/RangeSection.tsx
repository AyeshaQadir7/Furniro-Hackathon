import React from "react";
import Image from "next/image";

function RangeSection() {
  return (
    <section className="py-8">
      {/* Heading and Paragraph */}
      <div className="text-center mb-6">
        <h2 className="font-bold text-2xl sm:text-3xl mb-2 text-zinc-700">
          Browse The Range
        </h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      {/* Images with Descriptions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {/* Image 1 */}
        <div className="text-center">
          <Image
            src="/assets/dinning.png"
            alt="Dining Range"
            width={250}
            height={250}
            className="rounded-lg shadow-lg"
          />
          <p className="mt-2 text-gray-700 font-semibold">Dining Range</p>
        </div>

        {/* Image 2 */}
        <div className="text-center">
          <Image
            src="/assets/living.png"
            alt="Living Range"
            width={250}
            height={250}
            className="rounded-lg shadow-lg"
          />
          <p className="mt-2 text-gray-700 font-semibold">Living Range</p>
        </div>

        {/* Image 3 */}
        <div className="text-center">
          <Image
            src="/assets/bedroom.png"
            alt="Bedroom Range"
            width={250}
            height={250}
            className="rounded-lg shadow-lg"
          />
          <p className="mt-2 text-gray-700 font-semibold">Bedroom Range</p>
        </div>
      </div>
    </section>
  );
}

export default RangeSection;
