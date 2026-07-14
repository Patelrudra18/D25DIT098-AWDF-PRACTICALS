import React from 'react';

const levels = {
  HTML: 90,
  CSS: 85,
  JavaScript: 75,

};

function Skills({ skillList }) {
  return (
    <section id="skills" className="section">
      <p className="section__eyebrow">Skills</p>
      <h2 className="section__title">What I work with</h2>

      <div className="skills__grid">
        {skillList.map((skill) => (
          <div key={skill} className="skills__card">
            <div className="skills__name">{skill}</div>
            <div className="skills__bar-track">
              <div
                className="skills__bar-fill"
                style={{ width: `${levels[skill] || 60}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
