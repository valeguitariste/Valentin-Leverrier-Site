import React, { useState, useEffect } from 'react';
import mailLogo from './image/mail.webp';
import phoneLogo from './image/phone.webp';
import instaLogo from './image/insta.webp';
import './css/responsive.css';
import './css/header.css';


const HeaderSection = ({ scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
      if (window.innerWidth >= 900) {
        setMenuOpen(false); // Ferme le menu si l'écran est redimensionné au-dessus de 900px
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="background-photo">
      <div className="white-band">
        <div className="text-left">
          <h1>Valentin Leverrier</h1>
          <h2>Artiste Sonore - Ingénieur Son</h2>
        </div>
        {isMobile && (
          <div className="menu-icon" onClick={toggleMenu}>
            <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        {isMobile && menuOpen && (
          <div className="sections open">
            <h2 className="clickable" onClick={() => scrollToSection('presentation')}>Présentation</h2>
            <h2 className="clickable" onClick={() => scrollToSection('material')}>Matériel</h2>
            <h2 className="clickable" onClick={() => scrollToSection('experience')}>Expérience</h2>
            <h2 className="clickable" onClick={() => scrollToSection('sound-examples')}>Exemples sonores</h2>
            <h2 className="clickable" onClick={() => scrollToSection('media')}>Médias</h2>
          </div>
        )}
        {/* Affichage permanent des titres si l'écran est supérieur à 900px */}
        {!isMobile && (
  <div className="sections"> {/* Enveloppe les h2 dans un div avec la classe 'sections' */}
  <h2 className="clickable" onClick={() => scrollToSection('presentation')}>Présentation</h2>
  <h2 className="clickable" onClick={() => scrollToSection('material')}>Matériel</h2>
  <h2 className="clickable" onClick={() => scrollToSection('experience')}>Expérience</h2>
  <h2 className="clickable" onClick={() => scrollToSection('sound-examples')}>Exemples sonores</h2>
  <h2 className="clickable" onClick={() => scrollToSection('media')}>Média</h2>
</div>
        )}
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