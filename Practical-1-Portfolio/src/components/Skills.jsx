import React from 'react';

function Skills({ skillList }) {
  return (
    <section id="skills" className="skills">
      <h2 className="skills__title">Skills</h2>
      <ul className="skills__list">
        {skillList.map((skill) => (
          <li key={skill} className="skills__item">{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
