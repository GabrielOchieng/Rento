"use client";
import React, { useState, useEffect } from "react";
import home from "../../../../public/assets/images/homebg.jpeg";
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";

const HouseDetails = ({ params }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const houseId = params.id; // Get house ID from URL parameters
  const [house, setHouse] = useState(null);
  const [showSellerInfo, setShowSellerInfo] = useState(false); // State for seller info visibility

  console.log(houseId);

  useEffect(() => {
    const fetchHouseDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/houses/${houseId}`
        );
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

  const toggleSellerInfo = () => setShowSellerInfo(!showSellerInfo); // Toggle seller info visibility

  return (
    <div className="flex flex-col p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">{house.propertyType}</h1>

      <Image
        src={home}
        alt="House Image"
        className="rounded-lg h-96 w-full object-cover"
      />

      <div className="mt-4 space-y-4 border rounded p-4">
        <p className="text-lg font-medium">
          Rent: Ksh.{house.rentPrice} per month
        </p>
        <p>Bedrooms: {house.bedrooms}</p>
        <p>Location: {house.town}</p> {/* Assuming town represents location */}
        <p>Description: {house.description}</p>
      </div>

      {/* Seller Information Section */}
      <button
        className="text-blue-500 hover:underline mt-4"
        onClick={toggleSellerInfo}
      >
        {showSellerInfo ? "Hide Seller Information" : "Show Seller Information"}
      </button>

      {showSellerInfo &&
        (isLoggedIn ? (
          <div className="mt-4 border rounded p-4">
            {/* Add content for Seller Information here */}
            <p>Seller Name: {/* Replace with actual seller information */}</p>
            <p>
              Contact Information:{" "}
              {/* Replace with actual seller information */}
            </p>
            {/* Add any other relevant seller details */}
          </div>
        ) : (
          <Link className="mt-4 border rounded p-4" href="/login">
            Login to view more information
          </Link>
        ))}
    </div>
  );
};

export default HouseDetails;
