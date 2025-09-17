import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

export interface AnimatedTextProps {
  text: string;
  animationType?: 'fadeIn' | 'slideIn' | 'typewriter' | 'bounce' | 'custom';
  animationData?: Record<string, unknown>; // For custom Lottie JSON
  duration?: number;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  onAnimationComplete?: () => void;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  animationType = 'fadeIn',
  animationData,
  duration = 1000,
  delay = 0,
  className,
  style,
  onAnimationComplete
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState('');

  const typewriterEffect = React.useCallback(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
        onAnimationComplete?.();
      }
    }, duration / text.length);
  }, [text, duration, onAnimationComplete]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      
      if (animationType === 'typewriter') {
        typewriterEffect();
      } else {
        setDisplayText(text);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay, animationType, typewriterEffect]);

  const getAnimationStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      transition: `all ${duration}ms ease-in-out`,
      ...style
    };

    if (!isVisible) {
      switch (animationType) {
        case 'fadeIn':
          return { ...baseStyle, opacity: 0, transform: 'translateY(20px)' };
        case 'slideIn':
          return { ...baseStyle, opacity: 0, transform: 'translateX(-50px)' };
        case 'bounce':
          return { ...baseStyle, opacity: 0, transform: 'scale(0.5)' };
        default:
          return { ...baseStyle, opacity: 0 };
      }
    }

    switch (animationType) {
      case 'fadeIn':
        return { ...baseStyle, opacity: 1, transform: 'translateY(0)' };
      case 'slideIn':
        return { ...baseStyle, opacity: 1, transform: 'translateX(0)' };
      case 'bounce':
        return { 
          ...baseStyle, 
          opacity: 1, 
          transform: 'scale(1)',
          animation: `bounce ${duration}ms ease-in-out`
        };
      default:
        return { ...baseStyle, opacity: 1 };
    }
  };

  // If custom Lottie animation is provided
  if (animationData) {
    return (
      <div className={className} style={style}>
        <Lottie
          animationData={animationData}
          loop={false}
          autoplay={isVisible}
          onComplete={onAnimationComplete}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    );
  }

  return (
    <div
      className={className}
      style={getAnimationStyle()}
      onTransitionEnd={() => {
        if (isVisible && animationType !== 'typewriter') {
          onAnimationComplete?.();
        }
      }}
    >
      {animationType === 'typewriter' ? displayText : text}
    </div>
  );
};

export default AnimatedText;