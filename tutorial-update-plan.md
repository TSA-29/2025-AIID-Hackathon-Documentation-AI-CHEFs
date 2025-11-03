# Tutorial Page Update Plan

## Overview
Replace the current Tutorial page content with a video showcase displaying project demos with titles and run instructions.

## Project Videos Mapping

1. **Arrowista_Demo.mp4** - Project 1: ARROWISTA
   - Title: "Arrowista - AI Content Generator"
   - Description: "Modern AI-powered content generator that creates stunning images, text, and videos using SiliconFlow API"
   - Run Instructions:
     ```
     git clone https://github.com/AMatved/2025-AIID-HACKATHON-PERSONAL-PROJECT-ANNA-REZTSOVA.git
     cd 2025-AIID-HACKATHON-PERSONAL-PROJECT-ANNA-REZTSOVA
     npm install
     cp .env.example .env.local
     # Add SILICONFLOW_API_KEY to .env.local
     npm run dev
     # Open http://localhost:3000
     ```
   - Live Demo: https://claude-nh5jojn4i-anna25-1076s-projects.vercel.app

2. **Carbon_Project_Demo.mp4** - Project 2: CARBON COMPASS
   - Title: "Carbon Compass - AI-Powered Carbon Emission Calculator"
   - Description: "AI-powered platform helping SMEs exporting to European Union accurately estimate shipment carbon emissions"
   - Run Instructions:
     ```
     # Clone the repository (URL not provided in the documentation)
     git clone <repository-url>
     cd carbon-compass
     # Frontend setup
     npm install
     npm run dev
     # Backend setup (Python FastAPI)
     cd backend
     pip install -r requirements.txt
     python main.py
     ```
   - Live Demo: https://cacbonsolutionsite.vercel.app/

3. **StudyBuddy_Demo.mp4** - Project 3: STUDYBUDDY
   - Title: "StudyBuddy - AI-Powered Interactive Learning Platform"
   - Description: "AI-powered interactive learning platform designed for primary and middle school education"
   - Run Instructions:
     ```
     git clone <repository-url>
     cd StudyBuddy
     npm install
     # Set up environment variables in .env.local
     # NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, etc.
     # Set up Supabase database with migrations
     npm run dev
     # Open http://localhost:3000
     ```
   - Live Demo: study-buddy.zeabur.app

4. **QuickAIPromoVideo.mp4** - QuickAI Promotional Video
   - Title: "QuickAI - AI-Powered Development Platform"
   - Description: "Promotional video showcasing QuickAI capabilities"
   - Run Instructions: "This is a promotional video. No specific run instructions available."

5. **MainPage.mp4** - Main Website Demo
   - Title: "AI Hackathon 2025 - Main Website"
   - Description: "Demo of the main hackathon website showcasing all projects"
   - Run Instructions:
     ```
     git clone <repository-url>
     cd aiid-hackathon-website
     npm install
     npm run dev
     # Open http://localhost:3000
     ```

## Implementation Details

### Tutorial.tsx Structure
```tsx
import React from 'react';
import styles from './Tutorial.module.css';

const Tutorial: React.FC = () => {
  const projects = [
    {
      id: 'arrowista',
      title: 'Arrowista - AI Content Generator',
      description: 'Modern AI-powered content generator that creates stunning images, text, and videos using SiliconFlow API',
      video: '/videos/Arrowista_Demo.mp4',
      runInstructions: `git clone https://github.com/AMatved/2025-AIID-HACKATHON-PERSONAL-PROJECT-ANNA-REZTSOVA.git
cd 2025-AIID-HACKATHON-PERSONAL-PROJECT-ANNA-REZTSOVA
npm install
cp .env.example .env.local
# Add SILICONFLOW_API_KEY to .env.local
npm run dev
# Open http://localhost:3000`,
      liveDemo: 'https://claude-nh5jojn4i-anna25-1076s-projects.vercel.app'
    },
    // ... other projects
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
                  controls
                  poster={`/images/${project.id}-poster.jpg`}
                >
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div className={styles.projectInfo}>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <p className={styles.projectDescription}>{project.description}</p>
                
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
```

### Tutorial.module.css Additions
```css
/* Projects Grid */
.projectsGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

/* Project Card */
.projectCard {
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.projectCard:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

/* Video Container */
.videoContainer {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  background: #000;
}

.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Project Info */
.projectInfo {
  padding: 2rem;
}

.projectTitle {
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.projectDescription {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

/* Instructions Section */
.instructionsSection {
  margin-top: 1.5rem;
}

.instructionsTitle {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
}

.codeBlock {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 1rem;
  overflow-x: auto;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
  color: #333;
  white-space: pre-wrap;
  word-break: break-all;
}

.liveDemo {
  margin-top: 1rem;
}

.demoLink {
  display: inline-block;
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.demoLink:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
}

/* Responsive Design */
@media (max-width: 768px) {
  .projectsGrid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .projectInfo {
    padding: 1.5rem;
  }
  
  .projectTitle {
    font-size: 1.3rem;
  }
  
  .codeBlock {
    font-size: 0.8rem;
  }
}
```

## Implementation Steps

1. Replace the entire content of Tutorial.tsx with the new component structure
2. Add the new CSS styles to Tutorial.module.css
3. Test the page to ensure videos display correctly
4. Verify responsive design on mobile devices
5. Check that all links and videos work properly

## Notes

- The video paths should be relative to the public directory
- Consider adding poster images for videos to improve loading experience
- Ensure the code blocks are properly formatted and readable
- Test on different screen sizes to verify responsive design