import React from 'react';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <a href="#home" className="navbar__link">Home</a>
        <a href="#about" className="navbar__link">About</a>
        <a href="#skills" className="navbar__link">Skills</a>
      </div>
    </nav>
  );
}

export default NavBar;
