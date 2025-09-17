import React from 'react';
import styles from '../styles/layout.module.css';

export interface GridProps {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4;
  gap?: number;
  className?: string;
}

const Grid: React.FC<GridProps> = ({ 
  children, 
  cols = 2, 
  gap = 16,
  className = '' 
}) => {
  const getGridClasses = () => {
    const classes = [styles.grid];
    
    switch (cols) {
      case 1:
        classes.push(styles.gridCols1);
        break;
      case 2:
        classes.push(styles.gridCols2);
        break;
      case 3:
        classes.push(styles.gridCols3);
        break;
      case 4:
        classes.push(styles.gridCols4);
        break;
    }
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  const gridStyle = {
    gap: `${gap}px`
  };

  return (
    <div className={getGridClasses()} style={gridStyle}>
      {children}
    </div>
  );
};

export default Grid;