import React from "react";
import ImgCard from "./ImgCard";

const ImageGrid = ({ images }) => {
  return (
    <div className="img-grid">
      {images.length > 0 ? (
        images.map((image) => <ImgCard key={image.id} image={image} />)
      ) : (
        <p>No images found. Try a different search.</p>
      )}
    </div>
  );
};

export default ImageGrid;
