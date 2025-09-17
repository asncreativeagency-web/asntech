# React Conversion Project

This project is a React conversion of the original HTML/CSS/JavaScript codebase, built with modern tools and technologies.

## 🚀 Tech Stack

- **React 19.1.1** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **CSS Modules** - Scoped CSS styling
- **Web Font Loader** - Optimized font loading

## 📁 Project Structure

```
src/
├── components/           # Reusable React components
│   ├── Button.tsx       # Button component with variants
│   ├── Container.tsx    # Layout container
│   ├── Section.tsx      # Content sections
│   ├── Grid.tsx         # CSS Grid wrapper
│   ├── Flex.tsx         # Flexbox wrapper
│   ├── Navigation.tsx   # Header navigation
│   ├── Footer.tsx       # Footer component
│   └── index.ts         # Component exports
├── styles/              # CSS modules and global styles
│   ├── globals.css      # Global styles and CSS variables
│   ├── layout.module.css     # Layout utilities
│   ├── buttons.module.css    # Button styles
│   ├── navigation.module.css # Navigation styles
│   └── footer.module.css     # Footer styles
├── utils/               # Utility functions
│   └── fontLoader.ts    # Font loading utilities
├── types/               # TypeScript type definitions
│   └── css-modules.d.ts # CSS modules types
├── hooks/               # Custom React hooks
│   └── useFontLoader.ts # Font loading hook
└── App.tsx              # Main application component
```

## 🎨 Design System

### CSS Variables
The project uses a comprehensive set of CSS custom properties for consistent theming:

- **Colors**: Primary, secondary, background, text colors
- **Spacing**: Mobile, tablet, desktop spacing variables
- **Typography**: Font families, sizes, weights
- **Component Library Integration**: FlowUI, Untitled UI, SystemFlow Lite, Kütüp Library

### Component Library
All components are built with:
- **TypeScript** for type safety
- **CSS Modules** for scoped styling
- **Responsive design** with mobile-first approach
- **Accessibility** features built-in

## 🧩 Components

### Layout Components
- **Container**: Responsive container with max-width
- **Section**: Content sections with spacing variants
- **Grid**: CSS Grid wrapper with responsive columns
- **Flex**: Flexbox wrapper with utility props

### UI Components
- **Button**: Multiple variants (primary, secondary, outline, solid)
- **Navigation**: Responsive navigation with mobile menu
- **Footer**: Footer with newsletter and social links

## 📱 Responsive Design

Breakpoints:
- **Mobile**: < 479px
- **Small**: 479px - 767px
- **Medium**: 767px - 991px
- **Large**: > 991px

## 🔤 Typography

- **Primary Font**: Figtree (loaded via Google Fonts)
- **Fallback**: Arial, Helvetica Neue, Helvetica, sans-serif
- **Font Loading**: Optimized with Web Font Loader

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## 🔧 Development Features

- **Hot Module Replacement** (HMR) for fast development
- **TypeScript** for better developer experience
- **ESLint** for code quality
- **CSS Modules** for component-scoped styles
- **Optimized font loading** for better performance

## 📦 Original Conversion

This project converts the following original assets:
- **Web Font Loader v1.6.26** → React font loading utility
- **Webflow CSS Framework** → React components with CSS modules
- **Custom CSS with design tokens** → CSS variables and modules
- **Static HTML structure** → Dynamic React components

## 🌟 Key Features

- ✅ **Modern React Architecture** with functional components and hooks
- ✅ **TypeScript** for type safety and better DX
- ✅ **Responsive Design** with mobile-first approach
- ✅ **Performance Optimized** with font loading and CSS optimization
- ✅ **Component-Based** architecture for reusability
- ✅ **Accessibility** features built into components
- ✅ **CSS Variables** for consistent theming
- ✅ **Modular CSS** with CSS modules

## 🛠 Build Tools

- **Vite**: Fast build tool with HMR
- **TypeScript**: Static type checking
- **ESLint**: Code linting and formatting
- **PostCSS**: CSS processing (if needed)

## 📄 License

This project maintains the same licensing as the original codebase.