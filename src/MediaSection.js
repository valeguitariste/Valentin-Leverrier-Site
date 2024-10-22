import React, { useState, useRef } from 'react';
import './css/MediaSection.css';
import image1 from './image/media/image1.jpg'; // Assurez-vous que ces chemins sont corrects
import image2 from './image/media/image2.jpg';
import image3 from './image/media/image3.jpg';
import image4 from './image/media/moi1.png';
import image5 from './image/media/studio.png';
import image6 from './image/media/studio2.png';
import image7 from './image/media/studio3.png';
import image8 from './image/media/studio4.png';

const MediaSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const mediaRef = useRef(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className="scroll-section" id="media" ref={mediaRef}>
      <h1 className="media-title" data-aos="fade-up">Média</h1> {/* Ajoutez une classe spécifique ici */}
      <div className="media-gallery">
        <div className="media-item" data-aos="fade-up" onClick={() => handleImageClick(image1)}>
          <img src={image1} alt="Media 1" />
        </div>
        <div className="media-item" data-aos="fade-up" onClick={() => handleImageClick(image2)}>
          <img src={image2} alt="Media 2" />
        </div>
        <div className="media-item" data-aos="fade-up" onClick={() => handleImageClick(image3)}>
          <img src={image3} alt="Media 3" />
        </div>
        <div className="media-item" data-aos="fade-up" onClick={() => handleImageClick(image4)}>
          <img src={image4} alt="Media 4" />
        </div>
        <div className="media-item" data-aos="fade-up" onClick={() => handleImageClick(image5)}>
          <img src={image5} alt="Media 5" />
        </div>
        <div className="media-item" data-aos="fade-up" onClick={() => handleImageClick(image6)}>
          <img src={image6} alt="Media 6" />
        </div>
        <div className="media-item" data-aos="fade-up" onClick={() => handleImageClick(image7)}>
          <img src={image7} alt="Media 7" />
        </div>
        <div className="media-item" data-aos="fade-up" onClick={() => handleImageClick(image8)}>
          <img src={image8} alt="Media 8" />
        </div>
        {/* Ajoutez d'autres images ici */}
      </div>
      {selectedImage && (
        <div className="popup media-popup" onClick={closePopup}>
          <div className="popup-content">
            <img src={selectedImage} alt="Selected" />
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaSection;