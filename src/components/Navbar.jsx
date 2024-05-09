"use client";
import Link from "next/link";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { useSelector } from "react-redux";

const items = [
  {
    name: "Rentals",
    url: "/",
  },
  {
    name: "Signin",
    url: "/login",
  },
  {
    name: "Rent",
    url: "/",
  },
  //   {
  //     name: "Add Property",
  //     url: "/",
  //   },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white w-full flex justify-between pl-5 shadow-md">
      {isOpen && <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />}
      <div className="flex gap-2 py-5">
        <button onClick={toggleSidebar}>
          <HiOutlineMenuAlt1 className="text-2xl font-bold cursor-pointer" />
        </button>

        <p>Menu</p>
      </div>
      <div>
        <h1 className="font-bold text-2xl text-green-400 py-5">RENTO</h1>
      </div>
      <div className="flex gap-3 ">
        {items.map((item, index) => {
          return (
            <Link
              href={item.url}
              key={index}
              className="hover:text-green-700 py-5"
            >
              {item.name}{" "}
            </Link>
          );
        })}
        <div className="bg-gray-700 py-5 px-5">
          <Link
            href={isLoggedIn ? "/create" : "/login"}
            className=" text-white hover:underline"
          >
            Add Property
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
