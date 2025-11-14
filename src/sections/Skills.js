import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skills = {
    frontend: [
      { name: "HTML/CSS", level: 85 },
      { name: "JavaScript", level: 75 },
      { name: "React", level: 70 },
      { name: "Bootstrap/Tailwind", level: 70 }
    ],
    backend: [
      { name: "Node.js", level: 65 },
      { name: "Express", level: 60 },
      { name: "MongoDB", level: 60 },
      { name: "SQL (PostgreSQL/MySQL)", level: 60 },
      { name: "Java (Basics)", level: 55 }
    ],
    tools: [
      { name: "Git & GitHub", level: 80 },
      { name: "VS Code", level: 85 },
      { name: "Postman", level: 40 },
      { name: "Firebase", level: 35 },
      { name: "Netlify/Vercel", level: 40 }
    ]
  };

  const SkillBar = ({ name, level }) => (
    <div className="skill-item">
      <div className="skill-info">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            {skills.frontend.map(skill => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
          <div className="skill-category">
            <h3>Backend</h3>
            {skills.backend.map(skill => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
          <div className="skill-category">
            <h3>Tools</h3>
            {skills.tools.map(skill => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;