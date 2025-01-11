"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

// Fetch data from Sanity
async function fetchRangeData() {
  const query = `*[_type == "rangeSection"] | order(orderRank asc) {
    title,
    description,
    image
  }`;
  const sectionQuery = `*[_type == "sectionContent" && sectionName == "rangeSection"][0] {
    heading,
    paragraph
  }`;

  const [rangeData, sectionContent] = await Promise.all([
    client.fetch(query),
    client.fetch(sectionQuery),
  ]);

  return { rangeData, sectionContent };
}

function RangeSection() {
  const [rangeData, setRangeData] = useState<any[]>([]);
  const [sectionContent, setSectionContent] = useState<any>(null);

  useEffect(() => {
    async function getData() {
      const { rangeData, sectionContent } = await fetchRangeData();
      setRangeData(rangeData);
      setSectionContent(sectionContent);
    }
    getData();
  }, []);

  return (
    <section className="py-8 my-8">
      {/* Heading and Paragraph */}
      <div className="text-center mx-6 mb-6">
        <h2 className="font-bold text-2xl sm:text-3xl mb-2 text-DarkBrown">
          {sectionContent?.heading || "Browse The Range"}
        </h2>
        <p className=" text-DarkBrown ">
          {sectionContent?.paragraph ||
            "Explore our different furniture collections."}
        </p>
      </div>

      {/* Images with Descriptions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center mt-8 mx-6">
        {rangeData.length > 0 ? (
          rangeData.map((item, index) => (
            <div key={index} className="text-center">
              {item.image && (
                <Link href="/">
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.title}
                    width={250}
                    height={250}
                    className="rounded-lg shadow-lg"
                  />
                </Link>
              )}

              <p className="mt-3 text-DarkBrown font-semibold tracking-wide text-xl">
                {item.title}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">
            Loading collections...
          </p>
        )}
      </div>
    </section>
  );
}

export default RangeSection;
