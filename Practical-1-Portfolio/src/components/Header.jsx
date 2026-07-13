import React from 'react';

function Header({ name, role }) {
  return (
    <header className="header" id="home">
      <div className="editor-pane">
        <div className="editor-pane__titlebar">
          <div className="editor-pane__controls">
            <span style={{ background: '#f26d6d' }} />
            <span style={{ background: '#f5c86e' }} />
            <span style={{ background: '#7fdba4' }} />
          </div>
          <span className="editor-pane__filename">Header.jsx</span>
        </div>

        <div className="editor-pane__body">
          <div className="editor-pane__gutter">
            {[1, 2, 3, 4, 5].map((n) => (
              <span key={n}>{n}</span>
            ))}
          </div>
          <div className="editor-pane__code">
            <div><span className="token-keyword">const</span> <span className="token-key">developer</span> <span className="token-punct">= &#123;</span></div>
            <div>&nbsp;&nbsp;<span className="token-key">name</span><span className="token-punct">:</span> <span className="token-string">"{name}"</span><span className="token-punct">,</span></div>
            <div>&nbsp;&nbsp;<span className="token-key">role</span><span className="token-punct">:</span> <span className="token-string">"{role}"</span><span className="token-punct">,</span></div>
            <div>&nbsp;&nbsp;<span className="token-comment">// still learning, always building</span></div>
            <div><span className="token-punct">&#125;;</span></div>
          </div>
        </div>

        <div className="editor-pane__output">
          &gt; Hello, I&apos;m {name}.<span className="cursor" />
        </div>
      </div>

      <h1 className="header__role">
        I build things for the <span>web</span>.
      </h1>
    </header>
  );
}

export default Header;
