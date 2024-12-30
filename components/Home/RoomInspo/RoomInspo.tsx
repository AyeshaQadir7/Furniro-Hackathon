"use client";
import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
        image: "/assets/carousel/innerpeace.png",
      },
      {
        id: "3",
        name: "03 -- White Bed Frame",
        image: "/assets/carousel/innerpeace.png",
        description: "An Elevated Marshmallow White Bed Frame",
      },
    ],
  };

  return (
    <section className="w-full h-auto flex flex-col py-8 px-4 sm:px-8 bg-Creame bg-opacity-75 items-center">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center lg:items-start m-auto text-center lg:text-left p-8">
        <div className="w-full lg:w-1/3 lg:pr-8 md:mt-20 items-center">
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

        {/* Carousel */}
        <div className="sm:w-2/4 flex justify-end ">
          <Carousel>
            <CarouselContent>
              {data.RoomInspo.map((room) => (
                <CarouselItem key={room.id}>
                  <div className="relative m-8">
                    <Image
                      className="w-full h-auto"
                      src={room.image}
                      alt={room.name}
                      layout="responsive"
                      width={200}
                      height={400}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-all duration-300 p-4 text-white text-center">
                      <div>
                        <h3 className="text-base text-white">{room.name}</h3>
                        <p className="font-bold text-xl mt-2">
                          {room.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default RoomInspo;
