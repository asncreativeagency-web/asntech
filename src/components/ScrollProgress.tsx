import { useEffect, useState } from 'react';
import animationStyles from '../styles/animations.module.css';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={animationStyles.scrollProgress}
      style={{ transform: `scaleX(${scrollProgress / 100})` }}
    />
  );
};

export default ScrollProgress;