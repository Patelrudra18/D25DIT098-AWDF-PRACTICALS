import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <p className="about__label">About Me</p>
      <h2 className="about__title">A bit about who's writing this code</h2>

      <div className="about__grid">
        <div className="about__meta">
          <span><strong>Based in</strong> Ahmedabad, Gujarat</span>
          <span><strong>Focus</strong> Frontend Development</span>
          <span><strong>Stack</strong> React &amp; Vite</span>
          <span><strong>Currently</strong> Diploma in IT student</span>
        </div>

        <div className="about__body">
          <p>
            I'm Rudra, an IT student who likes turning ideas into interfaces.
            I started out tinkering with HTML and CSS, and these days I mostly
            work in React — breaking pages down into small, reusable components
            the way this portfolio itself is built.
          </p>
          <p>
            This site began as a practical assignment on component architecture
            and props, and I kept iterating on it because I enjoy the process
            of refining layout, styling, and interaction as much as writing
            the logic underneath.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
