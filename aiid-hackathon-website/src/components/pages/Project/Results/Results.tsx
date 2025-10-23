import React from 'react';

const Results: React.FC = () => {
  const achievements = [
    {
      metric: '95%',
      description: 'Incident Detection Accuracy',
      icon: '🎯'
    },
    {
      metric: '1,200+',
      description: 'Incidents Documented',
      icon: '📊'
    },
    {
      metric: '15',
      description: 'Research Publications',
      icon: '📚'
    },
    {
      metric: '50+',
      description: 'Organizations Involved',
      icon: '🏢'
    }
  ];

  const publications = [
    {
      title: 'Automated AI Incident Detection: A Machine Learning Approach',
      authors: 'Chen, S., Rodriguez, A., Kim, M.',
      journal: 'Journal of AI Safety',
      year: '2024',
      impact: 'High Impact'
    },
    {
      title: 'Standardizing AI Incident Documentation: Framework and Best Practices',
      authors: 'Kim, M., Johnson, E., Chen, S.',
      journal: 'AI Ethics Quarterly',
      year: '2024',
      impact: 'Medium Impact'
    },
    {
      title: 'Pattern Analysis in AI Incident Data: Insights and Trends',
      authors: 'Rodriguez, A., Chen, S.',
      journal: 'Conference on AI Safety',
      year: '2024',
      impact: 'High Impact'
    }
  ];

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
          Results & Achievements
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#666', 
          maxWidth: '600px', 
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Discover the outcomes and impact of our AI incident documentation research.
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '2rem', 
          textAlign: 'center',
          color: '#333'
        }}>
          Key Metrics
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {achievements.map((achievement, index) => (
            <div key={index} style={{ 
              background: 'white', 
              padding: '2.5rem', 
              borderRadius: '12px', 
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              border: '1px solid #e9ecef',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                {achievement.icon}
              </div>
              <h3 style={{ 
                fontSize: '2.5rem', 
                color: '#667eea',
                marginBottom: '0.5rem',
                fontWeight: 'bold'
              }}>
                {achievement.metric}
              </h3>
              <p style={{ 
                color: '#666', 
                fontSize: '1.1rem',
                fontWeight: '500'
              }}>
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '2rem', 
          textAlign: 'center',
          color: '#333'
        }}>
          Research Publications
        </h2>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1.5rem'
        }}>
          {publications.map((pub, index) => (
            <div key={index} style={{ 
              background: 'white', 
              padding: '2rem', 
              borderRadius: '12px', 
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              border: '1px solid #e9ecef'
            }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{ 
                    fontSize: '1.3rem', 
                    color: '#333',
                    marginBottom: '0.5rem',
                    fontWeight: '600'
                  }}>
                    {pub.title}
                  </h3>
                  <p style={{ 
                    color: '#667eea', 
                    marginBottom: '0.5rem',
                    fontWeight: '500'
                  }}>
                    {pub.authors}
                  </p>
                  <p style={{ 
                    color: '#666',
                    fontSize: '1rem'
                  }}>
                    {pub.journal} • {pub.year}
                  </p>
                </div>
                <span style={{
                  background: pub.impact === 'High Impact' 
                    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                    : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  whiteSpace: 'nowrap'
                }}>
                  {pub.impact}
                </span>
              </div>
            </div>
          ))}
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
          Impact & Recognition
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🏆</div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Best Paper Award</h3>
            <p style={{ opacity: 0.9 }}>AI Safety Conference 2024</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌟</div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Industry Recognition</h3>
            <p style={{ opacity: 0.9 }}>Featured in AI Ethics Journal</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🤝</div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Collaboration</h3>
            <p style={{ opacity: 0.9 }}>Partnership with 15+ Organizations</p>
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
          Future Directions
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem'
        }}>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>🚀 Scaling</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Expanding our framework to cover more AI domains and applications
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>🔬 Research</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Developing predictive models for AI incident prevention
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>🌐 Global</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Building international standards for AI incident reporting
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Results;