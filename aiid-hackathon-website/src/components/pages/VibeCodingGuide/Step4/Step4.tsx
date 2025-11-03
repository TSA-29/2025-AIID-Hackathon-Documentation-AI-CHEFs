import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Step4.module.css';

const Step4: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/vibe-coding-guide" className={styles.backLink}>
          ← Back to Vibe Coding Guide
        </Link>
        <h1 className={styles.title}>STEP 4: DATA INTEGRATION</h1>
        <p className={styles.subtitle}>
          Connect your application to carbon emission databases and APIs
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>🔗 Step Overview</h2>
          <p className={styles.sectionText}>
            In this step, we'll enhance our calculator with real emission data and make it more dynamic. 
            We'll use AI to help integrate external data sources and create a more robust application.
          </p>
          <div className={styles.learningGoals}>
            <h3>What you'll learn:</h3>
            <ul className={styles.goalsList}>
              <li>Working with JSON data files</li>
              <li>Fetching data from external sources</li>
              <li>Creating dynamic dropdown options</li>
              <li>Implementing data caching</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>🤖 AI Prompt for Data Integration</h2>
          <p className={styles.sectionText}>
            Ask your AI assistant to help integrate external data:
          </p>
          
          <div className={styles.promptBox}>
            <h3>Copy this prompt to ChatGPT or Claude:</h3>
            <div className={styles.promptContent}>
              "Help me enhance the carbon calculator with external data integration:
              <br /><br />
              1. Create a JSON file with detailed emission factors for more products
              <br />
              2. Add country-specific transport emission factors
              <br />
              3. Implement dynamic loading of emission data
              <br />
              4. Add error handling for data loading
              <br />
              5. Create a function to update emission factors dynamically
              <br />
              6. Add loading states and user feedback
              <br /><br />
              The JSON structure should include:
              <br />
              - Product categories with detailed emission factors
              <br />
              - Transport modes with different emission rates
              <br />
              - Country-specific CBAM adjustments
              <br />
              - Last updated timestamp"
            </div>
            <button className={styles.copyButton} onClick={() => navigator.clipboard.writeText(
              `Help me enhance the carbon calculator with external data integration:

1. Create a JSON file with detailed emission factors for more products
2. Add country-specific transport emission factors
3. Implement dynamic loading of emission data
4. Add error handling for data loading
5. Create a function to update emission factors dynamically
6. Add loading states and user feedback

The JSON structure should include:
- Product categories with detailed emission factors
- Transport modes with different emission rates
- Country-specific CBAM adjustments
- Last updated timestamp`
            )}>
              📋 Copy Prompt
            </button>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>📊 Creating the Data File</h2>
          <p className={styles.sectionText}>
            Create a comprehensive data file for emission factors:
          </p>
          
          <div className={styles.dataStructure}>
            <h3>emission-factors.json</h3>
            <div className={styles.codeBlock}>
              <pre>
{`{
  "products": {
    "steel": {
      "name": "Steel",
      "emissionFactor": 1.9,
      "category": "Metals",
      "cbamAdjustment": 1.0
    },
    "cement": {
      "name": "Cement",
      "emissionFactor": 0.6,
      "category": "Construction",
      "cbamAdjustment": 1.0
    },
    "aluminum": {
      "name": "Aluminum",
      "emissionFactor": 1.7,
      "category": "Metals",
      "cbamAdjustment": 1.0
    },
    "fertilizer": {
      "name": "Fertilizer",
      "emissionFactor": 1.3,
      "category": "Chemicals",
      "cbamAdjustment": 1.0
    }
  },
  "transport": {
    "sea": {
      "name": "Sea Freight",
      "factor": 0.0001,
      "unit": "tons CO2 per ton-km"
    },
    "air": {
      "name": "Air Freight",
      "factor": 0.0005,
      "unit": "tons CO2 per ton-km"
    },
    "road": {
      "name": "Road Transport",
      "factor": 0.0002,
      "unit": "tons CO2 per ton-km"
    }
  },
  "countries": {
    "china": {
      "name": "China",
      "cbamMultiplier": 1.0,
      "additionalFee": 0
    },
    "usa": {
      "name": "United States",
      "cbamMultiplier": 1.0,
      "additionalFee": 0
    },
    "india": {
      "name": "India",
      "cbamMultiplier": 1.0,
      "additionalFee": 0
    }
  },
  "lastUpdated": "2024-01-15"
}`}
              </pre>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>🔄 Loading External Data</h2>
          <p className={styles.sectionText}>
            Implement JavaScript functions to load and use the external data:
          </p>
          
          <div className={styles.codeBlock}>
            <pre>
{`// Load emission data from JSON file
let emissionData = null;

async function loadEmissionData() {
  try {
    const response = await fetch('./data/emission-factors.json');
    emissionData = await response.json();
    console.log('Emission data loaded successfully');
    updateProductDropdown();
  } catch (error) {
    console.error('Error loading emission data:', error);
    showError('Failed to load emission data. Using default values.');
    // Fallback to default values
    emissionData = getDefaultEmissionData();
  }
}

// Update product dropdown with loaded data
function updateProductDropdown() {
  const productSelect = document.getElementById('productType');
  productSelect.innerHTML = '<option value="">Select a product</option>';
  
  for (const [key, product] of Object.entries(emissionData.products)) {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = product.name;
    productSelect.appendChild(option);
  }
}

// Get emission factor for a product
function getEmissionFactor(productType) {
  if (!emissionData || !emissionData.products[productType]) {
    return 1.5; // Default fallback
  }
  return emissionData.products[productType].emissionFactor;
}`}
            </pre>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>🌐 API Integration (Optional)</h2>
          <p className={styles.sectionText}>
            For a more advanced version, you can integrate with real carbon APIs:
          </p>
          
          <div className={styles.apiOptions}>
            <div className={styles.apiCard}>
              <h3>Carbon Interface API</h3>
              <p>Real-time carbon emission data</p>
              <div className={styles.codeBlock}>
                <pre>
{`// Example API integration
async function getEmissionFromAPI(productType, weight) {
  try {
    const response = await fetch(
      \`https://api.carboninterface.com/v1/estimate?product=\${productType}&weight=\${weight}\`
    );
    const data = await response.json();
    return data.co2e;
  } catch (error) {
    console.error('API error:', error);
    return null;
  }
}`}
                </pre>
              </div>
            </div>

            <div className={styles.apiCard}>
              <h3>Local Data Fallback</h3>
              <p>Always have local data as backup</p>
              <div className={styles.codeBlock}>
                <pre>
{`// Hybrid approach
async function getEmissionData(productType, weight) {
  // Try API first
  const apiData = await getEmissionFromAPI(productType, weight);
  
  if (apiData) {
    return apiData;
  }
  
  // Fallback to local data
  const localFactor = getEmissionFactor(productType);
  return weight * localFactor;
}`}
                </pre>
              </div>
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
        <Link to="/vibe-coding-guide/step3" className={styles.prevButton}>
          ← Back to Carbon Calculation
        </Link>
        <Link to="/vibe-coding-guide/step5" className={styles.nextButton}>
          Continue to Reporting →
        </Link>
      </div>
    </div>
  );
};

export default Step4;