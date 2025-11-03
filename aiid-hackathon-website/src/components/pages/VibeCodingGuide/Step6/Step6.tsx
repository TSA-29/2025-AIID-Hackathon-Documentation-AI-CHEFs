import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Step6.module.css';

const Step6: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/vibe-coding-guide" className={styles.backLink}>
          ← Back to Vibe Coding Guide
        </Link>
        <h1 className={styles.title}>STEP 6: DEPLOYMENT</h1>
        <p className={styles.subtitle}>
          Deploy your Carbon Compass application and share it with the world
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>🚀 Step Overview</h2>
          <p className={styles.sectionText}>
            In this final step, we'll deploy our Carbon Compass application to make it accessible worldwide. 
            We'll use free hosting services to publish our Vibe Coding project.
          </p>
          <div className={styles.learningGoals}>
            <h3>What you'll learn:</h3>
            <ul className={styles.goalsList}>
              <li>Deploying to free hosting platforms</li>
              <li>Customizing domain names</li>
              <li>Setting up HTTPS security</li>
              <li>Optimizing for performance</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>🌐 Deployment Options</h2>
          <p className={styles.sectionText}>
            Choose the best hosting platform for your Carbon Compass application:
          </p>
          
          <div className={styles.hostingOptions}>
            <div className={styles.hostingCard}>
              <h3>GitHub Pages</h3>
              <p>Free hosting directly from your GitHub repository</p>
              <div className={styles.pros}>
                <span className={styles.prosTitle}>Pros:</span>
                <ul className={styles.prosList}>
                  <li>Completely free</li>
                  <li>Custom domain support</li>
                  <li>Automatic HTTPS</li>
                  <li>GitHub integration</li>
                </ul>
              </div>
              <div className={styles.cons}>
                <span className={styles.consTitle}>Cons:</span>
                <ul className={styles.consList}>
                  <li>Build process required</li>
                  <li>Limited to static sites</li>
                </ul>
              </div>
              <div className={styles.codeBlock}>
                <pre>
{`# Deploy to GitHub Pages
# 1. Push your code to GitHub
git add .
git commit -m "Deploy Carbon Compass"
git push origin main

# 2. Enable GitHub Pages
# Go to your repository settings
# Navigate to Pages section
# Select source: deploy from branch
# Click Save`}
                </pre>
              </div>
            </div>

            <div className={styles.hostingCard}>
              <h3>Netlify</h3>
              <p>Easy deployment with continuous integration</p>
              <div className={styles.pros}>
                <span className={styles.prosTitle}>Pros:</span>
                <ul className={styles.prosList}>
                  <li>Drag-and-drop deployment</li>
                  <li>Custom domains</li>
                  <li>Automatic HTTPS</li>
                  <li>Form processing</li>
                </ul>
              </div>
              <div className={styles.cons}>
                <span className={styles.consTitle}>Cons:</span>
                <ul className={styles.consList}>
                  <li>Limited free tier</li>
                  <li>Build time limits</li>
                </ul>
              </div>
              <div className={styles.codeBlock}>
                <pre>
{`# Deploy to Netlify
# 1. Create a Netlify account
# 2. Connect your GitHub repository
# 3. Drag and drop your project folder
# 4. Configure build settings
# 5. Deploy your site`}
                </pre>
              </div>
            </div>

            <div className={styles.hostingCard}>
              <h3>Vercel</h3>
              <p>Optimized for React applications</p>
              <div className={styles.pros}>
                <span className={styles.prosTitle}>Pros:</span>
                <ul className={styles.prosList}>
                  <li>Excellent React performance</li>
                  <li>Global CDN</li>
                  <li>Automatic deployments</li>
                </ul>
              </div>
              <div className={styles.cons}>
                <span className={styles.consTitle}>Cons:</span>
                <ul className={styles.consList}>
                  <li>More complex setup</li>
                  <li>Requires credit card for custom domains</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>📸 Deployment Screenshots</h2>
          <p className={styles.sectionText}>
            Here are some screenshots showing the deployment process:
          </p>
          
          <div className={styles.screenshotPlaceholder}>
            <img src={import.meta.env.BASE_URL + 'images/VibeCod/Dep1.png'} alt="GitHub Pages deployment" className={styles.screenshot} />
          </div>
          
          <div className={styles.screenshotPlaceholder}>
            <img src={import.meta.env.BASE_URL + 'images/VibeCod/Dep2.png'} alt="Netlify deployment" className={styles.screenshot} />
          </div>
          
          <div className={styles.screenshotPlaceholder}>
            <img src={import.meta.env.BASE_URL + 'images/VibeCod/Dep3.png'} alt="Vercel deployment" className={styles.screenshot} />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>📱 Mobile Optimization</h2>
          <p className={styles.sectionText}>
            Ensure your Carbon Compass works perfectly on mobile devices:
          </p>
          
          <div className={styles.optimizationSteps}>
            <div className={styles.optStep}>
              <h3>1. Responsive Design</h3>
              <p>Test on different screen sizes</p>
              <div className={styles.codeBlock}>
                <pre>
{`/* Mobile-first CSS */
@media (max-width: 768px) {
  .calculator-form {
    padding: 16px;
  }
  
  .result-card {
    padding: 16px;
    margin: 8px 0;
  }
}`}
                </pre>
              </div>
            </div>

            <div className={styles.optStep}>
              <h3>2. Touch-Friendly Interface</h3>
              <p>Optimize buttons and inputs for mobile</p>
              <div className={styles.codeBlock}>
                <pre>
{`/* Touch-friendly elements */
.calculate-btn {
  min-height: 44px;
  font-size: 16px;
}

.form-input {
  font-size: 16px;
  padding: 12px;
}`}
                </pre>
              </div>
            </div>

            <div className={styles.optStep}>
              <h3>3. Performance Testing</h3>
              <p>Check loading times on mobile networks</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>🎯 Final Touches</h2>
          <p className={styles.sectionText}>
            Add these final touches to make your application professional:
          </p>
          
          <div className={styles.finalTouches}>
            <div className={styles.touchCard}>
              <h3>Custom Domain</h3>
              <p>Set up a professional domain for your calculator</p>
              <div className={styles.codeBlock}>
                <pre>
{`// Custom domain setup
# Option 1: Use hosting provider's domain
# Example: carbon-calculator.yourdomain.com

# Option 2: Use custom domain with GitHub Pages
# 1. Buy a domain from a registrar
# 2. Configure DNS to point to GitHub Pages
# 3. Add CNAME file to your repository
# 4. Update GitHub Pages settings`}
                </pre>
              </div>
            </div>

            <div className={styles.touchCard}>
              <h3>Analytics</h3>
              <p>Add tracking to understand your users</p>
              <div className={styles.codeBlock}>
                <pre>
{String.raw`// Google Analytics setup
<!-- Add to your index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>

// Alternative: Simple Plausible Analytics
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/plausible.js"></script>
<script>
  window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments); }
  plausible('page');
</script>`}
                </pre>
              </div>
            </div>

            <div className={styles.touchCard}>
              <h3>Social Sharing</h3>
              <p>Add sharing buttons to increase reach</p>
              <div className={styles.codeBlock}>
                <pre>
{String.raw`<!-- Add to your results section -->
<div class="share-buttons">
  <a href="https://twitter.com/intent/tweet?text=Check out my Carbon Compass calculator!&url=https://yourdomain.com" target="_blank" class="share-btn twitter">
    Share on Twitter
  </a>
  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://yourdomain.com" target="_blank" class="share-btn linkedin">
    Share on LinkedIn
  </a>
  <a href="mailto:?subject=Carbon Compass Calculator&body=Check out this CBAM calculator: https://yourdomain.com" class="share-btn email">
    Share via Email
  </a>
</div>

<style>
  .share-buttons {
    display: flex;
    gap: 10px;
    margin: 20px 0;
  }
  
  .share-btn {
    padding: 8px 16px;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 500;
    transition: transform 0.2s;
  }
  
  .share-btn:hover {
    transform: translateY(-2px);
  }
  
  .twitter {
    background: #1DA1F2;
    color: white;
  }
  
  .linkedin {
    background: #0077B5;
    color: white;
  }
  
  .email {
    background: #EA4335;
    color: white;
  }
</style>`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.videoPlaceholder}>
          <h3>Watch This Video for Vibe Coding Instructions</h3>
          <div className={styles.videoContainer}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-LFB8D9WV-g"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </div>

      <div className={styles.navigation}>
        <Link to="/vibe-coding-guide/step5" className={styles.prevButton}>
          ← Back to Reporting
        </Link>
        <Link to="/vibe-coding-guide" className={styles.nextButton}>
          Complete Tutorial →
        </Link>
      </div>
    </div>
  );
};

export default Step6;