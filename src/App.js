import React from 'react';
import './App.css';
import SoundExample from './SoundExample';
import ExperienceSection from './ExperienceSection';
import MaterialSection from './MaterialSection';
import PresentationSection from './PresentationSection';
import HeaderSection from './HeaderSection';
import MediaSection from './MediaSection'; // Importez le nouveau composant

function App() {
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
      <MediaSection /> {/* Ajoutez le composant MediaSection ici */}
    </div>
  );
}

export default App;