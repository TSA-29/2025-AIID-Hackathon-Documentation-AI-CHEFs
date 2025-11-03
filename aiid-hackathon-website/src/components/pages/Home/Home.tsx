import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="container">
      <section className="text-center" style={{
        padding: 'var(--spacing-xxl) 0',
        marginBottom: 'var(--spacing-xxl)'
      }}>
        <h1 className="heroTitle" style={{
          marginBottom: 'var(--spacing-lg)',
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 'var(--font-weight-bold)',
          letterSpacing: '-0.02em'
        }}>
          Welcome to AI CHEF's👨‍🍳<br />AIID Hackathon
        </h1>
        <div style={{
          marginTop: 'var(--spacing-xl)'
        }}>
          <video
            src={import.meta.env.BASE_URL + 'videos/MainPage.mp4'}
            style={{ width: '100%', maxWidth: '960px', height: 'auto', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--color-border)' }}
            controls
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </section>

      <section style={{ marginBottom: 'var(--spacing-xxl)' }}>
        <h2 className="text-center" style={{
          marginBottom: 'var(--spacing-xl)',
          fontSize: '2.5rem',
          fontWeight: 'var(--font-weight-semibold)',
          letterSpacing: '-0.01em'
        }}>
          Our Projects
        </h2>
        <div className="grid grid-cols-auto" style={{ gap: 'var(--spacing-lg)' }}>
          <div className="card" style={{ background: 'var(--gradient-bg)' }}>
            <h3 style={{
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--spacing-md)',
              fontSize: '1.5rem',
              fontWeight: 'var(--font-weight-semibold)'
            }}>
              🎨 Arrowista
            </h3>
            <p style={{
              color: 'var(--color-text-primary)',
              lineHeight: '1.7',
              marginBottom: 0
            }}>
              AI-powered content generator creating stunning images, text, and videos with comprehensive security features.
            </p>
          </div>
          <div className="card" style={{ background: 'var(--gradient-bg)' }}>
            <h3 style={{
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--spacing-md)',
              fontSize: '1.5rem',
              fontWeight: 'var(--font-weight-semibold)'
            }}>
              🌍 Carbon Compass
            </h3>
            <p style={{
              color: 'var(--color-text-primary)',
              lineHeight: '1.7',
              marginBottom: 0
            }}>
              AI-powered platform helping SMEs accurately estimate carbon emissions and comply with regulations.
            </p>
          </div>
          <div className="card" style={{ background: 'var(--gradient-bg)' }}>
            <h3 style={{
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--spacing-md)',
              fontSize: '1.5rem',
              fontWeight: 'var(--font-weight-semibold)'
            }}>
              📚 StudyBuddy
            </h3>
            <p style={{
              color: 'var(--color-text-primary)',
              lineHeight: '1.7',
              marginBottom: 0
            }}>
              AI-powered interactive learning platform creating personalized educational experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="card text-center" style={{
        background: 'var(--gradient-bg)',
        border: '1px solid var(--color-border)',
        padding: 'var(--spacing-xxl)'
      }}>
        <h2 style={{
          fontSize: '2rem',
          marginBottom: 'var(--spacing-lg)',
          fontWeight: 'var(--font-weight-semibold)'
        }}>
          Explore Our Work
        </h2>
        <p style={{
          fontSize: '1.1rem',
          marginBottom: 'var(--spacing-xl)',
          color: 'var(--color-text-secondary)',
          maxWidth: '500px',
          margin: '0 auto var(--spacing-xl)'
        }}>
          Discover our innovative AI solutions across content creation, sustainability, and education.
        </p>
        <div className="flex flex-center gap-md" style={{ flexWrap: 'wrap' }}>
          <button className="button-secondary">
            View Projects
          </button>
          <button>
            Meet Our Team
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;