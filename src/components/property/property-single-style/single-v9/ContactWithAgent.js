import Image from "next/image";
import React from "react";

const ContactWithAgent = () => {
  return (
    <>
      <div className="agent-single d-sm-flex align-items-center pb15">
        <div className="single-img mb30-sm">
          <Image
            width={90}
            height={90}
            className="w90"
            src="/images/team/agent-3.png"
            alt="avatar"
          />
        </div>
        <div className="single-contant ml20 ml0-xs">
          <h6 className="title mb-1">Ufuk Yıldıran</h6>
          <div className="agent-meta mb10 d-md-flex align-items-center">
            <a className="text fz15" href="#">
              <i className="flaticon-call pe-1" />
              +90 286 316 55 99            </a>
          </div>
          
        </div>
      </div>
      {/* End agent-single */}
    </>
  );
};

export default ContactWithAgent;
