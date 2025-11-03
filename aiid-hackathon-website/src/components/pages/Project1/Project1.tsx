import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Project1.module.css';

const Project1: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.projectOverview}>
        <h1 className={styles.title}>ARROWISTA</h1>
        <p className={styles.subtitle}>
          Modern AI-powered content generator that creates stunning images, text, and videos using SiliconFlow API with comprehensive security features and responsive design.
        </p>
        <div className={styles.projectImageContainer}>
          <img
            src={import.meta.env.BASE_URL + 'images/ProjPic/ArrowistaPic.png'}
            alt="Arrowista project screenshot"
            className={styles.projectImage}
          />
        </div>
      </div>

      <div className={styles.navigationGrid}>
        <Link to="background" className={styles.navCard}>
          <span className={styles.navCardIcon}>🎨</span>
          <div className={styles.navCardNumber}>01</div>
          <h3 className={styles.navCardTitle}>BACKGROUND</h3>
          <p className={styles.navCardDescription}>
            Discover the project's foundation, research motivation, and core problems we're solving in AI content generation.
          </p>
        </Link>

        <Link to="idea" className={styles.navCard}>
          <span className={styles.navCardIcon}>💡</span>
          <div className={styles.navCardNumber}>02</div>
          <h3 className={styles.navCardTitle}>IDEA</h3>
          <p className={styles.navCardDescription}>
            Explore our innovative approach, technical architecture, and security features transforming content creation.
          </p>
        </Link>

        <Link to="implementation" className={styles.navCard}>
          <span className={styles.navCardIcon}>⚙️</span>
          <div className={styles.navCardNumber}>03</div>
          <h3 className={styles.navCardTitle}>IMPLEMENTATION</h3>
          <p className={styles.navCardDescription}>
            Dive into detailed technical implementation, security systems, and key engineering challenges.
          </p>
        </Link>

        <Link to="result" className={styles.navCard}>
          <span className={styles.navCardIcon}>🎯</span>
          <div className={styles.navCardNumber}>04</div>
          <h3 className={styles.navCardTitle}>RESULT</h3>
          <p className={styles.navCardDescription}>
            Showcase project outcomes, security metrics, and live demos with deployment links.
          </p>
        </Link>
      </div>

      <div className={styles.projectInfo}>
        <h2>Project Overview</h2>
        <div className={styles.projectInfoGrid}>
          <div className={styles.infoItem}>
            <h3>🎯 Main Goal</h3>
            <p>Develop secure, intuitive AI content generation platform with multi-modal support and comprehensive security features</p>
          </div>
          <div className={styles.infoItem}>
            <h3>🔬 Tech Stack</h3>
            <p>Next.js 15, React, TypeScript, SiliconFlow API, Custom Security Systems</p>
          </div>
          <div className={styles.infoItem}>
            <h3>👥 Team Size</h3>
            <p>Individual project with comprehensive security implementation</p>
          </div>
          <div className={styles.infoItem}>
            <h3>⏱️ Development Period</h3>
            <p>48-hour intensive hackathon development</p>
          </div>
        </div>
      </div>

      <div className={styles.quickStart}>
        <h3>Start Exploring</h3>
        <p>Begin with BACKGROUND to follow our complete development journey and security implementation</p>
        <Link to="background" className={styles.startButton}>
          Explore Project Background →
        </Link>
      </div>
    </div>
  );
};

export default Project1;