import Image from "next/image";
import Link from "next/link";
import React from "react";
import "@/styles/scss/main.scss";

const ApartmentTypes = () => {
  const apartmentData = [
    {
      city: "Antalya",
      imageSrc: "/images/listings/ac269abe-2a5c-4f57-8ae8-c61aad846792.jpg",
      className: "col-lg-6",
    },
    {
      city: "Kaş",
      imageSrc: "/images/listings/kas-ta-gezilecek-yerler.jpg",
      className: "col-6 ",
    },
    {
      city: " Fethiye",
      imageSrc: "/images/listings/0-oludeniz.webp",
      className: "col-6 col-lg-4",
    },
    {
      city: "Patara",
      imageSrc: "/images/listings/patara.jpg",
      className: "col-6 col-lg-4",
    },
    {
      city: "Kalkan",
      imageSrc: "/images/listings/kalkan.jpg",
      className: "col-6 col-lg-4",
    },

  ];

  return (
    <>
      {apartmentData.map((apartment, index) => (
        <div key={index} className={apartment.className}>
          <div className="feature-style1 mb30">
            <div className="feature-img">
              <Image
                width={591}
                height={270}
                className="w-100 h-100 cover"
                src={apartment.imageSrc}
                alt="city listing"
              />
            </div>
            <div className="feature-content">
              <div className="top-area">
                <h6 className="title mb-1">{apartment.city}</h6>
                <p className="text">{apartment.propertyCount} </p>
              </div>
              <div className="bottom-area">
                <Link className="ud-btn2" href="#">
                  Tümü
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ApartmentTypes;
