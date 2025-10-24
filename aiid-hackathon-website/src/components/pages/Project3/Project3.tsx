import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Project3.module.css';

const Project3: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.projectOverview}>
        <h1 className={styles.title}>EDU-LEARN AI</h1>
        <p className={styles.subtitle}>
          Adaptive learning platform using AI to personalize education, identify learning gaps, and provide tailored content for optimal student outcomes.
        </p>
      </div>

      <div className={styles.navigationGrid}>
        <Link to="background" className={styles.navCard}>
          <span className={styles.navCardIcon}>📚</span>
          <div className={styles.navCardNumber}>01</div>
          <h3 className={styles.navCardTitle}>BACKGROUND</h3>
          <p className={styles.navCardDescription}>
            Examine educational challenges, learning diversity issues, and traditional classroom limitations we're addressing.
          </p>
        </Link>

        <Link to="idea" className={styles.navCard}>
          <span className={styles.navCardIcon}>🧠</span>
          <div className={styles.navCardNumber}>02</div>
          <h3 className={styles.navCardTitle}>IDEA</h3>
          <p className={styles.navCardDescription}>
            Explore personalized learning algorithms, adaptive content delivery, and intelligent tutoring systems.
          </p>
        </Link>

        <Link to="implementation" className={styles.navCard}>
          <span className={styles.navCardIcon}>💻</span>
          <div className={styles.navCardNumber}>03</div>
          <h3 className={styles.navCardTitle}>IMPLEMENTATION</h3>
          <p className={styles.navCardDescription}>
            Discover machine learning models, content management systems, and student progress analytics.
          </p>
        </Link>

        <Link to="result" className={styles.navCard}>
          <span className={styles.navCardIcon}>🎓</span>
          <div className={styles.navCardNumber}>04</div>
          <h3 className={styles.navCardTitle}>RESULT</h3>
          <p className={styles.navCardDescription}>
            View learning improvements, engagement metrics, and educational outcomes from pilot programs.
          </p>
        </Link>
      </div>

      <div className={styles.projectInfo}>
        <h2>Project Overview</h2>
        <div className={styles.projectInfoGrid}>
          <div className={styles.infoItem}>
            <h3>🎯 Main Goal</h3>
            <p>Create adaptive learning platform improving student performance by 45% through personalized AI-driven education</p>
          </div>
          <div className={styles.infoItem}>
            <h3>🔧 Tech Stack</h3>
            <p>Machine Learning, NLP, Data Analytics, Cloud Infrastructure, Mobile/Web Apps</p>
          </div>
          <div className={styles.infoItem}>
            <h3>👥 Team Size</h3>
            <p>6-person team including educators, AI engineers, and educational psychologists</p>
          </div>
          <div className={styles.infoItem}>
            <h3>📊 Impact</h3>
            <p>Pilot with 5,000 students across 20 schools showing significant learning improvements</p>
          </div>
        </div>
      </div>

      <div className={styles.quickStart}>
        <h3>Start Exploring</h3>
        <p>Begin with BACKGROUND to understand the educational challenges we're solving</p>
        <Link to="background" className={styles.startButton}>
          Explore Educational Challenges →
        </Link>
      </div>
    </div>
  );
};

export default Project3;