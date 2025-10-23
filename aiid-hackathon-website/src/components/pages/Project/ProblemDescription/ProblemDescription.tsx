import React from 'react';

const ProblemDescription: React.FC = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ 
          fontSize: '3rem', 
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Problem Description
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#666', 
          maxWidth: '600px', 
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Understanding the challenges and opportunities in AI incident detection and documentation.
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <div style={{ 
          background: 'white', 
          padding: '3rem', 
          borderRadius: '12px', 
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
          border: '1px solid #e9ecef',
          marginBottom: '2rem'
        }}>
          <h2 style={{ 
            fontSize: '2rem', 
            marginBottom: '1.5rem',
            color: '#333'
          }}>
            The Challenge
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#666', 
            lineHeight: '1.8',
            marginBottom: '1.5rem'
          }}>
            As artificial intelligence systems become increasingly prevalent in critical applications, 
            the need for comprehensive incident tracking and analysis has become paramount. Current 
            approaches to AI incident documentation are fragmented, inconsistent, and often lack 
            the depth needed for meaningful analysis and prevention.
          </p>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#666', 
            lineHeight: '1.8'
          }}>
            Our research addresses the critical gap in systematic AI incident documentation, 
            providing a framework for better understanding, categorizing, and learning from 
            AI-related incidents across various domains and applications.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '12px', 
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            border: '1px solid #e9ecef'
          }}>
            <h3 style={{ 
              color: '#667eea', 
              marginBottom: '1rem', 
              fontSize: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              🔍 Identification
            </h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Developing automated systems to identify and flag potential AI incidents 
              across different platforms and applications in real-time.
            </p>
          </div>

          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '12px', 
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            border: '1px solid #e9ecef'
          }}>
            <h3 style={{ 
              color: '#667eea', 
              marginBottom: '1rem', 
              fontSize: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              📝 Documentation
            </h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Creating standardized frameworks for documenting AI incidents with 
              comprehensive metadata, context, and impact assessment.
            </p>
          </div>

          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '12px', 
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            border: '1px solid #e9ecef'
          }}>
            <h3 style={{ 
              color: '#667eea', 
              marginBottom: '1rem', 
              fontSize: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              📊 Analysis
            </h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Implementing advanced analytics to identify patterns, trends, and 
              root causes in AI incident data for preventive measures.
            </p>
          </div>
        </div>
      </section>

      <section style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '3rem',
        borderRadius: '12px',
        marginBottom: '3rem'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
          Key Research Questions
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>❓</div>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              How can we automatically detect AI incidents across diverse platforms and applications?
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🎯</div>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              What standardized frameworks are needed for comprehensive incident documentation?
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔬</div>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              How can we leverage incident data to improve AI system safety and reliability?
            </p>
          </div>
        </div>
      </section>

      <section style={{ 
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        padding: '3rem',
        borderRadius: '12px'
      }}>
        <h2 style={{ 
          fontSize: '2rem', 
          marginBottom: '2rem', 
          textAlign: 'center',
          color: '#333'
        }}>
          Expected Impact
        </h2>
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#666',
          lineHeight: '1.8',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          Our research aims to establish a new standard for AI incident management, 
          contributing to safer AI deployment, better regulatory compliance, and 
          enhanced public trust in artificial intelligence systems.
        </p>
      </section>
    </div>
  );
};

export default ProblemDescription;