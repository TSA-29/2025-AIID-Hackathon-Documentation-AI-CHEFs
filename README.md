# AIID Hackathon 2025 - Team Documentation Website

A comprehensive documentation website built for the AIID Hackathon 2025, showcasing team collaboration, development processes, and project outcomes. This platform serves as a centralized hub for presenting hackathon projects, team profiles, and technical tutorials.

## 🚀 Project Overview

This website demonstrates modern web development practices using React, TypeScript, and Vite to create an elegant, responsive documentation platform. It features a clean architecture with component-based design, routing, and markdown rendering capabilities.

### Key Features

- **📱 Responsive Design**: Mobile-first approach with beautiful gradients and modern UI
- **🗺️ Multi-level Navigation**: Hierarchical routing system for projects and sub-pages
- **👥 Team Showcase**: Dynamic team member profiles and collaboration highlights
- **📚 Tutorial System**: Interactive markdown-based tutorials with custom styling
- **⚡ Performance Optimized**: Fast builds with Vite and TypeScript
- **🎨 Component Architecture**: Reusable, type-safe components with CSS Modules

## 🏗️ Website Structure

### Main Sections

- **🏠 Home**: Introduction and overview of the hackathon experience
- **👥 Team**: Team member profiles and roles
- **🎨 Project 1**: ARROWISTA - AI Content Generator
  - Background & Content Creation Challenges
  - Secure AI Generation Architecture
  - Implementation with Security Features
  - Results & Multi-modal Content Generation
- **🌍 Project 2**: CARBON COMPASS - EU CBAM Compliance Platform
  - EU Carbon Border Adjustment Challenges
  - AI-powered Carbon Emission Calculations
  - Technical Implementation & Integration
  - Results & Compliance Benefits
- **📚 Project 3**: STUDYBUDDY - AI-powered Educational Platform
  - Educational Challenges & Research Context
  - AI-powered Quiz Generation & Personalization
  - Technical Implementation & Classroom Management
  - Results & Learning Outcomes
- **📡 Communication**: Team collaboration and development workflow
- **📚 Tutorial**: "Vibe Coding" - AI-powered web development guide

## 🚀 Project Details

### 🎨 Project 1: ARROWISTA - AI Content Generator

Arrowista is a modern AI-powered content generator that creates stunning images, text, and videos using SiliconFlow API with comprehensive security features and responsive design. This project addresses the growing need for accessible, secure content creation tools while implementing advanced security measures to prevent abuse.

**Key Features:**
- Multi-modal content generation (images, text, videos)
- Advanced content moderation and filtering
- Rate limiting and prompt injection protection
- Responsive design with loading states and animations
- Dual deployment ready (Vercel and GitHub Pages)

**Technical Stack:**
- Next.js 15, React, TypeScript
- SiliconFlow API (Qwen/Qwen-Image model)
- Custom security systems for content moderation
- Comprehensive error handling and fallback mechanisms

### 🌍 Project 2: CARBON COMPASS - EU CBAM Compliance Platform

Carbon Compass is an AI-powered platform helping Small and Medium Enterprises (SMEs) exporting to the European Union accurately estimate shipment carbon emissions, calculate CBAM fees, and identify practical strategies to reduce those costs. This project addresses the complex challenges of EU Carbon Border Adjustment Mechanism compliance.

**Key Features:**
- AI-powered carbon emission calculations
- CBAM fee estimation and compliance reporting
- Emission reduction strategies and recommendations
- Industry benchmarking and cost optimization
- Automated compliance documentation

**Technical Stack:**
- TRAE + Diffy LLM for AI processing
- React + Next.js for frontend
- Python (FastAPI) for backend
- Google Cloud Storage and deployment
- Integration with carbon emission databases

### 📚 Project 3: STUDYBUDDY - AI-powered Educational Platform

StudyBuddy is an AI-powered interactive learning platform designed for primary and middle school education. Teachers can create engaging classrooms and generate personalized quizzes instantly, while students learn at their own pace with smart, adaptive AI-generated content.

**Key Features:**
- AI-powered quiz generation from any topic
- Personalized learning paths based on student performance
- Classroom management with real-time tracking
- PDF document processing for automatic quiz creation
- Comprehensive analytics and progress monitoring

**Technical Stack:**
- Next.js 15, TypeScript, Tailwind CSS
- Supabase for database management
- OpenAI/SiliconFlow APIs for AI processing
- Zustand for state management
- Responsive design for multi-device access

### Technical Tutorial Highlight

The website features a comprehensive tutorial on **"Vibe Coding"** - an innovative approach to web development using AI assistance. This beginner-friendly guide covers:

- AI-powered website development workflows
- Tool selection and setup
- Prompt engineering for code generation
- Iterative refinement techniques
- SEO and deployment strategies
- Integrated video tutorials with step-by-step guidance
- Visual deployment examples with screenshots

