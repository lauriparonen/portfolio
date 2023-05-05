import React from 'react';
import './DalleGallery.css';

function DalleGallery() {
  /**
   * This function renders the gallery page.
   * It uses the require.context function to import all images from the images folder.
   * The images are then mapped to the imageArray array, which is then rendered.
   */

  // Import all images from the images folder 
  const images = require.context('./images', false, /\.(png|jpe?g|svg)$/);

  const imageArray = [];

  // Map the images to the imageArray array
  images.keys().forEach((key) => {

    const promptRegex = /DALL·E \d{4}-\d{2}-\d{2} \d{2}\.\d{2}\.\d{2} - (.+)/;
    const promptMatch = promptRegex.exec(key);

    const prompt = promptMatch ? promptMatch[1].split('.')[0] : " ";
    const src = images(key);

    imageArray.push({ src, prompt });
  });
  console.log(imageArray)

  return (
    <div className="gallery-header"
    style={{marginTop:"-1.5rem"}}>
    <h1 className="page-title"
    >gallery</h1>
    {/* <p className="gallery-desc">}
    <p className="gallery-desc">
      Here you can find images I've prompted DALL·E 2 to generate.
      <br />
      The text description used to generate the images is displayed
      when you hover over the image.
      <br />
      I love colors, psychedelia, childlike wonder; and these are often 
      reflected in the images I generate.
      <br />
      I want to express my gratitude, as well as issue an apology, 
      for the creative people whose works have been distilled into these 
      images that OpenAI mercilessly scraped and used to train their neural network.
    </p>
    */}
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
    </div>
  );
};

export default DalleGallery;
