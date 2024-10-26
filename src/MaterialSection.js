import React, { useState } from 'react';
import Popup from './Popup'; // Importez le composant Popup
import './css/typography.css'; // Importez le fichier CSS
import './css/material.css'; // Importez le fichier CSS

import neumannImage from './image/Neumann_RSM_191.webp';
import sennheiserImage from './image/Sennheiser_416.webp';
import beyerdynamicImage from './image/Beyerdynamic_m160.webp';
import dpaImage from './image/DPA_6061.webp';
import primoImage from './image/Primo_EM272Z1.webp';
import schoepsImage from './image/Schoeps_CCM4.webp';
import u87Image from './image/U87_Neumann.webp';
import mixpreImage from './image/Sound_Devices_mixpre_6.webp';
import tentacleTrackImage from './image/Tentacle_Track_E.webp';
import tentacleSyncImage from './image/Tentacle_Sync.webp';
import genelecImage from './image/Genelec_8010.webp';
import pmcImage from './image/PMC.webp';
import ambientImage from './image/Ambient.webp';
import manfrottoImage from './image/manfrotto.webp';
import reaperImage from './image/reaper.webp';
import protoolsImage from './image/protools.webp';
import abletonImage from './image/ableton.webp';
import msImage from './image/ms.webp';
import pqImage from './image/pq.webp';
import rmeImage from './image/rme.webp';
import octamicImage from './image/octamic.webp';
import dtImage from './image/dt.webp';

