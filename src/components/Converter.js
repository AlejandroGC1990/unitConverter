import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/Converter.css";

//!FALTA IMPLEMENTAR EL BOTÓN INTERCAMBIO
//!FALTA IMPLEMENTAR EL BOTÓN GUARDAR

const Converter = () => {
  const [inputValue, setInputValue] = useState(0);
  const [displayUnit, setDisplayUnit] = useState("km");
  const [displayUnitConverted, setDisplayUnitConverted] = useState("miles");
  const [result, setResult] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    const recalculateResult = () => {
      const value = parseFloat(inputValue);

      switch (document.querySelector("select").value) {
        case "":
          setDisplayUnit("");
          setDisplayUnitConverted("");
          break;
        case "kmToMiles":
          setDisplayUnit("km");
          setDisplayUnitConverted("miles");
          setResult(value * 0.621371 || 0);
          break;
        case "milesToKm":
          setDisplayUnit("miles");
          setDisplayUnitConverted("km");
          setResult(value * 1.60934);
          break;
        case "feetToMeters":
          setDisplayUnit("feet");
          setDisplayUnitConverted("meters");
          setResult(value * 0.3048);
          break;
        case "metersToFeet":
          setDisplayUnit("meters");
          setDisplayUnitConverted("feet");
          setResult(value * 3.28084);
          break;
        case "cmToInches":
          setDisplayUnit("cm");
          setDisplayUnitConverted("inches");
          setResult(value * 0.393701);
          break;
        case "inchesToCm":
          setDisplayUnit("inches");
          setDisplayUnitConverted("cm");
          setResult(value * 2.54);
          break;
        default:
          break;
      }
    };

    recalculateResult();
  }, [inputValue, selectedOption]);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // const handleUnitSwap = () => {
  //   switch (selectedOption) {
  //     case "kmToMiles":
  //       setSelectedOption("milesToKm");
  //       break;
  //     case "milesToKm":
  //       setSelectedOption("kmToMiles");
  //       break;
  //     case "feetToMeters":
  //       setSelectedOption("metersToFeet");
  //       break;
  //     case "metersToFeet":
  //       setSelectedOption("feetToMeters");
  //       break;
  //     case "cmToInches":
  //       setSelectedOption("inchesToCm");
  //       break;
  //     case "inchesToCm":
  //       setSelectedOption("cmToInches");
  //       break;
  //     default:
  //       break;
  //   }
  // };

  // const handleArrowButtonClick = () => {
  //   handleUnitSwap();
  // };

  const handleAutoConvert = (event) => {
    const value = parseFloat(event.target.value) || 0;
    setInputValue(value);
  };

  const handleClick = (event) => {
    const value = parseFloat(event.target.value);
    setInputValue(value);
  };

  return (
    <div className="converter">
      <div className="title">Convert</div>

      <div className="content-select-icon-input">
        <select onChange={handleSelectChange}>
          <option value="" hidden led selected>
            Choise a option
          </option>
          <option value="kmToMiles">km → miles</option>
          <option value="milesToKm">miles → km</option>
          <option value="feetToMeters">feet → meters</option>
          <option value="metersToFeet">meters → feet</option>
          <option value="cmToInches">cm → inches</option>
          <option value="inchesToCm">inches → cm</option>
        </select>

        {/* <button onClick={handleArrowButtonClick}> */}
        <button>
          <FontAwesomeIcon
            className="convertIcon-button"
            icon={faArrowRightArrowLeft}
          />
        </button>
        <input
          type="number"
          value={inputValue}
          onClick={handleClick}
          onChange={handleAutoConvert}
        />
        <p>{displayUnit}</p>
      </div>

      <div className="content-button-result">
        <button>
          <FontAwesomeIcon icon={faHeart} className="heart" />
        </button>
        <div className="result">
          <strong>{result}</strong>
        </div>
        <div className="unitResult">
          <strong>{displayUnitConverted}</strong>
        </div>
      </div>
    </div>
  );
};

export default Converter;
