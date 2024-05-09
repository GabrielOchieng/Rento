// "use client";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import HouseCard from "@/components/HouseCard";

// // Replace with your actual API route URL
// const GET_HOUSES_URL = "http://localhost:5000/api/houses";

// const HouseList = () => {
//   const [houses, setHouses] = useState([]);
//   const [sortBy, setSortBy] = useState(""); // State to store sort criteria

//   useEffect(() => {
//     const fetchHouses = async () => {
//       try {
//         const response = await axios.get(GET_HOUSES_URL);
//         setHouses(response.data);
//       } catch (error) {
//         console.error("Error fetching houses:", error);
//       }
//     };

//     fetchHouses();
//   }, []);

//   const sortHouses = (criteria) => {
//     setSortBy(criteria);
//     const sortedHouses = [...houses].sort((a, b) => {
//       switch (criteria) {
//         case "price-asc":
//           return a.rentPrice - b.rentPrice;
//         case "price-desc":
//           return b.rentPrice - a.rentPrice;
//         case "numberOfBedrooms-asc":
//           return a.numberOfBedrooms - b.numberOfBedrooms;
//         case "numberOfBedrooms-desc":
//           return b.numberOfBedrooms - a.numberOfBedrooms;
//         // Add more cases for other sorting criteria
//         default:
//           return 0;
//       }
//     });
//     setHouses(sortedHouses);
//   };

//   return (
//     <div className="mx-auto px-4 py-8 bg-gray-200">
//       <h1 className="text-3xl font-bold text-center mb-4">
//         Available Properties
//       </h1>
//       <div className="flex justify-between mb-4">
//         <p>Sort by:</p>
//         <div className="flex items-center">

//         </div>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {houses.length > 0 ? (
//           houses.map((house) => <HouseCard key={house._id} house={house} />)
//         ) : (
//           <p className="text-center text-gray-500">No houses found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HouseList;

"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import HouseCard from "@/components/HouseCard";

// Replace with your actual API route URL
const GET_HOUSES_URL = "http://localhost:5000/api/houses";

