"use client"; // Bu satırı ekleyin

import React, { useState } from "react";
import DatePicker from "react-datepicker"; // Takvim bileşeni
import "react-datepicker/dist/react-datepicker.css"; // CSS stili
import Image from "next/image";
import Link from "next/link";

const ContactWithAgent = () => {
  const [checkInDate, setCheckInDate] = useState(null); // Giriş tarihi
  const [checkOutDate, setCheckOutDate] = useState(null); // Çıkış tarihi
  const [guests, setGuests] = useState(""); // Kişi sayısı

  return (
    <>
      <div className="agent-single d-sm-flex align-items-center pb25">
        <div className="single-img mb30-sm">{/* Görsel ekleyebilirsiniz */}</div>

        <div className="single-contant ml20 ml0-xs">
          <h6 className="title mb-1"></h6>

          <div className="agent-meta mb10 d-md-flex align-items-center">
            <span className="text fz15" style={{ marginRight: "10px" }}>Giriş Tarihi:</span><br />
            <DatePicker
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              className="form-control"
              placeholderText="Giriş Tarihi Seçin"
              dateFormat="dd/MM/yyyy"
            />
          </div>

          <div className="agent-meta mb10 d-md-flex align-items-center">
            <span className="text fz15" style={{ marginRight: "10px" }}>Çıkış Tarihi:</span><br />
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              className="form-control"
              placeholderText="Çıkış Tarihi Seçin"
              dateFormat="dd/MM/yyyy"
              minDate={checkInDate} // Çıkış tarihi, giriş tarihinden önce olamaz
            />
          </div>

          <div className="agent-meta mb10 d-md-flex align-items-center">
            <span className="text fz15">Kişi Sayısı (Çocuklar Dahil):  </span><br />
            <input
              type="number"
              className="form-control"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              placeholder="Kişi Sayısını Girin"
              min="1"
            />
          </div>
        </div>
      </div>

      <div className="d-grid">
        <Link href="/dashboard-my-favourites" className="ud-btn btn-white2">
          Rezervasyon Oluştur
          <i className="fal fa-arrow-right-long" />
        </Link>
      </div>
      <br />
      <div className="d-grid">
        <Link href="" className="ud-btn btn-white2">
        Hasar Depozitosu  <span /> <span/>   5.000,00 ₺
        </Link>
      </div>
    </>
  );
};

export default ContactWithAgent;
