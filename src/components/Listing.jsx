import Image from "next/image";
import Link from "next/link";
import React from "react";
import browsing from "../../public/assets/images/browsing.webp";

const Listing = () => {
  return (
    <div className="flex flex-col gap-8 py-8 w-[90%] mx-auto">
      <div className="text-center">
        <h1 className="font-bold text-2xl mb-2">The Most Rental Provisions</h1>
        <p>
          Choose from over 1 million apartments, houses, estates, and townhomes
          for rent.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row bg-gray-100 ">
        <div className="flex flex-col items-start justify-center w-full sm:w-1/2 p-10 gap-5 ">
          <h3 className="font-bold text-2xl">Renting Made Simple</h3>
          <p>
            Browse the highest quality provisions, apply online, connect with
            the owner, find your new home and even pay your rent from any
            device.
          </p>
          <Link href="/" className="text-blue-400 hover:underline text-xl">
            Find Out More
          </Link>
        </div>
        <div className=" w-full sm:w-1/2 ">
          <Image
            src={browsing}
            alt="Browsing"
            className="w-full h-64 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Listing;
