"use client";
import { useLogoutMutation } from "@/redux/slices/usersApiSlice";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "@/redux/slices/AuthSlice";

const items = [
  { name: "Manage Rentals", url: "/" },
  { name: "Houses For Rent", url: "/" },
  { name: "Homes for Rent", url: "/" },
  { name: "Contact Us", url: "/" },
  { name: "Help Center", url: "/" },
];

const Sidebar = ({ children, isOpen, toggleSidebar }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const [logOutApiCall] = useLogoutMutation();
  const dispatch = useDispatch();

  const logOutHandler = async () => {
    try {
      await logOutApiCall().unwrap();
      dispatch(logOut());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className={`fixed top-0 left-0 h-96 w-72 z-50 bg-gray-300 rounded-r-md transition duration-300 ease-in-out ${
        isOpen ? "opacity-100" : "opacity-0"
      } `}
    >
      <div className="flex items-center justify-between h-16 px-4 bg-gray-900 text-white">
        <h1 className="text-xl font-bold">RENTO</h1>
        <button onClick={toggleSidebar} className="focus:outline-none">
          <svg
            className="h-6 w-6 text-white"
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
      <nav className="px-4 pt-4 flex flex-col gap-4">
        {items.map((item, index) => (
          <div
            className="flex items-center gap-2 hover:bg-green-400 w-full pl-2"
            key={index}
          >
            {" "}
            <Link href={item.url}>{item.name}</Link>
            <IoIosArrowForward />
          </div>
        ))}
        <div className="flex flex-col w-full gap-2 pl-2 md:hidden">
          <div className="">
            <Link
              href={userInfo ? "/create" : "/login"}
              className=" hover:underline"
            >
              Add Property
            </Link>
          </div>
          {userInfo ? (
            <div className="">
              <p>Welcome {userInfo?.data?.name}</p>
              <Link
                href="/"
                onClick={logOutHandler}
                className="hover:underline"
              >
                Logout
              </Link>
            </div>
          ) : (
            <div className="py-4 px-5">
              <Link href="/login">Sign in</Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
