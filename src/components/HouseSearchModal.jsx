"use client";

import Link from "next/link";

const HouseSearchModal = ({
  searchResults,
  onClose,
  searchTerm,
  handleSearchSubmit,
}) => {
  console.log(searchTerm);
  return (
    <div className=" flex flex-col items-start w-60  z-50 bg-gray-100 rounded shadow-md p-4">
      <div className="flex gap-10  mb-4">
        <h6 className="text-lg font-bold underline">Search Results</h6>
        <button
          type="button"
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 18L18 6M6 6l12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {searchResults.length > 0 ? (
        <ul className="list-none">
          {searchResults.map((house) => (
            <li key={house._id} className="mb-2">
              <Link
                href={`/houses/${house._id}`}
                onClick={handleSearchSubmit}
                className="text-blue-500 hover:underline"
              >
                {house.propertyType}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No results found for "{searchTerm}"</p>
      )}
    </div>
  );
};

export default HouseSearchModal;
