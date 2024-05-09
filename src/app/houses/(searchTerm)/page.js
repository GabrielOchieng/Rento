"use client";

import HouseList from "@/app/(buyers)/houselist/page";
import React, { useState, useEffect } from "react";

const SearchedHouses = ({ houses }) => {
  // Consider adding functionalities like pagination or sorting here
  // ...

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>
      {houses.length > 0 ? (
        <HouseList houses={houses} /> // Assuming HouseList component for rendering houses
      ) : (
        <p className="text-center text-gray-500">
          No houses found matching your search.
        </p>
      )}
    </div>
  );
};

export default SearchedHouses;
