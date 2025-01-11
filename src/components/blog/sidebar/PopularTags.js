import React from "react";

const PopularTags = () => {
  const tags = ["Antalya", "Villa", "Çocuklu Aile ", "Balayı Villası", "Kalkan"];

  return (
    <div className="sidebar-widget mb30 pb20">
      <h6 className="widget-title">Popüler Etiketler</h6>
      <div className="tag-list mt20">
        {tags.map((tag, index) => (
          <a href="#" key={index}>
            {tag}
          </a>
        ))}
      </div>
    </div>
  );
};

export default PopularTags;
