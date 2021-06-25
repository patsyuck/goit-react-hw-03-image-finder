import './Modal.css';

const decor = fn => event => {
  if (event.code === 'Escape') {
    fn();
  }
};

const Modal = ({ photo, closeModal }) => {
  return (
    <div
      className="Overlay"
      onClick={closeModal}
      onKeyDown={decor(closeModal)}
      tabIndex="0"
    >
      <div className="Modal">
        <img src={photo} alt="" />
      </div>
    </div>
  );
};

export default Modal;
