import React from 'react';

const Experiments: React.FC = () => {
  return (
    <div className="experiments-page">
      <div className="container">
        <h1>Experiments & Research</h1>
        <p>Explore our innovative experiments and cutting-edge research initiatives</p>

        <div className="experiments-content">
          <section className="experiment-section">
            <h2>Active Experiments</h2>
            <div className="experiment-grid">
              <div className="experiment-card">
                <h3>AI-Powered Data Classification</h3>
                <p className="experiment-status">🟢 Active</p>
                <p>Exploring machine learning models for automatic data categorization and tagging.</p>
                <div className="experiment-progress">
                  <div className="progress-bar">
                    <div className="progress" style={{width: '65%'}}></div>
                  </div>
                  <span>65% Complete</span>
                </div>
              </div>

              <div className="experiment-card">
                <h3>Real-time Stream Processing</h3>
                <p className="experiment-status">🟢 Active</p>
                <p>Testing high-throughput data streaming capabilities with sub-second latency.</p>
                <div className="experiment-progress">
                  <div className="progress-bar">
                    <div className="progress" style={{width: '40%'}}></div>
                  </div>
                  <span>40% Complete</span>
                </div>
              </div>

              <div className="experiment-card">
                <h3>Natural Language Query Interface</h3>
                <p className="experiment-status">🟡 Testing</p>
                <p>Developing conversational interface for data exploration using advanced NLP.</p>
                <div className="experiment-progress">
                  <div className="progress-bar">
                    <div className="progress" style={{width: '25%'}}></div>
                  </div>
                  <span>25% Complete</span>
                </div>
              </div>
            </div>
          </section>

          <section className="experiment-section">
            <h2>Completed Research</h2>
            <div className="completed-experiments">
              <div className="completed-item">
                <h3>Blockchain-based Data Integrity</h3>
                <p className="experiment-status">✅ Completed</p>
                <p>Successfully implemented immutable audit trails for sensitive data operations.</p>
                <a href="#" className="result-link">View Results →</a>
              </div>

              <div className="completed-item">
                <h3>Quantum-Resistant Encryption</h3>
                <p className="experiment-status">✅ Completed</p>
                <p>Validated post-quantum cryptographic algorithms for future-proof security.</p>
                <a href="#" className="result-link">View Results →</a>
              </div>
            </div>
          </section>

          <section className="experiment-section">
            <h2>Research Methodology</h2>
            <div className="methodology">
              <div className="method-step">
                <h3>1. Hypothesis Formation</h3>
                <p>Define clear research questions and testable hypotheses based on identified problems.</p>
              </div>
              <div className="method-step">
                <h3>2. Experimental Design</h3>
                <p>Create controlled experiments with proper variables, metrics, and success criteria.</p>
              </div>
              <div className="method-step">
                <h3>3. Data Collection</h3>
                <p>Gather comprehensive data while ensuring validity and reliability of measurements.</p>
              </div>
              <div className="method-step">
                <h3>4. Analysis & Insights</h3>
                <p>Analyze results using statistical methods and extract actionable insights.</p>
              </div>
            </div>
          </section>

          <section className="experiment-section">
            <h2>Join Our Research</h2>
            <div className="research-cta">
              <p>We're always looking for collaborators and contributors to our experimental projects.</p>
              <button className="cta-button">Get Involved</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Experiments;
