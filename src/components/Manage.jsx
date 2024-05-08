import Link from "next/link";
import housekey from "../../public/assets/images/housekey.webp";
import rentals from "../../public/assets/images/rentals.jpeg";
import Image from "next/image";

const Manage = () => {
  return (
    <div className="flex flex-col w-[90%] mx-auto py-10 gap-5">
      <div className="text-center">
        <h1 className="font-bold text-2xl mb-2">
          The Perfect Place to Manage Your Home
        </h1>
        <p>
          Work with the best set of property management tools on the market.
        </p>
      </div>

      <div className="flex flex-col bg-gray-100  ">
        <div className="flex">
          <div className="flex flex-col items-start justify-center w-1/2 p-10 gap-5 ">
            <h3 className="font-bold text-2xl">Advertise Your Rental</h3>
            <p>
              Connect with more than a thousand renters looking for new homes
              using our comprehensive marketing platform.
            </p>
            <Link href="/" className="text-blue-400 hover:underline text-xl">
              List Your Property
            </Link>
          </div>
          <div className="w-1/2 ">
            <Image
              src={rentals}
              alt="Home"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2 ">
            <Image
              src={housekey}
              alt="Home"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="flex flex-col items-start justify-center w-1/2 p-10 gap-5 ">
            <h3 className="font-bold text-2xl">Lease 100% Online</h3>
            <p>
              Accept applications, agree on payments online and process the
              transactions .
            </p>
            <Link href="/" className="text-blue-400 hover:underline text-xl">
              Manage Your Property
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manage;
