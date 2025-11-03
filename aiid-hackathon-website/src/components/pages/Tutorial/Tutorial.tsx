import React from 'react';
import styles from './Tutorial.module.css';

const Tutorial: React.FC = () => {
  const projects = [
    {
      id: 'arrowista',
      title: 'Arrowista - AI Content Generator',
      description: 'Modern AI-powered content generator that creates stunning images, text, and videos using SiliconFlow API with comprehensive security features and responsive design.',
      image: 'images/ProjPic/ArrowistaPic.png',
      video: 'videos/Arrowista_Demo.mp4',
      runInstructions: `git clone https://github.com/AMatved/2025-AIID-HACKATHON-PERSONAL-PROJECT-ANNA-REZTSOVA.git
cd 2025-AIID-HACKATHON-PERSONAL-PROJECT-ANNA-REZTSOVA
npm install
cp .env.example .env.local
# Add SILICONFLOW_API_KEY to .env.local
npm run dev
# Open http://localhost:3000`,
      liveDemo: 'https://claude-nh5jojn4i-anna25-1076s-projects.vercel.app'
    },
    {
      id: 'carbon-compass',
      title: 'Carbon Compass - AI-Powered Carbon Emission Calculator',
      description: 'AI-powered platform helping SMEs exporting to European Union accurately estimate shipment carbon emissions, calculate CBAM fees, and identify practical strategies to reduce those costs.',
      image: 'images/ProjPic/CarbonCompass.png',
      video: 'videos/Carbon_Project_Demo.mp4',
      runInstructions: `# Clone the repository
git clone <repository-url>
cd carbon-compass

# Frontend setup
npm install
npm run dev

# Backend setup (Python FastAPI)
cd backend
pip install -r requirements.txt
python main.py

# Access the application at http://localhost:3000`,
      liveDemo: 'https://cacbonsolutionsite.vercel.app/'
    },
    {
      id: 'studybuddy',
      title: 'StudyBuddy - AI-Powered Interactive Learning Platform',
      description: 'AI-powered interactive learning platform designed for primary and middle school education. Teachers can create engaging classrooms and generate personalized quizzes instantly.',
      image: 'images/ProjPic/StudyBuddy.png',
      video: 'videos/StudyBuddy_Demo.mp4',
      runInstructions: `git clone <repository-url>
cd StudyBuddy
npm install

# Set up environment variables in .env.local
# NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, etc.

# Set up Supabase database with migrations
# Run SQL files in supabase/migrations/ directory

npm run dev
# Open http://localhost:3000`,
      liveDemo: 'https://study-buddy.zeabur.app'
    }
  ];

  return (
    <div className={styles.tutorialPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Project Demos & Tutorials</h1>
          <p className={styles.subtitle}>
            Watch our project demos and learn how to run them yourself
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.videoContainer}>
                <video
                  className={styles.video}
                  src={import.meta.env.BASE_URL + project.video}
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div className={styles.projectInfo}>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <p className={styles.projectDescription}>{project.description}</p>
                
                {project.image && (
                  <div className={styles.projectImageContainer}>
                    <img
                      src={import.meta.env.BASE_URL + project.image}
                      alt={`${project.title} screenshot`}
                      className={styles.projectImage}
                    />
                  </div>
                )}
                
                <div className={styles.instructionsSection}>
                  <h3 className={styles.instructionsTitle}>How to Run This Project</h3>
                  <pre className={styles.codeBlock}>
                    <code>{project.runInstructions}</code>
                  </pre>
                  {project.liveDemo && (
                    <div className={styles.liveDemo}>
                      <a 
                        href={project.liveDemo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.demoLink}
                      >
                        View Live Demo →
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tutorial;