const Amenities = () => {
  const amenities = [
    [
      { label: "Ücretsiz otopark" },
      { label: "Özel Havuzlu", defaultChecked: true },
      { label: "Bahçe Şöminesi", defaultChecked: true },
      { label: "Şezlonglar", defaultChecked: true },
    ],
    [
      { label: "Özel Korunaklı Veranda" },
      { label: "Bulaşık makinesi" },
      { label: "Çamaşır Makinesi" },
      { label: "Masa Tenisi" },
    ],
    [
      { label: "Deniz Manzaralı" },
      { label: "Klima" },
      { label: "Langırt" },
      { label: "Açık Havada Yemek Alanı" },
    ],
  ];

  return (
    <>
      {amenities.map((column, columnIndex) => (
        <div className="col-sm-4" key={columnIndex}>
          <div className="widget-wrapper mb20">
            <div className="checkbox-style1">
              {column.map((amenity, amenityIndex) => (
                <label className="custom_checkbox" key={amenityIndex}>
                  {amenity.label}
                  <input
                    type="checkbox"
                    defaultChecked={amenity.defaultChecked}
                  />
                  <span className="checkmark" />
                </label>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Amenities;
