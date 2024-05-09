"use client";
import React, { useState, useEffect } from "react";
import home from "../../../../public/assets/images/homebg.jpeg";
import Image from "next/image";

const HouseDetails = ({ params }) => {
  console.log(params);
  const houseId = params.id; // Get house ID from URL parameters
  const [house, setHouse] = useState(null);

  console.log(houseId);

  useEffect(() => {
    const fetchHouseDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/houses/${houseId}`
        ); // Replace with your API endpoint
        const data = await response.json();
        setHouse(data);
      } catch (error) {
        console.error("Error fetching house details:", error);
      }
    };

    fetchHouseDetails();
  }, [houseId]); // Fetch data only when houseId changes

  if (!house) {
    return <p className="text-center p-4">Loading house details...</p>;
  }

  return (
    <div className="flex flex-col  p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">{house.propertyType}</h1>

      <Image
        src={home}
        alt="House Image"
        className="rounded-lg h- w-full object-cover"
      />

      <div className="mt-4 space-y-4 border rounded  p-4">
        <p className="text-lg font-medium">
          Rent: Ksh.{house.rentPrice} per month
        </p>
        <p>Bedrooms: {house.bedrooms}</p>
        <p>Location: {house.town}</p> {/* Assuming town represents location */}
        <p>Description: {house.description}</p>
      </div>
    </div>
  );
};

export default HouseDetails;
