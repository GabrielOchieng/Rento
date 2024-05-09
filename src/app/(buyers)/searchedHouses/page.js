// "use client";

// import HouseCard from "@/components/HouseCard";

// const SearchedHouses = () => {
//   return (
//     <div className=" mx-auto px-4 py-8 bg-gray-200 ">
//       <h1 className="text-3xl font-bold text-center mb-4">
//         Available Properties
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         <HouseCard house={SearchedHouses} />
//       </div>
//     </div>
//   );
// };

// export default SearchedHouses;

// "use client";

// import HouseCard from "@/components/HouseCard";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

// const GET_HOUSES_URL = "http://localhost:5000/api/houses"; // Assuming your API endpoint

// const SearchedHouses = () => {
//   const router = useRouter();
//   const searchTerm = router.query.searchTerm?.trim() || "";
//   const [houses, setHouses] = useState([]); // State to store fetched houses

//   useEffect(() => {
//     const fetchHouses = async () => {
//       if (searchTerm) {
//         try {
//           const response = await fetch(
//             `${GET_HOUSES_URL}?searchTerm=${searchTerm}`
//           );
//           if (!response.ok) {
//             throw new Error("Failed to fetch houses");
//           }
//           const data = await response.json();
//           setHouses(data);
//         } catch (error) {
//           console.error("Error fetching houses:", error);
//           // Handle errors (e.g., display error message to user)
//         }
//       }
//     };

//     fetchHouses();
//   }, [searchTerm]); // Re-run effect when searchTerm changes

//   return (
//     <div className="mx-auto px-4 py-8 bg-gray-200">
//       <h1 className="text-3xl font-bold text-center mb-4">
//         Available Properties -{" "}
//         {searchTerm && `Search results for: ${searchTerm}`}
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {/* Conditionally render HouseCards or a loading message */}
//         {searchTerm ? (
//           houses.length > 0 ? (
//             houses.map((house) => (
//               <HouseCard key={house._id} house={house} /> // Pass house data to HouseCard
//             ))
//           ) : (
//             <p>No results found for "{searchTerm}".</p>
//           )
//         ) : (
//           <p>Enter a search term to find available properties.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchedHouses;

"use client";

import HouseCard from "@/components/HouseCard";
import { useRouter } from "next/navigation";

const SearchedHouses = () => {
  const router = useRouter();
  console.log(router.prefetch);
  const searchTerm = router.query.searchTerm || "";

  return (
    <div className="mx-auto px-4 py-8 bg-gray-200">
      <h1 className="text-3xl font-bold text-center mb-4">
        Available Properties -{" "}
        {searchTerm && `Search results for: ${searchTerm}`}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Conditionally render HouseCards or a message */}
        {searchTerm ? (
          // No need to fetch houses here, use searchTerm from query params
          <p>Looking for houses matching "{searchTerm}"...</p>
        ) : (
          <p>Enter a search term to find available properties.</p>
        )}
      </div>
    </div>
  );
};

export default SearchedHouses;
