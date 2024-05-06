"use client";

import Link from "next/link";
import { useState } from "react";
const towns = [
  {
    name: "Nairobi",
    link: "/",
  },
  {
    name: "Kisumu",
    link: "/",
  },
  {
    name: "Mombasa",
    link: "/",
  },
  {
    name: "Nakuru",
    link: "/",
  },
  {
    name: "Eldoret",
    link: "/",
  },
  {
    name: "Naivasha",
    link: "/",
  },
  {
    name: "Machakos",
    link: "/",
  },
  {
    name: "Busia",
    link: "/",
  },
  {
    name: "Kakamega",
    link: "/",
  },
  {
    name: "Dodoma",
    link: "/",
  },
  {
    name: "Kampala",
    link: "/",
  },
];
const types = [
  {
    name: "BedSitter",
    link: "/",
  },
  {
    name: "Single",
    link: "/",
  },
  {
    name: "One Bedroom",
    link: "/",
  },
  {
    name: "Two Bedroom",
    link: "/",
  },
  {
    name: "Three Bedroom",
    link: "/",
  },
  {
    name: "Four Bedroom",
    link: "/",
  },
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Apartment",
    link: "/",
  },
];
const priceRange = [
  {
    name: "1000-5000",
    link: "/",
  },
  {
    name: "5000-10000",
    link: "/",
  },
  {
    name: "10,000- 20,000",
    link: "/",
  },
  {
    name: "20,000 -40,000",
    link: "/",
  },
  {
    name: "40,000-70,000",
    link: "/",
  },
  {
    name: "70,000 - 100,000",
    link: "/",
  },
  {
    name: "100,000- 500,000",
    link: "/",
  },
  {
    name: "500,000+",
    link: "/",
  },
];
const estates = [
  {
    name: "Donholm",
    link: "/",
  },
  {
    name: "Kitengela",
    link: "/",
  },
  {
    name: "Kahawa",
    link: "/",
  },
  {
    name: "Utawala",
    link: "/",
  },
  {
    name: "Buruburu",
    link: "/",
  },
  {
    name: "Kilimani",
    link: "/",
  },
  {
    name: "Kawangware",
    link: "/",
  },
  {
    name: "Ngong",
    link: "/",
  },
  {
    name: "Karen",
    link: "/",
  },
  {
    name: "Umoja",
    link: "/",
  },
  {
    name: "Luckysummer",
    link: "/",
  },
  {
    name: "Westlands",
    link: "/",
  },
  {
    name: "Juja",
    link: "/",
  },
  {
    name: "Kangemi",
    link: "/",
  },
  {
    name: "Langata",
    link: "/",
  },
  {
    name: "Lavington",
    link: "/",
  },
  {
    name: "Kileleshwa",
    link: "/",
  },
  {
    name: "Rongai",
    link: "/",
  },
];

const Streets = () => {
  const [showMore, setShowMore] = useState(false);
  const listToShow = showMore
    ? [towns, estates, types, priceRange]
    : [
        towns.slice(0, 5),
        estates.slice(0, 5),
        types.slice(0, 5),
        priceRange.slice(0, 5),
      ];

  const handleViewMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="flex flex-col items-center py-10">
      <div>
        <h1 className="font-bold text-4xl underline">GET HOUSES BY:</h1>
      </div>

      <div className="flex w-full justify-between p-10">
        {listToShow.map((list, index) => (
          <div key={index} className="text-xs">
            <h2 className=" font-bold mb-2">{list[0].name.split(" ")[0]}</h2>
            <ul className="flex flex-col justify-center">
              {list.map((item) => (
                <li key={item.name}>
                  <Link href={item.link} className=" hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div>
        <button
          type="submit"
          className={`   p-3 w-32 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 ${
            showMore ? "hidden" : ""
          }`}
          onClick={handleViewMore}
        >
          Show more...
        </button>
        <button
          type="submit"
          className={`  p-3 w-32 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 ${
            showMore ? "block" : "hidden"
          }`}
          onClick={handleViewMore}
        >
          Show less
        </button>
      </div>
    </div>
  );
};

export default Streets;
