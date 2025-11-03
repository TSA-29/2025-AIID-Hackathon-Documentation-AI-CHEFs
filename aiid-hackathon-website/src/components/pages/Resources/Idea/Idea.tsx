import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Idea.module.css';

const Idea: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/resources" className={styles.backLink}>
          ← Back to Resources
        </Link>
        <h1 className={styles.title}>IDEA</h1>
        <p className={styles.subtitle}>
          Our innovative approach to resource organization and knowledge management
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Core Concept</h2>
          <p className={styles.sectionText}>
            Our resource platform is built around the idea of creating a seamless learning experience 
            that adapts to each user's needs. We've designed a system that not only provides access to 
            high-quality materials but also guides users through a structured journey of discovery and 
            mastery in artificial intelligence.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Technical Architecture</h2>
          <p className={styles.sectionText}>
            The platform leverages modern web technologies to create a responsive, intuitive interface. 
            Our architecture emphasizes modularity, scalability, and performance, ensuring that users can 
            access resources quickly and efficiently regardless of their device or network conditions.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Design Principles</h2>
          <p className={styles.sectionText}>
            We've embraced a user-centered design approach, focusing on clarity, accessibility, and 
            engagement. Every aspect of the platform is carefully crafted to reduce cognitive load and 
            enhance the learning experience, from navigation patterns to content organization.
          </p>
        </section>

        <div className={styles.navigation}>
          <Link to="/resources/background" className={styles.prevButton}>
            ← Background
          </Link>
          <Link to="/resources/implementation" className={styles.nextButton}>
            Implementation →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Idea;