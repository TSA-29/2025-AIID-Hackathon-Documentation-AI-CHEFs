import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Result.module.css';

const Result: React.FC = () => {
  return (
    <div className={styles.resultPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Project 3: Results</h1>
          <p className={styles.subtitle}>
            Educational AI platform: Performance metrics, learning outcomes, and educational impact assessment
          </p>
        </div>

        <div className={styles.resultsContent}>
          <section className={styles.resultsSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>📊</span>
              Educational Performance Metrics
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
                  <div className={styles.metricNumber}>89%</div>
                  <div className={styles.metricLabel}>Knowledge Retention Rate</div>
                  <p className={styles.metricDesc}>
                    Average knowledge retention after 30 days
                  </p>
                </div>
                <div className={styles.metricCard}>
                  <div className={styles.metricIcon}>⏱️</div>
                  <div className={styles.metricNumber}>42%</div>
                  <div className={styles.metricLabel}>Time Saved Per Course</div>
                  <p className={styles.metricDesc}>
                    Average reduction in course completion time
                  </p>
                </div>
                <div className={styles.metricCard}>
                  <div className={styles.metricIcon}>😊</div>
                  <div className={styles.metricNumber}>95%</div>
                  <div className={styles.metricLabel}>Student Satisfaction</div>
                  <p className={styles.metricDesc}>
                    Student satisfaction rate with personalized learning experience
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.resultsSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🎓</span>
              Learning Outcomes by Subject
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.improvementTable}>
                <h3>Performance Improvement by Subject Area</h3>
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
              <span className={styles.sectionIcon}>💡</span>
              Student Learning Outcomes
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.learningOutcomes}>
                <div className={styles.outcomeCard}>
                  <div className={styles.outcomeIcon}>🧠</div>
                  <h3 className={styles.outcomeTitle}>Adaptive Learning Mastery</h3>
                  <p className={styles.outcomeDesc}>
                    Students develop mastery at their own pace with personalized difficulty adjustments and content recommendations
                  </p>
                </div>

                <div className={styles.outcomeCard}>
                  <div className={styles.outcomeIcon}>🎯</div>
                  <h3 className={styles.outcomeTitle}>Self-Directed Learning</h3>
                  <p className={styles.outcomeDesc}>
                    Enhanced ability to identify learning gaps and independently seek appropriate resources and support
                  </p>
                </div>

                <div className={styles.outcomeCard}>
                  <div className={styles.outcomeIcon}>📊</div>
                  <h3 className={styles.outcomeTitle}>Data-Driven Insights</h3>
                  <p className={styles.outcomeDesc}>
                    Students learn to analyze their own performance data and make informed decisions about study strategies
                  </p>
                </div>

                <div className={styles.outcomeCard}>
                  <div className={styles.outcomeIcon}>🌐</div>
                  <h3 className={styles.outcomeTitle}>Digital Literacy</h3>
                  <p className={styles.outcomeDesc}>
                    Improved technology skills and digital citizenship through integrated platform usage
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.resultsSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>👥</span>
              Student & Teacher Feedback
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.studentFeedback}>
                <div className={styles.feedbackCard}>
                  <div className={styles.feedbackHeader}>
                    <div className={styles.feedbackInfo}>
                      <div className={styles.feedbackName}>Emma Chen</div>
                      <div className={styles.feedbackRole}>High School Student, Grade 11</div>
                    </div>
                  </div>
                  <blockquote className={styles.feedbackQuote}>
                    "The adaptive learning system completely changed how I study math. I used to struggle with algebra, but now the platform gives me exactly what I need when I need it. My grades improved from a C- to an A+ in just one semester!"
                  </blockquote>
                  <div className={styles.feedbackMetrics}>
                    <span className={styles.metric}>Grade: C- → A+</span>
                    <span className={styles.metric}>Math Confidence: +85%</span>
                  </div>
                </div>

                <div className={styles.feedbackCard}>
                  <div className={styles.feedbackHeader}>
                    <div className={styles.feedbackInfo}>
                      <div className={styles.feedbackName}>Michael Rodriguez</div>
                      <div className={styles.feedbackRole}>University Student, Computer Science</div>
                    </div>
                  </div>
                  <blockquote className={styles.feedbackQuote}>
                    "As a visual learner, I love how the platform provides interactive simulations and visual explanations. It adapts to my learning style and helps me understand complex algorithms through step-by-step visualizations."
                  </blockquote>
                  <div className={styles.feedbackMetrics}>
                    <span className={styles.metric}>Understanding: +78%</span>
                    <span className={styles.metric}>Course Completion: 100%</span>
                  </div>
                </div>

                <div className={styles.feedbackCard}>
                  <div className={styles.feedbackHeader}>
                    <div className={styles.feedbackInfo}>
                      <div className={styles.feedbackName}>Sarah Johnson</div>
                      <div className={styles.feedbackRole}>Middle School Teacher</div>
                    </div>
                  </div>
                  <blockquote className={styles.feedbackQuote}>
                    "This platform has revolutionized my teaching. I can track each student's progress in real-time and provide targeted interventions. The analytics dashboard helps me identify struggling students early and provide personalized support."
                  </blockquote>
                  <div className={styles.feedbackMetrics}>
                    <span className={styles.metric}>Class Average: +1.8 grades</span>
                    <span className={styles.metric}>Time Saved: 15 hrs/week</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.resultsSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🏆</span>
              Key Achievements
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.achievementsGrid}>
                <div className={styles.achievementCard}>
                  <div className={styles.achievementIcon}>🎓</div>
                  <h3 className={styles.achievementTitle}>Education Innovation Award</h3>
                  <p className={styles.achievementDesc}>
                    Recognized by the Department of Education for excellence in educational technology innovation
                  </p>
                </div>

                <div className={styles.achievementCard}>
                  <div className={styles.achievementIcon}>🔬</div>
                  <h3 className={styles.achievementTitle}>Research Publication</h3>
                  <p className={styles.achievementDesc}>
                    Published in Journal of Educational Technology & Society on adaptive learning effectiveness
                  </p>
                </div>

                <div className={styles.achievementCard}>
                  <div className={styles.achievementIcon}>🌍</div>
                  <h3 className={styles.achievementTitle}>Global Recognition</h3>
                  <p className={styles.achievementDesc}>
                    Adopted by educational institutions in 12 countries across 4 continents
                  </p>
                </div>

                <div className={styles.achievementCard}>
                  <div className={styles.achievementIcon}>🤖</div>
                  <h3 className={styles.achievementTitle}>AI Excellence Award</h3>
                  <p className={styles.achievementDesc}>
                    Winner of the AI in Education Excellence Award for innovative adaptive learning algorithms
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.resultsSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>📈</span>
              Platform Engagement Metrics
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.engagementMetrics}>
                <div className={styles.engagementCategory}>
                  <h3 className={styles.engagementTitle}>Student Engagement</h3>
                  <ul className={styles.engagementList}>
                    <li><span className={styles.engagementHighlight}>94%</span> daily active users</li>
                    <li><span className={styles.engagementHighlight}>3.2 hrs</span> average session time</li>
                    <li><span className={styles.engagementHighlight}>87%</span> homework completion rate</li>
                    <li><span className={styles.engagementHighlight}>76%</span> participation in discussions</li>
                  </ul>
                </div>
                <div className={styles.engagementCategory}>
                  <h3 className={styles.engagementTitle}>Content Interaction</h3>
                  <ul className={styles.engagementList}>
                    <li><span className={styles.engagementHighlight}>2.8M</span> lessons completed</li>
                    <li><span className={styles.engagementHighlight}>45K</span> adaptive quizzes taken</li>
                    <li><span className={styles.engagementHighlight}>92%</span> video content watched</li>
                    <li><span className={styles.engagementHighlight}>68%</span> peer collaboration rate</li>
                  </ul>
                </div>
                <div className={styles.engagementCategory}>
                  <h3 className={styles.engagementTitle}>Teacher Adoption</h3>
                  <ul className={styles.engagementList}>
                    <li><span className={styles.engagementHighlight}>2,800</span> teachers trained</li>
                    <li><span className={styles.engagementHighlight}>91%</span> platform satisfaction</li>
                    <li><span className={styles.engagementHighlight}>4.5 hrs</span> weekly time saved</li>
                    <li><span className={styles.engagementHighlight}>83%</span> improved student outcomes</li>
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
            <Link to="/communication" className={`${styles.navButton} ${styles.primaryButton}`}>
              View Communication →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;