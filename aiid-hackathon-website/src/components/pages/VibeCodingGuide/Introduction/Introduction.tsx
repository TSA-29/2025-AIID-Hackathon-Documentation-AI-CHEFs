import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Introduction.module.css';

const Introduction: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/vibe-coding-guide" className={styles.backLink}>
          ← Back to Vibe Coding Guide
        </Link>
        <h1 className={styles.title}>INTRODUCTION</h1>
        <p className={styles.subtitle}>
          Why Carbon Compass is the perfect case study for learning Vibe Coding and AI-assisted development
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What is Vibe Coding?</h2>
          <p className={styles.sectionText}>
            Vibe Coding is a modern development approach that leverages AI tools like ChatGPT and Claude to accelerate 
            the software development process. Instead of writing every line of code manually, you collaborate with AI 
            assistants to generate, debug, and refine code through natural language conversations.
          </p>
          <div className={styles.highlightBox}>
            <h3>Key Benefits of Vibe Coding:</h3>
            <ul className={styles.benefitList}>
              <li>Rapid prototyping and development</li>
              <li>Learning through AI explanations</li>
              <li>Overcoming technical barriers</li>
              <li>Focus on problem-solving rather than syntax</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why Carbon Compass?</h2>
          <p className={styles.sectionText}>
            We chose Carbon Compass as our case study because it perfectly demonstrates the power of Vibe Coding for 
            building real-world applications that solve meaningful problems.
          </p>
          
          <div className={styles.reasonsGrid}>
            <div className={styles.reasonCard}>
              <div className={styles.reasonIcon}>🌍</div>
              <h3 className={styles.reasonTitle}>Real-World Impact</h3>
              <p className={styles.reasonDesc}>
                Carbon Compass addresses the EU Carbon Border Adjustment Mechanism (CBAM), a genuine regulatory 
                challenge affecting thousands of businesses. This makes the learning experience more engaging and meaningful.
              </p>
            </div>

            <div className={styles.reasonCard}>
              <div className={styles.reasonIcon}>🧮</div>
              <h3 className={styles.reasonTitle}>Complex Logic, Simple Interface</h3>
              <p className={styles.reasonDesc}>
                The project involves sophisticated carbon emission calculations but presents them through a user-friendly 
                interface - perfect for demonstrating how AI can help implement complex business logic.
              </p>
            </div>

            <div className={styles.reasonCard}>
              <div className={styles.reasonIcon}>🔗</div>
              <h3 className={styles.reasonTitle}>Multiple Components</h3>
              <p className={styles.reasonDesc}>
                Carbon Compass includes UI design, data processing, API integration, and reporting - allowing you to 
                learn various aspects of web development through AI assistance.
              </p>
            </div>

            <div className={styles.reasonCard}>
              <div className={styles.reasonIcon}>📊</div>
              <h3 className={styles.reasonTitle}>Visual Results</h3>
              <p className={styles.reasonDesc}>
                The application generates tangible reports and visualizations, providing immediate satisfaction and 
                clear learning outcomes for beginners.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What You'll Learn</h2>
          <div className={styles.learningGrid}>
            <div className={styles.learningItem}>
              <h3 className={styles.learningTitle}>🤖 AI Collaboration</h3>
              <p className={styles.learningDesc}>
                Master the art of prompting AI tools effectively for code generation, debugging, and problem-solving
              </p>
            </div>

            <div className={styles.learningItem}>
              <h3 className={styles.learningTitle}>🏗️ Web Development</h3>
              <p className={styles.learningDesc}>
                Build a complete web application with frontend, backend logic, and data processing
              </p>
            </div>

            <div className={styles.learningItem}>
              <h3 className={styles.learningTitle}>🧮 Business Logic</h3>
              <p className={styles.learningDesc}>
                Implement complex calculations and business rules with AI guidance
              </p>
            </div>

            <div className={styles.learningItem}>
              <h3 className={styles.learningTitle}>📊 Data Visualization</h3>
              <p className={styles.learningDesc}>
                Create charts, reports, and interactive visualizations for your data
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Prerequisites</h2>
          <div className={styles.prerequisites}>
            <div className={styles.prereqItem}>
              <div className={styles.prereqIcon}>💻</div>
              <h3>Basic Computer Skills</h3>
              <p>Familiarity with using web browsers and text editors</p>
            </div>

            <div className={styles.prereqItem}>
              <div className={styles.prereqIcon}>🤖</div>
              <h3>AI Tool Access</h3>
              <p>Account with ChatGPT, Claude, or similar AI assistant</p>
            </div>

            <div className={styles.prereqItem}>
              <div className={styles.prereqIcon}>🌐</div>
              <h3>Internet Connection</h3>
              <p>Stable internet for accessing AI tools and online resources</p>
            </div>

            <div className={styles.prereqItem}>
              <div className={styles.prereqIcon}>⏱️</div>
              <h3>Time Commitment</h3>
              <p>2-3 hours for complete beginners</p>
            </div>
          </div>
        </section>

        <div className={styles.videoPlaceholder}>
          <h3>Watch This Video for Vibe Coding Instructions</h3>
          <div className={styles.videoContainer}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-LFB8D9WV-g"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </div>

      <div className={styles.navigation}>
        <Link to="/vibe-coding-guide/setup" className={styles.nextButton}>
          Continue to Setup →
        </Link>
      </div>
    </div>
  );
};

export default Introduction;