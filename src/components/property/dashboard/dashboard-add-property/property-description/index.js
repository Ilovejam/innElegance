"use client";
import Select from "react-select";

const PropertyDescription = () => {
  const catergoryOptions = [
    { value: "İslamlar", label: "İslamlar" },
    { value: "Kalkan", label: "Kalkan" },
    { value: "Patara", label: "Patara" },
    { value: "Çavdır", label: "Çavdır" },
    { value: "Fethiye", label: "Fethiye" },
    { value: "Seydikemer", label: "Seydikemer" },
    { value: "Dalaman", label: "Dalaman" },
  ];
  const listedIn = [
    { value: "All Listing", label: "All Listing" },
    { value: "Active", label: "Active" },
    { value: "Sold", label: "Sold" },
    { value: "Processing", label: "Processing" },
  ];
  const PropertyStatus = [
    { value: "All Cities", label: "All Cities" },
    { value: "Pending", label: "Pending" },
    { value: "Processing", label: "Processing" },
    { value: "Published", label: "Published" },
  ];

  const customStyles = {
    option: (styles, { isFocused, isSelected, isHovered }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? "#eb6753"
          : isHovered
          ? "#eb675312"
          : isFocused
          ? "#eb675312"
          : undefined,
      };
    },
  };

  return (
    <form className="form-style1">
      <div className="row">
        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Başlık</label>
            <input
              type="text"
              className="form-control"
            />
          </div>
        </div>
        {/* End .col-12 */}

      

        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Konum Seçin
            </label>
            <div className="location-area">
              <Select
                defaultValue={[catergoryOptions[1]]}
                name="colors"
                options={catergoryOptions}
                styles={customStyles}
                className="select-custom pl-0"
                classNamePrefix="select"
                required
                isMulti
              />
            </div>
          </div>
        </div>
        {/* End .col-6 */}

        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Açıklama
            </label>
            <textarea
              cols={30}
              rows={5}
              defaultValue={""}
            />
          </div>
        </div>
        {/* End .col-6 */}
       

       

        <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Ücret
            </label>
            <input
              type="text"
              className="form-control"
            />
          </div>
        </div>
        {/* End .col-6 */}
        <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Hasar Depozitosu
            </label>
            <input
              type="text"
              className="form-control"
            />
          </div>
        </div>

    
      </div>
    </form>
  );
};

export default PropertyDescription;
