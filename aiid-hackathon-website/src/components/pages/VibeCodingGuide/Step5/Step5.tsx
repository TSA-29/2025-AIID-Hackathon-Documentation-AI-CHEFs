import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Step5.module.css';

const Step5: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/vibe-coding-guide" className={styles.backLink}>
          ← Back to Vibe Coding Guide
        </Link>
        <h1 className={styles.title}>STEP 5: REPORTING</h1>
        <p className={styles.subtitle}>
          Build compliance reporting features and export functionality
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>📊 Step Overview</h2>
          <p className={styles.sectionText}>
            In this step, we'll add reporting features to generate CBAM compliance reports 
            and export functionality for users to save their calculations.
          </p>
          <div className={styles.learningGoals}>
            <h3>What you'll learn:</h3>
            <ul className={styles.goalsList}>
              <li>Generating downloadable reports</li>
              <li>Creating data visualizations</li>
              <li>Implementing export functionality</li>
              <li>Adding print-friendly layouts</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>🤖 AI Prompt for Reporting Features</h2>
          <p className={styles.sectionText}>
            Ask your AI assistant to generate reporting functionality:
          </p>
          
          <div className={styles.promptBox}>
            <h3>Copy this prompt to ChatGPT or Claude:</h3>
            <div className={styles.promptContent}>
              "Add reporting features to the carbon calculator:
              <br /><br />
              1. Create a function to generate CBAM compliance reports
              <br />
              2. Add charts to visualize emissions breakdown
              <br />
              3. Implement export to PDF functionality
              <br />
              4. Add export to CSV for data analysis
              <br />
              5. Create a print-friendly report layout
              <br />
              6. Add report history tracking
              <br /><br />
              The report should include:
              <br />
              - Company information section
              <br />
              - Calculation summary with breakdown
              <br />
              - CBAM fee details
              <br />
              - Compliance recommendations
              <br />
              - Timestamp and report ID"
            </div>
            <button className={styles.copyButton} onClick={() => navigator.clipboard.writeText(
              `Add reporting features to the carbon calculator:

1. Create a function to generate CBAM compliance reports
2. Add charts to visualize emissions breakdown
3. Implement export to PDF functionality
4. Add export to CSV for data analysis
5. Create a print-friendly report layout
6. Add report history tracking

The report should include:
- Company information section
- Calculation summary with breakdown
- CBAM fee details
- Compliance recommendations
- Timestamp and report ID`
            )}>
              📋 Copy Prompt
            </button>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>📈 Data Visualization</h2>
          <p className={styles.sectionText}>
            Add charts to visualize the carbon emission data:
          </p>
          
          <div className={styles.codeBlock}>
            <pre>
{`// Create emission breakdown chart
function createEmissionChart(productEmissions, transportEmissions) {
  const canvas = document.getElementById('emissionChart');
  const ctx = canvas.getContext('2d');
  
  // Simple bar chart
  const data = [
    { label: 'Product Emissions', value: productEmissions, color: '#3b82f6' },
    { label: 'Transport Emissions', value: transportEmissions, color: '#10b981' }
  ];
  
  // Draw chart
  drawBarChart(ctx, data, canvas.width, canvas.height);
}

function drawBarChart(ctx, data, width, height) {
  const barWidth = width / (data.length * 2);
  const maxValue = Math.max(...data.map(d => d.value));
  
  data.forEach((item, index) => {
    const barHeight = (item.value / maxValue) * (height - 40);
    const x = (index * 2 + 1) * barWidth;
    const y = height - barHeight - 20;
    
    // Draw bar
    ctx.fillStyle = item.color;
    ctx.fillRect(x, y, barWidth, barHeight);
    
    // Draw label
    ctx.fillStyle = '#333';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(item.label, x + barWidth/2, y - 5);
  });
}`}
            </pre>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>📄 Report Generation</h2>
          <p className={styles.sectionText}>
            Create a comprehensive report generation function:
          </p>
          
          <div className={styles.codeBlock}>
            <pre>
{`// Generate CBAM compliance report
function generateReport(calculationData) {
  const reportId = 'CBAM-' + Date.now();
  const timestamp = new Date().toLocaleString();
  
  const report = {
    id: reportId,
    timestamp: timestamp,
    company: {
      name: document.getElementById('companyName')?.value || 'Your Company',
      address: document.getElementById('companyAddress')?.value || 'Company Address'
    },
    calculation: {
      product: calculationData.product,
      weight: calculationData.weight,
      distance: calculationData.distance,
      productEmissions: calculationData.productEmissions,
      transportEmissions: calculationData.transportEmissions,
      totalEmissions: calculationData.totalEmissions,
      cbamFee: calculationData.cbamFee
    },
    compliance: {
      status: calculationData.totalEmissions > 2.5 ? 'Review Required' : 'Compliant',
      recommendations: getRecommendations(calculationData)
    }
  };
  
  // Save to report history
  saveReportToHistory(report);
  
  return report;
}`}
            </pre>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>💾 Export Functionality</h2>
          <p className={styles.sectionText}>
            Add export options for different formats:
          </p>
          
          <div className={styles.exportOptions}>
            <div className={styles.exportCard}>
              <h3>PDF Export</h3>
              <p>Generate professional PDF reports</p>
              <div className={styles.codeBlock}>
                <pre>
{`// PDF export using browser print
function exportToPDF(report) {
  const printWindow = window.open('', '_blank');
  printWindow.document.write(\`
    <html>
      <head>
        <title>CBAM Compliance Report</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          .header { text-align: center; margin-bottom: 30px; }
          .section { margin: 20px 0; }
          .data-table { width: 100%; border-collapse: collapse; }
          .data-table th, .data-table td { 
            border: 1px solid #ddd; padding: 8px; text-align: left; 
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>CBAM Compliance Report</h1>
          <p>Report ID: \${report.id}</p>
          <p>Date: \${report.timestamp}</p>
        </div>
        \${generateReportHTML(report)}
      </body>
    </html>
  \`);
  
  printWindow.document.close();
  printWindow.print();
}`}
                </pre>
              </div>
            </div>

            <div className={styles.exportCard}>
              <h3>CSV Export</h3>
              <p>Export data for further analysis</p>
              <div className={styles.codeBlock}>
                <pre>
{`// CSV export function
function exportToCSV(report) {
  const csvContent = [
    ['Report ID', report.id],
    ['Date', report.timestamp],
    ['Product', report.calculation.product],
    ['Weight (kg)', report.calculation.weight],
    ['Distance (km)', report.calculation.distance],
    ['Product Emissions', report.calculation.productEmissions],
    ['Transport Emissions', report.calculation.transportEmissions],
    ['Total Emissions', report.calculation.totalEmissions],
    ['CBAM Fee (€)', report.calculation.cbamFee]
  ].map(row => row.join(',')).join('\\n');
  
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = \`cbam-report-\${report.id}.csv\`;
  a.click();
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
        <Link to="/vibe-coding-guide/step4" className={styles.prevButton}>
          ← Back to Data Integration
        </Link>
        <Link to="/vibe-coding-guide/step6" className={styles.nextButton}>
          Continue to Deployment →
        </Link>
      </div>
    </div>
  );
};

export default Step5;