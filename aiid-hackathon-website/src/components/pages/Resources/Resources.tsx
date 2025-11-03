import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Resources.module.css';

const Resources: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.resourcesOverview}>
        <h1 className={styles.title}>RESOURCES</h1>
        <p className={styles.subtitle}>
          Comprehensive collection of tools, documentation, and materials to support AI development and learning.
        </p>
        <div className={styles.resourcesImageContainer}>
          <img
            src={import.meta.env.BASE_URL + 'images/main-logo.png'}
            alt="Resources project screenshot"
            className={styles.resourcesImage}
          />
        </div>
      </div>

      <div className={styles.navigationGrid}>
        <Link to="background" className={styles.navCard}>
          <span className={styles.navCardIcon}>📚</span>
          <div className={styles.navCardNumber}>01</div>
          <h3 className={styles.navCardTitle}>BACKGROUND</h3>
          <p className={styles.navCardDescription}>
            Discover the foundation of our resource collection, research motivation, and core problems we're solving.
          </p>
        </Link>

        <Link to="idea" className={styles.navCard}>
          <span className={styles.navCardIcon}>💡</span>
          <div className={styles.navCardNumber}>02</div>
          <h3 className={styles.navCardTitle}>IDEA</h3>
          <p className={styles.navCardDescription}>
            Explore our innovative approach to resource organization, technical architecture, and design principles.
          </p>
        </Link>

        <Link to="implementation" className={styles.navCard}>
          <span className={styles.navCardIcon}>⚙️</span>
          <div className={styles.navCardNumber}>03</div>
          <h3 className={styles.navCardTitle}>IMPLEMENTATION</h3>
          <p className={styles.navCardDescription}>
            Dive into detailed technical implementation, resource management systems, and key engineering challenges.
          </p>
        </Link>

        <Link to="result" className={styles.navCard}>
          <span className={styles.navCardIcon}>🎯</span>
          <div className={styles.navCardNumber}>04</div>
          <h3 className={styles.navCardTitle}>RESULT</h3>
          <p className={styles.navCardDescription}>
            Showcase resource outcomes, usage metrics, and access links to the complete collection.
          </p>
        </Link>
      </div>

      <div className={styles.resourcesInfo}>
        <h2>Resources Overview</h2>
        <div className={styles.resourcesInfoGrid}>
          <div className={styles.infoItem}>
            <h3>🎯 Main Goal</h3>
            <p>Provide comprehensive, well-organized resources for AI development and learning</p>
          </div>
          <div className={styles.infoItem}>
            <h3>🔬 Tech Stack</h3>
            <p>React, TypeScript, Resource Management Systems, Documentation Tools</p>
          </div>
          <div className={styles.infoItem}>
            <h3>👥 Team Size</h3>
            <p>Collaborative project with multiple contributors</p>
          </div>
          <div className={styles.infoItem}>
            <h3>⏱️ Development Period</h3>
            <p>Ongoing development with regular updates and improvements</p>
          </div>
        </div>
      </div>

      <div className={styles.quickStart}>
        <h3>Start Exploring</h3>
        <p>Begin with BACKGROUND to understand our complete resource collection journey</p>
        <Link to="background" className={styles.startButton}>
          Explore Resources Background →
        </Link>
      </div>
    </div>
  );
};

export default Resources;