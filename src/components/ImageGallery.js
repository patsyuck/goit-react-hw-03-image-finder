import ImageGalleryItem from './ImageGalleryItem';
import './ImageGallery.css';

const ImageGallery = ({ cards }) => {
  return (
    <ul className="ImageGallery">
      {cards.map(card => (
        <ImageGalleryItem id={card.id} url={card.image} />
      ))}
    </ul>
  );
};

export default ImageGallery;
