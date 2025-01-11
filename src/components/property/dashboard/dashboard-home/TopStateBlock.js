import React from "react";

const statisticsData = [
  {
    text: "Tüm mülkler",
    title: "49",
    icon: "flaticon-home",
  },
  {
    text: "Tüm görüntülemeler",
    title: "192",
    icon: "flaticon-search-chart",
  },
  {
    text: "Toplam Ziyaretçi Yorumu",
    title: "54",
    icon: "flaticon-review",
  },
  
];

const TopStateBlock = () => {
  return (
    <>
      {statisticsData.map((data, index) => (
        <div key={index} className="col-sm-6 col-xxl-3">
          <div className="d-flex justify-content-between statistics_funfact">
            <div className="details">
              <div className="text fz25">{data.text}</div>
              <div className="title">{data.title}</div>
            </div>
            <div className="icon text-center">
              <i className={data.icon} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopStateBlock;
