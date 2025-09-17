import React from 'react';
import Lottie from 'lottie-react';

interface TextAnimationProps {
  animationData: any;
  text?: string;
  className?: string;
  style?: React.CSSProperties;
  loop?: boolean;
  autoplay?: boolean;
  onComplete?: () => void;
  onAnimationComplete?: () => void;
}

export const TextAnimation: React.FC<TextAnimationProps> = ({
  animationData,
  text,
  className,
  style,
  loop = false,
  autoplay = true,
  onComplete,
  onAnimationComplete
}) => {
  const defaultStyle: React.CSSProperties = {
    width: '100%',
    height: 'auto',
    maxWidth: '800px',
    ...style
  };

  return (
    <div className={className} style={defaultStyle}>
      <Lottie
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        onComplete={onComplete}
        style={{ width: '100%', height: '100%' }}
      />
      {text && (
        <div 
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#333',
            zIndex: 10,
            pointerEvents: 'none'
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default TextAnimation;