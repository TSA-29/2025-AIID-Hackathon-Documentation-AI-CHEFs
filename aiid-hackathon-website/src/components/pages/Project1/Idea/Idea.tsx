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
            Medical AI diagnosis system: Innovative concepts, technical solutions, and core design principles
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
                We envision building an intelligent medical imaging diagnosis platform that leverages deep learning to assist doctors
                in making accurate diagnoses. This system not only improves diagnostic efficiency but also continuously optimizes
                accuracy rates through continuous learning, ultimately democratizing quality healthcare resources.
              </p>

              <div className={styles.coreConceptDiagram}>
                <h3 className={styles.diagramTitle}>System Workflow</h3>
                <div className={styles.diagramFlow}>
                  <div className={styles.flowStep}>
                    <span className={styles.flowStepIcon}>📥</span>
                    <div className={styles.flowStepTitle}>Image Input</div>
                    <p className={styles.flowStepDesc}>Receive medical images</p>
                  </div>
                  <div className={styles.flowStep}>
                    <span className={styles.flowStepIcon}>🔍</span>
                    <div className={styles.flowStepTitle}>AI Analysis</div>
                    <p className={styles.flowStepDesc}>Deep learning diagnosis</p>
                  </div>
                  <div className={styles.flowStep}>
                    <span className={styles.flowStepIcon}>📊</span>
                    <div className={styles.flowStepTitle}>Result Generation</div>
                    <p className={styles.flowStepDesc}>Diagnostic report output</p>
                  </div>
                  <div className={styles.flowStep}>
                    <span className={styles.flowStepIcon}>👨‍⚕️</span>
                    <div className={styles.flowStepTitle}>Doctor Review</div>
                    <p className={styles.flowStepDesc}>Professional validation</p>
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
                <span className={styles.innovationIcon}>🧠</span>
                <h3 className={styles.innovationTitle}>Deep Learning Diagnosis</h3>
                <p className={styles.innovationDesc}>
                  CNN-based image recognition algorithms achieving 95%+ accuracy, surpassing human average performance
                </p>
              </div>
              <div className={styles.innovationItem}>
                <span className={styles.innovationIcon}>⚡</span>
                <h3 className={styles.innovationTitle}>Real-time Processing</h3>
                <p className={styles.innovationDesc}>
                  Second-level response time supporting high concurrency, meeting peak hospital usage demands
                </p>
              </div>
              <div className={styles.innovationItem}>
                <span className={styles.innovationIcon}>🔄</span>
                <h3 className={styles.innovationTitle}>Continuous Learning</h3>
                <p className={styles.innovationDesc}>
                  Model optimization through doctor feedback, enabling continuous improvement in diagnostic accuracy
                </p>
              </div>
              <div className={styles.innovationItem}>
                <span className={styles.innovationIcon}>🔗</span>
                <h3 className={styles.innovationTitle}>Seamless Integration</h3>
                <p className={styles.innovationDesc}>
                  Standardized API interfaces for easy integration with existing hospital HIS/PACS systems
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
                  <span className={styles.techIcon}>🐍</span>
                  <div className={styles.techName}>Python</div>
                  <p className={styles.techDesc}>Core development language</p>
                </div>
                <div className={styles.techItem}>
                  <span className={styles.techIcon}>🧠</span>
                  <div className={styles.techName}>PyTorch</div>
                  <p className={styles.techDesc}>Deep learning framework</p>
                </div>
                <div className={styles.techItem}>
                  <span className={styles.techIcon}>🖼️</span>
                  <div className={styles.techName}>CNN</div>
                  <p className={styles.techDesc}>Image recognition algorithm</p>
                </div>
                <div className={styles.techItem}>
                  <span className={styles.techIcon}>☁️</span>
                  <div className={styles.techName}>Docker</div>
                  <p className={styles.techDesc}>Containerized deployment</p>
                </div>
                <div className={styles.techItem}>
                  <span className={styles.techIcon}>🚀</span>
                  <div className={styles.techName}>FastAPI</div>
                  <p className={styles.techDesc}>API service framework</p>
                </div>
                <div className={styles.techItem}>
                  <span className={styles.techIcon}>💾</span>
                  <div className={styles.techName}>MongoDB</div>
                  <p className={styles.techDesc}>Data storage</p>
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
                <span className={styles.audienceIcon}>🏥</span>
                <h3 className={styles.audienceTitle}>Primary Healthcare</h3>
                <p className={styles.audienceDesc}>
                  Community hospitals and clinics lacking specialized radiologists, enhancing diagnostic capabilities through AI assistance
                </p>
              </div>
              <div className={styles.audienceSegment}>
                <span className={styles.audienceIcon}>👨‍⚕️</span>
                <h3 className={styles.audienceTitle}>Radiologists</h3>
                <p className={styles.audienceDesc}>
                  Improving diagnostic efficiency, reducing repetitive work, focusing on complex cases
                </p>
              </div>
              <div className={styles.audienceSegment}>
                <span className={styles.audienceIcon}>🏢</span>
                <h3 className={styles.audienceTitle}>Large Hospitals</h3>
                <p className={styles.audienceDesc}>
                  Processing massive imaging data, optimizing workflows, enhancing overall healthcare service quality
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
                    <span>30% improvement in diagnostic accuracy</span>
                  </div>
                  <div className={styles.valuePropItem}>
                    <span className={styles.valuePropIcon}>✅</span>
                    <span>80% reduction in diagnosis time</span>
                  </div>
                  <div className={styles.valuePropItem}>
                    <span className={styles.valuePropIcon}>✅</span>
                    <span>50% reduction in healthcare costs</span>
                  </div>
                  <div className={styles.valuePropItem}>
                    <span className={styles.valuePropIcon}>✅</span>
                    <span>Coverage of remote areas</span>
                  </div>
                  <div className={styles.valuePropItem}>
                    <span className={styles.valuePropIcon}>✅</span>
                    <span>24/7 uninterrupted service</span>
                  </div>
                  <div className={styles.valuePropItem}>
                    <span className={styles.valuePropIcon}>✅</span>
                    <span>Continuous learning optimization</span>
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
