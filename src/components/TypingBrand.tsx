import React, { useState, useEffect } from 'react';

interface TypingBrandProps {
  className?: string;
  style?: React.CSSProperties;
  onAnimationComplete?: () => void;
}

export const TypingBrand: React.FC<TypingBrandProps> = ({
  className,
  style,
  onAnimationComplete
}) => {
  const [displayText, setDisplayText] = useState('ASN.Technologies');
  const [isTyping, setIsTyping] = useState(false);
  
  const staticPart = 'ASN.';
  const typingPart = 'Technologies';
  
  useEffect(() => {
    // Simple timeout-based animation
    const startAnimation = () => {
      setDisplayText('ASN.'); // Start with static part
      setIsTyping(true);
      
      // Type out Technologies letter by letter
      let index = 0;
      const typeInterval = setInterval(() => {
        if (index < typingPart.length) {
          setDisplayText(staticPart + typingPart.substring(0, index + 1));
          index++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
          onAnimationComplete?.();
          
          // Wait 3 seconds then restart
          setTimeout(() => {
            startAnimation();
          }, 3000);
        }
      }, 150);
    };
    
    // Start first animation after 1 second
    const initialTimeout = setTimeout(startAnimation, 1000);
    
    return () => {
      clearTimeout(initialTimeout);
    };
  }, []);

  return (
    <div 
      className={`${className} typing-brand-container`}
      style={{
        fontSize: '24px',
        fontWeight: '700',
        color: 'var(--black)',
        fontFamily: 'Afical Neue Bold, Arial, Helvetica, sans-serif',
        letterSpacing: '0.5px',
        position: 'relative',
        width: '280px',
        height: '60px', // Increased vertical height
        textAlign: 'left',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: '-40px', // Move text to the left
        paddingLeft: '0px', // Remove previous padding
        overflow: 'hidden',
        backgroundColor: 'transparent',
        cursor: 'default',
        transition: 'none',
        transform: 'none',
        pointerEvents: 'auto',
        ...style
      }}
    >
      {displayText || 'ASN.Technologies'} {/* Fallback text */}
      <style>{`
        .typing-cursor {
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        /* Prevent any hover effects */
        .typing-brand-container:hover {
          transform: none !important;
          color: var(--black) !important;
          scale: 1 !important;
          zoom: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default TypingBrand;