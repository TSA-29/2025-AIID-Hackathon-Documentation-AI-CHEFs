import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Project2.module.css';

const Project2: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.projectOverview}>
        <h1 className={styles.title}>AGRI-SMART SUSTAIN</h1>
        <p className={styles.subtitle}>
          AI-powered precision agriculture platform optimizing crop yields while minimizing environmental impact through smart resource management.
        </p>
      </div>

      <div className={styles.navigationGrid}>
        <Link to="background" className={styles.navCard}>
          <span className={styles.navCardIcon}>🌾</span>
          <div className={styles.navCardNumber}>01</div>
          <h3 className={styles.navCardTitle}>BACKGROUND</h3>
          <p className={styles.navCardDescription}>
            Explore agricultural challenges, food security concerns, and environmental sustainability issues we're addressing.
          </p>
        </Link>

        <Link to="idea" className={styles.navCard}>
          <span className={styles.navCardIcon}>💚</span>
          <div className={styles.navCardNumber}>02</div>
          <h3 className={styles.navCardTitle}>IDEA</h3>
          <p className={styles.navCardDescription}>
            Discover our sustainable farming approach, IoT integration, and AI-driven agricultural optimization.
          </p>
        </Link>

        <Link to="implementation" className={styles.navCard}>
          <span className={styles.navCardIcon}>🚜</span>
          <div className={styles.navCardNumber}>03</div>
          <h3 className={styles.navCardTitle}>IMPLEMENTATION</h3>
          <p className={styles.navCardDescription}>
            Learn about sensor networks, machine learning models, and precision farming technology deployment.
          </p>
        </Link>

        <Link to="result" className={styles.navCard}>
          <span className={styles.navCardIcon}>📈</span>
          <div className={styles.navCardNumber}>04</div>
          <h3 className={styles.navCardTitle}>RESULT</h3>
          <p className={styles.navCardDescription}>
            See yield improvements, resource savings, and environmental impact reductions with real farm data.
          </p>
        </Link>
      </div>

      <div className={styles.projectInfo}>
        <h2>Project Overview</h2>
        <div className={styles.projectInfoGrid}>
          <div className={styles.infoItem}>
            <h3>🌱 Main Goal</h3>
            <p>Develop sustainable precision agriculture platform increasing crop yields by 40% while reducing water usage by 60%</p>
          </div>
          <div className={styles.infoItem}>
            <h3>🔧 Tech Stack</h3>
            <p>IoT Sensors, Machine Learning, Computer Vision, Cloud Analytics, Mobile Apps</p>
          </div>
          <div className={styles.infoItem}>
            <h3>👥 Team Size</h3>
            <p>5-person team including agronomists, data scientists, and hardware engineers</p>
          </div>
          <div className={styles.infoItem}>
            <h3>🌍 Impact Area</h3>
            <p>Pilot deployed across 50 farms covering 10,000 acres of agricultural land</p>
          </div>
        </div>
      </div>

      <div className={styles.quickStart}>
        <h3>Start Exploring</h3>
        <p>Begin with BACKGROUND to understand the agricultural challenges we're solving</p>
        <Link to="background" className={styles.startButton}>
          Explore Agricultural Challenges →
        </Link>
      </div>
    </div>
  );
};

export default Project2;