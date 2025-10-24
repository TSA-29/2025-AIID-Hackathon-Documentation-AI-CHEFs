import { NavLink } from 'react-router-dom';
import type { NavigationItem } from '../../../types/navigation';
import { navigationConfig } from '../../../config/navigation';
import styles from './Header.module.css';

export default function Navigation() {
  return (
    <nav className={styles.nav} aria-label="Primary">
      <ul className={styles.navList}>
        {navigationConfig.map((item: NavigationItem) => (
          <li key={item.id} className={styles.navItem}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              {item.label}
            </NavLink>
            {item.children && item.children.length > 0 && (
              <ul className={styles.dropdown}>
                {item.children.map((child: NavigationItem) => (
                  <li key={child.id} className={styles.dropdownItem}>
                    <NavLink
                      to={child.path}
                      className={({ isActive }) =>
                        isActive ? `${styles.dropdownLink} ${styles.active}` : styles.dropdownLink
                      }
                    >
                      {child.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}