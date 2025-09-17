import { useCountUpAnimation } from '../hooks/useAnimations';
import styles from '../styles/services.module.css';
import animationStyles from '../styles/animations.module.css';
import React from 'react';

interface StatItemProps {
  number: number;
  suffix?: string;
  label: string;
  duration?: number;
}

const StatItem = ({ number, suffix = '+', label, duration = 2000 }: StatItemProps) => {
  const countRef = useCountUpAnimation(number, duration, '', suffix);

  return (
    <div className={`${styles.projectBlock} ${animationStyles.fadeIn}`}>
      <span ref={countRef as React.RefObject<HTMLSpanElement>} className={styles.projectComplete}>
        {number}{suffix}
      </span>
      <span>{label}</span>
    </div>
  );
};

export default StatItem;