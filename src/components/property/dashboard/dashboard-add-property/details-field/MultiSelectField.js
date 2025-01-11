"use client";
import React from "react";
import Select from "react-select";

const options = {
  floorNo: ["1st", "2nd", "3rd", "4th"],
  energyClass: ["All Listing", "Active", "Sold", "Processing"],
  energyIndex: ["All Cities", "Pending", "Processing", "Published"],
};

const customStyles = {
  option: (styles, { isFocused, isSelected, isHovered }) => {
    return {
      ...styles,
      backgroundColor: isSelected
        ? "#eb6753"
        : isHovered
        ? "#eb675312"
        : isFocused
        ? "#eb675312"
        : undefined,
    };
  },
};

const MultiSelectField = () => {
  const fieldTitles = ["Floors no", "Energy Class", "Energy index in kWh/m2a"];
  return (
    <>
      {Object.keys(options).map((key, index) => (
        <div className="col-sm-6 col-xl-4" key={index}>
          
        </div>
      ))}
    </>
  );
};

export default MultiSelectField;
