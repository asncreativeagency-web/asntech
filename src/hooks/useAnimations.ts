import { useEffect, useRef, useState } from 'react';
import { 
  fadeIn, 
  fadeInLeft, 
  fadeInRight, 
  scaleIn, 
  createScrollAnimationObserver,
  animateCountUp
} from '../utils/animations';
import type { AnimationConfig } from '../utils/animations';

// Hook for scroll-triggered animations
export const useScrollAnimation = (
  animationType: 'fadeIn' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' = 'fadeIn',
  options: AnimationConfig = {},
  threshold: number = 0.1
) => {
  const elementRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasAnimated) return;

    const animationMap = {
      fadeIn,
      fadeInLeft,
      fadeInRight,
      scaleIn
    };

    const observer = createScrollAnimationObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animationMap[animationType](element, options);
            setHasAnimated(true);
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [animationType, options, threshold, hasAnimated]);

  return elementRef;
};

// Hook for count-up animation
export const useCountUpAnimation = (
  targetNumber: number,
  duration: number = 2000,
  prefix: string = '',
  suffix: string = '',
  threshold: number = 0.5
) => {
  const elementRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasAnimated) return;

    const observer = createScrollAnimationObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateCountUp(element, targetNumber, duration, prefix, suffix);
            setHasAnimated(true);
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [targetNumber, duration, prefix, suffix, threshold, hasAnimated]);

  return elementRef;
};

// Hook for parallax effects
export const useParallax = (speed: number = 0.5) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + scrolled;
      const windowHeight = window.innerHeight;
      
      if (scrolled + windowHeight > elementTop && rect.bottom > 0) {
        const yPos = -(scrolled - elementTop) * speed;
        element.style.transform = `translateY(${yPos}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return elementRef;
};

// Hook for stagger animations
export const useStaggerAnimation = (
  animationType: 'fadeIn' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' = 'fadeIn',
  staggerDelay: number = 100,
  threshold: number = 0.1
) => {
  const containerRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || hasAnimated) return;

    const animationMap = {
      fadeIn,
      fadeInLeft,
      fadeInRight,
      scaleIn
    };

    const observer = createScrollAnimationObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            const children = container.children;
            Array.from(children).forEach((child, index) => {
              animationMap[animationType](child, { delay: index * staggerDelay });
            });
            setHasAnimated(true);
          }
        });
      },
      { threshold }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [animationType, staggerDelay, threshold, hasAnimated]);

  return containerRef;
};

// Hook for intersection observer
export const useIntersectionObserver = (
  callback: (isIntersecting: boolean) => void,
  threshold: number = 0.1,
  rootMargin: string = '0px'
) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          callback(entry.isIntersecting);
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [callback, threshold, rootMargin]);

  return elementRef;
};