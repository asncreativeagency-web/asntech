import { useEffect, useRef } from 'react';
import styles from '../styles/clientLogos.module.css';

interface ClientLogo {
  name: string;
  logo: string;
}

interface ClientLogosProps {
  logos: ClientLogo[];
  speed?: number;
}

const ClientLogos: React.FC<ClientLogosProps> = ({ logos, speed = 50 }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;
    
    let scrollPosition = 0;
    const scroll = () => {
      scrollPosition += 1;
      if (scrollPosition >= scrollWidth - clientWidth) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
    };

    const interval = setInterval(scroll, speed);
    return () => clearInterval(interval);
  }, [speed]);

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className={styles.clientLogosContainer}>
      <div className={styles.logosWrapper} ref={scrollRef}>
        <div className={styles.logosTrack}>
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className={styles.logoItem}>
              <img src={logo.logo} alt={logo.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;