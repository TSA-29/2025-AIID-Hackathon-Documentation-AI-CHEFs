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
            Arrowista AI Content Generator: Project background, research motivation, and security challenges
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
                In today's rapidly evolving digital content landscape, creators and businesses face significant challenges in producing
                high-quality visual content efficiently. Traditional content creation methods are time-consuming, expensive, and require
                specialized skills. This problem is particularly acute for small businesses and individual creators who lack
                the resources for professional content production.
              </p>

              <div className={styles.highlightBox}>
                <p>
                  <strong>Core Problem:</strong> How to democratize high-quality content creation while ensuring security,
                  preventing abuse, and maintaining accessibility for all users?
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
                Through comprehensive market research and data analysis, we identified several key trends in AI content generation:
              </p>

              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>85%</div>
                  <div className={styles.statLabel}>Of businesses need more visual content</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>67%</div>
                  <div className={styles.statLabel}>Content creators struggle with production costs</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>3-4 hours</div>
                  <div className={styles.statLabel}>Average time for professional content creation</div>
                </div>
              </div>

              <p>
                This data clearly indicates an urgent market need for intelligent solutions that can assist creators in content generation.
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
                During the development of our AI content generation system, we faced multiple technical challenges:
              </p>
              <ul>
                <li><strong>Content Moderation:</strong> Implementing robust filtering to prevent harmful content generation while maintaining creative freedom</li>
                <li><strong>Rate Limiting:</strong> Preventing API abuse while ensuring fair access for all users</li>
                <li><strong>Security:</strong> Protecting against prompt injection attacks and ensuring system integrity</li>
                <li><strong>API Integration:</strong> Seamless integration with SiliconFlow API while handling errors gracefully</li>
                <li><strong>Multi-modal Support:</strong> Supporting images, text, and video generation with consistent user experience</li>
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
                <li>Leveraging latest advances in AI generation models, particularly SiliconFlow's Qwen/Qwen-Image for high-quality image creation</li>
                <li>Implementing comprehensive security layers to enable safe content generation for all users</li>
                <li>Designing intuitive user interfaces that make AI content creation accessible to non-technical users</li>
                <li>Developing multi-modal support to handle images, text, and future video generation</li>
                <li>Building robust error handling and fallback mechanisms for reliable user experience</li>
              </ul>

              <div className={styles.highlightBox}>
                <p>
                  <strong>Project Vision:</strong> Democratizing quality content creation through secure AI technology,
                  bridging the creative gap between professionals and everyone.
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
