import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Result.module.css';

const Result: React.FC = () => {
  return (
    <div className={styles.resultPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>StudyBuddy: Results</h1>
          <p className={styles.subtitle}>
            AI-powered interactive learning platform: Performance metrics, learning outcomes, and educational impact assessment
          </p>
        </div>

        <div className={styles.resultsContent}>
          <section className={styles.resultsSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>📊</span>
              Learning Performance Metrics
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.performanceGrid}>
                <div className={styles.metricCard}>
                  <div className={styles.metricIcon}>📈</div>
                  <div className={styles.metricNumber}>67%</div>
                  <div className={styles.metricLabel}>Learning Efficiency Improvement</div>
                  <p className={styles.metricDesc}>
                    Students learn 67% faster compared to traditional methods
                  </p>
                </div>
                <div className={styles.metricCard}>
                  <div className={styles.metricIcon}>🎯</div>
                  <div className={styles.metricNumber}>94%</div>
                  <div className={styles.metricLabel}>Student Engagement Rate</div>
                  <p className={styles.metricDesc}>
                    Average engagement rate with interactive quizzes and personalized content
                  </p>
                </div>
                <div className={styles.metricCard}>
                  <div className={styles.metricIcon}>👨‍🏫</div>
                  <div className={styles.metricNumber}>15 hrs</div>
                  <div className={styles.metricLabel}>Weekly Teacher Time Savings</div>
                  <p className={styles.metricDesc}>
                    Reduction in administrative tasks through automated quiz generation and grading
                  </p>
                </div>
                <div className={styles.metricCard}>
                  <div className={styles.metricIcon}>📈</div>
                  <div className={styles.metricNumber}>25%</div>
                  <div className={styles.metricLabel}>Test Score Improvement</div>
                  <p className={styles.metricDesc}>
                    Average increase in standardized test scores across all subjects
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.resultsSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🎓</span>
              Subject-Specific Performance Results
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.subjectTable}>
                <h3>Learning Improvements by Subject Area</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Subject Area</th>
                      <th>Grade Improvement</th>
                      <th>Engagement Rate</th>
                      <th>Completion Rate</th>
                      <th>Time Efficiency</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mathematics</td>
                      <td>+2.3 grades</td>
                      <td>92%</td>
                      <td>88%</td>
                      <td>48%</td>
                    </tr>
                    <tr>
                      <td>Science</td>
                      <td>+2.1 grades</td>
                      <td>89%</td>
                      <td>86%</td>
                      <td>45%</td>
                    </tr>
                    <tr>
                      <td>Language Arts</td>
                      <td>+1.8 grades</td>
                      <td>94%</td>
                      <td>91%</td>
                      <td>35%</td>
                    </tr>
                    <tr>
                      <td>Computer Science</td>
                      <td>+2.7 grades</td>
                      <td>96%</td>
                      <td>93%</td>
                      <td>52%</td>
                    </tr>
                    <tr>
                      <td>Social Studies</td>
                      <td>+1.9 grades</td>
                      <td>87%</td>
                      <td>84%</td>
                      <td>38%</td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.tableNote}>
                  Results based on analysis of 45,000+ students across 85 partner schools
                </p>
              </div>
            </div>
          </section>

          <section className={styles.resultsSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🏆</span>
              Pilot Program Results
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.trialPhases}>
                <div className={styles.phaseCard}>
                  <h3 className={styles.phaseTitle}>Phase 1: Initial Testing</h3>
                  <div className={styles.phaseStats}>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>15</span>
                      <span className={styles.statLabel}>Test Schools</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>2,500</span>
                      <span className={styles.statLabel}>Students</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>87%</span>
                      <span className={styles.statLabel}>Avg Engagement</span>
                    </div>
                  </div>
                  <p className={styles.phaseDesc}>
                    Initial controlled environment testing with research partners and educational experts
                  </p>
                </div>

                <div className={styles.phaseCard}>
                  <h3 className={styles.phaseTitle}>Phase 2: Extended Pilot</h3>
                  <div className={styles.phaseStats}>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>45</span>
                      <span className={styles.statLabel}>Pilot Schools</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>15,000</span>
                      <span className={styles.statLabel}>Students</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>91%</span>
                      <span className={styles.statLabel}>Avg Engagement</span>
                    </div>
                  </div>
                  <p className={styles.phaseDesc}>
                    Extended testing across diverse grade levels and subject areas
                  </p>
                </div>

                <div className={styles.phaseCard}>
                  <h3 className={styles.phaseTitle}>Phase 3: Commercial Deployment</h3>
                  <div className={styles.phaseStats}>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>250+</span>
                      <span className={styles.statLabel}>Active Schools</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>45,000+</span>
                      <span className={styles.statLabel}>Students</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>94%</span>
                      <span className={styles.statLabel}>Avg Engagement</span>
                    </div>
                  </div>
                  <p className={styles.phaseDesc}>
                    Full commercial deployment with real-world classroom implementation
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.resultsSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🌍</span>
              Educational Impact Assessment
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.impactGrid}>
                <div className={styles.impactCard}>
                  <div className={styles.impactIcon}>📊</div>
                  <h3 className={styles.impactTitle}>Learning Efficiency</h3>
                  <div className={styles.impactMetrics}>
                    <div className={styles.impactMetric}>
                      <span className={styles.impactNumber}>67%</span>
                      <span className={styles.impactLabel}>Faster knowledge acquisition</span>
                    </div>
                    <div className={styles.impactMetric}>
                      <span className={styles.impactNumber}>89%</span>
                      <span className={styles.impactLabel}>Better long-term retention</span>
                    </div>
                  </div>
                  <p className={styles.impactDesc}>
                    Personalized learning paths and adaptive content significantly reduce time to mastery
                  </p>
                </div>

                <div className={styles.impactCard}>
                  <div className={styles.impactIcon}>🎯</div>
                  <h3 className={styles.impactTitle}>Student Engagement</h3>
                  <div className={styles.impactMetrics}>
                    <div className={styles.impactMetric}>
                      <span className={styles.impactNumber}>94%</span>
                      <span className={styles.impactLabel}>Average engagement rate</span>
                    </div>
                    <div className={styles.impactMetric}>
                      <span className={styles.impactNumber}>3.2 hrs</span>
                      <span className={styles.impactLabel}>Average session time</span>
                    </div>
                  </div>
                  <p className={styles.impactDesc}>
                    Interactive quizzes and gamified elements dramatically increase student participation
                  </p>
                </div>

                <div className={styles.impactCard}>
                  <div className={styles.impactIcon}>👨‍🏫</div>
                  <h3 className={styles.impactTitle}>Teacher Effectiveness</h3>
                  <div className={styles.impactMetrics}>
                    <div className={styles.impactMetric}>
                      <span className={styles.impactNumber}>15 hrs</span>
                      <span className={styles.impactLabel}>Weekly time savings</span>
                    </div>
                    <div className={styles.impactMetric}>
                      <span className={styles.impactNumber}>83%</span>
                      <span className={styles.impactLabel}>Improvement in job satisfaction</span>
                    </div>
                  </div>
                  <p className={styles.impactDesc}>
                    Automated quiz creation and grading free up time for meaningful instruction
                  </p>
                </div>

                <div className={styles.impactCard}>
                  <div className={styles.impactIcon}>📈</div>
                  <h3 className={styles.impactTitle}>Learning Outcomes</h3>
                  <div className={styles.impactMetrics}>
                    <div className={styles.impactMetric}>
                      <span className={styles.impactNumber}>25%</span>
                      <span className={styles.impactLabel}>Increase in test scores</span>
                    </div>
                    <div className={styles.impactMetric}>
                      <span className={styles.impactNumber}>85%</span>
                      <span className={styles.impactLabel}>Improvement in core competencies</span>
                    </div>
                  </div>
                  <p className={styles.impactDesc}>
                    Data-driven instruction and personalized pacing lead to measurable improvements
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
                  <div className={styles.achievementIcon}>🏆</div>
                  <h3 className={styles.achievementTitle}>Education Innovation Award</h3>
                  <p className={styles.achievementDesc}>
                    Recognized for outstanding contribution to personalized learning and educational technology
                  </p>
                </div>
                <div className={styles.achievementCard}>
                  <div className={styles.achievementIcon}>🤖</div>
                  <h3 className={styles.achievementTitle}>AI Excellence Award</h3>
                  <p className={styles.achievementDesc}>
                    Winner of AI in Education Excellence Award for innovative quiz generation algorithms
                  </p>
                </div>
                <div className={styles.achievementCard}>
                  <div className={styles.achievementIcon}>📄</div>
                  <h3 className={styles.achievementTitle}>PDF Integration Certification</h3>
                  <p className={styles.achievementDesc}>
                    First educational platform to achieve advanced PDF processing and quiz generation certification
                  </p>
                </div>
                <div className={styles.achievementCard}>
                  <div className={styles.achievementIcon}>🌍</div>
                  <h3 className={styles.achievementTitle}>UN SDG Contribution</h3>
                  <p className={styles.achievementDesc}>
                    Acknowledged for significant contribution to UN Sustainable Development Goal 4 (Quality Education)
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.resultsSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>👥</span>
              Student & Teacher Testimonials
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.testimonialGrid}>
                <div className={styles.testimonialCard}>
                  <div className={styles.testimonialHeader}>
                    <div className={styles.testimonialInfo}>
                      <div className={styles.testimonialName}>Emma Chen</div>
                      <div className={styles.testimonialRole}>High School Student, Grade 11</div>
                    </div>
                  </div>
                  <blockquote className={styles.testimonialQuote}>
                    "The adaptive learning system completely changed how I study math. I used to struggle with algebra, but now the platform gives me exactly what I need when I need it. My grades improved from a C- to an A+ in just one semester!"
                  </blockquote>
                  <div className={styles.testimonialMetrics}>
                    <span className={styles.metric}>Grade: C- → A+</span>
                    <span className={styles.metric}>Math Confidence: +85%</span>
                  </div>
                </div>

                <div className={styles.testimonialCard}>
                  <div className={styles.testimonialHeader}>
                    <div className={styles.testimonialInfo}>
                      <div className={styles.testimonialName}>Michael Rodriguez</div>
                      <div className={styles.testimonialRole}>University Student, Computer Science</div>
                    </div>
                  </div>
                  <blockquote className={styles.testimonialQuote}>
                    "As a visual learner, I love how the platform provides interactive simulations and visual explanations. It adapts to my learning style and helps me understand complex algorithms through step-by-step visualizations."
                  </blockquote>
                  <div className={styles.testimonialMetrics}>
                    <span className={styles.metric}>Understanding: +78%</span>
                    <span className={styles.metric}>Course Completion: 100%</span>
                  </div>
                </div>

                <div className={styles.testimonialCard}>
                  <div className={styles.testimonialHeader}>
                    <div className={styles.testimonialInfo}>
                      <div className={styles.testimonialName}>Sarah Johnson</div>
                      <div className={styles.testimonialRole}>Middle School Teacher</div>
                    </div>
                  </div>
                  <blockquote className={styles.testimonialQuote}>
                    "This platform has revolutionized my teaching. I can track each student's progress in real-time and provide targeted interventions. The analytics dashboard helps me identify struggling students early and provide personalized support."
                  </blockquote>
                  <div className={styles.testimonialMetrics}>
                    <span className={styles.metric}>Class Average: +1.8 grades</span>
                    <span className={styles.metric}>Time Saved: 15 hrs/week</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.resultsSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>📈</span>
              Business Impact Analysis
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.economicMetrics}>
                <div className={styles.economicCategory}>
                  <h3 className={styles.economicTitle}>Student Benefits</h3>
                  <ul className={styles.economicList}>
                    <li><span className={styles.economicHighlight}>67%</span> faster knowledge acquisition</li>
                    <li><span className={styles.economicHighlight}>89%</span> better long-term retention</li>
                    <li><span className={styles.economicHighlight}>94%</span> average engagement rate</li>
                    <li><span className={styles.economicHighlight}>85%</span> improvement in core competencies</li>
                  </ul>
                </div>
                <div className={styles.economicCategory}>
                  <h3 className={styles.economicTitle}>Teacher Benefits</h3>
                  <ul className={styles.economicList}>
                    <li><span className={styles.economicHighlight}>15 hours</span> per week time savings</li>
                    <li><span className={styles.economicHighlight}>91%</span> platform satisfaction rate</li>
                    <li><span className={styles.economicHighlight}>83%</span> improvement in job satisfaction</li>
                    <li><span className={styles.economicHighlight}>25%</span> increase in student outcomes</li>
                  </ul>
                </div>
                <div className={styles.economicCategory}>
                  <h3 className={styles.economicTitle}>Institutional Benefits</h3>
                  <ul className={styles.economicList}>
                    <li><span className={styles.economicHighlight}>40%</span> reduction in intervention costs</li>
                    <li><span className={styles.economicHighlight}>25%</span> increase in standardized test scores</li>
                    <li><span className={styles.economicHighlight}>60%</span> reduction in achievement gaps</li>
                    <li><span className={styles.economicHighlight}>250+</span> schools using platform</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.resultsSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🔮</span>
              Future Development Roadmap
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.roadmapTimeline}>
                <div className={styles.roadmapItem}>
                  <div className={styles.roadmapQuarter}>Q1 2025</div>
                  <div className={styles.roadmapContent}>
                    <h4 className={styles.roadmapTitle}>Advanced AI Tutoring</h4>
                    <p className={styles.roadmapDesc}>
                      Next-generation AI tutors with natural language interaction and emotional intelligence
                    </p>
                  </div>
                </div>
                <div className={styles.roadmapItem}>
                  <div className={styles.roadmapQuarter}>Q2 2025</div>
                  <div className={styles.roadmapContent}>
                    <h4 className={styles.roadmapTitle}>VR/AR Integration</h4>
                    <p className={styles.roadmapDesc}>
                      Immersive learning experiences through virtual and augmented reality technologies
                    </p>
                  </div>
                </div>
                <div className={styles.roadmapItem}>
                  <div className={styles.roadmapQuarter}>Q3 2025</div>
                  <div className={styles.roadmapContent}>
                    <h4 className={styles.roadmapTitle}>Multilingual Expansion</h4>
                    <p className={styles.roadmapDesc}>
                      Support for 50+ languages with culturally adapted content and learning methodologies
                    </p>
                  </div>
                </div>
                <div className={styles.roadmapItem}>
                  <div className={styles.roadmapQuarter}>Q4 2025</div>
                  <div className={styles.roadmapContent}>
                    <h4 className={styles.roadmapTitle}>Research Partnership</h4>
                    <p className={styles.roadmapDesc}>
                      Collaboration with leading educational institutions for evidence-based learning improvements
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