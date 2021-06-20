import './ImageGalleryItem.css';

const ImageGalleryItem = ({ id, url }) => {
  return (
    <li className="ImageGalleryItem" key={id}>
      <img src={url} alt="" className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;
