import './Modal.css';

const Instance = ({ photo, closeModal }) => {
  return (
    <div className="Overlay" onClick={closeModal}>
      <div className="Modal">
        <img src={photo} alt="" />
      </div>
    </div>
  );
};

/* 1-ий варіант: LightBox із ТЗ */
/*import * as basicLightbox from 'basiclightbox';

const Instance = basicLightbox.create(`
  <div className="Overlay">
    <h1>Dynamic Content</h1>
    <div className="Modal">
      <img src="" alt="" />
    </div>
  </div>
`)*/

/* 2-ий варіант: модалка з Material UI */
/*import { Modal } from '@material-ui/core';

const Instance = () => {
  return (
    <Modal>
      <div className="Overlay">
        <h1>Dynamic Content</h1>
        <div className="Modal">
          <img src="" alt="" />
        </div>
      </div>
    </Modal>
  );
};*/

export default Instance;

/*instance.show()*/
