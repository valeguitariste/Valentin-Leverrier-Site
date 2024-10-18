import React from 'react';
import './Popup.css';

const Popup = ({ content, closePopup }) => {
  const handleClickOutside = (e) => {
    if (e.target.className === 'popup' || e.target.className === 'popup-content') {
      closePopup();
    }
  };

  return (
    <div className="popup" onClick={handleClickOutside}>
      <div className="popup-content">
        {content}
      </div>
    </div>
  );
};

export default Popup;