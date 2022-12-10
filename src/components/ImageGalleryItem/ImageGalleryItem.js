import React, { Component } from 'react';
// import { ImageModal } from 'components/Modal/Modal';
import { ModalImg, modalStyles } from 'components/Modal/Modal.styled';
import Modal from 'react-modal';
import {
  GalleryItem,
  GalleryImg,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';

// const modalStyles = {
//   content: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     padding: '0',
//     width: '800px',
//     height: '400px',
//   },
//   overlay: {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0,0,0,0.7)',
//   },
// };

Modal.setAppElement('#modal-root');

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };
  // toggleModal = () => {
  //   this.setState(prevState => ({
  //     isModalOpen: !prevState.isModalOpen,
  //   }));
  // };
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
