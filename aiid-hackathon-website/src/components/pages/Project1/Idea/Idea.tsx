import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Idea.module.css';

const Idea: React.FC = () => {
  return (
    <div className={styles.ideaPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Project 1: Idea</h1>
          <p className={styles.subtitle}>
            Arrowista AI Content Generator: Innovative concepts, security architecture, and multi-modal design principles
          </p>
        </div>

        <div className={styles.ideaContent}>
          <section className={styles.ideaSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🎯</span>
              Core Concept
            </h2>
            <div className={styles.sectionContent}>
              <p>
                We envision building a secure, multi-modal AI content generation platform that leverages SiliconFlow's advanced models
                to assist creators in producing high-quality content. This system not only enhances creative efficiency but also
                ensures safety through comprehensive security layers, ultimately democratizing content creation for everyone.
              </p>

              <div className={styles.coreConceptDiagram}>
                <h3 className={styles.diagramTitle}>System Workflow</h3>
                <div className={styles.diagramFlow}>
                  <div className={styles.flowStep}>
                    <span className={styles.flowStepIcon}>📝</span>
                    <div className={styles.flowStepTitle}>User Input</div>
                    <p className={styles.flowStepDesc}>Creative prompt entry</p>
                  </div>
                  <div className={styles.flowStep}>
                    <span className={styles.flowStepIcon}>🔒</span>
                    <div className={styles.flowStepTitle}>Security Check</div>
                    <p className={styles.flowStepDesc}>Content moderation & validation</p>
                  </div>
                  <div className={styles.flowStep}>
                    <span className={styles.flowStepIcon}>🎨</span>
                    <div className={styles.flowStepTitle}>AI Generation</div>
                    <p className={styles.flowStepDesc}>Multi-modal content creation</p>
                  </div>
                  <div className={styles.flowStep}>
                    <span className={styles.flowStepIcon}>📥</span>
                    <div className={styles.flowStepTitle}>Content Delivery</div>
                    <p className={styles.flowStepDesc}>Secure download & sharing</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.ideaSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>💡</span>
              Innovation Highlights
            </h2>
            <div className={styles.innovationPoints}>
              <div className={styles.innovationItem}>
                <span className={styles.innovationIcon}>🔒</span>
                <h3 className={styles.innovationTitle}>Advanced Security</h3>
                <p className={styles.innovationDesc}>
                  Multi-layer content moderation with pattern-based filtering and prompt injection protection
                </p>
              </div>
              <div className={styles.innovationItem}>
                <span className={styles.innovationIcon}>🎨</span>
                <h3 className={styles.innovationTitle}>Multi-modal Generation</h3>
                <p className={styles.innovationDesc}>
                  Support for images, text, and video generation using state-of-the-art AI models
                </p>
              </div>
              <div className={styles.innovationItem}>
                <span className={styles.innovationIcon}>⚡</span>
                <h3 className={styles.innovationTitle}>Intelligent Rate Limiting</h3>
                <p className={styles.innovationDesc}>
                  IP-based rate limiting with whitelist support and graceful fallback mechanisms
                </p>
              </div>
              <div className={styles.innovationItem}>
                <span className={styles.innovationIcon}>🛡️</span>
                <h3 className={styles.innovationTitle}>Robust Error Handling</h3>
                <p className={styles.innovationDesc}>
                  Comprehensive error handling with fallback mechanisms for reliable user experience
                </p>
              </div>
            </div>
          </section>

          <section className={styles.ideaSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🛠️</span>
              Technical Architecture
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.techStack}>
                <div className={styles.techItem}>
                  <span className={styles.techIcon}>⚛️</span>
                  <div className={styles.techName}>React</div>
                  <p className={styles.techDesc}>Frontend framework</p>
                </div>
                <div className={styles.techItem}>
                  <span className={styles.techIcon}>▲</span>
                  <div className={styles.techName}>Next.js 15</div>
                  <p className={styles.techDesc}>Full-stack framework</p>
                </div>
                <div className={styles.techItem}>
                  <span className={styles.techIcon}>📘</span>
                  <div className={styles.techName}>TypeScript</div>
                  <p className={styles.techDesc}>Type safety & development</p>
                </div>
                <div className={styles.techItem}>
                  <span className={styles.techIcon}>🤖</span>
                  <div className={styles.techName}>SiliconFlow API</div>
                  <p className={styles.techDesc}>AI generation service</p>
                </div>
                <div className={styles.techItem}>
                  <span className={styles.techIcon}>🔒</span>
                  <div className={styles.techName}>Custom Security</div>
                  <p className={styles.techDesc}>Content moderation & rate limiting</p>
                </div>
                <div className={styles.techItem}>
                  <span className={styles.techIcon}>🚀</span>
                  <div className={styles.techName}>Vercel</div>
                  <p className={styles.techDesc}>Deployment platform</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.ideaSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>👥</span>
              Target Users
            </h2>
            <div className={styles.targetAudience}>
              <div className={styles.audienceSegment}>
                <span className={styles.audienceIcon}>🎨</span>
                <h3 className={styles.audienceTitle}>Content Creators</h3>
                <p className={styles.audienceDesc}>
                  Artists, designers, and creators seeking efficient ways to generate high-quality visual content
                </p>
              </div>
              <div className={styles.audienceSegment}>
                <span className={styles.audienceIcon}>💼</span>
                <h3 className={styles.audienceTitle}>Businesses</h3>
                <p className={styles.audienceDesc}>
                  Marketing teams and businesses needing cost-effective content production for campaigns and social media
                </p>
              </div>
              <div className={styles.audienceSegment}>
                <span className={styles.audienceIcon}>👨‍💻</span>
                <h3 className={styles.audienceTitle}>Developers</h3>
                <p className={styles.audienceDesc}>
                  Technical users integrating AI generation capabilities into their applications and workflows
                </p>
              </div>
            </div>
          </section>

          <section className={styles.ideaSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>📈</span>
              Value Proposition
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.valueProposition}>
                <h3 className={styles.valuePropTitle}>Core Value</h3>
                <div className={styles.valuePropList}>
                  <div className={styles.valuePropItem}>
                    <span className={styles.valuePropIcon}>✅</span>
                    <span>90% faster content creation</span>
                  </div>
                  <div className={styles.valuePropItem}>
                    <span className={styles.valuePropIcon}>✅</span>
                    <span>75% reduction in production costs</span>
                  </div>
                  <div className={styles.valuePropItem}>
                    <span className={styles.valuePropIcon}>✅</span>
                    <span>Multi-modal content support</span>
                  </div>
                  <div className={styles.valuePropItem}>
                    <span className={styles.valuePropIcon}>✅</span>
                    <span>Enterprise-grade security</span>
                  </div>
                  <div className={styles.valuePropItem}>
                    <span className={styles.valuePropIcon}>✅</span>
                    <span>24/7 availability</span>
                  </div>
                  <div className={styles.valuePropItem}>
                    <span className={styles.valuePropIcon}>✅</span>
                    <span>Comprehensive abuse prevention</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className={styles.navigationFooter}>
          <h3>Continue Exploring</h3>
          <div className={styles.navigationButtons}>
            <Link to="../background" className={`${styles.navButton} ${styles.secondaryButton}`}>
              ← Back to Background
            </Link>
            <Link to="implementation" className={`${styles.navButton} ${styles.primaryButton}`}>
              View Implementation →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Idea;
