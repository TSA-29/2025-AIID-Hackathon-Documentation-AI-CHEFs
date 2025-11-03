import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Project3.module.css';

const Project3: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.projectOverview}>
        <h1 className={styles.title}>STUDYBUDDY</h1>
        <p className={styles.subtitle}>
          AI-powered interactive learning platform designed for primary and middle school education. Teachers can create engaging classrooms and generate personalized quizzes instantly, while students learn at their own pace with smart, adaptive AI-generated content.
        </p>
        <div className={styles.projectImageContainer}>
          <img
            src={import.meta.env.BASE_URL + 'images/ProjPic/StudyBuddy.png'}
            alt="StudyBuddy project screenshot"
            className={styles.projectImage}
          />
        </div>
      </div>

      <div className={styles.navigationGrid}>
        <Link to="background" className={styles.navCard}>
          <span className={styles.navCardIcon}>📚</span>
          <div className={styles.navCardNumber}>01</div>
          <h3 className={styles.navCardTitle}>BACKGROUND</h3>
          <p className={styles.navCardDescription}>
            Explore educational challenges, learning diversity issues, and traditional classroom limitations we're addressing.
          </p>
        </Link>

        <Link to="idea" className={styles.navCard}>
          <span className={styles.navCardIcon}>🧠</span>
          <div className={styles.navCardNumber}>02</div>
          <h3 className={styles.navCardTitle}>IDEA</h3>
          <p className={styles.navCardDescription}>
            Discover AI-powered quiz generation, personalized learning algorithms, and adaptive content delivery.
          </p>
        </Link>

        <Link to="implementation" className={styles.navCard}>
          <span className={styles.navCardIcon}>💻</span>
          <div className={styles.navCardNumber}>03</div>
          <h3 className={styles.navCardTitle}>IMPLEMENTATION</h3>
          <p className={styles.navCardDescription}>
            Learn about Next.js framework, Supabase database, and AI integration with OpenAI and SiliconFlow.
          </p>
        </Link>

        <Link to="result" className={styles.navCard}>
          <span className={styles.navCardIcon}>📈</span>
          <div className={styles.navCardNumber}>04</div>
          <h3 className={styles.navCardTitle}>RESULT</h3>
          <p className={styles.navCardDescription}>
            See student engagement improvements, learning outcomes, and teacher time savings with real classroom data.
          </p>
        </Link>
      </div>

      <div className={styles.projectInfo}>
        <h2>Project Overview</h2>
        <div className={styles.projectInfoGrid}>
          <div className={styles.infoItem}>
            <h3>🎯 Main Goal</h3>
            <p>Transform traditional classroom learning by using AI to create personalized, interactive quizzes on any topic</p>
          </div>
          <div className={styles.infoItem}>
            <h3>🔧 Tech Stack</h3>
            <p>Next.js 15, TypeScript, Supabase, OpenAI/SiliconFlow APIs, Tailwind CSS, Zustand</p>
          </div>
          <div className={styles.infoItem}>
            <h3>👥 Team Size</h3>
            <p>4-person interdisciplinary team including frontend developers, backend engineers, and AI specialists</p>
          </div>
          <div className={styles.infoItem}>
            <h3>⏱️ Development Period</h3>
            <p>48-hour intensive hackathon development</p>
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