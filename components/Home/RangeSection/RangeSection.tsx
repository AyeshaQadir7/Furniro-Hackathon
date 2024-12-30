import React from "react";
import Image from "next/image";

function RangeSection() {
  return (
    <section className="py-8 my-8">
      {/* Heading and Paragraph */}
      <div className="text-center mx-6 mb-6">
        <h2 className="font-bold text-2xl sm:text-3xl mb-2 text-DarkBrown">
          Browse The Range
        </h2>
        <p className=" text-DarkBrown ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      {/* Images with Descriptions */}
      <div className="grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-3 gap-3 place-items-center mt-8 mx-6 ">
        {/* Image 1  */}
        <div className="text-center">
          <Image
            src="/assets/dinning.png"
            alt="Dining Range"
            width={250}
            height={250}
            className="rounded-lg shadow-lg"
          />
          <p className="mt-3 text-DarkBrown font-semibold tracking-wide text-xl">
            Dining
          </p>
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
          <p className="mt-3 text-DarkBrown font-semibold tracking-wide text-xl">
            Living
          </p>
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
          <p className="mt-3 text-DarkBrown font-semibold tracking-wide text-xl">
            Bedroom
          </p>
        </div>
      </div>
    </section>
  );
}

export default RangeSection;
