import React from 'react';
import animationStyles from '../styles/animations.module.css';
import styles from '../styles/buttons.module.css';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'solid' | 'nav-primary' | 'nav-secondary';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  onClick,
  type = 'button',
  className = '',
}) => {
  const getButtonClasses = () => {
    const classes = [];
    
    switch (variant) {
      case 'primary':
        classes.push(styles.primaryButton);
        break;
      case 'secondary':
        classes.push(styles.secondaryButton);
        break;
      case 'outline':
        classes.push(styles.buttonOutline);
        break;
      case 'solid':
        classes.push(styles.buttonSolid);
        break;
      case 'nav-primary':
        classes.push(styles.navPrimaryButton);
        break;
      case 'nav-secondary':
        classes.push(styles.navSecondaryButton);
        break;
    }
    
    switch (size) {
      case 'small':
        classes.push(styles.buttonSmall);
        break;
      case 'medium':
        classes.push(styles.buttonMedium);
        break;
      case 'large':
        classes.push(styles.buttonLarge);
        break;
    }
    
    if (fullWidth) {
      classes.push(styles.full);
    }
    
    if (disabled) {
      classes.push(styles.buttonDisabled);
    }
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  if (variant === 'primary') {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${styles.primaryButton} ${animationStyles.interactiveButton} ${animationStyles.focusRing}`}
      >
        <span className={`${styles.primaryBtnText} ${fullWidth ? styles.full : ''}`}>
          {children}
        </span>
      </button>
    );
  }

  if (variant === 'nav-primary') {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${styles.navPrimaryButton} ${animationStyles.interactiveButton} ${animationStyles.focusRing}`}
      >
        <span className={`${styles.navPrimaryText} ${fullWidth ? styles.full : ''}`}>
          {children}
        </span>
      </button>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${getButtonClasses()} ${animationStyles.interactiveButton} ${animationStyles.focusRing}`}
    >
      {children}
    </button>
  );
};

export default Button;