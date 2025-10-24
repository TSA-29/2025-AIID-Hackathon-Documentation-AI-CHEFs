import React from 'react';
import { socialLinks } from '../../../config/navigation';
import type { SocialLink } from '../../../types/navigation';
import styles from './Footer.module.css';

const SocialLinks: React.FC = () => {
  return (
    <div>
      <h3 className={styles.footerTitle}>Follow Us</h3>
      <ul className={styles.footerList}>
        {socialLinks.map((link: SocialLink) => (
          <li key={link.platform}>
            <a href={link.url} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;