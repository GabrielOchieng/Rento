"use client";
import { IoPersonCircleOutline } from "react-icons/io5";

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
  console.log(data);
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
    <div className="flex flex-col p-8  mx-auto">
      <h1 className="text-2xl font-bold mb-4">{data?.propertyType}</h1>
      <div className="flex gap-3">
        <Image
          src={data.photos && data.photos[0] ? data?.photos[0] : home}
          alt="House Image"
          className="rounded-lg h-96 w-full object-cover"
          width={96}
          height={96}
          layout="responsive"
        />

        <Image
          src={data.photos && data.photos[1]}
          alt="House Image"
          className="rounded-lg h-96 w-full object-cover"
          width={96}
          height={96}
          layout="responsive"
        />
        <Image
          src={data.photos && data.photos[2]}
          alt="House Image"
          className="rounded-lg object-cover"
          width={96}
          height={96}
          layout="responsive"
        />
      </div>
      <div className="mt-4 space-y-4 border rounded p-4">
        <p className="text-lg font-medium ">
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
          <div className="w-full flex justify-between mt-4 border rounded items-center p-4">
            <div>
              <IoPersonCircleOutline className="h-48 w-48 text-blue-400" />
            </div>
            <div>
              <p>Seller Name: {data.landlord}</p>
              <p>Contact Information: {data.contactInfo}</p>
            </div>
          </div>
        ) : (
          <div className="w-full flex justify-between mt-4 border rounded items-center p-4">
            <IoPersonCircleOutline className="h-48 w-48" />
            <Link href="/login">Login to view more information</Link>
          </div>
        ))}
    </div>
  );
};

export default HouseDetails;
