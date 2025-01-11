import React from "react";

const Category = () => {
  const categories = ["Villa Feriştah", "Villa Ece", "Villa Sarnıç", "Villa Serengeti", "Villa Algı"];

  return (
    <div className="sidebar-widget mb30">
      <h6 className="widget-title">İlginizi Çekebilir</h6>
      <div className="category-list d-flex flex-column mt20">
        {categories.map((category, index) => (
          <a href="#" key={index}>
            {category}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Category;
