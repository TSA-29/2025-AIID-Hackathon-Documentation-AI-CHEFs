import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Implementation.module.css';

const Implementation: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/resources" className={styles.backLink}>
          ← Back to Resources
        </Link>
        <h1 className={styles.title}>IMPLEMENTATION</h1>
        <p className={styles.subtitle}>
          Technical details of our resource management system and development process
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Frontend Architecture</h2>
          <p className={styles.sectionText}>
            Our frontend is built with React and TypeScript, providing a type-safe development environment 
            and excellent developer experience. We've implemented a component-based architecture that allows 
            for reusable UI elements and consistent design patterns throughout the application.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Resource Management System</h2>
          <p className={styles.sectionText}>
            The core of our platform is a sophisticated resource management system that categorizes, tags, 
            and organizes content for optimal discoverability. We've implemented intelligent search functionality 
            and personalized recommendations to help users find exactly what they need.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Performance Optimization</h2>
          <p className={styles.sectionText}>
            We've employed various optimization techniques including code splitting, lazy loading, and caching 
            strategies to ensure fast load times and smooth interactions. Our performance monitoring system 
            continuously tracks key metrics to identify and address bottlenecks.
          </p>
        </section>

        <div className={styles.navigation}>
          <Link to="/resources/idea" className={styles.prevButton}>
            ← Idea
          </Link>
          <Link to="/resources/result" className={styles.nextButton}>
            Result →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Implementation;