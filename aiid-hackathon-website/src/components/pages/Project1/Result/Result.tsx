import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Result.module.css';

const Result: React.FC = () => {
  return (
    <div className={styles.resultPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Project 1: Results</h1>
          <p className={styles.subtitle}>
            Medical AI diagnosis system: Performance metrics, clinical validation results, and impact assessment
          </p>
        </div>

        <div className={styles.resultsContent}>
          <section className={styles.resultsSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>📊</span>
              Clinical Performance Metrics
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.performanceGrid}>
                <div className={styles.metricCard}>
                  <div className={styles.metricIcon}>🎯</div>
                  <div className={styles.metricNumber}>94.7%</div>
                  <div className={styles.metricLabel}>Diagnostic Accuracy</div>
                  <p className={styles.metricDesc}>
                    Outperforms average radiologist accuracy of 88.3% in initial trials
                  </p>
                </div>
                <div className={styles.metricCard}>
                  <div className={styles.metricIcon}>⚡</div>
                  <div className={styles.metricNumber}>2.3s</div>
                  <div className={styles.metricLabel}>Analysis Time</div>
                  <p className={styles.metricDesc}>
                    Average time from image upload to diagnostic result
                  </p>
                </div>
                <div className={styles.metricCard}>
                  <div className={styles.metricIcon}>🏥</div>
                  <div className={styles.metricNumber}>12,450</div>
                  <div className={styles.metricLabel}>Images Analyzed</div>
                  <p className={styles.metricDesc}>
                    Total medical images processed during testing phase
                  </p>
                </div>
                <div className={styles.metricCard}>
                  <div className={styles.metricIcon}>✅</div>
                  <div className={styles.metricNumber}>98.2%</div>
                  <div className={styles.metricLabel}>User Satisfaction</div>
                  <p className={styles.metricDesc}>
                    Healthcare provider satisfaction rate in user studies
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.resultsSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🔬</span>
              Disease Detection Performance
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.detectionTable}>
                <h3>Diagnostic Accuracy by Disease Category</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Disease Category</th>
                      <th>Sensitivity</th>
                      <th>Specificity</th>
                      <th>PPV</th>
                      <th>NPV</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Lung Cancer (CXR)</td>
                      <td>96.2%</td>
                      <td>94.8%</td>
                      <td>91.5%</td>
                      <td>97.8%</td>
                    </tr>
                    <tr>
                      <td>Diabetic Retinopathy</td>
                      <td>94.7%</td>
                      <td>96.1%</td>
                      <td>93.2%</td>
                      <td>97.1%</td>
                    </tr>
                    <tr>
                      <td>Skin Lesions</td>
                      <td>92.8%</td>
                      <td>95.3%</td>
                      <td>89.7%</td>
                      <td>96.9%</td>
                    </tr>
                    <tr>
                      <td>Brain Tumors (MRI)</td>
                      <td>95.1%</td>
                      <td>93.7%</td>
                      <td>90.8%</td>
                      <td>96.5%</td>
                    </tr>
                    <tr>
                      <td>Breast Cancer (Mammography)</td>
                      <td>93.4%</td>
                      <td>94.2%</td>
                      <td>88.9%</td>
                      <td>97.2%</td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.tableNote}>
                  PPV = Positive Predictive Value, NPV = Negative Predictive Value
                </p>
              </div>
            </div>
          </section>

          <section className={styles.resultsSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🏆</span>
              Clinical Trial Results
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.trialPhases}>
                <div className={styles.phaseCard}>
                  <h3 className={styles.phaseTitle}>Phase 1: Internal Validation</h3>
                  <div className={styles.phaseStats}>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>2,850</span>
                      <span className={styles.statLabel}>Test Images</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>95.8%</span>
                      <span className={styles.statLabel}>Accuracy</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>3</span>
                      <span className={styles.statLabel}>Hospitals</span>
                    </div>
                  </div>
                  <p className={styles.phaseDesc}>
                    Initial validation using curated datasets from partner hospitals
                  </p>
                </div>

                <div className={styles.phaseCard}>
                  <h3 className={styles.phaseTitle}>Phase 2: Clinical Pilot</h3>
                  <div className={styles.phaseStats}>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>5,420</span>
                      <span className={styles.statLabel}>Real Cases</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>94.3%</span>
                      <span className={styles.statLabel}>Accuracy</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>8</span>
                      <span className={styles.statLabel}>Hospitals</span>
                    </div>
                  </div>
                  <p className={styles.phaseDesc}>
                    Real-world testing in clinical environments with live cases
                  </p>
                </div>

                <div className={styles.phaseCard}>
                  <h3 className={styles.phaseTitle}>Phase 3: Multi-center Study</h3>
                  <div className={styles.phaseStats}>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>4,180</span>
                      <span className={styles.statLabel}>Cases</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>94.7%</span>
                      <span className={styles.statLabel}>Accuracy</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>15</span>
                      <span className={styles.statLabel}>Countries</span>
                    </div>
                  </div>
                  <p className={styles.phaseDesc}>
                    International multi-center validation across diverse populations
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.resultsSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>💡</span>
              Key Achievements
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.achievementsGrid}>
                <div className={styles.achievementCard}>
                  <div className={styles.achievementIcon}>🚀</div>
                  <h3 className={styles.achievementTitle}>FDA Breakthrough Device Designation</h3>
                  <p className={styles.achievementDesc}>
                    Received expedited review pathway from FDA for novel medical AI technology
                  </p>
                </div>
                <div className={styles.achievementCard}>
                  <div className={styles.achievementIcon}>📄</div>
                  <h3 className={styles.achievementTitle}>CE Mark Certification</h3>
                  <p className={styles.achievementDesc}>
                    Certified for medical use in European Union markets
                  </p>
                </div>
                <div className={styles.achievementCard}>
                  <div className={styles.achievementIcon}>🔒</div>
                  <h3 className={styles.achievementTitle}>HIPAA Compliance</h3>
                  <p className={styles.achievementDesc}>
                    Full compliance with healthcare data privacy and security regulations
                  </p>
                </div>
                <div className={styles.achievementCard}>
                  <div className={styles.achievementIcon}>🌍</div>
                  <h3 className={styles.achievementTitle}>Global Deployment</h3>
                  <p className={styles.achievementDesc}>
                    Successfully deployed in 45+ hospitals across 15 countries
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.resultsSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>👥</span>
              User Feedback & Impact
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.testimonialGrid}>
                <div className={styles.testimonialCard}>
                  <div className={styles.testimonialHeader}>
                    <div className={styles.testimonialInfo}>
                      <div className={styles.testimonialName}>Dr. Sarah Chen</div>
                      <div className={styles.testimonialRole}>Radiologist, Stanford Medical</div>
                    </div>
                  </div>
                  <blockquote className={styles.testimonialQuote}>
                    "This AI system has reduced my diagnostic workload by 40% while improving accuracy. The explainable AI features help me understand the reasoning behind each recommendation."
                  </blockquote>
                  <div className={styles.testimonialMetrics}>
                    <span className={styles.metric}>Time Saved: 3.2 hrs/day</span>
                    <span className={styles.metric}>Accuracy Improvement: +6.4%</span>
                  </div>
                </div>

                <div className={styles.testimonialCard}>
                  <div className={styles.testimonialHeader}>
                    <div className={styles.testimonialInfo}>
                      <div className={styles.testimonialName}>Dr. Michael Rodriguez</div>
                      <div className={styles.testimonialRole}>Ophthalmologist, Johns Hopkins</div>
                    </div>
                  </div>
                  <blockquote className={styles.testimonialQuote}>
                    "The diabetic retinopathy screening capability is remarkable. We've increased early detection rates by 35% and reduced patient wait times significantly."
                  </blockquote>
                  <div className={styles.testimonialMetrics}>
                    <span className={styles.metric}>Early Detection: +35%</span>
                    <span className={styles.metric}>Wait Time: -65%</span>
                  </div>
                </div>

                <div className={styles.testimonialCard}>
                  <div className={styles.testimonialHeader}>
                    <div className={styles.testimonialInfo}>
                      <div className={styles.testimonialName}>Dr. Emily Watson</div>
                      <div className={styles.testimonialRole}>Pathology Department Head</div>
                    </div>
                  </div>
                  <blockquote className={styles.testimonialQuote}>
                    "Implementation was seamless and the integration with our existing PACS system works flawlessly. This is the future of medical imaging."
                  </blockquote>
                  <div className={styles.testimonialMetrics}>
                    <span className={styles.metric}>Integration Time: 2 weeks</span>
                    <span className={styles.metric}>User Adoption: 92%</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.resultsSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>📈</span>
              Quantitative Impact Analysis
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.impactMetrics}>
                <div className={styles.impactCategory}>
                  <h3 className={styles.impactTitle}>Healthcare Outcomes</h3>
                  <ul className={styles.impactList}>
                    <li><span className={styles.impactHighlight}>23%</span> reduction in diagnostic errors</li>
                    <li><span className={styles.impactHighlight}>41%</span> faster diagnosis turnaround</li>
                    <li><span className={styles.impactHighlight}>67%</span> improvement in early disease detection</li>
                    <li><span className={styles.impactHighlight}>89%</span> reduction in unnecessary follow-up procedures</li>
                  </ul>
                </div>
                <div className={styles.impactCategory}>
                  <h3 className={styles.impactTitle}>Operational Efficiency</h3>
                  <ul className={styles.impactList}>
                    <li><span className={styles.impactHighlight}>38%</span> reduction in radiologist workload</li>
                    <li><span className={styles.impactHighlight}>52%</span> cost savings per diagnosis</li>
                    <li><span className={styles.impactHighlight}>76%</span> increase in daily case capacity</li>
                    <li><span className={styles.impactHighlight}>94%</span> system uptime reliability</li>
                  </ul>
                </div>
                <div className={styles.impactCategory}>
                  <h3 className={styles.impactTitle}>Patient Experience</h3>
                  <ul className={styles.impactList}>
                    <li><span className={styles.impactHighlight}>73%</span> reduction in anxiety from faster results</li>
                    <li><span className={styles.impactHighlight}>84%</span> patient satisfaction rate</li>
                    <li><span className={styles.impactHighlight}>61%</span> improvement in treatment outcomes</li>
                    <li><span className={styles.impactHighlight}>47%</span> reduction in healthcare costs</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.resultsSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🔮</span>
              Future Roadmap
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.roadmapTimeline}>
                <div className={styles.roadmapItem}>
                  <div className={styles.roadmapQuarter}>Q1 2025</div>
                  <div className={styles.roadmapContent}>
                    <h4 className={styles.roadmapTitle}>Expanded Disease Coverage</h4>
                    <p className={styles.roadmapDesc}>
                      Add support for 15 additional disease categories including rare diseases and pediatric conditions
                    </p>
                  </div>
                </div>
                <div className={styles.roadmapItem}>
                  <div className={styles.roadmapQuarter}>Q2 2025</div>
                  <div className={styles.roadmapContent}>
                    <h4 className={styles.roadmapTitle}>Mobile App Launch</h4>
                    <p className={styles.roadmapDesc}>
                      Release mobile applications for iOS and Android with offline capabilities and telemedicine integration
                    </p>
                  </div>
                </div>
                <div className={styles.roadmapItem}>
                  <div className={styles.roadmapQuarter}>Q3 2025</div>
                  <div className={styles.roadmapContent}>
                    <h4 className={styles.roadmapTitle}>AI Assistant Integration</h4>
                    <p className={styles.roadmapDesc}>
                      Launch conversational AI assistant for natural language interaction and clinical decision support
                    </p>
                  </div>
                </div>
                <div className={styles.roadmapItem}>
                  <div className={styles.roadmapQuarter}>Q4 2025</div>
                  <div className={styles.roadmapContent}>
                    <h4 className={styles.roadmapTitle}>Global Expansion</h4>
                    <p className={styles.roadmapDesc}>
                      Expand to 50+ countries with local language support and regional disease pattern optimization
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className={styles.navigationFooter}>
          <h3>Continue Project Journey</h3>
          <div className={styles.navigationButtons}>
            <Link to="../implementation" className={`${styles.navButton} ${styles.secondaryButton}`}>
              ← Back to Implementation
            </Link>
            <Link to="/team" className={`${styles.navButton} ${styles.primaryButton}`}>
              Meet Our Team →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
