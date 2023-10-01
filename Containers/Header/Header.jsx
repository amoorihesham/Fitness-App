import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Header;
