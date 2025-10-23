import React from 'react';

const Name1: React.FC = () => {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <section style={{ textAlign: 'center', padding: '3rem 20px' }}>
        <h1 style={{ 
          fontSize: '3rem', 
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          NAME1 Profile
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#666', 
          maxWidth: '600px', 
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Overview and links to PROJECT, EXPERIMENTS, and COMMUNICATION.
        </p>
      </section>
    </div>
  );
};

export default Name1;