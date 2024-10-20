import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './css/MediaSection.css';
import image1 from './image/media/image1.jpg'; // Assurez-vous que ces chemins sont corrects
import image2 from './image/media/image2.jpg';
import image3 from './image/media/image3.jpg';
import image4 from './image/media/image4.jpg';

const MediaSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const mediaRef = useRef(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const currentMediaRef = mediaRef.current; // Copiez la valeur de mediaRef.current dans une variable

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            AOS.refresh(); // Réinitialisez AOS lorsque la section devient visible
          }
        });
      },
      { threshold: 0.1 } // Ajustez le seuil selon vos besoins
    );

    if (currentMediaRef) {
      observer.observe(currentMediaRef);
    }

    return () => {
      if (currentMediaRef) {
        observer.unobserve(currentMediaRef);
      }
    };
  }, []);

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