import Link from "next/link";
import React from "react";

const Cta = () => {
  return (
    <section className="cta-banner4 d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 mx-auto" data-aos="fade-in">
            <div className="cta-style4 position-relative text-center">
              <h1 className="cta-title mb30 text-white">
              Kolay, Hızlı ve Güvenilir Rezervasyon ile Tatiliniz Boyunca Kesintisiz Destek
              </h1>
              <h6 className="sub-title fw400 text-white">Rezervasyon sürecinden tatil bitimine kadar kesintisiz destek sunuyor, güvenilir hizmet anlayışımızla tatilinizin sorunsuz geçmesini sağlıyoruz. Size sadece tatilin keyfini çıkarmak kalıyor!
</h6>

              <div className="d-block d-sm-flex justify-content-center">
                <Link
                  href="/dashboard-add-property"
                  className="ud-btn btn-thm me-0 me-sm-4"
                >
                  Canlı Destek
                  <i className="fal fa-arrow-right-long" />
                </Link>
                <Link href="/grid-default" className="ud-btn btn-white">
                  Keşfet
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
