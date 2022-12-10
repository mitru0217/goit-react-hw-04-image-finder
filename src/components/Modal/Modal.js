import Modal from 'react-modal';
import { ModalImg } from 'components/Modal/Modal.styled';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#modal-root');

export const ImageModal = ({ isModalOpen, largeImageURL, tags, onClose }) => {
  <Modal isOpen={isModalOpen} onRequestClose={onClose} style={modalStyles}>
    <div>
      <ModalImg src={largeImageURL} alt={tags} width="600" height="400" />
    </div>
  </Modal>;
};
