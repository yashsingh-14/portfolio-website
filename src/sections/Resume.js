import React from 'react';
import '../styles/Resume.css';

const Resume = () => {
  const experience = [
    {
      id: 1,
      position: "Fresher",
      company: "Full‑Stack Web Developer (Seeking Opportunities)",
      period: "2025 - Present",
      description: "Entry‑level developer with academic experience in full‑stack projects and a focus on building clean, responsive web applications.",
      achievements: [
        "Built projects: Doxine E-commerce Website, Digital Watch Web Application, Tic Tac Toe Game",
        "Strengthening core skills in React, Node.js, and Java"
      ]
    }
  ];

  const education = [
    {
      id: 1,
      degree: "B.Sc. Information Technology",
      institution: "University of Technology",
      period: "2022 - 2025",
      description: "Coursework focused on web development, data structures, and software engineering fundamentals."
    }
  ];

  return (
    <section id="resume" className="resume">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        
        <div className="resume-content">
          <div className="experience-section">
            <h3>Experience</h3>
            {experience.map(exp => (
              <div key={exp.id} className="resume-item">
                <h4>{exp.position}</h4>
                <div className="company-period">
                  <span className="company">{exp.company}</span>
                  <span className="period">{exp.period}</span>
                </div>
                <p>{exp.description}</p>
                <ul className="achievements">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="education-section">
            <h3>Education</h3>
            {education.map(edu => (
              <div key={edu.id} className="resume-item">
                <h4>{edu.degree}</h4>
                <div className="company-period">
                  <span className="company">{edu.institution}</span>
                  <span className="period">{edu.period}</span>
                </div>
                <p>{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="resume-download">
          <a href="/resume.pdf" download className="btn-primary">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;