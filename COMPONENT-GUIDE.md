# Component Usage Guide

## 🧩 Available Components

### Layout Components

#### `<Container>`
Responsive container with max-width constraints.
```tsx
import { Container } from './components';

<Container>
  <p>Content here</p>
</Container>
```

#### `<Section>`
Content sections with consistent spacing.
```tsx
import { Section } from './components';

<Section small> {/* Use 'small' for reduced padding */}
  <h2>Section Title</h2>
</Section>

<Section toTop> {/* Use 'toTop' to remove top padding */}
  Content here
</Section>
```

#### `<Grid>`
CSS Grid wrapper with responsive columns.
```tsx
import { Grid } from './components';

<Grid cols={3} gap={30}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>
```

#### `<Flex>`
Flexbox wrapper with utility props.
```tsx
import { Flex } from './components';

<Flex direction="column" justify="center" align="center" gap={20}>
  <div>Centered content</div>
</Flex>
```

### UI Components

#### `<Button>`
Versatile button component with multiple variants.
```tsx
import { Button } from './components';

<Button variant="primary" size="large" onClick={() => console.log('Clicked!')}>
  Primary Button
</Button>

<Button variant="secondary" size="small">
  Secondary Button
</Button>

<Button variant="outline" fullWidth>
  Full Width Button
</Button>
```

#### `<Card>`
Content cards with optional headers, images, and footers.
```tsx
import { Card } from './components';

<Card 
  title="Card Title"
  subtitle="Card Subtitle"
  image="/path/to/image.jpg"
  variant="flat"
  footer={<Button variant="outline">Learn More</Button>}
>
  <p>Card content goes here</p>
</Card>
```

#### `<Hero>`
Hero section with title, subtitle, and call-to-action.
```tsx
import { Hero } from './components';

<Hero
  title="Welcome to Our Site"
  subtitle="We create amazing digital experiences"
  actions={
    <Flex gap={20}>
      <Button variant="primary">Get Started</Button>
      <Button variant="outline">Learn More</Button>
    </Flex>
  }
  image="/hero-image.jpg"
/>
```

### Form Components

#### `<ContactForm>`
Complete contact form with validation.
```tsx
import { ContactForm } from './components';

<ContactForm 
  onSubmit={(data) => {
    console.log('Form data:', data);
    // Handle form submission
  }}
/>
```

### Navigation Components

#### `<Navigation>`
Responsive navigation header.
```tsx
import { Navigation } from './components';

const links = [
  { label: 'Home', href: '#home', onClick: () => scrollTo('#home') },
  { label: 'About', href: '#about', onClick: () => scrollTo('#about') },
];

<Navigation
  brand={<div>Your Brand</div>}
  links={links}
  actions={
    <Flex gap={15}>
      <Button variant="secondary" size="small">Login</Button>
      <Button variant="primary" size="small">Sign Up</Button>
    </Flex>
  }
/>
```

#### `<Footer>`
Site footer with links and social media.
```tsx
import { Footer } from './components';

const footerLinks = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
];

const socialLinks = [
  { icon: <EmailIcon />, href: 'mailto:hello@example.com', label: 'Email' },
  { icon: <TwitterIcon />, href: 'https://twitter.com', label: 'Twitter' },
];

<Footer
  brand={<div>Your Brand</div>}
  links={footerLinks}
  socialLinks={socialLinks}
  copyright="© 2024 Your Company. All rights reserved."
/>
```

## 🎨 Styling Guide

### CSS Variables
Use CSS custom properties for consistent theming:
```css
/* Available CSS Variables */
--background: #f9f9f9;
--body: #333;
--title: black;
--primary: #222;
--blue-primary: #6366f1;
--secondary: #6366f185;
--white: white;
--grey: #999;

/* Spacing */
--mobile-spacing: 20px;
--desktop-spacing: 80px;
--tablet-spacing: 80px;
```

### Utility Classes
```css
/* Display */
.d-none { display: none; }
.d-flex { display: flex; }

/* Typography */
.body-small { font-size: 14px; }
.body-large { font-size: 18px; }
.color-black { color: var(--black); }

/* Animations */
.animate-fade-in { animation: fadeIn 0.6s ease-out; }
.animate-fade-in-up { animation: fadeInUp 0.6s ease-out; }
.hover-lift:hover { transform: translateY(-5px); }
```

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile */
@media screen and (max-width: 479px) { }

/* Small */
@media screen and (max-width: 767px) { }

/* Medium */
@media screen and (max-width: 991px) { }

/* Large */
@media screen and (min-width: 992px) { }
```

### Responsive Grid
```tsx
// Automatic responsive behavior
<Grid cols={3}> {/* 3 cols on desktop, 2 on tablet, 1 on mobile */}
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</Grid>
```

## 🔧 Utilities

### Font Loading
```tsx
import { loadFonts, defaultFontConfig } from './utils/fontLoader';

// Load fonts on app startup
useEffect(() => {
  loadFonts(defaultFontConfig).catch(console.error);
}, []);
```

### Smooth Scrolling
```tsx
import { scrollToElement, scrollToTop } from './utils/scrollUtils';

// Scroll to element
const handleNavClick = (href: string) => {
  scrollToElement(href, 80); // 80px offset for fixed header
};

// Scroll to top
const handleBackToTop = () => {
  scrollToTop();
};
```

### Animations
```tsx
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

const MyComponent = () => {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div 
      ref={targetRef}
      className={isIntersecting ? 'animate-fade-in' : 'animate-on-scroll'}
    >
      Content appears when scrolled into view
    </div>
  );
};
```

## 🎯 Best Practices

### Component Structure
```tsx
// Good component structure
import React from 'react';
import styles from './Component.module.css';

export interface ComponentProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
}

const Component: React.FC<ComponentProps> = ({
  title,
  children,
  className = ''
}) => {
  return (
    <div className={`${styles.component} ${className}`}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Component;
```

### Performance
- Use CSS modules for component-scoped styles
- Implement lazy loading for large components
- Optimize images and use proper formats
- Minimize bundle size with tree-shaking

### Accessibility
- Always provide alt text for images
- Use semantic HTML elements
- Ensure keyboard navigation works
- Maintain proper color contrast
- Add ARIA labels where needed

### TypeScript
- Define proper interfaces for all props
- Use proper types for event handlers
- Avoid `any` types when possible
- Export types for reusability