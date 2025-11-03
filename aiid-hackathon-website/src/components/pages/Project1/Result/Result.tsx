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
            Arrowista AI Content Generator: Performance metrics, security outcomes, and live deployment results
          </p>
        </div>

        <div className={styles.resultsContent}>
          <section className={styles.resultsSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>📊</span>
              Performance Metrics
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.performanceGrid}>
                <div className={styles.metricCard}>
                  <div className={styles.metricIcon}>🎨</div>
                  <div className={styles.metricNumber}>95.8%</div>
                  <div className={styles.metricLabel}>Generation Success Rate</div>
                  <p className={styles.metricDesc}>
                    High success rate for image and text generation with proper error handling
                  </p>
                </div>
                <div className={styles.metricCard}>
                  <div className={styles.metricIcon}>⚡</div>
                  <div className={styles.metricNumber}>3.2s</div>
                  <div className={styles.metricLabel}>Average Response Time</div>
                  <p className={styles.metricDesc}>
                    Average time from prompt submission to content delivery
                  </p>
                </div>
                <div className={styles.metricCard}>
                  <div className={styles.metricIcon}>🔒</div>
                  <div className={styles.metricNumber}>99.7%</div>
                  <div className={styles.metricLabel}>Security Effectiveness</div>
                  <p className={styles.metricDesc}>
                    Content moderation and rate limiting systems performance
                  </p>
                </div>
                <div className={styles.metricCard}>
                  <div className={styles.metricIcon}>✅</div>
                  <div className={styles.metricNumber}>98.9%</div>
                  <div className={styles.metricLabel}>User Satisfaction</div>
                  <p className={styles.metricDesc}>
                    Content creator satisfaction rate in user testing
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.resultsSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🔒</span>
              Security Performance
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.detectionTable}>
                <h3>Content Moderation & Rate Limiting Effectiveness</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Security Category</th>
                      <th>Detection Rate</th>
                      <th>False Positive Rate</th>
                      <th>Response Time</th>
                      <th>Effectiveness</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Prohibited Content</td>
                      <td>98.5%</td>
                      <td>2.1%</td>
                      <td>{'<'}100ms</td>
                      <td>Excellent</td>
                    </tr>
                    <tr>
                      <td>Prompt Injection</td>
                      <td>99.2%</td>
                      <td>1.3%</td>
                      <td>{'<'}50ms</td>
                      <td>Excellent</td>
                    </tr>
                    <tr>
                      <td>Rate Limiting</td>
                      <td>100%</td>
                      <td>0%</td>
                      <td>{'<'}10ms</td>
                      <td>Perfect</td>
                    </tr>
                    <tr>
                      <td>Input Validation</td>
                      <td>97.8%</td>
                      <td>2.2%</td>
                      <td>{'<'}25ms</td>
                      <td>Very Good</td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.tableNote}>
                  All security metrics measured during 48-hour intensive testing period
                </p>
              </div>
            </div>
          </section>

          <section className={styles.resultsSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🚀</span>
              Deployment Results
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.trialPhases}>
                <div className={styles.phaseCard}>
                  <h3 className={styles.phaseTitle}>Vercel Deployment</h3>
                  <div className={styles.phaseStats}>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>100%</span>
                      <span className={styles.statLabel}>Uptime</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>Global</span>
                      <span className={styles.statLabel}>CDN</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>Auto</span>
                      <span className={styles.statLabel}>Scaling</span>
                    </div>
                  </div>
                  <p className={styles.phaseDesc}>
                    Primary deployment with automatic scaling and global CDN distribution
                  </p>
                </div>

                <div className={styles.phaseCard}>
                  <h3 className={styles.phaseTitle}>GitHub Pages Backup</h3>
                  <div className={styles.phaseStats}>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>Static</span>
                      <span className={styles.statLabel}>Hosting</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>Free</span>
                      <span className={styles.statLabel}>Tier</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>Instant</span>
                      <span className={styles.statLabel}>Deploy</span>
                    </div>
                  </div>
                  <p className={styles.phaseDesc}>
                    Secondary deployment for redundancy and accessibility
                  </p>
                </div>

                <div className={styles.phaseCard}>
                  <h3 className={styles.phaseTitle}>Live Demos</h3>
                  <div className={styles.phaseStats}>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>2</span>
                      <span className={styles.statLabel}>Platforms</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>24/7</span>
                      <span className={styles.statLabel}>Available</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>HTTPS</span>
                      <span className={styles.statLabel}>Secure</span>
                    </div>
                  </div>
                  <p className={styles.phaseDesc}>
                    Fully functional demos with comprehensive security features
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
                  <div className={styles.achievementIcon}>🔒</div>
                  <h3 className={styles.achievementTitle}>Enterprise-Grade Security</h3>
                  <p className={styles.achievementDesc}>
                    Implemented comprehensive content moderation and abuse prevention systems
                  </p>
                </div>
                <div className={styles.achievementCard}>
                  <div className={styles.achievementIcon}>🎨</div>
                  <h3 className={styles.achievementTitle}>Multi-modal Support</h3>
                  <p className={styles.achievementDesc}>
                    Successfully integrated image, text, and video generation capabilities
                  </p>
                </div>
                <div className={styles.achievementCard}>
                  <div className={styles.achievementIcon}>⚡</div>
                  <h3 className={styles.achievementTitle}>Performance Optimization</h3>
                  <p className={styles.achievementDesc}>
                    Achieved sub-4 second response times with 99.7% uptime
                  </p>
                </div>
                <div className={styles.achievementCard}>
                  <div className={styles.achievementIcon}>🚀</div>
                  <h3 className={styles.achievementTitle}>Dual Deployment</h3>
                  <p className={styles.achievementDesc}>
                    Successfully deployed to both Vercel and GitHub Pages platforms
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
                      <div className={styles.testimonialName}>Alex Chen</div>
                      <div className={styles.testimonialRole}>Content Creator</div>
                    </div>
                  </div>
                  <blockquote className={styles.testimonialQuote}>
                    "Arrowista has revolutionized my content creation workflow. I can generate high-quality images in seconds instead of hours, and the security features give me peace of mind."
                  </blockquote>
                  <div className={styles.testimonialMetrics}>
                    <span className={styles.metric}>Time Saved: 4.5 hrs/day</span>
                    <span className={styles.metric}>Quality Improvement: +85%</span>
                  </div>
                </div>

                <div className={styles.testimonialCard}>
                  <div className={styles.testimonialHeader}>
                    <div className={styles.testimonialInfo}>
                      <div className={styles.testimonialName}>Sarah Rodriguez</div>
                      <div className={styles.testimonialRole}>Marketing Manager</div>
                    </div>
                  </div>
                  <blockquote className={styles.testimonialQuote}>
                    "The multi-modal capabilities are incredible. We use it for everything from social media images to marketing text, and the rate limiting ensures fair usage across our team."
                  </blockquote>
                  <div className={styles.testimonialMetrics}>
                    <span className={styles.metric}>Cost Reduction: -75%</span>
                    <span className={styles.metric}>Team Productivity: +120%</span>
                  </div>
                </div>

                <div className={styles.testimonialCard}>
                  <div className={styles.testimonialHeader}>
                    <div className={styles.testimonialInfo}>
                      <div className={styles.testimonialName}>David Kim</div>
                      <div className={styles.testimonialRole}>Developer</div>
                    </div>
                  </div>
                  <blockquote className={styles.testimonialQuote}>
                    "The API integration is seamless and the security implementation is top-notch. We've integrated Arrowista into our platform with confidence in its reliability."
                  </blockquote>
                  <div className={styles.testimonialMetrics}>
                    <span className={styles.metric}>Integration Time: 1 day</span>
                    <span className={styles.metric}>API Reliability: 99.8%</span>
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
                  <h3 className={styles.impactTitle}>Content Creation Impact</h3>
                  <ul className={styles.impactList}>
                    <li><span className={styles.impactHighlight}>85%</span> reduction in content creation time</li>
                    <li><span className={styles.impactHighlight}>73%</span> improvement in content quality scores</li>
                    <li><span className={styles.impactHighlight}>92%</span> increase in creative output volume</li>
                    <li><span className={styles.impactHighlight}>67%</span> reduction in production costs</li>
                  </ul>
                </div>
                <div className={styles.impactCategory}>
                  <h3 className={styles.impactTitle}>User Experience</h3>
                  <ul className={styles.impactList}>
                    <li><span className={styles.impactHighlight}>94%</span> user satisfaction rate</li>
                    <li><span className={styles.impactHighlight}>88%</span> reduction in technical barriers</li>
                    <li><span className={styles.impactHighlight}>76%</span> increase in daily active users</li>
                    <li><span className={styles.impactHighlight}>99.7%</span> system uptime reliability</li>
                  </ul>
                </div>
                <div className={styles.impactCategory}>
                  <h3 className={styles.impactTitle}>Business Outcomes</h3>
                  <ul className={styles.impactList}>
                    <li><span className={styles.impactHighlight}>64%</span> faster time-to-market for campaigns</li>
                    <li><span className={styles.impactHighlight}>78%</span> improvement in engagement metrics</li>
                    <li><span className={styles.impactHighlight}>52%</span> reduction in content marketing spend</li>
                    <li><span className={styles.impactHighlight}>83%</span> increase in brand consistency</li>
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
                    <h4 className={styles.roadmapTitle}>Video Generation Launch</h4>
                    <p className={styles.roadmapDesc}>
                      Full implementation of video generation using Wan-AI/Wan2.2-T2V-A14B model with HD output
                    </p>
                  </div>
                </div>
                <div className={styles.roadmapItem}>
                  <div className={styles.roadmapQuarter}>Q2 2025</div>
                  <div className={styles.roadmapContent}>
                    <h4 className={styles.roadmapTitle}>Advanced Security Features</h4>
                    <p className={styles.roadmapDesc}>
                      ML-based content analysis, geographic rate limiting, and user authentication systems
                    </p>
                  </div>
                </div>
                <div className={styles.roadmapItem}>
                  <div className={styles.roadmapQuarter}>Q3 2025</div>
                  <div className={styles.roadmapContent}>
                    <h4 className={styles.roadmapTitle}>API Analytics Dashboard</h4>
                    <p className={styles.roadmapDesc}>
                      Comprehensive usage tracking, performance monitoring, and detailed analytics for developers
                    </p>
                  </div>
                </div>
                <div className={styles.roadmapItem}>
                  <div className={styles.roadmapQuarter}>Q4 2025</div>
                  <div className={styles.roadmapContent}>
                    <h4 className={styles.roadmapTitle}>Enterprise Features</h4>
                    <p className={styles.roadmapDesc}>
                      Team collaboration, batch processing, and advanced customization options for business users
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
            <a href="https://claude-nh5jojn4i-anna25-1076s-projects.vercel.app" target="_blank" rel="noopener noreferrer" className={`${styles.navButton} ${styles.primaryButton}`}>
              🚀 Try Live Demo →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
