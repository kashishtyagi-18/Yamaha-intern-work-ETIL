import React, { useState } from "react";
import defaultImage from "../assets/images/image.jpg";

function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between space-x-6 p-4 border rounded-xl shadow-md w-full">
      <div className="flex-1">
        <h2 className="text-lg font-semibold">Interactive Demo</h2>
        <p className="text-gray-600">
          Medical image analysis demo with pre-trained models for various diagnostic tasks.
        </p>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mt-3"
        />
      </div>

      
      <div className="mt-4 md:mt-0 w-40 h-40 overflow-hidden rounded-lg border shadow">
        <img
          src={selectedImage ? selectedImage : defaultImage}
          alt="Preview"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default ImageUpload;
