import React from 'react';
import { useInView } from 'react-intersection-observer';
import './css/presentation.css'; // Importez le fichier CSS

const PresentationSection = () => {
  const { ref } = useInView({ threshold: 0.5 });

  return (
    <div className="scroll-section" id="presentation" ref={ref}>
      <h1 className="presentation-title">Présentation</h1>
      <p className="scroll-text">
        Concepteur sonore et compositeur, Valentin navigue avec les sons, les agences, les manipules, tirant ainsi parti de leurs pleins potentiels expressifs. Soucieux d’avoir le meilleur équipement pour ses besoins et ceux de ses clients, il construit lui-même son propre matériel d’enregistrement et de traitement (périphériques, microphones, effets). Ainsi il saura vous guider sur la sonorité que vous recherchez. Guitariste classique et électrique de formation, Valentin connaît le langage et le répertoire de la musique écrite ainsi que l’univers des musiques actuelles amplifiées, improvisées ou de studio.
      </p>
    </div>
  );
};

export default PresentationSection;