import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/styles/Home.css";
import Converter from "../components/Converter";

const HomeView = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Converter />
        <Footer />
      </div>
    </div>
  );
};

export default HomeView;
