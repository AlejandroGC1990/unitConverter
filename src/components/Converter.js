import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/Converter.css";

const Converter = () => {
  const [displayUnit, setDisplayUnit] = useState("km");
  const [displayUnitConverted, setDisplayUnitConverted] = useState("miles");
  const [inputValue, setInputValue] = useState(0);
  const [result, setResult] = useState(0);

  

  const handleSelectChange = (event) => {
    const value = parseFloat(inputValue);

    switch (event.target.value) {
      case "kmToMiles":
        setDisplayUnit("km");
        setDisplayUnitConverted("miles");
        setResult(inputValue * 0.621371).toFixed(2);
        break;
      case "milesToKm":
        setDisplayUnit("miles");
        setDisplayUnitConverted("km");
        setResult(inputValue * 1.60934);
        break;
      case "feetToMeters":
        setDisplayUnit("feets");
        setDisplayUnitConverted("meters");
        setResult(inputValue * 0.3048);
        break;
      case "metersToFeet":
        setDisplayUnit("meters");
        setDisplayUnitConverted("feets");
        setResult(inputValue * 3.28084);
        break;
      case "cmToInches":
        setDisplayUnit("cm");
        setDisplayUnitConverted("inches");
        setResult(inputValue * 0.393701);
        break;
      case "inchesToCm":
        setDisplayUnit("inches");
        setDisplayUnitConverted("cm");
        setResult(inputValue * 2.54);
        break;
      default:
        break;
    }
  };

  const handleAutoConvert = (event) => {
    setInputValue(event.target.value);
    handleSelectChange({ target: { value: event.target.value}});  
  };

  return (
    <div className="converter">
      <div className="title">convert</div>

      <div className="content-select-icon-input">
        <select onChange={handleSelectChange}>
          <option value="kmToMiles">km → miles</option>
          <option value="milesToKm">miles → km</option>
          <option value="feetToMeters">feets → meters</option>
          <option value="metersToFeet">meters → feets</option>
          <option value="cmToInches">cm → inches</option>
          <option value="inchesToCm">inches → cm</option>
        </select>
        <FontAwesomeIcon className="convertIcon" icon={faArrowRightArrowLeft} />
        <input type="number" value={inputValue} onChange={handleAutoConvert}/>
        <p>{displayUnit}</p>
      </div>

      <div className="content-button-result">
        <button /*onClick={handleSaveConversion}*/>
          <FontAwesomeIcon icon={faHeart} className="hearth"/>
        </button>
        <div className="result"><strong>{result}</strong></div>
        <div className="unitResult"><strong>{displayUnitConverted}</strong></div>
      </div>
    </div>
  );
};

export default Converter;