const HouseList = () => {
  const [houses, setHouses] = useState([]); // State for all houses
  const [filteredHouses, setFilteredHouses] = useState([]); // State for filtered houses
  const [minRentPrice, setMinRentPrice] = useState(""); // State for minimum price
  const [maxRentPrice, setMaxRentPrice] = useState(""); // State for maximum price
  const [housePropertyType, setHousePropertyType] = useState(""); // State for house type
  const [numberOfBedrooms, setNumberOfBedrooms] = useState(""); // State for number of numberOfBedrooms
  const [town, setTown] = useState(""); // State for towns
  const [estate, setEstate] = useState(""); // State for estates

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await axios.get(GET_HOUSES_URL);
        setHouses(response.data);
        setFilteredHouses(response.data); // Set initial filtered houses to all houses
      } catch (error) {
        console.error("Error fetching houses:", error);
      }
    };

    fetchHouses();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "minRentPrice":
        setMinRentPrice(value);
        break;
      case "maxRentPrice":
        setMaxRentPrice(value);
        break;
      case "housePropertyType":
        setHousePropertyType(value);
        break;
      case "numberOfBedrooms":
        setNumberOfBedrooms(value);
        break;
      case "town":
        setTown(value);
        break;
      case "estate":
        setEstate(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const filtered = houses.filter((house) => {
      let isValid = true;

      // Apply price range filter
      if (minRentPrice && maxRentPrice) {
        isValid =
          isValid &&
          house.rentPrice >= minRentPrice &&
          house.rentPrice <= maxRentPrice;
      }

      // Apply house type filter
      if (housePropertyType) {
        isValid = isValid && house.propertyType === housePropertyType;
      }
      if (town) {
        const lowerTown = house.town?.toLowerCase() || "";
        isValid = isValid && lowerTown === town.toLowerCase();
      }
      if (estate) {
        const lowerEstate = house.estate?.toLowerCase() || "";

        isValid = isValid && lowerEstate === estate.toLowerCase();
      }

      // Apply number of numberOfBedrooms filter
      if (numberOfBedrooms) {
        isValid = isValid && house.bedrooms === parseInt(numberOfBedrooms); // Ensure numberOfBedrooms is a number
      }

      return isValid;
    });

    setFilteredHouses(filtered);
    console.log(filtered);
  };

  return (
    <div className="mx-auto  pt-8 ">
      <div className="bg-white px-4">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap mb-4">
            <div className="w-full md:w-1/4 px-2 mb-2 md:mb-0">
              <label
                className="block text-gray-700 font-bold mb-1"
                htmlFor="minRentPrice"
              >
                Min Price:
              </label>
              <input
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 bg-white"
                type="number"
                name="minRentPrice"
                id="minRentPrice"
                value={minRentPrice}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full md:w-1/4 px-2 mb-2 md:mb-0">
              <label
                className="block text-gray-700 font-bold mb-1"
                htmlFor="maxRentPrice"
              >
                Max Price:
              </label>
              <input
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 bg-white"
                type="number"
                name="maxRentPrice"
                id="maxRentPrice"
                value={maxRentPrice}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full md:w-1/4 px-2 mb-2 md:mb-0">
              <label
                className="block text-gray-700 font-bold mb-1"
                htmlFor="housePropertyType"
              >
                House Type:
              </label>
              <select
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 bg-white"
                name="housePropertyType"
                id="housePropertyType"
                value={housePropertyType}
                onChange={handleInputChange}
              >
                <option value="">All Types</option>
                {/* Add options for different house types based on your data */}
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
                <option value="Bedsitter">Bedsitter</option>
                <option value="Single">Single</option>
                <option value="OneBedroom">OneBedroom</option>
                <option value="TwoBedroom">TwoBedroom</option>
                <option value="ThreeBedroom">ThreeBedroom</option>
                <option value="Home">Home</option>
                {/* ... more options */}
              </select>
            </div>
            <div className="w-full md:w-1/4 px-2 mb-2 md:mb-0">
              <label
                className="block text-gray-700 font-bold mb-1"
                htmlFor="housePropertyType"
              >
                Town:
              </label>
              <select
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 bg-white"
                name="town"
                id="town"
                value={town}
                onChange={handleInputChange}
              >
                <option value="">All Towns</option>
                {/* Add options for different house types based on your data */}
                <option value="Nairobi">Nairobi</option>
                <option value="Kisumu">Kisumu</option>
                <option value="Mombasa">Mombasa</option>
                <option value="Nakuru">Nakuru</option>
                <option value="Eldoret">Eldoret</option>
                <option value="Kakamega">Kakamega</option>
                <option value="Busia">Busia</option>
                <option value="Thika">Thika</option>
                {/* ... more options */}
              </select>
            </div>
            <div className="w-full md:w-1/4 px-2 mb-2 md:mb-0">
              <label
                className="block text-gray-700 font-bold mb-1"
                htmlFor="minRentPrice"
              >
                Estate:
              </label>
              <input
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 bg-white"
                type="text"
                name="estate"
                id="estate"
                value={estate}
                onChange={handleInputChange}
              />
            </div>

            <div className="w-full md:w-1/4 px-2 mb-2 md:mb-0">
              <label
                className="block text-gray-700 font-bold mb-1"
                htmlFor="numberOfBedrooms"
              >
                Bedrooms:
              </label>
              <input
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 bg-white"
                type="number"
                name="numberOfBedrooms"
                id="numberOfBedrooms"
                value={numberOfBedrooms}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex mb-5 items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Filter Properties
          </button>
        </form>
      </div>
      <div className="bg-gray-200 px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Available Properties</h1>
        {filteredHouses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredHouses.map((house) => (
              <HouseCard key={house._id} house={house} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No houses found matching your criteria.
          </p>
        )}
      </div>
    </div>
  );
};

export default HouseList;
