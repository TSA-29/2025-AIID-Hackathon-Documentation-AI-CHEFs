import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Idea.module.css';

const Idea: React.FC = () => {
  return (
    <div className={styles.ideaPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>StudyBuddy: Idea</h1>
          <p className={styles.subtitle}>
            AI-powered interactive learning platform: AI-powered quiz generation, personalized learning algorithms, and adaptive content delivery
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
                Our vision is to transform traditional classroom learning by using artificial intelligence to create
                personalized, interactive quizzes on any topic, while empowering teachers with data-driven insights
                and automated tools.
              </p>

              <div className={styles.innovationHighlight}>
                <div className={styles.highlightCard}>
                  <div className={styles.highlightIcon}>🤖</div>
                  <h3 className={styles.highlightTitle}>AI-Powered Quiz Generation</h3>
                  <p className={styles.highlightDesc}>
                    Advanced machine learning models create contextually relevant questions based on
                    topic, difficulty level, and student performance history.
                  </p>
                </div>

                <div className={styles.highlightCard}>
                  <div className={styles.highlightIcon}>👥</div>
                  <h3 className={styles.highlightTitle}>Classroom Management</h3>
                  <p className={styles.highlightDesc}>
                    Teachers can create and manage multiple virtual classrooms with real-time
                    student tracking and automated assessment.
                  </p>
                </div>

                <div className={styles.highlightCard}>
                  <div className={styles.highlightIcon}>📊</div>
                  <h3 className={styles.highlightTitle}>Personalized Learning</h3>
                  <p className={styles.highlightDesc}>
                    AI adapts questions based on individual student performance, creating
                    personalized learning paths for optimal outcomes.
                  </p>
                </div>

                <div className={styles.highlightCard}>
                  <div className={styles.highlightIcon}>📄</div>
                  <h3 className={styles.highlightTitle}>PDF Learning Tools</h3>
                  <p className={styles.highlightDesc}>
                    Teachers can upload documents and automatically generate quizzes and summaries,
                    reducing preparation time significantly.
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
                <h3 className={styles.diagramTitle}>Interactive Learning Platform Architecture</h3>
                <div className={styles.architectureFlow}>
                  <div className={styles.archLayer}>
                    <div className={styles.layerTitle}>
                      <span className={styles.layerIcon}>🤖</span>
                      AI Intelligence Layer
                    </div>
                    <div className={styles.layerComponents}>
                      <div className={styles.component}>OpenAI/SiliconFlow API integration</div>
                      <div className={styles.component}>Quiz generation algorithms</div>
                      <div className={styles.component}>Personalization engine</div>
                      <div className={styles.component}>Adaptive difficulty adjustment</div>
                    </div>
                  </div>

                  <div className={styles.archLayer}>
                    <div className={styles.layerTitle}>
                      <span className={styles.layerIcon}>🗄️</span>
                      Database Layer
                    </div>
                    <div className={styles.layerComponents}>
                      <div className={styles.component}>Supabase PostgreSQL</div>
                      <div className={styles.component}>Real-time capabilities</div>
                      <div className={styles.component}>Authentication system</div>
                      <div className={styles.component}>Row-level security</div>
                    </div>
                  </div>

                  <div className={styles.archLayer}>
                    <div className={styles.layerTitle}>
                      <span className={styles.layerIcon}>🌐</span>
                      Frontend Layer
                    </div>
                    <div className={styles.layerComponents}>
                      <div className={styles.component}>Next.js 15 framework</div>
                      <div className={styles.component}>React components</div>
                      <div className={styles.component}>Tailwind CSS styling</div>
                      <div className={styles.component}>Zustand state management</div>
                    </div>
                  </div>

                  <div className={styles.archLayer}>
                    <div className={styles.layerTitle}>
                      <span className={styles.layerIcon}>📄</span>
                      Document Processing Layer
                    </div>
                    <div className={styles.layerComponents}>
                      <div className={styles.component}>PDF parsing with pdf-parse</div>
                      <div className={styles.component}>Text extraction and summarization</div>
                      <div className={styles.component}>Quiz generation from documents</div>
                      <div className={styles.component}>Google Cloud Storage</div>
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
                  <div className={styles.diffIcon}>🤖</div>
                  <h3 className={styles.diffTitle}>AI-Powered Content</h3>
                  <p className={styles.diffDesc}>
                    Advanced machine learning models generate contextually relevant questions based on
                    topic, difficulty level, and student performance history.
                  </p>
                  <div className={styles.diffMetrics}>
                    <span className={styles.metric}>OpenAI/SiliconFlow integration</span>
                    <span className={styles.metric}>Real-time content adaptation</span>
                  </div>
                </div>

                <div className={styles.differentiatorCard}>
                  <div className={styles.diffIcon}>👥</div>
                  <h3 className={styles.diffTitle}>Teacher-Focused Design</h3>
                  <p className={styles.diffDesc}>
                    Intuitive interface designed specifically for teachers to create engaging
                    classrooms and track student progress with minimal effort.
                  </p>
                  <div className={styles.diffMetrics}>
                    <span className={styles.metric}>15-minute classroom setup</span>
                    <span className={styles.metric}>Automated grading system</span>
                  </div>
                </div>

                <div className={styles.differentiatorCard}>
                  <div className={styles.diffIcon}>📊</div>
                  <h3 className={styles.diffTitle}>Real-Time Analytics</h3>
                  <p className={styles.diffDesc}>
                    Comprehensive dashboards provide teachers with actionable insights into student
                    progress, engagement patterns, and learning obstacles.
                  </p>
                  <div className={styles.diffMetrics}>
                    <span className={styles.metric}>Live student tracking</span>
                    <span className={styles.metric}>Performance analytics</span>
                  </div>
                </div>

                <div className={styles.differentiatorCard}>
                  <div className={styles.diffIcon}>📄</div>
                  <h3 className={styles.diffTitle}>PDF Integration</h3>
                  <p className={styles.diffDesc}>
                    Teachers can upload learning materials and automatically generate quizzes and summaries,
                    reducing preparation time by 80%.
                  </p>
                  <div className={styles.diffMetrics}>
                    <span className={styles.metric}>Automatic quiz generation</span>
                    <span className={styles.metric}>Document summarization</span>
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
                      Simple registration process with guided setup for teacher profile and classroom creation.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>Classroom Creation</h3>
                    <p className={styles.stepDesc}>
                      Intuitive interface for creating virtual classrooms, managing students, and setting learning objectives.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>Quiz Generation</h3>
                    <p className={styles.stepDesc}>
                      AI-powered quiz creation based on topic, difficulty level, and learning objectives.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>Live Sessions</h3>
                    <p className={styles.stepDesc}>
                      Real-time quiz sessions with instant feedback, progress tracking, and engagement metrics.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.interfaceFeatures}>
                <div className={styles.featureGroup}>
                  <h3 className={styles.featureTitle}>👨‍🏫 Teacher Dashboard</h3>
                  <ul className={styles.featureList}>
                    <li>Classroom management tools</li>
                    <li>Student progress tracking</li>
                    <li>Performance analytics</li>
                    <li>Quiz creation and management</li>
                  </ul>
                </div>

                <div className={styles.featureGroup}>
                  <h3 className={styles.featureTitle}>👨‍🎓 Student Experience</h3>
                  <ul className={styles.featureList}>
                    <li>Adaptive quiz difficulty</li>
                    <li>Instant feedback on answers</li>
                    <li>Personalized learning paths</li>
                    <li>Progress tracking and achievements</li>
                  </ul>
                </div>

                <div className={styles.featureGroup}>
                  <h3 className={styles.featureTitle}>📄 PDF Learning Tools</h3>
                  <ul className={styles.featureList}>
                    <li>Document upload and processing</li>
                    <li>Automatic quiz generation</li>
                    <li>Content summarization</li>
                    <li>Learning material organization</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.ideaSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🌱</span>
              Educational Impact
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.impactGrid}>
                <div className={styles.impactCard}>
                  <div className={styles.impactIcon}>📊</div>
                  <h3 className={styles.impactTitle}>Learning Efficiency</h3>
                  <div className={styles.impactNumbers}>
                    <div className={styles.impactNumber}>67%</div>
                    <div className={styles.impactLabel}>Faster knowledge acquisition</div>
                  </div>
                  <p className={styles.impactDesc}>
                    Personalized learning paths and adaptive content significantly reduce time to mastery.
                  </p>
                </div>

                <div className={styles.impactCard}>
                  <div className={styles.impactIcon}>🎯</div>
                  <h3 className={styles.impactTitle}>Student Engagement</h3>
                  <div className={styles.impactNumbers}>
                    <div className={styles.impactNumber}>94%</div>
                    <div className={styles.impactLabel}>Average engagement rate</div>
                  </div>
                  <p className={styles.impactDesc}>
                    Interactive quizzes and gamified elements dramatically increase student participation.
                  </p>
                </div>

                <div className={styles.impactCard}>
                  <div className={styles.impactIcon}>👨‍🏫</div>
                  <h3 className={styles.impactTitle}>Teacher Effectiveness</h3>
                  <div className={styles.impactNumbers}>
                    <div className={styles.impactNumber}>15 hrs</div>
                    <div className={styles.impactLabel}>Weekly time savings</div>
                  </div>
                  <p className={styles.impactDesc}>
                    Automated quiz creation and grading free up time for meaningful instruction.
                  </p>
                </div>

                <div className={styles.impactCard}>
                  <div className={styles.impactIcon}>📈</div>
                  <h3 className={styles.impactTitle}>Learning Outcomes</h3>
                  <div className={styles.impactNumbers}>
                    <div className={styles.impactNumber}>25%</div>
                    <div className={styles.impactLabel}>Improvement in test scores</div>
                  </div>
                  <p className={styles.impactDesc}>
                    Data-driven instruction and personalized pacing lead to measurable improvements.
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
                  <h3 className={styles.modelTitle}>📦 Subscription Tiers</h3>
                  <div className={styles.pricingTier}>
                    <div className={styles.tierName}>Teacher</div>
                    <div className={styles.tierPrice}>$19/month</div>
                    <div className={styles.tierDesc}>Unlimited classrooms and students</div>
                    <ul className={styles.tierFeatures}>
                      <li>AI quiz generation</li>
                      <li>Student analytics</li>
                      <li>PDF integration</li>
                      <li>Email support</li>
                    </ul>
                  </div>
                </div>

                <div className={styles.modelComponent}>
                  <h3 className={styles.modelTitle}>🏫 Institutional Solutions</h3>
                  <div className={styles.institutionalServices}>
                    <div className={styles.serviceCategory}>
                      <h4>School Districts</h4>
                      <p>Volume pricing, custom integrations, and administrative dashboards</p>
                    </div>
                    <div className={styles.serviceCategory}>
                      <h4>Higher Education</h4>
                      <p>Advanced analytics, LMS integration, and research collaboration tools</p>
                    </div>
                    <div className={styles.serviceCategory}>
                      <h4>Tutoring Centers</h4>
                      <p>Multi-teacher accounts, student management, and progress reporting</p>
                    </div>
                  </div>
                </div>

                <div className={styles.modelComponent}>
                  <h3 className={styles.modelTitle}>🤝 Content Ecosystem</h3>
                  <div className={styles.contentPartners}>
                    <div className={styles.partnerCategory}>
                      <h4>Educational Publishers</h4>
                      <p>Curated content partnerships with major educational publishers</p>
                    </div>
                    <div className={styles.partnerCategory}>
                      <h4>Open Educational Resources</h4>
                      <p>Integration with OER platforms and free learning materials</p>
                    </div>
                    <div className={styles.partnerCategory}>
                      <h4>Teacher Community</h4>
                      <p>Marketplace for sharing and discovering teacher-created content</p>
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
                    <div className={styles.goal}>Deploy to 100 schools across 5 regions</div>
                    <div className={styles.goal}>Validate AI quiz generation accuracy</div>
                    <div className={styles.goal}>Test user interface with diverse teacher groups</div>
                    <div className={styles.goal}>Establish content partnerships</div>
                  </div>
                </div>

                <div className={styles.roadmapPhase}>
                  <div className={styles.phaseHeader}>
                    <div className={styles.phaseNumber}>Phase 2</div>
                    <div className={styles.phaseTimeline}>Months 7-18</div>
                  </div>
                  <h3 className={styles.phaseTitle}>Feature Expansion</h3>
                  <div className={styles.phaseGoals}>
                    <div className={styles.goal}>Reach 1,000 active schools</div>
                    <div className={styles.goal}>Expand to 10 new subject areas</div>
                    <div className={styles.goal}>Launch advanced AI personalization</div>
                    <div className={styles.goal}>Secure Series A funding</div>
                  </div>
                </div>

                <div className={styles.roadmapPhase}>
                  <div className={styles.phaseHeader}>
                    <div className={styles.phaseNumber}>Phase 3</div>
                    <div className={styles.phaseTimeline}>Months 19-36</div>
                  </div>
                  <h3 className={styles.phaseTitle}>Global Education</h3>
                  <div className={styles.phaseGoals}>
                    <div className={styles.goal}>10,000+ active schools</div>
                    <div className={styles.goal}>Presence in 50+ countries</div>
                    <div className={styles.goal}>Multi-language support</div>
                    <div className={styles.goal}>Achieve profitability</div>
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