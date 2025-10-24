import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Project1.module.css';

const Project1: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.projectOverview}>
        <h1 className={styles.title}>MEDICAI DIAGNOSTICS</h1>
        <p className={styles.subtitle}>
          Revolutionary AI-powered medical imaging diagnosis system leveraging deep learning to enhance disease detection accuracy and efficiency in healthcare.
        </p>
      </div>

      <div className={styles.navigationGrid}>
        <Link to="background" className={styles.navCard}>
          <span className={styles.navCardIcon}>📋</span>
          <div className={styles.navCardNumber}>01</div>
          <h3 className={styles.navCardTitle}>BACKGROUND</h3>
          <p className={styles.navCardDescription}>
            Discover the project's foundation, research motivation, and core problems we're solving in medical diagnosis.
          </p>
        </Link>

        <Link to="idea" className={styles.navCard}>
          <span className={styles.navCardIcon}>💡</span>
          <div className={styles.navCardNumber}>02</div>
          <h3 className={styles.navCardTitle}>IDEA</h3>
          <p className={styles.navCardDescription}>
            Explore our innovative approach, technical architecture, and core concepts transforming medical diagnostics.
          </p>
        </Link>

        <Link to="implementation" className={styles.navCard}>
          <span className={styles.navCardIcon}>⚙️</span>
          <div className={styles.navCardNumber}>03</div>
          <h3 className={styles.navCardTitle}>IMPLEMENTATION</h3>
          <p className={styles.navCardDescription}>
            Dive into detailed technical implementation, development steps, and key engineering challenges.
          </p>
        </Link>

        <Link to="result" className={styles.navCard}>
          <span className={styles.navCardIcon}>🎯</span>
          <div className={styles.navCardNumber}>04</div>
          <h3 className={styles.navCardTitle}>RESULT</h3>
          <p className={styles.navCardDescription}>
            Showcase project outcomes, performance metrics, and real-world impact with demo videos.
          </p>
        </Link>
      </div>

      <div className={styles.projectInfo}>
        <h2>Project Overview</h2>
        <div className={styles.projectInfoGrid}>
          <div className={styles.infoItem}>
            <h3>🎯 Main Goal</h3>
            <p>Develop deep learning-based medical imaging diagnosis system to improve disease detection accuracy and early discovery capabilities</p>
          </div>
          <div className={styles.infoItem}>
            <h3>🔬 Tech Stack</h3>
            <p>PyTorch, TensorFlow, CNN, Image Processing, Medical Imaging Analysis</p>
          </div>
          <div className={styles.infoItem}>
            <h3>👥 Team Size</h3>
            <p>4-person interdisciplinary team including AI engineers, medical experts, and frontend developers</p>
          </div>
          <div className={styles.infoItem}>
            <h3>⏱️ Development Period</h3>
            <p>48-hour intensive hackathon development</p>
          </div>
        </div>
      </div>

      <div className={styles.quickStart}>
        <h3>Start Exploring</h3>
        <p>Begin with BACKGROUND to follow our complete development journey sequentially</p>
        <Link to="background" className={styles.startButton}>
          Explore Project Background →
        </Link>
      </div>
    </div>
  );
};

export default Project1;