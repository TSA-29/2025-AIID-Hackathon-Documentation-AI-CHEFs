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
            Medical AI diagnosis system: Technical implementation details, development process, and engineering challenges
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
                    <h3 className={styles.timelineTitle}>Environment Setup & Data Collection</h3>
                    <p className={styles.timelineDesc}>
                      Configured development environment, established data pipelines, and collected initial medical imaging datasets
                    </p>
                  </div>
                  <div className={styles.timelineDot}></div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineTime}>Hours 7-18</div>
                    <h3 className={styles.timelineTitle}>Core Model Development</h3>
                    <p className={styles.timelineDesc}>
                      Built and trained CNN architecture for medical image analysis, implemented data preprocessing pipeline
                    </p>
                  </div>
                  <div className={styles.timelineDot}></div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineTime}>Hours 19-30</div>
                    <h3 className={styles.timelineTitle}>Backend Integration</h3>
                    <p className={styles.timelineDesc}>
                      Developed RESTful APIs, database schema, and integration with hospital information systems
                    </p>
                  </div>
                  <div className={styles.timelineDot}></div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineTime}>Hours 31-42</div>
                    <h3 className={styles.timelineTitle}>Frontend & User Interface</h3>
                    <p className={styles.timelineDesc}>
                      Created intuitive web interface for doctors, implemented real-time diagnosis display and reporting
                    </p>
                  </div>
                  <div className={styles.timelineDot}></div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineTime}>Hours 43-48</div>
                    <h3 className={styles.timelineTitle}>Testing & Deployment</h3>
                    <p className={styles.timelineDesc}>
                      Comprehensive testing, performance optimization, and deployment to cloud infrastructure
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
                <h3 className={styles.diagramTitle}>Medical AI Diagnosis Pipeline</h3>
                <div className={styles.architectureFlow}>
                  <div className={styles.archComponent}>
                    <span className={styles.archIcon}>📥</span>
                    <div className={styles.archTitle}>Image Input</div>
                    <p className={styles.archDesc}>DICOM/PACS integration</p>
                  </div>
                  <div className={styles.archComponent}>
                    <span className={styles.archIcon}>🔧</span>
                    <div className={styles.archTitle}>Preprocessing</div>
                    <p className={styles.archDesc}>Normalization & enhancement</p>
                  </div>
                  <div className={styles.archComponent}>
                    <span className={styles.archIcon}>🧠</span>
                    <div className={styles.archTitle}>AI Model</div>
                    <p className={styles.archDesc}>CNN inference engine</p>
                  </div>
                  <div className={styles.archComponent}>
                    <span className={styles.archIcon}>📊</span>
                    <div className={styles.archTitle}>Analysis</div>
                    <p className={styles.archDesc}>Result processing</p>
                  </div>
                  <div className={styles.archComponent}>
                    <span className={styles.archIcon}>👨‍⚕️</span>
                    <div className={styles.archTitle}>Doctor Review</div>
                    <p className={styles.archDesc}>Clinical validation</p>
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
                  <h3 className={styles.techCategoryTitle}>Machine Learning</h3>
                  <div className={styles.techList}>
                    <span className={styles.techItem}>PyTorch 2.0</span>
                    <span className={styles.techItem}>TensorFlow 2.13</span>
                    <span className={styles.techItem}>OpenCV</span>
                    <span className={styles.techItem}>Scikit-learn</span>
                    <span className={styles.techItem}>MONAI</span>
                  </div>
                </div>
                <div className={styles.techCategory}>
                  <h3 className={styles.techCategoryTitle}>Backend Services</h3>
                  <div className={styles.techList}>
                    <span className={styles.techItem}>FastAPI</span>
                    <span className={styles.techItem}>Docker</span>
                    <span className={styles.techItem}>Redis</span>
                    <span className={styles.techItem}>PostgreSQL</span>
                    <span className={styles.techItem}>Celery</span>
                  </div>
                </div>
                <div className={styles.techCategory}>
                  <h3 className={styles.techCategoryTitle}>Frontend</h3>
                  <div className={styles.techList}>
                    <span className={styles.techItem}>React 18</span>
                    <span className={styles.techItem}>TypeScript</span>
                    <span className={styles.techItem}>Material-UI</span>
                    <span className={styles.techItem}>Chart.js</span>
                    <span className={styles.techItem}>WebSocket</span>
                  </div>
                </div>
                <div className={styles.techCategory}>
                  <h3 className={styles.techCategoryTitle}>Infrastructure</h3>
                  <div className={styles.techList}>
                    <span className={styles.techItem}>AWS EC2</span>
                    <span className={styles.techItem}>Docker Swarm</span>
                    <span className={styles.techItem}>Nginx</span>
                    <span className={styles.techItem}>SSL/TLS</span>
                    <span className={styles.techItem}>CloudWatch</span>
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
              <h3>CNN Architecture for Medical Imaging</h3>
              <div className={styles.codeBlock}>
                <span className={styles.codeKeyword}>class</span> <span className={styles.codeFunction}>MedicalCNN</span>(nn.Module):<br/>
                &nbsp;&nbsp;<span className={styles.codeKeyword}>def</span> <span className={styles.codeFunction}>__init__</span>(self):<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeKeyword}>super</span>().__init__()<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;self.conv1 = nn.Conv2d(1, 64, kernel_size=3, padding=1)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;self.conv2 = nn.Conv2d(64, 128, kernel_size=3, padding=1)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;self.conv3 = nn.Conv2d(128, 256, kernel_size=3, padding=1)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;self.pool = nn.MaxPool2d(2, 2)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;self.fc1 = nn.Linear(256 * 28 * 28, 512)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;self.fc2 = nn.Linear(512, NUM_CLASSES)&nbsp;&nbsp;<span className={styles.codeComment}># Number of disease classes</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;self.dropout = nn.Dropout(0.5)<br/><br/>
                &nbsp;&nbsp;<span className={styles.codeKeyword}>def</span> <span className={styles.codeFunction}>forward</span>(self, x):<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;x = F.relu(self.conv1(x))<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;x = self.pool(x)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;x = F.relu(self.conv2(x))<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;x = self.pool(x)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;x = F.relu(self.conv3(x))<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;x = self.pool(x)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;x = x.view(-1, 256 * 28 * 28)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;x = F.relu(self.fc1(x))<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;x = self.dropout(x)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;x = self.fc2(x)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeKeyword}>return</span> F.softmax(x, dim=1)
              </div>

              <h3>Data Preprocessing Pipeline</h3>
              <div className={styles.codeBlock}>
                <span className={styles.codeComment}># Medical image preprocessing pipeline</span><br/>
                <span className={styles.codeKeyword}>def</span> <span className={styles.codeFunction}>preprocess_medical_image</span>(image_path):<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeComment}># Load DICOM or standard image formats</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;image = load_image(image_path)<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeComment}># Normalize pixel values to [0, 1]</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;image = image.astype(np.float32) / 255.0<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeComment}># Apply medical-specific filters</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;image = apply_clahe(image)&nbsp;&nbsp;<span className={styles.codeComment}># Contrast enhancement</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;image = remove_artifacts(image)&nbsp;&nbsp;<span className={styles.codeComment}># Noise reduction</span><br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeComment}># Resize to model input size</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;image = cv2.resize(image, (224, 224))<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeKeyword}>return</span> torch.tensor(image).unsqueeze(0)
              </div>

              <h3>Real-time Inference API</h3>
              <div className={styles.codeBlock}>
                <span className={styles.codeKeyword}>@app.post</span>(<span className={styles.codeString}>"/diagnose"</span>)<br/>
                <span className={styles.codeKeyword}>async def</span> <span className={styles.codeFunction}>diagnose_image</span>(file: UploadFile):<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeComment}># Process uploaded medical image</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;image_bytes = await file.read()<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;image = preprocess_image(image_bytes)<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeComment}># Run AI model inference</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeKeyword}>with</span> torch.no_grad():<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;prediction = model(image)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;confidence = torch.max(prediction).item()<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;diagnosis = decode_prediction(prediction)<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeComment}># Generate explanation using Grad-CAM</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;explanation = generate_grad_cam(image, model)<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeKeyword}>return</span> &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeString}>"diagnosis"</span>: diagnosis,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeString}>"confidence"</span>: confidence,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeString}>"explanation"</span>: explanation,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeString}>"timestamp"</span>: datetime.now().isoformat()<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;
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
                    <span>🔒</span> HIPAA Compliance & Data Privacy
                  </h3>
                  <p className={styles.challengeDesc}>
                    Medical data requires strict privacy protection and compliance with healthcare regulations.
                  </p>
                  <div className={styles.solutionBox}>
                    <h4 className={styles.solutionTitle}>Solution Implemented:</h4>
                    <p className={styles.solutionDesc}>
                      End-to-end encryption, anonymization pipeline, secure data storage, and audit logging system.
                    </p>
                  </div>
                </div>

                <div className={styles.challengeCard}>
                  <h3 className={styles.challengeTitle}>
                    <span>⚡</span> Real-time Processing Requirements
                  </h3>
                  <p className={styles.challengeDesc}>
                    Medical diagnosis requires sub-second response times to be clinically useful.
                  </p>
                  <div className={styles.solutionBox}>
                    <h4 className={styles.solutionTitle}>Solution Implemented:</h4>
                    <p className={styles.solutionDesc}>
                      Model optimization, TensorRT acceleration, edge deployment, and caching mechanisms.
                    </p>
                  </div>
                </div>

                <div className={styles.challengeCard}>
                  <h3 className={styles.challengeTitle}>
                    <span>🏥</span> Hospital System Integration
                  </h3>
                  <p className={styles.challengeDesc}>
                    Seamless integration with existing HIS/PACS systems is critical for adoption.
                  </p>
                  <div className={styles.solutionBox}>
                    <h4 className={styles.solutionTitle}>Solution Implemented:</h4>
                    <p className={styles.solutionDesc}>
                      HL7/FHIR standards compliance, RESTful APIs, and middleware for legacy system compatibility.
                    </p>
                  </div>
                </div>

                <div className={styles.challengeCard}>
                  <h3 className={styles.challengeTitle}>
                    <span>🎯</span> Model Explainability
                  </h3>
                  <p className={styles.challengeDesc}>
                    Doctors need to understand AI reasoning to trust and use the system effectively.
                  </p>
                  <div className={styles.solutionBox}>
                    <h4 className={styles.solutionTitle}>Solution Implemented:</h4>
                    <p className={styles.solutionDesc}>
                      Grad-CAM visualization, attention maps, and natural language explanations of diagnostic findings.
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