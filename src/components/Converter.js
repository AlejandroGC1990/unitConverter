import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/Converter.css";

//! FALTA IMPLEMENTAR EL BOTÓN GUARDAR

const Converter = () => {
  const [inputValue, setInputValue] = useState(0);
  const [displayUnit, setDisplayUnit] = useState("km");
  const [displayUnitConverted, setDisplayUnitConverted] = useState("miles");
  const [result, setResult] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [savedContent, setSavedContent] = useState([]);

  const localStorageSavedContent = localStorage.getItem("savedContent");

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("savedContent")) || [];
    setSavedContent(savedData);
  }, [localStorageSavedContent]);

  useEffect(() => {
    const recalculateResult = () => {
      const value = parseFloat(inputValue);

      switch (selectedOption) {
        case "":
          setDisplayUnit("");
          setDisplayUnitConverted("");
          break;
        case "kmToMiles":
          setDisplayUnit("km");
          setDisplayUnitConverted("miles");
          setResult((value * 0.621371 || 0).toFixed(2));
          break;
        case "milesToKm":
          setDisplayUnit("miles");
          setDisplayUnitConverted("km");
          setResult((value * 1.60934).toFixed(2));
          break;
        case "feetToMeters":
          setDisplayUnit("feet");
          setDisplayUnitConverted("meters");
          setResult((value * 0.3048).toFixed(2));
          break;
        case "metersToFeet":
          setDisplayUnit("meters");
          setDisplayUnitConverted("feet");
          setResult((value * 3.28084).toFixed(2));
          break;
        case "cmToInches":
          setDisplayUnit("cm");
          setDisplayUnitConverted("inches");
          setResult((value * 0.393701).toFixed(2));
          break;
        case "inchesToCm":
          setDisplayUnit("inches");
          setDisplayUnitConverted("cm");
          setResult((value * 2.54).toFixed(2));
          break;
        default:
          break;
      }
    };

    recalculateResult();
  }, [inputValue, selectedOption]);

  //Maneja el cambio de opciones en el select de unidades.
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  //Maneja el botón de intercambio de unidades
  const handleUnitSwap = () => {
    switch (selectedOption) {
      case "kmToMiles":
        setSelectedOption("milesToKm");
        document.querySelector("select").value = "milesToKm";
        break;
      case "milesToKm":
        setSelectedOption("kmToMiles");
        document.querySelector("select").value = "kmToMiles";
        break;
      case "feetToMeters":
        setSelectedOption("metersToFeet");
        document.querySelector("select").value = "metersToFeet";
        break;
      case "metersToFeet":
        setSelectedOption("feetToMeters");
        document.querySelector("select").value = "feetToMeters";
        break;
      case "cmToInches":
        setSelectedOption("inchesToCm");
        document.querySelector("select").value = "inchesToCm";
        break;
      case "inchesToCm":
        setSelectedOption("cmToInches");
        document.querySelector("select").value = "cmToInches";
        break;
      default:
        break;
    }
  };

  //Se encarga de actualizar el valor del input
  const handleAutoConvert = (event) => {
    const value = parseFloat(event.target.value) || 0;
    setInputValue(value);
  };

  //Se encarga de guardar el valor de
  //inputValue, displayUnit, result y displayUnitConvert
  const handleSaveContent = () => {
    let contentToSave = {
      id: new Date().getTime(),
      inputValue,
      displayUnit,
      result,
      displayUnitConverted,
    };

    const updatedSavedContent = [...savedContent, contentToSave];
    localStorage.setItem("savedContent", JSON.stringify(updatedSavedContent));
    setSavedContent(updatedSavedContent);
    console.log(updatedSavedContent);
  };

  return (
    <div className="converter">
      <p className="title">convert</p>
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

        <button onClick={handleUnitSwap}>
          <FontAwesomeIcon
            icon={faArrowRightArrowLeft}
            className="convertIcon-button"
          />
        </button>

        <input
          type="number"
          value={inputValue}
          onClick={handleAutoConvert}
          onChange={handleAutoConvert}
        />

        <div className="unit">
          <p>{displayUnit}</p>
        </div>
      </div>

      <div className="content-button-result">
        <button className="button-heart" onClick={handleSaveContent}>
          <FontAwesomeIcon icon={faHeart} className="heart" />
        </button>
        <div className="result">
          <p>
            <strong>{result}</strong>
          </p>
        </div>
        <div className="unit">
          <p>
            <strong>{displayUnitConverted}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Converter;
