import React from "react";

const InvoiceTopData = () => {
  const invoiceData = [
    {
      title: "Fatura Tarihi:",
      date: "22 Ekim 2024",
      heading: "Kiralayan",
      name: "Villam365",
      address: (
        <>
          İstiklal Mahallesi.Cengiz Topel Caddesi. <br /> No 15.Aspaktur Turizm.Biga-Çanakkale
        </>
      ),
      columns: "col-sm-6 col-lg-7",
    },
    {
      title: "Teslim Tarihi:",
      date: "24 Ekim 2024",
      heading: "Müşteri",
      name: "Aydın Yılmaz",
      address: (
        <>
          Karşıyaka<br /> İzmir
        </>
      ),
      columns: "col-sm-6 col-lg-5",
    },
  ];

  return (
    <>
      {invoiceData.map((data, index) => (
        <div className={data.columns} key={index}>
          <div className="invoice_date mb60">
            <div className="title mb5 ff-heading">{data.title}</div>
            <h6 className="fw400 mb0">{data.date}</h6>
          </div>
          <div className="invoice_address">
            <h6 className="mb20">{data.heading}</h6>
            <h6 className="fw400">{data.name}</h6>
            <p className="body-light-color ff-heading">{data.address}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default InvoiceTopData;
