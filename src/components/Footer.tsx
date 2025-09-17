import React from 'react';
import styles from '../styles/footer.module.css';

export interface FooterLink {
  label: string;
  href: string;
  onClick?: () => void;
}

export interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

export interface FooterProps {
  brand?: React.ReactNode;
  links?: FooterLink[];
  socialLinks?: SocialLink[];
  newsletter?: boolean;
  copyright?: string;
}

const Footer: React.FC<FooterProps> = ({
  brand,
  links = [],
  socialLinks = [],
  newsletter = true,
  copyright
}) => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrap}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            {brand}
          </div>
          
          {newsletter && (
            <div className={styles.newsletterFormBlock}>
              <h6 className={styles.newsletterTitle}>Subscribe to Newsletter</h6>
              <form className={styles.newsletterForm} onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  className={styles.newsletterField}
                  placeholder="Enter your email"
                  required
                />
                <button type="submit" className={styles.newsletterSubmit} aria-label="Subscribe">
                </button>
              </form>
            </div>
          )}
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerContact}>
            <div className={styles.footerInner}>
              <h5 className={styles.footerHead}>Links</h5>
              <nav className={styles.footerMenu}>
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={styles.footerLink}
                    onClick={link.onClick}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {socialLinks.length > 0 && (
              <div className={styles.footerInner}>
                <h5 className={styles.footerHead}>Connect</h5>
                <div className={styles.socialBlock}>
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={styles.socialLink}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {copyright && (
        <div className={styles.footerData}>
          <div className={styles.footerSpaceBetween}>
            <p style={{ margin: 0, fontSize: '14px' }}>{copyright}</p>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;