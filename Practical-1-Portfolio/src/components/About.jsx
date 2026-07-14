import React from 'react';

function About() {
  return (
    <section id="about" className="section">
      <p className="section__eyebrow">About</p>
      <h2 className="section__title">A bit about me</h2>

      <div className="about__grid">
        <div className="about__card">
          <div className="about__fact">
            <span className="about__fact-label">Based in</span>
            <span className="about__fact-value">Changa, Gujarat</span>
          </div>
          <div className="about__fact">
            <span className="about__fact-label">Focus</span>
            <span className="about__fact-value">Frontend Development</span>
          </div>
          <div className="about__fact">
            <span className="about__fact-label">Stack</span>
            <span className="about__fact-value">React &amp; Vite</span>
          </div>
          <div className="about__fact">
            <span className="about__fact-label">Currently</span>
            <span className="about__fact-value">IT student</span>
          </div>
        </div>

        <div className="about__body">
          <p>
            I'm Rudra, an IT student who enjoys turning ideas into working
            interfaces. I started with HTML and CSS, and these days I mostly
            build with React, breaking pages down into small, reusable
            components — the same approach this portfolio is built with.
          </p>
         
        </div>
      </div>
    </section>
  );
}

export default About;
