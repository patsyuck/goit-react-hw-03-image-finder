import './ImageGalleryItem.css';

const ImageGalleryItem = ({ url, openModal, bigUrl }) => {
  return (
    <li className="ImageGalleryItem" onClick={openModal(bigUrl)}>
      <img src={url} alt="" className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;
