import Image from "next/image";
import React from "react";
import home from "../../public/assets/images/homebg.jpeg";

const items = [
  {
    image: { home },
    title: "Presidential",
    street: "3022 Kitengela",
    address: "3022",
    type: "4 Bedroom",
  },
  {
    image: { home },
    title: "Lake",
    street: "Garden City",
    address: "1234",
    type: "Apartment",
  },
  {
    image: { home },
    title: "The Residences",
    street: "Manyanja",
    address: "457",
    type: "Single Room",
  },
  {
    image: { home },
    title: "Sentral",
    street: "1233 Kahawa",
    address: "86",
    type: "Bedsitter",
  },
];

const Explore = () => {
  return (
    <div className="flex flex-col pt-10 pb-8 items-center gap-10 justify-between">
      <div>
        <h1 className="font-bold text-4xl">Explore Rentals in Nairobi</h1>
      </div>
      <div className="flex items-center gap-4">
        {items.map((item) => {
          return (
            <div className="flex flex-col border border-green-400 rounded-md w-1/4 gap-4 pb-4 hover:scale-110 transition duration-300 ease-in-out">
              <Image
                src={item.image.home}
                width={250}
                height={250}
                className="rounded-t-md"
              />
              <div className="flex flex-col ml-4 ">
                <h1 className="font-bold text-center mb-3">{item.title}</h1>
                <p className="text-center">{item.street}</p>
                <p className="text-center">{item.address}</p>
                <p className="text-center">{item.type}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <button
          type="submit"
          className=" bg-green-400 hover:bg-green-900 text-white font-bold p-3 w-32 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
        >
          View more
        </button>
      </div>
    </div>
  );
};

export default Explore;
