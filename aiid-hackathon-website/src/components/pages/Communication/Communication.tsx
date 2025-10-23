import React, { useState } from 'react';

const Communication: React.FC = () => {
  const [activeTab, setActiveTab] = useState('updates');

  const updates = [
    {
      date: '2024-01-15',
      title: 'New Research Paper Published',
      category: 'Publication',
      content: 'Our latest research on "Automated AI Incident Classification" has been accepted at the International Conference on AI Safety.',
      author: 'Dr. Sarah Chen',
      tags: ['Research', 'Publication', 'AI Safety']
    },
    {
      date: '2024-01-10',
      title: 'Database Milestone Reached',
      category: 'Achievement',
      content: 'We have successfully documented over 2,500 AI incidents in our database, making it one of the most comprehensive collections available.',
      author: 'Research Team',
      tags: ['Database', 'Milestone', 'Data']
    },
    {
      date: '2024-01-05',
      title: 'Partnership with Tech Industry',
      category: 'Partnership',
      content: 'Announced new collaboration with leading tech companies to improve real-time incident detection and reporting mechanisms.',
      author: 'Partnership Team',
      tags: ['Partnership', 'Industry', 'Collaboration']
    }
  ];

  const events = [
    {
      date: '2024-02-15',
      time: '14:00 UTC',
      title: 'Monthly Research Webinar',
      type: 'Webinar',
      description: 'Join us for our monthly webinar discussing recent findings and upcoming research directions.',
      registration: 'Open'
    },
    {
      date: '2024-02-20',
      time: '10:00 UTC',
      title: 'AI Safety Workshop',
      type: 'Workshop',
      description: 'Hands-on workshop covering best practices for AI incident documentation and analysis.',
      registration: 'Limited'
    },
    {
      date: '2024-03-01',
      time: '16:00 UTC',
      title: 'Community Feedback Session',
      type: 'Community',
      description: 'Open forum for community members to share feedback and suggestions for platform improvements.',
      registration: 'Open'
    }
  ];

  const publications = [
    {
      title: 'Automated Classification of AI Incidents: A Machine Learning Approach',
      authors: 'Chen, S., Johnson, M., Williams, R.',
      journal: 'Journal of AI Safety Research',
      year: '2024',
      doi: '10.1000/aisr.2024.001',
      abstract: 'This paper presents a novel approach to automatically classify AI incidents using machine learning techniques...'
    },
    {
      title: 'Real-time Detection of AI-related Incidents in Social Media',
      authors: 'Williams, R., Chen, S., Davis, L.',
      journal: 'International Conference on AI Ethics',
      year: '2023',
      doi: '10.1000/aie.2023.045',
      abstract: 'We propose a real-time system for detecting discussions of AI incidents across social media platforms...'
    },
    {
      title: 'The Economic Impact of AI Incidents: A Comprehensive Analysis',
      authors: 'Johnson, M., Brown, K., Chen, S.',
      journal: 'AI Economics Quarterly',
      year: '2023',
      doi: '10.1000/aeq.2023.012',
      abstract: 'This study examines the economic implications of AI incidents across various industries and sectors...'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Publication':
        return '#28a745';
      case 'Achievement':
        return '#ffc107';
      case 'Partnership':
        return '#667eea';
      default:
        return '#6c757d';
    }
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Webinar':
        return '#667eea';
      case 'Workshop':
        return '#28a745';
      case 'Community':
        return '#fd7e14';
      default:
        return '#6c757d';
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
          Communication & Outreach
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#666', 
          maxWidth: '600px', 
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Stay connected with our latest updates, events, and research publications.
        </p>
      </section>

      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        marginBottom: '3rem',
        borderBottom: '1px solid #e9ecef'
      }}>
        {[
          { id: 'updates', label: 'Latest Updates', icon: '📢' },
          { id: 'events', label: 'Events', icon: '📅' },
          { id: 'publications', label: 'Publications', icon: '📚' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              background: 'none',
              border: 'none',
              padding: '1rem 2rem',
              cursor: 'pointer',
              fontSize: '1.1rem',
              fontWeight: '600',
              color: activeTab === tab.id ? '#667eea' : '#666',
              borderBottom: activeTab === tab.id ? '3px solid #667eea' : '3px solid transparent',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <span>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'updates' && (
        <section>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '2rem'
          }}>
            {updates.map((update, index) => (
              <article key={index} style={{ 
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
                  <div>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '1rem',
                      marginBottom: '0.5rem'
                    }}>
                      <span style={{
                        background: getCategoryColor(update.category),
                        color: 'white',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '15px',
                        fontSize: '0.85rem',
                        fontWeight: '500'
                      }}>
                        {update.category}
                      </span>
                      <span style={{ color: '#666', fontSize: '0.9rem' }}>
                        {new Date(update.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 style={{ 
                      fontSize: '1.5rem', 
                      color: '#333',
                      marginBottom: '0.5rem',
                      fontWeight: '600'
                    }}>
                      {update.title}
                    </h3>
                    <p style={{ color: '#666', fontSize: '0.9rem' }}>
                      By {update.author}
                    </p>
                  </div>
                </div>
                
                <p style={{ 
                  color: '#666', 
                  lineHeight: '1.6',
                  fontSize: '1rem',
                  marginBottom: '1.5rem'
                }}>
                  {update.content}
                </p>
                
                <div style={{ 
                  display: 'flex', 
                  gap: '0.5rem',
                  flexWrap: 'wrap'
                }}>
                  {update.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} style={{
                      background: '#f8f9fa',
                      color: '#667eea',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '15px',
                      fontSize: '0.8rem',
                      border: '1px solid #e9ecef'
                    }}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {activeTab === 'events' && (
        <section>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '2rem'
          }}>
            {events.map((event, index) => (
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
                  marginBottom: '1.5rem'
                }}>
                  <span style={{
                    background: getEventTypeColor(event.type),
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '15px',
                    fontSize: '0.85rem',
                    fontWeight: '500'
                  }}>
                    {event.type}
                  </span>
                  <span style={{
                    background: event.registration === 'Open' 
                      ? 'linear-gradient(135deg, #28a745 0%, #20c997 100%)' 
                      : 'linear-gradient(135deg, #ffc107 0%, #fd7e14 100%)',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '15px',
                    fontSize: '0.8rem',
                    fontWeight: '500'
                  }}>
                    {event.registration}
                  </span>
                </div>
                
                <h3 style={{ 
                  fontSize: '1.3rem', 
                  color: '#333',
                  marginBottom: '1rem',
                  fontWeight: '600'
                }}>
                  {event.title}
                </h3>
                
                <div style={{ 
                  display: 'flex', 
                  gap: '1rem',
                  marginBottom: '1.5rem',
                  color: '#667eea',
                  fontWeight: '600'
                }}>
                  <span>📅 {new Date(event.date).toLocaleDateString()}</span>
                  <span>🕐 {event.time}</span>
                </div>
                
                <p style={{ 
                  color: '#666', 
                  lineHeight: '1.6',
                  marginBottom: '2rem'
                }}>
                  {event.description}
                </p>
                
                <button style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  border: 'none',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '600',
                  width: '100%',
                  transition: 'transform 0.3s ease'
                }}>
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === 'publications' && (
        <section>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '2rem'
          }}>
            {publications.map((publication, index) => (
              <article key={index} style={{ 
                background: 'white', 
                padding: '2.5rem', 
                borderRadius: '12px', 
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                border: '1px solid #e9ecef'
              }}>
                <h3 style={{ 
                  fontSize: '1.4rem', 
                  color: '#333',
                  marginBottom: '1rem',
                  fontWeight: '600',
                  lineHeight: '1.4'
                }}>
                  {publication.title}
                </h3>
                
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginBottom: '1.5rem',
                  color: '#666'
                }}>
                  <span><strong>Authors:</strong> {publication.authors}</span>
                  <span><strong>Journal:</strong> {publication.journal}</span>
                  <span><strong>Year:</strong> {publication.year}</span>
                </div>
                
                <p style={{ 
                  color: '#666', 
                  lineHeight: '1.6',
                  marginBottom: '1.5rem',
                  fontStyle: 'italic'
                }}>
                  {publication.abstract}
                </p>
                
                <div style={{ 
                  display: 'flex', 
                  gap: '1rem',
                  alignItems: 'center'
                }}>
                  <span style={{ 
                    color: '#667eea',
                    fontWeight: '600',
                    fontSize: '0.9rem'
                  }}>
                    DOI: {publication.doi}
                  </span>
                  <button style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    border: 'none',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}>
                    View Full Paper
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <section style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '3rem',
        borderRadius: '12px',
        marginTop: '3rem'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
          Stay Connected
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '2rem',
          textAlign: 'center'
        }}>
          <div>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📧</div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Newsletter</h3>
            <p style={{ opacity: 0.9, fontSize: '0.9rem' }}>
              Monthly updates on research progress
            </p>
          </div>
          <div>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🐦</div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Twitter</h3>
            <p style={{ opacity: 0.9, fontSize: '0.9rem' }}>
              Real-time updates and discussions
            </p>
          </div>
          <div>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💬</div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Discord</h3>
            <p style={{ opacity: 0.9, fontSize: '0.9rem' }}>
              Join our community discussions
            </p>
          </div>
          <div>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📺</div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>YouTube</h3>
            <p style={{ opacity: 0.9, fontSize: '0.9rem' }}>
              Webinars and educational content
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Communication;