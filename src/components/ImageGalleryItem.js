import './ImageGalleryItem.css';

const ImageGalleryItem = ({ url }) => {
  return (
    <li className="ImageGalleryItem">
      <img src={url} alt="" className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;
