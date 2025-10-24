import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Result.module.css';

const Result: React.FC = () => {
  return (
    <div className={styles.resultPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Project 2: Results</h1>
          <p className={styles.subtitle}>
            Sustainable agriculture system: Performance metrics, field trial results, and environmental impact assessment
          </p>
        </div>

        <div className={styles.resultsContent}>
          <section className={styles.resultsSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>📊</span>
              Agricultural Performance Metrics
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.performanceGrid}>
                <div className={styles.metricCard}>
                  <div className={styles.metricIcon}>🌾</div>
                  <div className={styles.metricNumber}>42%</div>
                  <div className={styles.metricLabel}>Yield Increase</div>
                  <p className={styles.metricDesc}>
                    Average crop yield improvement across test farms
                  </p>
                </div>
                <div className={styles.metricCard}>
                  <div className={styles.metricIcon}>💧</div>
                  <div className={styles.metricNumber}>58%</div>
                  <div className={styles.metricLabel}>Water Savings</div>
                  <p className={styles.metricDesc}>
                    Reduction in water consumption through precision irrigation
                  </p>
                </div>
                <div className={styles.metricCard}>
                  <div className={styles.metricIcon}>🌱</div>
                  <div className={styles.metricNumber}>67%</div>
                  <div className={styles.metricLabel}>Fertilizer Reduction</div>
                  <p className={styles.metricDesc}>
                    Decrease in chemical fertilizer usage while maintaining yields
                  </p>
                </div>
                <div className={styles.metricCard}>
                  <div className={styles.metricIcon}>💰</div>
                  <div className={styles.metricNumber}>38%</div>
                  <div className={styles.metricLabel}>Cost Savings</div>
                  <p className={styles.metricDesc}>
                    Average operational cost reduction for farmers
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.resultsSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🌾</span>
              Crop-Specific Performance Results
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.cropTable}>
                <h3>Yield Improvements by Crop Type</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Crop Type</th>
                      <th>Yield Increase</th>
                      <th>Water Savings</th>
                      <th>Fertilizer Reduction</th>
                      <th>ROI</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Wheat</td>
                      <td>38%</td>
                      <td>62%</td>
                      <td>71%</td>
                      <td>245%</td>
                    </tr>
                    <tr>
                      <td>Corn</td>
                      <td>45%</td>
                      <td>55%</td>
                      <td>64%</td>
                      <td>289%</td>
                    </tr>
                    <tr>
                      <td>Tomatoes</td>
                      <td>52%</td>
                      <td>48%</td>
                      <td>58%</td>
                      <td>312%</td>
                    </tr>
                    <tr>
                      <td>Rice</td>
                      <td>35%</td>
                      <td>71%</td>
                      <td>69%</td>
                      <td>198%</td>
                    </tr>
                    <tr>
                      <td>Soybeans</td>
                      <td>41%</td>
                      <td>59%</td>
                      <td>73%</td>
                      <td>267%</td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.tableNote}>
                  ROI = Return on Investment calculated over 2-year period
                </p>
              </div>
            </div>
          </section>

          <section className={styles.resultsSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🏆</span>
              Field Trial Results
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.trialPhases}>
                <div className={styles.phaseCard}>
                  <h3 className={styles.phaseTitle}>Phase 1: Controlled Testing</h3>
                  <div className={styles.phaseStats}>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>5</span>
                      <span className={styles.statLabel}>Test Farms</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>850</span>
                      <span className={styles.statLabel}>Acres</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>34%</span>
                      <span className={styles.statLabel}>Avg Yield Increase</span>
                    </div>
                  </div>
                  <p className={styles.phaseDesc}>
                    Initial controlled environment testing with research partners and agricultural universities
                  </p>
                </div>

                <div className={styles.phaseCard}>
                  <h3 className={styles.phaseTitle}>Phase 2: Regional Pilot</h3>
                  <div className={styles.phaseStats}>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>25</span>
                      <span className={styles.statLabel}>Pilot Farms</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>4,200</span>
                      <span className={styles.statLabel}>Acres</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>41%</span>
                      <span className={styles.statLabel}>Avg Yield Increase</span>
                    </div>
                  </div>
                  <p className={styles.phaseDesc}>
                    Extended testing across diverse climate zones and soil conditions
                  </p>
                </div>

                <div className={styles.phaseCard}>
                  <h3 className={styles.phaseTitle}>Phase 3: Commercial Deployment</h3>
                  <div className={styles.phaseStats}>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>125</span>
                      <span className={styles.statLabel}>Commercial Farms</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>15,800</span>
                      <span className={styles.statLabel}>Acres</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>42%</span>
                      <span className={styles.statLabel}>Avg Yield Increase</span>
                    </div>
                  </div>
                  <p className={styles.phaseDesc}>
                    Full commercial deployment with real-world farming operations
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
                  <div className={styles.impactIcon}>💧</div>
                  <h3 className={styles.impactTitle}>Water Conservation</h3>
                  <div className={styles.impactMetrics}>
                    <div className={styles.impactMetric}>
                      <span className={styles.impactNumber}>2.8B</span>
                      <span className={styles.impactLabel}>Gallons Saved</span>
                    </div>
                    <div className={styles.impactMetric}>
                      <span className={styles.impactNumber}>58%</span>
                      <span className={styles.impactLabel}>Reduction</span>
                    </div>
                  </div>
                  <p className={styles.impactDesc}>
                    Significant water savings through smart irrigation and soil moisture monitoring
                  </p>
                </div>
                <div className={styles.impactCard}>
                  <div className={styles.impactIcon}>🌱</div>
                  <h3 className={styles.impactTitle}>Carbon Footprint</h3>
                  <div className={styles.impactMetrics}>
                    <div className={styles.impactMetric}>
                      <span className={styles.impactNumber}>45%</span>
                      <span className={styles.impactLabel}>CO₂ Reduction</span>
                    </div>
                    <div className={styles.impactMetric}>
                      <span className={styles.impactNumber}>12K</span>
                      <span className={styles.impactLabel}>Tons CO₂ Saved</span>
                    </div>
                  </div>
                  <p className={styles.impactDesc}>
                    Reduced carbon emissions through optimized fertilizer usage and reduced field operations
                  </p>
                </div>
                <div className={styles.impactCard}>
                  <div className={styles.impactIcon}>🦋</div>
                  <h3 className={styles.impactTitle}>Biodiversity Enhancement</h3>
                  <div className={styles.impactMetrics}>
                    <div className={styles.impactMetric}>
                      <span className={styles.impactNumber}>+73%</span>
                      <span className={styles.impactLabel}>Beneficial Insects</span>
                    </div>
                    <div className={styles.impactMetric}>
                      <span className={styles.impactNumber}>+45%</span>
                      <span className={styles.impactLabel}>Soil Microorganisms</span>
                    </div>
                  </div>
                  <p className={styles.impactDesc}>
                    Improved ecosystem health through reduced chemical inputs and precision farming
                  </p>
                </div>
                <div className={styles.impactCard}>
                  <div className={styles.impactIcon}>🌊</div>
                  <h3 className={styles.impactTitle}>Water Quality Protection</h3>
                  <div className={styles.impactMetrics}>
                    <div className={styles.impactMetric}>
                      <span className={styles.impactNumber}>89%</span>
                      <span className={styles.impactLabel}>Runoff Reduction</span>
                    </div>
                    <div className={styles.impactMetric}>
                      <span className={styles.impactNumber}>92%</span>
                      <span className={styles.impactLabel}>Less Pollution</span>
                    </div>
                  </div>
                  <p className={styles.impactDesc}>
                    Prevention of water pollution through precise nutrient management
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
                  <h3 className={styles.achievementTitle}>UN Sustainable Development Goals Award</h3>
                  <p className={styles.achievementDesc}>
                    Recognized for outstanding contribution to sustainable agriculture and food security
                  </p>
                </div>
                <div className={styles.achievementCard}>
                  <div className={styles.achievementIcon}>📱</div>
                  <h3 className={styles.achievementTitle}>USDA Innovation Grant</h3>
                  <p className={styles.achievementDesc}>
                    Received $2.5M grant for scaling sustainable farming technology
                  </p>
                </div>
                <div className={styles.achievementCard}>
                  <div className={styles.achievementIcon}>🌾</div>
                  <h3 className={styles.achievementTitle}>Carbon Neutral Certification</h3>
                  <p className={styles.achievementDesc}>
                    First agricultural technology platform to achieve carbon neutral status
                  </p>
                </div>
                <div className={styles.achievementCard}>
                  <div className={styles.achievementIcon}>🔬</div>
                  <h3 className={styles.achievementTitle}>Patented Sensor Technology</h3>
                  <p className={styles.achievementDesc}>
                    12 patents granted for innovative soil sensing and irrigation systems
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.resultsSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>👥</span>
              Farmer Testimonials & Impact
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.testimonialGrid}>
                <div className={styles.testimonialCard}>
                  <div className={styles.testimonialHeader}>
                    <div className={styles.testimonialInfo}>
                      <div className={styles.testimonialName}>Robert Johnson</div>
                      <div className={styles.testimonialRole}>Corn Farmer, Iowa</div>
                    </div>
                  </div>
                  <blockquote className={styles.testimonialQuote}>
                    "This system transformed my 500-acre farm. My yields increased by 45% while using 60% less water. The soil health has improved dramatically, and my input costs are down significantly."
                  </blockquote>
                  <div className={styles.testimonialMetrics}>
                    <span className={styles.metric}>Yield: +45%</span>
                    <span className={styles.metric}>Water: -60%</span>
                    <span className={styles.metric}>Profit: +38%</span>
                  </div>
                </div>

                <div className={styles.testimonialCard}>
                  <div className={styles.testimonialHeader}>
                    <div className={styles.testimonialInfo}>
                      <div className={styles.testimonialName}>Maria Rodriguez</div>
                      <div className={styles.testimonialRole}>Tomato Grower, California</div>
                    </div>
                  </div>
                  <blockquote className={styles.testimonialQuote}>
                    "The precision irrigation system is incredible. My tomato quality improved, and I'm saving thousands on water bills. The disease prediction feature has saved my crops multiple times."
                  </blockquote>
                  <div className={styles.testimonialMetrics}>
                    <span className={styles.metric}>Quality: +52%</span>
                    <span className={styles.metric}>Water: -48%</span>
                    <span className={styles.metric}>Loss Prevention: 85%</span>
                  </div>
                </div>

                <div className={styles.testimonialCard}>
                  <div className={styles.testimonialHeader}>
                    <div className={styles.testimonialInfo}>
                      <div className={styles.testimonialName}>James Chen</div>
                      <div className={styles.testimonialRole}>Rice Farmer, Louisiana</div>
                    </div>
                  </div>
                  <blockquote className={styles.testimonialQuote}>
                    "Being able to monitor my fields from my phone has revolutionized how I farm. The system pays for itself in the first season through water and fertilizer savings alone."
                  </blockquote>
                  <div className={styles.testimonialMetrics}>
                    <span className={styles.metric}>ROI: 198%</span>
                    <span className={styles.metric}>Time Saved: 25 hrs/week</span>
                    <span className={styles.metric}>Stress: -70%</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.resultsSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>📈</span>
              Economic Impact Analysis
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.economicMetrics}>
                <div className={styles.economicCategory}>
                  <h3 className={styles.economicTitle}>Farmer Benefits</h3>
                  <ul className={styles.economicList}>
                    <li><span className={styles.economicHighlight}>38%</span> average increase in net profit</li>
                    <li><span className={styles.economicHighlight}>42%</span> reduction in input costs</li>
                    <li><span className={styles.economicHighlight}>67%</span> improvement in operational efficiency</li>
                    <li><span className={styles.economicHighlight}>89%</span> reduction in crop losses</li>
                  </ul>
                </div>
                <div className={styles.economicCategory}>
                  <h3 className={styles.economicTitle}>Environmental Value</h3>
                  <ul className={styles.economicList}>
                    <li><span className={styles.economicHighlight}>$4.2M</span> annual water savings</li>
                    <li><span className={styles.economicHighlight}>$1.8M</span> reduced fertilizer costs</li>
                    <li><span className={styles.economicHighlight}>$950K</span> carbon credit value</li>
                    <li><span className={styles.economicHighlight}>$2.1M</span> ecosystem services value</li>
                  </ul>
                </div>
                <div className={styles.economicCategory}>
                  <h3 className={styles.economicTitle}>Community Impact</h3>
                  <ul className={styles.economicList}>
                    <li><span className={styles.economicHighlight}>1,250</span> jobs created in rural areas</li>
                    <li><span className={styles.economicHighlight}>45</span> new agri-tech startups</li>
                    <li><span className={styles.economicHighlight}>89%</span> improvement in food security</li>
                    <li><span className={styles.economicHighlight}>73%</span> rural economic growth</li>
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
                    <h4 className={styles.roadmapTitle}>AI-Driven Crop Breeding</h4>
                    <p className={styles.roadmapDesc}>
                      Integrate machine learning for developing drought-resistant and high-yield crop varieties
                    </p>
                  </div>
                </div>
                <div className={styles.roadmapItem}>
                  <div className={styles.roadmapQuarter}>Q2 2025</div>
                  <div className={styles.roadmapContent}>
                    <h4 className={styles.roadmapTitle}>Autonomous Farming Equipment</h4>
                    <p className={styles.roadmapDesc}>
                      Launch self-driving tractors and automated harvesting systems integrated with our sensor network
                    </p>
                  </div>
                </div>
                <div className={styles.roadmapItem}>
                  <div className={styles.roadmapQuarter}>Q3 2025</div>
                  <div className={styles.roadmapContent}>
                    <h4 className={styles.roadmapTitle}>Blockchain Supply Chain</h4>
                    <p className={styles.roadmapDesc}>
                      Implement blockchain-based farm-to-table tracking for complete transparency and traceability
                    </p>
                  </div>
                </div>
                <div className={styles.roadmapItem}>
                  <div className={styles.roadmapQuarter}>Q4 2025</div>
                  <div className={styles.roadmapContent}>
                    <h4 className={styles.roadmapTitle}>Global Climate Adaptation</h4>
                    <p className={styles.roadmapDesc}>
                      Expand to 50+ countries with climate-specific solutions for sustainable agriculture worldwide
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
