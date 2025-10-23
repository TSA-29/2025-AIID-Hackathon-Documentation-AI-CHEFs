import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationConfig } from '../../../config/navigation';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActiveRoute = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          AIID Hackathon 2025
        </Link>
        
        <nav className={styles.nav}>
          {navigationConfig.map((item) => (
            <div key={item.id} className={styles.navItem}>
              <Link 
                to={item.path} 
                className={`${styles.navLink} ${isActiveRoute(item.path) ? styles.active : ''}`}
              >
                {item.label}
                {item.children && <span>▼</span>}
              </Link>
              
              {item.children && (
                <div className={styles.dropdown}>
                  {item.children.map((child) => (
                    <div key={child.id} className={styles.dropdownGroup}>
                      <Link
                        to={child.path}
                        className={styles.dropdownItem}
                      >
                        {child.label}
                      </Link>
                      {child.children && (
                        <div className={styles.subDropdown}>
                          {child.children.map((grand) => (
                            <Link
                              key={grand.id}
                              to={grand.path}
                              className={styles.dropdownSubItem}
                            >
                              {grand.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <button 
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          ☰
        </button>
      </div>

      <nav className={`${styles.mobileNav} ${mobileMenuOpen ? styles.open : ''}`}>
        {navigationConfig.map((item) => (
          <div key={item.id}>
            <div className={styles.mobileNavItem}>
              <Link 
                to={item.path} 
                className={styles.mobileNavLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            </div>
            
            {item.children && (
              <div className={styles.mobileSubItems}>
                {item.children.map((child) => (
                  <div key={child.id} className={styles.mobileSubItem}>
                    <Link
                      to={child.path}
                      className={styles.mobileSubLink}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {child.label}
                    </Link>
                    {child.children && (
                      <div className={styles.mobileSubSubItems}>
                        {child.children.map((grand) => (
                          <div key={grand.id} className={styles.mobileSubSubItem}>
                            <Link
                              to={grand.path}
                              className={styles.mobileSubSubLink}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {grand.label}
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Header;