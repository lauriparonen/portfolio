import React from 'react';
import './DalleGallery.css';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useEffect } from 'react';
import arrowUp  from './arrowUp.svg';



function BackToTop({ showButton }) {
    /**
     * This function renders the back to top button.
     * 
     * @returns the back to top button
     */
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  
      if (scrollTop > 2500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <>
        {showButton && (
          <Button
            className={`back-to-top ${visible ? "visible" : ""}`}
            onClick={handleClick}
          >
            <img src={arrowUp} className="arrow-up"/>
            
          </Button>
        )}
      </>
    );
  }
function GalleryModal () {
  
  /**
   * This function renders the gallery modal.
   * It uses the useState hook to create a state variable called show,
   * which is used to determine whether the modal is shown or not.
   * 
   * @returns the gallery modal
   */

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
          I love colors, psychedelia and childlike wonder; these are often
          reflected in the images I generate.
          <br />
          <br />
          I would like to express my gratitude (as well as issue an apology)
          for all the creative people whose works have been distilled into these
          images that OpenAI scraped and used to train their neural network.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button className='gallery-modal-close-button'
        
        variant="secondary" onClick={handleClose}>
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
   * 
   * @returns the gallery page
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

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const clientHeight = document.documentElement.clientHeight || window.innerHeight;

      if (scrollTop > clientHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="gallery-header">
    <h1 className="page-title"
    >gallery</h1>
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
    <BackToTop showButton={showButton}/>
    </div>
  );
};

export default DalleGallery;
