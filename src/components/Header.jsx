"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import backgroundImg from "../../public/assets/images/backgroundImg.jpg";
import HouseSearchModal from "./HouseSearchModal";
import { useGetHousesQuery } from "@/redux/slices/housesApiSlice";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const { data: houses, isloading, error } = useGetHousesQuery();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    const filteredResults = houses.filter((house) =>
      house.town?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
    setIsModalOpen(searchTerm.length > 0);
  };

  const handleSearchSubmit = () => {
    console.log(searchTerm);
    setIsModalOpen(false);
    setSearchTerm("");
  };

  return (
    <div
      className="header  bg-cover bg-no-repeat bg-center h-96 text-center flex flex-col justify-center gap-3 relative"
      style={{ backgroundImage: `url(${backgroundImg.src})` }}
    >
      <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-bold ">
        DISCOVER YOUR NEW HOME
      </h1>
      <p className="text-white text-lg text-center font-bold">
        Helping Thousands of renters find their perfect home.
      </p>
      <div className="flex flex-col gap-2">
        <div className="flex justify-center gap-3">
          <input
            type="text"
            placeholder="Nairobi"
            className="ml-3 outline-none p-3 h-12 rounded-sm border-green-400 border max-[390px]:w-56  w-64 sm:w-96 "
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <label
            htmlFor="search"
            className="bg-green-400 text-white font-bold text-xl p-2 h-12 rounded-sm hover:bg-green-900"
          >
            Search
          </label>
        </div>
        <div className="mx-auto">
          {isModalOpen && (
            <HouseSearchModal
              searchResults={searchResults}
              searchTerm={searchTerm}
              handleSearchSubmit={handleSearchSubmit}
              onClose={() => setIsModalOpen(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
