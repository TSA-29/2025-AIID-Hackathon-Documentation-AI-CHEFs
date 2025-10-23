import React from 'react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Project Lead & AI Researcher',
      bio: 'PhD in Machine Learning with 10+ years of experience in neural networks and deep learning.',
      email: 'sarah.chen@aiid-hackathon.org',
      expertise: ['Deep Learning', 'Neural Networks', 'Computer Vision']
    },
    {
      name: 'Alex Rodriguez',
      role: 'Full-Stack Developer',
      bio: 'Experienced developer specializing in React, Node.js, and cloud infrastructure.',
      email: 'alex.rodriguez@aiid-hackathon.org',
      expertise: ['React', 'Node.js', 'AWS', 'TypeScript']
    },
    {
      name: 'Dr. Michael Kim',
      role: 'Data Scientist',
      bio: 'Expert in statistical analysis, data mining, and predictive modeling.',
      email: 'michael.kim@aiid-hackathon.org',
      expertise: ['Data Analysis', 'Python', 'Machine Learning', 'Statistics']
    },
    {
      name: 'Emily Johnson',
      role: 'UX/UI Designer',
      bio: 'Creative designer focused on user-centered design and accessibility.',
      email: 'emily.johnson@aiid-hackathon.org',
      expertise: ['UI/UX Design', 'Figma', 'User Research', 'Accessibility']
    }
  ];

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
          Our Team
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#666', 
          maxWidth: '600px', 
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Meet the talented individuals driving innovation in AI research and development.
        </p>
      </section>

      <section style={{ padding: '0 20px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {teamMembers.map((member, index) => (
            <div key={index} style={{ 
              background: 'white', 
              padding: '2rem', 
              borderRadius: '12px', 
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              border: '1px solid #e9ecef',
              textAlign: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                margin: '0 auto 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                color: 'white',
                fontWeight: 'bold'
              }}>
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              
              <h3 style={{ 
                fontSize: '1.5rem', 
                marginBottom: '0.5rem',
                color: '#333'
              }}>
                {member.name}
              </h3>
              
              <p style={{ 
                color: '#667eea', 
                fontWeight: '600',
                marginBottom: '1rem',
                fontSize: '1.1rem'
              }}>
                {member.role}
              </p>
              
              <p style={{ 
                color: '#666', 
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}>
                {member.bio}
              </p>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ 
                  color: '#333', 
                  fontWeight: '600',
                  marginBottom: '0.5rem'
                }}>
                  Expertise:
                </p>
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '0.5rem',
                  justifyContent: 'center'
                }}>
                  {member.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '15px',
                      fontSize: '0.85rem',
                      fontWeight: '500'
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <a 
                href={`mailto:${member.email}`}
                style={{
                  color: '#667eea',
                  textDecoration: 'none',
                  fontWeight: '500',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                ✉️ {member.email}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section style={{ 
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        padding: '3rem 20px',
        textAlign: 'center',
        marginTop: 'auto' /* Push to bottom */
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#333' }}>
          Join Our Team
        </h2>
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#666',
          marginBottom: '2rem',
          maxWidth: '600px',
          margin: '0 auto 2rem'
        }}>
          We're always looking for talented individuals to join our mission. 
          If you're passionate about AI and innovation, we'd love to hear from you.
        </p>
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
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default Team;