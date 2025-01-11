import React from "react";

const PropertyNearby = () => {
  const tabsData = [
    
    {
      title: "Hastane & Eczane",
      details: [
        { rating: "4", facilityName: "Kaş Devlet Hastanesi", distance: "1.2 km" },
        { rating: "5", facilityName: "Kalkan Aile Sağlık Merkezi", distance: "2.5 km" },
        { rating: "5", facilityName: "Buket Eczanesi", distance: "2.5 km" },
      ],
    },
    {
      title: "Market & Avm ",
      details: [
        {
          rating: "4",
          transportationName: "Kalkan Çarşı",
          distance: "3.7 km",
        },
        {
          rating: "5",
          transportationName: "Migros MJet",
          distance: "3.7 km",
        },
        {
          rating: "5",
          transportationName: "CarrefourSA",
          distance: "3.7 km",
        },
      ],
    },
  ];

  return (
    <div className="col-md-12">
      <div className="navtab-style1">
        <nav>
          <div className="nav nav-tabs mb20" id="nav-tab2" role="tablist">
            {tabsData.map((tab, index) => (
              <button
                key={index}
                className={`nav-link fw600 ${index === 0 ? "active" : ""}`}
                id={`nav-item${index + 1}-tab`}
                data-bs-toggle="tab"
                data-bs-target={`#nav-item${index + 1}`}
                type="button"
                role="tab"
                aria-controls={`nav-item${index + 1}`}
                aria-selected={index === 0 ? "true" : "false"}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </nav>
        {/* End nav tabs */}

        <div className="tab-content" id="nav-tabContent">
          {tabsData.map((tab, index) => (
            <div
              key={index}
              className={`tab-pane fade fz15 ${
                index === 0 ? "active show" : ""
              }`}
              id={`nav-item${index + 1}`}
              role="tabpanel"
              aria-labelledby={`nav-item${index + 1}-tab`}
            >
              {tab.details.map((detail, detailIndex) => (
                <div
                  key={detailIndex}
                  className="nearby d-sm-flex align-items-center mb20"
                >
                  <div className="rating dark-color mr15 ms-1 mt10-xs mb10-xs">
                    <span className="fw600 fz14">{detail.rating}</span>
                    <span className="text fz14">/10</span>
                  </div>
                  <div className="details">
                    <p className="dark-color fw600 mb-0">
                      {tab.title === "Education"
                        ? detail.schoolName
                        : detail.facilityName || detail.transportationName}
                    </p>
                    <p className="text mb-0">
                      {tab.title === "Education"
                        ? `Grades: ${detail.grades} Mesafe: ${detail.distance}`
                        : `Mesafe: ${detail.distance}`}
                    </p>
                    <div className="blog-single-review">
                      <ul className="mb0 ps-0">
                        {[1, 2, 3, 4, 5].map((starIndex) => (
                          <li key={starIndex} className="list-inline-item me-0">
                            <a href="#">
                              <i className="fas fa-star review-color2 fz10" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyNearby;
