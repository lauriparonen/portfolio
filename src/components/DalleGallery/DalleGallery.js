import React from 'react';
import './DalleGallery.css';

function DalleGallery() {

  const images = require.context('./images', false, /\.(png|jpe?g|svg)$/);

  const imageArray = [];

  images.keys().forEach((key) => {
    const promptRegex = /DALL·E \d{4}-\d{2}-\d{2} \d{2}\.\d{2}\.\d{2} - (.+)/;
    const promptMatch = promptRegex.exec(key);

    const prompt = promptMatch ? promptMatch[1] : " ";
    const src = images(key).default;

    imageArray.push({ src, prompt });
  });
    
  return (
    <div className="gallery-container">
      {imageArray.map((image) => (
        <div className="gallery-item" key={image.src}>
          <img src={image.src} alt={image.prompt} />
          <div className="gallery-overlay">
            <p>{image.prompt}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DalleGallery;