## 🛠️ Technology Stack

### Frontend
- **React 19.1.1**: Modern React with hooks and functional components
- **TypeScript ~5.9.3**: Type-safe development
- **Vite 7.1.7**: Fast build tool and development server
- **React Router 7.9.4**: Client-side routing
- **CSS Modules**: Component-scoped styling
- **react-markdown**: Markdown rendering with GitHub-flavored support

### Development Tools
- **ESLint 9.36.0**: Code quality and linting
- **TypeScript Compiler**: Type checking and validation
- **Hot Module Replacement**: Instant development feedback

## 🚦 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd aiid-hackathon-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run lint` - Run ESLint code quality checks
- `npm run preview` - Preview production build locally

## 🏛️ Project Architecture

### Directory Structure
```
src/
├── components/
│   ├── layout/           # Header, Footer, Navigation
│   └── pages/           # Route-based page components
│       ├── Home/        # Landing page
│       ├── Team/        # Team profiles
│       ├── Project1/    # Arrowista - AI Content Generator
│       ├── Project2/    # Carbon Compass - EU CBAM Compliance
│       ├── Project3/    # StudyBuddy - AI Educational Platform
│       ├── Tutorial/    # Markdown tutorial system
│       └── Communication/ # Dev workflow
├── config/
│   └── navigation.ts    # Centralized navigation config
├── contexts/            # React contexts (Navigation, Theme)
├── types/              # TypeScript type definitions
└── assets/             # Static assets
```

### Key Patterns

- **Centralized Configuration**: Navigation and routing managed in `src/config/navigation.ts`
- **Component-First Architecture**: Reusable components with scoped styling
- **Type Safety**: Full TypeScript implementation throughout
- **Responsive Design**: Mobile-first CSS with flexible layouts
- **Markdown Integration**: Custom markdown rendering for tutorial content

## 📱 Responsive Design

The website is fully responsive across all device sizes:
- **Desktop**: Full-featured layout with hover effects and animations
- **Tablet**: Optimized navigation and content layout
- **Mobile**: Touch-friendly interface with simplified navigation

## 🎨 Design System

### Visual Identity
- **Color Palette**: Warm yellow-orange gradients creating an energetic, innovative feel
- **Typography**: Clean, modern fonts with excellent readability
- **Spacing**: Consistent spacing system for visual harmony
- **Interactions**: Smooth transitions and hover effects

### Component Styling
- **CSS Modules**: Scoped styling preventing conflicts
- **Responsive Grids**: Flexible layouts that adapt to content
- **Modern Effects**: Gradients, shadows, and smooth animations

## 🚀 Deployment

### GitHub Pages Deployment

This project is configured for automatic GitHub Pages deployment using GitHub Actions with static file serving:

**Repository**: https://github.com/TSA-29/2025-AIID-Hackathon-Documentation-AI-CHEFs

**Deployment URL**: https://TSA-29.github.io/2025-AIID-Hackathon-Documentation-AI-CHEFs/

### Setup Instructions

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Configure static GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Select "GitHub Actions"
   - Save and wait for deployment

3. **Automatic Deployment**
   - GitHub Actions will build and deploy on every push to main
   - Monitor progress in the Actions tab
   - `.nojekyll` file ensures static file serving
   - No Jekyll processing of source files

### Deployment Process
- ✅ **Static File Serving**: `.nojekyll` bypasses Jekyll
- ✅ **Automated Builds**: GitHub Actions handles the entire process
- ✅ **No File Conflicts**: Source files remain untouched
- ✅ **Fast Deployment**: Direct static file serving

### Alternative Deployment Options

**Option 1: Custom Domain**
- Configure custom domain in GitHub Pages settings
- Update `vite.config.ts` base path accordingly

**Option 2: User Website**
- Repository name: `TSA-29.github.io`
- URL: `https://TSA-29.github.io`
- Change base path to `/`

**Option 3: Manual Deployment**
```bash
npm run build
# Deploy dist folder to any static hosting service
```

### Production Features
- **TypeScript Compilation**: Type validation and transpilation
- **Asset Optimization**: CSS and JavaScript minification
- **Bundle Generation**: Optimized production bundles
- **Static Asset Handling**: Efficient asset serving
- **Code Splitting**: Optimized bundle sizes
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Direct Deployment**: No Jekyll processing, direct static file serving

## 🤝 Contributing

This project serves as a template for hackathon documentation websites. When contributing:

1. Follow the established component patterns
2. Maintain type safety with TypeScript
3. Use CSS Modules for styling
4. Update navigation configuration for new pages
5. Test responsive design across devices

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **AIID Hackathon 2025**: Organizers and participants
- **React Team**: For the excellent React framework
- **Vite Team**: For the blazing-fast build tool
- **TypeScript Team**: For enabling type-safe JavaScript

---

**Built with ❤️ for AIID Hackathon 2025** **