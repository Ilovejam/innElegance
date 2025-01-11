import React from "react";
import Link from "next/link";

const ChangePasswordForm = () => {
  return (
    <form className="form-style1">
      <div className="row">
        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Kartın Üzerindeki Ad Soyad
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              required
            />
          </div>
        </div>
      </div>
      {/* End .col */}
      <div className="row">
        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Kart Numarası
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="0000 0000 0000 0000"
              required
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
            Son Kullanma Tarihi
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md"
              placeholder="AA/YY"
              required
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
CVV            </label>
            <input
              type="text"
              className="form-control"
              placeholder="123"
              required
            />
          </div>
        </div>
        {/* End .col */}

      

        <div className="col-md-12">
          <div className="text-end"  >
          <Link href="/invoice" passHref>
            <button type="submit" className="ud-btn btn-dark"  >
            Ödemeyi Onayla
              <i className="fal fa-arrow-right-long" />
            </button>
          </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
