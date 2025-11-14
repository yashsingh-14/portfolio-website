import React, { Suspense, lazy } from 'react';
import './styles/App.css';

// Lazy loading components
const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./sections/Hero'));
const About = lazy(() => import('./sections/About'));
const Projects = lazy(() => import('./sections/Projects'));
const Skills = lazy(() => import('./sections/Skills'));
const Resume = lazy(() => import('./sections/Resume'));
const Contact = lazy(() => import('./sections/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const LoadingFallback = () => (
  <div className="loading">
    <div className="spinner"></div>
  </div>
);

function App() {
  return (
    <div className="App">
      <Suspense fallback={<LoadingFallback />}>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;