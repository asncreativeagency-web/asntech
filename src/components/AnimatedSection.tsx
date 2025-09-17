import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import '../styles/animations.css';

export interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fade-in' | 'fade-in-up' | 'slide-in-left' | 'slide-in-right' | 'scale-in';
  delay?: number;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fade-in-up',
  delay = 0,
  className = ''
}) => {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  const animationClass = `animate-${animation}`;
  const delayClass = delay > 0 ? `animate-delay-${delay}` : '';

  return (
    <div
      ref={targetRef}
      className={`
        ${isIntersecting ? animationClass : 'animate-on-scroll'}
        ${delayClass}
        ${className}
      `.trim()}
      style={{
        animationFillMode: 'both'
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;