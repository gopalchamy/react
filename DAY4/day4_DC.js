import React, { useState } from 'react';


const NavBar1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776; {/* This is the menu icon (hamburger) */}
      </div>
      <div className="navbar-title">NavBar</div>
      <div className="login-button">Login</div>
      <div className={`dropdown-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li onClick={closeMenu}>Home</li>
          <li onClick={closeMenu}>About</li>
          <li onClick={closeMenu}>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar1;