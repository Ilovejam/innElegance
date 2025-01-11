import React from "react";

const ProperytyDescriptions = () => {
  return (
    <>
      <p className="text mb10">
        <strong>Konum:</strong> Kalkan Kördere, Türkiye <br />
        <strong>Oda Sayısı:</strong> 3 yatak odası <br />
        <strong>Kapasite:</strong> Maksimum 6 kişi <br />
        Villa Lisburn, Kalkan&#39;ın Kördere mevkisinde kalabalık arkadaş grupları ya
        da geniş aileler için uygun olan lüks bir tatil villasıdır. 3 yatak
        odası ile 6 kişilik konaklama kapasitesine sahiptir. Taş bina yapısına
        sahip olup lüks malzemelerle dizayn edilmiş ve saunalıdır. Denize
        uzaklığı yaklaşık 4 km&#39;dir.
      </p>
      <div className="agent-single-accordion">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button p-0 collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Daha Fazlası
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body p-0">
                <p className="text">
                  <strong>Yatak Odaları:</strong> <br />
                  3 adet çift kişilik yatak odası <br />
                  <strong>Salon ve Ortak Alanlar:</strong> <br />
                  Geniş oturma alanı <br />
                  Televizyon <br />
                  Sauna <br />
                  <strong>Mutfak:</strong> <br />
                  Tam donanımlı mutfak ekipmanları <br />
                  Yemek masası <br />
                  <strong>Villanın Öne Çıkan Özellikleri:</strong> <br />
                  Özel yüzme havuzu <br />
                  Geniş bahçe <br />
                  Lüks tasarım <br />
                  Sauna imkanı <br />
                  <strong>Hasar Depozitosu:</strong> Villa girişinde 5.000 TL
                  nakit hasar depozitosu alınmaktadır. Hasar, zayi, kırık gibi
                  durumlar oluşmaması durumunda bu bedel çıkış gününde iade
                  edilmektedir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProperytyDescriptions;
