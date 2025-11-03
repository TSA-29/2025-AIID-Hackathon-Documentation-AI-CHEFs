import React from 'react';
import styles from './Team.module.css';

const Team: React.FC = () => {
  return (
    <div className={styles.teamPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Meet Our Team</h1>
          <p className={styles.subtitle}>
            We are <strong>AI CHEF's</strong> — the team behind our innovative hackathon projects
          </p>
          <div style={{ marginTop: 'var(--spacing-xl)' }}>
            <img
              src={import.meta.env.BASE_URL + 'images/TeamPic2.JPG'}
              alt="AI CHEF's team photo"
              style={{ width: '100%', maxWidth: '1000px', height: 'auto', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--color-border)' }}
            />
          </div>
        </div>

        <div className={styles.teamIntro}>
          <h2>About Us</h2>
          <p>
            We are a passionate interdisciplinary team dedicated to driving innovation across multiple domains
            through artificial intelligence and cutting-edge technology. Our team members come from diverse
            professional backgrounds, including computer science, international business, and project management,
            working together to create impactful solutions for education, sustainability, and creative applications.
          </p>
        </div>

        <div className={styles.teamStats}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>3</div>
            <div className={styles.statLabel}>Core Team Members</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>30</div>
            <div className={styles.statLabel}>Days Intensive Development</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>5</div>
            <div className={styles.statLabel}>Different Domains</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>3</div>
            <div className={styles.statLabel}>Innovative Projects</div>
          </div>
        </div>

        <div className={styles.teamGrid}>
          {/* Team Members */}
          <div className={styles.teamMember}>
            <div className={styles.memberAvatar}>
              <img src={import.meta.env.BASE_URL + 'images/profiles/Anna_Profile.png'} alt="Anna Reztsova" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h3 className={styles.memberName}>Anna Reztsova</h3>
            <p className={styles.memberRole}>Arrowista Project Lead</p>
            <p className={styles.memberBio}>
              Leading the Arrowista project with a focus on innovative solutions and creative problem-solving.
              Brings a unique perspective to AI-driven applications and user experience design.
            </p>
            <div className={styles.memberSkills}>
              <span className={styles.skillTag}>Project Leadership</span>
              <span className={styles.skillTag}>Innovation</span>
              <span className={styles.skillTag}>Creative Solutions</span>
            </div>
            <div className={styles.memberContact}>
              <a href="#" className={styles.contactLink} title="WeChat: TSA-29">💬</a>
              <a href="https://github.com/THU-SIGS-AIID/2025-AIID-HACKATHON-PERSONAL-PROJECT-ANNA-REZTSOVA" target="_blank" rel="noopener noreferrer" className={styles.contactLink} title="Arrowista Project">🔗</a>
            </div>
          </div>

          <div className={styles.teamMember}>
            <div className={styles.memberAvatar}>
              <img src={import.meta.env.BASE_URL + 'images/profiles/Taleb_Profile.png'} alt="Taleb Alhajji" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h3 className={styles.memberName}>Taleb Alhajji</h3>
            <p className={styles.memberRole}>Computer Science Specialist - Study Buddy</p>
            <p className={styles.memberBio}>
              Computer science expert leading development of the Study Buddy educational platform.
              Specializes in creating innovative learning technologies and AI-powered educational tools
              that enhance student engagement and academic success.
            </p>
            <div className={styles.memberSkills}>
              <span className={styles.skillTag}>Computer Science</span>
              <span className={styles.skillTag}>Educational Tech</span>
              <span className={styles.skillTag}>AI Development</span>
            </div>
            <div className={styles.memberContact}>
              <a href="#" className={styles.contactLink} title="WeChat: TSA-29">💬</a>
              <a href="https://github.com/TSA-29/2025-AIID-HACKATHON-PERSONAL-PROJECT-Taleb-Alhajji" target="_blank" rel="noopener noreferrer" className={styles.contactLink} title="Study Buddy Project">🔗</a>
            </div>
          </div>

          <div className={styles.teamMember}>
            <div className={styles.memberAvatar}>
              <img src={import.meta.env.BASE_URL + 'images/profiles/Valeria_Profile.png'} alt="Phuong Thao Valeria" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h3 className={styles.memberName}>Phuong Thao Valeria</h3>
            <p className={styles.memberRole}>International Business Specialist - Carbon Compass</p>
            <p className={styles.memberBio}>
              International business professional driving the Carbon Compass sustainability initiative.
              Combines business acumen with environmental consciousness to create impactful solutions
              for carbon tracking and sustainable business practices.
            </p>
            <div className={styles.memberSkills}>
              <span className={styles.skillTag}>International Business</span>
              <span className={styles.skillTag}>Sustainability</span>
              <span className={styles.skillTag}>Carbon Management</span>
            </div>
            <div className={styles.memberContact}>
              <a href="#" className={styles.contactLink} title="WeChat: Valeria_pham">💬</a>
              <a href="https://github.com/PhuongThaoValeria/Carbon-Compass-Hackathon" target="_blank" rel="noopener noreferrer" className={styles.contactLink} title="Carbon Compass Project">🔗</a>
            </div>
          </div>
        </div>

        <div className={styles.teamCulture}>
          <h2>Our Values</h2>
          <div className={styles.cultureValues}>
            <div className={styles.cultureValue}>
              <span className={styles.valueIcon}>🎯</span>
              <h3 className={styles.valueTitle}>Impact-Driven</h3>
              <p className={styles.valueDesc}>
                Focused on solving real problems and creating meaningful change through technology innovation.
              </p>
            </div>
            <div className={styles.cultureValue}>
              <span className={styles.valueIcon}>🤝</span>
              <h3 className={styles.valueTitle}>Collaborative</h3>
              <p className={styles.valueDesc}>
                Cross-disciplinary teamwork leveraging diverse expertise to tackle complex challenges.
              </p>
            </div>
            <div className={styles.cultureValue}>
              <span className={styles.valueIcon}>🚀</span>
              <h3 className={styles.valueTitle}>Innovative</h3>
              <p className={styles.valueDesc}>
                Pushing boundaries and exploring new possibilities at the intersection of AI and real-world applications.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.teamPhotoSection}>
          <h2>Team Moments</h2>
          <div className={styles.photoGallery}>
            <img
              src={import.meta.env.BASE_URL + 'images/TeamPic3.JPG'}
              alt="AI CHEF's team working together"
              className={styles.teamPhoto}
            />
          </div>
        </div>

        <div className={styles.contactSection}>
          <h2>Get In Touch</h2>
          <p>
            Interested in our projects or looking to collaborate? We'd love to hear from you!
          </p>
          <button className={styles.contactButton}>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;