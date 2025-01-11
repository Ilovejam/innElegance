import Image from "next/image";
import React from "react";

const Office = () => {
  const offices = [
    {
      id: 1,
      city: "GSM",
      icon: "/images/icon/mobile-application-2645.svg",
      phoneNumber: "+90 532 365 0862",
    },
    {
      id: 2,
      city: "TELEFON",
      icon: "/images/icon/phone-ringing-2.svg",
      phoneNumber: "+90 286 316 55 99",
    },
    {
      id: 3,
      city: "E-Posta",
      icon: "/images/icon/mail-142.svg",
      phoneNumber: " info@Villam365.com",
    },
    // Add more office objects here...
  ];

  return (
    <>
      {offices.map((office) => (
        <div className="col-sm-6 col-lg-4" key={office.id}>
          <div className="iconbox-style8 text-center">
            <div className="icon">
              <Image width={120} height={120} src={office.icon} alt="icon" />
            </div>
            <div className="iconbox-content">
              <h4 className="title">{office.city}</h4>
              <p className="text mb-1">{office.address}</p>
              <h6 className="mb10">{office.phoneNumber}</h6>
              
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Office;
