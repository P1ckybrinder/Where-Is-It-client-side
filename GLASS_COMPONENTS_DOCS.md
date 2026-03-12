# Glass Design System Documentation

## Overview

The Glass Design System is a reusable, production-ready component library built with React, Framer Motion, and Tailwind CSS. It features premium liquid glass morphism effects that seamlessly adapt to both light and dark themes with full mobile optimization.

## Components

### 1. GlassCard

A versatile card component with multiple variants for displaying content.

```jsx
import { GlassCard } from '@/components/glass';

// Default variant
<GlassCard variant="default" delay={0.1}>
  <h3>Card Content</h3>
</GlassCard>

// Elevated variant with premium glass effect
<GlassCard variant="elevated">
  <p>Premium content</p>
</GlassCard>

// Interactive variant (clickable)
<GlassCard variant="interactive" onClick={() => {}}>
  Action content
</GlassCard>
```

**Props:**
- `variant`: 'default' | 'elevated' | 'interactive' (default: 'default')
- `hover`: boolean (default: true)
- `animated`: boolean (default: true)
- `delay`: number - Framer Motion delay in seconds
- `className`: string - Additional Tailwind classes
- `onClick`: function

### 2. GlassButton

Primary call-to-action button with premium styling.

```jsx
import { GlassButton } from '@/components/glass';

<GlassButton variant="primary" size="md" icon={<FaSearch />}>
  Search
</GlassButton>

<GlassButton variant="secondary">Secondary</GlassButton>
<GlassButton variant="outline">Outline</GlassButton>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `disabled`: boolean
- `loading`: boolean
- `icon`: React component
- `iconPosition`: 'left' | 'right' (default: 'left')
- `onClick`: function

### 3. GlassInput

Form input with glass effect and validation support.

```jsx
import { GlassInput } from '@/components/glass';

<GlassInput
  type="email"
  placeholder="Enter email"
  label="Email Address"
  icon={<FaEnvelope />}
  error={hasError}
  helperText="Invalid email format"
  onChange={handleChange}
/>
```

**Props:**
- `type`: string (default: 'text')
- `placeholder`: string
- `label`: string
- `icon`: React component
- `error`: boolean
- `disabled`: boolean
- `helperText`: string
- `onChange`, `onFocus`, `onBlur`: functions

### 4. GlassSearchBar

Advanced search component with autocomplete suggestions.

```jsx
import { GlassSearchBar } from '@/components/glass';

<GlassSearchBar
  placeholder="Search items..."
  suggestions={['iPhone', 'Wallet', 'Keys']}
  onSearch={(value) => console.log(value)}
  onSuggestionClick={(suggestion) => {}}
  onClear={() => {}}
/>
```

**Props:**
- `placeholder`: string
- `suggestions`: string[]
- `onSearch`: function
- `onSuggestionClick`: function
- `onClear`: function
- `className`: string

### 5. GlassModal

Premium modal dialog with backdrop blur and smooth animations.

```jsx
import { GlassModal } from '@/components/glass';

<GlassModal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm Action"
  size="md"
  showCloseButton={true}
>
  <p>Modal content here</p>
</GlassModal>
```

**Props:**
- `isOpen`: boolean (required)
- `onClose`: function (required)
- `title`: string
- `size`: 'sm' | 'md' | 'lg' | 'xl' (default: 'md')
- `showCloseButton`: boolean (default: true)

### 6. GlassBottomActionBar

Floating action bar positioned at bottom, ideal for mobile interactions.

```jsx
import { GlassBottomActionBar } from '@/components/glass';

<GlassBottomActionBar
  visible={true}
  actions={[
    {
      label: 'Confirm',
      variant: 'primary',
      onClick: () => {},
      icon: <FaCheck />
    },
    {
      label: 'Cancel',
      variant: 'secondary',
      onClick: () => {}
    }
  ]}
/>
```

**Props:**
- `visible`: boolean (default: true)
- `actions`: Array of action objects
  - `label`: string
  - `variant`: 'primary' | 'secondary'
  - `onClick`: function
  - `icon`: React component (optional)

### 7. GlassNavbar

Sticky navigation bar with theme toggle and responsive menu.

```jsx
import { GlassNavbar } from '@/components/glass';

