import React from 'react';
import { DalleGallery } from './DalleGallery';
import { Modal } from 'react-bootstrap/Modal';
import { useState } from 'react';

function GalleryModal () {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

return (
  <>
    <Button variant="primary" onClick={handleShow}>
      what's this?
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body><DalleGallery /></Modal.Body>
      <Modal.Footer>
        <Button className="gallery-modal-close-button"
        variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  </>
);

}

export default GalleryModal;