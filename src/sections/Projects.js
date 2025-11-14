import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "../styles/Projects.css";

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: "Doxine - E-commerce Website",
      description:
        "A full-featured e-commerce platform built with modern web technologies. Features include product catalog, shopping cart, user authentication, payment integration, and order management. Provides a seamless shopping experience with responsive design and intuitive user interface.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/images/project1.jpg",
      github: "https://github.com/username/doxine",
      live: "https://doxine-demo.netlify.app",
      featured: true,
      category: "Frontend",
    },
    {
      id: 2,
      title: "Digital Watch Web Application",
      description:
        "An interactive digital watch web application with real-time clock display, multiple timezone support, and customizable themes. Features include alarm functionality, stopwatch, and timer. Built with modern JavaScript and responsive design for optimal user experience across all devices.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      image: "/images/project2.jpg",
      github: "https://github.com/username/digital-watch",
      live: "https://digital-watch-demo.netlify.app",
      featured: true,
      category: "Frontend",
    },
    {
      id: 3,
      title: "Tic Tac Toe Game",
      description:
        "A classic Tic Tac Toe game built with interactive UI and game logic. Features include player vs player mode, game state management, win detection, and score tracking. Clean and intuitive interface with smooth animations for an engaging gaming experience.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      image: "/images/project3.jpg",
      github: "https://github.com/username/tic-tac-toe",
      live: "https://tic-tac-toe-demo.netlify.app",
      featured: false,
      category: "Frontend",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div
          ref={ref}
          className={`projects-grid ${inView ? "fade-in" : ""}`}
        >
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="image-placeholder">{project.title}</div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
