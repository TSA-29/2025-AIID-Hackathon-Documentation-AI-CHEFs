import React from 'react';
import styles from './Team.module.css';

const Team: React.FC = () => {
  return (
    <div className={styles.teamPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Meet Our Team</h1>
          <p className={styles.subtitle}>
            Meet the talented individuals behind our innovative hackathon projects
          </p>
        </div>

        <div className={styles.teamIntro}>
          <h2>About Us</h2>
          <p>
            We are a passionate interdisciplinary team dedicated to driving innovation across multiple domains
            through artificial intelligence and cutting-edge technology. Our team members come from diverse
            professional backgrounds, including AI engineers, healthcare experts, agricultural specialists,
            educators, and software developers, working together to create impactful solutions.
          </p>
        </div>

        <div className={styles.teamStats}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>15</div>
            <div className={styles.statLabel}>Core Team Members</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>48</div>
            <div className={styles.statLabel}>Hours Intensive Development</div>
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
          <div className={styles.teamMember}>
            <div className={styles.memberAvatar}>
              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                color: 'white'
              }}>
                👨‍💻
              </div>
            </div>
            <h3 className={styles.memberName}>Alex Chen</h3>
            <p className={styles.memberRole}>AI Lead Engineer</p>
            <p className={styles.memberBio}>
              Specializing in deep learning and computer vision with extensive experience in medical imaging analysis.
              Leads core algorithm development and model optimization across all projects.
            </p>
            <div className={styles.memberSkills}>
              <span className={styles.skillTag}>PyTorch</span>
              <span className={styles.skillTag}>CNN</span>
              <span className={styles.skillTag}>Medical AI</span>
            </div>
            <div className={styles.memberContact}>
              <a href="#" className={styles.contactLink}>📧</a>
              <a href="#" className={styles.contactLink}>💼</a>
              <a href="#" className={styles.contactLink}>🔗</a>
            </div>
          </div>

          <div className={styles.teamMember}>
            <div className={styles.memberAvatar}>
              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                color: 'white'
              }}>
                👩‍🔬
              </div>
            </div>
            <h3 className={styles.memberName}>Dr. Sarah Johnson</h3>
            <p className={styles.memberRole}>Medical Consultant</p>
            <p className={styles.memberBio}>
              Board-certified radiologist with 10+ years of clinical experience. Provides medical expertise
              ensuring clinical feasibility and accuracy of AI diagnostic solutions.
            </p>
            <div className={styles.memberSkills}>
              <span className={styles.skillTag}>Medical Imaging</span>
              <span className={styles.skillTag}>Clinical Diagnosis</span>
              <span className={styles.skillTag}>Healthcare AI</span>
            </div>
            <div className={styles.memberContact}>
              <a href="#" className={styles.contactLink}>📧</a>
              <a href="#" className={styles.contactLink}>💼</a>
              <a href="#" className={styles.contactLink}>🔗</a>
            </div>
          </div>

          <div className={styles.teamMember}>
            <div className={styles.memberAvatar}>
              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                color: 'white'
              }}>
                🌾
              </div>
            </div>
            <h3 className={styles.memberName}>Michael Park</h3>
            <p className={styles.memberRole}>Agriculture Specialist</p>
            <p className={styles.memberBio}>
              Agronomist and sustainable farming expert. Bridges the gap between traditional farming practices
              and modern AI technology for precision agriculture solutions.
            </p>
            <div className={styles.memberSkills}>
              <span className={styles.skillTag}>Crop Science</span>
              <span className={styles.skillTag}>IoT Agriculture</span>
              <span className={styles.skillTag}>Sustainability</span>
            </div>
            <div className={styles.memberContact}>
              <a href="#" className={styles.contactLink}>📧</a>
              <a href="#" className={styles.contactLink}>💼</a>
              <a href="#" className={styles.contactLink}>🔗</a>
            </div>
          </div>

          <div className={styles.teamMember}>
            <div className={styles.memberAvatar}>
              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                color: 'white'
              }}>
                👩‍🏫
              </div>
            </div>
            <h3 className={styles.memberName}>Dr. Emily Rodriguez</h3>
            <p className={styles.memberRole}>Education Expert</p>
            <p className={styles.memberBio}>
              Educational psychologist and learning sciences expert. Ensures our AI learning platform aligns with
              pedagogical best practices and educational outcomes.
            </p>
            <div className={styles.memberSkills}>
              <span className={styles.skillTag}>Learning Design</span>
              <span className={styles.skillTag}>Educational AI</span>
              <span className={styles.skillTag}>Pedagogy</span>
            </div>
            <div className={styles.memberContact}>
              <a href="#" className={styles.contactLink}>📧</a>
              <a href="#" className={styles.contactLink}>💼</a>
              <a href="#" className={styles.contactLink}>🔗</a>
            </div>
          </div>

          <div className={styles.teamMember}>
            <div className={styles.memberAvatar}>
              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                color: 'white'
              }}>
                👨‍💻
              </div>
            </div>
            <h3 className={styles.memberName}>David Kim</h3>
            <p className={styles.memberRole}>Full-Stack Developer</p>
            <p className={styles.memberBio}>
              Leads system architecture and full-stack development. Ensures robust, scalable solutions
              across all our web and mobile applications.
            </p>
            <div className={styles.memberSkills}>
              <span className={styles.skillTag}>React</span>
              <span className={styles.skillTag}>Node.js</span>
              <span className={styles.skillTag}>Cloud Dev</span>
            </div>
            <div className={styles.memberContact}>
              <a href="#" className={styles.contactLink}>📧</a>
              <a href="#" className={styles.contactLink}>💼</a>
              <a href="#" className={styles.contactLink}>🔗</a>
            </div>
          </div>

          <div className={styles.teamMember}>
            <div className={styles.memberAvatar}>
              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                color: 'white'
              }}>
                👩‍🎨
              </div>
            </div>
            <h3 className={styles.memberName}>Lisa Wang</h3>
            <p className={styles.memberRole}>UX/Product Designer</p>
            <p className={styles.memberBio}>
              Creates intuitive user experiences and beautiful interfaces. Ensures our complex AI solutions
              are accessible, user-friendly, and delightful to use.
            </p>
            <div className={styles.memberSkills}>
              <span className={styles.skillTag}>UI Design</span>
              <span className={styles.skillTag}>User Research</span>
              <span className={styles.skillTag}>Prototyping</span>
            </div>
            <div className={styles.memberContact}>
              <a href="#" className={styles.contactLink}>📧</a>
              <a href="#" className={styles.contactLink}>💼</a>
              <a href="#" className={styles.contactLink}>🔗</a>
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