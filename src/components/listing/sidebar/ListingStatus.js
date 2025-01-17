'use client'

import React from "react";

const ListingStatus = ({filterFunctions}) => {
  const options = [
    { id: "flexRadioDefault3", label: "Tümü" , defaultChecked: true },
    { id: "flexRadioDefault1", label: "Antalya" },
    { id: "flexRadioDefault2", label: "Muğla", },

  ];

  return (
    <>
      {options.map((option) => (
        <div
          className="form-check d-flex align-items-center mb10"
          key={option.id}
         
        >
          <input
            className="form-check-input"
            type="radio"
            checked={filterFunctions?.listingStatus == option.label}
            
            onChange={()=>filterFunctions.handlelistingStatus(option.label)}
           
            
   
            
          />
          <label className="form-check-label" htmlFor={option.id}>
            {option.label}
          </label>
        </div>
      ))}
    </>
  );
};

export default ListingStatus;
