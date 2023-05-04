import React from 'react';
import './DalleGallery.css';

function ImageGalleryItem({ imageName }) {
  // extract date and prompt from image name
  const [_, date, time, prompt] = imageName.match
  (/DALL·E (\d{4}-\d{2}-\d{2}) (\d{2}\.\d{2}\.\d{2}) - (.+)/);
  console.log("date:", date);
  console.log("time:", time);
  console.log("prompt:", prompt);

  return (
    <div className="gallery-item">
      <img src={require(`./images/${imageName}`).default} alt={prompt} />
      <div className="gallery-overlay">
        <p>{prompt}</p>
      </div>
    </div>
  );
}

function DalleGallery({ imageNames }) {

  if (!imageNames || imageNames.length === 0) {
    return <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      fontSize: "2rem",
    }
    }
    >under construction</div>;
  }

  return (
    <div className="gallery-container">
      {imageNames && imageNames.map((imageName, index) => (
        <ImageGalleryItem key={index} imageName={imageName} />
      ))}
    </div>
  );
}

export default DalleGallery;
