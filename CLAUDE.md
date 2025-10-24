# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an AIID Hackathon documentation template and website project. The main website is a React + Vite + TypeScript application that documents team members' work, collaboration, development process, and results for a hackathon project.

## Development Commands

### Website Development (aiid-hackathon-website/)
```bash
cd aiid-hackathon-website
npm install          # Install dependencies
npm run dev         # Start development server (Vite)
npm run build       # Build for production (TypeScript compilation + Vite build)
npm run lint        # Run ESLint
npm run preview     # Preview production build locally
```

### Build Process Details
The build process uses a two-step approach:
1. **TypeScript compilation**: `tsc -b` compiles TypeScript and validates types
2. **Vite bundling**: `vite build` creates optimized production assets
This ensures type safety before bundling and provides better error handling.

## Architecture Overview

### Technology Stack
- **React 19.1.1** with modern hooks and functional components
- **TypeScript ~5.9.3** for type safety
- **Vite 7.1.7** as build tool and dev server
- **React Router 7.9.4** for client-side routing
- **CSS Modules** for component-scoped styling
- **ESLint 9.36.0** with TypeScript plugin for code quality
- **react-markdown** with **remark-gfm** for markdown rendering and GitHub-flavored markdown support

### Configuration Files Structure
- **tsconfig.json**: Uses project references with separate configs for app (`tsconfig.app.json`) and Node.js (`tsconfig.node.json`)
- **vite.config.ts**: Minimal configuration with React plugin
- **package.json**: Standard Vite + React setup with TypeScript ESLint integration

### Project Structure
```
aiid-hackathon-website/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header/           # Navigation and header components
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Navigation.tsx
│   │   │   │   └── Header.module.css
│   │   │   ├── Footer/           # Contact info and social links
│   │   │   │   ├── Footer.tsx
│   │   │   │   ├── ContactInfo.tsx
│   │   │   │   ├── SocialLinks.tsx
│   │   │   │   └── Footer.module.css
│   │   │   └── Layout.tsx        # Main layout wrapper
│   │   └── pages/                # Route-based page components
│   │       ├── Home/
│   │       ├── Team/
│   │       ├── Experiments/      # Experimental features page
│   │       ├── Communication/
│   │       ├── Tutorial/
│   │       ├── Project1/         # With sub-pages: Background, Idea, Implementation, Result
│   │       ├── Project2/         # With sub-pages: Background, Idea, Implementation, Result
│   │       └── Project3/         # With sub-pages: Background, Idea, Implementation, Result
│   ├── config/
│   │   └── navigation.ts         # Navigation structure and contact info
│   ├── contexts/
│   │   ├── NavigationContext.tsx # Active route tracking
│   │   └── ThemeContext.tsx      # Theme management
│   └── types/
│       └── navigation.ts         # TypeScript interfaces
├── package.json                  # Dependencies and scripts
├── vite.config.ts               # Vite configuration
├── tsconfig.json                # TypeScript configuration
└── tsconfig.node.json           # Node-specific TypeScript config
```

## Key Architectural Patterns

### Navigation System
- **Hierarchical routing**: Three main projects (PROJECT1, PROJECT2, PROJECT3) each with four sub-pages (Background, Idea, Implementation, Result)
- **Centralized configuration**: All navigation items defined in `src/config/navigation.ts`
- **Context-based state**: `NavigationContext` tracks active routes for UI highlighting
- **Nested routing structure**: React Router handles project sub-pages as nested routes with a Layout wrapper

### Component Architecture
- **Layout-first approach**: Header/Footer wrapped in Layout component with `<Outlet />` for page content
- **Component-scoped styling**: CSS Modules used throughout (`.module.css` files)
- **Type-safe configuration**: Navigation items, contact info, and social links strongly typed
- **Provider pattern**: `NavigationProvider` wraps the entire app for route state management
- **Markdown rendering**: Tutorial page demonstrates embedded markdown content with custom component mapping for styled rendering

