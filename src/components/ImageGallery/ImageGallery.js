import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.css';

const ImageGallery = ({ cards, openModal }) => {
  return (
    <ul className="ImageGallery">
      {cards.map(card => (
        <ImageGalleryItem
          key={card.id}
          url={card.image}
          bigUrl={card.bigImage}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
