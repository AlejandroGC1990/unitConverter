import React from "react";
import Navbar from "../components/Navbar";
import "../assets/styles/Home.css";
import Converter from "../components/Converter";

const HomeView = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Converter />
      </div>
    </div>
  );
};

export default HomeView;
