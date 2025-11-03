import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Project2.module.css';

const Project2: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.projectOverview}>
        <h1 className={styles.title}>CARBON COMPASS</h1>
        <p className={styles.subtitle}>
          AI-powered platform helping SMEs exporting to European Union accurately estimate shipment carbon emissions, calculate CBAM fees, and identify practical strategies to reduce those costs.
        </p>
        <div className={styles.projectImageContainer}>
          <img
            src={import.meta.env.BASE_URL + 'images/ProjPic/CarbonCompass.png'}
            alt="Carbon Compass project screenshot"
            className={styles.projectImage}
          />
        </div>
      </div>

      <div className={styles.navigationGrid}>
        <Link to="background" className={styles.navCard}>
          <span className={styles.navCardIcon}>📋</span>
          <div className={styles.navCardNumber}>01</div>
          <h3 className={styles.navCardTitle}>BACKGROUND</h3>
          <p className={styles.navCardDescription}>
            Discover the EU carbon border adjustment challenges, regulatory compliance requirements, and the carbon emission problem we're solving.
          </p>
        </Link>

        <Link to="idea" className={styles.navCard}>
          <span className={styles.navCardIcon}>💡</span>
          <div className={styles.navCardNumber}>02</div>
          <h3 className={styles.navCardTitle}>IDEA</h3>
          <p className={styles.navCardDescription}>
            Explore our AI-powered approach combining regulatory intelligence with logistics data for carbon emission calculations.
          </p>
        </Link>

        <Link to="implementation" className={styles.navCard}>
          <span className={styles.navCardIcon}>⚙️</span>
          <div className={styles.navCardNumber}>03</div>
          <h3 className={styles.navCardTitle}>IMPLEMENTATION</h3>
          <p className={styles.navCardDescription}>
            Dive into technical implementation, AI engine development, and integration with carbon emission databases.
          </p>
        </Link>

        <Link to="result" className={styles.navCard}>
          <span className={styles.navCardIcon}>🎯</span>
          <div className={styles.navCardNumber}>04</div>
          <h3 className={styles.navCardTitle}>RESULT</h3>
          <p className={styles.navCardDescription}>
            See emission reduction outcomes, cost savings, and compliance benefits with real-world deployment data.
          </p>
        </Link>
      </div>

      <div className={styles.projectInfo}>
        <h2>Project Overview</h2>
        <div className={styles.projectInfoGrid}>
          <div className={styles.infoItem}>
            <h3>🎯 Main Goal</h3>
            <p>Help SMEs exporting to EU accurately estimate carbon emissions and comply with CBAM regulations while minimizing costs</p>
          </div>
          <div className={styles.infoItem}>
            <h3>🔧 Tech Stack</h3>
            <p>TRAE + Diffy LLM, React + Next.js, Python (FastAPI), Google Cloud Storage, Vercel + Google Cloud Run</p>
          </div>
          <div className={styles.infoItem}>
            <h3>👥 Team Size</h3>
            <p>4-person interdisciplinary team including AI engineers, frontend developers, and compliance specialists</p>
          </div>
          <div className={styles.infoItem}>
            <h3>⏱️ Development Period</h3>
            <p>48-hour intensive hackathon development</p>
          </div>
        </div>
      </div>

      <div className={styles.quickStart}>
        <h3>Start Exploring</h3>
        <p>Begin with BACKGROUND to understand the carbon emission challenges we're solving</p>
        <Link to="background" className={styles.startButton}>
          Explore Carbon Emission Challenges →
        </Link>
      </div>
    </div>
  );
};

export default Project2;