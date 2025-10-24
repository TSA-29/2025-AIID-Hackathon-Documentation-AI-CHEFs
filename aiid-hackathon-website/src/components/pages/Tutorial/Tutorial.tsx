import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './Tutorial.module.css';

const markdownContent = `# Vibe Coding: Your Zero-to-Website Tutorial for Beginners

Have a brilliant idea for a website but no idea how to code? The world of programming can seem intimidating, but a new approach called "vibe coding" is here to change that. This tutorial will guide you through building a website from scratch, not by writing lines of code, but by describing your vision to an AI.

## What Exactly is Vibe Coding?

Vibe coding is an emerging practice in software development that uses artificial intelligence to turn your natural language descriptions into a functional website. Instead of getting bogged down in the technical details of programming languages, you focus on the "vibe" or the overall vision of what you want to create. Your role shifts from being a traditional coder to a creative director who guides the AI to generate, refine, and perfect the final product. This approach dramatically lowers the barrier to entry, making web development accessible to everyone, regardless of their technical background.

## The Vibe Coding Mindset

Before you start building, it's essential to adopt the right mindset:

*   **Focus on the "What," Not the "How":** Concentrate on what you want your website to do and what you want it to look like. The AI will handle the technical implementation.
*   **Embrace the Iterative Process:** Think of it as a conversation. You give the AI a prompt, review the output, and then provide feedback for adjustments.
*   **Be a Creative Collaborator:** Don't be afraid to experiment. Vibe coding allows you to quickly prototype different ideas and designs. Treat the AI as your creative partner.

---

# Step-by-Step Guide: Building Your First Website with Vibe Coding

## Step 1: Define Your "Vibe" and Plan Your Project

Every great website starts with a clear plan. Before you give a single command to an AI, take the time to define the essence of your website.

*   **Brainstorm with AI:** Use conversational AI tools to refine your ideas. You can ask an AI to act as a brand strategist to help you clarify your vision.
*   **Determine Your Goal:** What is the primary purpose of your website? Is it to sell products, showcase a portfolio, or provide information?
*   **Identify Your Audience:** Who are you trying to reach? Understanding your target audience will inform your design and content choices.
*   **Create a Sitemap:** Ask the AI to propose a logical structure for your website. A typical sitemap includes pages like "Home," "About," "Services/Products," and "Contact."

### Example prompt for your AI:

> "I want to create a portfolio website for a landscape photographer named [Your Name]. The goal is to showcase stunning photos and attract new clients. Suggest an effective sitemap and describe a 'vibe' for the design that is professional, yet natural and serene."

## Step 2: Choose Your AI-Powered Tool

A growing number of AI-powered tools are available for vibe coding. For beginners, AI website builders are the most straightforward option.

*   **AI Website Builders:** Platforms like Wix, Hostinger, and Squarespace are excellent starting points. You describe what you want, and the AI generates a complete website, which you can then customize with a user-friendly editor.
*   **AI Code Editors:** For those who are a bit more adventurous and want to see the code, tools like Cursor or Replit are great options. They integrate AI assistants that can generate and edit code based on your prompts.

## Step 3: Generate Your Website with Prompts

This is where the magic of vibe coding happens. You'll translate your vision into descriptive prompts for the AI.

*   **Start with a Clear, High-Level Prompt:** Provide your chosen AI website builder with a detailed description of the site you want, using the information from your planning phase.
*   **Build Page by Page:** Start with the homepage and then work your way through the other pages of your sitemap, giving specific instructions for each section.

### Example prompts for website generation:

> **For the Homepage:** "Create a homepage with a full-screen hero image of a misty forest. The headline should be '[Your Name] Photography' with the sub-headline 'Capturing the Beauty of Nature.' Add a button that links to my gallery."

> **For the About Section:** "Add an 'About Me' section that includes a professional photo of myself and a short paragraph about my passion for photography and my 10 years of experience."

## Step 4: Refine and Customize

The initial AI-generated site is your starting point. Now begins the iterative process of refining it to perfectly match your vision.

*   **Visual Adjustments:** Ask the AI to change colors, fonts, and layouts. You can even provide websites you like as examples for the AI to emulate.
*   **Content Generation and Editing:** Have the AI write copy for different sections of your site. Always review and edit the text to ensure it reflects your personal brand and voice.
*   **Add Your Media:** Upload your own photos and videos. Many AI tools can also suggest or generate stock images based on your descriptions.

### Example prompts for refinement:

> "Change the primary color scheme of the website to deep forest green and a complementary cream color. Use an elegant serif font for all the headings."
>
> "Generate a compelling bio for the 'About Me' page, highlighting my dedication to capturing pristine landscapes."
>
> "Add a photo gallery with a grid layout to showcase my best work."

## Step 5: SEO and Launch

Before you share your website with the world, a few final steps are necessary.

*   **Search Engine Optimization (SEO):** Many AI website builders have built-in SEO tools. Ask the AI to generate SEO-friendly page titles and descriptions to help people find your site on Google.
*   **Mobile Optimization:** Ensure your website looks great on all devices. Most modern AI builders handle this automatically, but it's always good to double-check.
*   **Connect Your Domain:** Choose and connect a custom domain name (e.g., www.yourname.com). Website builder platforms typically offer domain registration and hosting services.
*   **Test Everything:** Click through every page and link on your site to make sure everything works as expected before you announce your launch.

---

# The Future of Creating is "Vibey"

Vibe coding is revolutionizing web development by making it more accessible and intuitive. By shifting the focus from complex coding to creative direction, it empowers anyone to bring their digital ideas to life. So, find your vibe and start building the website you've always imagined.`;

const Tutorial: React.FC = () => {
  return (
    <div className={styles.tutorialPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Vibe Coding Tutorial</h1>
          <p className={styles.subtitle}>
            Learn how to build websites with AI-powered development
          </p>
        </div>

        <div className={styles.markdownContainer}>
          <div className={styles.markdownWrapper}>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({children, ...props}) => <h1 className={styles.mdH1} {...props}>{children}</h1>,
                h2: ({children, ...props}) => <h2 className={styles.mdH2} {...props}>{children}</h2>,
                h3: ({children, ...props}) => <h3 className={styles.mdH3} {...props}>{children}</h3>,
                h4: ({children, ...props}) => <h4 className={styles.mdH4} {...props}>{children}</h4>,
                p: ({children, ...props}) => <p className={styles.mdP} {...props}>{children}</p>,
                ul: ({children, ...props}) => <ul className={styles.mdUl} {...props}>{children}</ul>,
                li: ({children, ...props}) => <li className={styles.mdLi} {...props}>{children}</li>,
                blockquote: ({children, ...props}) => <blockquote className={styles.mdBlockquote} {...props}>{children}</blockquote>,
                hr: ({...props}) => <hr className={styles.mdHr} {...props} />,
                strong: ({children, ...props}) => <strong className={styles.mdStrong} {...props}>{children}</strong>,
                em: ({children, ...props}) => <em className={styles.mdEm} {...props}>{children}</em>,
              }}
            >
              {markdownContent}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;