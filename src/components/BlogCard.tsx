import { useScrollAnimation } from '../hooks/useAnimations';
import animationStyles from '../styles/animations.module.css';
import styles from '../styles/blog.module.css';

export interface BlogCardProps {
  title: string;
  image?: string;
  date: string;
  href: string;
  onClick?: () => void;
}

const BlogCard = ({
  title,
  image,
  date,
  href,
  onClick
}: BlogCardProps) => {
  const animationRef = useScrollAnimation('fadeIn', { duration: 700 });

  return (
    <a 
      ref={animationRef as any}
      href={href} 
      className={`${styles.blogCard} ${animationStyles.cardEnhance} ${animationStyles.hoverLift}`} 
      onClick={onClick}
    >
      <div className={`${styles.blogThumb} ${animationStyles.imageZoom}`}>
        {image && <img src={image} alt={title} className={styles.coverImage} />}
        <div className={styles.dateBlock}>{date}</div>
      </div>
      <h3 className={styles.blogTitle}>{title}</h3>
    </a>
  );
};

export default BlogCard;