import React from 'react';
import { contactInfo, socialLinks } from '../../../config/navigation';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Contact Information</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <span>{contactInfo.phone}</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>✉️</span>
                <span>{contactInfo.email}</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <span>
                  {contactInfo.address.street}<br />
                  {contactInfo.address.city}<br />
                  {contactInfo.address.country}
                </span>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Follow Us</h3>
            <div className={styles.socialLinks}>
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <span className={styles.socialIcon}>{link.icon}</span>
                  <span>{link.platform.charAt(0).toUpperCase() + link.platform.slice(1)}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>&copy; 2025 AIID Hackathon. All rights reserved. Built with React & TypeScript.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;