import React from 'react';
import styles from '../styles/components.module.css';

export interface HeroProps {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  actions,
  image,
  imageAlt = '',
  className = ''
}) => {
  return (
    <section className={`${styles.hero} ${className}`}>
      <div className={styles.heroBackground}></div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{title}</h1>
        {subtitle && <p className={styles.heroSubtitle}>{subtitle}</p>}
        
        {actions && (
          <div className={styles.heroActions}>
            {actions}
          </div>
        )}
        
        {image && (
          <div style={{ marginTop: '40px' }}>
            <img 
              src={image} 
              alt={imageAlt} 
              className={styles.heroImage}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;