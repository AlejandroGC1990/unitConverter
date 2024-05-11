import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/styles/Home.css";
import Converter from "../components/Converter";
import SaveContent from "../components/Saved";

const HomeView = () => {
  const [savedContent, setSavedContent] = useState([]);

  return (
    <div>
      <Navbar />
      <div className="content">
        <Converter setSavedContent={setSavedContent}/>
        <SaveContent setSavedContent={savedContent}/>
        <Footer />
      </div>
    </div>
  );
};

export default HomeView;
