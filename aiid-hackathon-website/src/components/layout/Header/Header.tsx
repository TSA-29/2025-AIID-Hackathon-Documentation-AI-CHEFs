import React from 'react';
import Navigation from './Navigation';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/">MyLogo</a>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;