import React from 'react';

const iconColors = {
  HTML: 'var(--pink)',
  CSS: 'var(--blue)',
  JavaScript: 'var(--gold)',
  React: 'var(--purple)',
  Vite: 'var(--green)',
  Git: 'var(--muted)',
};

function Skills({ skillList }) {
  return (
    <section id="skills" className="skills">
      <h2 className="skills__title">Skills</h2>

      <div className="skills__panel">
        <div className="skills__panel-head">Suggestions ({skillList.length})</div>
        <ul className="skills__list">
          {skillList.map((skill) => (
            <li key={skill} className="skills__item">
              <span
                className="skills__icon"
                style={{ background: iconColors[skill] || 'var(--muted)' }}
              />
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
