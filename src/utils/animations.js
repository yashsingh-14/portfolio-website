import { useRef, useEffect } from 'react';

/**
 * Hook for fade-in animation when element enters viewport
 * @param {object} options - Intersection Observer options
 * @returns {object} - Ref and animation state
 */
export const useFadeIn = (options = {}) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return {
    ref,
    isVisible,
    className: isVisible ? 'fade-in-visible' : 'fade-in-hidden'
  };
};

/**
 * Stagger animation for child elements
 * @param {number} delay - Delay between each child animation
 * @returns {object} - Animation configuration
 */
export const staggerChildren = (delay = 0.1) => {
  return {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: delay
      }
    }
  };
};

/**
 * Slide up animation
 * @param {number} duration - Animation duration
 * @returns {object} - Animation variants
 */
export const slideUp = (duration = 0.5) => {
  return {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: -50,
      transition: { duration: 0.3 }
    }
  };
};

/**
 * Scale animation for hover effects
 * @param {number} scale - Scale factor
 * @returns {object} - Hover animation
 */
export const scaleOnHover = (scale = 1.05) => {
  return {
    whileHover: { 
      scale,
      transition: { duration: 0.2 }
    },
    whileTap: { scale: 0.95 }
  };
};

/**
 * Typewriter effect utility
 * @param {string} text - Text to animate
 * @param {number} speed - Typing speed in ms
 * @returns {object} - Typing state and controls
 */
export const useTypewriter = (text, speed = 50) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed]);

  const reset = () => {
    setDisplayText('');
    setCurrentIndex(0);
    setIsComplete(false);
  };

  return { displayText, isComplete, reset };
};