import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Implementation.module.css';

const Implementation: React.FC = () => {
  return (
    <div className={styles.implementationPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Carbon Compass: Implementation</h1>
          <p className={styles.subtitle}>
            AI-powered carbon emission calculation platform: Technical implementation details, AI engine development, and CBAM compliance automation
          </p>
        </div>

        <div className={styles.implementationContent}>
          <section className={styles.implementationSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>⏱️</span>
              Development Timeline
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineTime}>Hours 0-12</div>
                    <h3 className={styles.timelineTitle}>AI Engine Development</h3>
                    <p className={styles.timelineDesc}>
                      Implemented TRAE + Diffy LLM for emission calculations, developed CBAM fee calculator, and created benchmark comparison system
                    </p>
                  </div>
                  <div className={styles.timelineDot}></div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineTime}>Hours 13-24</div>
                    <h3 className={styles.timelineTitle}>Frontend Development</h3>
                    <p className={styles.timelineDesc}>
                      Built React + Next.js interface, implemented SME-focused dashboard, and created emission visualization tools
                    </p>
                  </div>
                  <div className={styles.timelineDot}></div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineTime}>Hours 25-36</div>
                    <h3 className={styles.timelineTitle}>Backend & API Development</h3>
                    <p className={styles.timelineDesc}>
                      Developed Python FastAPI backend, integrated carbon emission databases, and implemented secure authentication
                    </p>
                  </div>
                  <div className={styles.timelineDot}></div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineTime}>Hours 37-44</div>
                    <h3 className={styles.timelineTitle}>Data Integration & Testing</h3>
                    <p className={styles.timelineDesc}>
                      Connected to verified carbon databases, tested calculation accuracy, and validated CBAM compliance features
                    </p>
                  </div>
                  <div className={styles.timelineDot}></div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineTime}>Hours 45-48</div>
                    <h3 className={styles.timelineTitle}>Deployment & Finalization</h3>
                    <p className={styles.timelineDesc}>
                      Deployed to Vercel + Google Cloud Run, performed final testing, and prepared documentation
                    </p>
                  </div>
                  <div className={styles.timelineDot}></div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.implementationSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🔧</span>
              Technical Architecture
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.architectureDiagram}>
                <h3 className={styles.diagramTitle}>Carbon Compliance Platform Architecture</h3>
                <div className={styles.architectureFlow}>
                  <div className={styles.archComponent}>
                    <span className={styles.archIcon}>🤖</span>
                    <div className={styles.archTitle}>AI Engine</div>
                    <p className={styles.archDesc}>TRAE + Diffy LLM for emission calculations</p>
                  </div>
                  <div className={styles.archComponent}>
                    <span className={styles.archIcon}>📊</span>
                    <div className={styles.archTitle}>Data Sources</div>
                    <p className={styles.archDesc}>Carbon databases, transport emission factors</p>
                  </div>
                  <div className={styles.archComponent}>
                    <span className={styles.archIcon}>🌐</span>
                    <div className={styles.archTitle}>API Layer</div>
                    <p className={styles.archDesc}>FastAPI backend with secure endpoints</p>
                  </div>
                  <div className={styles.archComponent}>
                    <span className={styles.archIcon}>👥</span>
                    <div className={styles.archTitle}>User Interface</div>
                    <p className={styles.archDesc}>React + Next.js SME-focused dashboard</p>
                  </div>
                  <div className={styles.archComponent}>
                    <span className={styles.archIcon}>☁️</span>
                    <div className={styles.archTitle}>Cloud Infrastructure</div>
                    <p className={styles.archDesc}>Vercel frontend + Google Cloud Run backend</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.implementationSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🔧</span>
              Technology Stack
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.techGrid}>
                <div className={styles.techCategory}>
                  <h3 className={styles.techCategoryTitle}>
                    <span>🤖</span> AI & Machine Learning
                  </h3>
                  <div className={styles.techList}>
                    <span className={styles.techItem}>TRAE + Diffy LLM</span>
                    <span className={styles.techItem}>Emission calculation algorithms</span>
                    <span className={styles.techItem}>CBAM fee calculator</span>
                    <span className={styles.techItem}>Benchmark comparison system</span>
                  </div>
                </div>
                <div className={styles.techCategory}>
                  <h3 className={styles.techCategoryTitle}>
                    <span>👥</span> Frontend Framework
                  </h3>
                  <div className={styles.techList}>
                    <span className={styles.techItem}>React + Next.js 15</span>
                    <span className={styles.techItem}>Tailwind CSS</span>
                    <span className={styles.techItem}>Responsive design</span>
                    <span className={styles.techItem}>Interactive data visualization</span>
                  </div>
                </div>
                <div className={styles.techCategory}>
                  <h3 className={styles.techCategoryTitle}>
                    <span>🔧</span> Backend Framework
                  </h3>
                  <div className={styles.techList}>
                    <span className={styles.techItem}>Python (FastAPI)</span>
                    <span className={styles.techItem}>RESTful API design</span>
                    <span className={styles.techItem}>Secure authentication</span>
                    <span className={styles.techItem}>Real-time data processing</span>
                  </div>
                </div>
                <div className={styles.techCategory}>
                  <h3 className={styles.techCategoryTitle}>
                    <span>🗄️</span> Database & Storage
                  </h3>
                  <div className={styles.techList}>
                    <span className={styles.techItem}>Google Cloud Storage</span>
                    <span className={styles.techItem}>Dataset management</span>
                    <span className={styles.techItem}>Carbon emission benchmarks</span>
                    <span className={styles.techItem}>Secure data access</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.implementationSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🌐</span>
              External Integrations
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.integrationGrid}>
                <div className={styles.integrationCategory}>
                  <h3 className={styles.integrationTitle}>
                    <span>📊</span> Carbon Emission Databases
                  </h3>
                  <div className={styles.integrationList}>
                    <span className={styles.integrationItem}>Verified carbon emission factors</span>
                    <span className={styles.integrationItem}>Industry-specific benchmarks</span>
                    <span className={styles.integrationItem}>EU regulatory data sources</span>
                    <span className={styles.integrationItem}>Real-time data updates</span>
                  </div>
                </div>
                <div className={styles.integrationCategory}>
                  <h3 className={styles.integrationTitle}>
                    <span>🚚</span> Transport Emission APIs
                  </h3>
                  <div className={styles.integrationList}>
                    <span className={styles.integrationItem}>Shipping route calculations</span>
                    <span className={styles.integrationItem}>Transport mode factors</span>
                    <span className={styles.integrationItem}>Distance-based emissions</span>
                    <span className={styles.integrationItem}>Multi-modal transport support</span>
                  </div>
                </div>
                <div className={styles.integrationCategory}>
                  <h3 className={styles.integrationTitle}>
                    <span>🏛️</span> Regulatory Systems
                  </h3>
                  <div className={styles.integrationList}>
                    <span className={styles.integrationItem}>EU CBAM compliance data</span>
                    <span className={styles.integrationItem}>Carbon price tracking</span>
                    <span className={styles.integrationItem}>Regulatory updates</span>
                    <span className={styles.integrationItem}>Reporting standards</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.implementationSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>💻</span>
              Key Implementation Details
            </h2>
            <div className={styles.sectionContent}>
              <h3>Carbon Emission Calculation Engine</h3>
              <div className={styles.codeBlock}>
                <span className={styles.codeKeyword}>class</span> <span className={styles.codeFunction}>CarbonEmissionCalculator</span>:<br/>
                &nbsp;&nbsp;<span className={styles.codeKeyword}>def</span> <span className={styles.codeFunction}>__init__</span>(self):<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;self.emission_factors = load_emission_database()<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;self.transport_factors = load_transport_database()<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;self.eu_benchmarks = load_eu_benchmarks()<br/><br/>
                &nbsp;&nbsp;<span className={styles.codeKeyword}>async def</span> <span className={styles.codeFunction}>calculate_shipment_emissions</span>(self, shipment_data):<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeComment}># Calculate embedded emissions</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;embedded_emissions = 0<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeKeyword}>for</span> product <span className={styles.codeKeyword}>in</span> shipment_data[<span className={styles.codeString}>"products"</span>]:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;product_factor = self.emission_factors.get(product[<span className={styles.codeString}>"category"</span>], product[<span className={styles.codeString}>"type"</span>])<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;embedded_emissions += product_factor * product[<span className={styles.codeString}>"quantity"</span>]<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeComment}># Calculate transport emissions</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;transport_distance = shipment_data[<span className={styles.codeString}>"distance"</span>]<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;transport_mode = shipment_data[<span className={styles.codeString}>"transport_mode"</span>]<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;transport_factor = self.transport_factors.get(transport_mode)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;transport_emissions = transport_distance * transport_factor<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeComment}># Calculate total emissions</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;total_emissions = embedded_emissions + transport_emissions<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeComment}># Calculate CBAM fees</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;eua_price = get_current_eua_price()<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;cbam_fee = total_emissions * eua_price<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeKeyword}>return</span> &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeString}>"total_emissions"</span>: total_emissions,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeString}>"cbam_fee"</span>: cbam_fee,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeString}>"benchmark_comparison"</span>: self.compare_to_eu_benchmarks(total_emissions)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;
              </div>

              <h3>CBAM Fee Calculation Algorithm</h3>
              <div className={styles.codeBlock}>
                <span className={styles.codeKeyword}>def</span> <span className={styles.codeFunction}>calculate_cbam_fee</span>(emissions, eua_price):<br/>
                &nbsp;&nbsp;<span className={styles.codeComment}># Apply EU CBAM formula</span><br/>
                &nbsp;&nbsp;base_fee = emissions * eua_price<br/>
                &nbsp;&nbsp;<span className={styles.codeComment}># Apply adjustment factors based on industry</span><br/>
                &nbsp;&nbsp;<span className={styles.codeKeyword}>if</span> industry <span className={styles.codeKeyword}>in</span> high_emission_industries:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;adjustment_factor = 1.0&nbsp;&nbsp;<span className={styles.codeComment}># No adjustment for standard industries</span><br/>
                &nbsp;&nbsp;<span className={styles.codeKeyword}>else</span>:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;adjustment_factor = 0.8&nbsp;&nbsp;<span className={styles.codeComment}># 20% reduction for green industries</span><br/><br/>
                &nbsp;&nbsp;adjusted_fee = base_fee * adjustment_factor<br/><br/>
                &nbsp;&nbsp;<span className={styles.codeComment}># Apply transitional period discounts</span><br/>
                &nbsp;&nbsp;<span className={styles.codeKeyword}>if</span> is_in_transitional_period():<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;final_fee = adjusted_fee * 0.5&nbsp;&nbsp;<span className={styles.codeComment}># 50% discount during transition</span><br/>
                &nbsp;&nbsp;<span className={styles.codeKeyword}>else</span>:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;final_fee = adjusted_fee<br/><br/>
                &nbsp;&nbsp;<span className={styles.codeKeyword}>return</span> final_fee
              </div>

              <h3>Benchmark Comparison System</h3>
              <div className={styles.codeBlock}>
                <span className={styles.codeKeyword}>def</span> <span className={styles.codeFunction}>compare_to_eu_benchmarks</span>(emissions, product_category):<br/>
                &nbsp;&nbsp;<span className={styles.codeComment}># Get EU industry benchmarks</span><br/>
                &nbsp;&nbsp;industry_benchmark = eu_benchmarks.get(product_category)<br/>
                &nbsp;&nbsp;<span className={styles.codeComment}># Calculate performance ratio</span><br/>
                &nbsp;&nbsp;performance_ratio = emissions / industry_benchmark<br/><br/>
                &nbsp;&nbsp;<span className={styles.codeComment}># Generate insights and recommendations</span><br/>
                &nbsp;&nbsp;<span className={styles.codeKeyword}>if</span> performance_ratio {'<'} 0.8:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;performance_level = <span className={styles.codeString}>"Excellent"</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;recommendation = <span className={styles.codeString}>"Maintain current practices"</span><br/>
                &nbsp;&nbsp;<span className={styles.codeKeyword}>elif</span> performance_ratio {'<'} 1.0:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;performance_level = <span className={styles.codeString}>"Good"</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;recommendation = <span className={styles.codeString}>"Minor optimizations recommended"</span><br/>
                &nbsp;&nbsp;<span className={styles.codeKeyword}>else</span>:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;performance_level = <span className={styles.codeString}>"Needs Improvement"</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;recommendation = <span className={styles.codeString}>"Significant emission reduction strategies required"</span><br/><br/>
                &nbsp;&nbsp;<span className={styles.codeKeyword}>return</span> &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeString}>"performance_level"</span>: performance_level,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeString}>"performance_ratio"</span>: performance_ratio,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeString}>"recommendation"</span>: recommendation<br/>
                &nbsp;&nbsp;&#125;
              </div>
            </div>
          </section>

          <section className={styles.implementationSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>⚠️</span>
              Technical Challenges & Solutions
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.challengesGrid}>
                <div className={styles.challengeCard}>
                  <h3 className={styles.challengeTitle}>
                    <span>📊</span> Emission Data Accuracy
                  </h3>
                  <p className={styles.challengeDesc}>
                    Carbon emission factors vary significantly by region, production method, and supply chain complexity.
                  </p>
                  <div className={styles.solutionBox}>
                    <h4 className={styles.solutionTitle}>Solution Implemented:</h4>
                    <p className={styles.solutionDesc}>
                      Multi-source data verification, AI-powered factor selection, and confidence scoring for calculations.
                    </p>
                  </div>
                </div>

                <div className={styles.challengeCard}>
                  <h3 className={styles.challengeTitle}>
                    <span>🏛️</span> Regulatory Complexity
                  </h3>
                  <p className={styles.challengeDesc}>
                    CBAM regulations are complex and evolving, requiring continuous updates to calculation methods.
                  </p>
                  <div className={styles.solutionBox}>
                    <h4 className={styles.solutionTitle}>Solution Implemented:</h4>
                    <p className={styles.solutionDesc}>
                      Regulatory intelligence system with automated updates, expert validation, and compliance checking.
                    </p>
                  </div>
                </div>

                <div className={styles.challengeCard}>
                  <h3 className={styles.challengeTitle}>
                    <span>🔄</span> Real-time Data Integration
                  </h3>
                  <p className={styles.challengeDesc}>
                    Integrating with multiple external APIs and databases while maintaining performance and reliability.
                  </p>
                  <div className={styles.solutionBox}>
                    <h4 className={styles.solutionTitle}>Solution Implemented:</h4>
                    <p className={styles.solutionDesc}>
                      Caching strategies, fallback data sources, and robust error handling for API integrations.
                    </p>
                  </div>
                </div>

                <div className={styles.challengeCard}>
                  <h3 className={styles.challengeTitle}>
                    <span>👥</span> SME Usability
                  </h3>
                  <p className={styles.challengeDesc}>
                      Making complex carbon calculations accessible to users without technical expertise.
                  </p>
                  <div className={styles.solutionBox}>
                    <h4 className={styles.solutionTitle}>Solution Implemented:</h4>
                    <p className={styles.solutionDesc}>
                      Simplified interface, guided workflows, contextual help, and plain-language explanations.
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
            <Link to="../idea" className={`${styles.navButton} ${styles.secondaryButton}`}>
              ← Back to Project Idea
            </Link>
            <Link to="result" className={`${styles.navButton} ${styles.primaryButton}`}>
              View Project Results →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Implementation;