import Explore from "@/components/Explore";
import Header from "@/components/Header";
import Listing from "@/components/Listing";
import Manage from "@/components/Manage";
import Ownership from "@/components/Ownership";
import Renting from "@/components/Renting";
import React from "react";

const Home = () => {
  return (
    <div>
      <Header />
      <Explore />
      <Listing />
      <Ownership />
      <Manage />
      <Renting />
    </div>
  );
};

export default Home;
