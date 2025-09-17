import React, { useState } from 'react';
import NavDropdown from './NavDropdown';
import styles from '../styles/navigation.module.css';
import buttonStyles from '../styles/buttons.module.css';

export interface NavigationProps {
  brand?: React.ReactNode;
  links?: Array<{
    label: string;
    href: string;
    onClick?: () => void;
  }>;
  actions?: React.ReactNode;
  dropdownMenus?: {
    whatWeDo?: Array<{ label: string; href: string; description?: string }> | Array<{ title: string; items: Array<{ label: string; href: string; description?: string }> }>;
    whatWeThink?: Array<{ label: string; href: string; description?: string }> | Array<{ title: string; items: Array<{ label: string; href: string; description?: string }> }>;
    aboutASN?: Array<{ label: string; href: string; description?: string }> | Array<{ title: string; items: Array<{ label: string; href: string; description?: string }> }>;
    careers?: Array<{ label: string; href: string; description?: string }> | Array<{ title: string; items: Array<{ label: string; href: string; description?: string }> }>;
  };
}

const Navigation: React.FC<NavigationProps> = ({
  brand,
  links = [],
  actions,
  dropdownMenus
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.navBrand}>
          {brand}
        </div>
        
        <div className={styles.navMenu}>
          {dropdownMenus?.whatWeDo && (
            <NavDropdown 
              label="What We Do" 
              sections={Array.isArray(dropdownMenus.whatWeDo) && dropdownMenus.whatWeDo.length > 0 && 'title' in dropdownMenus.whatWeDo[0] 
                ? dropdownMenus.whatWeDo as Array<{ title: string; items: Array<{ label: string; href: string; description?: string }> }>
                : undefined
              }
              items={Array.isArray(dropdownMenus.whatWeDo) && dropdownMenus.whatWeDo.length > 0 && 'label' in dropdownMenus.whatWeDo[0]
                ? dropdownMenus.whatWeDo as Array<{ label: string; href: string; description?: string }>
                : undefined
              }
            />
          )}
          {dropdownMenus?.whatWeThink && (
            <NavDropdown 
              label="What We Think" 
              sections={Array.isArray(dropdownMenus.whatWeThink) && dropdownMenus.whatWeThink.length > 0 && 'title' in dropdownMenus.whatWeThink[0] 
                ? dropdownMenus.whatWeThink as Array<{ title: string; items: Array<{ label: string; href: string; description?: string }> }>
                : undefined
              }
              items={Array.isArray(dropdownMenus.whatWeThink) && dropdownMenus.whatWeThink.length > 0 && 'label' in dropdownMenus.whatWeThink[0]
                ? dropdownMenus.whatWeThink as Array<{ label: string; href: string; description?: string }>
                : undefined
              }
            />
          )}
          {dropdownMenus?.aboutASN && (
            <NavDropdown 
              label="About ASN" 
              sections={Array.isArray(dropdownMenus.aboutASN) && dropdownMenus.aboutASN.length > 0 && 'title' in dropdownMenus.aboutASN[0] 
                ? dropdownMenus.aboutASN as Array<{ title: string; items: Array<{ label: string; href: string; description?: string }> }>
                : undefined
              }
              items={Array.isArray(dropdownMenus.aboutASN) && dropdownMenus.aboutASN.length > 0 && 'label' in dropdownMenus.aboutASN[0]
                ? dropdownMenus.aboutASN as Array<{ label: string; href: string; description?: string }>
                : undefined
              }
            />
          )}
          {dropdownMenus?.careers && (
            <NavDropdown 
              label="Careers" 
              sections={Array.isArray(dropdownMenus.careers) && dropdownMenus.careers.length > 0 && 'title' in dropdownMenus.careers[0] 
                ? dropdownMenus.careers as Array<{ title: string; items: Array<{ label: string; href: string; description?: string }> }>
                : undefined
              }
              items={Array.isArray(dropdownMenus.careers) && dropdownMenus.careers.length > 0 && 'label' in dropdownMenus.careers[0]
                ? dropdownMenus.careers as Array<{ label: string; href: string; description?: string }>
                : undefined
              }
            />
          )}
          {links.map((link, index) => {
            // Only show Contact Us as regular link
            if (link.label === 'Contact Us') {
              return (
                <a
                  key={index}
                  href={link.href}
                  className={styles.navLink}
                  onClick={link.onClick}
                >
                  {link.label}
                </a>
              );
            }
            return null;
          })}
        </div>

        <div className={styles.navActions}>
          {actions}
          <button
            className={styles.mobileMenuToggle}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className={`${styles.mobileMenu} ${!isMobileMenuOpen ? styles.hidden : ''}`}>
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={styles.navLink}
              onClick={link.onClick}
            >
              {link.label}
            </a>
          ))}
          <div style={{ marginTop: '20px' }}>
            {actions}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;