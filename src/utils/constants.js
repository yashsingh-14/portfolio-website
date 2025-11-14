// Projects data
export const PROJECTS = [
  {
    id: 1,
    title: "Doxine - E-commerce Website",
    description: "A full-featured e-commerce platform built with modern web technologies. Features include product catalog, shopping cart, user authentication, payment integration, and order management. Provides a seamless shopping experience with responsive design and intuitive user interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/images/project1.jpg",
    github: "https://github.com/username/doxine",
    live: "https://doxine-demo.netlify.app",
    featured: true,
    category: "Frontend"
  },
  {
    id: 2,
    title: "Digital Watch Web Application",
    description: "An interactive digital watch web application with real-time clock display, multiple timezone support, and customizable themes. Features include alarm functionality, stopwatch, and timer. Built with modern JavaScript and responsive design for optimal user experience across all devices.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    image: "/images/project2.jpg",
    github: "https://github.com/username/digital-watch",
    live: "https://digital-watch-demo.netlify.app",
    featured: true,
    category: "Frontend"
  },
  {
    id: 3,
    title: "Tic Tac Toe Game",
    description: "A classic Tic Tac Toe game built with interactive UI and game logic. Features include player vs player mode, game state management, win detection, and score tracking. Clean and intuitive interface with smooth animations for an engaging gaming experience.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    image: "/images/project3.jpg",
    github: "https://github.com/username/tic-tac-toe",
    live: "https://tic-tac-toe-demo.netlify.app",
    featured: false,
    category: "Frontend"
  }
];

// Skills data
export const SKILLS = {
  frontend: [
    { name: "HTML/CSS", level: 85, category: "Frontend" },
    { name: "JavaScript", level: 75, category: "Frontend" },
    { name: "React", level: 70, category: "Frontend" },
    { name: "Bootstrap/Tailwind", level: 70, category: "Frontend" }
  ],
  backend: [
    { name: "Node.js", level: 65, category: "Backend" },
    { name: "Express", level: 60, category: "Backend" },
    { name: "MongoDB", level: 60, category: "Backend" },
    { name: "SQL (PostgreSQL/MySQL)", level: 60, category: "Backend" },
    { name: "Java (Basics)", level: 55, category: "Backend" }
  ],
  tools: [
    { name: "Git & GitHub", level: 80, category: "Tools" },
    { name: "VS Code", level: 85, category: "Tools" },
    { name: "Postman", level: 40, category: "Tools" },
    { name: "Firebase", level: 35, category: "Tools" },
    { name: "Netlify/Vercel", level: 40, category: "Tools" }
  ]
};

// Social links and contact information
export const SOCIAL_LINKS = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  email: "ys181544@gmail.com",
  phone: "7021168196"
};

// Navigation items
export const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" }
];

// Resume data
export const RESUME_DATA = {
  experience: [
    {
      id: 1,
      position: "Fresher",
      company: "Full‑Stack Web Developer (Seeking Opportunities)",
      period: "2025 - Present",
      description: "Entry‑level developer with academic experience in full‑stack projects and a focus on clean, responsive web apps.",
      achievements: [
        "Built projects: Doxine E-commerce Website, Digital Watch Web Application, Tic Tac Toe Game",
        "Strengthening skills in React, Node.js, and Java"
      ]
    }
  ],
  education: [
    {
      id: 1,
      degree: "B.Sc. Information Technology",
      institution: "University of Technology",
      period: "2022 - 2025",
      description: "Coursework focused on web development, data structures, and software engineering fundamentals."
    }
  ]
};

// Animation delays
export const ANIMATION_DELAYS = {
  short: 100,
  medium: 300,
  long: 500,
  veryLong: 800
};

// Breakpoints for responsive design
export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1200
};