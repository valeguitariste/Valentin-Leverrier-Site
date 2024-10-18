import React, { useState } from 'react';
import Popup from './Popup'; // Importez le composant Popup

const ExperienceSection = ({ openAudioPopup, openVideoPopup }) => {
  const [selectedContent, setSelectedContent] = useState(null);

  const handleContentClick = (content) => {
    setSelectedContent(content);
  };

  const closePopup = () => {
    setSelectedContent(null);
  };

  return (
    <div className="scroll-section" id="experience">
      <h1>Expérience</h1>
      <div className="material-section">
        <div className="material-column">
          <h2>Studio</h2>
          <h3 className="clickable" onClick={() => handleContentClick({ type: 'audio', title: "Je n’ai pas peur du vent", audioPath: './music/vent_poeme.mp3', text: "Enregistrement voix" })}>
            Je n’ai pas peur du vent - Pierre Saunier
          </h3>
          <h3 className="clickable" onClick={() => handleContentClick({ type: 'audio', title: "Father & Son - Serge Vilamajo", audioPath: './music/Father_.mp3', text: "Mastering" })}>
            Father & Son - Serge Vilamajo
          </h3>
          <h3 className="clickable" onClick={() => handleContentClick({ type: 'audio', title: "Wish You Were Here (cover) - Serge Vilamajo", audioPath: './music/Wish_.mp3', text: "Mastering" })}>
            Wish You Were Here (cover) - Serge Vilamajo
          </h3>
          <h3 className="clickable" onClick={() => handleContentClick({ type: 'audio', title: "Put it There (cover) - Serge Vilamajo", audioPath: './music/Put_.mp3', text: "Mastering" })}>
            Put it There (cover) - Serge Vilamajo
          </h3>
          <h3>Ballade Blues - Quentin Gouraud </h3>
          <h3>Colours in the Sky - Louise</h3>
          <h3>Summertime - Louise</h3>
          <h3>Raya - Casper Sanderson</h3>
          <h3>Planes - Casper Sanderson</h3>
        </div>
        <div className="material-column">
          <h2>Audiovisuel</h2>
          <h3 className="clickable" onClick={() => handleContentClick({ type: 'video', title: "Capsule Sonore Teaser", videoUrl: "https://www.youtube.com/embed/gZNIQvd8lsM", text: "Composition Sonore des 9 épisodes" })}>
            Capsule Sonore
          </h3>
          <h3 className="clickable" onClick={() => handleContentClick({ type: 'video', title: "9-4", videoUrl: "https://www.youtube.com/embed/nlMcYo7ZPo0", text: "Enregistrement live multi-piste" })}>
            9-4 - SIMON DENIZARTS
          </h3>
          <h3 className="clickable" onClick={() => handleContentClick({ type: 'video', title: "American Boy", videoUrl: "https://www.youtube.com/embed/cKrbWY7-VMo", text: "Enregistrement studio clip" })}>
            American Boy - Komodo Salé
          </h3>
          <h3 className="clickable" onClick={() => handleContentClick({ type: 'video', title: "Teaser Komodo", videoUrl: "https://www.youtube.com/embed/KRzEAvfNIUY", text: "Enregistrement studio clip" })}>
            Teaser - Komodo Salé
          </h3>
          <h3 className="clickable" onClick={() => handleContentClick({ type: 'video', title: "My Lord Willoughby's Welcome Home", videoUrl: "https://www.youtube.com/embed/mbmWeG5VP04", text: "Enregistrement studio clip" })}>
            "My Lord Willoughby's Welcome Home" de John Dowland - Clément Latour & Simon Waddell
          </h3>
          <h3 className="clickable" onClick={() => handleContentClick({ type: 'video', title: "Canciones Populares", videoUrl: "https://www.youtube.com/embed/hoWQ3mQngPI", text: "Enregistrement studio live" })}>
            Canciones Populares - Duo Gagey/Bleton
          </h3>
          <h3 className="clickable" onClick={() => handleContentClick({ type: 'video', title: "Arvö Pärt, Für Alina & Fratres", videoUrl: "https://www.youtube.com/embed/duiRN06cBSY", text: "Enregistrement studio live" })}>
            Arvö Pärt, Für Alina & Fratres - Thomas Csaba
          </h3>
          <h3 className="clickable" onClick={() => handleContentClick({ type: 'video', title: "Kiua", videoUrl: "https://player.vimeo.com/video/517594841", text: "Composition et enregistrement studio clip" })}>
            Kiua - Amasom
          </h3>
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