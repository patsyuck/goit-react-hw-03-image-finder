import './Modal.css';

const Modal = ({ photo, closeModal }) => {
  return (
    <div
      className="Overlay"
      onClick={closeModal}
      onKeyDown={event => {
        if (event.code === 'Escape') {
          closeModal();
        }
      }}
      tabIndex="0"
    >
      <div className="Modal">
        <img src={photo} alt="" />
      </div>
    </div>
  );
};

export default Modal;
