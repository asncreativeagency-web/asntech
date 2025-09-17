import { useScrollAnimation } from '../hooks/useAnimations';
import animationStyles from '../styles/animations.module.css';
import styles from '../styles/blog.module.css';

export interface WorkCardProps {
  title: string;
  category?: string;
  image?: string;
  href: string;
  onClick?: () => void;
}

const WorkCard = ({
  title,
  category,
  image,
  href,
  onClick
}: WorkCardProps) => {
  const animationRef = useScrollAnimation('scaleIn', { duration: 800 });

  return (
    <a 
      ref={animationRef as any}
      href={href} 
      className={`${styles.workCard} ${animationStyles.cardEnhance} ${animationStyles.hoverLift} ${animationStyles.imageZoom}`} 
      onClick={onClick}
    >
      <div className={styles.workThumb}>
        {image && <img src={image} alt={title} className={styles.coverImage} />}
      </div>
      <div className={styles.workContent}>
        <h3 className={styles.blogTitle}>{title}</h3>
        <div className={styles.workRight}>
          {category && <span>{category}</span>}
        </div>
      </div>
    </a>
  );
};

export default WorkCard;