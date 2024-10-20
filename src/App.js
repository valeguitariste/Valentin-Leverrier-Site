import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeaderSection from './HeaderSection';
import PresentationSection from './PresentationSection';
import MaterialSection from './MaterialSection';
import ExperienceSection from './ExperienceSection';
import SoundExample from './SoundExample';
import MediaSection from './MediaSection';
import './index.css'; // Importez le fichier CSS global

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Durée de l'animation en millisecondes
      offset: 200, // Décalage par rapport au point de déclenchement
      easing: 'ease-in-out', // Fonction d'accélération
      once: true, // Si true, l'animation ne se déclenche qu'une seule fois
    });
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <HeaderSection scrollToSection={scrollToSection} />
      <PresentationSection />
      <MaterialSection />
      <ExperienceSection />
      <SoundExample />
      <MediaSection />
    </div>
  );
}

export default App;