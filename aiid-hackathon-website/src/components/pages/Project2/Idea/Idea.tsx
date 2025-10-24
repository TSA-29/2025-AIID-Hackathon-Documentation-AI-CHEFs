import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Idea.module.css';

const Idea: React.FC = () => {
  return (
    <div className={styles.ideaPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Project 2: Idea</h1>
          <p className={styles.subtitle}>
            Sustainable agriculture system: Smart IoT sensor networks and AI-driven precision farming solution
          </p>
        </div>

        <div className={styles.ideaContent}>
          <section className={styles.ideaSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>💡</span>
              Core Innovation
            </h2>
            <div className={styles.sectionContent}>
              <p className={styles.introText}>
                Our vision is to democratize precision agriculture through an affordable, integrated IoT and AI platform
                that empowers farmers of all sizes to optimize resource usage, increase yields, and contribute to global
                food security.
              </p>

              <div className={styles.innovationHighlight}>
                <div className={styles.highlightCard}>
                  <div className={styles.highlightIcon}>🌱</div>
                  <h3 className={styles.highlightTitle}>Smart Farming for Everyone</h3>
                  <p className={styles.highlightDesc}>
                    Breaking down cost barriers to make precision agriculture accessible to small-scale farmers
                    who produce 70% of the world's food.
                  </p>
                </div>

                <div className={styles.highlightCard}>
                  <div className={styles.highlightIcon}>🔄</div>
                  <h3 className={styles.highlightTitle}>Closed-Loop Automation</h3>
                  <p className={styles.highlightDesc}>
                    From sensor data to automated action, creating self-regulating farming systems that
                    adapt to real-time conditions without human intervention.
                  </p>
                </div>

                <div className={styles.highlightCard}>
                  <div className={styles.highlightIcon}>📊</div>
                  <h3 className={styles.highlightTitle}>Data-Driven Decisions</h3>
                  <p className={styles.highlightDesc}>
                    Transforming agricultural intuition into quantifiable insights using machine learning
                    models trained on millions of farm data points.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.ideaSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🎯</span>
              Solution Architecture
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.architectureDiagram}>
                <h3 className={styles.diagramTitle}>Integrated Smart Farming Ecosystem</h3>
                <div className={styles.architectureFlow}>
                  <div className={styles.archLayer}>
                    <div className={styles.layerTitle}>
                      <span className={styles.layerIcon}>📡</span>
                      Sensor Network Layer
                    </div>
                    <div className={styles.layerComponents}>
                      <div className={styles.component}>Soil moisture sensors</div>
                      <div className={styles.component}>Nutrient analyzers</div>
                      <div className={styles.component}>Weather stations</div>
                      <div className={styles.component}>Crop health cameras</div>
                    </div>
                  </div>

                  <div className={styles.archLayer}>
                    <div className={styles.layerTitle}>
                      <span className={styles.layerIcon}>🌐</span>
                      Connectivity Layer
                    </div>
                    <div className={styles.layerComponents}>
                      <div className={styles.component}>LoRaWAN mesh network</div>
                      <div className={styles.component}>Edge computing nodes</div>
                      <div className={styles.component}>Satellite backup</div>
                      <div className={styles.component}>5G/4G fallback</div>
                    </div>
                  </div>

                  <div className={styles.archLayer}>
                    <div className={styles.layerTitle}>
                      <span className={styles.layerIcon}>🤖</span>
                      AI Intelligence Layer
                    </div>
                    <div className={styles.layerComponents}>
                      <div className={styles.component}>Crop disease prediction</div>
                      <div className={styles.component}>Irrigation optimization</div>
                      <div className={styles.component}>Yield forecasting</div>
                      <div className={styles.component}>Pest outbreak alerts</div>
                    </div>
                  </div>

                  <div className={styles.archLayer}>
                    <div className={styles.layerTitle}>
                      <span className={styles.layerIcon}>📱</span>
                      User Interface Layer
                    </div>
                    <div className={styles.layerComponents}>
                      <div className={styles.component}>Mobile dashboard</div>
                      <div className={styles.component}>Voice commands</div>
                      <div className={styles.component}>SMS alerts</div>
                      <div className={styles.component}>Web analytics</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.ideaSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🚀</span>
              Key Differentiators
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.differentiatorsGrid}>
                <div className={styles.differentiatorCard}>
                  <div className={styles.diffIcon}>💰</div>
                  <h3 className={styles.diffTitle}>80% Cost Reduction</h3>
                  <p className={styles.diffDesc}>
                    Custom-designed open-source sensors cost $20-50 compared to $200-500 for commercial alternatives,
                    making precision farming financially viable for smallholders.
                  </p>
                  <div className={styles.diffMetrics}>
                    <span className={styles.metric}>Commercial: $500/acre</span>
                    <span className={styles.metric}>Our solution: $100/acre</span>
                  </div>
                </div>

                <div className={styles.differentiatorCard}>
                  <div className={styles.diffIcon}>🛠️</div>
                  <h3 className={styles.diffTitle}>Plug-and-Play Simplicity</h3>
                  <p className={styles.diffDesc}>
                    Self-installing sensors with automatic calibration and mobile-first setup process requires
                    no technical expertise – farmers can deploy the system in under 30 minutes.
                  </p>
                  <div className={styles.diffMetrics}>
                    <span className={styles.metric}>Setup time: &lt;30 minutes</span>
                    <span className={styles.metric}>No technical skills required</span>
                  </div>
                </div>

                <div className={styles.differentiatorCard}>
                  <div className={styles.diffIcon}>🔗</div>
                  <h3 className={styles.diffTitle}>Universal Compatibility</h3>
                  <p className={styles.diffDesc}>
                    Works with existing irrigation systems, farm equipment, and management software through
                    standardized APIs and modular integration kits.
                  </p>
                  <div className={styles.diffMetrics}>
                    <span className={styles.metric}>500+ equipment models supported</span>
                    <span className={styles.metric}>15 major farm software integrations</span>
                  </div>
                </div>

                <div className={styles.differentiatorCard}>
                  <div className={styles.diffIcon}>🌍</div>
                  <h3 className={styles.diffTitle}>Offline-First Design</h3>
                  <p className={styles.diffDesc}>
                    Full functionality without internet connectivity using edge computing and local mesh networks,
                    crucial for rural farming communities.
                  </p>
                  <div className={styles.diffMetrics}>
                    <span className={styles.metric}>30 days offline operation</span>
                    <span className={styles.metric}>10km mesh network range</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.ideaSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🎮</span>
              User Experience Design
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.userJourney}>
                <div className={styles.journeyStep}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>Quick Onboarding</h3>
                    <p className={styles.stepDesc}>
                      Scan QR code, install app, and place sensors. Voice-guided setup in local languages.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>Visual Dashboard</h3>
                    <p className={styles.stepDesc}>
                      Color-coded field maps show soil moisture, nutrient levels, and crop health at a glance.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>Smart Recommendations</h3>
                    <p className={styles.stepDesc}>
                      Daily suggestions for irrigation, fertilization, and pest control based on AI analysis.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>Automated Actions</h3>
                    <p className={styles.stepDesc}>
                      One-click approval triggers automated irrigation, fertigation, and alert systems.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.interfaceFeatures}>
                <div className={styles.featureGroup}>
                  <h3 className={styles.featureTitle}>📱 Mobile-First Interface</h3>
                  <ul className={styles.featureList}>
                    <li>Voice commands in 12 local languages</li>
                    <li>Visual indicators for non-literate users</li>
                    <li>Offline mode with full functionality</li>
                    <li>WhatsApp integration for alerts</li>
                  </ul>
                </div>

                <div className={styles.featureGroup}>
                  <h3 className={styles.featureTitle}>👨‍🌾 Farmer-Centric Features</h3>
                  <ul className={styles.featureList}>
                    <li>Crop-specific recommendations</li>
                    <li>Local market price integration</li>
                    <li>Weather forecasting with farming advice</li>
                    <li>Community knowledge sharing</li>
                  </ul>
                </div>

                <div className={styles.featureGroup}>
                  <h3 className={styles.featureTitle}>📊 Advanced Analytics</h3>
                  <ul className={styles.featureList}>
                    <li>Yield prediction accuracy 85-95%</li>
                    <li>Cost-benefit analysis for each action</li>
                    <li>Historical performance tracking</li>
                    <li>Comparative analysis with neighbors</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.ideaSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🌱</span>
              Sustainability Impact
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.impactGrid}>
                <div className={styles.impactCard}>
                  <div className={styles.impactIcon}>💧</div>
                  <h3 className={styles.impactTitle}>Water Conservation</h3>
                  <div className={styles.impactNumbers}>
                    <div className={styles.impactNumber}>30-50%</div>
                    <div className={styles.impactLabel}>Reduction in water usage</div>
                  </div>
                  <p className={styles.impactDesc}>
                    Smart irrigation based on real-time soil moisture and weather data prevents overwatering
                    and reduces water waste significantly.
                  </p>
                </div>

                <div className={styles.impactCard}>
                  <div className={styles.impactIcon}>🌿</div>
                  <h3 className={styles.impactTitle}>Chemical Reduction</h3>
                  <div className={styles.impactNumbers}>
                    <div className={styles.impactNumber}>40%</div>
                    <div className={styles.impactLabel}>Less fertilizer and pesticides</div>
                  </div>
                  <p className={styles.impactDesc}>
                    Precise nutrient application and early pest detection reduce chemical usage while
                    maintaining or improving crop yields.
                  </p>
                </div>

                <div className={styles.impactCard}>
                  <div className={styles.impactIcon}>🏭</div>
                  <h3 className={styles.impactTitle}>Carbon Footprint</h3>
                  <div className={styles.impactNumbers}>
                    <div className={styles.impactNumber}>25%</div>
                    <div className={styles.impactLabel}>Lower carbon emissions</div>
                  </div>
                  <p className={styles.impactDesc}>
                    Optimized equipment usage, reduced chemical applications, and improved soil health
                    contribute to lower farm carbon emissions.
                  </p>
                </div>

                <div className={styles.impactCard}>
                  <div className={styles.impactIcon}>🌍</div>
                  <h3 className={styles.impactTitle}>Biodiversity Protection</h3>
                  <div className={styles.impactNumbers}>
                    <div className={styles.impactNumber}>60%</div>
                    <div className={styles.impactLabel}>Less chemical runoff</div>
                  </div>
                  <p className={styles.impactDesc}>
                    Targeted application and natural pest control methods protect surrounding ecosystems
                    and promote beneficial insect populations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.ideaSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>💼</span>
              Business Model
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.businessModel}>
                <div className={styles.modelComponent}>
                  <h3 className={styles.modelTitle}>📦 Hardware-as-a-Service</h3>
                  <div className={styles.pricingTier}>
                    <div className={styles.tierName}>Starter Kit</div>
                    <div className={styles.tierPrice}>$99/year</div>
                    <div className={styles.tierDesc}>5 sensors, mobile app, basic analytics</div>
                    <ul className={styles.tierFeatures}>
                      <li>Soil moisture monitoring</li>
                      <li>Basic weather data</li>
                      <li>Mobile alerts</li>
                      <li>Community support</li>
                    </ul>
                  </div>
                </div>

                <div className={styles.modelComponent}>
                  <h3 className={styles.modelTitle}>🤝 Data Marketplace</h3>
                  <div className={styles.dataServices}>
                    <div className={styles.dataService}>
                      <h4>Farmer-to-Farmer</h4>
                      <p>Share best practices and learn from successful farms in similar conditions</p>
                    </div>
                    <div className={styles.dataService}>
                      <h4>Research Partnerships</h4>
                      <p>Contribute anonymized data to agricultural research institutions</p>
                    </div>
                    <div className={styles.dataService}>
                      <h4>Insurance Integration</h4>
                      <p>Provide verified data for crop insurance claims and risk assessment</p>
                    </div>
                  </div>
                </div>

                <div className={styles.modelComponent}>
                  <h3 className={styles.modelTitle}>🌐 Platform Ecosystem</h3>
                  <div className={styles.ecosystemPartners}>
                    <div className={styles.partnerCategory}>
                      <h4>Equipment Manufacturers</h4>
                      <p>Integration kits for smart irrigation systems and farm equipment</p>
                    </div>
                    <div className={styles.partnerCategory}>
                      <h4>Input Suppliers</h4>
                      <p>Automated ordering and optimized delivery of seeds and fertilizers</p>
                    </div>
                    <div className={styles.partnerCategory}>
                      <h4>Financial Services</h4>
                      <p>Data-driven loans and insurance products for farmers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.ideaSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🚀</span>
              Implementation Roadmap
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.roadmap}>
                <div className={styles.roadmapPhase}>
                  <div className={styles.phaseHeader}>
                    <div className={styles.phaseNumber}>Phase 1</div>
                    <div className={styles.phaseTimeline}>Months 1-6</div>
                  </div>
                  <h3 className={styles.phaseTitle}>Pilot Launch</h3>
                  <div className={styles.phaseGoals}>
                    <div className={styles.goal}>Deploy to 100 farms across 5 regions</div>
                    <div className={styles.goal}>Validate sensor accuracy and durability</div>
                    <div className={styles.goal}>Test user interface with diverse farmer groups</div>
                    <div className={styles.goal}>Establish manufacturing partnerships</div>
                  </div>
                </div>

                <div className={styles.roadmapPhase}>
                  <div className={styles.phaseHeader}>
                    <div className={styles.phaseNumber}>Phase 2</div>
                    <div className={styles.phaseTimeline}>Months 7-18</div>
                  </div>
                  <h3 className={styles.phaseTitle}>Scale Manufacturing</h3>
                  <div className={styles.phaseGoals}>
                    <div className={styles.goal}>Reach 10,000 farms deployment</div>
                    <div className={styles.goal}>Expand to 3 new countries</div>
                    <div className={styles.goal}>Launch advanced AI features</div>
                    <div className={styles.goal}>Secure Series A funding</div>
                  </div>
                </div>

                <div className={styles.roadmapPhase}>
                  <div className={styles.phaseHeader}>
                    <div className={styles.phaseNumber}>Phase 3</div>
                    <div className={styles.phaseTimeline}>Months 19-36</div>
                  </div>
                  <h3 className={styles.phaseTitle}>Global Expansion</h3>
                  <div className={styles.phaseGoals}>
                    <div className={styles.goal}>100,000+ active farms</div>
                    <div className={styles.goal}>Presence in 15+ countries</div>
                    <div className={styles.goal}>Full ecosystem integration</div>
                    <div className={styles.goal}>Profitability achieved</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className={styles.navigationFooter}>
          <h3>Continue Project Journey</h3>
          <div className={styles.navigationButtons}>
            <Link to="background" className={`${styles.navButton} ${styles.secondaryButton}`}>
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