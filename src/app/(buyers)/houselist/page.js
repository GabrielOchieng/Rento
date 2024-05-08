"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import HouseCard from "@/components/HouseCard";
// Replace with your actual API route URL
const GET_HOUSES_URL = "http://localhost:5000/api/houses";

const HouseList = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await axios.get(GET_HOUSES_URL);
        console.log(response.data);
        setHouses(response.data);
      } catch (error) {
        console.error("Error fetching houses:", error);
      }
    };

    fetchHouses();
  }, []);

  return (
    <div className=" mx-auto px-4 py-8 bg-gray-200 ">
      <h1 className="text-3xl font-bold text-center mb-4">
        Available Properties
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {houses.length > 0 ? (
          houses.map((house) => (
            <HouseCard key={house._id} house={house} /> // Pass house data to HouseCard
          ))
        ) : (
          <p className="text-center text-gray-500">No houses found.</p>
        )}
      </div>
    </div>
  );
};

export default HouseList;
