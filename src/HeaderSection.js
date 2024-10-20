import React, { useState } from 'react';
import mailLogo from './image/mail.png';
import phoneLogo from './image/phone.png';
import instaLogo from './image/insta.png';
import './css/header.css'; // Importez le fichier CSS

const HeaderSection = ({ scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="background-photo">
      <div className="white-band">
        <div className="text-left">
          <h1>Valentin Leverrier</h1>
          <h2>Artiste Sonore - Ingénieur Son</h2>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`sections ${menuOpen ? 'open' : ''}`}>
          <h2 className="clickable" onClick={() => scrollToSection('presentation')}>Présentation</h2>
          <h2 className="clickable" onClick={() => scrollToSection('material')}>Matériel</h2>
          <h2 className="clickable" onClick={() => scrollToSection('experience')}>Expérience</h2>
          <h2 className="clickable" onClick={() => scrollToSection('sound-examples')}>Exemples sonores</h2>
          <h2 className="clickable" onClick={() => scrollToSection('media')}>Média</h2>
        </div>
        <div className="social-icons">
          <a href="mailto:valentin.leverrier@gmail.com">
            <img src={mailLogo} alt="Mail" />
          </a>
          <a href="tel:+33610381216">
            <img src={phoneLogo} alt="Téléphone" />
          </a>
          <a href="https://www.instagram.com/fousound/">
            <img src={instaLogo} alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;