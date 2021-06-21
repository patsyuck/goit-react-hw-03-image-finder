import './ImageGalleryItem.css';
/*import Instance from './Modal';*/

const ImageGalleryItem = ({ url, bigUrl }) => {
  return (
    <li
      className="ImageGalleryItem"
      /*onClick={() => { Instance.show() }}*/
    >
      <img src={url} alt="" className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;
