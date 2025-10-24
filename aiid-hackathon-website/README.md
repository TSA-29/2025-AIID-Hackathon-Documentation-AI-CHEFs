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
- **📊 Project 1**: Medical AI Diagnosis System
  - Background & Problem Statement
  - Solution Idea & Architecture
  - Implementation Details
  - Results & Impact Analysis
- **🌾 Project 2**: Sustainable Agriculture System
  - Global Food Security Challenge
  - Smart Farming Solution
  - Technical Implementation
  - Environmental & Social Impact
- **🤖 Project 3**: Intelligent Educational Platform
  - Learning Analytics Framework
  - AI-Powered Personalization
  - Development Process
  - Educational Outcomes
- **📡 Communication**: Team collaboration and development workflow
- **📚 Tutorial**: "Vibe Coding" - AI-powered web development guide

### Technical Tutorial Highlight

The website features a comprehensive tutorial on **"Vibe Coding"** - an innovative approach to web development using AI assistance. This beginner-friendly guide covers:

- AI-powered website development workflows
- Tool selection and setup
- Prompt engineering for code generation
- Iterative refinement techniques
- SEO and deployment strategies

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
│       ├── Project1-3/  # Hackathon projects
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

**Repository**: https://github.com/THU-SIGS-AIID/2025-AIID-Hackathon-Documentation-Template

**Deployment URL**: https://THU-SIGS-AIID.github.io/2025-AIID-Hackathon-Documentation-Template/

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
- Repository name: `THU-SIGS-AIID.github.io`
- URL: `https://THU-SIGS-AIID.github.io`
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

**Built with ❤️ for AIID Hackathon 2025**