"use client";
import Select from "react-select";

const Location = () => {
  const inqueryType = [
    { value: "Antalya", label: "Antalya" },
    { value: "Kaş", label: "Kaş" },
    { value: "İslamlar", label: "İslamlar" },
    { value: "Muğla", label: "Muğla" },
    { value: "Fethiye", label: "Fethiye" },
    { value: "Dalaman", label: "Dalaman" },
    { value: "Seydikemer", label: "Seydikemer" },
    { value: "Kalkan", label: "Kalkan" },
    { value: "Patara", label: "Patara" },
    { value: "Çavdır", label: "Çavdır" },
    { value: "Yanıklar", label: "Yanıklar" },
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
    <>
      <Select
        defaultValue={[inqueryType[0]]}
        name="colors"
        options={inqueryType}
        styles={customStyles}
        className="text-start select-borderless"
        classNamePrefix="select"
        required
        isClearable={false}
      />
    </>
  );
};

export default Location;
