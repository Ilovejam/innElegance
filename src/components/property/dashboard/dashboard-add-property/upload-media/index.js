"use client"; // Bu satır Server Component sorununu çözer

import React, { useState } from "react";
import Image from "next/image";
const UploadMedia = () => {
  const [preview, setPreview] = useState(null);

  // Resmi yeniden boyutlandıran basit fonksiyon
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      const MAX_WIDTH = 1024;
      const MAX_HEIGHT = 768;
      let width = img.width;
      let height = img.height;

      if (width > MAX_WIDTH || height > MAX_HEIGHT) {
        if (width / height > MAX_WIDTH / MAX_HEIGHT) {
          height = (MAX_WIDTH / width) * height;
          width = MAX_WIDTH;
        } else {
          width = (MAX_HEIGHT / height) * width;
          height = MAX_HEIGHT;
        }
      }

      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);

      const resizedImageUrl = canvas.toDataURL("image/jpeg", 0.7); // %70 kalite
      setPreview(resizedImageUrl);
    };
  };

  return (
    <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
      <h4 className="title fz17 mb30">Fotoğraf Ekle</h4>
      <form className="form-style1">
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {preview && (
          <div className="mt-3">
           <Image
  src={preview}
  alt="Preview"
  width={300}
  height={300}
  className="img-thumbnail"
  style={{ marginTop: "10px" }}
/>
          </div>
        )}
      </form>
    </div>
  );
};

export default UploadMedia;
