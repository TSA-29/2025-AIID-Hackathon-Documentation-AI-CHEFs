import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Background.module.css';

const Background: React.FC = () => {
  return (
    <div className={styles.backgroundPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Project 1: Background</h1>
          <p className={styles.subtitle}>
            Medical AI diagnosis system: Project background, research motivation, and challenge analysis
          </p>
        </div>

        <div className={styles.backgroundContent}>
          <section className={styles.backgroundSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🎯</span>
              Problem Statement
            </h2>
            <div className={styles.sectionContent}>
              <p>
                In today's rapidly evolving medical technology landscape, traditional diagnostic methods face significant challenges.
                Doctors process vast amounts of medical imaging daily, making manual diagnosis not only time-consuming but also
                prone to errors due to fatigue. This problem is particularly acute in primary healthcare facilities where the
                shortage of specialized radiologists makes the situation even more critical.
              </p>

              <div className={styles.highlightBox}>
                <p>
                  <strong>Core Problem:</strong> How to significantly improve the efficiency and accessibility of medical
                  imaging diagnosis while maintaining high accuracy rates?
                </p>
              </div>
            </div>
          </section>

          <section className={styles.backgroundSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>📊</span>
              Market Research
            </h2>
            <div className={styles.sectionContent}>
              <p>
                Through comprehensive market research and data analysis, we identified several key trends in medical imaging diagnosis:
              </p>

              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>73%</div>
                  <div className={styles.statLabel}>Primary hospitals lack specialized radiologists</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>40%</div>
                  <div className={styles.statLabel}>Diagnostic errors stem from fatigue and inexperience</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>3-5 days</div>
                  <div className={styles.statLabel}>Average waiting time for traditional diagnosis</div>
                </div>
              </div>

              <p>
                This data clearly indicates an urgent market need for intelligent solutions that can assist doctors in imaging diagnosis.
              </p>
            </div>
          </section>

          <section className={styles.backgroundSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>⚡</span>
              Technical Challenges
            </h2>
            <div className={styles.sectionContent}>
              <p>
                During the development of our medical AI diagnosis system, we faced multiple technical challenges:
              </p>
              <ul>
                <li><strong>Data Quality & Privacy:</strong> Medical imaging data acquisition requires strict privacy protection and ethical review</li>
                <li><strong>Model Accuracy:</strong> Achieving clinical-grade diagnostic accuracy is extremely demanding</li>
                <li><strong>Real-time Requirements:</strong> Diagnosis must be completed in seconds to avoid disrupting clinical workflows</li>
                <li><strong>Explainability:</strong> AI decision-making processes need transparency for doctor understanding and trust</li>
                <li><strong>System Integration:</strong> Seamless integration with existing hospital information systems (HIS/PACS) is essential</li>
              </ul>
            </div>
          </section>

          <section className={styles.backgroundSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>💡</span>
              Opportunity Analysis
            </h2>
            <div className={styles.sectionContent}>
              <p>
                By thoroughly analyzing these challenges, we identified unique opportunities to create a comprehensive solution:
              </p>
              <ul>
                <li>Leveraging latest advances in deep learning, particularly breakthroughs in Convolutional Neural Networks (CNN) for image recognition</li>
                <li>Combining transfer learning to achieve high accuracy with relatively limited data</li>
                <li>Designing Explainable AI (XAI) frameworks to enhance doctor trust in AI diagnostic results</li>
                <li>Developing cloud-based SaaS models to reduce adoption barriers for primary healthcare facilities</li>
                <li>Building continuous learning mechanisms for ongoing model optimization during use</li>
              </ul>

              <div className={styles.highlightBox}>
                <p>
                  <strong>Project Vision:</strong> Democratizing quality medical diagnostic services through AI technology,
                  bridging the healthcare gap between urban and rural areas.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className={styles.navigationFooter}>
          <h3>Continue Exploring</h3>
          <div className={styles.navigationButtons}>
            <Link to="../project1" className={`${styles.navButton} ${styles.secondaryButton}`}>
              ← Back to Project Overview
            </Link>
            <Link to="idea" className={`${styles.navButton} ${styles.primaryButton}`}>
              Explore Project Idea →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
