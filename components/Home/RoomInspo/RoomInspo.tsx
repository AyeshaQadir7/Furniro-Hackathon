"use client";
import React, { useState } from "react";
import Image from "next/image";

function RoomInspo() {
  const data = {
    RoomInspo: [
      {
        id: "1",
        name: "01 -- Bedroom",
        description: "Inner Peace",
        image: "/assets/carousel/innerpeace.png",
      },
      {
        id: "2",
        name: "02 -- Cute Room",
        description: "Inner Peace",
        image: "/assets/carousel/cuteroom.png",
      },
      {
        id: "3",
        name: "03 -- White Bed Frame",
        image: "/assets/carousel/innerpeace.png",
        description: "An Elevated Marshmellow White Bed Frame",
      },
      {
        id: "4",
        name: "04 -- Cool Coloured Room",
        description: "A room with the combination of the best cool colors.",
        image: "/assets/carousel/innerpeace.png",
      },
      {
        id: "5",
        name: "05 -- Pink Room",
        description: "A pink colored Bedroom.",
        image: "/assets/carousel/innerpeace.png",
      },
      {
        id: "6",
        name: "06 -- A Luxury Bedroom",
        description: "An Aesthetic Bedroom Design.",
        image: "/assets/carousel/innerpeace.png",
      },
    ],
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; // Number of items per page

  // Calculate the items to display based on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.RoomInspo.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.RoomInspo.length / itemsPerPage);

  // Pagination buttons
  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`w-3 h-3 mx-1 rounded-full ${
            currentPage === i ? "bg-[#B88E2F]" : "bg-Gold"
          }`}
        ></button>
      );
    }
    return pages;
  };

  return (
    <section className="w-full h-auto flex flex-col py-8 px-4 sm:px-8 bg-Creame bg-opacity-75 items-center ">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center lg:items-start m-auto text-center lg:text-left p-8 ">
        <div className="w-full lg:w-1/3 lg:pr-8 md:mt-20 items-center ">
          <h2 className="font-bold text-2xl sm:text-3xl mb-2 text-zinc-700">
            50+ Beautiful Room Inspirations
          </h2>
          <p className="text-gray-600">
            Our designer already made a lot of beautiful prototypes of rooms
            that inspire you.
          </p>

          <button className="bg-Gold text-white px-8 py-4 mt-4 hover:bg-yellow-700">
            Explore More
          </button>
        </div>

        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {currentItems.map((product) => (
            <div key={product.id} className="relative p-4 rounded-lg group">
              <Image
                className="w-full h-auto object-cover rounded-t-lg"
                src={product.image}
                alt={product.name}
                layout="responsive"
                width={700}
                height={400}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 text-white text-center">
                <div>
                  <h3 className="text-base text-white">{product.name}</h3>
                  <p className="font-bold text-xl mt-2">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8">{renderPagination()}</div>
    </section>
  );
}

export default RoomInspo;
