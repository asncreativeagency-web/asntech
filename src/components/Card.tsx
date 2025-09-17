import React from 'react';
import styles from '../styles/components.module.css';

export interface CardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  variant?: 'default' | 'flat' | 'outlined';
  className?: string;
  onClick?: () => void;
  footer?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  image,
  imageAlt = '',
  variant = 'default',
  className = '',
  onClick,
  footer
}) => {
  const getCardClasses = () => {
    const classes = [styles.card];
    
    switch (variant) {
      case 'flat':
        classes.push(styles.cardFlat);
        break;
      case 'outlined':
        classes.push(styles.cardOutlined);
        break;
    }
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  const cardContent = (
    <>
      {image && (
        <div className={styles.cardImageContainer}>
          <img 
            src={image} 
            alt={imageAlt} 
            className={styles.cardImage}
          />
        </div>
      )}
      
      {(title || subtitle) && (
        <div className={styles.cardHeader}>
          {subtitle && <p className={styles.cardSubtitle}>{subtitle}</p>}
          {title && <h4 className={styles.cardTitle}>{title}</h4>}
        </div>
      )}
      
      <div className={styles.cardContent}>
        {children}
      </div>
      
      {footer && (
        <div className={styles.cardFooter}>
          {footer}
        </div>
      )}
    </>
  );

  if (onClick) {
    return (
      <div className={getCardClasses()} onClick={onClick} style={{ cursor: 'pointer' }}>
        {cardContent}
      </div>
    );
  }

  return (
    <div className={getCardClasses()}>
      {cardContent}
    </div>
  );
};

export default Card;