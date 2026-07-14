import React from 'react';

function Header({ name, role, initials }) {
  return (
    <header className="header" id="home">
      <div>
        <span className="header__badge">
          <span className="header__badge-dot" />
          Open to opportunities
        </span>
        <h1 className="header__name">{name}</h1>
        <p className="header__role">
          <strong>{role}</strong> focused on building clean, functional
          interfaces with React.
        </p>
        <div className="header__actions">
          <a href="#skills" className="header__btn header__btn--primary">View my skills</a>
          <a href="#about" className="header__btn header__btn--ghost">About me</a>
        </div>
      </div>
      <div className="header__avatar-wrap">
        <div className="header__avatar">{initials}</div>
      </div>
    </header>
  );
}

export default Header;
