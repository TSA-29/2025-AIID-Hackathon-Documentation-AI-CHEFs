import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Implementation.module.css';

const Implementation: React.FC = () => {
  return (
    <div className={styles.implementationPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Project 1: Implementation</h1>
          <p className={styles.subtitle}>
            Arrowista AI Content Generator: Technical implementation, security systems, and development challenges
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
                    <div className={styles.timelineTime}>Hours 0-6</div>
                    <h3 className={styles.timelineTitle}>Environment Setup & API Integration</h3>
                    <p className={styles.timelineDesc}>
                      Configured Next.js development environment, established SiliconFlow API connection, and implemented basic security layers
                    </p>
                  </div>
                  <div className={styles.timelineDot}></div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineTime}>Hours 7-18</div>
                    <h3 className={styles.timelineTitle}>Security & Content Moderation</h3>
                    <p className={styles.timelineDesc}>
                      Implemented comprehensive content moderation system, rate limiting, and prompt injection protection
                    </p>
                  </div>
                  <div className={styles.timelineDot}></div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineTime}>Hours 19-30</div>
                    <h3 className={styles.timelineTitle}>Multi-modal Generation</h3>
                    <p className={styles.timelineDesc}>
                      Developed image and text generation capabilities, implemented error handling, and created fallback mechanisms
                    </p>
                  </div>
                  <div className={styles.timelineDot}></div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineTime}>Hours 31-42</div>
                    <h3 className={styles.timelineTitle}>Frontend & User Experience</h3>
                    <p className={styles.timelineDesc}>
                      Created responsive UI for content creators, implemented loading states, and added download functionality
                    </p>
                  </div>
                  <div className={styles.timelineDot}></div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineTime}>Hours 43-48</div>
                    <h3 className={styles.timelineTitle}>Testing & Deployment</h3>
                    <p className={styles.timelineDesc}>
                      Security testing, performance optimization, and deployment to Vercel with GitHub Pages backup
                    </p>
                  </div>
                  <div className={styles.timelineDot}></div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.implementationSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🏗️</span>
              System Architecture
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.architectureDiagram}>
                <h3 className={styles.diagramTitle}>Arrowista Content Generation Pipeline</h3>
                <div className={styles.architectureFlow}>
                  <div className={styles.archComponent}>
                    <span className={styles.archIcon}>📝</span>
                    <div className={styles.archTitle}>User Input</div>
                    <p className={styles.archDesc}>Creative prompt entry</p>
                  </div>
                  <div className={styles.archComponent}>
                    <span className={styles.archIcon}>🔒</span>
                    <div className={styles.archTitle}>Security Layer</div>
                    <p className={styles.archDesc}>Content moderation & validation</p>
                  </div>
                  <div className={styles.archComponent}>
                    <span className={styles.archIcon}>🤖</span>
                    <div className={styles.archTitle}>AI Generation</div>
                    <p className={styles.archDesc}>SiliconFlow API integration</p>
                  </div>
                  <div className={styles.archComponent}>
                    <span className={styles.archIcon}>⚡</span>
                    <div className={styles.archTitle}>Rate Limiting</div>
                    <p className={styles.archDesc}>IP-based request management</p>
                  </div>
                  <div className={styles.archComponent}>
                    <span className={styles.archIcon}>📥</span>
                    <div className={styles.archTitle}>Content Delivery</div>
                    <p className={styles.archDesc}>Secure download & sharing</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.implementationSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>💻</span>
              Technology Stack
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.techStack}>
                <div className={styles.techCategory}>
                  <h3 className={styles.techCategoryTitle}>Frontend Framework</h3>
                  <div className={styles.techList}>
                    <span className={styles.techItem}>Next.js 15</span>
                    <span className={styles.techItem}>React 18</span>
                    <span className={styles.techItem}>TypeScript</span>
                    <span className={styles.techItem}>CSS-in-JS</span>
                  </div>
                </div>
                <div className={styles.techCategory}>
                  <h3 className={styles.techCategoryTitle}>AI Services</h3>
                  <div className={styles.techList}>
                    <span className={styles.techItem}>SiliconFlow API</span>
                    <span className={styles.techItem}>Qwen/Qwen-Image</span>
                    <span className={styles.techItem}>DeepSeek-R1</span>
                    <span className={styles.techItem}>Wan-AI/Wan2.2-T2V</span>
                  </div>
                </div>
                <div className={styles.techCategory}>
                  <h3 className={styles.techCategoryTitle}>Security Systems</h3>
                  <div className={styles.techList}>
                    <span className={styles.techItem}>Content Moderation</span>
                    <span className={styles.techItem}>Rate Limiting</span>
                    <span className={styles.techItem}>Input Validation</span>
                    <span className={styles.techItem}>Prompt Injection Protection</span>
                  </div>
                </div>
                <div className={styles.techCategory}>
                  <h3 className={styles.techCategoryTitle}>Deployment</h3>
                  <div className={styles.techList}>
                    <span className={styles.techItem}>Vercel</span>
                    <span className={styles.techItem}>GitHub Pages</span>
                    <span className={styles.techItem}>Environment Variables</span>
                    <span className={styles.techItem}>CI/CD Pipeline</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.implementationSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🔧</span>
              Key Implementation Details
            </h2>
            <div className={styles.sectionContent}>
              <h3>Content Moderation System</h3>
              <div className={styles.codeBlock}>
                <span className={styles.codeComment}>// Prohibited content patterns for security</span><br/>
                <span className={styles.codeKeyword}>const</span> <span className={styles.codeFunction}>PROHIBITED_PATTERNS</span> = &#123;<br/>
                &nbsp;&nbsp;<span className={styles.codeString}>"violence"</span>: [/\b(kill|murder|shoot|stab|violence|violent|blood|gore|torture)\b/i],<br/>
                &nbsp;&nbsp;<span className={styles.codeString}>"hate"</span>: [/\b(hate|racist|nazi|kkk|antisemitic|homophobic|transphobic)\b/i],<br/>
                &nbsp;&nbsp;<span className={styles.codeString}>"sexual"</span>: [/\b(porn|sex|nude|naked|sexual|explicit|erotic)\b/i],<br/>
                &nbsp;&nbsp;<span className={styles.codeString}>"illegal"</span>: [/\b(drug|cocaine|heroin|marijuana|weed|illegal|smuggle)\b/i]<br/>
                &#125;;<br/><br/>
                <span className={styles.codeKeyword}>export</span> <span className={styles.codeKeyword}>class</span> <span className={styles.codeFunction}>ContentModerator</span> &#123;<br/>
                &nbsp;&nbsp;<span className={styles.codeKeyword}>static</span> <span className={styles.codeFunction}>moderateContent</span>(prompt: string) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeComment}>// Check for prohibited content patterns</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeKeyword}>for</span> (<span className={styles.codeKeyword}>const</span> [category, patterns] <span className={styles.codeKeyword}>of</span> Object.entries(PROHIBITED_PATTERNS)) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeKeyword}>for</span> (<span className={styles.codeKeyword}>const</span> pattern <span className={styles.codeKeyword}>of</span> patterns) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeKeyword}>if</span> (pattern.test(prompt.toLowerCase())) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeKeyword}>return</span> &#123; allowed: <span className={styles.codeKeyword}>false</span>, reason: `Prohibited $&#123;category&#125; content` &#125;;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeKeyword}>return</span> &#123; allowed: <span className={styles.codeKeyword}>true</span> &#125;;<br/>
                &nbsp;&nbsp;&#125;<br/>
                &#125;;
              </div>

              <h3>Rate Limiting Implementation</h3>
              <div className={styles.codeBlock}>
                <span className={styles.codeKeyword}>export</span> <span className={styles.codeKeyword}>function</span> <span className={styles.codeFunction}>checkRateLimit</span>(req, maxRequests = 10, windowMs = 60000) &#123;<br/>
                &nbsp;&nbsp;<span className={styles.codeKeyword}>const</span> ip = getRateLimitKey(req);<br/>
                &nbsp;&nbsp;<span className={styles.codeKeyword}>const</span> now = Date.now();<br/>
                &nbsp;&nbsp;<span className={styles.codeKeyword}>const</span> windowStart = now - windowMs;<br/><br/>
                &nbsp;&nbsp;<span className={styles.codeComment}>// Check if IP is whitelisted</span><br/>
                &nbsp;&nbsp;<span className={styles.codeKeyword}>if</span> (isWhitelisted(ip)) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeKeyword}>return</span> &#123; allowed: <span className={styles.codeKeyword}>true</span>, remaining: maxRequests &#125;;<br/>
                &nbsp;&nbsp;&#125;<br/><br/>
                &nbsp;&nbsp;<span className={styles.codeComment}>// Check rate limit for regular users</span><br/>
                &nbsp;&nbsp;<span className={styles.codeKeyword}>const</span> entry = rateLimitStore.get(ip) || &#123; count: 0, windowStart: now &#125;;<br/>
                &nbsp;&nbsp;<span className={styles.codeKeyword}>if</span> (entry.windowStart {'<'} windowStart) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;entry.count = 0;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;entry.windowStart = now;<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;entry.count++;<br/>
                &nbsp;&nbsp;<span className={styles.codeKeyword}>const</span> remaining = Math.max(0, maxRequests - entry.count);<br/>
                &nbsp;&nbsp;<span className={styles.codeKeyword}>return</span> &#123; allowed: entry.count {'<='} maxRequests, remaining &#125;;<br/>
                &#125;;
              </div>

              <h3>API Integration with SiliconFlow</h3>
              <div className={styles.codeBlock}>
                <span className={styles.codeKeyword}>const</span> <span className={styles.codeFunction}>SILICONFLOW_API_URL</span> = <span className={styles.codeString}>"https://api.siliconflow.com/v1/images/generations"</span>;<br/><br/>
                <span className={styles.codeKeyword}>export</span> <span className={styles.codeKeyword}>default</span> <span className={styles.codeKeyword}>async</span> <span className={styles.codeKeyword}>function</span> <span className={styles.codeFunction}>handler</span>(req, res) &#123;<br/>
                &nbsp;&nbsp;<span className={styles.codeComment}>// Content moderation check</span><br/>
                &nbsp;&nbsp;<span className={styles.codeKeyword}>const</span> moderationResult = ContentModerator.moderateContent(req.body.prompt);<br/>
                &nbsp;&nbsp;<span className={styles.codeKeyword}>if</span> (!moderationResult.allowed) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeKeyword}>return</span> res.status(400).json(&#123; success: <span className={styles.codeKeyword}>false</span>, error: moderationResult.reason &#125;);<br/>
                &nbsp;&nbsp;&#125;<br/><br/>
                &nbsp;&nbsp;<span className={styles.codeComment}>// Rate limiting check</span><br/>
                &nbsp;&nbsp;<span className={styles.codeKeyword}>const</span> rateLimitResult = checkRateLimit(req);<br/>
                &nbsp;&nbsp;<span className={styles.codeKeyword}>if</span> (!rateLimitResult.allowed) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeKeyword}>return</span> res.status(429).json(&#123; success: <span className={styles.codeKeyword}>false</span>, error: <span className={styles.codeString}>"Too many requests"</span> &#125;);<br/>
                &nbsp;&nbsp;&#125;<br/><br/>
                &nbsp;&nbsp;<span className={styles.codeComment}>// SiliconFlow API integration</span><br/>
                &nbsp;&nbsp;<span className={styles.codeKeyword}>const</span> response = <span className={styles.codeKeyword}>await</span> fetch(SILICONFLOW_API_URL, &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;method: <span className={styles.codeString}>"POST"</span>,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;headers: &#123; <span className={styles.codeString}>"Authorization"</span>: `Bearer $&#123;process.env.SILICONFLOW_API_KEY&#125;` &#125;,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;body: JSON.stringify(&#123; model: <span className={styles.codeString}>"Qwen/Qwen-Image"</span>, prompt: req.body.prompt &#125;)<br/>
                &nbsp;&nbsp;&#125;);<br/>
                &nbsp;&nbsp;<span className={styles.codeKeyword}>const</span> data = <span className={styles.codeKeyword}>await</span> response.json();<br/>
                &nbsp;&nbsp;<span className={styles.codeKeyword}>return</span> res.status(200).json(&#123; success: <span className={styles.codeKeyword}>true</span>, result: &#123; url: data.data[0].url, type: <span className={styles.codeString}>"image"</span> &#125; &#125;);<br/>
                &#125;;
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
                    <span>🔒</span> Content Security & Moderation
                  </h3>
                  <p className={styles.challengeDesc}>
                    Preventing harmful content generation while maintaining creative freedom and user experience.
                  </p>
                  <div className={styles.solutionBox}>
                    <h4 className={styles.solutionTitle}>Solution Implemented:</h4>
                    <p className={styles.solutionDesc}>
                      Multi-layer content moderation with pattern-based filtering, prompt injection protection, and input sanitization.
                    </p>
                  </div>
                </div>

                <div className={styles.challengeCard}>
                  <h3 className={styles.challengeTitle}>
                    <span>⚡</span> API Rate Limiting & Abuse Prevention
                  </h3>
                  <p className={styles.challengeDesc}>
                    Preventing API abuse while ensuring fair access for legitimate users.
                  </p>
                  <div className={styles.solutionBox}>
                    <h4 className={styles.solutionTitle}>Solution Implemented:</h4>
                    <p className={styles.solutionDesc}>
                      IP-based rate limiting with whitelist support, automatic cleanup, and graceful fallback mechanisms.
                    </p>
                  </div>
                </div>

                <div className={styles.challengeCard}>
                  <h3 className={styles.challengeTitle}>
                    <span>🤖</span> Multi-modal Content Generation
                  </h3>
                  <p className={styles.challengeDesc}>
                    Supporting different content types (images, text, video) with consistent user experience.
                  </p>
                  <div className={styles.solutionBox}>
                    <h4 className={styles.solutionTitle}>Solution Implemented:</h4>
                    <p className={styles.solutionDesc}>
                      Unified API interface, flexible response handling, and extensible architecture for future content types.
                    </p>
                  </div>
                </div>

                <div className={styles.challengeCard}>
                  <h3 className={styles.challengeTitle}>
                    <span>🛡️</span> Error Handling & Reliability
                  </h3>
                  <p className={styles.challengeDesc}>
                    Ensuring reliable user experience when external APIs fail or are unavailable.
                  </p>
                  <div className={styles.solutionBox}>
                    <h4 className={styles.solutionTitle}>Solution Implemented:</h4>
                    <p className={styles.solutionDesc}>
                      Comprehensive error handling, fallback mechanisms, and placeholder content generation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.implementationSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>📊</span>
              Performance Optimization
            </h2>
            <div className={styles.sectionContent}>
              <h3>Model Optimization Techniques</h3>
              <ul>
                <li><strong>Quantization:</strong> Reduced model precision from FP32 to INT8 for 4x speed improvement</li>
                <li><strong>Pruning:</strong> Removed redundant neurons to reduce model size by 60%</li>
                <li><strong>Batch Processing:</strong> Optimized for GPU utilization with dynamic batching</li>
                <li><strong>Model Caching:</strong> Implemented LRU cache for frequently accessed model weights</li>
              </ul>

              <h3>Infrastructure Optimizations</h3>
              <ul>
                <li><strong>Load Balancing:</strong> Distributed inference across multiple GPU instances</li>
                <li><strong>Auto-scaling:</strong> Kubernetes-based horizontal pod autoscaling</li>
                <li><strong>CDN Integration:</strong> Edge caching for static assets and model files</li>
                <li><strong>Database Optimization:</strong> Indexed queries and connection pooling</li>
              </ul>
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