import React from 'react';

const Home: React.FC = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
      <section style={{ 
        textAlign: 'center', 
        padding: '4rem 0',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        borderRadius: '12px',
        marginBottom: '3rem'
      }}>
        <h1 style={{ 
          fontSize: '3.5rem', 
          fontWeight: 'bold', 
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Welcome to AIID Hackathon 2025
        </h1>
        <p style={{ 
          fontSize: '1.3rem', 
          color: '#666', 
          maxWidth: '600px', 
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Innovating the future of AI through collaborative development and cutting-edge research.
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '2rem', 
          textAlign: 'center',
          color: '#333'
        }}>
          About Our Project
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '12px', 
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            border: '1px solid #e9ecef'
          }}>
            <h3 style={{ color: '#667eea', marginBottom: '1rem', fontSize: '1.5rem' }}>🎯 Mission</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              To advance artificial intelligence research through collaborative innovation and 
              practical implementation of cutting-edge solutions.
            </p>
          </div>
          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '12px', 
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            border: '1px solid #e9ecef'
          }}>
            <h3 style={{ color: '#667eea', marginBottom: '1rem', fontSize: '1.5rem' }}>🚀 Vision</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Creating a future where AI technologies are accessible, ethical, and beneficial 
              for all members of society.
            </p>
          </div>
          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '12px', 
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            border: '1px solid #e9ecef'
          }}>
            <h3 style={{ color: '#667eea', marginBottom: '1rem', fontSize: '1.5rem' }}>💡 Innovation</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Pushing the boundaries of what's possible through creative problem-solving 
              and interdisciplinary collaboration.
            </p>
          </div>
        </div>
      </section>

      <section style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '3rem',
        borderRadius: '12px',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Join Our Journey</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>
          Explore our team, discover our projects, and learn about our innovative experiments 
          in artificial intelligence and machine learning.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button style={{
            background: 'rgba(255,255,255,0.2)',
            border: '2px solid white',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'all 0.3s ease'
          }}>
            Learn More
          </button>
          <button style={{
            background: 'white',
            border: '2px solid white',
            color: '#667eea',
            padding: '0.75rem 1.5rem',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'all 0.3s ease'
          }}>
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;