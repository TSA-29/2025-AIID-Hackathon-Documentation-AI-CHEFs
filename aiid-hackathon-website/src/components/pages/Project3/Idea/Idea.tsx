import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Idea.module.css';

const Idea: React.FC = () => {
  return (
    <div className={styles.ideaPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Project 3: Idea</h1>
          <p className={styles.subtitle}>
            Educational AI platform: Adaptive learning systems, personalized content delivery, and intelligent tutoring solutions
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
                Our vision is to transform education through AI-powered personalized learning that adapts to every
                student's unique needs, learning style, and pace, while empowering teachers with data-driven insights
                and automated tools to enhance their teaching effectiveness.
              </p>

              <div className={styles.innovationHighlight}>
                <div className={styles.highlightCard}>
                  <div className={styles.highlightIcon}>🧠</div>
                  <h3 className={styles.highlightTitle}>Adaptive Learning Intelligence</h3>
                  <p className={styles.highlightDesc}>
                    AI algorithms that understand how each student learns best and continuously adjust
                    content difficulty, presentation format, and pacing to maximize learning outcomes.
                  </p>
                </div>

                <div className={styles.highlightCard}>
                  <div className={styles.highlightIcon}>👥</div>
                  <h3 className={styles.highlightTitle}>Human-AI Teaching Partnership</h3>
                  <p className={styles.highlightDesc}>
                    Augmenting teacher capabilities with AI assistants that handle routine tasks, provide
                    real-time insights, and enable more meaningful human connections.
                  </p>
                </div>

                <div className={styles.highlightCard}>
                  <div className={styles.highlightIcon}>📊</div>
                  <h3 className={styles.highlightTitle}>Data-Driven Personalization</h3>
                  <p className={styles.highlightDesc}>
                    Comprehensive analytics that track learning patterns, identify knowledge gaps, and
                    predict learning outcomes before they become problems.
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
                <h3 className={styles.diagramTitle}>Intelligent Learning Ecosystem</h3>
                <div className={styles.architectureFlow}>
                  <div className={styles.archLayer}>
                    <div className={styles.layerTitle}>
                      <span className={styles.layerIcon}>👤</span>
                      Student Interaction Layer
                    </div>
                    <div className={styles.layerComponents}>
                      <div className={styles.component}>Adaptive content interface</div>
                      <div className={styles.component}>Multi-modal learning materials</div>
                      <div className={styles.component}>Interactive assessments</div>
                      <div className={styles.component}>Progress tracking</div>
                    </div>
                  </div>

                  <div className={styles.archLayer}>
                    <div className={styles.layerTitle}>
                      <span className={styles.layerIcon}>🤖</span>
                      AI Intelligence Layer
                    </div>
                    <div className={styles.layerComponents}>
                      <div className={styles.component}>Learning pattern analysis</div>
                      <div className={styles.component}>Knowledge gap detection</div>
                      <div className={styles.component}>Personalization engine</div>
                      <div className={styles.component}>Predictive analytics</div>
                    </div>
                  </div>

                  <div className={styles.archLayer}>
                    <div className={styles.layerTitle}>
                      <span className={styles.layerIcon}>👩‍🏫</span>
                      Teacher Enhancement Layer
                    </div>
                    <div className={styles.layerComponents}>
                      <div className={styles.component}>Classroom analytics dashboard</div>
                      <div className={styles.component}>Automated grading system</div>
                      <div className={styles.component}>Intervention recommendations</div>
                      <div className={styles.component}>Resource optimization</div>
                    </div>
                  </div>

                  <div className={styles.archLayer}>
                    <div className={styles.layerTitle}>
                      <span className={styles.layerIcon}>🏫</span>
                      Institutional Integration Layer
                    </div>
                    <div className={styles.layerComponents}>
                      <div className={styles.component}>Learning management systems</div>
                      <div className={styles.component}>Student information systems</div>
                      <div className={styles.component}>Assessment platforms</div>
                      <div className={styles.component}>Parent communication tools</div>
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
                  <div className={styles.diffIcon}>🧠</div>
                  <h3 className={styles.diffTitle}>Cognitive Learning Models</h3>
                  <p className={styles.diffDesc}>
                    Advanced neural networks that mimic human learning processes, understanding not just what students know,
                    but how they think and approach problems, enabling truly personalized learning pathways.
                  </p>
                  <div className={styles.diffMetrics}>
                    <span className={styles.metric}>Traditional AI: Pattern matching</span>
                    <span className={styles.metric}>Our AI: Cognitive modeling</span>
                  </div>
                </div>

                <div className={styles.differentiatorCard}>
                  <div className={styles.diffIcon}>🎨</div>
                  <h3 className={styles.diffTitle}>Multi-Modal Content Generation</h3>
                  <p className={styles.diffDesc}>
                    AI that creates and adapts content in real-time to match individual learning styles,
                    including visual, auditory, reading/writing, and kinesthetic preferences.
                  </p>
                  <div className={styles.diffMetrics}>
                    <span className={styles.metric}>5 learning modalities supported</span>
                    <span className={styles.metric}>Real-time content adaptation</span>
                  </div>
                </div>

                <div className={styles.differentiatorCard}>
                  <div className={styles.diffIcon}>🔮</div>
                  <h3 className={styles.diffTitle}>Predictive Intervention</h3>
                  <p className={styles.diffDesc}>
                    Early warning system that identifies students at risk of falling behind before traditional
                    assessments can detect the problem, enabling proactive intervention.
                  </p>
                  <div className={styles.diffMetrics}>
                    <span className={styles.metric}>85% early prediction accuracy</span>
                    <span className={styles.metric}>60-80% improvement in outcomes</span>
                  </div>
                </div>

                <div className={styles.differentiatorCard}>
                  <div className={styles.diffIcon}>🔄</div>
                  <h3 className={styles.diffTitle}>Continuous Learning Loop</h3>
                  <p className={styles.diffDesc}>
                    Self-improving system that learns from millions of student interactions daily,
                    continuously refining personalization algorithms and content effectiveness.
                  </p>
                  <div className={styles.diffMetrics}>
                    <span className={styles.metric}>10M+ learning interactions daily</span>
                    <span className={styles.metric}>Weekly algorithm improvements</span>
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
                    <h3 className={styles.stepTitle}>Initial Assessment</h3>
                    <p className={styles.stepDesc}>
                      Comprehensive evaluation of learning style, current knowledge level, and cognitive patterns
                      to create personalized learning profiles.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>Adaptive Learning Path</h3>
                    <p className={styles.stepDesc}>
                      Personalized curriculum that adjusts difficulty and content based on real-time performance
                      and engagement metrics.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>Interactive Learning</h3>
                    <p className={styles.stepDesc}>
                      Engaging activities and challenges that adapt to student responses, providing immediate feedback
                      and scaffolding support.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>Mastery Achievement</h3>
                    <p className={styles.stepDesc}>
                      Progress tracking that focuses on deep understanding rather than completion speed, with
                      multiple pathways to demonstrate mastery.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.interfaceFeatures}>
                <div className={styles.featureGroup}>
                  <h3 className={styles.featureTitle}>👤 Student-Centric Interface</h3>
                  <ul className={styles.featureList}>
                    <li>Adaptive difficulty based on performance</li>
                    <li>Learning style-aware content presentation</li>
                    <li>Gamified progress and achievement system</li>
                    <li>Peer collaboration and social learning</li>
                  </ul>
                </div>

                <div className={styles.featureGroup}>
                  <h3 className={styles.featureTitle}>👩‍🏫 Teacher Empowerment</h3>
                  <ul className={styles.featureList}>
                    <li>Real-time classroom analytics</li>
                    <li>Automated assessment and grading</li>
                    <li>Individual student learning insights</li>
                    <li>Professional development recommendations</li>
                  </ul>
                </div>

                <div className={styles.featureGroup}>
                  <h3 className={styles.featureTitle}>📊 Advanced Analytics</h3>
                  <ul className={styles.featureList}>
                    <li>Learning pattern visualization</li>
                    <li>Predictive performance modeling</li>
                    <li>Intervention effectiveness tracking</li>
                    <li>Equity and accessibility monitoring</li>
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
                  <div className={styles.impactIcon}>🎓</div>
                  <h3 className={styles.impactTitle}>Educational Equity</h3>
                  <div className={styles.impactNumbers}>
                    <div className={styles.impactNumber}>60%</div>
                    <div className={styles.impactLabel}>Reduction in achievement gaps</div>
                  </div>
                  <p className={styles.impactDesc}>
                    Personalized learning addresses individual needs and provides extra support where needed,
                    significantly reducing educational disparities across diverse student populations.
                  </p>
                </div>

                <div className={styles.impactCard}>
                  <div className={styles.impactIcon}>👨‍🏫</div>
                  <h3 className={styles.impactTitle}>Teacher Effectiveness</h3>
                  <div className={styles.impactNumbers}>
                    <div className={styles.impactNumber}>83%</div>
                    <div className={styles.impactLabel}>Improvement in job satisfaction</div>
                  </div>
                  <p className={styles.impactDesc}>
                    Reduced administrative burden and enhanced teaching tools allow educators to focus on
                    what matters most: student relationships and meaningful instruction.
                  </p>
                </div>

                <div className={styles.impactCard}>
                  <div className={styles.impactIcon}>📚</div>
                  <h3 className={styles.impactTitle}>Learning Outcomes</h3>
                  <div className={styles.impactNumbers}>
                    <div className={styles.impactNumber}>25%</div>
                    <div className={styles.impactLabel}>Increase in test scores</div>
                  </div>
                  <p className={styles.impactDesc}>
                    Data-driven instruction and personalized pacing lead to measurable improvements
                    in academic performance across all subject areas.
                  </p>
                </div>

                <div className={styles.impactCard}>
                  <div className={styles.impactIcon}>💰</div>
                  <h3 className={styles.impactTitle}>Cost Efficiency</h3>
                  <div className={styles.impactNumbers}>
                    <div className={styles.impactNumber}>40%</div>
                    <div className={styles.impactLabel}>Reduction in intervention costs</div>
                  </div>
                  <p className={styles.impactDesc}>
                    Early identification and prevention of learning difficulties reduces the need for
                    expensive remedial programs and special education services.
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
                  <h3 className={styles.modelTitle}>📦 Platform-as-a-Service</h3>
                  <div className={styles.pricingTier}>
                    <div className={styles.tierName}>Essential</div>
                    <div className={styles.tierPrice}>$12/student/month</div>
                    <div className={styles.tierDesc}>Core adaptive learning features</div>
                    <ul className={styles.tierFeatures}>
                      <li>Personalized learning paths</li>
                      <li>Progress tracking dashboard</li>
                      <li>Basic teacher analytics</li>
                      <li>Email support</li>
                    </ul>
                  </div>
                </div>

                <div className={styles.modelComponent}>
                  <h3 className={styles.modelTitle}>🏫 Institutional Solutions</h3>
                  <div className={styles.institutionalServices}>
                    <div className={styles.serviceCategory}>
                      <h4>K-12 Schools</h4>
                      <p>Comprehensive platform with curriculum alignment, standards-based assessment, and parent portal access</p>
                    </div>
                    <div className={styles.serviceCategory}>
                      <h4>Higher Education</h4>
                      <p>Advanced analytics for student success, predictive modeling, and institutional research integration</p>
                    </div>
                    <div className={styles.serviceCategory}>
                      <h4>Corporate Training</h4>
                      <p>Custom learning paths, skill assessment, and certification tracking with business intelligence</p>
                    </div>
                  </div>
                </div>

                <div className={styles.modelComponent}>
                  <h3 className={styles.modelTitle}>🤝 Content Ecosystem</h3>
                  <div className={styles.contentPartners}>
                    <div className={styles.partnerCategory}>
                      <h4>Publisher Partnerships</h4>
                      <p>Integration with major educational publishers and content providers for rich, standards-aligned materials</p>
                    </div>
                    <div className={styles.partnerCategory}>
                      <h4>Open Educational Resources</h4>
                      <p>Curated and enhanced OER content with AI-powered personalization and assessment</p>
                    </div>
                    <div className={styles.partnerCategory}>
                      <h4>Teacher-Created Content</h4>
                      <p>Marketplace for educators to share and monetize their custom learning materials and teaching strategies</p>
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
                    <div className={styles.phaseTimeline}>Months 1-9</div>
                  </div>
                  <h3 className={styles.phaseTitle}>Platform Development</h3>
                  <div className={styles.phaseGoals}>
                    <div className={styles.goal}>Core AI learning algorithms development</div>
                    <div className={styles.goal}>Initial content partnerships (50k+ learning materials)</div>
                    <div className={styles.goal}>Beta testing with 25 pilot schools</div>
                    <div className={styles.goal}>Teacher training program development</div>
                  </div>
                </div>

                <div className={styles.roadmapPhase}>
                  <div className={styles.phaseHeader}>
                    <div className={styles.phaseNumber}>Phase 2</div>
                    <div className={styles.phaseTimeline}>Months 10-24</div>
                  </div>
                  <h3 className={styles.phaseTitle}>Market Expansion</h3>
                  <div className={styles.phaseGoals}>
                    <div className={styles.goal}>Launch in North American markets</div>
                    <div className={styles.goal}>Expand content library to 250k+ materials</div>
                    <div className={styles.goal}>Secure Series A funding round</div>
                    <div className={styles.goal}>Mobile app development</div>
                  </div>
                </div>

                <div className={styles.roadmapPhase}>
                  <div className={styles.phaseHeader}>
                    <div className={styles.phaseNumber}>Phase 3</div>
                    <div className={styles.phaseTimeline}>Months 25-36</div>
                  </div>
                  <h3 className={styles.phaseTitle}>Global Scale</h3>
                  <div className={styles.phaseGoals}>
                    <div className={styles.goal}>International expansion to 10+ countries</div>
                    <div className={styles.goal}>Multi-language support development</div>
                    <div className={styles.goal}>Advanced AI research partnerships</div>
                    <div className={styles.goal}>Achieve 1M+ active learners</div>
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