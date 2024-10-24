import React from 'react';
import HeaderSection from './HeaderSection';
import PresentationSection from './PresentationSection';
import MaterialSection from './MaterialSection';
import ExperienceSection from './ExperienceSection';
import SoundExample from './SoundExample';
import MediaSection from './MediaSection';

import './index.css'; // Importez le fichier CSS global


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
      <MediaSection />
    </div>
  );
}

export default App;