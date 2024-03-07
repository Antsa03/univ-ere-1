"use client";

type Pub = {
  photo: string[];
  contributeur: {
    nom: string;
    prenoms: string;
    photo: string;
  };
  description: string;
  type: string;
  timestamp: string;
};

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
("swiper/react");

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";
import Image from "next/image";
import {
  ChartBarIcon,
  ChatBubbleLeftIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon, Share2Icon, TrashIcon } from "@radix-ui/react-icons";

function CreatePub() {
  // Correctly initialize the state with TypeScript
  const [pubs, setPubs] = useState<Pub[]>([]);

  const pubData = [
    {
      photo: [
        "/img/astronomy.jpg",
        "/img/Black_and_Pink.png",
        "/img/clear-sound.jpg",
      ],
      contributeur: {
        nom: "Rasoa",
        prenoms: "Soa",
        photo: "/img/christopher.jpg",
      },
      description: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
      type: "",
      timestamp: "18 janvier 2023 à 08h-22 ",
    },
    {
      photo: ["/img/andrainjato.jpg"],
      contributeur: {
        nom: "Rakoto",
        prenoms: "Koto",
        photo: "/img/charlesdeluvio.jpg",
      },
      description: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
      type: "",
      timestamp: "18 janvier 2023 à 08h-22 ",
    },
    {
      photo: ["/img/astronomy.jpg", "/img/more-pejzazh.jpeg"],
      contributeur: {
        nom: "Rasoa",
        prenoms: "Soa",
        photo: "/img/christopher.jpg",
      },
      description: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
      type: "",
      timestamp: "18 janvier 2023 à 08h-22 ",
    },
  ];
  return (
    <div className="flex flex-col space-y-6">
      {pubData.map((pub) => {
        return (
          <div className="flex w-fit ml-8 px-12 py-6 cursor-pointer border-b border-gray-200 bg-custom-card shadow-sm rounded-2xl">
            <Image
              src={pub.contributeur.photo}
              alt="user-image"
              className="h-11 w-11 rounded-full mr-4"
              width={44}
              height={44}
            ></Image>

            <div className="">
              <div className="flex items-center justify-between">
                <div className="flex items-center  space-x-1 whitespace-nowrap">
                  <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
                    {pub.contributeur.nom}
                  </h4>

                  <span className="text-sm sm:text-[15px] hover:underline">
                    {pub.timestamp}
                  </span>
                </div>
                <EllipsisHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2" />
              </div>

              <p className="text-gray-800 text-[15px] sm:text-base mb-2">
                {pub.description}
              </p>

              <div className="flex justify-between text-gray-500 p-2">
                <ChatBubbleLeftIcon className="h-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
                <TrashIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-500 hover:bg-red-100" />
                <HeartIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-500 hover:bg-red-100" />
                <Share2Icon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
                <ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CreatePub;
