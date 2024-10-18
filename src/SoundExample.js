import React, { useState, useRef } from 'react';
import './SoundExample.css';
import majesteImage from './image/image-son/majeste.png'; // Importez votre image
import audioFile from './music/Sa_majesté_la_forêt.mp3'; // Importez votre audio
import { FaPlay, FaPause } from 'react-icons/fa'; // Importez les icônes de lecture et de pause

const SoundExample = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = (audioPath) => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current = new Audio(audioPath);
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleClick = () => {
    toggleAudio(audioFile);
  };

  return (
    <div className="scroll-section" id="sound-examples">
      <h1>Exemples sonores</h1>
      <div className="sound-examples">
        <div
          className={`sound-example ${isHovered ? 'hovered' : ''} ${isPlaying ? 'playing' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleClick}
        >
          <img src={majesteImage} alt="Sa majesté la forêt" className={`thumbnail ${isPlaying ? 'playing' : ''}`} />
          {isHovered && <h4 className="title">Sa majesté la forêt</h4>}
          <div className="icon">
            {isPlaying ? <FaPause /> : <FaPlay />}
          </div>
        </div>
        {/* Ajoutez d'autres vignettes ici */}
      </div>
    </div>
  );
};

export default SoundExample;