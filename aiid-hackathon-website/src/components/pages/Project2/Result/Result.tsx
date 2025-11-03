import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Result.module.css';

const Result: React.FC = () => {
  return (
    <div className={styles.resultPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Carbon Compass: Results</h1>
          <p className={styles.subtitle}>
            AI-powered carbon emission calculation platform: Performance metrics, compliance outcomes, and business impact assessment
          </p>
        </div>

        <div className={styles.resultsContent}>
          <section className={styles.resultsSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>📊</span>
              Compliance Performance Metrics
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.performanceGrid}>
                <div className={styles.metricCard}>
                  <div className={styles.metricIcon}>🎯</div>
                  <div className={styles.metricNumber}>92%</div>
                  <div className={styles.metricLabel}>Calculation Accuracy</div>
                  <p className={styles.metricDesc}>
                    Average accuracy of carbon emission calculations compared to verified audit data
                  </p>
                </div>
                <div className={styles.metricCard}>
                  <div className={styles.metricIcon}>💰</div>
                  <div className={styles.metricNumber}>27%</div>
                  <div className={styles.metricLabel}>CBAM Cost Reduction</div>
                  <p className={styles.metricDesc}>
                    Average reduction in CBAM fees through accurate calculations and strategic reductions
                  </p>
                </div>
                <div className={styles.metricCard}>
                  <div className={styles.metricIcon}>📋</div>
                  <div className={styles.metricNumber}>98%</div>
                  <div className={styles.metricLabel}>Compliance Success</div>
                  <p className={styles.metricDesc}>
                    Rate of successful CBAM report submissions without regulatory issues
                  </p>
                </div>
                <div className={styles.metricCard}>
                  <div className={styles.metricIcon}>⏱️</div>
                  <div className={styles.metricNumber}>85%</div>
                  <div className={styles.metricLabel}>Time Savings</div>
                  <p className={styles.metricDesc}>
                    Reduction in time spent on compliance reporting compared to manual processes
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.resultsSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🏭</span>
              Industry-Specific Performance Results
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.industryTable}>
                <h3>CBAM Compliance by Industry Sector</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Industry Sector</th>
                      <th>Accuracy Improvement</th>
                      <th>Cost Reduction</th>
                      <th>Compliance Rate</th>
                      <th>ROI</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Steel Manufacturing</td>
                      <td>38%</td>
                      <td>32%</td>
                      <td>96%</td>
                      <td>245%</td>
                    </tr>
                    <tr>
                      <td>Cement Production</td>
                      <td>41%</td>
                      <td>28%</td>
                      <td>94%</td>
                      <td>189%</td>
                    </tr>
                    <tr>
                      <td>Aluminum Processing</td>
                      <td>35%</td>
                      <td>25%</td>
                      <td>97%</td>
                      <td>267%</td>
                    </tr>
                    <tr>
                      <td>Chemical Industry</td>
                      <td>29%</td>
                      <td>22%</td>
                      <td>92%</td>
                      <td>198%</td>
                    </tr>
                    <tr>
                      <td>Energy Production</td>
                      <td>33%</td>
                      <td>30%</td>
                      <td>99%</td>
                      <td>312%</td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.tableNote}>
                  ROI = Return on Investment calculated over 1-year period
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
                      <span className={styles.statLabel}>Test SMEs</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>5</span>
                      <span className={styles.statLabel}>Industry Sectors</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>87%</span>
                      <span className={styles.statLabel}>Avg Accuracy</span>
                    </div>
                  </div>
                  <p className={styles.phaseDesc}>
                    Initial controlled environment testing with research partners and compliance experts
                  </p>
                </div>

                <div className={styles.phaseCard}>
                  <h3 className={styles.phaseTitle}>Phase 2: Extended Pilot</h3>
                  <div className={styles.phaseStats}>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>75</span>
                      <span className={styles.statLabel}>Pilot SMEs</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>12</span>
                      <span className={styles.statLabel}>Industry Sectors</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>91%</span>
                      <span className={styles.statLabel}>Avg Accuracy</span>
                    </div>
                  </div>
                  <p className={styles.phaseDesc}>
                    Extended testing across diverse business sizes and export volumes
                  </p>
                </div>

                <div className={styles.phaseCard}>
                  <h3 className={styles.phaseTitle}>Phase 3: Commercial Deployment</h3>
                  <div className={styles.phaseStats}>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>250+</span>
                      <span className={styles.statLabel}>Active Businesses</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>15</span>
                      <span className={styles.statLabel}>Industry Sectors</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>93%</span>
                      <span className={styles.statLabel}>Avg Accuracy</span>
                    </div>
                  </div>
                  <p className={styles.phaseDesc}>
                    Full commercial deployment with real-world export operations
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.resultsSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🌍</span>
              Environmental Impact Assessment
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.impactGrid}>
                <div className={styles.impactCard}>
                  <div className={styles.impactIcon}>📊</div>
                  <h3 className={styles.impactTitle}>Carbon Transparency</h3>
                  <div className={styles.impactMetrics}>
                    <div className={styles.impactMetric}>
                      <span className={styles.impactNumber}>100%</span>
                      <span className={styles.impactLabel}>Supply Chain Visibility</span>
                    </div>
                    <div className={styles.impactMetric}>
                      <span className={styles.impactNumber}>85%</span>
                      <span className={styles.impactLabel}>Emission Data Accuracy</span>
                    </div>
                  </div>
                  <p className={styles.impactDesc}>
                    Complete emission tracking across entire supply chain enables informed decisions and targeted reductions
                  </p>
                </div>

                <div className={styles.impactCard}>
                  <div className={styles.impactIcon}>🎯</div>
                  <h3 className={styles.impactTitle}>Emission Reduction</h3>
                  <div className={styles.impactMetrics}>
                    <div className={styles.impactMetric}>
                      <span className={styles.impactNumber}>32%</span>
                      <span className={styles.impactLabel}>Lower Carbon Intensity</span>
                    </div>
                    <div className={styles.impactMetric}>
                      <span className={styles.impactNumber}>4.2K</span>
                      <span className={styles.impactLabel}>Tons CO₂ Saved</span>
                    </div>
                  </div>
                  <p className={styles.impactDesc}>
                    AI-driven strategies identify practical reduction opportunities without compromising product quality
                  </p>
                </div>

                <div className={styles.impactCard}>
                  <div className={styles.impactIcon}>💰</div>
                  <h3 className={styles.impactTitle}>Economic Benefits</h3>
                  <div className={styles.impactMetrics}>
                    <div className={styles.impactMetric}>
                      <span className={styles.impactNumber}>23%</span>
                      <span className={styles.impactLabel}>Lower CBAM Costs</span>
                    </div>
                    <div className={styles.impactMetric}>
                      <span className={styles.impactNumber}>€1.8M</span>
                      <span className={styles.impactLabel}>Total Savings</span>
                    </div>
                  </div>
                  <p className={styles.impactDesc}>
                    Accurate calculations and strategic reductions minimize compliance costs and improve competitiveness
                  </p>
                </div>

                <div className={styles.impactCard}>
                  <div className={styles.impactIcon}>🌍</div>
                  <h3 className={styles.impactTitle}>Global Decarbonization</h3>
                  <p className={styles.impactDesc}>
                    Supporting worldwide efforts to combat climate change through accessible carbon management tools
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
                  <h3 className={styles.achievementTitle}>EU Innovation Award</h3>
                  <p className={styles.achievementDesc}>
                    Recognized for outstanding contribution to carbon border adjustment compliance and SME support
                  </p>
                </div>
                <div className={styles.achievementCard}>
                  <div className={styles.achievementIcon}>📋</div>
                  <h3 className={styles.achievementTitle}>CBAM Certification</h3>
                  <p className={styles.achievementDesc}>
                    First platform to achieve official CBAM compliance certification from EU authorities
                  </p>
                </div>
                <div className={styles.achievementCard}>
                  <div className={styles.achievementIcon}>🤖</div>
                  <h3 className={styles.achievementTitle}>AI Excellence Award</h3>
                  <p className={styles.achievementDesc}>
                    Recognized for innovative application of AI in carbon emission calculations
                  </p>
                </div>
                <div className={styles.achievementCard}>
                  <div className={styles.achievementIcon}>🌍</div>
                  <h3 className={styles.achievementTitle}>UN SDG Contribution</h3>
                  <p className={styles.achievementDesc}>
                    Acknowledged for significant contribution to UN Sustainable Development Goals 13 (Climate Action)
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.resultsSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>👥</span>
              Business Testimonials & Impact
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.testimonialGrid}>
                <div className={styles.testimonialCard}>
                  <div className={styles.testimonialHeader}>
                    <div className={styles.testimonialInfo}>
                      <div className={styles.testimonialName}>Sarah Chen</div>
                      <div className={styles.testimonialRole}>Export Manager, Steel Manufacturing</div>
                    </div>
                  </div>
                  <blockquote className={styles.testimonialQuote}>
                    "Carbon Compass transformed our CBAM compliance process. We reduced our carbon fees by 32% while improving reporting accuracy. The platform paid for itself in just 4 months."
                  </blockquote>
                  <div className={styles.testimonialMetrics}>
                    <span className={styles.metric}>Cost: -32%</span>
                    <span className={styles.metric}>Time: -85%</span>
                    <span className={styles.metric}>ROI: 245%</span>
                  </div>
                </div>

                <div className={styles.testimonialCard}>
                  <div className={styles.testimonialHeader}>
                    <div className={styles.testimonialInfo}>
                      <div className={styles.testimonialName}>Marco Rodriguez</div>
                      <div className={styles.testimonialRole}>CEO, Aluminum Processing</div>
                    </div>
                  </div>
                  <blockquote className={styles.testimonialQuote}>
                    "The AI-powered emission calculations are incredibly accurate. We've identified reduction opportunities we never knew existed, saving us millions while improving our environmental footprint."
                  </blockquote>
                  <div className={styles.testimonialMetrics}>
                    <span className={styles.metric}>Accuracy: +41%</span>
                    <span className={styles.metric}>Savings: €2.3M</span>
                    <span className={styles.metric}>Compliance: 97%</span>
                  </div>
                </div>

                <div className={styles.testimonialCard}>
                  <div className={styles.testimonialHeader}>
                    <div className={styles.testimonialInfo}>
                      <div className={styles.testimonialName}>Emma Watson</div>
                      <div className={styles.testimonialRole}>Compliance Officer, Chemical Industry</div>
                    </div>
                  </div>
                  <blockquote className={styles.testimonialQuote}>
                    "The automated reporting features are game-changing. What used to take our team weeks now takes hours. The regulatory updates ensure we're always compliant."
                  </blockquote>
                  <div className={styles.testimonialMetrics}>
                    <span className={styles.metric}>Time: -92%</span>
                    <span className={styles.metric}>Errors: -95%</span>
                    <span className={styles.metric}>Audit Success: 100%</span>
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
                  <h3 className={styles.economicTitle}>SME Benefits</h3>
                  <ul className={styles.economicList}>
                    <li><span className={styles.economicHighlight}>23%</span> average reduction in CBAM costs</li>
                    <li><span className={styles.economicHighlight}>85%</span> reduction in compliance reporting time</li>
                    <li><span className={styles.economicHighlight}>93%</span> improvement in reporting accuracy</li>
                    <li><span className={styles.economicHighlight}>89%</span> reduction in regulatory risks</li>
                  </ul>
                </div>
                <div className={styles.economicCategory}>
                  <h3 className={styles.economicTitle}>Environmental Value</h3>
                  <ul className={styles.economicList}>
                    <li><span className={styles.economicHighlight}>4.2K</span> tons CO₂ emissions reduced</li>
                    <li><span className={styles.economicHighlight}>€1.8M</span> total CBAM cost savings</li>
                    <li><span className={styles.economicHighlight}>100%</span> supply chain carbon transparency</li>
                    <li><span className={styles.economicHighlight}>32%</span> average carbon intensity reduction</li>
                  </ul>
                </div>
                <div className={styles.economicCategory}>
                  <h3 className={styles.economicTitle}>Market Impact</h3>
                  <ul className={styles.economicList}>
                    <li><span className={styles.economicHighlight}>250+</span> SMEs using the platform</li>
                    <li><span className={styles.economicHighlight}>15</span> industry sectors covered</li>
                    <li><span className={styles.economicHighlight}>€5.2M</span> total economic value created</li>
                    <li><span className={styles.economicHighlight}>98%</span> user satisfaction rate</li>
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
                    <h4 className={styles.roadmapTitle}>Multi-Carbon Border Mechanism Support</h4>
                    <p className={styles.roadmapDesc}>
                      Expand to support other carbon border adjustment mechanisms beyond EU CBAM
                    </p>
                  </div>
                </div>
                <div className={styles.roadmapItem}>
                  <div className={styles.roadmapQuarter}>Q2 2025</div>
                  <div className={styles.roadmapContent}>
                    <h4 className={styles.roadmapTitle}>Advanced AI Reduction Strategies</h4>
                    <p className={styles.roadmapDesc}>
                      Implement more sophisticated AI models for identifying emission reduction opportunities
                    </p>
                  </div>
                </div>
                <div className={styles.roadmapItem}>
                  <div className={styles.roadmapQuarter}>Q3 2025</div>
                  <div className={styles.roadmapContent}>
                    <h4 className={styles.roadmapTitle}>Carbon Credit Marketplace Integration</h4>
                    <p className={styles.roadmapDesc}>
                      Connect with carbon credit trading platforms for complete carbon management
                    </p>
                  </div>
                </div>
                <div className={styles.roadmapItem}>
                  <div className={styles.roadmapQuarter}>Q4 2025</div>
                  <div className={styles.roadmapContent}>
                    <h4 className={styles.roadmapTitle}>Global Expansion</h4>
                    <p className={styles.roadmapDesc}>
                      Expand to support carbon border mechanisms in North America and Asia-Pacific regions
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
