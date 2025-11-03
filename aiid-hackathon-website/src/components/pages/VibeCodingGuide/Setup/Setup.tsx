import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Setup.module.css';

const Setup: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/vibe-coding-guide" className={styles.backLink}>
          ← Back to Vibe Coding Guide
        </Link>
        <h1 className={styles.title}>SETUP</h1>
        <p className={styles.subtitle}>
          Prepare your development environment and AI tools for the Vibe Coding journey
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Required AI Tools</h2>
          <p className={styles.sectionText}>
            To follow this tutorial, you'll need access to at least one of these AI assistants. 
            We recommend having multiple options available as different tools excel at different tasks.
          </p>
          
          <div className={styles.toolsGrid}>
            <div className={styles.toolCard}>
              <div className={styles.toolIcon}>🤖</div>
              <h3 className={styles.toolTitle}>ChatGPT</h3>
              <p className={styles.toolDesc}>
                Excellent for code generation, debugging, and explaining complex concepts
              </p>
              <div className={styles.toolFeatures}>
                <span className={styles.featureTag}>GPT-4 recommended</span>
                <span className={styles.featureTag}>Code interpreter</span>
                <span className={styles.featureTag}>Web browsing</span>
              </div>
              <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className={styles.toolLink}>
                Access ChatGPT →
              </a>
            </div>

            <div className={styles.toolCard}>
              <div className={styles.toolIcon}>🧠</div>
              <h3 className={styles.toolTitle}>Claude</h3>
              <p className={styles.toolDesc}>
                Strong at reasoning, code quality, and following complex instructions
              </p>
              <div className={styles.toolFeatures}>
                <span className={styles.featureTag}>Claude 3 recommended</span>
                <span className={styles.featureTag}>Large context</span>
                <span className={styles.featureTag}>Code analysis</span>
              </div>
              <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className={styles.toolLink}>
                Access Claude →
              </a>
            </div>

            <div className={styles.toolCard}>
              <div className={styles.toolIcon}>💻</div>
              <h3 className={styles.toolTitle}>GitHub Copilot</h3>
              <p className={styles.toolDesc}>
                Integrated development experience with real-time code suggestions
              </p>
              <div className={styles.toolFeatures}>
                <span className={styles.featureTag}>IDE integration</span>
                <span className={styles.featureTag}>Real-time suggestions</span>
                <span className={styles.featureTag}>Multi-language</span>
              </div>
              <a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer" className={styles.toolLink}>
                Access Copilot →
              </a>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Development Environment</h2>
          <p className={styles.sectionText}>
            You don't need complex development tools for this tutorial. A simple text editor and web browser are sufficient.
          </p>
          
          <div className={styles.envGrid}>
            <div className={styles.envItem}>
              <div className={styles.envIcon}>📝</div>
              <h3 className={styles.envTitle}>Text Editor</h3>
              <p className={styles.envDesc}>
                Any text editor works, but we recommend:
              </p>
              <ul className={styles.envList}>
                <li><strong>VS Code</strong> - Free, with AI extensions</li>
                <li><strong>Replit</strong> - Browser-based, no installation needed</li>
                <li><strong>CodePen</strong> - Great for web experiments</li>
              </ul>
            </div>

            <div className={styles.envItem}>
              <div className={styles.envIcon}>🌐</div>
              <h3 className={styles.envTitle}>Web Browser</h3>
              <p className={styles.envDesc}>
                Modern browser with developer tools:
              </p>
              <ul className={styles.envList}>
                <li><strong>Chrome</strong> - Excellent dev tools</li>
                <li><strong>Firefox</strong> - Great debugging features</li>
                <li><strong>Safari</strong> - Good for Mac users</li>
              </ul>
            </div>

            <div className={styles.envItem}>
              <div className={styles.envIcon}>📁</div>
              <h3 className={styles.envTitle}>File Storage</h3>
              <p className={styles.envDesc}>
                Keep your code organized:
              </p>
              <ul className={styles.envList}>
                <li><strong>Local folder</strong> - On your computer</li>
                <li><strong>GitHub</strong> - Version control and backup</li>
                <li><strong>Cloud storage</strong> - Access from anywhere</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Key AI Prompting Techniques</h2>
          <p className={styles.sectionText}>
            Master these prompting techniques to get the best results from your AI assistant:
          </p>
          
          <div className={styles.techniquesGrid}>
            <div className={styles.techniqueCard}>
              <h3 className={styles.techniqueTitle}>🎯 Be Specific</h3>
              <div className={styles.promptExample}>
                <div className={styles.promptLabel}>Instead of:</div>
                <div className={styles.promptBad}>"Make a carbon calculator"</div>
                <div className={styles.promptLabel}>Try:</div>
                <div className={styles.promptGood}>"Create a carbon emission calculator for EU imports that calculates CBAM fees based on product type, weight, and shipping distance"</div>
              </div>
            </div>

            <div className={styles.techniqueCard}>
              <h3 className={styles.techniqueTitle}>📋 Provide Context</h3>
              <div className={styles.promptExample}>
                <div className={styles.promptLabel}>Instead of:</div>
                <div className={styles.promptBad}>"Fix this code"</div>
                <div className={styles.promptLabel}>Try:</div>
                <div className={styles.promptGood}>"I'm building a carbon calculator for beginners. This code should calculate emissions but it's not working. Can you explain what's wrong and fix it?"</div>
              </div>
            </div>

            <div className={styles.techniqueCard}>
              <h3 className={styles.techniqueTitle}>🔄 Iterate</h3>
              <div className={styles.promptExample}>
                <div className={styles.promptLabel}>Instead of:</div>
                <div className={styles.promptBad}>"This isn't right"</div>
                <div className={styles.promptLabel}>Try:</div>
                <div className={styles.promptGood}>"This is close, but can you modify it to: 1) Add input validation, 2) Show the calculation steps, 3) Format the output as a table"</div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Project Structure</h2>
          <p className={styles.sectionText}>
            We'll create a simple project structure for our Carbon Compass application:
          </p>
          
          <div className={styles.projectStructure}>
            <div className={styles.folderStructure}>
              <div className={styles.folder}>
                <span className={styles.folderIcon}>📁</span>
                <span className={styles.folderName}>carbon-compass</span>
              </div>
              <div className={styles.indent}>
                <div className={styles.file}>
                  <span className={styles.fileIcon}>📄</span>
                  <span className={styles.fileName}>index.html</span>
                </div>
                <div className={styles.file}>
                  <span className={styles.fileIcon}>📄</span>
                  <span className={styles.fileName}>style.css</span>
                </div>
                <div className={styles.file}>
                  <span className={styles.fileIcon}>📄</span>
                  <span className={styles.fileName}>script.js</span>
                </div>
                <div className={styles.folder}>
                  <span className={styles.folderIcon}>📁</span>
                  <span className={styles.folderName}>data</span>
                </div>
                <div className={styles.indent}>
                  <div className={styles.file}>
                    <span className={styles.fileIcon}>📄</span>
                    <span className={styles.fileName}>emission-factors.json</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.checklist}>
          <h3>Setup Checklist</h3>
          <div className={styles.checklistItems}>
            <label className={styles.checklistItem}>
              <input type="checkbox" className={styles.checkbox} />
              <span>AI tool account created (ChatGPT/Claude/Copilot)</span>
            </label>
            <label className={styles.checklistItem}>
              <input type="checkbox" className={styles.checkbox} />
              <span>Text editor ready (VS Code/Replit/CodePen)</span>
            </label>
            <label className={styles.checklistItem}>
              <input type="checkbox" className={styles.checkbox} />
              <span>Project folder created</span>
            </label>
            <label className={styles.checklistItem}>
              <input type="checkbox" className={styles.checkbox} />
              <span>Basic HTML/CSS/JS understanding</span>
            </label>
          </div>
        </div>
      </div>

      <div className={styles.navigation}>
        <Link to="/vibe-coding-guide/introduction" className={styles.prevButton}>
          ← Back to Introduction
        </Link>
        <Link to="/vibe-coding-guide/step1" className={styles.nextButton}>
          Start Building →
        </Link>
      </div>
    </div>
  );
};

export default Setup;