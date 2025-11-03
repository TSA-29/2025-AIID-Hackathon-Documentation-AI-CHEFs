import React from 'react';
import { Link } from 'react-router-dom';
import styles from './VibeCodingGuide.module.css';

const VibeCodingGuide: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.guideOverview}>
        <h1 className={styles.title}>VIBE CODING GUIDE</h1>
        <p className={styles.subtitle}>
          Build your own Carbon Compass with AI: A step-by-step tutorial for complete beginners using ChatGPT/Claude
        </p>
        <div className={styles.guideImageContainer}>
          <img
            src={import.meta.env.BASE_URL + 'images/ProjPic/CarbonCompass.png'}
            alt="Vibe Coding Guide project screenshot"
            className={styles.guideImage}
          />
        </div>
      </div>

      <div className={styles.navigationGrid}>
        <Link to="introduction" className={styles.navCard}>
          <span className={styles.navCardIcon}>📖</span>
          <div className={styles.navCardNumber}>01</div>
          <h3 className={styles.navCardTitle}>INTRODUCTION</h3>
          <p className={styles.navCardDescription}>
            Discover why Carbon Compass is the perfect case study for learning Vibe Coding and AI-assisted development.
          </p>
        </Link>

        <Link to="setup" className={styles.navCard}>
          <span className={styles.navCardIcon}>⚙️</span>
          <div className={styles.navCardNumber}>02</div>
          <h3 className={styles.navCardTitle}>SETUP</h3>
          <p className={styles.navCardDescription}>
            Prepare your development environment and AI tools for the Vibe Coding journey.
          </p>
        </Link>

        <Link to="step1" className={styles.navCard}>
          <span className={styles.navCardIcon}>🏗️</span>
          <div className={styles.navCardNumber}>03</div>
          <h3 className={styles.navCardTitle}>STEP 1: PROJECT SETUP</h3>
          <p className={styles.navCardDescription}>
            Create the basic project structure and initialize your Carbon Compass application.
          </p>
        </Link>

        <Link to="step2" className={styles.navCard}>
          <span className={styles.navCardIcon}>🎨</span>
          <div className={styles.navCardNumber}>04</div>
          <h3 className={styles.navCardTitle}>STEP 2: UI DESIGN</h3>
          <p className={styles.navCardDescription}>
            Design and implement the user interface with AI assistance.
          </p>
        </Link>

        <Link to="step3" className={styles.navCard}>
          <span className={styles.navCardIcon}>🧮</span>
          <div className={styles.navCardNumber}>05</div>
          <h3 className={styles.navCardTitle}>STEP 3: CARBON CALCULATION</h3>
          <p className={styles.navCardDescription}>
            Implement the core carbon emission calculation logic with AI guidance.
          </p>
        </Link>

        <Link to="step4" className={styles.navCard}>
          <span className={styles.navCardIcon}>🔗</span>
          <div className={styles.navCardNumber}>06</div>
          <h3 className={styles.navCardTitle}>STEP 4: DATA INTEGRATION</h3>
          <p className={styles.navCardDescription}>
            Connect your application to carbon emission databases and APIs.
          </p>
        </Link>

        <Link to="step5" className={styles.navCard}>
          <span className={styles.navCardIcon}>📊</span>
          <div className={styles.navCardNumber}>07</div>
          <h3 className={styles.navCardTitle}>STEP 5: REPORTING</h3>
          <p className={styles.navCardDescription}>
            Build compliance reporting features and export functionality.
          </p>
        </Link>

        <Link to="step6" className={styles.navCard}>
          <span className={styles.navCardIcon}>🚀</span>
          <div className={styles.navCardNumber}>08</div>
          <h3 className={styles.navCardTitle}>STEP 6: DEPLOYMENT</h3>
          <p className={styles.navCardDescription}>
            Deploy your Carbon Compass application and share it with the world.
          </p>
        </Link>
      </div>

      <div className={styles.guideInfo}>
        <h2>What You'll Build</h2>
        <div className={styles.guideInfoGrid}>
          <div className={styles.infoItem}>
            <h3>🎯 Main Goal</h3>
            <p>A simplified Carbon Compass application that calculates carbon emissions and generates compliance reports</p>
          </div>
          <div className={styles.infoItem}>
            <h3>🤖 AI Tools</h3>
            <p>ChatGPT/Claude for code generation, debugging, and problem-solving</p>
          </div>
          <div className={styles.infoItem}>
            <h3>⏱️ Time Required</h3>
            <p>2-3 hours for complete beginners, 1 hour for experienced developers</p>
          </div>
          <div className={styles.infoItem}>
            <h3>🛠️ Tech Stack</h3>
            <p>HTML, CSS, JavaScript, React basics, and AI assistance</p>
          </div>
        </div>
      </div>

      <div className={styles.quickStart}>
        <h3>Start Your Vibe Coding Journey</h3>
        <p>Begin with INTRODUCTION to understand why Carbon Compass is perfect for learning AI-assisted development</p>
        <Link to="introduction" className={styles.startButton}>
          Start with Introduction →
        </Link>
      </div>
    </div>
  );
};

export default VibeCodingGuide;