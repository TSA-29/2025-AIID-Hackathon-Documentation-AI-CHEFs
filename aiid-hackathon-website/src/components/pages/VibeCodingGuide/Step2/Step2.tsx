import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Step2.module.css';

const Step2: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/vibe-coding-guide" className={styles.backLink}>
          ← Back to Vibe Coding Guide
        </Link>
        <h1 className={styles.title}>STEP 2: UI DESIGN</h1>
        <p className={styles.subtitle}>
          Design and implement the user interface with AI assistance
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>🎨 Step Overview</h2>
          <p className={styles.sectionText}>
            In this step, we'll enhance the visual design of our Carbon Compass application. 
            We'll use AI to create professional styling and improve the user experience.
          </p>
          <div className={styles.learningGoals}>
            <h3>What you'll learn:</h3>
            <ul className={styles.goalsList}>
              <li>How to prompt AI for CSS styling</li>
              <li>Modern UI design principles</li>
              <li>Responsive design techniques</li>
              <li>Creating interactive elements</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>🤖 AI Prompt for CSS Styling</h2>
          <p className={styles.sectionText}>
            Ask your AI assistant to generate comprehensive CSS for our carbon calculator:
          </p>
          
          <div className={styles.promptBox}>
            <h3>Copy this prompt to ChatGPT or Claude:</h3>
            <div className={styles.promptContent}>
              "Generate CSS for the carbon calculator HTML. Create a modern, professional design with:
              <br /><br />
              1. Color scheme: Use blues (#1e40af, #3b82f6) and greens (#10b981, #059669)
              <br />
              2. Typography: Clean, readable fonts with proper hierarchy
              <br />
              3. Form styling: Modern inputs with focus states and validation styles
              <br />
              4. Layout: Responsive grid system that works on mobile and desktop
              <br />
              5. Interactive elements: Smooth transitions and hover effects
              <br />
              6. Results section: Highlighted with card-based design
              <br />
              7. Professional appearance: Suitable for business use
              <br /><br />
              Include CSS variables for easy customization and add comments explaining each section."
            </div>
            <button className={styles.copyButton} onClick={() => navigator.clipboard.writeText(
              `Generate CSS for the carbon calculator HTML. Create a modern, professional design with:

1. Color scheme: Use blues (#1e40af, #3b82f6) and greens (#10b981, #059669)
2. Typography: Clean, readable fonts with proper hierarchy
3. Form styling: Modern inputs with focus states and validation styles
4. Layout: Responsive grid system that works on mobile and desktop
5. Interactive elements: Smooth transitions and hover effects
6. Results section: Highlighted with card-based design
7. Professional appearance: Suitable for business use

Include CSS variables for easy customization and add comments explaining each section.`
            )}>
              📋 Copy Prompt
            </button>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>📊 Adding Visual Elements</h2>
          <p className={styles.sectionText}>
            Let's enhance our calculator with visual feedback and data visualization:
          </p>
          
          <div className={styles.visualElements}>
            <div className={styles.elementCard}>
              <h3>Progress Indicators</h3>
              <p>Add visual feedback for form completion and calculation progress</p>
              <div className={styles.codeBlock}>
                <pre>
{`/* Add to your CSS */
.progress-indicator {
  width: 100%;
  height: 6px;
  background: #e5e7eb;
  border-radius: 3px;
  overflow: hidden;
  margin: 20px 0;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #10b981, #059669);
  width: 0%;
  transition: width 0.3s ease;
}

.form-group.completed {
  border-left: 4px solid #10b981;
}`}
                </pre>
              </div>
            </div>

            <div className={styles.elementCard}>
              <h3>Result Cards</h3>
              <p>Create card-based layout for calculation results</p>
              <div className={styles.codeBlock}>
                <pre>
{`/* Add to your CSS */
.result-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  margin: 16px 0;
  transition: transform 0.2s ease;
}

.result-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>📱 Making It Responsive</h2>
          <p className={styles.sectionText}>
            Ensure your Carbon Compass works on all devices with responsive design:
          </p>
          
          <div className={styles.responsiveGrid}>
            <div className={styles.responsiveCard}>
              <h3>Mobile First Approach</h3>
              <p>Design for mobile screens first, then scale up</p>
              <div className={styles.codeBlock}>
                <pre>
{`/* Mobile-first CSS */
@media (max-width: 768px) {
  .calculator-form {
    padding: 16px;
  }
  
  .form-group {
    margin-bottom: 16px;
  }
  
  .result-card {
    padding: 16px;
  }
}`}
                </pre>
              </div>
            </div>

            <div className={styles.responsiveCard}>
              <h3>Flexible Grid</h3>
              <p>Use CSS Grid for flexible layouts</p>
              <div className={styles.codeBlock}>
                <pre>
{`/* Responsive grid */
.calculator-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 768px) {
  .calculator-layout {
    grid-template-columns: 2fr 1fr;
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>🧪 Testing Your Design</h2>
          <p className={styles.sectionText}>
            Test your enhanced design across different devices and browsers:
          </p>
          
          <div className={styles.testingSteps}>
            <div className={styles.testStep}>
              <h3>1. Browser Testing</h3>
              <p>Open your HTML file in different browsers (Chrome, Firefox, Safari)</p>
            </div>

            <div className={styles.testStep}>
              <h3>2. Device Testing</h3>
              <p>Use browser dev tools to simulate mobile and tablet views</p>
            </div>

            <div className={styles.testStep}>
              <h3>3. Form Interaction</h3>
              <p>Test all form inputs and hover states</p>
            </div>
          </div>
        </section>

        <div className={styles.videoPlaceholder}>
          <h3>Watch This Video for Vibe Coding Instructions</h3>
          <div className={styles.videoContainer}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-LFB8D9WV-g"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </div>

      <div className={styles.navigation}>
        <Link to="/vibe-coding-guide/step1" className={styles.prevButton}>
          ← Back to Project Setup
        </Link>
        <Link to="/vibe-coding-guide/step3" className={styles.nextButton}>
          Continue to Carbon Calculation →
        </Link>
      </div>
    </div>
  );
};

export default Step2;