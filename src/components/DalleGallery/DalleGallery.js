import React from 'react';
import './DalleGallery.css';import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

function GalleryModal () {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

return (
  <>
    <Button variant="primary" onClick={handleShow}
            className="gallery-modal-button"

    >
      what's this?
    </Button>

    <Modal show={show} onHide={handleClose} className='gallery-modal'>
      <Modal.Header closeButton>
        <Modal.Title className='modal-title'>DALL·E 2 gallery</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="gallery-desc">
          Here you can find some images I've prompted DALL·E 2 to generate.
          <br /><br />
          The text description used to generate the images is displayed
          when you hover over the image; or on mobile, when you tap the image.
          <br />
          I love colors, psychedelia, childlike wonder; and these are often
          reflected in the images I generate.
          <br />
          <br />
          I would like to express my gratitude (as well as issue an apology)
          for all the creative people whose works have been distilled into these
          images that OpenAI mercilessly scraped and used to train their neural network.
          The internet forces us to reflect on the nature of authorship and ownership
          in a way that has never been possible before.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  </>
);

}

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
    <GalleryModal />
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
