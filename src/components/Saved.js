import React from "react";
import "./../assets/styles/Save.css";

const SaveBox = ({ inputValue, displayUnit, result, displayUnitConverted }) => {
  const handleDelete = () => {};

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

const SaveContent = ({ savedContent }) => {
  return (
    <div className="saveContent">
      <div>
        <p className="title-save">saved</p>
      </div>
      <div className="boxContent">
        <SaveBox />
        <SaveBox />
        <SaveBox />
        <SaveBox />
        {/* {savedContent &&
          savedContent.map((content, index) => (
            <SaveBox
              key={index}
              inputValue={content.inputValue}
              displayUnit={content.displayUnit}
              result={content.result}
              displayUnitConverted={content.displayUnitConverted}
            />
          ))} */}
      </div>
    </div>
  );
};

export default SaveContent;
