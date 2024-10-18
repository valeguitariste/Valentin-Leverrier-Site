import React from 'react';
import mailLogo from './image/mail.png';
import phoneLogo from './image/phone.png';
import instaLogo from './image/insta.png';

const HeaderSection = ({ scrollToSection }) => {
  return (
    <div className="background-photo">
      <div className="noise-filter"></div>
      <div className="white-band">
        <div className="text-left">
          <h1>Valentin Leverrier</h1>
          <h2>Compositeur - Ingénieur Son</h2>
        </div>
        <div className="sections">
          <h2 className="clickable" onClick={() => scrollToSection('presentation')}>Présentation</h2>
          <h2 className="clickable" onClick={() => scrollToSection('material')}>Matériel</h2>
          <h2 className="clickable" onClick={() => scrollToSection('experience')}>Expérience</h2>
          <h2>Exemples sonores</h2>
          <h2>Média</h2>
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