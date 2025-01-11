import listings from "@/data/listings";
import React from "react";


const OverView = ({id}) => {
  const data = listings.filter((elm) => elm.id == id)[0] || listings[0];
  const overviewData = [
    {
      icon: "flaticon-bed",
      label: "Yatak Odası",
      value: data.bed,
    },
    {
      icon: "flaticon-shower",
      label: "Banyo",
      value: data.bath,
    },
    {
      icon: "flaticon-event",
      label: "İnşa Yılı",
      value: data.yearBuilding,
    },
    {
      icon: "flaticon-garage",
      label: "Garaj",
      value: "1",
      xs: true,
    },
    {
      icon: "flaticon-expand",
      label: "Sqft",
      value: data.sqft,
      xs: true,
    },
    
  ];
  
 
  return (
    <>
      {overviewData.map((item, index) => (
        <div
          key={index}
          className={`col-sm-6 col-lg-4 ${item.xs ? "mb25-xs" : "mb25"}`}
        >
          <div className="overview-element d-flex align-items-center">
            <span className={`icon ${item.icon}`} />
            <div className="ml15">
              <h6 className="mb-0">{item.label}</h6>
              <p className="text mb-0 fz15">{item.value}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OverView;
