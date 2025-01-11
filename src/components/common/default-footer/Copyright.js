import React from "react";

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const Footer = () => {
  const footerMenuItems = [
    { text: "Gizlilik Sözleşmesi", href: "#" },
    { text: "KVKK", href: "#" },
   
  ];

  return (
    <div className="container white-bdrt1 py-4">
      <div className="row">
        <div className="col-sm-6">
          <div className="text-center text-lg-start">
            <p className="copyright-text text-gray ff-heading">
              www.Villam365.com © {getCurrentYear()}{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
              </a>{" "}
              - All rights reserved
            </p>
          </div>
        </div>
        {/* End .col-sm-6 */}

        <div className="col-sm-6">
          <div className="text-center text-lg-end">
            <p className="footer-menu ff-heading text-gray">
              {footerMenuItems.map((item, index) => (
                <React.Fragment key={index}>
                  <a className="text-gray" href={item.link}>
                    {item.label}
                  </a>
                  {index !== footerMenuItems.length - 1 && " · "}
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
        {/* End .col-sm-6 */}
      </div>
    </div>
  );
};

export default Footer;
