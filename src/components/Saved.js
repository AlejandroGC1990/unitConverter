import React, { useEffect, useState } from "react";
import "./../assets/styles/Save.css";

const SaveContent = (handleSaveContent) => {
  const [savedContent, setSavedContent] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("savedContent")) || [];
    setSavedContent(savedData);
  // }, [handleSaveContent]); //Se guardan los valores en localStorage, pero no se actualiza la tabla.
  }, [savedContent]); //Funciona, se guardan los valores y se actualiza la tabla, pero provoca un bucle infinito

  const handleDelete = (idToDelete) => {
    const newSavedContent = savedContent.filter(
      (content) => content.id !== idToDelete
    );
    localStorage.setItem("savedContent", JSON.stringify(newSavedContent));
    setSavedContent(newSavedContent);
  };

  return (
    <div className="saveContent">
      <div>
        <p className="title-save">saved</p>
      </div>
      <div className="boxContent">
        {savedContent.map((content) => (
          <SaveBox key={content.id} content={content} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default SaveContent;

const SaveBox = ({ content, onDelete }) => {
  const { id, inputValue, displayUnit, result, displayUnitConverted } = content;

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="box">
      <p className="pSaveBox">
        {inputValue} {displayUnit} → {result} {displayUnitConverted}
      </p>
      <button className="deleteButton" onClick={handleDelete}>
        <p>X</p>
      </button>
    </div>
  );
};
