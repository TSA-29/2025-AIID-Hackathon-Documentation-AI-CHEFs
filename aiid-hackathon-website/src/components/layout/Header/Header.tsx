import React from 'react';
import Navigation from './Navigation';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/" aria-label="AI CHEF's Home">
          <img
            src={import.meta.env.BASE_URL + 'images/main-logo.png'}
            alt="AI CHEF's logo"
            style={{ height: '64px', width: 'auto', display: 'block' }}
          />
        </a>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;