const MaterialSection = () => {
  const [selectedContent, setSelectedContent] = useState(null);

  const handleContentClick = (title, description, image) => {
    setSelectedContent({ title, description, image });
  };

  const closePopup = () => {
    setSelectedContent(null);
  };

  const microphones = [
    { title: 'Neumann RSM 191', description: "Le Neumann RSM 191, avec ses deux capsules hyper-cardioïde et figure en 8 crée une image stéréophonique unique et magnifique. Il me suit dans mes voyages, capturant chaque ambiance. Pratique pour l’audiovisuel, il permet d’ajuster l’ouverture panoramique, que ce soit à l’enregistrement ou en post-production.", image: neumannImage },
    { title: 'Sennheiser 416', description: "Le Sennheiser 416 p48 est un microphone directionnel de renommée mondiale, réputé pour sa capacité à capturer des sons clairs dans des environnements bruyants.", image: sennheiserImage },
    { title: 'Beyerdynamic m160', description: "Le Beyerdynamic M160, avec sa directivité hypercardioïde, est un microphone à ruban idéal pour les enregistrements vocaux en intérieur. Son ruban confère à la voix une chaleur et une tonalité naturelle.", image: beyerdynamicImage },
    { title: 'DPA 6061', description: "Le DPA 6061 est un microphone de lavalier extrêmement petit et discret, offrant une qualité sonore exceptionnelle.", image: dpaImage },
    { title: 'Primo EM272Z1', description: "Les Primo EM272Z1, en configuration stéréo, sont de petits microphones à électrets que je laisse toujours branché à mon enregistreur lors de mes voyages. Ils me permettent de capter rapidement une belle stéréo quand j'en ai besoin. Grâce à leurs longs câbles, je peux aussi les placer près des objets sonores pour en saisir les détails.", image: primoImage },
    { title: 'Schoeps CCM4 DIY', description: "Les Schoeps CCM4, répliques élaborées par Microphone Part et montés par mes soins, offrent une grande polyvalence, notamment en configuration ORTF pour la stéréophonie (orchestre, batterie, ambiance) ou pour des instruments solistes. Pratiques, robustes et légers, ils sont mes micros favoris lors de mes ateliers de création sonore.", image: schoepsImage },
    { title: 'U87 Neumann DIY', description: "Les U87 de Neumann, répliques élaborées par Microphone Part et montés par mes soins, sont des microphones emblématiques, réputés pour leur chaleur et leur clarté. Véritables couteaux suisses, je les utilise pour les voix, les instruments et les bruitages, principalement en studio, mais aussi en extérieur pour les prises lives.", image: u87Image },
  ];

  const enregistreurs = [
    { title: 'Sound Devices MixPre 6', description: "Le MixPre 6 est mon enregistreur de terrain, idéal pour les tournages et comme carte son lors de mes voyages. Léger et très versatile, il sublime mes microphones et avec sa batteoffre un son magnifique. Contrôlable via Bluetooth avec un smartphone ou une tablette, il permet des prises rapides et de haute qualité. Avec une batterie externe, il peut faire fonctionner une grande configuration de 8 micros pendant des heures.", image: mixpreImage },
    { title: 'Tentacle Track E', description: "Le Tentacle Track E est un enregistreur mignature qui se cache très bien dans les vêtements d'un comédien. Controlable à distance, il est très pratique pour les interviews.", image: tentacleTrackImage },
    { title: 'Tentacle Sync', description: "Le Tentacle Sync est un outil essentiel pour la synchronisation de l'audio et de la vidéo. Il me permet de me synchroniser à une caméra ou à mon enregistreur pour les prises de sons à plusieurs microphones. ", image: tentacleSyncImage },
  ];

  const enceintes = [
    { title: 'Beyerdynamic dt770 pro', description: "Les Beyerdynamic DT 770 Pro est mon casque à tout faire. Il me suit partout dans mes enregistrements, dans l'écoute de mes mixages, de la musique. J'adore sa réponse en fréquence et sa capacité à retransmettre les espaces acoustiques.", image: dtImage },
    { title: 'Genelec 8010', description: "Les Genelec 8010 sont des moniteurs compacts de studio. Avec la petite sacoche, ils sont très pratiques pour les déplacements, les écoutes à l'extérieur du studio. ", image: genelecImage },
    { title: 'PMC Result 6', description: "Les PMC Result 6 sont mes enceintes de monitoring idéales pour composer, mixer et masteriser. Après avoir testé plusieurs modèles, elles restent mes préférées. Leur précision et leur confort d’écoute en font des alliées indispensables dans tous mes projets sonores.", image: pmcImage },
  ];

  const autres = [
    { title: 'Ambient qp5100', description: "Cette perche de 4m me sert pour tous mes tournages audiovisuels. Légère, robuste, se déploie et se cable rapidement, elle est parfaite pour moi.", image: ambientImage },
    { title: 'Manfrotto Micro Carbone', description: "Le pied Manfrotto Micro Carbone est extrêmement léger et pratique. Je l’utilise lors de mes voyages pour capter des prises stéréo, ainsi que dans mes ateliers de création sonore pour positionner le couple de Schoeps.", image: manfrottoImage },
    { title: 'Reaper', description: "Reaper est mon logiciel de coeur et le nerf de mon studio à Paris. J’y fais tout : édition, enregistrement, mixage et mastering. C’est ma toile blanche, où clavier et souris sont mes pinceaux, et le microphone, ma palette de couleurs. Avec une bonne prise en main, tout se met en forme rapidement. J’apprécie aussi particulièrement son histoire liée à l’open source.", image: reaperImage },
    { title: 'Protools', description: "Pro Tools est un logiciel de production audio numérique puissant, faisant de lui le standard incontournable. C'est l'outil privilégié dans les studios du monde entier, et sa maîtrise est essentielle pour communiquer efficacement avec les professionnels du secteur.", image: protoolsImage },
    { title: 'Ableton', description: "Ableton Live est un logiciel de production audio numérique particulièrement apprécié des musiciens pour sa capacité à combiner création musicale et performance en direct. Son interface facilite l'expérimentation et l'improvisation, rendant le processus créatif dynamique et interactif.", image: abletonImage },
    { title: 'PCB Grinder MS76', description: "Le MS76 est un compresseur Mid/Side ou double mono de type 1176 fabriqué par Gustav de GroupDIY et monté par mes soins. J'adore comment tout se 'glue' à travers cette machine. Tu peux controler l'ouverture panoramique, ajuster le niveau de Mid ou de Side, et de les compresser séparément. Superbe outil de mastering.", image: msImage },
    { title: 'PCB Grinder PQ2', description: "Version DIY de l'égaliseur légendaire Pultec, conçu par le maître danois Gustav de GOLY / PCB Grinder, cette version est spécialement adaptée au mastering.Tout sort beau de cet égaliseur : les aigus sont cristallins sans être agressifs, et les basses, amples et profondes.  J'ai eu le plaisir de l'assembler moi-même.", image: pqImage },
    { title: 'RME Fireface UC', description: "Le RME Fireface UC est ma carte son, que j'utilise principalement avec son compagnon, l'Octamic, pour des prises de son en extérieur, pouvant accueillir jusqu'à 10 microphones. C'est incroyable de voir tout ce qu'ils ont réussi à intégrer dans une si petite machine !", image: rmeImage },
    { title: 'RME Octamic II', description: "Le RME Octamic II est un préamplificateur micro polyvalent que j'utilise pour les prises de son en extérieur. Avec la Rme Fireface couplé en adat, je peux enregistrer jusqu'à 10 microphones et 8 jacks symétriques sans compter toutes les sorties indépendantes pour les casques. Un duo de choc !!", image: octamicImage },
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
            <img src={selectedContent.image} alt={selectedContent.title} />
            <small-text>{selectedContent.description}</small-text>
          </>
          }
          closePopup={closePopup}
        />
      )}
    </div>
  );
};

export default MaterialSection;