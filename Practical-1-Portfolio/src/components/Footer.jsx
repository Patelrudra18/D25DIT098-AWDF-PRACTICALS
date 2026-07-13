import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__status">
          <span><span className="footer__dot" /> main</span>
          <span>build passing</span>
          <span>&copy; 2026 Rudra Patel</span>
        </div>
        <div className="footer__links">
          <a href="https://github.com/Patelrudra18" target="_blank" rel="noreferrer">GitHub</a>
          <a href="#home">Back to top</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
