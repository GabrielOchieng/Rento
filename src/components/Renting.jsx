import Link from "next/link";
import phoneb from "../../public/assets/images/phoneb.webp";
import browsing from "../../public/assets/images/browsing.webp";
import family from "../../public/assets/images/family.jpeg";
import googleplay from "../../public/assets/images/googleplay.jpg";
import appstore from "../../public/assets/images/appstore.png";

import Image from "next/image";

const Renting = () => {
  return (
    <div className="flex flex-col w-[90%] mx-auto py-10 gap-5">
      <div className="text-center">
        <h1 className="font-bold text-2xl mb-2">
          The Perfect Place to Renting Your Home
        </h1>
        <p>
          Work with the best set of property management tools on the market.
        </p>
      </div>

      <div className="flex flex-col bg-gray-100  ">
        <div className="flex">
          <div className="flex flex-col items-start justify-center w-1/2 p-10 gap-5 ">
            <h3 className="font-bold text-2xl">Tips for Renters</h3>
            <p>
              Find answers to all of your renting questions with the best guide
              around.
            </p>
            <Link href="/" className="text-blue-400 hover:underline text-xl">
              Browse Articles
            </Link>
          </div>
          <div className="w-1/2 ">
            <Image
              src={family}
              alt="Home image"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2 ">
            <Image
              src={browsing}
              alt="Home image"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="flex flex-col items-start justify-center w-1/2 p-10 gap-5 ">
            <h3 className="font-bold text-2xl">Property Manager Resources</h3>
            <p>
              Stay up-to-date using our tips and guides on rent payments,
              leasing, management solutions, and more.
            </p>
            <Link href="/" className="text-blue-400 hover:underline text-xl">
              Stay Informed
            </Link>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col items-start justify-center w-1/2 p-10 gap-5 ">
            <h3 className="font-bold text-2xl">Take Us With You</h3>
            <p>
              Keep{" "}
              <span>
                <Link href="/" className="text-blue-400 hover:underline">
                  Rento.com
                </Link>
              </span>{" "}
              in the palm of your hand throughout your rental journey.
            </p>
            <div className=" flex gap-3">
              <Image src={appstore} className="cursor-pointer" />
              <Image src={googleplay} className="cursor-pointer" />
            </div>
          </div>
          <div className="w-1/2 ">
            <Image
              src={phoneb}
              alt="Home image"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Renting;
