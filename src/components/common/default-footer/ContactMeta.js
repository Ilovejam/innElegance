import React from "react";

const ContactMeta = () => {
  const contactInfoList = [
    {
      title: "365 Gün Tatil",
      phone: "+90 286 316 55 99",
      phoneLink: "tel:+902863165599", // Changed phoneLink to tel: URI
    },
    {
      title: "Sorularınız mı var?",
      mail: "info@Villam365.com",
      mailLink: "mailto:info@Villam365.com", // Changed mailLink to direct email address
    },
  ];

  return (
    <div className="row mb-4 mb-lg-5">
      {contactInfoList.map((contact, index) => (
        <div className="col-auto" key={index}>
          <div className="contact-info">
            <p className="info-title">{contact.title}</p>
            {contact.phone && (
              <h6 className="info-phone">
                <a href={contact.phoneLink}>{contact.phone}</a>
              </h6>
            )}
            {contact.mail && (
              <h6 className="info-mail">
                <a href={contact.mailLink}>{contact.mail}</a>
              </h6>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactMeta;
