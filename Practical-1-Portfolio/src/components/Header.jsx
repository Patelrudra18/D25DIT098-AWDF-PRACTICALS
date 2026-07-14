import React from 'react';

function Header({ name, role }) {
  return (
    <header className="header" id="home">
      <p className="header__eyebrow">Hi, I'm</p>
      <h1 className="header__name">{name}</h1>
      <p className="header__role">{role}</p>
    </header>
  );
}

export default Header;