<GlassNavbar
  logo={logoImage}
  brand="My App"
  links={[
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' }
  ]}
  theme={theme}
  onThemeToggle={toggleTheme}
  actions={<GlassButton>Sign In</GlassButton>}
/>
```

**Props:**
- `logo`: string (image URL)
- `brand`: string
- `links`: Array of { href, label }
- `actions`: React component
- `theme`: 'light' | 'dark'
- `onThemeToggle`: function

## CSS Classes

### Base Glass Classes

```css
/* Card variants */
.glass-card-default      /* Light, subtle glass */
.glass-card-elevated     /* Premium glass with hover effects */
.glass-card-interactive  /* Clickable card with animations */

/* Button variants */
.glass-button-primary    /* Main CTA button */
.glass-button-secondary  /* Secondary action */
.glass-button-outline    /* Outline style */

/* Input */
.glass-input            /* Form input */
.glass-search-bar       /* Search bar */
.glass-dropdown         /* Suggestion dropdown */

/* Layout */
.glass-modal            /* Modal dialog */
.glass-navbar           /* Navigation bar */
.glass-bottom-action-bar /* Bottom floating bar */

/* Premium liquid glass */
.glass-liquid-premium   /* Ultra-premium glass effect */
.glass-card-premium     /* Premium card with animation */
```

### Utility Classes

```css
.gradient-text-green    /* Gradient text animation */
.hover-glow            /* Glow effect on hover */
.text-glass-light      /* Glass text with shadow */

/* Animations */
.animate-fade-in       /* Fade in animation */
.animate-slide-up      /* Slide up animation */
.animate-slide-in      /* Slide in animation */
.animate-shimmer       /* Shimmer animation */
```

## Theme System

The glass system is fully theme-aware and supports light/dark modes:

```jsx
// Set theme in HTML element
document.documentElement.setAttribute('data-theme', 'dark');

// Light theme provides clean, readable glass
// Dark theme unlocks premium liquid glass effects
```

## Mobile Optimization

- Reduced backdrop blur on devices < 768px (6px vs 8-16px)
- Responsive card sizing and spacing
- Touch-friendly button sizes (min 44px)
- Reduced motion support via `prefers-reduced-motion`

## Performance Tips

1. **Use `animated={false}`** on cards in large lists
2. **Lazy load** modal content
3. **Debounce** search input (300-500ms)
4. **Memoize** component lists with `React.memo`
5. **CSS transforms** for animations (uses GPU)

## Integration Examples

### Search Page with Filters

```jsx
import { GlassSearchBar, GlassCard, GlassButton } from '@/components/glass';

function SearchPage() {
  const [results, setResults] = useState([]);
  
  return (
    <>
      <GlassSearchBar 
        suggestions={suggestions}
        onSearch={handleSearch}
      />
      <div className="grid grid-cols-3 gap-6">
        {results.map(item => (
          <GlassCard key={item.id} variant="interactive">
            {item.content}
          </GlassCard>
        ))}
      </div>
    </>
  );
}
```

### Form with Validation

```jsx
import { GlassCard, GlassInput, GlassButton } from '@/components/glass';

function FormComponent() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  
  return (
    <GlassCard variant="elevated" className="p-8">
      <GlassInput
        type="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={error}
        helperText={error ? 'Invalid email' : ''}
      />
      <GlassButton className="mt-6">Submit</GlassButton>
    </GlassCard>
  );
}
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 15+
- iOS Safari 15+
- Chrome Android 90+

## Accessibility

- All components support keyboard navigation
- Proper ARIA labels on interactive elements
- Sufficient color contrast ratios
- Reduced motion support
- Screen reader friendly

## Contributing

When adding new glass components:

1. Follow the established component structure
2. Support both light and dark themes
3. Include mobile responsive design
4. Add Framer Motion animations
5. Document props and usage examples
6. Test keyboard navigation and screen readers
