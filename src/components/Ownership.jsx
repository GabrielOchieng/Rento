import Image from "next/image";
import Link from "next/link";
import React from "react";
import home from "../../public/assets/images/home.webp";

const Ownership = () => {
  return (
    <div className="flex flex-col gap-8 py-8 w-[90%] mx-auto">
      <div className="text-center">
        <h1 className="font-bold text-2xl mb-2">
          Learn more about owning a home
        </h1>
        <p>
          Renting is great, but maybe you are thinking about buying a home
          instead. We want you to find the right place. We have clients willing
          to sell homes and we are the place designed to help you find your
          dream home, even if you are buying for the first time.
        </p>
      </div>
      <div className="flex bg-gray-100 ">
        <div className="flex flex-col items-start justify-center w-1/2 p-10 gap-5 ">
          <h3 className="font-bold text-2xl">Explore Your Options</h3>
          <p>
            Deciding to become a homeowner is a big deal! Luckily, with us, you
            get the most accurate homes for sale property data, an agent
            directory, and collaboration tools to browse with your agent and
            co-shopper to help you make the right decision.
          </p>
          <Link href="/" className="text-blue-400 hover:underline text-xl">
            Start Your Search
          </Link>
        </div>
        <div className="w-1/2 ">
          <Image src={home} alt="Home" className="w-full h-68 object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Ownership;
