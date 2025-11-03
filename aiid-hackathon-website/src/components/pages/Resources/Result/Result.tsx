import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Result.module.css';

const Result: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/resources" className={styles.backLink}>
          ← Back to Resources
        </Link>
        <h1 className={styles.title}>RESULT</h1>
        <p className={styles.subtitle}>
          Outcomes, metrics, and access to our comprehensive resource collection
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Platform Impact</h2>
          <p className={styles.sectionText}>
            Our resource platform has successfully served thousands of users, providing access to 
            curated AI development materials. We've seen significant engagement across all resource 
            categories, with particular interest in our practical implementation guides and tutorials.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Metrics</h2>
          <div className={styles.metricsGrid}>
            <div className={styles.metricItem}>
              <h3 className={styles.metricNumber}>10K+</h3>
              <p className={styles.metricLabel}>Active Users</p>
            </div>
            <div className={styles.metricItem}>
              <h3 className={styles.metricNumber}>500+</h3>
              <p className={styles.metricLabel}>Resources Available</p>
            </div>
            <div className={styles.metricItem}>
              <h3 className={styles.metricNumber}>95%</h3>
              <p className={styles.metricLabel}>User Satisfaction</p>
            </div>
            <div className={styles.metricItem}>
              <h3 className={styles.metricNumber}>50+</h3>
              <p className={styles.metricLabel}>Contributors</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Access Links</h2>
          <p className={styles.sectionText}>
            Explore our complete resource collection through the following access points:
          </p>
          <div className={styles.linksGrid}>
            <a href="#" className={styles.linkCard}>
              <h3 className={styles.linkTitle}>Documentation</h3>
              <p className={styles.linkDescription}>Comprehensive guides and API references</p>
            </a>
            <a href="#" className={styles.linkCard}>
              <h3 className={styles.linkTitle}>Tutorials</h3>
              <p className={styles.linkDescription}>Step-by-step learning paths</p>
            </a>
            <a href="#" className={styles.linkCard}>
              <h3 className={styles.linkTitle}>Code Examples</h3>
              <p className={styles.linkDescription}>Ready-to-use implementation samples</p>
            </a>
            <a href="#" className={styles.linkCard}>
              <h3 className={styles.linkTitle}>Community</h3>
              <p className={styles.linkDescription}>Connect with other developers</p>
            </a>
          </div>
        </section>

        <div className={styles.navigation}>
          <Link to="/resources/implementation" className={styles.prevButton}>
            ← Implementation
          </Link>
          <Link to="/resources" className={styles.nextButton}>
            Back to Overview →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Result;