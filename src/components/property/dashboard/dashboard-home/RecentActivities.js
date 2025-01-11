import React from "react";

const activities = [
  {
    icon: "flaticon-home",
    text: "Villa Lisburn için 21.09.24-26.09.24 tarihleri arasında ",
    highlight: "satış yapıldı",
  },
  {
    icon: "flaticon-review",
    text: "Villa Koral için rezervasyon ",
    highlight: "talebi oluşturuldu.",
  },
  {
    icon: "flaticon-like",
    text: "Villa Enbaem için 30.08.24-03.09.24 tarihleri arasında",
    highlight: "satış yapıldı.",
  },


];

const RecentActivities = () => {
  return (
    <>
      {activities.map((activity, index) => (
        <div
          key={index}
          className="recent-activity d-sm-flex align-items-center mb20"
        >
          <span className={`icon me-3 ${activity.icon} flex-shrink-0`} />
          <p className="text mb-0 flex-grow-1">
            {activity.text.split(activity.highlight).map((part, i, array) =>
              i === array.length - 1 ? (
                part
              ) : (
                <>
                  {part}
                  <span className="fw600">{activity.highlight}</span>
                </>
              )
            )}
          </p>
        </div>
      ))}
      <div className="d-grid">
        <a href="#" className="ud-btn btn-white2">
          Daha Fazla
          <i className="fal fa-arrow-right-long" />
        </a>
      </div>
    </>
  );
};

export default RecentActivities;
