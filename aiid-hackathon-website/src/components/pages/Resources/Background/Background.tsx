import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Background.module.css';

const Background: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/resources" className={styles.backLink}>
          ← Back to Resources
        </Link>
        <h1 className={styles.title}>BACKGROUND</h1>
        <p className={styles.subtitle}>
          Understanding the foundation of our resource collection and the problems we aim to solve
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Challenge</h2>
          <p className={styles.sectionText}>
            In the rapidly evolving field of artificial intelligence, developers and researchers often struggle 
            to find reliable, well-organized resources that cover both theoretical foundations and practical 
            implementations. The fragmentation of information across multiple platforms makes it difficult to 
            maintain a comprehensive learning path.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Motivation</h2>
          <p className={styles.sectionText}>
            We recognized the need for a centralized resource hub that would serve both beginners and experienced 
            practitioners in the AI field. Our goal was to create a platform that not only provides access to 
            high-quality materials but also guides users through a structured learning journey.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Research Foundation</h2>
          <p className={styles.sectionText}>
            Our approach is based on extensive research into learning methodologies, knowledge organization, 
            and user experience design. We've studied how developers interact with documentation and 
            educational materials to create an intuitive and effective resource platform.
          </p>
        </section>

        <div className={styles.navigation}>
          <Link to="/resources/idea" className={styles.nextButton}>
            Explore Our Idea →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Background;