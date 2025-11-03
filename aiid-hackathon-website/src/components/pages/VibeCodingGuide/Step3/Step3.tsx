import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Step3.module.css';

const Step3: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/vibe-coding-guide" className={styles.backLink}>
          ← Back to Vibe Coding Guide
        </Link>
        <h1 className={styles.title}>STEP 3: CARBON CALCULATION</h1>
        <p className={styles.subtitle}>
          Implement the core carbon emission calculation logic with AI guidance
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>🧮 Step Overview</h2>
          <p className={styles.sectionText}>
            In this step, we'll implement the JavaScript logic to calculate carbon emissions and CBAM fees. 
            This is where the magic happens - turning user input into meaningful calculations.
          </p>
          <div className={styles.learningGoals}>
            <h3>What you'll learn:</h3>
            <ul className={styles.goalsList}>
              <li>JavaScript form handling and validation</li>
              <li>Carbon emission calculation formulas</li>
              <li>CBAM fee calculation logic</li>
              <li>Dynamic result display</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>🤖 AI Prompt for Calculation Logic</h2>
          <p className={styles.sectionText}>
            Ask your AI assistant to generate the JavaScript calculation logic:
          </p>
          
          <div className={styles.promptBox}>
            <h3>Copy this prompt to ChatGPT or Claude:</h3>
            <div className={styles.promptContent}>
              "Create JavaScript functions for a carbon emission calculator with CBAM fee calculation. 
              Include:
              <br /><br />
              1. Form validation to ensure all fields are filled
              <br />
              2. Emission factors for different products:
              <br />
              - Steel: 1.9 tons CO2 per ton
              <br />
              - Cement: 0.6 tons CO2 per ton
              <br />
              - Aluminum: 1.7 tons CO2 per ton
              <br />
              - Fertilizer: 1.3 tons CO2 per ton
              <br />
              3. Transport emission calculation (0.0001 tons CO2 per ton-km)
              <br />
              4. CBAM fee calculation (€80 per ton CO2)
              <br />
              5. Function to display results with proper formatting
              <br />
              6. Error handling for invalid inputs
              <br /><br />
              Add comments explaining each calculation step and make the code beginner-friendly."
            </div>
            <button className={styles.copyButton} onClick={() => navigator.clipboard.writeText(
              `Create JavaScript functions for a carbon emission calculator with CBAM fee calculation. Include:

1. Form validation to ensure all fields are filled
2. Emission factors for different products:
- Steel: 1.9 tons CO2 per ton
- Cement: 0.6 tons CO2 per ton
- Aluminum: 1.7 tons CO2 per ton
- Fertilizer: 1.3 tons CO2 per ton
3. Transport emission calculation (0.0001 tons CO2 per ton-km)
4. CBAM fee calculation (€80 per ton CO2)
5. Function to display results with proper formatting
6. Error handling for invalid inputs

Add comments explaining each calculation step and make the code beginner-friendly.`
            )}>
              📋 Copy Prompt
            </button>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>📊 Implementation Details</h2>
          <p className={styles.sectionText}>
            Here's how to implement the calculation logic step by step:
          </p>
          
          <div className={styles.implementationSteps}>
            <div className={styles.implStep}>
              <h3>1. Form Data Collection</h3>
              <p>Get user input from the form fields</p>
              <div className={styles.codeBlock}>
                <pre>
{`// Get form elements
const form = document.getElementById('carbonForm');
const productType = document.getElementById('productType');
const weight = document.getElementById('weight');
const distance = document.getElementById('distance');
const origin = document.getElementById('origin');
const calculateBtn = document.getElementById('calculateBtn');

// Add event listener
calculateBtn.addEventListener('click', calculateEmissions);`}
                </pre>
              </div>
            </div>

            <div className={styles.implStep}>
              <h3>2. Emission Factors</h3>
              <p>Define emission factors for different product types</p>
              <div className={styles.codeBlock}>
                <pre>
{`// Emission factors (tons CO2 per ton of product)
const emissionFactors = {
  steel: 1.9,
  cement: 0.6,
  aluminum: 1.7,
  fertilizer: 1.3
};

// Transport emission factor
const transportFactor = 0.0001; // tons CO2 per ton-km

// CBAM price per ton CO2
const cbamPrice = 80; // euros per ton`}
                </pre>
              </div>
            </div>

            <div className={styles.implStep}>
              <h3>3. Calculation Function</h3>
              <p>Implement the main calculation logic</p>
              <div className={styles.codeBlock}>
                <pre>
{`function calculateEmissions() {
  // Get input values
  const product = productType.value;
  const weightKg = parseFloat(weight.value);
  const distanceKm = parseFloat(distance.value);
  
  // Validate inputs
  if (!product || isNaN(weightKg) || isNaN(distanceKm) || weightKg <= 0) {
    showError('Please fill in all fields with valid values');
    return;
  }
  
  // Convert weight to tons
  const weightTons = weightKg / 1000;
  
  // Calculate product emissions
  const productEmissions = weightTons * emissionFactors[product];
  
  // Calculate transport emissions
  const transportEmissions = weightTons * distanceKm * transportFactor;
  
  // Total emissions
  const totalEmissions = productEmissions + transportEmissions;
  
  // Calculate CBAM fee
  const cbamFee = totalEmissions * cbamPrice;
  
  // Display results
  displayResults(totalEmissions, cbamFee);
}`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>🎨 Result Display</h2>
          <p className={styles.sectionText}>
            Create a function to display the calculation results:
          </p>
          
          <div className={styles.codeBlock}>
            <pre>
{`function displayResults(emissions, fee) {
  const resultsSection = document.getElementById('results');
  const emissionsElement = document.getElementById('emissions');
  const feeElement = document.getElementById('cbamFee');
  
  // Format numbers
  const formattedEmissions = emissions.toFixed(2) + ' tons CO₂';
  const formattedFee = '€' + fee.toFixed(2);
  
  // Update display
  emissionsElement.textContent = formattedEmissions;
  feeElement.textContent = formattedFee;
  
  // Show results section
  resultsSection.classList.remove('hidden');
  
  // Add animation
  resultsSection.style.opacity = '0';
  setTimeout(() => {
    resultsSection.style.transition = 'opacity 0.5s ease';
    resultsSection.style.opacity = '1';
  }, 100);
}`}
            </pre>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>🧪 Testing Your Calculator</h2>
          <p className={styles.sectionText}>
            Test your carbon calculator with different scenarios:
          </p>
          
          <div className={styles.testCases}>
            <div className={styles.testCase}>
              <h3>Test Case 1: Steel Shipment</h3>
              <p>Product: Steel, Weight: 1000kg, Distance: 5000km</p>
              <p className={styles.expectedResult}>Expected: ~1.95 tons CO₂, €156 CBAM fee</p>
            </div>

            <div className={styles.testCase}>
              <h3>Test Case 2: Cement Shipment</h3>
              <p>Product: Cement, Weight: 2000kg, Distance: 1000km</p>
              <p className={styles.expectedResult}>Expected: ~1.22 tons CO₂, €98 CBAM fee</p>
            </div>

            <div className={styles.testCase}>
              <h3>Test Case 3: Invalid Input</h3>
              <p>Try empty fields or negative values</p>
              <p className={styles.expectedResult}>Expected: Error message</p>
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
        <Link to="/vibe-coding-guide/step2" className={styles.prevButton}>
          ← Back to UI Design
        </Link>
        <Link to="/vibe-coding-guide/step4" className={styles.nextButton}>
          Continue to Data Integration →
        </Link>
      </div>
    </div>
  );
};

export default Step3;