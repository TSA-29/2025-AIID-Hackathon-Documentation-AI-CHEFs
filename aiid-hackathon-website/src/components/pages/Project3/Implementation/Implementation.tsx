import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Implementation.module.css';

const Implementation: React.FC = () => {
  return (
    <div className={styles.implementationPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>StudyBuddy: Implementation</h1>
          <p className={styles.subtitle}>
            AI-powered interactive learning platform: Technical implementation details, AI engine development, and classroom management system
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
                      Implemented OpenAI/SiliconFlow API integration, developed quiz generation algorithms, and created personalization engine
                    </p>
                  </div>
                  <div className={styles.timelineDot}></div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineTime}>Hours 13-24</div>
                    <h3 className={styles.timelineTitle}>Frontend Development</h3>
                    <p className={styles.timelineDesc}>
                      Built Next.js 15 interface, implemented teacher dashboard, and created student learning experience
                    </p>
                  </div>
                  <div className={styles.timelineDot}></div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineTime}>Hours 25-36</div>
                    <h3 className={styles.timelineTitle}>Backend & Database</h3>
                    <p className={styles.timelineDesc}>
                      Developed Supabase database, implemented authentication system, and created API endpoints
                    </p>
                  </div>
                  <div className={styles.timelineDot}></div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineTime}>Hours 37-44</div>
                    <h3 className={styles.timelineTitle}>PDF Integration</h3>
                    <p className={styles.timelineDesc}>
                      Implemented pdf-parse for document processing, created quiz generation from PDFs, and built summarization features
                    </p>
                  </div>
                  <div className={styles.timelineDot}></div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineTime}>Hours 45-48</div>
                    <h3 className={styles.timelineTitle}>Testing & Deployment</h3>
                    <p className={styles.timelineDesc}>
                      Final testing, performance optimization, and deployment to Vercel + Google Cloud Run
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
                <h3 className={styles.diagramTitle}>Interactive Learning Platform Architecture</h3>
                <div className={styles.architectureFlow}>
                  <div className={styles.archComponent}>
                    <span className={styles.archIcon}>🤖</span>
                    <div className={styles.archTitle}>AI Engine</div>
                    <p className={styles.archDesc}>OpenAI/SiliconFlow API integration for quiz generation</p>
                  </div>
                  <div className={styles.archComponent}>
                    <span className={styles.archIcon}>🗄️</span>
                    <div className={styles.archTitle}>Database</div>
                    <p className={styles.archDesc}>Supabase PostgreSQL with real-time capabilities</p>
                  </div>
                  <div className={styles.archComponent}>
                    <span className={styles.archIcon}>🌐</span>
                    <div className={styles.archTitle}>Frontend</div>
                    <p className={styles.archDesc}>Next.js 15 with React components and Tailwind CSS</p>
                  </div>
                  <div className={styles.archComponent}>
                    <span className={styles.archIcon}>📄</span>
                    <div className={styles.archTitle}>PDF Processing</div>
                    <p className={styles.archDesc}>pdf-parse integration for document analysis and quiz generation</p>
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
                    <span className={styles.techItem}>OpenAI GPT API</span>
                    <span className={styles.techItem}>SiliconFlow API</span>
                    <span className={styles.techItem}>Quiz generation algorithms</span>
                    <span className={styles.techItem}>Personalization engine</span>
                  </div>
                </div>
                <div className={styles.techCategory}>
                  <h3 className={styles.techCategoryTitle}>
                    <span>🌐</span> Frontend Framework
                  </h3>
                  <div className={styles.techList}>
                    <span className={styles.techItem}>Next.js 15</span>
                    <span className={styles.techItem}>React components</span>
                    <span className={styles.techItem}>TypeScript</span>
                    <span className={styles.techItem}>Tailwind CSS</span>
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
                    <span className={styles.techItem}>Supabase PostgreSQL</span>
                    <span className={styles.techItem}>Real-time capabilities</span>
                    <span className={styles.techItem}>Authentication system</span>
                    <span className={styles.techItem}>Row-level security</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.implementationSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>📄</span>
              PDF Integration Features
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.pdfGrid}>
                <div className={styles.pdfCategory}>
                  <h3 className={styles.pdfCategoryTitle}>
                    <span>📄</span> Document Processing
                  </h3>
                  <div className={styles.pdfList}>
                    <span className={styles.pdfItem}>pdf-parse for text extraction</span>
                    <span className={styles.pdfItem}>Automatic summarization</span>
                    <span className={styles.pdfItem}>Content analysis</span>
                    <span className={styles.pdfItem}>Google Cloud Storage</span>
                  </div>
                </div>
                <div className={styles.pdfCategory}>
                  <h3 className={styles.pdfCategoryTitle}>
                    <span>🎯</span> Quiz Generation
                  </h3>
                  <div className={styles.pdfList}>
                    <span className={styles.pdfItem}>AI-powered question creation</span>
                    <span className={styles.pdfItem}>Multiple question types</span>
                    <span className={styles.pdfItem}>Difficulty adjustment</span>
                    <span className={styles.pdfItem}>Context-aware generation</span>
                  </div>
                </div>
                <div className={styles.pdfCategory}>
                  <h3 className={styles.pdfCategoryTitle}>
                    <span>📊</span> Learning Tools
                  </h3>
                  <div className={styles.pdfList}>
                    <span className={styles.pdfItem}>Interactive quiz sessions</span>
                    <span className={styles.pdfItem}>Progress tracking</span>
                    <span className={styles.pdfItem}>Performance analytics</span>
                    <span className={styles.pdfItem}>Feedback system</span>
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
              <h3>AI-Powered Quiz Generation</h3>
              <div className={styles.codeBlock}>
                <span className={styles.codeKeyword}>class</span> <span className={styles.codeFunction}>QuizGenerator</span>:<br/>
                &nbsp;&nbsp;<span className={styles.codeKeyword}>def</span> <span className={styles.codeFunction}>__init__</span>(self):<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;self.ai_client = initialize_ai_client()<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;self.question_templates = load_question_templates()<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;self.difficulty_adjuster = DifficultyAdjuster()<br/><br/>
                &nbsp;&nbsp;<span className={styles.codeKeyword}>async def</span> <span className={styles.codeFunction}>generate_quiz</span>(self, topic, difficulty, num_questions):<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeComment}># Generate contextually relevant questions</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;prompt = build_quiz_prompt(topic, difficulty, num_questions)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;response = <span className={styles.codeKeyword}>await</span> self.ai_client.generate_content(prompt)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;questions = parse_ai_response(response)<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeComment}># Adjust difficulty based on student performance</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;adjusted_questions = self.difficulty_adjuster.adapt(questions, difficulty)<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeComment}># Create multiple question types</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;quiz = create_mixed_question_types(adjusted_questions)<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeKeyword}>return</span> quiz
              </div>

              <h3>Personalized Learning Algorithm</h3>
              <div className={styles.codeBlock}>
                <span className={styles.codeKeyword}>def</span> <span className={styles.codeFunction}>personalize_learning_path</span>(student_id, quiz_results):<br/>
                &nbsp;&nbsp;<span className={styles.codeComment}># Analyze student performance patterns</span><br/>
                &nbsp;&nbsp;performance_profile = analyze_student_performance(student_id, quiz_results)<br/>
                &nbsp;&nbsp;learning_style = determine_learning_style(performance_profile)<br/>
                &nbsp;&nbsp;knowledge_gaps = identify_knowledge_gaps(quiz_results)<br/><br/>
                &nbsp;&nbsp;<span className={styles.codeComment}># Generate personalized recommendations</span><br/>
                &nbsp;&nbsp;recommendations = generate_learning_recommendations(<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;performance_profile, learning_style, knowledge_gaps<br/>
                &nbsp;&nbsp;)<br/><br/>
                &nbsp;&nbsp;<span className={styles.codeComment}># Create adaptive learning path</span><br/>
                &nbsp;&nbsp;learning_path = optimize_learning_sequence(recommendations)<br/><br/>
                &nbsp;&nbsp;<span className={styles.codeKeyword}>return</span> &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeString}>"learning_path"</span>: learning_path,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeString}>"recommendations"</span>: recommendations,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeString}>"next_difficulty"</span>: calculate_next_difficulty(performance_profile)<br/>
                &nbsp;&nbsp;&#125;
              </div>

              <h3>Real-Time Classroom Management</h3>
              <div className={styles.codeBlock}>
                <span className={styles.codeKeyword}>class</span> <span className={styles.codeFunction}>ClassroomManager</span>:<br/>
                &nbsp;&nbsp;<span className={styles.codeKeyword}>def</span> <span className={styles.codeFunction}>__init__</span>(self):<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;self.active_sessions = &#123;&#125;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;self.student_progress = &#123;&#125;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;self.real_time_analytics = RealTimeAnalytics()<br/><br/>
                &nbsp;&nbsp;<span className={styles.codeKeyword}>async def</span> <span className={styles.codeFunction}>start_quiz_session</span>(self, classroom_id, quiz_data):<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeComment}># Initialize session and notify students</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;session_id = generate_session_id()<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;self.active_sessions[session_id] = &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeString}>"classroom_id"</span>: classroom_id,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeString}>"quiz_data"</span>: quiz_data,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeString}>"start_time"</span>: datetime.now()<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeComment}># Send notifications to all students</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeKeyword}>await</span> notify_students(classroom_id, session_id)<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeComment}># Start real-time analytics tracking</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeKeyword}>await</span> self.real_time_analytics.start_tracking(session_id)<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeKeyword}>return</span> session_id
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
                    <span>🤖</span> AI API Integration
                  </h3>
                  <p className={styles.challengeDesc}>
                    Integrating multiple AI providers (OpenAI and SiliconFlow) with consistent response formats and error handling.
                  </p>
                  <div className={styles.solutionBox}>
                    <h4 className={styles.solutionTitle}>Solution Implemented:</h4>
                    <p className={styles.solutionDesc}>
                      Unified API abstraction layer with fallback providers, response standardization, and intelligent retry mechanisms.
                    </p>
                  </div>
                </div>

                <div className={styles.challengeCard}>
                  <h3 className={styles.challengeTitle}>
                    <span>📄</span> PDF Processing
                  </h3>
                  <p className={styles.challengeDesc}>
                    Extracting meaningful content from diverse PDF formats and generating contextually relevant quiz questions.
                  </p>
                  <div className={styles.solutionBox}>
                    <h4 className={styles.solutionTitle}>Solution Implemented:</h4>
                    <p className={styles.solutionDesc}>
                      Advanced pdf-parse integration with content analysis, semantic understanding, and context-aware question generation.
                    </p>
                  </div>
                </div>

                <div className={styles.challengeCard}>
                  <h3 className={styles.challengeTitle}>
                    <span>👥</span> Real-Time Performance
                  </h3>
                  <p className={styles.challengeDesc}>
                    Managing concurrent quiz sessions with real-time updates and analytics without performance degradation.
                  </p>
                  <div className={styles.solutionBox}>
                    <h4 className={styles.solutionTitle}>Solution Implemented:</h4>
                    <p className={styles.solutionDesc}>
                      Optimized database queries, efficient state management with Zustand, and strategic data caching.
                    </p>
                  </div>
                </div>

                <div className={styles.challengeCard}>
                  <h3 className={styles.challengeTitle}>
                    <span>🔒</span> Authentication & Security
                  </h3>
                  <p className={styles.challengeDesc}>
                    Implementing secure access control for teachers and students with role-based permissions.
                  </p>
                  <div className={styles.solutionBox}>
                    <h4 className={styles.solutionTitle}>Solution Implemented:</h4>
                    <p className={styles.solutionDesc}>
                      Supabase authentication with row-level security, encrypted data transmission, and comprehensive audit logging.
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