import React from "react";

const PropertyAddress = () => {
  const addresses = [
    {
      address: "10425 Tabor St",
      city: "Los Angeles",
      state: "California",
      zipCode: "90034",
      area: "Brookside",
      country: "United States",
    },
    {
      address: "10 Downing Street",
      city: "London",
      state: "Greater London",
      zipCode: "SW1A 2AA",
      area: "Westminster",
      country: "United Kingdom",
    },
  ];

  return (
    <>
    
      {/* End col */}

      <div className="col-md-12">
        <iframe
          className="position-relative bdrs12 mt30 h250"
          loading="lazy"
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3216.9837236055096!2d29.421335875535206!3d36.26417409773231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c1d2d63c0a353b%3A0x99f059a7e38d475!2zS2Fsa2FuLCBLw7ZyZGVyZSBTaywgMDc1ODAgS2HFny9BbnRhbHlh!5e0!3m2!1str!2str!4v1728595321719!5m2!1str!2str"`}
        />
      </div>
      {/* End col */}
    </>
  );
};

export default PropertyAddress;
