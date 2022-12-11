import React, { Component } from 'react';
// import { ImageModal } from 'components/Modal/Modal';
import { ModalImg, modalStyles } from 'components/Modal/Modal.styled';
import Modal from 'react-modal';
import {
  GalleryItem,
  GalleryImg,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';

Modal.setAppElement('#modal-root');

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };
  render() {
    const { isModalOpen } = this.state;
    const { webformatURL, largeImageURL, tags } = this.props;

    return (
      <>
        <GalleryItem>
          <GalleryImg
            src={webformatURL}
            alt={tags}
            onClick={this.openModal}
          ></GalleryImg>
        </GalleryItem>
        <Modal
          isOpen={isModalOpen}
          style={modalStyles}
          onRequestClose={this.closeModal}
        >
          <ModalImg src={largeImageURL} alt={tags} width="800" height="400" />
        </Modal>
      </>
    );
  }
}
