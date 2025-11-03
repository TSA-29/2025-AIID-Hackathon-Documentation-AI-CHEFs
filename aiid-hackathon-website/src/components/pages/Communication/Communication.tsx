import React, { useState } from 'react';
import styles from './Communication.module.css';

const Communication: React.FC = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [selectedMetric, setSelectedMetric] = useState<string>('revenue');
  return (
    <div className={styles.communicationPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Business Plan & Market Strategy</h1>
          <p className={styles.subtitle}>
            Our social media promotion efforts, user testing initiatives, and community engagement activities
          </p>
        </div>
        
        <div className={styles.communicationContent}>
          <section className={styles.communicationSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>📹</span>
              Social Media Promotion
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.videoContainer}>
                <video
                  controls
                  className={styles.promoVideo}
                  poster="/images/main-logo.png"
                  src={import.meta.env.BASE_URL + 'videos/QuickAIPromoVideo.mp4'}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>

          <section className={styles.communicationSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🎯</span>
              Arrowista - Business Plan
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.businessPlan}>
                <div className={styles.planSection}>
                  <h3 className={styles.planTitle}>Target Market</h3>
                  <p className={styles.planContent}>
                    Arrowista targets the growing market of online content creators, digital marketers, and social media managers who require efficient tools for content creation and distribution. Our primary focus is on small to medium-sized businesses (SMBs) and individual creators looking to enhance their digital presence.
                  </p>
                  <div className={styles.marketChart}>
                    <div className={styles.chartBar} style={{height: '85%', backgroundColor: '#a78bfa'}}>
                      <span className={styles.chartLabel}>Content Creators</span>
                      <span className={styles.chartValue}>85%</span>
                    </div>
                    <div className={styles.chartBar} style={{height: '70%', backgroundColor: '#22d3ee'}}>
                      <span className={styles.chartLabel}>Digital Marketers</span>
                      <span className={styles.chartValue}>70%</span>
                    </div>
                    <div className={styles.chartBar} style={{height: '60%', backgroundColor: '#34d399'}}>
                      <span className={styles.chartLabel}>SMBs</span>
                      <span className={styles.chartValue}>60%</span>
                    </div>
                  </div>
                </div>
                
                <div className={styles.planSection}>
                  <h3 className={styles.planTitle}>Target Customers</h3>
                  <div className={styles.customerCards}>
                    <div className={styles.customerCard} onClick={() => setActiveProject('social-managers')}>
                      <div className={styles.customerIcon}>👥</div>
                      <h4>Social Media Managers</h4>
                      <p>Handling multiple client accounts</p>
                      <div className={styles.customerStat}>2.5M+ professionals</div>
                    </div>
                    <div className={styles.customerCard} onClick={() => setActiveProject('agencies')}>
                      <div className={styles.customerIcon}>🏢</div>
                      <h4>Marketing Agencies</h4>
                      <p>Streamlined content workflows</p>
                      <div className={styles.customerStat}>500K+ agencies</div>
                    </div>
                    <div className={styles.customerCard} onClick={() => setActiveProject('ecommerce')}>
                      <div className={styles.customerIcon}>🛒</div>
                      <h4>E-commerce</h4>
                      <p>Regular product promotions</p>
                      <div className={styles.customerStat}>10M+ businesses</div>
                    </div>
                  </div>
                </div>
                
                <div className={styles.planSection}>
                  <h3 className={styles.planTitle}>Revenue Model</h3>
                  <div className={styles.revenueContainer}>
                    <div className={styles.revenueTabs}>
                      <button
                        className={`${styles.revenueTab} ${selectedMetric === 'revenue' ? styles.active : ''}`}
                        onClick={() => setSelectedMetric('revenue')}
                      >
                        Revenue Streams
                      </button>
                      <button
                        className={`${styles.revenueTab} ${selectedMetric === 'growth' ? styles.active : ''}`}
                        onClick={() => setSelectedMetric('growth')}
                      >
                        Growth Projection
                      </button>
                    </div>
                    {selectedMetric === 'revenue' && (
                      <div className={styles.revenueChart}>
                        <div className={styles.tierCard}>
                          <h4>Basic</h4>
                          <div className={styles.price}>$9.99<span>/month</span></div>
                          <ul>
                            <li>Basic AI suggestions</li>
                            <li>3 social accounts</li>
                            <li>Standard analytics</li>
                          </ul>
                        </div>
                        <div className={`${styles.tierCard} ${styles.featured}`}>
                          <h4>Professional</h4>
                          <div className={styles.price}>$24.99<span>/month</span></div>
                          <ul>
                            <li>Advanced AI optimization</li>
                            <li>10 social accounts</li>
                            <li>Advanced analytics</li>
                            <li>Team collaboration</li>
                          </ul>
                        </div>
                        <div className={styles.tierCard}>
                          <h4>Enterprise</h4>
                          <div className={styles.price}>Custom</div>
                          <ul>
                            <li>Unlimited accounts</li>
                            <li>Custom AI training</li>
                            <li>White-label options</li>
                            <li>Dedicated support</li>
                          </ul>
                        </div>
                      </div>
                    )}
                    {selectedMetric === 'growth' && (
                      <div className={styles.growthChart}>
                        <div className={styles.growthBar}>
                          <span className={styles.year}>Year 1</span>
                          <div className={styles.progressBar} style={{width: '25%'}}>$250K</div>
                        </div>
                        <div className={styles.growthBar}>
                          <span className={styles.year}>Year 2</span>
                          <div className={styles.progressBar} style={{width: '50%'}}>$1.2M</div>
                        </div>
                        <div className={styles.growthBar}>
                          <span className={styles.year}>Year 3</span>
                          <div className={styles.progressBar} style={{width: '75%'}}>$3.5M</div>
                        </div>
                        <div className={styles.growthBar}>
                          <span className={styles.year}>Year 5</span>
                          <div className={styles.progressBar} style={{width: '100%'}}>$10M</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className={styles.planSection}>
                  <h3 className={styles.planTitle}>Competitive Advantage</h3>
                  <div className={styles.advantageGrid}>
                    <div className={styles.advantageCard}>
                      <div className={styles.advantageIcon}>🤖</div>
                      <h4>AI-Driven Optimization</h4>
                      <p>Advanced machine learning algorithms analyze engagement patterns and suggest optimal posting times</p>
                      <div className={styles.advantageMeter}>
                        <div className={styles.meterFill} style={{width: '90%'}}></div>
                        <span>90% Accuracy</span>
                      </div>
                    </div>
                    <div className={styles.advantageCard}>
                      <div className={styles.advantageIcon}>🔗</div>
                      <h4>Cross-Platform Integration</h4>
                      <p>Seamless integration across all major social networks with unified analytics dashboard</p>
                      <div className={styles.advantageMeter}>
                        <div className={styles.meterFill} style={{width: '85%'}}></div>
                        <span>15+ Platforms</span>
                      </div>
                    </div>
                    <div className={styles.advantageCard}>
                      <div className={styles.advantageIcon}>⚡</div>
                      <h4>Real-time Analytics</h4>
                      <p>Instant performance tracking with actionable insights for content improvement</p>
                      <div className={styles.advantageMeter}>
                        <div className={styles.meterFill} style={{width: '95%'}}></div>
                        <span>Live Updates</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.communicationSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🌱</span>
              Carbon Footprint Tracker - Business Plan
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.businessPlan}>
                <div className={styles.planSection}>
                  <h3 className={styles.planTitle}>Target Market</h3>
                  <p className={styles.planContent}>
                    The Carbon Footprint Tracker targets environmentally conscious individuals, eco-friendly businesses, and educational institutions. The market includes sustainability-focused organizations, green-certified companies, and households looking to reduce their environmental impact.
                  </p>
                  <div className={styles.impactChart}>
                    <div className={styles.impactItem}>
                      <div className={styles.impactCircle} style={{background: 'conic-gradient(#34d399 0% 75%, #e5e7eb 75% 100%)'}}>
                        <span className={styles.impactValue}>75%</span>
                      </div>
                      <span className={styles.impactLabel}>Individuals</span>
                    </div>
                    <div className={styles.impactItem}>
                      <div className={styles.impactCircle} style={{background: 'conic-gradient(#22d3ee 0% 60%, #e5e7eb 60% 100%)'}}>
                        <span className={styles.impactValue}>60%</span>
                      </div>
                      <span className={styles.impactLabel}>Businesses</span>
                    </div>
                    <div className={styles.impactItem}>
                      <div className={styles.impactCircle} style={{background: 'conic-gradient(#a78bfa 0% 45%, #e5e7eb 45% 100%)'}}>
                        <span className={styles.impactValue}>45%</span>
                      </div>
                      <span className={styles.impactLabel}>Education</span>
                    </div>
                  </div>
                </div>
                
                <div className={styles.planSection}>
                  <h3 className={styles.planTitle}>Target Customers</h3>
                  <div className={styles.customerSegments}>
                    <div className={styles.segmentCard}>
                      <div className={styles.segmentIcon}>👨‍👩‍👧‍👦</div>
                      <h4>Eco-conscious Families</h4>
                      <p>Track household emissions and reduce carbon footprint together</p>
                      <div className={styles.segmentStat}>2.3M+ households</div>
                    </div>
                    <div className={styles.segmentCard}>
                      <div className={styles.segmentIcon}>🏢</div>
                      <h4>Corporate Sustainability</h4>
                      <p>Monitor and report company-wide carbon emissions</p>
                      <div className={styles.segmentStat}>15K+ companies</div>
                    </div>
                    <div className={styles.segmentCard}>
                      <div className={styles.segmentIcon}>🎓</div>
                      <h4>Educational Institutions</h4>
                      <p>Teach environmental science with practical tracking tools</p>
                      <div className={styles.segmentStat}>8K+ schools</div>
                    </div>
                  </div>
                </div>
                
                <div className={styles.planSection}>
                  <h3 className={styles.planTitle}>Revenue Model</h3>
                  <div className={styles.revenueStreams}>
                    <div className={styles.streamCard}>
                      <h4>Free Tier</h4>
                      <div className={styles.streamPrice}>$0</div>
                      <ul>
                        <li>Basic carbon tracking</li>
                        <li>Monthly reports</li>
                        <li>Community challenges</li>
                      </ul>
                      <div className={styles.streamPercentage}>60% Users</div>
                    </div>
                    <div className={`${styles.streamCard} ${styles.featured}`}>
                      <h4>Premium</h4>
                      <div className={styles.streamPrice}>$4.99<span>/month</span></div>
                      <ul>
                        <li>Advanced analytics</li>
                        <li>IoT integration</li>
                        <li>Personalized recommendations</li>
                        <li>Carbon offset marketplace</li>
                      </ul>
                      <div className={styles.streamPercentage}>35% Users</div>
                    </div>
                    <div className={styles.streamCard}>
                      <h4>Enterprise</h4>
                      <div className={styles.streamPrice}>Custom</div>
                      <ul>
                        <li>Team management</li>
                        <li>Custom reporting</li>
                        <li>API access</li>
                        <li>White-label options</li>
                      </ul>
                      <div className={styles.streamPercentage}>5% Users</div>
                    </div>
                  </div>
                </div>
                
                <div className={styles.planSection}>
                  <h3 className={styles.planTitle}>Competitive Advantage</h3>
                  <div className={styles.featureComparison}>
                    <div className={styles.comparisonTable}>
                      <div className={styles.tableHeader}>
                        <div>Feature</div>
                        <div>Our App</div>
                        <div>Competitors</div>
                      </div>
                      <div className={styles.tableRow}>
                        <div>IoT Integration</div>
                        <div className={styles.checkMark}>✓</div>
                        <div className={styles.crossMark}>✗</div>
                      </div>
                      <div className={styles.tableRow}>
                        <div>AI Recommendations</div>
                        <div className={styles.checkMark}>✓</div>
                        <div className={styles.partialMark}>~</div>
                      </div>
                      <div className={styles.tableRow}>
                        <div>Real-time Tracking</div>
                        <div className={styles.checkMark}>✓</div>
                        <div className={styles.crossMark}>✗</div>
                      </div>
                      <div className={styles.tableRow}>
                        <div>Gamification</div>
                        <div className={styles.checkMark}>✓</div>
                        <div className={styles.partialMark}>~</div>
                      </div>
                    </div>
                    <div className={styles.keyAdvantages}>
                      <div className={styles.advantageItem}>
                        <div className={styles.advantageIcon}>🌐</div>
                        <h4>IoT Device Integration</h4>
                        <p>Real-time consumption data from smart home devices</p>
                      </div>
                      <div className={styles.advantageItem}>
                        <div className={styles.advantageIcon}>🤖</div>
                        <h4>AI-Powered Insights</h4>
                        <p>Personalized reduction strategies based on usage patterns</p>
                      </div>
                      <div className={styles.advantageItem}>
                        <div className={styles.advantageIcon}>🎮</div>
                        <h4>Gamification Elements</h4>
                        <p>Community challenges and rewards for sustained engagement</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.communicationSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>📚</span>
              QuickAI & StudyBuddy - Business Plan
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.businessPlan}>
                <div className={styles.planSection}>
                  <h3 className={styles.planTitle}>Target Market</h3>
                  <p className={styles.planContent}>
                    QuickAI and StudyBuddy target the global education technology market, focusing on young students, educators, and parents. The market includes kindergarten, primary, and middle school students, along with educational institutions looking to supplement traditional learning methods with AI-powered tools.
                  </p>
                  <div className={styles.educationMarket}>
                    <div className={styles.marketSegment}>
                      <div className={styles.segmentCircle} style={{background: 'conic-gradient(#a78bfa 0% 75%, #e5e7eb 75% 100%)'}}>
                        <span className={styles.segmentValue}>75%</span>
                      </div>
                      <span className={styles.segmentLabel}>K-8 Students</span>
                    </div>
                    <div className={styles.marketSegment}>
                      <div className={styles.segmentCircle} style={{background: 'conic-gradient(#22d3ee 0% 60%, #e5e7eb 60% 100%)'}}>
                        <span className={styles.segmentValue}>60%</span>
                      </div>
                      <span className={styles.segmentLabel}>Primary School</span>
                    </div>
                    <div className={styles.marketSegment}>
                      <div className={styles.segmentCircle} style={{background: 'conic-gradient(#34d399 0% 70%, #e5e7eb 70% 100%)'}}>
                        <span className={styles.segmentValue}>70%</span>
                      </div>
                      <span className={styles.segmentLabel}>Middle School</span>
                    </div>
                    <div className={styles.marketSegment}>
                      <div className={styles.segmentCircle} style={{background: 'conic-gradient(#f59e0b 0% 50%, #e5e7eb 50% 100%)'}}>
                        <span className={styles.segmentValue}>50%</span>
                      </div>
                      <span className={styles.segmentLabel}>Kindergarten</span>
                    </div>
                  </div>
                </div>
                
                <div className={styles.planSection}>
                  <h3 className={styles.planTitle}>Target Customers</h3>
                  <div className={styles.learnerProfiles}>
                    <div className={styles.learnerCard}>
                      <div className={styles.learnerAvatar}>🎓</div>
                      <h4>Young Students</h4>
                      <p>Kindergarten, primary, and middle school students seeking interactive learning support</p>
                      <div className={styles.learnerStats}>
                        <div className={styles.statItem}>
                          <span className={styles.statNumber}>200M+</span>
                          <span className={styles.statLabel}>K-8 Students</span>
                        </div>
                        <div className={styles.statItem}>
                          <span className={styles.statNumber}>90%</span>
                          <span className={styles.statLabel}>Engagement</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.learnerCard}>
                      <div className={styles.learnerAvatar}>💼</div>
                      <h4>Parents & Educators</h4>
                      <p>Parents and teachers looking for educational tools to support children's learning</p>
                      <div className={styles.learnerStats}>
                        <div className={styles.statItem}>
                          <span className={styles.statNumber}>50M+</span>
                          <span className={styles.statLabel}>Educators</span>
                        </div>
                        <div className={styles.statItem}>
                          <span className={styles.statNumber}>95%</span>
                          <span className={styles.statLabel}>Parent Satisfaction</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.learnerCard}>
                      <div className={styles.learnerAvatar}>🏫</div>
                      <h4>Educational Institutions</h4>
                      <p>Kindergartens, primary, and middle schools implementing AI-powered teaching tools</p>
                      <div className={styles.learnerStats}>
                        <div className={styles.statItem}>
                          <span className={styles.statNumber}>25K+</span>
                          <span className={styles.statLabel}>K-8 Schools</span>
                        </div>
                        <div className={styles.statItem}>
                          <span className={styles.statNumber}>85%</span>
                          <span className={styles.statLabel}>Teacher Adoption</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={styles.planSection}>
                  <h3 className={styles.planTitle}>Revenue Model</h3>
                  <div className={styles.educationPricing}>
                    <div className={styles.pricingToggle}>
                      <button
                        className={`${styles.pricingTab} ${selectedMetric === 'individual' ? styles.active : ''}`}
                        onClick={() => setSelectedMetric('individual')}
                      >
                        Individual Plans
                      </button>
                      <button
                        className={`${styles.pricingTab} ${selectedMetric === 'institution' ? styles.active : ''}`}
                        onClick={() => setSelectedMetric('institution')}
                      >
                        Institution Plans
                      </button>
                    </div>
                    {selectedMetric === 'individual' && (
                      <div className={styles.pricingCards}>
                        <div className={styles.pricingCard}>
                          <h4>Free</h4>
                          <div className={styles.pricingPrice}>$0</div>
                          <ul>
                            <li>10 queries per day</li>
                            <li>Basic study tools</li>
                            <li>Community support</li>
                          </ul>
                          <div className={styles.pricingUsers}>70% Users</div>
                        </div>
                        <div className={`${styles.pricingCard} ${styles.featured}`}>
                          <h4>Premium</h4>
                          <div className={styles.pricingPrice}>$7.99<span>/month</span></div>
                          <ul>
                            <li>Unlimited queries</li>
                            <li>Advanced study tools</li>
                            <li>Personalized learning paths</li>
                            <li>Priority support</li>
                          </ul>
                          <div className={styles.pricingUsers}>25% Users</div>
                        </div>
                        <div className={styles.pricingCard}>
                          <h4>Tutor</h4>
                          <div className={styles.pricingPrice}>$19.99<span>/month</span></div>
                          <ul>
                            <li>Everything in Premium</li>
                            <li>1-on-1 tutoring sessions</li>
                            <li>Custom study plans</li>
                            <li>24/7 expert access</li>
                          </ul>
                          <div className={styles.pricingUsers}>5% Users</div>
                        </div>
                      </div>
                    )}
                    {selectedMetric === 'institution' && (
                      <div className={styles.institutionPricing}>
                        <div className={styles.institutionTier}>
                          <h4>Classroom</h4>
                          <div className={styles.tierPrice}>$99<span>/month</span></div>
                          <p>Up to 30 students</p>
                          <ul>
                            <li>Teacher dashboard</li>
                            <li>Progress tracking</li>
                            <li>Basic analytics</li>
                          </ul>
                        </div>
                        <div className={`${styles.institutionTier} ${styles.featured}`}>
                          <h4>School</h4>
                          <div className={styles.tierPrice}>$499<span>/month</span></div>
                          <p>Up to 500 students</p>
                          <ul>
                            <li>Everything in Classroom</li>
                            <li>Advanced analytics</li>
                            <li>Custom content</li>
                            <li>Admin controls</li>
                          </ul>
                        </div>
                        <div className={styles.institutionTier}>
                          <h4>District</h4>
                          <div className={styles.tierPrice}>Custom</div>
                          <p>Unlimited students</p>
                          <ul>
                            <li>Everything in School</li>
                            <li>White-label platform</li>
                            <li>API access</li>
                            <li>Dedicated support</li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className={styles.planSection}>
                  <h3 className={styles.planTitle}>Competitive Advantage</h3>
                  <div className={styles.aiFeatures}>
                    <div className={styles.featureShowcase}>
                      <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>⚡</div>
                        <h4>Instant Responses</h4>
                        <p>Get answers in seconds, not minutes</p>
                        <div className={styles.featureMetric}>
                          <span className={styles.metricValue}>0.8s</span>
                          <span className={styles.metricLabel}>Average Response</span>
                        </div>
                      </div>
                      <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>🎯</div>
                        <h4>Context-Aware</h4>
                        <p>Understands learning context and adapts</p>
                        <div className={styles.featureMetric}>
                          <span className={styles.metricValue}>95%</span>
                          <span className={styles.metricLabel}>Accuracy</span>
                        </div>
                      </div>
                      <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>🌍</div>
                        <h4>Multi-Subject</h4>
                        <p>Covers all academic disciplines</p>
                        <div className={styles.featureMetric}>
                          <span className={styles.metricValue}>200+</span>
                          <span className={styles.metricLabel}>Subjects</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.learningEcosystem}>
                      <h4>Integrated Learning Ecosystem</h4>
                      <div className={styles.ecosystemFlow}>
                        <div className={styles.flowStep}>
                          <div className={styles.stepNumber}>1</div>
                          <div className={styles.stepContent}>
                            <h5>QuickAI Query</h5>
                            <p>Instant answers to questions</p>
                          </div>
                        </div>
                        <div className={styles.flowArrow}>→</div>
                        <div className={styles.flowStep}>
                          <div className={styles.stepNumber}>2</div>
                          <div className={styles.stepContent}>
                            <h5>StudyBuddy Analysis</h5>
                            <p>Identifies knowledge gaps</p>
                          </div>
                        </div>
                        <div className={styles.flowArrow}>→</div>
                        <div className={styles.flowStep}>
                          <div className={styles.stepNumber}>3</div>
                          <div className={styles.stepContent}>
                            <h5>Personalized Path</h5>
                            <p>Creates custom learning journey</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Communication;
