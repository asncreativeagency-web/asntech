import { useScrollAnimation } from '../hooks/useAnimations';
import animationStyles from '../styles/animations.module.css';
import styles from '../styles/testimonial.module.css';
import React from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating?: number;
}

const TestimonialCard = ({
  name,
  role,
  company,
  content,
  avatar,
  rating = 5
}: TestimonialCardProps) => {
  const animationRef = useScrollAnimation('fadeInLeft', { duration: 800 });

  return (
    <div ref={animationRef as React.RefObject<HTMLDivElement>} className={`${styles.testimonialCard} ${animationStyles.cardEnhance} ${animationStyles.hoverLift}`}>
      <div className={styles.testimonialContent}>
        <div className={styles.quote}>"</div>
        <p className={styles.testimonialText}>{content}</p>
        <div className={styles.rating}>
          {Array.from({ length: rating }, (_, i) => (
            <span key={i} className={styles.star}>★</span>
          ))}
        </div>
      </div>
      <div className={styles.testimonialAuthor}>
        <div className={styles.authorAvatar}>
          {avatar ? (
            <img src={avatar} alt={name} />
          ) : (
            <div className={styles.avatarPlaceholder}>
              {name.charAt(0)}
            </div>
          )
          }
        </div>
        <div className={styles.authorInfo}>
          <div className={styles.authorName}>{name}</div>
          <div className={styles.authorRole}>{role} at {company}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;