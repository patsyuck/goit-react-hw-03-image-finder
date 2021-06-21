import ImageGalleryItem from './ImageGalleryItem';
import './ImageGallery.css';

const ImageGallery = ({ cards }) => {
  return (
    <ul className="ImageGallery">
      {cards.map(card => (
        <ImageGalleryItem
          key={card.id}
          url={card.image}
          bigUrl={card.bigImage}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
