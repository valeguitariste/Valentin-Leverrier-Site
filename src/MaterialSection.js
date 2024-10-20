import React, { useState } from 'react';
import Popup from './Popup'; // Importez le composant Popup
import './css/typography.css'; // Importez le fichier CSS
import './css/material.css'; // Importez le fichier CSS

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

const MaterialSection = () => {
  const [selectedContent, setSelectedContent] = useState(null);

  const handleContentClick = (title, description, image) => {
    setSelectedContent({ title, description, image });
  };

  const closePopup = () => {
    setSelectedContent(null);
  };

  const microphones = [
    { title: 'Neumann RSM 191', description: "Le Neumann RSM 191 est un microphone à condensateur de haute qualité, idéal pour les enregistrements en stéréo. Sa conception le rend parfait pour capturer les détails subtils de la musique.", image: neumannImage },
    { title: 'Sennheiser 416', description: "Le Sennheiser 416 p48 est un microphone directionnel de renommée mondiale, réputé pour sa capacité à capturer des sons clairs dans des environnements bruyants.", image: sennheiserImage },
    { title: 'Beyerdynamic m160', description: "Le Beyerdynamic M160 est un microphone à double membrane, qui offre une réponse en fréquence étendue, parfait pour les enregistrements vocaux.", image: beyerdynamicImage },
    { title: 'DPA 6061', description: "Le DPA 6061 est un microphone de lavalier extrêmement petit et discret, offrant une qualité sonore exceptionnelle.", image: dpaImage },
    { title: 'Primo EM272Z1', description: "Le Primo EM272Z1 est un microphone à électret de haute qualité, utilisé dans les applications de tournage.", image: primoImage },
    { title: 'Schoeps CCM4', description: "Le Schoeps CCM4 est un microphone professionnel très apprécié pour sa qualité sonore et sa robustesse.", image: schoepsImage },
    { title: 'U87 Neumann', description: "Le U87 de Neumann est l'un des microphones les plus emblématiques, connu pour sa chaleur et sa clarté.", image: u87Image },
  ];

  const enregistreurs = [
    { title: 'Sound Devices MixPre 6', description: "Le MixPre 6 est un enregistreur audio portable de haute qualité, parfait pour les producteurs et les ingénieurs du son.", image: mixpreImage },
    { title: 'Tentacle Track E', description: "Le Tentacle Track E est un enregistreur compact et polyvalent, conçu pour capturer un son de haute qualité.", image: tentacleTrackImage },
    { title: 'Tentacle Sync', description: "Le Tentacle Sync est un outil essentiel pour la synchronisation de l'audio et de la vidéo.", image: tentacleSyncImage },
  ];

  const enceintes = [
    { title: 'Beyerdynamic dt770 pro', description: "Les Beyerdynamic DT 770 Pro sont des casques de studio fermés, offrant une reproduction sonore précise et une isolation acoustique exceptionnelle.", image: dtImage },
    { title: 'Genelec 8010', description: "Les Genelec 8010 sont des moniteurs compacts de studio, offrant une reproduction sonore précise.", image: genelecImage },
    { title: 'PMC Result 6', description: "Les PMC Result 6 sont des moniteurs de haute qualité qui offrent une reproduction sonore précise et détaillée, idéale pour le mixage et le mastering. Leur conception permet de capturer chaque nuance sonore, assurant une clarté exceptionnelle dans les productions audio. Robustes et performants, ces moniteurs sont indispensables pour les créateurs de son.", image: pmcImage },
  ];

  const autres = [
    { title: 'Ambient qp5100', description: "Les accessoires Ambient sont connus pour leur durabilité et leur performance.", image: ambientImage },
    { title: 'Manfrotto Micro Carbone', description: "Le Pied Micro Carbone est un choix léger et robuste pour les professionnels.", image: manfrottoImage },
    { title: 'Reaper', description: "Reaper est un logiciel de production audio numérique réputé pour sa flexibilité et sa puissance, ce qui en fait un outil de choix pour les musiciens, les ingénieurs du son et les producteurs. Grâce à son interface personnalisable, les utilisateurs peuvent créer un environnement de travail sur mesure qui correspond parfaitement à leur flux de travail, optimisant ainsi leur créativité. En intégrant une vaste bibliothèque d'effets et d'instruments virtuels, Reaper offre une multitude de possibilités sonores, permettant aux professionnels de l'édition et de la composition d'explorer de nouvelles dimensions musicales.", image: reaperImage },
    { title: 'Protools', description: "Pro Tools est un logiciel de production audio numérique reconnu dans l'industrie pour sa puissance et ses fonctionnalités avancées, ce qui en fait un standard de référence pour les ingénieurs du son et les producteurs. Avec une interface intuitive et des outils de montage précis, il permet un flux de travail efficace, adapté aux besoins des projets les plus complexes. Grâce à sa vaste gamme de plug-ins et d'instruments virtuels, Pro Tools offre une flexibilité exceptionnelle pour la création musicale et le mixage, permettant aux professionnels de tirer le meilleur parti de chaque enregistrement.", image: protoolsImage },
    { title: 'Ableton', description: "Ableton Live est un logiciel de production audio numérique particulièrement apprécié des musiciens et des DJs pour sa capacité à combiner création musicale et performance en direct. Son interface unique, qui permet une navigation fluide entre le mode Arrangement et le mode Session, facilite l'expérimentation et l'improvisation, rendant le processus créatif dynamique et interactif. Avec une vaste bibliothèque de sons, d'effets et d'instruments virtuels, Ableton Live offre des outils puissants pour la composition et le mixage, permettant aux professionnels de donner vie à leurs idées musicales de manière innovante.", image: abletonImage },
    { title: 'PCB Grinder MS76', description: "Le MS76 est un compresseur Mid/Side ou double mono de type 1176 fabriqué par Gustav de GroupDIY.", image: msImage },
    { title: 'PCB Grinder PQ2', description: "Version DIY de l'égaliseur légendaire Pultec par le maître danois Gustav de GOLY / PCB Grinder. Cette version a des plages de gain qui sont plus adaptées au mastering. ", image: pqImage },
    { title: 'RME Fireface UC', description: "Le RME Fireface UC est une interface audio USB professionnelle qui offre une qualité sonore exceptionnelle et des fonctionnalités avancées pour les musiciens et les ingénieurs du son. Avec sa capacité à gérer jusqu'à 36 canaux audio simultanés, elle permet un enregistrement et un mixage de haute fidélité. Son préamplificateur de micro intégré et ses convertisseurs AD/DA de premier ordre garantissent une performance audio optimale. De plus, la Fireface UC est équipée d'une connectivité polyvalente, y compris des entrées/sorties analogiques et numériques.", image: rmeImage },
    { title: 'RME Octamic II', description: "Le RME Octamic II est un préamplificateur micro polyvalent qui offre une qualité audio exceptionnelle et une connectivité flexible pour les professionnels de l'audio. Doté de huit canaux de préamplification, il intègre des convertisseurs AD/DA de haute qualité, garantissant une conversion précise des signaux audio. Avec ses multiples options de connexion, y compris ADAT, AES/EBU et analogique, l'Octamic II s'intègre facilement dans divers systèmes d'enregistrement et de mixage.", image: octamicImage },
  ];

  return (
    <div className="scroll-section" id="material">
      <h1 className="section-title">Matériel</h1>
      <div className="material-section">
        <div className="material-column">
          <h2>Microphones</h2>
          {microphones.map((item, index) => (
            <p key={index} className="clickable" onClick={() => handleContentClick(item.title, item.description, item.image)}>
              {item.title}
            </p>
          ))}
        </div>
        <div className="material-column enregistreur">
          <h2>Enregistreurs</h2>
          {enregistreurs.map((item, index) => (
            <p key={index} className="clickable" onClick={() => handleContentClick(item.title, item.description, item.image)}>
              {item.title}
            </p>
          ))}
        </div>
        <div className="material-column enceintes">
          <h2>Enceintes</h2>
          {enceintes.map((item, index) => (
            <p key={index} className="clickable" onClick={() => handleContentClick(item.title, item.description, item.image)}>
              {item.title}
            </p>
          ))}
        </div>
        <div className="material-column autres">
          <h2>Autres</h2>
          {autres.map((item, index) => (
            <p key={index} className="clickable" onClick={() => handleContentClick(item.title, item.description, item.image)}>
              {item.title}
            </p>
          ))}
        </div>
      </div>
      {selectedContent && (
        <Popup
          content={
            <>
              <h2>{selectedContent.title}</h2>
              <img src={selectedContent.image} alt={selectedContent.title} />
              <p>{selectedContent.description}</p>
            </>
          }
          closePopup={closePopup}
        />
      )}
    </div>
  );
};

export default MaterialSection;