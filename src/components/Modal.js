import './Modal.css';

const Modal = ({ photo, closeModal }) => {
  return (
    <div className="Overlay" onClick={closeModal}>
      <div className="Modal">
        <img src={photo} alt="" />
      </div>
    </div>
  );
};

export default Modal;