### Routing Structure
```
/                           → Home
/team                       → Team directory
/experiments                → Experiments page
/communication              → Communication page
/tutorial                   → Tutorial page
/project1/                  → Project1 overview
/project1/background        → Project1 background
/project1/idea              → Project1 idea
/project1/implementation    → Project1 implementation
/project1/result            → Project1 results
/[Similar structure for project2 and project3]
```

### Configuration Files
- **package.json**: Contains scripts for dev, build, lint, and preview commands
- **vite.config.ts**: Basic Vite configuration with React plugin
- **tsconfig.json**: TypeScript configuration with project references
- **tsconfig.node.json**: Node-specific TypeScript configuration

## Development Guidelines

### Adding New Projects
To add a new project (e.g., PROJECT4):
1. Create new project folder in `src/components/pages/Project4/`
2. Create sub-page components: Background, Idea, Implementation, Result
3. Add project configuration to `src/config/navigation.ts`
4. Add routes in `src/App.tsx` following existing pattern

### Working with Markdown Content
The Tutorial page uses embedded markdown rendering:
- **Dependencies**: `react-markdown` and `remark-gfm` are installed for GitHub-flavored markdown support
- **Content approach**: Markdown content is embedded as template literals in components for optimal performance
- **Styling**: Custom component mapping provides styled versions of all markdown elements
- **When to use**: For tutorial content, documentation, and any structured text content that benefits from markdown's formatting

### Navigation Configuration
All navigation structure is centralized in `src/config/navigation.ts`:
- `navigationConfig`: Array of navigation items with optional children for sub-pages
- `contactInfo`: Footer contact information
- `socialLinks`: Social media platform links

### Context Usage
- `NavigationContext`: Use `NavigationConsumer` component to access active path
- `ThemeContext`: Available for theme switching functionality

### TypeScript Interfaces
Key interfaces defined in `src/types/navigation.ts`:
- `NavigationItem`: Structure for navigation menu items
- `ContactInfo`: Footer contact information structure
- `SocialLink`: Social media link structure

## CSS and Styling
- **CSS Modules**: All component styles use `.module.css` files
- **Global styles**: Defined in `src/index.css` with basic reset and defaults
- **Responsive design**: Mobile-first approach implemented in component styles

## Build and Deployment

- **Development**: Vite dev server with hot reload (`npm run dev`)
- **Production**: TypeScript compilation (`tsc -b`) followed by Vite build (`npm run build`)
- **Preview**: Built-in Vite preview for local testing of production build (`npm run preview`)
- **Linting**: ESLint for code quality (`npm run lint`)

## Git Workflow

This project uses Git for version control. The main branch is typically `main` or `master`. Key files that are tracked:

- All source code in `aiid-hackathon-website/src/`
- Configuration files (package.json, tsconfig.json, vite.config.ts)
- Documentation in `docs/` directory
- CLAUDE.md for AI assistant guidance

## Documentation Structure

- **CLAUDE.md**: This file - development guidance for Claude Code
- **README.md**: Basic project overview and description
- **docs/ARCHITECTURE.md**: Detailed architectural documentation and design patterns
- **CONTENT_GUIDELINES.md**: Comprehensive content guidelines for each page section (in Chinese)

## Content Guidelines Reference

The project includes detailed content guidelines in `CONTENT_GUIDELINES.md` that provide:

- **Page structure templates** for each project section
- **Content requirements** for Background, Idea, Implementation, and Result pages
- **Quality standards** for text, visual, and technical content
- **Maintenance guidelines** for keeping documentation current

This helps ensure consistent, high-quality content across all project documentation pages.

### Markdown Implementation Pattern
For pages requiring structured text content (like tutorials or documentation):
```tsx
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const markdownContent = `# Your markdown content here`;

const Component: React.FC = () => {
  return (
    <div className={styles.container}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({children, ...props}) => <h1 className={styles.h1} {...props}>{children}</h1>,
          // ... custom components for other markdown elements
        }}
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};
```