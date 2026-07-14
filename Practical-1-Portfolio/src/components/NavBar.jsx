import React from 'react';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <a href="#home" className="navbar__brand">Rudra<span>.</span></a>
        <ul className="navbar__links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
