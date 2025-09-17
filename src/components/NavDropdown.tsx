import { useState, useRef } from 'react';
import styles from '../styles/navigation.module.css';

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
}

interface DropdownSection {
  title: string;
  items: DropdownItem[];
}

interface NavDropdownProps {
  label: string;
  items?: DropdownItem[];
  sections?: DropdownSection[];
  onClick?: () => void;
}

const NavDropdown = ({ label, items = [], sections = [], onClick }: NavDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    // Add a small delay before hiding to prevent flickering
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150); // 150ms delay
  };

  const handleItemClick = (href: string) => {
    setIsOpen(false);
    if (onClick) onClick();
    // Handle navigation
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={styles.navDropdown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button 
        className={styles.navDropdownTrigger}
        aria-expanded={isOpen}
      >
        <span>{label}</span>
        <svg 
          className={`${styles.dropdownArrow} ${isOpen ? styles.open : ''}`}
          width="12" 
          height="12" 
          viewBox="0 0 12 12" 
          fill="none"
        >
          <path 
            d="M3 4.5L6 7.5L9 4.5" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </button>
      
      {isOpen && (
        <div className={styles.navDropdownMenu}>
          <div className={styles.dropdownContent}>
            {/* Render sections if provided */}
            {sections.length > 0 ? (
              sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className={styles.dropdownSection}>
                  <div className={styles.dropdownSectionTitle}>{section.title}</div>
                  {section.items.map((item, itemIndex) => (
                    <a
                      key={itemIndex}
                      href={item.href}
                      className={styles.dropdownItem}
                      onClick={(e) => {
                        e.preventDefault();
                        handleItemClick(item.href);
                      }}
                    >
                      <div className={styles.dropdownItemContent}>
                        <span className={styles.dropdownItemLabel}>{item.label}</span>
                        {item.description && (
                          <span className={styles.dropdownItemDesc}>{item.description}</span>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              ))
            ) : (
              /* Fallback to simple items if no sections */
              items.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={styles.dropdownItem}
                  onClick={(e) => {
                    e.preventDefault();
                    handleItemClick(item.href);
                  }}
                >
                  <div className={styles.dropdownItemContent}>
                    <span className={styles.dropdownItemLabel}>{item.label}</span>
                    {item.description && (
                      <span className={styles.dropdownItemDesc}>{item.description}</span>
                    )}
                  </div>
                </a>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavDropdown;