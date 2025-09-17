import animationStyles from '../styles/animations.module.css';
import styles from '../styles/skeleton.module.css';

interface SkeletonProps {
  width?: string;
  height?: string;
  circle?: boolean;
  lines?: number;
  className?: string;
}

const Skeleton = ({ 
  width = '100%', 
  height = '20px', 
  circle = false, 
  lines = 1,
  className = ''
}: SkeletonProps) => {
  if (lines > 1) {
    return (
      <div className={className}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`${styles.skeleton} ${animationStyles.shimmer}`}
            style={{
              width: index === lines - 1 ? '60%' : width,
              height,
              marginBottom: index < lines - 1 ? '8px' : '0'
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`${styles.skeleton} ${animationStyles.shimmer} ${circle ? styles.circle : ''} ${className}`}
      style={{ width, height }}
    />
  );
};

// Skeleton components for specific use cases
export const SkeletonCard = () => (
  <div className={styles.skeletonCard}>
    <Skeleton height="200px" className={styles.skeletonImage} />
    <div className={styles.skeletonContent}>
      <Skeleton height="24px" width="80%" />
      <Skeleton height="16px" lines={2} />
      <Skeleton height="14px" width="40%" />
    </div>
  </div>
);

export const SkeletonWorkCard = () => (
  <div className={styles.skeletonCard}>
    <Skeleton height="300px" className={styles.skeletonImage} />
    <div className={styles.skeletonContent}>
      <Skeleton height="20px" width="60%" />
      <Skeleton height="28px" width="90%" />
      <Skeleton height="16px" lines={3} />
      <Skeleton height="14px" width="30%" />
    </div>
  </div>
);

export const SkeletonTestimonial = () => (
  <div className={styles.skeletonCard}>
    <div className={styles.skeletonContent}>
      <Skeleton height="16px" lines={4} />
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '20px' }}>
        <Skeleton width="50px" height="50px" circle />
        <div style={{ flex: 1 }}>
          <Skeleton height="16px" width="70%" />
          <Skeleton height="14px" width="50%" />
        </div>
      </div>
    </div>
  </div>
);

export const SkeletonBlogCard = () => (
  <div className={styles.skeletonCard}>
    <Skeleton height="200px" className={styles.skeletonImage} />
    <div className={styles.skeletonContent}>
      <Skeleton height="22px" width="85%" />
      <Skeleton height="14px" width="30%" />
    </div>
  </div>
);

export default Skeleton;