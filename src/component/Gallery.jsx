// src/components/Gallery.js
import React from 'react';
import './Gallery.css'; // Import the CSS file for styles

const Gallery = () => {
  const images = [
    { src: 'https://picsum.photos/id/1040/300/300', alt: 'a house on the mountain' },
    { src: 'https://picsum.photos/id/1040/300/300', alt: 'a house on the mountain' },
    { src: 'https://picsum.photos/id/1054/300/300', alt: 'a big building' },
    { src: 'https://picsum.photos/id/101/300/300', alt: 'another house' }
  ];
  return (
      <div className="gallery">
      {images.map((image, index) => (
        <img key={index} src={image.src} alt={image.alt} />
       
      ))}
  
    </div>

  );
};




export default Gallery;
