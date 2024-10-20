import React, { useState } from 'react';
import Popup from './Popup'; // Importez le composant Popup
import './css/typography.css'; // Importez le fichier CSS
import './css/ExperienceSection.css';

const ExperienceSection = ({ openAudioPopup, openVideoPopup }) => {
  const [selectedContent, setSelectedContent] = useState(null);

  const handleContentClick = (content) => {
    setSelectedContent(content);
  };

  const closePopup = () => {
    setSelectedContent(null);
  };

  const studioItems = [
    { type: 'audio', title: "Je n’ai pas peur du vent", audioPath: './music/vent_poeme.mp3', text: "Enregistrement voix" },
    { type: 'audio', title: "Father & Son - Serge Vilamajo", audioPath: './music/Father_.mp3', text: "Mastering" },
    { type: 'audio', title: "Wish You Were Here (cover) - Serge Vilamajo", audioPath: './music/Wish_.mp3', text: "Mastering" },
    { type: 'audio', title: "Put it There (cover) - Serge Vilamajo", audioPath: './music/Put_.mp3', text: "Mastering" },
    { title: "Ballade Blues - Quentin Gouraud" },
    { title: "Colours in the Sky - Louise" },
    { title: "Summertime - Louise" },
    { title: "Raya - Casper Sanderson" },
    { title: "Planes - Casper Sanderson" },
  ];

  const audiovisuelItems = [
    { type: 'video', title: "Capsule Sonore Teaser", videoUrl: "https://www.youtube.com/embed/gZNIQvd8lsM", text: "Composition Sonore des 9 épisodes" },
    { type: 'video', title: "9-4", videoUrl: "https://www.youtube.com/embed/nlMcYo7ZPo0", text: "Enregistrement live multi-piste" },
    { type: 'video', title: "American Boy", videoUrl: "https://www.youtube.com/embed/cKrbWY7-VMo", text: "Enregistrement studio clip" },
    { type: 'video', title: "Teaser Komodo", videoUrl: "https://www.youtube.com/embed/KRzEAvfNIUY", text: "Enregistrement studio clip" },
    { type: 'video', title: "My Lord Willoughby's Welcome Home", videoUrl: "https://www.youtube.com/embed/mbmWeG5VP04", text: "Enregistrement studio clip" },
    { type: 'video', title: "Canciones Populares", videoUrl: "https://www.youtube.com/embed/hoWQ3mQngPI", text: "Enregistrement studio live" },
    { type: 'video', title: "Arvö Pärt, Für Alina & Fratres", videoUrl: "https://www.youtube.com/embed/duiRN06cBSY", text: "Enregistrement studio live" },
    { type: 'video', title: "Kiua", videoUrl: "https://player.vimeo.com/video/517594841", text: "Composition et enregistrement studio clip" },
  ];

  return (
    <div className="scroll-section" id="experience">
      <h1 className="marge-experience-bas">Expérience</h1>
      <div className="material-section">
        <div className="material-column">
          <h2>Studio</h2>
          {studioItems.map((item, index) => (
            <p
              key={index}
              className={item.type ? "clickable" : ""}
              onClick={item.type ? () => handleContentClick(item) : null}
            >
              {item.title}
            </p>
          ))}
        </div>
        <div className="material-column">
          <h2>Audiovisuel</h2>
          {audiovisuelItems.map((item, index) => (
            <p
              key={index}
              className="clickable"
              onClick={() => handleContentClick(item)}
            >
              {item.title}
            </p>
          ))}
        </div>
      </div>
      {selectedContent && (
        <Popup
          content={
            selectedContent.type === 'audio' ? (
              <>
                <h2>{selectedContent.title}</h2>
                <audio controls autoPlay>
                  <source src={selectedContent.audioPath} type="audio/mpeg" />
                  Votre navigateur ne prend pas en charge l'audio.
                </audio>
                {selectedContent.text && <p>{selectedContent.text}</p>}
              </>
            ) : selectedContent.type === 'video' ? (
              <>
                <h2>{selectedContent.title}</h2>
                <iframe
                  className="video-frame"
                  src={selectedContent.videoUrl}
                  title={selectedContent.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  width="100%"
                  height="400"
                ></iframe>
                {selectedContent.text && <p>{selectedContent.text}</p>}
              </>
            ) : null
          }
          closePopup={closePopup}
        />
      )}
    </div>
  );
};

export default ExperienceSection;