"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

// Fetch Room Inspo data from Sanity
async function fetchRoomInspo() {
  const query = `*[_type == "roomInspo"] {
    _id,
    name,
    description,
    image,
    heading,
    subtext,
    buttonText
  }`;
  const data = await client.fetch(query);
  return data;
}

function RoomInspo() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [rooms, setRooms] = useState<any[]>([]);
  const [content, setContent] = useState({
    heading: "",
    subtext: "",
    buttonText: "",
  });

  useEffect(() => {
    async function getData() {
      const fetchedRooms = await fetchRoomInspo();
      setRooms(fetchedRooms);

      if (fetchedRooms.length > 0) {
        setContent({
          heading: fetchedRooms[0].heading || "50+ Beautiful Room Inspirations",
          subtext:
            fetchedRooms[0].subtext ||
            "Our designer already made a lot of beautiful prototypes of rooms that inspire you.",
          buttonText: fetchedRooms[0].buttonText || "Explore More",
        });
      }
    }
    getData();
  }, []);

  return (
    <section className="w-full h-auto flex flex-col py-4 px-4 sm:px-6 bg-Creame bg-opacity-75 items-center">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center lg:items-start m-auto text-center lg:text-left p-4 justify-between">
        <div className="w-full lg:w-2/3 lg:pr-8 items-center md:mt-36 m-2">
          <h2 className="font-semibold text-3xl sm:text-5xl mb-2 text-zinc-700 ">
            {content.heading}
          </h2>
          <p className="text-gray-600 text-lg lg:w-2/3 mb-4 mt-2">
            {content.subtext}
          </p>

          <button className="bg-Gold text-white px-8 py-4 mt-4 hover:bg-yellow-600">
            {content.buttonText}
          </button>
        </div>

        {/* Static Image */}
        <div className="sm:w-2/5 flex justify-end">
          {rooms.length > 0 && (
            <div className="relative m-8">
              <Image
                className="w-2 h-2"
                src={urlFor(rooms[0].image.asset).url()}
                alt={rooms[0].name}
                layout="responsive"
                width={100}
                height={100}
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-all duration-300 p-4 text-white text-center">
                <div>
                  <h3 className="text-base text-white">{rooms[0].name}</h3>
                  <p className="font-bold text-xl mt-2">
                    {rooms[0].description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default RoomInspo;
