"use client";
import Link from "next/link";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "@/redux/slices/usersApiSlice";
import { logOut } from "@/redux/slices/AuthSlice";

const items = [
  {
    name: "Rentals",
    url: "/",
  },
  // {
  //   name: "Signin",
  //   url: "/login",
  // },
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
  const { userInfo } = useSelector((state) => state.auth);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const dispatch = useDispatch();
  const [logOutApiCall] = useLogoutMutation();

  const logOutHandler = async () => {
    try {
      await logOutApiCall().unwrap();
      dispatch(logOut());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white w-full flex   justify-between pl-5 shadow-md">
      {isOpen && <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />}
      <div className="flex gap-2 py-4 items-center ">
        <button onClick={toggleSidebar}>
          <HiOutlineMenuAlt1 className="text-2xl font-bold cursor-pointer" />
        </button>

        <p>Menu</p>
      </div>
      <div>
        <h1 className="font-bold text-2xl   text-green-400  py-4">RENTO</h1>
      </div>
      <div className="  hidden md:flex gap-3 ">
        {items.map((item, index) => {
          return (
            <Link
              href={item.url}
              key={index}
              className="hover:text-green-700 py-4"
            >
              {item.name}{" "}
            </Link>
          );
        })}
        {userInfo ? (
          <div className="py-4 px-5 flex gap-2">
            <p>Welcome {userInfo?.data?.name}</p>
            <Link href="/" onClick={logOutHandler}>
              Logout
            </Link>
          </div>
        ) : (
          <div className="py-4 px-5">
            <Link href="/login">Sign in</Link>
          </div>
        )}
        <div className="bg-gray-700 py-5 px-5">
          <Link
            href={userInfo ? "/create" : "/login"}
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
