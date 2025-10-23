import React from 'react';

const Engineering: React.FC = () => {
  const techStack = [
    {
      category: 'Frontend',
      technologies: ['React 18', 'TypeScript', 'Vite', 'CSS Modules'],
      icon: '🎨'
    },
    {
      category: 'Backend',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'Redis'],
      icon: '⚙️'
    },
    {
      category: 'AI/ML',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'scikit-learn'],
      icon: '🤖'
    },
    {
      category: 'Infrastructure',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions'],
      icon: '☁️'
    }
  ];

  const architectureComponents = [
    {
      name: 'Data Ingestion Layer',
      description: 'Collects and processes AI incident data from multiple sources',
      technologies: ['Apache Kafka', 'Apache Spark', 'REST APIs']
    },
    {
      name: 'ML Processing Engine',
      description: 'Analyzes incidents using machine learning algorithms',
      technologies: ['TensorFlow Serving', 'MLflow', 'Apache Airflow']
    },
    {
      name: 'Documentation System',
      description: 'Standardized framework for incident documentation',
      technologies: ['PostgreSQL', 'Elasticsearch', 'GraphQL']
    },
    {
      name: 'Analytics Dashboard',
      description: 'Real-time visualization and reporting interface',
      technologies: ['React', 'D3.js', 'WebSocket']
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
          Engineering & Architecture
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#666', 
          maxWidth: '600px', 
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Explore the technical implementation and system architecture behind our AI incident documentation platform.
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '2rem', 
          textAlign: 'center',
          color: '#333'
        }}>
          Technology Stack
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {techStack.map((stack, index) => (
            <div key={index} style={{ 
              background: 'white', 
              padding: '2rem', 
              borderRadius: '12px', 
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              border: '1px solid #e9ecef'
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.75rem',
                marginBottom: '1.5rem'
              }}>
                <span style={{ fontSize: '2rem' }}>{stack.icon}</span>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  color: '#667eea',
                  margin: 0
                }}>
                  {stack.category}
                </h3>
              </div>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.5rem'
              }}>
                {stack.technologies.map((tech, techIndex) => (
                  <span key={techIndex} style={{
                    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                    color: '#333',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    {tech}
                  </span>
                ))}
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
          System Architecture
        </h2>
        <div style={{ 
          background: 'white', 
          padding: '3rem', 
          borderRadius: '12px', 
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
          border: '1px solid #e9ecef',
          marginBottom: '2rem'
        }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem'
          }}>
            {architectureComponents.map((component, index) => (
              <div key={index} style={{ 
                padding: '1.5rem',
                border: '2px solid #e9ecef',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <h4 style={{ 
                  color: '#667eea', 
                  marginBottom: '1rem',
                  fontSize: '1.2rem',
                  fontWeight: '600'
                }}>
                  {component.name}
                </h4>
                <p style={{ 
                  color: '#666', 
                  marginBottom: '1rem',
                  fontSize: '0.95rem',
                  lineHeight: '1.5'
                }}>
                  {component.description}
                </p>
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '0.25rem',
                  justifyContent: 'center'
                }}>
                  {component.technologies.map((tech, techIndex) => (
                    <span key={techIndex} style={{
                      background: '#667eea',
                      color: 'white',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '12px',
                      fontSize: '0.8rem',
                      fontWeight: '500'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
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
          Key Features
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem'
        }}>
          <div>
            <h3 style={{ 
              fontSize: '1.3rem', 
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              🔄 Real-time Processing
            </h3>
            <p style={{ opacity: 0.9, lineHeight: '1.6' }}>
              Stream processing capabilities for immediate incident detection and analysis
            </p>
          </div>
          <div>
            <h3 style={{ 
              fontSize: '1.3rem', 
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              📈 Scalable Architecture
            </h3>
            <p style={{ opacity: 0.9, lineHeight: '1.6' }}>
              Microservices-based design supporting horizontal scaling and high availability
            </p>
          </div>
          <div>
            <h3 style={{ 
              fontSize: '1.3rem', 
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              🔒 Security First
            </h3>
            <p style={{ opacity: 0.9, lineHeight: '1.6' }}>
              End-to-end encryption, secure APIs, and compliance with data protection standards
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
          Development Workflow
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '1.5rem'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              background: '#667eea',
              color: 'white',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
              fontSize: '1.5rem'
            }}>
              1
            </div>
            <h4 style={{ color: '#333', marginBottom: '0.5rem' }}>Development</h4>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Git workflow with feature branches</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              background: '#667eea',
              color: 'white',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
              fontSize: '1.5rem'
            }}>
              2
            </div>
            <h4 style={{ color: '#333', marginBottom: '0.5rem' }}>Testing</h4>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Automated unit and integration tests</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              background: '#667eea',
              color: 'white',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
              fontSize: '1.5rem'
            }}>
              3
            </div>
            <h4 style={{ color: '#333', marginBottom: '0.5rem' }}>CI/CD</h4>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>GitHub Actions for deployment</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              background: '#667eea',
              color: 'white',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
              fontSize: '1.5rem'
            }}>
              4
            </div>
            <h4 style={{ color: '#333', marginBottom: '0.5rem' }}>Monitoring</h4>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Real-time system monitoring</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Engineering;