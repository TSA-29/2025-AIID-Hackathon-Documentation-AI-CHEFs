import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Step1.module.css';

const Step1: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/vibe-coding-guide" className={styles.backLink}>
          ← Back to Vibe Coding Guide
        </Link>
        <h1 className={styles.title}>STEP 1: PROJECT SETUP</h1>
        <p className={styles.subtitle}>
          Create the basic project structure and initialize your Carbon Compass application with AI assistance
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>🎯 Step Overview</h2>
          <p className={styles.sectionText}>
            In this first step, we'll create the basic HTML structure for our Carbon Compass application. 
            We'll use AI to generate the initial code and then customize it to fit our needs.
          </p>
          <div className={styles.learningGoals}>
            <h3>What you'll learn:</h3>
            <ul className={styles.goalsList}>
              <li>How to prompt AI for HTML structure</li>
              <li>Basic semantic HTML elements</li>
              <li>Setting up a project file structure</li>
              <li>Testing your initial setup</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>🤖 AI Prompt for HTML Structure</h2>
          <p className={styles.sectionText}>
            Start by asking your AI assistant to create the basic HTML structure for our carbon calculator:
          </p>
          
          <div className={styles.promptBox}>
            <h3>Copy this prompt to ChatGPT or Claude:</h3>
            <div className={styles.promptContent}>
              "Create an HTML page for a carbon emission calculator called 'Carbon Compass'. The page should have:
              <br /><br />
              1. A header with the title 'Carbon Compass' and subtitle 'Calculate your CBAM fees'
              <br />
              2. A form section with inputs for:
              <br />
              - Product type (dropdown with options: Steel, Cement, Aluminum, Fertilizer)
              <br />
              - Weight in kg (number input)
              <br />
              - Shipping distance in km (number input)
              <br />
              - Origin country (text input)
              <br />
              3. A calculate button
              <br />
              4. A results section to display the calculated emissions and CBAM fees
              <br />
              5. A footer with basic information
              <br /><br />
              Use semantic HTML5 elements and include basic CSS styling with a modern, clean design."
            </div>
            <button className={styles.copyButton} onClick={() => navigator.clipboard.writeText(
              `Create an HTML page for a carbon emission calculator called 'Carbon Compass'. The page should have:

1. A header with the title 'Carbon Compass' and subtitle 'Calculate your CBAM fees'
2. A form section with inputs for:
- Product type (dropdown with options: Steel, Cement, Aluminum, Fertilizer)
- Weight in kg (number input)
- Shipping distance in km (number input)
- Origin country (text input)
3. A calculate button
4. A results section to display the calculated emissions and CBAM fees
5. A footer with basic information

Use semantic HTML5 elements and include basic CSS styling with a modern, clean design.`
            )}>
              📋 Copy Prompt
            </button>
          </div>

          <div className={styles.aiResponse}>
            <h3>Expected AI Response:</h3>
            <div className={styles.codeBlock}>
              <pre>
{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carbon Compass - CBAM Calculator</title>
    <style>
        /* CSS styles will go here */
    </style>
</head>
<body>
    <header>
        <h1>Carbon Compass</h1>
        <p>Calculate your CBAM fees</p>
    </header>
    
    <main>
        <section id="calculator">
            <form id="carbonForm">
                <div class="form-group">
                    <label for="productType">Product Type:</label>
                    <select id="productType" required>
                        <option value="">Select a product</option>
                        <option value="steel">Steel</option>
                        <option value="cement">Cement</option>
                        <option value="aluminum">Aluminum</option>
                        <option value="fertilizer">Fertilizer</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="weight">Weight (kg):</label>
                    <input type="number" id="weight" min="0" step="0.01" required>
                </div>
                
                <div class="form-group">
                    <label for="distance">Shipping Distance (km):</label>
                    <input type="number" id="distance" min="0" step="0.01" required>
                </div>
                
                <div class="form-group">
                    <label for="origin">Origin Country:</label>
                    <input type="text" id="origin" required>
                </div>
                
                <button type="button" id="calculateBtn">Calculate Emissions</button>
            </form>
            
            <section id="results" class="hidden">
                <h2>Calculation Results</h2>
                <div class="result-item">
                    <span>Carbon Emissions:</span>
                    <span id="emissions">0 kg CO₂</span>
                </div>
                <div class="result-item">
                    <span>CBAM Fee:</span>
                    <span id="cbamFee">€0.00</span>
                </div>
            </section>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2024 Carbon Compass - Simplifying CBAM compliance</p>
    </footer>
    
    <script>
        // JavaScript will go here
    </script>
</body>
</html>`}
              </pre>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>📁 Creating Your Project Files</h2>
          <p className={styles.sectionText}>
            Now let's create the actual files for our project. Create a folder called "carbon-compass" 
            and add these files inside:
          </p>
          
          <div className={styles.fileSteps}>
            <div className={styles.fileStep}>
              <h3>1. Create index.html</h3>
              <p>Copy the HTML code from the AI response into a new file called index.html</p>
              <div className={styles.screenshotPlaceholder}>
                <img src={import.meta.env.BASE_URL + 'images/VibeCod/VibeCod3.png'} alt="Creating index.html file" className={styles.screenshot} />
              </div>
            </div>

            <div className={styles.fileStep}>
              <h3>2. Create style.css</h3>
              <p>Ask your AI to generate CSS for the HTML structure:</p>
              <div className={styles.promptBox}>
                <h4>Additional Prompt:</h4>
                <div className={styles.promptContent}>
                  "Generate CSS for the carbon calculator HTML. Use a modern design with:
                  <br />
                  - Clean, professional color scheme (blues and greens)
                  <br />
                  - Responsive layout for mobile and desktop
                  <br />
                  - Smooth transitions and hover effects
                  <br />
                  - Clear form styling with proper spacing
                  <br />
                  - Highlighted results section"
                </div>
              </div>
            </div>

            <div className={styles.fileStep}>
              <h3>3. Create script.js</h3>
              <p>We'll add JavaScript in the next step, but create the empty file now:</p>
              <div className={styles.codeBlock}>
                <pre>
{`// Carbon Compass JavaScript
// We'll add functionality in Step 2

console.log('Carbon Compass loaded');`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>🧪 Testing Your Setup</h2>
          <p className={styles.sectionText}>
            Let's test what we have so far by opening the HTML file in a browser:
          </p>
          
          <div className={styles.testingSteps}>
            <div className={styles.testStep}>
              <h3>1. Open index.html</h3>
              <p>Double-click the index.html file to open it in your default browser</p>
              <div className={styles.screenshotPlaceholder}>
                <img src={import.meta.env.BASE_URL + 'images/VibeCod/VibeCod2.png'} alt="Opening HTML file in browser" className={styles.screenshot} />
              </div>
            </div>

            <div className={styles.testStep}>
              <h3>2. Check the layout</h3>
              <p>You should see a form with all the input fields and a calculate button</p>
              <div className={styles.screenshotPlaceholder}>
                <img src={import.meta.env.BASE_URL + 'images/VibeCod/VibeCod1.png'} alt="Initial Carbon Compass layout" className={styles.screenshot} />
              </div>
            </div>

            <div className={styles.testStep}>
              <h3>3. Test form inputs</h3>
              <p>Try filling in the form fields to make sure everything works</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>🔧 Common Issues & Solutions</h2>
          <div className={styles.issuesGrid}>
            <div className={styles.issueCard}>
              <h3>HTML Not Displaying Correctly</h3>
              <p>Make sure you saved the file with .html extension and opened it in a modern browser</p>
            </div>

            <div className={styles.issueCard}>
              <h3>CSS Not Applying</h3>
              <p>Check that your CSS is properly linked in the HTML file</p>
            </div>

            <div className={styles.issueCard}>
              <h3>Form Not Styled</h3>
              <p>Ask your AI to generate more specific CSS for form elements</p>
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
        <Link to="/vibe-coding-guide/setup" className={styles.prevButton}>
          ← Back to Setup
        </Link>
        <Link to="/vibe-coding-guide/step2" className={styles.nextButton}>
          Continue to UI Design →
        </Link>
      </div>
    </div>
  );
};

export default Step1;