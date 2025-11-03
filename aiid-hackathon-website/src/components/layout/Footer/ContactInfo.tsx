import React from 'react';
import { contactInfo } from '../../../config/navigation';
import styles from './Footer.module.css';

const ContactInfo: React.FC = () => {
  return (
    <div>
      <h3 className={styles.footerTitle}>Contact Information</h3>
      {contactInfo.phone && <p>Phone: {contactInfo.phone}</p>}
      <p>Email: {contactInfo.email}</p>
      <p>Address: {contactInfo.address.street}, {contactInfo.address.city}, {contactInfo.address.country}</p>
      
      <h4 className={styles.footerSubtitle}>WeChat Contacts</h4>
      <p>TSA-29 (Team Lead)</p>
      <p>Valeria_pham (AI Development)</p>
      <p>ModulYnga (Backend Development)</p>
    </div>
  );
};

export default ContactInfo;