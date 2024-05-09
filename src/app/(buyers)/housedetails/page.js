"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import for getting id from URL

const HouseDetails = () => {
  const router = useRouter();
  const { houseId } = router.query; // Get house ID from URL parameters
  // const { houseId } = useParams(); // Get house ID from URL parameters
  const [house, setHouse] = useState(null);

  useEffect(() => {
    const fetchHouseDetails = async () => {
      try {
        const response = await fetch(`/api/houses/${houseId}`); // Replace with your API endpoint
        const data = await response.json();
        setHouse(data);
      } catch (error) {
        console.error("Error fetching house details:", error);
      }
    };

    fetchHouseDetails();
  }, [houseId]); // Fetch data only when houseId changes

  if (!house) {
    return <p>Loading house details...</p>;
  }

  return (
    <div className="house-details-container">
      <h1>{house.address}</h1>
      <img src={house.photos[0]} alt="House Image" />
      <p>Rent: Ksh.{house.rentPrice} per month</p>
      <p>Bedrooms: {house.bedrooms}</p>
      <p>Property Type: {house.propertyType}</p>
      {/* Add more details about the house from the API response */}
      <p>{house.description}</p>
    </div>
  );
};

export default HouseDetails;
