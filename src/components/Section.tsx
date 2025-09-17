import React from 'react';
import styles from '../styles/layout.module.css';

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  small?: boolean;
  toTop?: boolean;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  small = false,
  toTop = false,
  id
}) => {
  const getSectionClasses = () => {
    const classes = [styles.section];
    
    if (small) {
      classes.push(styles.small);
    }
    
    if (toTop) {
      classes.push(styles.toTop);
    }
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  return (
    <section className={getSectionClasses()} id={id}>
      {children}
    </section>
  );
};

export default Section;