import { useParallax } from '../hooks/useAnimations';
import styles from '../styles/parallax.module.css';
import React from 'react';

interface ParallaxBackgroundProps {
  speed?: number;
  children?: React.ReactNode;
  className?: string;
  overlay?: boolean;
}

const ParallaxBackground = ({ 
  speed = 0.5, 
  children, 
  className = '',
  overlay = false 
}: ParallaxBackgroundProps) => {
  const parallaxRef = useParallax(speed);

  return (
    <div className={`${styles.parallaxContainer} ${className}`}>
      <div 
        ref={parallaxRef as React.RefObject<HTMLDivElement>} 
        className={styles.parallaxElement}
      >
        {overlay && <div className={styles.parallaxOverlay} />}
        {children}
      </div>
    </div>
  );
};

export default ParallaxBackground;