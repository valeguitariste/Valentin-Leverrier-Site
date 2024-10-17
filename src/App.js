import React, { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import './App.css';
import mailLogo from './image/mail.png';
import phoneLogo from './image/phone.png';
import instaLogo from './image/insta.png';


// Importations des images pour garantir leur disponibilité dans le bundle
import neumannImage from './image/Neumann_RSM_191.png';
import sennheiserImage from './image/Sennheiser_416.png';
import beyerdynamicImage from './image/Beyerdynamic_m160.png';
import dpaImage from './image/DPA_6061.png';
import primoImage from './image/Primo_EM272Z1.png';
import schoepsImage from './image/Schoeps_CCM4.png';
import u87Image from './image/U87_Neumann.png';
import mixpreImage from './image/Sound_Devices_mixpre_6.png';
import tentacleTrackImage from './image/Tentacle_Track_E.png';
import tentacleSyncImage from './image/Tentacle_Sync.png';
import genelecImage from './image/Genelec_8010.png';
import pmcImage from './image/PMC.png';
import ambientImage from './image/Ambient.png';
import manfrottoImage from './image/manfrotto.png';
import reaperImage from './image/reaper.png';
import protoolsImage from './image/protools.png';
import abletonImage from './image/ableton.png';
import msImage from './image/ms.png';
import pqImage from './image/pq.png';
import rmeImage from './image/rme.png';
import octamicImage from './image/octamic.png';
import dtImage from './image/dt.png';

function App() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const [popupContent, setPopupContent] = useState(null);
  const audioRef = useRef(null);

  const openPopup = (title, description, image) => {
    setPopupContent({ title, description, image });
  };
  
  const openAudioPopup = (title, audioPath, text) => {
    setPopupContent({ type: 'audio', title, audioPath: process.env.PUBLIC_URL + audioPath, text });
  };
  
  const openVideoPopup = (title, videoUrl, text) => {
    let formattedUrl = videoUrl;

    // Format pour YouTube
    if (videoUrl.includes("youtube.com/watch?v=")) {
        const videoId = videoUrl.split("v=")[1].split("&")[0]; // Extraire l'ID
        formattedUrl = `https://www.youtube.com/embed/${videoId}`;
    }
    // Format pour Vimeo
    else if (videoUrl.includes("vimeo.com/")) {
        const videoId = videoUrl.split("/").pop(); // Extraire l'ID
        formattedUrl = `https://player.vimeo.com/video/${videoId}`;
    }

    setPopupContent({ type: 'video', title, videoUrl: formattedUrl, text });
};

  const closePopup = () => {
    setPopupContent(null);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
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

      <div className="scroll-section" id="presentation" ref={ref}>
        <h1>Présentation</h1>
        <h3 className={`scroll-text ${inView ? 'visible' : ''}`}>
          Concepteur sonore et compositeur, Valentin navigue avec les sons, les agences, les manipules, tirant ainsi parti de leurs pleins potentiels expressifs. Soucieux d’avoir le meilleur équipement pour ses besoins et ceux de ses clients, il construit lui-même son propre matériel d’enregistrement et de traitement (périphériques, microphones, effets). Ainsi il saura vous guider sur la sonorité que vous recherchez. Guitariste classique et électrique de formation, Valentin connaît le langage et le répertoire de la musique écrite ainsi que l’univers des musiques actuelles amplifiées, improvisées ou de studio.
        </h3>
      </div>

      <div className="scroll-section" id="material">
        <h1>Matériel</h1>
        <div className="material-section">
          <div className="material-column">
            <h2>Microphones</h2>
            <h3 className="clickable" onClick={() => openPopup('Neumann RSM 191', "Le Neumann RSM 191 est un microphone à condensateur de haute qualité, idéal pour les enregistrements en stéréo. Sa conception le rend parfait pour capturer les détails subtils de la musique.", neumannImage)}>Neumann RSM 191</h3>
            <h3 className="clickable" onClick={() => openPopup('Sennheiser 416', "Le Sennheiser 416 p48 est un microphone directionnel de renommée mondiale, réputé pour sa capacité à capturer des sons clairs dans des environnements bruyants.", sennheiserImage)}>Sennheiser 416</h3>
            <h3 className="clickable" onClick={() => openPopup('Beyerdynamic m160', "Le Beyerdynamic M160 est un microphone à double membrane, qui offre une réponse en fréquence étendue, parfait pour les enregistrements vocaux.", beyerdynamicImage)}>Beyerdynamic m160</h3>
            <h3 className="clickable" onClick={() => openPopup('DPA 6061', "Le DPA 6061 est un microphone de lavalier extrêmement petit et discret, offrant une qualité sonore exceptionnelle.", dpaImage)}>DPA 6061</h3>
            <h3 className="clickable" onClick={() => openPopup('Primo EM272Z1', "Le Primo EM272Z1 est un microphone à électret de haute qualité, utilisé dans les applications de tournage.", primoImage)}>Primo EM272Z1</h3>
            <h3 className="clickable" onClick={() => openPopup('Schoeps CCM4', "Le Schoeps CCM4 est un microphone professionnel très apprécié pour sa qualité sonore et sa robustesse.", schoepsImage)}>Schoeps CCM4</h3>
            <h3 className="clickable" onClick={() => openPopup('U87 Neumann', "Le U87 de Neumann est l'un des microphones les plus emblématiques, connu pour sa chaleur et sa clarté.", u87Image)}>U87 Neumann</h3>
          </div>
          <div className="material-column">
            <h2>Enregistreurs</h2>
            <h3 className="clickable" onClick={() => openPopup('Sound Devices MixPre 6', "Le MixPre 6 est un enregistreur audio portable de haute qualité, parfait pour les producteurs et les ingénieurs du son.", mixpreImage)}>Sound Devices MixPre 6</h3>
            <h3 className="clickable" onClick={() => openPopup('Tentacle Track E', "Le Tentacle Track E est un enregistreur compact et polyvalent, conçu pour capturer un son de haute qualité.", tentacleTrackImage)}>Tentacle Track E</h3>
            <h3 className="clickable" onClick={() => openPopup('Tentacle Sync', "Le Tentacle Sync est un outil essentiel pour la synchronisation de l'audio et de la vidéo.", tentacleSyncImage)}>Tentacle Sync</h3>
          </div>
          <div className="material-column">
            <h2>Enceintes</h2>
            <h3 className="clickable" onClick={() => openPopup('Beyerdynamic dt770 pro', "Les Genelec 8010 sont des moniteurs compacts de studio, offrant une reproduction sonore précise.", dtImage)}>Beyerdynamic dt770 pro</h3>
            <h3 className="clickable" onClick={() => openPopup('Genelec 8010', "Les Genelec 8010 sont des moniteurs compacts de studio, offrant une reproduction sonore précise.", genelecImage)}>Genelec 8010</h3>
            <h3 className="clickable" onClick={() => openPopup('PMC Result 6', "Les PMC Result 6 sont des moniteurs de haute qualité qui offrent une reproduction sonore précise et détaillée, idéale pour le mixage et le mastering. Leur conception permet de capturer chaque nuance sonore, assurant une clarté exceptionnelle dans les productions audio. Robustes et performants, ces moniteurs sont indispensables pour les créateurs de son.", pmcImage)}>PMC Result 6</h3>
          </div>
          <div className="material-column">
            <h2>Autres</h2>
            <h3 className="clickable" onClick={() => openPopup('Ambient qp5100', "Les accessoires Ambient sont connus pour leur durabilité et leur performance.", ambientImage)}>Ambient qp5100</h3>
            <h3 className="clickable" onClick={() => openPopup('Manfrotto Micro Carbone', "Le Pied Micro Carbone est un choix léger et robuste pour les professionnels.", manfrottoImage)}>Manfrotto Micro Carbone</h3>
            <h3 className="clickable" onClick={() => openPopup('Reaper', "Reaper est un logiciel de production audio numérique réputé pour sa flexibilité et sa puissance, ce qui en fait un outil de choix pour les musiciens, les ingénieurs du son et les producteurs. Grâce à son interface personnalisable, les utilisateurs peuvent créer un environnement de travail sur mesure qui correspond parfaitement à leur flux de travail, optimisant ainsi leur créativité. En intégrant une vaste bibliothèque d'effets et d'instruments virtuels, Reaper offre une multitude de possibilités sonores, permettant aux professionnels de l'édition et de la composition d'explorer de nouvelles dimensions musicales..", reaperImage)}>Reaper</h3>
            <h3 className="clickable" onClick={() => openPopup('Protools', "Pro Tools est un logiciel de production audio numérique reconnu dans l'industrie pour sa puissance et ses fonctionnalités avancées, ce qui en fait un standard de référence pour les ingénieurs du son et les producteurs. Avec une interface intuitive et des outils de montage précis, il permet un flux de travail efficace, adapté aux besoins des projets les plus complexes. Grâce à sa vaste gamme de plug-ins et d'instruments virtuels, Pro Tools offre une flexibilité exceptionnelle pour la création musicale et le mixage, permettant aux professionnels de tirer le meilleur parti de chaque enregistrement..", protoolsImage)}>Protools</h3>
            <h3 className="clickable" onClick={() => openPopup('Ableton', "Ableton Live est un logiciel de production audio numérique particulièrement apprécié des musiciens et des DJs pour sa capacité à combiner création musicale et performance en direct. Son interface unique, qui permet une navigation fluide entre le mode Arrangement et le mode Session, facilite l'expérimentation et l'improvisation, rendant le processus créatif dynamique et interactif. Avec une vaste bibliothèque de sons, d'effets et d'instruments virtuels, Ableton Live offre des outils puissants pour la composition et le mixage, permettant aux professionnels de donner vie à leurs idées musicales de manière innovante.", abletonImage)}>Ableton</h3>
            <h3 className="clickable" onClick={() => openPopup('PCB Grinder MS76', "Le MS76 est un compresseur Mid/Side ou double mono de type 1176 fabriqué par Gustav de GroupDIY.", msImage)}>PCB Grinder MS76</h3>
            <h3 className="clickable" onClick={() => openPopup('PCB Grinder PQ2', "Version DIY de l'égaliseur légendaire Pultec par le maître danois Gustav de GOLY / PCB Grinder. Cette version a des plages de gain qui sont plus adaptées au mastering. ", pqImage)}>PCB Grinder PQ2</h3>
            <h3 className="clickable" onClick={() => openPopup('RME Fireface UC', "Le RME Fireface UC est une interface audio USB professionnelle qui offre une qualité sonore exceptionnelle et des fonctionnalités avancées pour les musiciens et les ingénieurs du son. Avec sa capacité à gérer jusqu'à 36 canaux audio simultanés, elle permet un enregistrement et un mixage de haute fidélité. Son préamplificateur de micro intégré et ses convertisseurs AD/DA de premier ordre garantissent une performance audio optimale. De plus, la Fireface UC est équipée d'une connectivité polyvalente, y compris des entrées/sorties analogiques et numériques.", rmeImage)}>RME Fireface UC</h3>
            <h3 className="clickable" onClick={() => openPopup('RME Octamic II', "Le RME Octamic II est un préamplificateur micro polyvalent qui offre une qualité audio exceptionnelle et une connectivité flexible pour les professionnels de l'audio. Doté de huit canaux de préamplification, il intègre des convertisseurs AD/DA de haute qualité, garantissant une conversion précise des signaux audio. Avec ses multiples options de connexion, y compris ADAT, AES/EBU et analogique, l'Octamic II s'intègre facilement dans divers systèmes d'enregistrement et de mixage.", octamicImage)}>RME Octamic II</h3>
          </div>
        </div>
      </div>

      <div className="scroll-section" id="experience">
        <h1>Expérience</h1>
        <div className="material-section">
          <div className="material-column">
            <h2>Studio</h2>
            <h3 className="clickable" onClick={() => openAudioPopup("Je n’ai pas peur du vent", './music/vent_poeme.mp3', "Enregistrement voix")}>
  Je n’ai pas peur du vent - Pierre Saunier
            </h3>
            <h3 className="clickable" onClick={() => openAudioPopup("Father & Son - Serge Vilamajo", './music/Father_.mp3', "Mastering")}>
              Father & Son - Serge Vilamajo
            </h3>
            <h3 className="clickable" onClick={() => openAudioPopup("Wish You Were Here (cover) - Serge Vilamajo", './music/Wish_.mp3', "Mastering")}>
            Wish You Were Here (cover) - Serge Vilamajo
            </h3>
            <h3 className="clickable" onClick={() => openAudioPopup("Put it There (cover) - Serge Vilamajo", './music/Put_.mp3', "Matsering")}>
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
            <h3 className="clickable" onClick={() => openVideoPopup("Capsule Sonore Teaser", "https://www.youtube.com/watch?v=gZNIQvd8lsM", "Composition Sonore des 9 épisodes")}>Capsule Sonore</h3>
            <h3 className="clickable" onClick={() => openVideoPopup("9-4", "https://www.youtube.com/watch?v=nlMcYo7ZPo0", "Enregistrement live multi-piste")}>9-4 - SIMON DENIZARTS</h3>
            <h3 className="clickable" onClick={() => openVideoPopup("American Boy", "https://www.youtube.com/watch?v=cKrbWY7-VMo", "Enregistrement studio clip")}>American Boy - Komodo Salé</h3>
            <h3 className="clickable" onClick={() => openVideoPopup("Teaser Komodo", "https://www.youtube.com/watch?v=KRzEAvfNIUY", "Enregistrement studio clip")}>Teaser - Komodo Salé</h3>
            <h3 className="clickable" onClick={() => openVideoPopup("My Lord Willoughby's Welcome Home", "https://www.youtube.com/watch?v=mbmWeG5VP04", "Enregistrement studio clip")}>"My Lord Willoughby's Welcome Home" de John Dowland - Clément Latour & Simon Waddell</h3>
            <h3 className="clickable" onClick={() => openVideoPopup("Canciones Populares", "https://www.youtube.com/watch?v=hoWQ3mQngPI", "Enregistrement studio live")}>Canciones Populares - Duo Gagey/Bleton</h3>
            <h3 className="clickable" onClick={() => openVideoPopup("Arvö Pärt, Für Alina & Fratres", "https://www.youtube.com/watch?v=duiRN06cBSY", "Enregistrement studio live")}>Arvö Pärt, Für Alina & Fratres - Thomas Csaba</h3>
            <h3 className="clickable" onClick={() => openVideoPopup("Kiua", "https://vimeo.com/517594841", "Composition et enregistrement studio clip")}>Kiua - Amasom</h3>
          </div>
        </div>
      </div>

      {popupContent && (
                <div className="popup">
                    <div className="popup-content">
                        {popupContent.type === 'audio' ? (
                            <>
                                <h2>{popupContent.title}</h2>
                                {popupContent.audioPath && (
                                    <audio ref={audioRef} controls autoPlay>
                                        <source src={popupContent.audioPath} type="audio/mpeg" />
                                        Votre navigateur ne prend pas en charge l'audio.
                                    </audio>
                                )}
                                {popupContent.text && <p>{popupContent.text}</p>}
                               </>
                             ) : popupContent.type === 'video' ? (
                               <>
                                <h2>{popupContent.title}</h2>
                                {popupContent.videoUrl && (
                                   <iframe
                                     className="video-frame"
                                     src={popupContent.videoUrl}
                                     title={popupContent.title}
                                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                     allowFullScreen
                                     width="100%" // Pour ajuster la taille
                                     height="400" // Ajustez la hauteur selon vos besoins
                                  ></iframe>
                                 )}
                              {popupContent.text && <p>{popupContent.text}</p>}
                            </>
                        ) : (
                            <>
                                <h2>{popupContent.title}</h2>
                                <img src={popupContent.image} alt={popupContent.title} />
                                <p>{popupContent.description}</p>
                            </>
                        )}
                        <button onClick={closePopup}>Fermer</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;