import React from 'react';
import ContactInfo from './ContactInfo';
import SocialLinks from './SocialLinks';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <ContactInfo />
          <SocialLinks />
        </div>
        <div className={styles.footerBottom}>© 2025 AIID Hackathon • All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;