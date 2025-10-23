import React from 'react';

const Experiments: React.FC = () => {
  const experiments = [
    {
      title: 'Automated Incident Classification',
      status: 'Completed',
      duration: '6 months',
      description: 'Developed machine learning models to automatically classify AI incidents by type, severity, and domain.',
      results: 'Achieved 92% accuracy in incident classification across 15 different categories.',
      methodology: 'Used ensemble methods combining NLP and traditional ML approaches.',
      icon: '🤖'
    },
    {
      title: 'Real-time Incident Detection',
      status: 'In Progress',
      duration: '4 months',
      description: 'Building a system for real-time detection of AI incidents across social media and news platforms.',
      results: 'Currently processing 10M+ posts daily with 85% precision.',
      methodology: 'Streaming data processing with Apache Kafka and real-time ML inference.',
      icon: '⚡'
    },
    {
      title: 'Incident Impact Assessment',
      status: 'Planning',
      duration: '8 months',
      description: 'Developing frameworks to assess the societal and economic impact of AI incidents.',
      results: 'Framework design completed, beginning data collection phase.',
      methodology: 'Multi-dimensional impact scoring using economic and social indicators.',
      icon: '📊'
    }
  ];

  const datasets = [
    {
      name: 'AIID Core Dataset',
      size: '2,500+ incidents',
      description: 'Comprehensive collection of documented AI incidents from 2015-2024',
      access: 'Public'
    },
    {
      name: 'Social Media Incident Corpus',
      size: '50,000+ posts',
      description: 'Curated social media posts discussing AI-related incidents',
      access: 'Research Only'
    },
    {
      name: 'News Article Database',
      size: '15,000+ articles',
      description: 'News articles covering AI incidents from major publications',
      access: 'Public'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return '#28a745';
      case 'In Progress':
        return '#ffc107';
      case 'Planning':
        return '#6c757d';
      default:
        return '#667eea';
    }
  };

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
          Experiments & Research
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#666', 
          maxWidth: '600px', 
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Explore our ongoing research experiments and methodological approaches to AI incident analysis.
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '2rem', 
          textAlign: 'center',
          color: '#333'
        }}>
          Active Experiments
        </h2>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '2rem'
        }}>
          {experiments.map((experiment, index) => (
            <div key={index} style={{ 
              background: 'white', 
              padding: '2.5rem', 
              borderRadius: '12px', 
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              border: '1px solid #e9ecef'
            }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'flex-start',
                marginBottom: '1.5rem',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ fontSize: '2.5rem' }}>{experiment.icon}</span>
                  <div>
                    <h3 style={{ 
                      fontSize: '1.5rem', 
                      color: '#333',
                      marginBottom: '0.5rem',
                      fontWeight: '600'
                    }}>
                      {experiment.title}
                    </h3>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <span style={{
                        background: getStatusColor(experiment.status),
                        color: 'white',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '15px',
                        fontSize: '0.85rem',
                        fontWeight: '500'
                      }}>
                        {experiment.status}
                      </span>
                      <span style={{ color: '#666', fontSize: '0.9rem' }}>
                        Duration: {experiment.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '2rem'
              }}>
                <div>
                  <h4 style={{ 
                    color: '#667eea', 
                    marginBottom: '0.75rem',
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}>
                    Description
                  </h4>
                  <p style={{ 
                    color: '#666', 
                    lineHeight: '1.6',
                    fontSize: '1rem'
                  }}>
                    {experiment.description}
                  </p>
                </div>
                
                <div>
                  <h4 style={{ 
                    color: '#667eea', 
                    marginBottom: '0.75rem',
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}>
                    Results
                  </h4>
                  <p style={{ 
                    color: '#666', 
                    lineHeight: '1.6',
                    fontSize: '1rem'
                  }}>
                    {experiment.results}
                  </p>
                </div>
                
                <div style={{ gridColumn: 'span 2' }}>
                  <h4 style={{ 
                    color: '#667eea', 
                    marginBottom: '0.75rem',
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}>
                    Methodology
                  </h4>
                  <p style={{ 
                    color: '#666', 
                    lineHeight: '1.6',
                    fontSize: '1rem'
                  }}>
                    {experiment.methodology}
                  </p>
                </div>
              </div>
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
          Research Datasets
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem'
        }}>
          {datasets.map((dataset, index) => (
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
                marginBottom: '1rem'
              }}>
                <h3 style={{ 
                  fontSize: '1.3rem', 
                  color: '#333',
                  fontWeight: '600'
                }}>
                  {dataset.name}
                </h3>
                <span style={{
                  background: dataset.access === 'Public' 
                    ? 'linear-gradient(135deg, #28a745 0%, #20c997 100%)' 
                    : 'linear-gradient(135deg, #ffc107 0%, #fd7e14 100%)',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '15px',
                  fontSize: '0.8rem',
                  fontWeight: '500'
                }}>
                  {dataset.access}
                </span>
              </div>
              
              <p style={{ 
                color: '#667eea', 
                fontWeight: '600',
                marginBottom: '1rem',
                fontSize: '1.1rem'
              }}>
                {dataset.size}
              </p>
              
              <p style={{ 
                color: '#666', 
                lineHeight: '1.6'
              }}>
                {dataset.description}
              </p>
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
          Research Methodology
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔬</div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Empirical Analysis</h3>
            <p style={{ opacity: 0.9, lineHeight: '1.6' }}>
              Data-driven approaches using statistical analysis and machine learning
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📋</div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Systematic Review</h3>
            <p style={{ opacity: 0.9, lineHeight: '1.6' }}>
              Comprehensive literature review and meta-analysis of existing research
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🤝</div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Collaborative Research</h3>
            <p style={{ opacity: 0.9, lineHeight: '1.6' }}>
              Cross-institutional partnerships and expert validation
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
          Get Involved
        </h2>
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#666',
          lineHeight: '1.8',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto 2rem'
        }}>
          Interested in contributing to our research? We welcome collaborations from 
          researchers, practitioners, and organizations working in AI safety and ethics.
        </p>
        <div style={{ textAlign: 'center' }}>
          <button style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            border: 'none',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '1.1rem',
            fontWeight: '600',
            transition: 'transform 0.3s ease'
          }}>
            Contact Research Team
          </button>
        </div>
      </section>
    </div>
  );
};

export default Experiments;