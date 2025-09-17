import React from 'react';
import styles from '../styles/components.module.css';
import Container from './Container';

export interface OriginalHeroProps {
  subtitle?: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  actions?: React.ReactNode;
  bottomContent?: React.ReactNode;
}

const OriginalHero: React.FC<OriginalHeroProps> = ({
  subtitle,
  title,
  description,
  image,
  imageAlt = '',
  actions,
  bottomContent
}) => {
  return (
    <section className={styles.heroSection}>
      <Container>
        <div className={styles.heroWrap}>
          {image && (
            <div className={styles.heroImg}>
              <img 
                src={image} 
                alt={imageAlt} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          )}
          
          <div className={styles.heroContent}>
            <div className={styles.heroTop}>
              <div className={styles.heroHeading}>
                {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
                <h1 className={styles.heroTitle}>{title}</h1>
                {description && <p className={styles.heroParagraph}>{description}</p>}
                {actions}
              </div>
            </div>
            
            {bottomContent && (
              <div className={styles.heroBottom}>
                {bottomContent}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OriginalHero;