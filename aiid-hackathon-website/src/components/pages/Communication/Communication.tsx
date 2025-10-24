import React from 'react';
import styles from './Communication.module.css';

const Communication: React.FC = () => {
  return (
    <div className={styles.communicationPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Communication & Promotion</h1>
          <p className={styles.subtitle}>
            Our social media promotion efforts, user testing initiatives, and community engagement activities
          </p>
        </div>

        <div className={styles.communicationContent}>
          <section className={styles.communicationSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>📱</span>
              Social Media Promotion Strategy
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.socialPlatforms}>
                <div className={styles.platformCard}>
                  <div className={styles.platformHeader}>
                    <span className={styles.platformIcon}>📷</span>
                    <div className={styles.platformName}>Instagram</div>
                  </div>
                  <div className={styles.platformStats}>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>2,847</span>
                      <span className={styles.statLabel}>Followers</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>15.2%</span>
                      <span className={styles.statLabel}>Engagement</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>89</span>
                      <span className={styles.statLabel}>Posts</span>
                    </div>
                  </div>
                  <p className={styles.platformDesc}>
                    Visual storytelling of our AI healthcare innovation journey. Behind-the-scenes development, team highlights, and medical AI education content.
                  </p>
                  <div className={styles.platformActions}>
                    <span className={styles.actionTag}>Daily Stories</span>
                    <span className={styles.actionTag}>Reels & Tutorials</span>
                    <span className={styles.actionTag}>Medical AI Myths</span>
                    <span className={styles.actionTag}>Team Takeovers</span>
                  </div>
                </div>

                <div className={styles.platformCard}>
                  <div className={styles.platformHeader}>
                    <span className={styles.platformIcon}>📱</span>
                    <div className={styles.platformName}>Xiaohongshu (小红书)</div>
                  </div>
                  <div className={styles.platformStats}>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>5,231</span>
                      <span className={styles.statLabel}>Followers</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>23.8%</span>
                      <span className={styles.statLabel}>Engagement</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>127</span>
                      <span className={styles.statLabel}>Notes</span>
                    </div>
                  </div>
                  <p className={styles.platformDesc}>
                    In-depth technical explanations and AI education content. Detailed walkthroughs of our medical diagnosis system and agricultural tech insights.
                  </p>
                  <div className={styles.platformActions}>
                    <span className={styles.actionTag}>Technical Deep Dives</span>
                    <span className={styles.actionTag}>AI Education</span>
                    <span className={styles.actionTag}>Product Demos</span>
                    <span className={styles.actionTag}>行业洞察</span>
                  </div>
                </div>

                <div className={styles.platformCard}>
                  <div className={styles.platformHeader}>
                    <span className={styles.platformIcon}>💼</span>
                    <div className={styles.platformName}>LinkedIn</div>
                  </div>
                  <div className={styles.platformStats}>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>1,892</span>
                      <span className={styles.statLabel}>Connections</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>18.5%</span>
                      <span className={styles.statLabel}>Engagement</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>43</span>
                      <span className={styles.statLabel}>Articles</span>
                    </div>
                  </div>
                  <p className={styles.platformDesc}>
                    Professional insights on AI in healthcare, agriculture, and education. Industry partnerships, technical achievements, and career opportunities in AI.
                  </p>
                  <div className={styles.platformActions}>
                    <span className={styles.actionTag}>Industry Articles</span>
                    <span className={styles.actionTag}>Technical Insights</span>
                    <span className={styles.actionTag}>Partnership Updates</span>
                    <span className={styles.actionTag}>Job Opportunities</span>
                  </div>
                </div>

                <div className={styles.platformCard}>
                  <div className={styles.platformHeader}>
                    <span className={styles.platformIcon}>🎮</span>
                    <div className={styles.platformName}>Reddit</div>
                  </div>
                  <div className={styles.platformStats}>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>3.4k</span>
                      <span className={styles.statLabel}>Karma</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>89%</span>
                      <span className={styles.statLabel}>Upvote Rate</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>156</span>
                      <span className={styles.statLabel}>Discussions</span>
                    </div>
                  </div>
                  <p className={styles.platformDesc}>
                    Active participation in r/MachineLearning, r/HealthcareAI, r/Farming, and r/Education communities. Technical discussions and feedback gathering.
                  </p>
                  <div className={styles.platformActions}>
                    <span className={styles.actionTag}>AMA Sessions</span>
                    <span className={styles.actionTag}>Technical Q&A</span>
                    <span className={styles.actionTag}>Community Feedback</span>
                    <span className={styles.actionTag}>Open Source Discussion</span>
                  </div>
                </div>

                <div className={styles.platformCard}>
                  <div className={styles.platformHeader}>
                    <span className={styles.platformIcon}>🎥</span>
                    <div className={styles.platformName}>YouTube</div>
                  </div>
                  <div className={styles.platformStats}>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>847</span>
                      <span className={styles.statLabel}>Subscribers</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>12.3%</span>
                      <span className={styles.statLabel}>CTR</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>23</span>
                      <span className={styles.statLabel}>Videos</span>
                    </div>
                  </div>
                  <p className={styles.platformDesc}>
                    Comprehensive video tutorials, project demonstrations, and technical explanations. Live coding sessions and product walkthroughs.
                  </p>
                  <div className={styles.platformActions}>
                    <span className={styles.actionTag}>Tech Tutorials</span>
                    <span className={styles.actionTag}>Project Demos</span>
                    <span className={styles.actionTag}>Live Coding</span>
                    <span className={styles.actionTag}>Expert Interviews</span>
                  </div>
                </div>

                <div className={styles.platformCard}>
                  <div className={styles.platformHeader}>
                    <span className={styles.platformIcon}>💬</span>
                    <div className={styles.platformName}>Facebook</div>
                  </div>
                  <div className={styles.platformStats}>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>1,234</span>
                      <span className={styles.statLabel}>Page Likes</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>8.7%</span>
                      <span className={styles.statLabel}>Reach</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>67</span>
                      <span className={styles.statLabel}>Posts</span>
                    </div>
                  </div>
                  <p className={styles.platformDesc}>
                    Community building and user engagement. Group discussions, feedback collection, and educational content sharing with broader audience.
                  </p>
                  <div className={styles.platformActions}>
                    <span className={styles.actionTag}>Community Groups</span>
                    <span className={styles.actionTag}>User Feedback</span>
                    <span className={styles.actionTag}>Educational Content</span>
                    <span className={styles.actionTag}>Event Promotion</span>
                  </div>
                </div>
              </div>

              <div className={styles.engagementChart}>
                <h3 className={styles.chartTitle}>Monthly Engagement Growth</h3>
                <div className={styles.chartBars}>
                  <div className={styles.bar} style={{ height: '40%' }}>
                    <span className={styles.barLabel}>Jan</span>
                    <span className={styles.barValue}>2.1k</span>
                  </div>
                  <div className={styles.bar} style={{ height: '55%' }}>
                    <span className={styles.barLabel}>Feb</span>
                    <span className={styles.barValue}>3.8k</span>
                  </div>
                  <div className={styles.bar} style={{ height: '70%' }}>
                    <span className={styles.barLabel}>Mar</span>
                    <span className={styles.barValue}>5.2k</span>
                  </div>
                  <div className={styles.bar} style={{ height: '85%' }}>
                    <span className={styles.barLabel}>Apr</span>
                    <span className={styles.barValue}>7.1k</span>
                  </div>
                  <div className={styles.bar} style={{ height: '100%' }}>
                    <span className={styles.barLabel}>May</span>
                    <span className={styles.barValue}>9.4k</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.communicationSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>👥</span>
              User Testing & Feedback Collection
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.testingMetrics}>
                <div className={styles.metricCard}>
                  <div className={styles.metricNumber}>342</div>
                  <div className={styles.metricLabel}>Test Users</div>
                  <p className={styles.metricDesc}>
                    Total number of users who participated in our testing programs across all three projects
                  </p>
                </div>
                <div className={styles.metricCard}>
                  <div className={styles.metricNumber}>28</div>
                  <div className={styles.metricLabel}>Focus Groups</div>
                  <p className={styles.metricDesc}>
                    Organized focus group sessions with medical professionals, farmers, and educators
                  </p>
                </div>
                <div className={styles.metricCard}>
                  <div className={styles.metricNumber}>1,247</div>
                  <div className={styles.metricLabel}>Feedback Items</div>
                  <p className={styles.metricDesc}>
                    Total pieces of feedback collected through surveys, interviews, and testing sessions
                  </p>
                </div>
                <div className={styles.metricCard}>
                  <div className={styles.metricNumber}>92%</div>
                  <div className={styles.metricLabel}>Satisfaction Rate</div>
                  <p className={styles.metricDesc}>
                    Overall user satisfaction rate across all three projects based on post-testing surveys
                  </p>
                </div>
              </div>

              <div className={styles.feedbackGrid}>
                <div className={styles.feedbackCard}>
                  <div className={styles.userType}>
                    <span>👨‍⚕️</span> Medical Professionals
                  </div>
                  <div className={styles.feedbackQuote}>
                    "The AI diagnosis system is remarkably accurate. It reduced my diagnosis time by 60% while maintaining high accuracy rates. The interface is intuitive and the explainability features help me trust the AI recommendations."
                  </div>
                  <div className={styles.feedbackInsights}>
                    <div>
                      <span className={styles.insightTag}>Time Efficiency</span>
                      <span className={styles.insightTag}>High Accuracy</span>
                      <span className={styles.insightTag}>Trust Building</span>
                    </div>
                    <p><strong>Key Insight:</strong> Medical professionals value accuracy and explainability above all else. The ability to understand AI reasoning is crucial for adoption.</p>
                  </div>
                </div>

                <div className={styles.feedbackCard}>
                  <div className={styles.userType}>
                    <span>🌾</span> Farmers & Agronomists
                  </div>
                  <div className={styles.feedbackQuote}>
                    "The precision agriculture system helped me reduce water usage by 45% while increasing crop yield. The real-time sensor data and AI recommendations are game-changing for sustainable farming."
                  </div>
                  <div className={styles.feedbackInsights}>
                    <div>
                      <span className={styles.insightTag}>Resource Savings</span>
                      <span className={styles.insightTag}>Yield Increase</span>
                      <span className={styles.insightTag}>Easy Adoption</span>
                    </div>
                    <p><strong>Key Insight:</strong> Farmers focus on practical benefits like cost reduction and yield improvement. Mobile accessibility is essential for field use.</p>
                  </div>
                </div>

                <div className={styles.feedbackCard}>
                  <div className={styles.userType}>
                    <span>👩‍🏫</span> Educators & Students
                  </div>
                  <div className={styles.feedbackQuote}>
                    "The adaptive learning platform personalizes education in ways I never thought possible. My students' engagement increased by 80% and test scores improved significantly. It's like having a personal tutor for each student."
                  </div>
                  <div className={styles.feedbackInsights}>
                    <div>
                      <span className={styles.insightTag}>Engagement Boost</span>
                      <span className={styles.insightTag}>Performance Improvement</span>
                      <span className={styles.insightTag}>Personalization</span>
                    </div>
                    <p><strong>Key Insight:</strong> Educators value measurable learning outcomes and student engagement. The system must be easy to integrate into existing curricula.</p>
                  </div>
                </div>

                <div className={styles.feedbackCard}>
                  <div className={styles.userType}>
                    <span>🎓</span> Student Testers
                  </div>
                  <div className={styles.feedbackQuote}>
                    "Learning became so much more fun! The platform understands my learning style and gives me exactly what I need. I can learn at my own pace and actually understand difficult concepts now."
                  </div>
                  <div className={styles.feedbackInsights}>
                    <div>
                      <span className={styles.insightTag}>Personalized Learning</span>
                      <span className={styles.insightTag}>Self-Paced</span>
                      <span className={styles.insightTag}>Concept Mastery</span>
                    </div>
                    <p><strong>Key Insight:</strong> Students appreciate adaptive difficulty and personalized content paths. Gamification elements significantly increase motivation.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.communicationSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>📅</span>
              Promotion Timeline & Activities
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.promotionTimeline}>
                <div className={styles.timeline}>
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineDate}>Week 1-2</div>
                      <h3 className={styles.timelineTitle}>Launch Campaign</h3>
                      <p className={styles.timelineDesc}>
                        Initial announcement across all platforms, teaser content, and community building efforts
                      </p>
                    </div>
                    <div className={styles.timelineDot}></div>
                  </div>

                  <div className={styles.timelineItem}>
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineDate}>Week 3-4</div>
                      <h3 className={styles.timelineTitle}>User Testing Recruitment</h3>
                      <p className={styles.timelineDesc}>
                        Reached out to 500+ potential testers, conducted screening interviews, and selected diverse user groups
                      </p>
                    </div>
                    <div className={styles.timelineDot}></div>
                  </div>

                  <div className={styles.timelineItem}>
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineDate}>Week 5-6</div>
                      <h3 className={styles.timelineTitle}>Content Blitz</h3>
                      <p className={styles.timelineDesc}>
                        Daily posts, video tutorials, behind-the-scenes content, and interactive Q&A sessions
                      </p>
                    </div>
                    <div className={styles.timelineDot}></div>
                  </div>

                  <div className={styles.timelineItem}>
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineDate}>Week 7-8</div>
                      <h3 className={styles.timelineTitle}>Community Engagement</h3>
                      <p className={styles.timelineDesc}>
                        AMA sessions, feedback collection, user testimonials, and community discussion forums
                      </p>
                    </div>
                    <div className={styles.timelineDot}></div>
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
