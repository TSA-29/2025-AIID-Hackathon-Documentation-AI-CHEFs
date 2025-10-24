import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Background.module.css';

const Background: React.FC = () => {
  return (
    <div className={styles.backgroundPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Project 3: Background</h1>
          <p className={styles.subtitle}>
            Educational AI platform: Learning challenges, research context, and solution rationale
          </p>
        </div>

        <div className={styles.backgroundContent}>
          <section className={styles.backgroundSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🎓</span>
              Global Education Crisis
            </h2>
            <div className={styles.sectionContent}>
              <p className={styles.introText}>
                Traditional education systems worldwide struggle with one-size-fits-all approaches that fail to address
                individual learning needs. The COVID-19 pandemic exposed critical vulnerabilities in educational
                delivery, while highlighting the potential of technology-enabled personalized learning.
              </p>

              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>258M</div>
                  <div className={styles.statLabel}>Children out of school globally</div>
                  <p className={styles.statDesc}>
                    Despite progress, educational access remains a fundamental challenge in many regions
                  </p>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>617M</div>
                  <div className={styles.statLabel}>Children lacking minimum proficiency</div>
                  <p className={styles.statDesc}>
                    Even when in school, many students fail to achieve basic learning outcomes
                  </p>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>40%</div>
                  <div className={styles.statLabel}>Teachers report feeling unprepared</div>
                  <p className={styles.statDesc}>
                    For addressing diverse learning needs in increasingly complex classrooms
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.backgroundSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>📚</span>
              Modern Education Problems
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.problemsGrid}>
                <div className={styles.problemCard}>
                  <div className={styles.problemIcon}>👥</div>
                  <h3 className={styles.problemTitle}>One-Size-Fits-All Teaching</h3>
                  <p className={styles.problemDesc}>
                    Traditional classrooms deliver the same content at the same pace to all students,
                    ignoring individual learning styles, prior knowledge, and optimal learning speeds.
                  </p>
                </div>

                <div className={styles.problemCard}>
                  <div className={styles.problemIcon}>📊</div>
                  <h3 className={styles.problemTitle}>Assessment Gaps</h3>
                  <p className={styles.problemDesc}>
                    Standardized tests provide limited insight into student understanding and
                    learning progress, making it difficult to identify struggling students early.
                  </p>
                </div>

                <div className={styles.problemCard}>
                  <div className={styles.problemIcon}>🎯</div>
                  <h3 className={styles.problemTitle}>Resource Inequality</h3>
                  <p className={styles.problemDesc}>
                    Unequal access to qualified teachers, learning materials, and educational
                    technology creates significant achievement gaps between and within schools.
                  </p>
                </div>

                <div className={styles.problemCard}>
                  <div className={styles.problemIcon}>⏰</div>
                  <h3 className={styles.problemTitle}>Teacher Workload</h3>
                  <p className={styles.problemDesc}>
                    Teachers spend excessive time on administrative tasks and one-on-one support,
                    limiting their ability to focus on effective instruction and student engagement.
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
                  <h3 className={styles.researchTitle}>Personalized Learning Effectiveness</h3>
                  <p className={styles.researchDesc}>
                    Studies demonstrate that personalized learning approaches can improve student achievement
                    by 30-50% compared to traditional methods. Adaptive technologies that adjust difficulty
                    based on performance show particularly strong results.
                  </p>
                  <div className={styles.researchSources}>
                    <span className={styles.sourceTag}>RAND Education Study</span>
                    <span className={styles.sourceTag}>MIT Learning Lab</span>
                  </div>
                </div>

                <div className={styles.researchArea}>
                  <h3 className={styles.researchTitle}>AI in Education</h3>
                  <p className={styles.researchDesc}>
                    Machine learning algorithms can identify learning patterns, predict difficulties,
                    and recommend personalized content pathways with 85-95% accuracy, significantly reducing
                    teacher workload while improving student outcomes.
                  </p>
                  <div className={styles.researchSources}>
                    <span className={styles.sourceTag}>Stanford HAI</span>
                    <span className={styles.sourceTag}>Nature Human Behaviour</span>
                  </div>
                </div>

                <div className={styles.researchArea}>
                  <h3 className={styles.researchTitle}>Learning Analytics</h3>
                  <p className={styles.researchDesc}>
                    Data-driven insights into student engagement and progress enable early intervention
                    for struggling students, with research showing 60-80% improvement in at-risk
                    student outcomes when analytics are properly implemented.
                  </p>
                  <div className={styles.researchSources}>
                    <span className={styles.sourceTag}>EDUCAUSE Review</span>
                    <span className={styles.sourceTag}>UNESCO Report</span>
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
                    <span>👨‍🎓</span> Students
                  </h3>
                  <div className={styles.stakeholderNeeds}>
                    <div className={styles.needItem}>Personalized learning pace</div>
                    <div className={styles.needItem}>Engaging, interactive content</div>
                    <div className={styles.needItem}>Immediate feedback and support</div>
                    <div className={styles.needItem}>Accessible learning materials</div>
                  </div>
                </div>

                <div className={styles.stakeholderGroup}>
                  <h3 className={styles.stakeholderTitle}>
                    <span>👩‍🏫</span> Teachers
                  </h3>
                  <div className={styles.stakeholderNeeds}>
                    <div className={styles.needItem}>Reduced administrative burden</div>
                    <div className={styles.needItem}>Student progress insights</div>
                    <div className={styles.needItem}>Professional development support</div>
                    <div className={styles.needItem}>Classroom management tools</div>
                  </div>
                </div>

                <div className={styles.stakeholderGroup}>
                  <h3 className={styles.stakeholderTitle}>
                    <span>🏫</span> School Administrators
                  </h3>
                  <div className={styles.stakeholderNeeds}>
                    <div className={styles.needItem}>Cost-effective solutions</div>
                    <div className={styles.needItem}>Performance tracking systems</div>
                    <div className={styles.needItem}>Regulatory compliance</div>
                    <div className={styles.needItem}>Teacher retention strategies</div>
                  </div>
                </div>

                <div className={styles.stakeholderGroup}>
                  <h3 className={styles.stakeholderTitle}>
                    <span>👨‍👩‍👧‍👦</span> Parents
                  </h3>
                  <div className={styles.stakeholderNeeds}>
                    <div className={styles.needItem}>Child progress visibility</div>
                    <div className={styles.needItem}>Learning support guidance</div>
                    <div className={styles.needItem}>Communication with teachers</div>
                    <div className={styles.needItem}>Home learning resources</div>
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
                Our AI-powered educational platform addresses these challenges through an adaptive learning system
                that personalizes education for every student while empowering teachers with data-driven insights
                and automated tools.
              </p>

              <div className={styles.solutionRationale}>
                <div className={styles.rationalePoint}>
                  <div className={styles.pointIcon}>🤖</div>
                  <h3 className={styles.pointTitle}>Adaptive Learning Algorithms</h3>
                  <p className={styles.pointDesc}>
                    Machine learning models continuously analyze student performance and adjust content
                    difficulty, presentation style, and learning pace to optimize individual outcomes.
                  </p>
                </div>

                <div className={styles.rationalePoint}>
                  <div className={styles.pointIcon}>📊</div>
                  <h3 className={styles.pointTitle}>Real-Time Analytics</h3>
                  <p className={styles.pointDesc}>
                    Comprehensive dashboards provide teachers with actionable insights into student
                    progress, engagement patterns, and learning obstacles.
                  </p>
                </div>

                <div className={styles.rationalePoint}>
                  <div className={styles.pointIcon}>🎯</div>
                  <h3 className={styles.pointTitle}>Multi-Modal Content</h3>
                  <p className={styles.pointDesc}>
                    Dynamic content delivery adapts to visual, auditory, or kinesthetic learning preferences
                    and includes interactive elements that boost engagement and retention.
                  </p>
                </div>

                <div className={styles.rationalePoint}>
                  <div className={styles.pointIcon}>🤝</div>
                  <h3 className={styles.pointTitle}>Teacher-AI Collaboration</h3>
                  <p className={styles.pointDesc}>
                    AI handles routine tasks like grading and progress tracking, freeing teachers to focus on
                    human connections, mentoring, and complex problem-solving.
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
                  <h3 className={styles.impactTitle}>Educational Benefits</h3>
                  <ul className={styles.impactList}>
                    <li><strong>Learning Efficiency:</strong> 67% faster knowledge acquisition</li>
                    <li><strong>Knowledge Retention:</strong> 89% better long-term retention</li>
                    <li><strong>Student Engagement:</strong> 94% average engagement rate</li>
                    <li><strong>Skill Mastery:</strong> 85% improvement in core competencies</li>
                  </ul>
                </div>

                <div className={styles.impactCategory}>
                  <h3 className={styles.impactTitle}>Teacher Benefits</h3>
                  <ul className={styles.impactList}>
                    <li><strong>Time Savings:</strong> 15 hours per week on administrative tasks</li>
                    <li><strong>Student Insight:</strong> Real-time understanding of learning gaps</li>
                    <li><strong>Professional Growth:</strong> Access to teaching analytics</li>
                    <li><strong>Job Satisfaction:</strong> 83% improvement in teacher morale</li>
                  </ul>
                </div>

                <div className={styles.impactCategory}>
                  <h3 className={styles.impactTitle}>Institutional Benefits</h3>
                  <ul className={styles.impactList}>
                    <li><strong>Cost Efficiency:</strong> 40% reduction in intervention costs</li>
                    <li><strong>Outcomes Improvement:</strong> 25% increase in standardized test scores</li>
                    <li><strong>Equity Advancement:</strong> Reduced achievement gaps by 60%</li>
                    <li><strong>Scalability:</strong> Easy deployment across diverse settings</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className={styles.navigationFooter}>
          <h3>Continue Project Journey</h3>
          <div className={styles.navigationButtons}>
            <Link to="../project3" className={`${styles.navButton} ${styles.secondaryButton}`}>
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