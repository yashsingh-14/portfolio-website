import { useRef, useState, useEffect } from 'react';

/**
 * Custom hook for lazy loading images with Intersection Observer
 * @param {string} src - Image source URL
 * @param {string} placeholder - Placeholder image URL
 * @param {object} options - Intersection Observer options
 * @returns {object} - Image loading state and ref
 */
export const useLazyImage = (src, placeholder = '', options = {}) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const imgRef = useRef();
  const observerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && src) {
        setImageSrc(src);
        observer.disconnect();
      }
    }, {
      rootMargin: '50px',
      threshold: 0.1,
      ...options
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
      observerRef.current = observer;
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [src, options]);

  const handleLoad = () => {
    setIsLoading(false);
    setError(null);
  };

  const handleError = () => {
    setIsLoading(false);
    setError('Failed to load image');
    setImageSrc(placeholder || '/images/placeholder.jpg');
  };

  return {
    ref: imgRef,
    src: imageSrc,
    isLoading,
    error,
    handleLoad,
    handleError
  };
};

/**
 * Higher Order Component for lazy loading components
 * @param {React.Component} Component - Component to lazy load
 * @param {React.Component} Fallback - Loading fallback component
 * @returns {React.Component} - Lazy loaded component
 */
export const withLazyLoad = (Component, Fallback = null) => {
  return function LazyLoadedComponent(props) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }, []);

    return (
      <div ref={ref}>
        {isVisible ? <Component {...props} /> : (Fallback || <div>Loading...</div>)}
      </div>
    );
  };
};

/**
 * Preload critical images
 * @param {string[]} imageUrls - Array of image URLs to preload
 */
export const preloadImages = (imageUrls) => {
  imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
};

/**
 * Lazy load background images
 * @param {string} imageUrl - Background image URL
 * @returns {object} - Background image style object
 */
export const useLazyBackground = (imageUrl) => {
  const [bgImage, setBgImage] = useState('');
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && imageUrl) {
        setBgImage(`url(${imageUrl})`);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [imageUrl]);

  return {
    ref,
    style: { backgroundImage: bgImage }
  };
};