"use client";

import home from "../../../../public/assets/images/homebg.jpeg";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useGetHouseQuery } from "@/redux/slices/housesApiSlice";

const HouseDetails = ({ params }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const houseId = params.id; // Get house ID from URL parameters
  const [house, setHouse] = useState(null);
  const [showSellerInfo, setShowSellerInfo] = useState(false); // State for seller info visibility

  const { data, isLoading, error } = useGetHouseQuery(houseId);
  console.log(data?.photos);
  // useEffect(() => {
  //   if (data) {
  //     setHouse(data); // Update state with fetched house data
  //   }
  // }, [data]);

  if (isLoading) {
    return <p className="text-center p-4">Loading house details...</p>;
  }

  if (error) {
    return <p className="text-center p-4">Error fetching house details</p>;
  }

  const toggleSellerInfo = () => setShowSellerInfo(!showSellerInfo); // Toggle seller info visibility

  return (
    <div className="flex flex-col p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">{house?.propertyType}</h1>

      <Image
        src={data?.photos[0]}
        alt="House Image"
        className="rounded-lg h-96 w-full object-cover"
        width={96}
        height={96}
      />

      <div className="mt-4 space-y-4 border rounded p-4">
        <p className="text-lg font-medium">
          Rent: Ksh.{data?.rentPrice} per month
        </p>
        <p>Bedrooms: {data?.bedrooms}</p>
        <p>Location: {data?.town}</p> {/* Assuming town represents location */}
        <p>Description: {data?.description}</p>
      </div>

      {/* Seller Information Section */}
      <button
        className="text-blue-500 hover:underline mt-4"
        onClick={toggleSellerInfo}
      >
        {showSellerInfo ? "Hide Seller Information" : "Show Seller Information"}
      </button>

      {showSellerInfo &&
        (userInfo ? (
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
