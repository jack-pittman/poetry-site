import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './menuButton.css'; // Make sure to import your CSS file
import '../siteHeader.css'; // Make sure to import your CSS file

function MenuButton() {
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
  };

  return (
    <div className="menu-container">
      <p id="menuIcon" onClick={toggleOverlay}>
        |||
      </p>

      {isOverlayVisible && (
        <div className="overlay" onClick={toggleOverlay}>
          <Link to="/about" onClick={toggleOverlay}>
            <p>ABOUT</p>
          </Link>
          <Link to="/publications" onClick={toggleOverlay}>
            <p>PUBLICATIONS</p>
          </Link>
          <Link to="/contact" onClick={toggleOverlay}>
            <p>CONTACT</p>
          </Link>
        </div>
      )}
    </div>
  );
}

export default MenuButton;
