import './ImageGalleryItem.css';
/*import Instance from './Modal';*/

const ImageGalleryItem = ({ url, openModal, bigUrl }) => {
  return (
    <li className="ImageGalleryItem" onClick={openModal}>
      <img src={url} alt="" className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;
