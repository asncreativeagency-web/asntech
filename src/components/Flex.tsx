import React from 'react';
import styles from '../styles/layout.module.css';

export interface FlexProps {
  children: React.ReactNode;
  direction?: 'row' | 'column';
  wrap?: boolean;
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'center' | 'end' | 'stretch';
  gap?: 10 | 15 | 20 | 25 | 30 | 40 | 50 | 60 | 80;
  className?: string;
}

const Flex: React.FC<FlexProps> = ({
  children,
  direction = 'row',
  wrap = false,
  justify = 'start',
  align = 'start',
  gap,
  className = ''
}) => {
  const getFlexClasses = () => {
    const classes = [styles.flex];
    
    if (direction === 'column') {
      classes.push(styles.flexColumn);
    }
    
    if (wrap) {
      classes.push(styles.flexWrap);
    }
    
    switch (justify) {
      case 'center':
        classes.push(styles.justifyCenter);
        break;
      case 'end':
        classes.push(styles.justifyEnd);
        break;
      case 'between':
        classes.push(styles.justifyBetween);
        break;
      case 'start':
        classes.push(styles.justifyStart);
        break;
    }
    
    switch (align) {
      case 'center':
        classes.push(styles.alignCenter);
        break;
      case 'end':
        classes.push(styles.alignEnd);
        break;
      case 'start':
        classes.push(styles.alignStart);
        break;
    }
    
    if (gap) {
      classes.push(styles[`gap${gap}`]);
    }
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  return (
    <div className={getFlexClasses()}>
      {children}
    </div>
  );
};

export default Flex;