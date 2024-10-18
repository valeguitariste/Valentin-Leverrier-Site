import React, { useState } from 'react';
import './MediaSection.css';
import image1 from './image/media/image1.jpg'; // Assurez-vous que ces chemins sont corrects
import image2 from './image/media/image2.jpg';
import image3 from './image/media/image3.jpg';
import image4 from './image/media/image4.jpg';

const MediaSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className="scroll-section" id="media">
      <h1 className="section-title">Média</h1>
      <div className="media-gallery">
        <div className="media-item" onClick={() => handleImageClick(image1)}>
          <img src={image1} alt="Media 1" />
        </div>
        <div className="media-item" onClick={() => handleImageClick(image2)}>
          <img src={image2} alt="Media 2" />
        </div>
        <div className="media-item" onClick={() => handleImageClick(image3)}>
          <img src={image3} alt="Media 3" />
        </div>
        <div className="media-item" onClick={() => handleImageClick(image4)}>
          <img src={image4} alt="Media 4" />
        </div>
        {/* Ajoutez d'autres images ici */}
      </div>
      {selectedImage && (
        <div className="popup" onClick={closePopup}>
          <div className="popup-content">
            <img src={selectedImage} alt="Selected" />
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaSection;