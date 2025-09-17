import React from 'react';
import styles from '../styles/layout.module.css';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      {children}
    </div>
  );
};

export default Container;