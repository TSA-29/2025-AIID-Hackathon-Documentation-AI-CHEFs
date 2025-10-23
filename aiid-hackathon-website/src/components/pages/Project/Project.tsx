import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Project: React.FC = () => {
  const location = useLocation();
  const isProjectRoot = location.pathname === '/project';

  const projectSections = [
    {
      title: 'Problem Description',
      path: '/project/problem-description',
      description: 'Understanding the challenges we aim to solve',
      icon: '🎯'
    },
    {
      title: 'Results',
      path: '/project/results',
      description: 'Outcomes and achievements of our research',
      icon: '📊'
    },
    {
      title: 'Engineering',
      path: '/project/engineering',
      description: 'Technical implementation and architecture',
      icon: '⚙️'
    }
  ];

  if (!isProjectRoot) {
    return <Outlet />;
  }

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
          Our Project
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#666', 
          maxWidth: '600px', 
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Explore the comprehensive details of our AI research initiative, from problem identification to technical implementation.
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '2rem' 
        }}>
          {projectSections.map((section, index) => (
            <Link 
              key={index}
              to={section.path}
              style={{ 
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              <div style={{ 
                background: 'white', 
                padding: '2.5rem', 
                borderRadius: '12px', 
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                border: '1px solid #e9ecef',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                height: '100%'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
              }}
              >
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem'
                }}>
                  {section.icon}
                </div>
                <h3 style={{ 
                  color: '#667eea', 
                  marginBottom: '1rem', 
                  fontSize: '1.5rem',
                  fontWeight: '600'
                }}>
                  {section.title}
                </h3>
                <p style={{ 
                  color: '#666', 
                  lineHeight: '1.6',
                  fontSize: '1.1rem'
                }}>
                  {section.description}
                </p>
                <div style={{
                  marginTop: '1.5rem',
                  color: '#667eea',
                  fontWeight: '600'
                }}>
                  Learn More →
                </div>
              </div>
            </Link>
          ))}
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
          Project Overview
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem',
          textAlign: 'center'
        }}>
          <div>
            <h3 style={{ color: '#667eea', fontSize: '2.5rem', marginBottom: '0.5rem' }}>18</h3>
            <p style={{ color: '#666', fontSize: '1.1rem' }}>Months of Research</p>
          </div>
          <div>
            <h3 style={{ color: '#667eea', fontSize: '2.5rem', marginBottom: '0.5rem' }}>4</h3>
            <p style={{ color: '#666', fontSize: '1.1rem' }}>Team Members</p>
          </div>
          <div>
            <h3 style={{ color: '#667eea', fontSize: '2.5rem', marginBottom: '0.5rem' }}>12</h3>
            <p style={{ color: '#666', fontSize: '1.1rem' }}>Publications</p>
          </div>
          <div>
            <h3 style={{ color: '#667eea', fontSize: '2.5rem', marginBottom: '0.5rem' }}>95%</h3>
            <p style={{ color: '#666', fontSize: '1.1rem' }}>Accuracy Achieved</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;