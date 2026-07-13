import React, { useState } from 'react';

const tabs = [
  { id: 'home', label: 'home.jsx', color: 'var(--purple)' },
  { id: 'about', label: 'about.jsx', color: 'var(--green)' },
  { id: 'skills', label: 'skills.jsx', color: 'var(--gold)' },
];

function NavBar() {
  const [active, setActive] = useState('home');

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        {tabs.map((tab) => (
          <a
            key={tab.id}
            href={`#${tab.id}`}
            className={`navbar__tab${active === tab.id ? ' is-active' : ''}`}
            onClick={() => setActive(tab.id)}
          >
            <span className="navbar__dot" style={{ background: tab.color }} />
            {tab.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
