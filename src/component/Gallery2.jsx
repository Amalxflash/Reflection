// src/components/Gallery.js
import React from 'react';
import './Gallery.css'; // Import the CSS file for styles

const Gallery2 = () => {
    const images = [
      { src: 'https://picsum.photos/id/1040/300/300', alt: 'a house on the mountain' },
      { src: 'https://picsum.photos/id/1040/300/300', alt: 'a house on the mountain' },
      { src: 'https://picsum.photos/id/1054/300/300', alt: 'a big building' },
    ];
    return (
        <div>
        <div className="galleryOne">
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} />
         
        ))}
      </div>
      </div>
  
    );
  };

  export default Gallery2;
