import Image from "next/image";
import home from "../../public/assets/images/homebg.jpeg";

const HouseCard = ({ house }) => {
  // Assuming house object has properties like address, photos, rentPrice
  const {
    address,
    photos,
    rentPrice,
    bedrooms,
    street,
    description,
    propertyType,
  } = house;

  return (
    <div className="bg-white rounded-md shadow-md p-4 flex flex-col space-y-2">
      <Image
        src={home} // Display first photo or placeholder
        alt="House Image"
        className="w-full h-48 object-cover rounded-t-md"
      />

      <div className="flex justify-between items-center">
        {/* <h3 className="text-lg font-medium text-gray-800">{address}</h3> */}
        <span className="text-gray-700">Rent: Ksh.{rentPrice}/month</span>
        <span className="text-gray-700"> {propertyType}</span>
        {/* <span className="text-gray-700">Bedrooms: {bedrooms}</span> */}
        {/* <span className="text-gray-700"> {street}</span> */}
      </div>
      {/* <p className="text-gray-600 line-clamp-2"></p> */}
      <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
        View Details
      </button>
    </div>
  );
};

export default HouseCard;
