// Animation utility functions for enhanced interactions

export interface AnimationConfig {
  duration?: number;
  delay?: number;
  easing?: string;
  fillMode?: FillMode;
}

export const defaultAnimationConfig: AnimationConfig = {
  duration: 600,
  delay: 0,
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  fillMode: 'both' as FillMode
};

// Fade animations
export const fadeIn = (element: Element, config: AnimationConfig = {}) => {
  const { duration, delay, easing, fillMode } = { ...defaultAnimationConfig, ...config };
  
  return element.animate([
    { opacity: 0, transform: 'translateY(20px)' },
    { opacity: 1, transform: 'translateY(0)' }
  ], {
    duration,
    delay,
    easing,
    fill: fillMode
  });
};

export const fadeInLeft = (element: Element, config: AnimationConfig = {}) => {
  const { duration, delay, easing, fillMode } = { ...defaultAnimationConfig, ...config };
  
  return element.animate([
    { opacity: 0, transform: 'translateX(-30px)' },
    { opacity: 1, transform: 'translateX(0)' }
  ], {
    duration,
    delay,
    easing,
    fill: fillMode
  });
};

export const fadeInRight = (element: Element, config: AnimationConfig = {}) => {
  const { duration, delay, easing, fillMode } = { ...defaultAnimationConfig, ...config };
  
  return element.animate([
    { opacity: 0, transform: 'translateX(30px)' },
    { opacity: 1, transform: 'translateX(0)' }
  ], {
    duration,
    delay,
    easing,
    fill: fillMode
  });
};

// Scale animations
export const scaleIn = (element: Element, config: AnimationConfig = {}) => {
  const { duration, delay, easing, fillMode } = { ...defaultAnimationConfig, ...config };
  
  return element.animate([
    { opacity: 0, transform: 'scale(0.9)' },
    { opacity: 1, transform: 'scale(1)' }
  ], {
    duration,
    delay,
    easing,
    fill: fillMode
  });
};

// Intersection Observer for scroll animations
export const createScrollAnimationObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
) => {
  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    ...options
  };

  return new IntersectionObserver(callback, defaultOptions);
};

// Stagger animation utility
export const staggerAnimation = (
  elements: NodeListOf<Element> | Element[],
  animationFn: (element: Element, config: AnimationConfig) => Animation,
  staggerDelay: number = 100
) => {
  const animations: Animation[] = [];
  
  elements.forEach((element, index) => {
    const animation = animationFn(element, { delay: index * staggerDelay });
    animations.push(animation);
  });
  
  return animations;
};

// Count up animation for numbers
export const animateCountUp = (
  element: Element,
  targetNumber: number,
  duration: number = 2000,
  prefix: string = '',
  suffix: string = ''
) => {
  const startNumber = 0;
  const increment = targetNumber / (duration / 16);
  let currentNumber = startNumber;
  
  const updateNumber = () => {
    currentNumber += increment;
    
    if (currentNumber >= targetNumber) {
      currentNumber = targetNumber;
      element.textContent = `${prefix}${Math.floor(currentNumber)}${suffix}`;
      return;
    }
    
    element.textContent = `${prefix}${Math.floor(currentNumber)}${suffix}`;
    requestAnimationFrame(updateNumber);
  };
  
  requestAnimationFrame(updateNumber);
};

// Smooth reveal animation for text
export const revealText = (element: Element, config: AnimationConfig = {}) => {
  const { duration, delay, easing } = { ...defaultAnimationConfig, ...config };
  
  return element.animate([
    { 
      opacity: 0, 
      transform: 'translateY(30px)',
      clipPath: 'inset(100% 0 0 0)'
    },
    { 
      opacity: 1, 
      transform: 'translateY(0)',
      clipPath: 'inset(0% 0 0 0)'
    }
  ], {
    duration,
    delay,
    easing,
    fill: 'both'
  });
};

// Parallax effect utility
export const createParallaxEffect = (element: Element, speed: number = 0.5) => {
  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    const elementTop = element.getBoundingClientRect().top + scrolled;
    const windowHeight = window.innerHeight;
    
    if (scrolled + windowHeight > elementTop) {
      const yPos = -(scrolled - elementTop) * speed;
      (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
    }
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  return () => window.removeEventListener('scroll', handleScroll);
};