"use client";
import Select from "react-select";

const Location = ({filterFunctions}) => {
  const locationOptions = [
    { value: "Tümü", label: "Tümü" },
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
    <Select
      defaultValue={[locationOptions[0]]}
      name="colors"
      styles={customStyles}
      options={locationOptions}
      value={{value:filterFunctions.location,label:filterFunctions.location}}
      
     
      
      
      
      
      className="select-custom filterSelect"
      classNamePrefix="select"
      onChange={(e)=>filterFunctions?.handlelocation(e.value)}
      required
    />
  );
};

export default Location;
