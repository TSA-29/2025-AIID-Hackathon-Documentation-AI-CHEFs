import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Background.module.css';

const Background: React.FC = () => {
  return (
    <div className={styles.backgroundPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Project 2: Background</h1>
          <p className={styles.subtitle}>
            Sustainable agriculture system: Problem analysis, research context, and solution rationale
          </p>
        </div>

        <div className={styles.backgroundContent}>
          <section className={styles.backgroundSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🌍</span>
              Global Food Security Challenge
            </h2>
            <div className={styles.sectionContent}>
              <p className={styles.introText}>
                The world faces unprecedented challenges in food security as climate change, population growth, and resource
                scarcity threaten traditional farming methods. By 2050, we need to feed 10 billion people while reducing
                environmental impact by 50%.
              </p>

              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>820M</div>
                  <div className={styles.statLabel}>People facing hunger globally</div>
                  <p className={styles.statDesc}>
                    Despite sufficient food production, distribution and access remain critical challenges
                  </p>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>70%</div>
                  <div className={styles.statLabel}>Freshwater used by agriculture</div>
                  <p className={styles.statDesc}>
                    Unsustainable water consumption threatens long-term food security
                  </p>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>40%</div>
                  <div className={styles.statLabel}>Crop losses to pests and diseases</div>
                  <p className={styles.statDesc}>
                    Preventable losses that could be reduced with better monitoring and early intervention
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.backgroundSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🌾</span>
              Modern Agriculture Problems
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.problemsGrid}>
                <div className={styles.problemCard}>
                  <div className={styles.problemIcon}>💧</div>
                  <h3 className={styles.problemTitle}>Water Scarcity</h3>
                  <p className={styles.problemDesc}>
                    Traditional irrigation wastes up to 60% of water through evaporation and runoff. Farmers lack
                    real-time data to optimize water usage based on crop needs and weather conditions.
                  </p>
                </div>

                <div className={styles.problemCard}>
                  <div className={styles.problemIcon}>🐛</div>
                  <h3 className={styles.problemTitle}>Pest Management</h3>
                  <p className={styles.problemDesc}>
                    Late detection of pest infestations leads to widespread crop damage. Current monitoring
                    methods are labor-intensive and often miss early warning signs.
                  </p>
                </div>

                <div className={styles.problemCard}>
                  <div className={styles.problemIcon}>📊</div>
                  <h3 className={styles.problemTitle}>Resource Inefficiency</h3>
                  <p className={styles.problemDesc}>
                    Overuse of fertilizers and pesticides contaminates soil and water while increasing costs.
                    Farmers lack precise data on actual crop requirements.
                  </p>
                </div>

                <div className={styles.problemCard}>
                  <div className={styles.problemIcon}>🌡️</div>
                  <h3 className={styles.problemTitle}>Climate Adaptation</h3>
                  <p className={styles.problemDesc}>
                    Changing weather patterns make traditional farming calendars obsolete. Farmers need
                    adaptive systems that respond to real-time environmental conditions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.backgroundSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🔬</span>
              Research Foundation
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.researchAreas}>
                <div className={styles.researchArea}>
                  <h3 className={styles.researchTitle}>IoT Sensor Networks</h3>
                  <p className={styles.researchDesc}>
                    Studies show that sensor-based agriculture can reduce water usage by 30-50% while increasing
                    yields by 15-25%. However, current solutions are expensive and complex for small farmers.
                  </p>
                  <div className={styles.researchSources}>
                    <span className={styles.sourceTag}>FAO Report 2023</span>
                    <span className={styles.sourceTag}>Nature Sustainability</span>
                  </div>
                </div>

                <div className={styles.researchArea}>
                  <h3 className={styles.researchTitle}>Machine Learning in Agriculture</h3>
                  <p className={styles.researchDesc}>
                    AI models can predict crop diseases with 85-95% accuracy using satellite imagery and sensor data.
                    Early warning systems can prevent 60-80% of potential crop losses.
                  </p>
                  <div className={styles.researchSources}>
                    <span className={styles.sourceTag}>Science Advances 2024</span>
                    <span className={styles.sourceTag}>AGU Journal</span>
                  </div>
                </div>

                <div className={styles.researchArea}>
                  <h3 className={styles.researchTitle}>Precision Agriculture Economics</h3>
                  <p className={styles.researchDesc}>
                    Farmers adopting precision technologies report 20-30% reduction in input costs and 10-20%
                    increase in profitability within the first two years of implementation.
                  </p>
                  <div className={styles.researchSources}>
                    <span className={styles.sourceTag}>World Bank Study</span>
                    <span className={styles.sourceTag}>USDA Economic Research</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.backgroundSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>👥</span>
              Stakeholder Analysis
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.stakeholdersGrid}>
                <div className={styles.stakeholderGroup}>
                  <h3 className={styles.stakeholderTitle}>
                    <span>👨‍🌾</span> Small-Scale Farmers
                  </h3>
                  <div className={styles.stakeholderNeeds}>
                    <div className={styles.needItem}>Affordable technology solutions</div>
                    <div className={styles.needItem}>Simple, intuitive interfaces</div>
                    <div className={styles.needItem}>Quick ROI on investments</div>
                    <div className={styles.needItem}>Local language support</div>
                  </div>
                </div>

                <div className={styles.stakeholderGroup}>
                  <h3 className={styles.stakeholderTitle}>
                    <span>🏭</span> Large Agricultural Operations
                  </h3>
                  <div className={styles.stakeholderNeeds}>
                    <div className={styles.needItem}>Scalable automation systems</div>
                    <div className={styles.needItem}>Advanced analytics and reporting</div>
                    <div className={styles.needItem}>Integration with existing systems</div>
                    <div className={styles.needItem}>Regulatory compliance</div>
                  </div>
                </div>

                <div className={styles.stakeholderGroup}>
                  <h3 className={styles.stakeholderTitle}>
                    <span>🌍</span> Environmental Organizations
                  </h3>
                  <div className={styles.stakeholderNeeds}>
                    <div className={styles.needItem}>Water conservation metrics</div>
                    <div className={styles.needItem}>Reduced chemical usage</div>
                    <div className={styles.needItem}>Soil health monitoring</div>
                    <div className={styles.needItem}>Carbon footprint tracking</div>
                  </div>
                </div>

                <div className={styles.stakeholderGroup}>
                  <h3 className={styles.stakeholderTitle}>
                    <span>🏛️</span> Government Agencies
                  </h3>
                  <div className={styles.stakeholderNeeds}>
                    <div className={styles.needItem}>Food security data</div>
                    <div className={styles.needItem}>Policy compliance tracking</div>
                    <div className={styles.needItem}>Subsidy program integration</div>
                    <div className={styles.needItem}>Emergency response systems</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.backgroundSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>💡</span>
              Solution Rationale
            </h2>
            <div className={styles.sectionContent}>
              <p className={styles.introText}>
                Our smart agriculture system addresses these challenges through an integrated IoT and AI platform that
                makes precision farming accessible and affordable for farmers of all sizes.
              </p>

              <div className={styles.solutionRationale}>
                <div className={styles.rationalePoint}>
                  <div className={styles.pointIcon}>📡</div>
                  <h3 className={styles.pointTitle}>Low-Cost IoT Sensors</h3>
                  <p className={styles.pointDesc}>
                    Custom-designed sensors that cost 80% less than commercial alternatives while providing
                    comparable accuracy for key measurements like soil moisture, temperature, and nutrient levels.
                  </p>
                </div>

                <div className={styles.rationalePoint}>
                  <div className={styles.pointIcon}>🤖</div>
                  <h3 className={styles.pointTitle}>AI-Powered Decision Support</h3>
                  <p className={styles.pointDesc}>
                    Machine learning models trained on millions of data points provide personalized recommendations
                    for irrigation, fertilization, and pest control based on real-time conditions.
                  </p>
                </div>

                <div className={styles.rationalePoint}>
                  <div className={styles.pointIcon}>📱</div>
                  <h3 className={styles.pointTitle}>Farmer-Centric Design</h3>
                  <p className={styles.pointDesc}>
                    Mobile-first interface with visual dashboards, voice commands in local languages, and
                    automated alerts that work even with limited internet connectivity.
                  </p>
                </div>

                <div className={styles.rationalePoint}>
                  <div className={styles.pointIcon}>🔄</div>
                  <h3 className={styles.pointTitle}>Closed-Loop Automation</h3>
                  <p className={styles.pointDesc}>
                    Integration with existing irrigation systems and smart controllers enables automated
                    response to sensor readings, reducing manual intervention requirements.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.backgroundSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🎯</span>
              Impact Potential
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.impactMetrics}>
                <div className={styles.impactCategory}>
                  <h3 className={styles.impactTitle}>Environmental Benefits</h3>
                  <ul className={styles.impactList}>
                    <li><strong>Water Conservation:</strong> 30-50% reduction in agricultural water usage</li>
                    <li><strong>Chemical Reduction:</strong> 40% decrease in fertilizer and pesticide application</li>
                    <li><strong>Soil Health:</strong> Improved organic matter and microbial activity</li>
                    <li><strong>Biodiversity:</strong> Reduced runoff protects local ecosystems</li>
                  </ul>
                </div>

                <div className={styles.impactCategory}>
                  <h3 className={styles.impactTitle}>Economic Benefits</h3>
                  <ul className={styles.impactList}>
                    <li><strong>Cost Reduction:</strong> 20-30% lower input costs for farmers</li>
                    <li><strong>Yield Increase:</strong> 15-25% improvement in crop productivity</li>
                    <li><strong>Risk Mitigation:</strong> Early warning prevents major crop losses</li>
                    <li><strong>Market Access:</strong> Data-driven certification for premium markets</li>
                  </ul>
                </div>

                <div className={styles.impactCategory}>
                  <h3 className={styles.impactTitle}>Social Benefits</h3>
                  <ul className={styles.impactList}>
                    <li><strong>Food Security:</strong> Increased local food production stability</li>
                    <li><strong>Farmer Livelihood:</strong> Improved income and reduced labor requirements</li>
                    <li><strong>Knowledge Transfer:</strong> Data sharing enables community learning</li>
                    <li><strong>Rural Development:</strong> Technology adoption creates local expertise</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className={styles.navigationFooter}>
          <h3>Continue Project Journey</h3>
          <div className={styles.navigationButtons}>
            <Link to="../project2" className={`${styles.navButton} ${styles.secondaryButton}`}>
              ← Back to Project Overview
            </Link>
            <Link to="idea" className={`${styles.navButton} ${styles.primaryButton}`}>
              View Project Idea →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;