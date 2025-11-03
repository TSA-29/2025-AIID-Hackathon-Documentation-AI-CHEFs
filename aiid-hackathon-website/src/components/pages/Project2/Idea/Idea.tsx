import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Idea.module.css';

const Idea: React.FC = () => {
  return (
    <div className={styles.ideaPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Carbon Compass: Idea</h1>
          <p className={styles.subtitle}>
            AI-powered carbon emission calculation platform: Regulatory intelligence, logistics data integration, and CBAM compliance automation
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
                Our vision is to democratize carbon compliance for SMEs through an affordable, integrated AI platform that makes CBAM compliance accessible and manageable for businesses of all sizes.
              </p>

              <div className={styles.innovationHighlight}>
                <div className={styles.highlightCard}>
                  <div className={styles.highlightIcon}>📊</div>
                  <h3 className={styles.highlightTitle}>Accurate Emission Calculations</h3>
                  <p className={styles.highlightDesc}>
                    Breaking down complexity barriers to make carbon emission calculations accessible to SMEs who lack technical expertise.
                  </p>
                </div>

                <div className={styles.highlightCard}>
                  <div className={styles.highlightIcon}>💰</div>
                  <h3 className={styles.highlightTitle}>Cost Reduction Strategies</h3>
                  <p className={styles.highlightDesc}>
                    From emission data to actionable insights, creating self-regulating compliance systems that adapt to regulatory changes.
                  </p>
                </div>

                <div className={styles.highlightCard}>
                  <div className={styles.highlightIcon}>📋</div>
                  <h3 className={styles.highlightTitle}>Automated Reporting</h3>
                  <p className={styles.highlightDesc}>
                    Transforming regulatory intuition into quantifiable compliance using AI models trained on verified carbon databases.
                  </p>
                </div>

                <div className={styles.highlightCard}>
                  <div className={styles.highlightIcon}>🔄</div>
                  <h3 className={styles.highlightTitle}>Closed-Loop Compliance</h3>
                  <p className={styles.highlightDesc}>
                    Integration with existing business systems enables automated response to regulatory changes, reducing manual intervention.
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
                <h3 className={styles.diagramTitle}>Integrated Carbon Compliance Ecosystem</h3>
                <div className={styles.architectureFlow}>
                  <div className={styles.archLayer}>
                    <div className={styles.layerTitle}>
                      <span className={styles.layerIcon}>📊</span>
                      Data Integration Layer
                    </div>
                    <div className={styles.layerComponents}>
                      <div className={styles.component}>Logistics data sources</div>
                      <div className={styles.component}>Carbon emission databases</div>
                      <div className={styles.component}>Transport emission factors</div>
                      <div className={styles.component}>EU industry benchmarks</div>
                    </div>
                  </div>

                  <div className={styles.archLayer}>
                    <div className={styles.layerTitle}>
                      <span className={styles.layerIcon}>🤖</span>
                      AI Intelligence Layer
                    </div>
                    <div className={styles.layerComponents}>
                      <div className={styles.component}>Emission calculation engine</div>
                      <div className={styles.component}>CBAM fee calculator</div>
                      <div className={styles.component}>Benchmark comparison system</div>
                      <div className={styles.component}>Reduction strategy generator</div>
                    </div>
                  </div>

                  <div className={styles.archLayer}>
                    <div className={styles.layerTitle}>
                      <span className={styles.layerIcon}>🌐</span>
                      Connectivity Layer
                    </div>
                    <div className={styles.layerComponents}>
                      <div className={styles.component}>API integrations</div>
                      <div className={styles.component}>Real-time data sync</div>
                      <div className={styles.component}>Cloud storage</div>
                      <div className={styles.component}>Secure data transmission</div>
                    </div>
                  </div>

                  <div className={styles.archLayer}>
                    <div className={styles.layerTitle}>
                      <span className={styles.layerIcon}>👥</span>
                      User Interface Layer
                    </div>
                    <div className={styles.layerComponents}>
                      <div className={styles.component}>SME-friendly dashboard</div>
                      <div className={styles.component}>Compliance reporting tools</div>
                      <div className={styles.component}>Cost analysis interface</div>
                      <div className={styles.component}>Export-ready documentation</div>
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
                  <div className={styles.diffIcon}>🎯</div>
                  <h3 className={styles.diffTitle}>SME-Focused Design</h3>
                  <p className={styles.diffDesc}>
                    Simplified interface tailored to small and medium businesses without dedicated compliance teams, making complex regulations accessible.
                  </p>
                  <div className={styles.diffMetrics}>
                    <span className={styles.metric}>Setup time: {'<'}15 minutes</span>
                    <span className={styles.metric}>No technical expertise required</span>
                  </div>
                </div>

                <div className={styles.differentiatorCard}>
                  <div className={styles.diffIcon}>🤖</div>
                  <h3 className={styles.diffTitle}>AI-Powered Accuracy</h3>
                  <p className={styles.diffDesc}>
                    Advanced machine learning models provide 40-60% more accurate emission calculations compared to default values, reducing CBAM costs.
                  </p>
                  <div className={styles.diffMetrics}>
                    <span className={styles.metric}>40-60% improvement in accuracy</span>
                    <span className={styles.metric}>15-30% reduction in CBAM fees</span>
                  </div>
                </div>

                <div className={styles.differentiatorCard}>
                  <div className={styles.diffIcon}>📊</div>
                  <h3 className={styles.diffTitle}>Benchmark Comparison</h3>
                  <p className={styles.diffDesc}>
                    Industry benchmarking identifies high-emission products and suggests alternatives, helping businesses make data-driven decisions.
                  </p>
                  <div className={styles.diffMetrics}>
                    <span className={styles.metric}>EU industry benchmarks</span>
                    <span className={styles.metric}>Alternative product suggestions</span>
                  </div>
                </div>

                <div className={styles.differentiatorCard}>
                  <div className={styles.diffIcon}>🔄</div>
                  <h3 className={styles.diffTitle}>Regulatory Intelligence</h3>
                  <p className={styles.diffDesc}>
                    Automated updates to reflect changing EU regulations, ensuring continuous compliance without manual monitoring.
                  </p>
                  <div className={styles.diffMetrics}>
                    <span className={styles.metric}>Real-time regulatory updates</span>
                    <span className={styles.metric}>Automated compliance checks</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.ideaSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>👥</span>
              User Experience Design
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.userJourney}>
                <div className={styles.journeyStep}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>Quick Onboarding</h3>
                    <p className={styles.stepDesc}>
                      Simple registration process with guided setup for business profile, import data, and compliance requirements.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>Data Integration</h3>
                    <p className={styles.stepDesc}>
                      Connect to existing business systems or upload shipment data for automatic emission calculations.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>Emission Analysis</h3>
                    <p className={styles.stepDesc}>
                      Visual dashboard shows carbon footprint by product, shipment, and supplier with AI-powered insights.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>Compliance Reporting</h3>
                    <p className={styles.stepDesc}>
                      One-click generation of export-ready CBAM reports with all required documentation and certificates.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.interfaceFeatures}>
                <div className={styles.featureGroup}>
                  <h3 className={styles.featureTitle}>📊 Analytics Dashboard</h3>
                  <ul className={styles.featureList}>
                    <li>Carbon emission breakdown by product category</li>
                    <li>CBAM cost forecasting and scenario analysis</li>
                    <li>Supplier emission performance comparison</li>
                    <li>Historical compliance tracking</li>
                  </ul>
                </div>

                <div className={styles.featureGroup}>
                  <h3 className={styles.featureTitle}>🎯 Reduction Strategies</h3>
                  <ul className={styles.featureList}>
                    <li>AI-generated emission reduction recommendations</li>
                    <li>Cost-benefit analysis for each strategy</li>
                    <li>Implementation timeline and resource requirements</li>
                    <li>Expected ROI and compliance benefits</li>
                  </ul>
                </div>

                <div className={styles.featureGroup}>
                  <h3 className={styles.featureTitle}>📋 Compliance Tools</h3>
                  <ul className={styles.featureList}>
                    <li>Automated CBAM report generation</li>
                    <li>Document management and version control</li>
                    <li>Regulatory requirement tracking</li>
                    <li>Audit trail and evidence collection</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.ideaSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🌍</span>
              Sustainability Impact
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.impactGrid}>
                <div className={styles.impactCard}>
                  <div className={styles.impactIcon}>📊</div>
                  <h3 className={styles.impactTitle}>Carbon Transparency</h3>
                  <div className={styles.impactNumbers}>
                    <div className={styles.impactNumber}>100%</div>
                    <div className={styles.impactLabel}>Supply chain visibility</div>
                  </div>
                  <p className={styles.impactDesc}>
                    Complete emission tracking across entire supply chain enables informed decisions and targeted reductions.
                  </p>
                </div>

                <div className={styles.impactCard}>
                  <div className={styles.impactIcon}>🎯</div>
                  <h3 className={styles.impactTitle}>Emission Reduction</h3>
                  <div className={styles.impactNumbers}>
                    <div className={styles.impactNumber}>20-40%</div>
                    <div className={styles.impactLabel}>Lower carbon intensity</div>
                  </div>
                  <p className={styles.impactDesc}>
                    AI-driven strategies identify practical reduction opportunities without compromising product quality.
                  </p>
                </div>

                <div className={styles.impactCard}>
                  <div className={styles.impactIcon}>💰</div>
                  <h3 className={styles.impactTitle}>Economic Benefits</h3>
                  <div className={styles.impactNumbers}>
                    <div className={styles.impactNumber}>15-30%</div>
                    <div className={styles.impactLabel}>Lower CBAM costs</div>
                  </div>
                  <p className={styles.impactDesc}>
                    Accurate calculations and strategic reductions minimize compliance costs and improve competitiveness.
                  </p>
                </div>

                <div className={styles.impactCard}>
                  <div className={styles.impactIcon}>🌍</div>
                  <h3 className={styles.impactTitle}>Global Decarbonization</h3>
                  <p className={styles.impactDesc}>
                    Supporting worldwide efforts to combat climate change through accessible carbon management tools.
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
                  <h3 className={styles.modelTitle}>💰 Subscription Tiers</h3>
                  <div className={styles.pricingTier}>
                    <div className={styles.tierName}>Starter</div>
                    <div className={styles.tierPrice}>€99/month</div>
                    <div className={styles.tierDesc}>Up to 50 shipments/month, basic reporting</div>
                    <ul className={styles.tierFeatures}>
                      <li>Emission calculations</li>
                      <li>CBAM fee estimation</li>
                      <li>Basic reporting tools</li>
                      <li>Email support</li>
                    </ul>
                  </div>
                </div>

                <div className={styles.modelComponent}>
                  <h3 className={styles.modelTitle}>🤝 Enterprise Solutions</h3>
                  <div className={styles.dataServices}>
                    <div className={styles.dataService}>
                      <h4>Custom Integration</h4>
                      <p>API connections to existing ERP and logistics systems</p>
                    </div>
                    <div className={styles.dataService}>
                      <h4>Advanced Analytics</h4>
                      <p>Custom dashboards and detailed emission insights</p>
                    </div>
                    <div className={styles.dataService}>
                      <h4>Compliance Consulting</h4>
                      <p>Expert guidance on complex CBAM requirements</p>
                    </div>
                  </div>
                </div>

                <div className={styles.modelComponent}>
                  <h3 className={styles.modelTitle}>🌐 Platform Ecosystem</h3>
                  <div className={styles.ecosystemPartners}>
                    <div className={styles.partnerCategory}>
                      <h4>Carbon Marketplaces</h4>
                      <p>Integration with carbon credit trading platforms</p>
                    </div>
                    <div className={styles.partnerCategory}>
                      <h4>Logistics Providers</h4>
                      <p>Direct data feeds from shipping and freight companies</p>
                    </div>
                    <div className={styles.partnerCategory}>
                      <h4>Regulatory Bodies</h4>
                      <p>Official certification and verification partnerships</p>
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
                  <h3 className={styles.phaseTitle}>Platform Launch</h3>
                  <div className={styles.phaseGoals}>
                    <div className={styles.goal}>Deploy to 100 SMEs across 5 industries</div>
                    <div className={styles.goal}>Validate emission calculation accuracy</div>
                    <div className={styles.goal}>Test user interface with diverse business groups</div>
                    <div className={styles.goal}>Establish regulatory partnerships</div>
                  </div>
                </div>

                <div className={styles.roadmapPhase}>
                  <div className={styles.phaseHeader}>
                    <div className={styles.phaseNumber}>Phase 2</div>
                    <div className={styles.phaseTimeline}>Months 7-18</div>
                  </div>
                  <h3 className={styles.phaseTitle}>Feature Expansion</h3>
                  <div className={styles.phaseGoals}>
                    <div className={styles.goal}>Reach 1,000 active businesses</div>
                    <div className={styles.goal}>Expand to 10 new industry sectors</div>
                    <div className={styles.goal}>Launch advanced AI reduction strategies</div>
                    <div className={styles.goal}>Secure Series A funding</div>
                  </div>
                </div>

                <div className={styles.roadmapPhase}>
                  <div className={styles.phaseHeader}>
                    <div className={styles.phaseNumber}>Phase 3</div>
                    <div className={styles.phaseTimeline}>Months 19-36</div>
                  </div>
                  <h3 className={styles.phaseTitle}>Global Compliance</h3>
                  <div className={styles.phaseGoals}>
                    <div className={styles.goal}>10,000+ active businesses</div>
                    <div className={styles.goal}>Support for multiple carbon border mechanisms</div>
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