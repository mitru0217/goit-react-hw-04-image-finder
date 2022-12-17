import React, { useState } from 'react';
import { ModalImg, modalStyles } from 'components/Modal/Modal.styled';
import Modal from 'react-modal';
import {
  GalleryItem,
  GalleryImg,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';

Modal.setAppElement('#modal-root');

const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <GalleryItem>
        <GalleryImg
          src={webformatURL}
          alt={tags}
          onClick={openModal}
        ></GalleryImg>
      </GalleryItem>
      <Modal
        isOpen={isModalOpen}
        style={modalStyles}
        onRequestClose={closeModal}
      >
        <ModalImg src={largeImageURL} alt={tags} width="800" height="400" />
      </Modal>
    </>
  );
};

export default ImageGalleryItem;
