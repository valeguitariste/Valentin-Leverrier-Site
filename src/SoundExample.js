import React, { useState, useRef } from 'react';
import './css/SoundExample.css';
import './css/typography.css'; // Importez le fichier CSS
import majesteImage from './image/image-son/majeste.png';
import résistanceImage from './image/image-son/Résistance.png';
import voyageurImage from './image/image-son/Voyageur.png';
import transmetteurImage from './image/image-son/Transmetteur.png';
import passionImage from './image/image-son/passion2.png';
import artisantImage from './image/image-son/artisant.png';
import libanaiseImage from './image/image-son/Yusra.png';

import audioFileforet from './music/Sa_majesté_la_forêt.mp3';
import audioFilerésistance from './music/Résistance.mp3';
import audioFilevoyageur from './music/Voyageur.mp3';
import audioFiletransmetteur from './music/Transmetteur.mp3';
import audioFilepassion from './music/Passion.mp3';
import audioFileartisant from './music/artisant.mp3';
import audioFilelibanaise from './music/libanaise.mp3';

import { FaPlay, FaPause } from 'react-icons/fa'; // Importez les icônes de lecture et de pause

const SoundExample = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // Utilisez un état distinct pour chaque vignette
  const [playingIndex, setPlayingIndex] = useState(null); // Utilisez un état distinct pour chaque vignette en lecture
  const audioRef = useRef(null);

  const toggleAudio = (audioPath, index) => {
    if (playingIndex === index) {
      audioRef.current.pause();
      setPlayingIndex(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      audioRef.current = new Audio(audioPath);
      audioRef.current.play().catch(error => {
        console.error("Audio playback failed:", error);
      });
      setPlayingIndex(index);
    }
  };

  const soundExamples = [
    {
      title: 'Sa majesté la forêt',
      image: majesteImage,
      audioPath: audioFileforet,
      iconColor: 'white', // Couleur du symbole du lecteur
      iconOpacity: 0.7, // Opacité du symbole du lecteur
    },
    {
      title: 'La résistante',
      image: résistanceImage,
      audioPath: audioFilerésistance,
      iconColor: 'black', // Couleur du symbole du lecteur
      iconOpacity: 0.6, // Opacité du symbole du lecteur
    },
    {
      title: 'Le voyageur',
      image: voyageurImage,
      audioPath: audioFilevoyageur,
      iconColor: 'black', // Couleur du symbole du lecteur
      iconOpacity: 0.6, // Opacité du symbole du lecteur
    },
    {
      title: 'Le transmetteur',
      image: transmetteurImage,
      audioPath: audioFiletransmetteur,
      iconColor: 'black', // Couleur du symbole du lecteur
      iconOpacity: 0.6, // Opacité du symbole du lecteur
    },
    {
      title: 'La passionnée',
      image: passionImage,
      audioPath: audioFilepassion,
      iconColor: 'black', // Couleur du symbole du lecteur
      iconOpacity: 0.6, // Opacité du symbole du lecteur
    },
    {
      title: 'Artisant',
      image: artisantImage,
      audioPath: audioFileartisant,
      iconColor: 'black', // Couleur du symbole du lecteur
      iconOpacity: 0.6, // Opacité du symbole du lecteur
    },
    {
      title: 'La Libanaise',
      image: libanaiseImage,
      audioPath: audioFilelibanaise,
      iconColor: 'black', // Couleur du symbole du lecteur
      iconOpacity: 0.6, // Opacité du symbole du lecteur
    },
    // Ajoutez d'autres exemples sonores ici
  ];

  return (
    <div className="scroll-section" id="sound-examples">
      <h1 className="section-title">Exemples sonores</h1> {/* Assurez-vous que la classe est appliquée ici */}
      <div className="sound-examples">
        {soundExamples.map((example, index) => (
          <div
            key={index}
            className={`sound-example ${hoveredIndex === index ? 'hovered' : ''} ${playingIndex === index ? 'playing' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => toggleAudio(example.audioPath, index)}
          >
            <img src={example.image} alt={example.title} className={`thumbnail ${playingIndex === index ? 'playing' : ''}`} />
            {hoveredIndex === index && <p className="title">{example.title}</p>}
            <div className="icon" style={{ color: example.iconColor, opacity: example.iconOpacity }}>
              {playingIndex === index ? <FaPause /> : <FaPlay />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoundExample;