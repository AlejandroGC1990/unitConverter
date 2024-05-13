import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/styles/Home.css";
import Converter from "../components/Converter";
import SaveContent from "../components/Saved";

const HomeView = () => {
  const [savedContent, setSavedContent] = useState([]);

  const handleSaveContent = (contentToSave) => {
    const updatedSavedContent = [...savedContent, contentToSave];
    localStorage.setItem("savedContent", JSON.stringify(updatedSavedContent));
    setSavedContent(updatedSavedContent);
  };

  return (
    <div>
      <Navbar />
      <div className="content">
        <Converter setSavedContent={setSavedContent}/>
        <SaveContent savedContent={savedContent} onSaveContent={handleSaveContent}/>
        <Footer />
      </div>
    </div>
  );
};

export default HomeView;
