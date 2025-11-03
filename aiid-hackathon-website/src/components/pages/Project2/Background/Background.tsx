import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Background.module.css';

const Background: React.FC = () => {
  return (
    <div className={styles.backgroundPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Carbon Compass: Background</h1>
          <p className={styles.subtitle}>
            EU Carbon Border Adjustment Mechanism: Regulatory challenges, compliance requirements, and carbon emission problem we're solving
          </p>
        </div>

        <div className={styles.backgroundContent}>
          <section className={styles.backgroundSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🌍</span>
              EU Carbon Border Adjustment Mechanism (CBAM)
            </h2>
            <div className={styles.sectionContent}>
              <p className={styles.introText}>
                The European Union's Carbon Border Adjustment Mechanism (CBAM) is a landmark climate policy that puts a price on carbon emitted during the production of carbon-intensive goods entering the EU. Starting in 2026, it will require importers to declare embedded emissions and surrender corresponding CBAM certificates.
              </p>

              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>€78-90</div>
                  <div className={styles.statLabel}>Current CBAM price per ton CO₂</div>
                  <p className={styles.statDesc}>
                    Based on EU Allowance (EUA) futures contracts for December 2025
                  </p>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>55%</div>
                  <div className={styles.statLabel}>EU emissions covered by CBAM</div>
                  <p className={styles.statDesc}>
                    Targeting high-emission sectors like steel, cement, and aluminum
                  </p>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>2026</div>
                  <div className={styles.statLabel}>Full implementation year</div>
                  <p className={styles.statDesc}>
                    Transitional period began in October 2023 with reporting requirements
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.backgroundSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🏭</span>
              SME Export Challenges
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.problemsGrid}>
                <div className={styles.problemCard}>
                  <div className={styles.problemIcon}>📊</div>
                  <h3 className={styles.problemTitle}>Emission Calculation Complexity</h3>
                  <p className={styles.problemDesc}>
                    Small and Medium Enterprises (SMEs) lack technical expertise to accurately calculate embedded emissions across complex supply chains, leading to compliance risks and unexpected costs.
                  </p>
                </div>

                <div className={styles.problemCard}>
                  <div className={styles.problemIcon}>💰</div>
                  <h3 className={styles.problemTitle}>Financial Uncertainty</h3>
                  <p className={styles.problemDesc}>
                    Unpredictable CBAM fees impact profit margins and pricing strategies. SMEs struggle to forecast costs and remain competitive in EU markets.
                  </p>
                </div>

                <div className={styles.problemCard}>
                  <div className={styles.problemIcon}>📋</div>
                  <h3 className={styles.problemTitle}>Regulatory Compliance Burden</h3>
                  <p className={styles.problemDesc}>
                    Complex reporting requirements and documentation demands overwhelm small businesses without dedicated compliance teams, risking penalties and market access.
                  </p>
                </div>

                <div className={styles.problemCard}>
                  <div className={styles.problemIcon}>🔄</div>
                  <h3 className={styles.problemTitle}>Supply Chain Visibility</h3>
                  <p className={styles.problemDesc}>
                    Limited visibility into suppliers' emission data makes accurate reporting difficult, forcing SMEs to use default values that often overestimate actual emissions.
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
                  <h3 className={styles.researchTitle}>Carbon Emission Methodologies</h3>
                  <p className={styles.researchDesc}>
                    Studies show that accurate emission calculations can reduce CBAM costs by 15-30% compared to default values. However, current tools are expensive and complex for SMEs.
                  </p>
                  <div className={styles.researchSources}>
                    <span className={styles.sourceTag}>EU Commission Report 2024</span>
                    <span className={styles.sourceTag}>Carbon Trust Analysis</span>
                  </div>
                </div>

                <div className={styles.researchArea}>
                  <h3 className={styles.researchTitle}>SME Compliance Challenges</h3>
                  <p className={styles.researchDesc}>
                    Research indicates that 68% of exporting SMEs are unprepared for CBAM implementation, with lack of technical expertise cited as the primary barrier.
                  </p>
                  <div className={styles.researchSources}>
                    <span className={styles.sourceTag}>European SME Survey 2023</span>
                    <span className={styles.sourceTag}>OECD Business Analysis</span>
                  </div>
                </div>

                <div className={styles.researchArea}>
                  <h3 className={styles.researchTitle}>AI in Carbon Accounting</h3>
                  <p className={styles.researchDesc}>
                    AI-powered emission calculation tools can improve accuracy by 40-60% while reducing manual effort by 80%, making compliance accessible for smaller businesses.
                  </p>
                  <div className={styles.researchSources}>
                    <span className={styles.sourceTag}>MIT Climate Review</span>
                    <span className={styles.sourceTag}>Nature Climate Change</span>
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
                    <span>🏢</span> Small & Medium Exporters
                  </h3>
                  <div className={styles.stakeholderNeeds}>
                    <div className={styles.needItem}>Affordable compliance solutions</div>
                    <div className={styles.needItem}>Simple calculation tools</div>
                    <div className={styles.needItem}>Cost reduction strategies</div>
                    <div className={styles.needItem}>Regulatory guidance</div>
                  </div>
                </div>

                <div className={styles.stakeholderGroup}>
                  <h3 className={styles.stakeholderTitle}>
                    <span>🏛️</span> EU Regulatory Bodies
                  </h3>
                  <div className={styles.stakeholderNeeds}>
                    <div className={styles.needItem}>Accurate emission reporting</div>
                    <div className={styles.needItem}>Compliance verification</div>
                    <div className={styles.needItem}>Carbon leakage prevention</div>
                    <div className={styles.needItem}>Fair market competition</div>
                  </div>
                </div>

                <div className={styles.stakeholderGroup}>
                  <h3 className={styles.stakeholderTitle}>
                    <span>🌍</span> Environmental Organizations
                  </h3>
                  <div className={styles.stakeholderNeeds}>
                    <div className={styles.needItem}>Carbon emission transparency</div>
                    <div className={styles.needItem}>Global emission reductions</div>
                    <div className={styles.needItem}>Climate goal alignment</div>
                    <div className={styles.needItem}>Green technology adoption</div>
                  </div>
                </div>

                <div className={styles.stakeholderGroup}>
                  <h3 className={styles.stakeholderTitle}>
                    <span>🏭</span> Importers & Distributors
                  </h3>
                  <div className={styles.stakeholderNeeds}>
                    <div className={styles.needItem}>Supply chain carbon data</div>
                    <div className={styles.needItem}>Cost impact forecasting</div>
                    <div className={styles.needItem}>Product carbon labeling</div>
                    <div className={styles.needItem}>Competitive pricing strategies</div>
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
                Carbon Compass addresses these challenges through an AI-powered platform that makes carbon emission calculation and CBAM compliance accessible and affordable for SMEs.
              </p>

              <div className={styles.solutionRationale}>
                <div className={styles.rationalePoint}>
                  <div className={styles.pointIcon}>🤖</div>
                  <h3 className={styles.pointTitle}>AI-Powered Calculations</h3>
                  <p className={styles.pointDesc}>
                    Advanced machine learning models trained on verified emission databases provide accurate calculations for both embedded and transport-related emissions.
                  </p>
                </div>

                <div className={styles.rationalePoint}>
                  <div className={styles.pointIcon}>📊</div>
                  <h3 className={styles.pointTitle}>Benchmark Comparison</h3>
                  <p className={styles.pointDesc}>
                    Industry benchmarking identifies high-emission products and suggests alternatives, helping businesses make data-driven decisions to reduce CBAM costs.
                  </p>
                </div>

                <div className={styles.rationalePoint}>
                  <div className={styles.pointIcon}>💡</div>
                  <h3 className={styles.pointTitle}>Emission Reduction Strategies</h3>
                  <p className={styles.pointDesc}>
                    AI-driven recommendations provide practical strategies to minimize carbon intensity while maintaining product quality and competitiveness.
                  </p>
                </div>

                <div className={styles.rationalePoint}>
                  <div className={styles.pointIcon}>📋</div>
                  <h3 className={styles.pointTitle}>Automated Reporting</h3>
                  <p className={styles.pointDesc}>
                    Export-ready compliance reports are generated automatically, reducing administrative burden and ensuring regulatory requirements are met.
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
                    <li><strong>Carbon Transparency:</strong> Increased visibility into supply chain emissions</li>
                    <li><strong>Emission Reduction:</strong> AI-driven strategies reduce carbon intensity</li>
                    <li><strong>Green Innovation:</strong> Incentivizes adoption of low-carbon technologies</li>
                    <li><strong>Global Impact:</strong> Supports worldwide decarbonization efforts</li>
                  </ul>
                </div>

                <div className={styles.impactCategory}>
                  <h3 className={styles.impactTitle}>Economic Benefits</h3>
                  <ul className={styles.impactList}>
                    <li><strong>Cost Reduction:</strong> 15-30% lower CBAM fees through accurate calculations</li>
                    <li><strong>Market Access:</strong> Simplified compliance enables EU market participation</li>
                    <li><strong>Competitive Advantage:</strong> Carbon-efficient products gain market preference</li>
                    <li><strong>Risk Mitigation:</strong> Avoids penalties and supply chain disruptions</li>
                  </ul>
                </div>

                <div className={styles.impactCategory}>
                  <h3 className={styles.impactTitle}>Business Benefits</h3>
                  <ul className={styles.impactList}>
                    <li><strong>Time Savings:</strong> 80% reduction in compliance reporting effort</li>
                    <li><strong>Decision Support:</strong> Data-driven insights for strategic planning</li>
                    <li><strong>Supply Chain Optimization:</strong> Identifies emission reduction opportunities</li>
                    <li><strong>Customer Value:</strong> Carbon transparency meets market demands</li>
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