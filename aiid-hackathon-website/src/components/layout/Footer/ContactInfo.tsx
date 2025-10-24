import React from 'react';
import { contactInfo } from '../../../config/navigation';
import styles from './Footer.module.css';

const ContactInfo: React.FC = () => {
  return (
    <div>
      <h3 className={styles.footerTitle}>Contact Information</h3>
      <p>Phone: {contactInfo.phone}</p>
      <p>Email: {contactInfo.email}</p>
      <p>Address: {contactInfo.address.street}, {contactInfo.address.city}, {contactInfo.address.country}</p>
    </div>
  );
};

export default ContactInfo;