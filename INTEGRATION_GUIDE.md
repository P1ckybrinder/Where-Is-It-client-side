# Glass Design System Integration Guide

## Quick Start

### 1. Import Components

```jsx
import { 
  GlassCard, 
  GlassButton, 
  GlassInput, 
  GlassSearchBar, 
  GlassModal, 
  GlassBottomActionBar,
  GlassNavbar 
} from '@/components/glass';
```

### 2. Theme Setup

The glass system automatically detects the theme from `data-theme` attribute on the HTML element:

```jsx
// Toggle theme
const toggleTheme = () => {
  const newTheme = theme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
};
```

### 3. Basic Example

```jsx
import { GlassCard, GlassButton, GlassInput } from '@/components/glass';

export function MyComponent() {
  const [email, setEmail] = useState('');
  
  return (
    <GlassCard variant="elevated" className="p-8">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
      
      <GlassInput
        type="email"
        placeholder="Enter your email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-6"
      />
      
      <GlassButton 
        variant="primary"
        size="lg"
        onClick={() => console.log('Submitted:', email)}
      >
        Submit
      </GlassButton>
    </GlassCard>
  );
}
```

## Implementation Patterns

### Search Interface Pattern

```jsx
import { GlassSearchBar, GlassCard } from '@/components/glass';
import ItemsCard from './ItemsCard';

function SearchPage() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  
  const suggestions = ['iPhone', 'Wallet', 'Keys', 'Glasses'];

  return (
    <div>
      {/* Search Bar */}
      <GlassSearchBar
        placeholder="Search for lost items..."
        suggestions={suggestions}
        onSearch={(value) => {
          setSearch(value);
          // Fetch results
        }}
        onSuggestionClick={(suggestion) => setSearch(suggestion)}
      />

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {results.map((item, idx) => (
          <ItemsCard key={item.id} item={item} delay={idx * 0.05} />
        ))}
      </div>
    </div>
  );
}
```

### Modal Dialog Pattern

```jsx
import { GlassModal, GlassButton, GlassInput } from '@/components/glass';

function ConfirmationDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');

  return (
    <>
      <GlassButton onClick={() => setIsOpen(true)}>
        Open Dialog
      </GlassButton>

      <GlassModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Confirm Action"
        size="md"
      >
        <p className="mb-6">Are you sure you want to proceed?</p>
        
        <GlassInput
          placeholder="Type 'confirm' to proceed"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="mb-6"
        />

        <div className="flex gap-4">
          <GlassButton 
            variant="outline"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </GlassButton>
          <GlassButton 
            variant="primary"
            onClick={() => {
              if (input === 'confirm') {
                // Handle action
                setIsOpen(false);
              }
            }}
          >
            Confirm
          </GlassButton>
        </div>
      </GlassModal>
    </>
  );
}
```

### Bottom Action Bar Pattern

```jsx
import { GlassBottomActionBar } from '@/components/glass';
import { FaCheck, FaTrash } from 'react-icons/fa';

function ItemSelection() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [showActions, setShowActions] = useState(false);

  return (
    <>
      {/* Item list... */}

      <GlassBottomActionBar
        visible={selectedItems.length > 0}
        actions={[
          {
            label: `Delete (${selectedItems.length})`,
            variant: 'secondary',
            icon: <FaTrash />,
            onClick: () => handleDelete(selectedItems)
          },
          {
            label: 'Archive',
            variant: 'primary',
            icon: <FaCheck />,
            onClick: () => handleArchive(selectedItems)
          }
        ]}
      />
    </>
  );
}
```

### Form with Validation Pattern

```jsx
import { GlassCard, GlassInput, GlassButton } from '@/components/glass';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email.includes('@')) newErrors.email = 'Invalid email';
    if (formData.password.length < 8) newErrors.password = 'Password too short';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Submit form
    }
  };

  return (
    <GlassCard variant="elevated" className="max-w-md p-8">
      <h2 className="text-2xl font-bold mb-8">Register</h2>

      <GlassInput
        label="Full Name"
        placeholder="John Doe"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        error={!!errors.name}
        helperText={errors.name}
        className="mb-4"
      />

      <GlassInput
        type="email"
        label="Email"
        placeholder="john@example.com"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        error={!!errors.email}
        helperText={errors.email}
        className="mb-4"
      />

      <GlassInput
        type="password"
        label="Password"
        placeholder="••••••••"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        error={!!errors.password}
        helperText={errors.password}
        className="mb-8"
      />

      <GlassButton 
        variant="primary" 
        size="lg" 
        onClick={handleSubmit}
        className="w-full"
      >
        Register
      </GlassButton>
    </GlassCard>
  );
}
```

### Navigation with Responsive Menu

```jsx
import { GlassNavbar, GlassButton } from '@/components/glass';
import { FaUser } from 'react-icons/fa';

function Header() {
  const [theme, setTheme] = useState('light');

  return (
    <GlassNavbar
      logo="/logo.png"
      brand="ZeTech Lost & Found"
      links={[
        { href: '/', label: 'Home' },
        { href: '/items', label: 'Items' },
        { href: '/about', label: 'About' }
      ]}
      theme={theme}
      onThemeToggle={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      actions={
        <>
          <GlassButton 
            variant="outline" 
            size="sm"
            icon={<FaUser />}
          >
            Profile
          </GlassButton>
          <GlassButton 
            variant="primary" 
            size="sm"
          >
            Sign In
          </GlassButton>
        </>
      }
    />
  );
}
```

## Performance Optimization

### 1. Lazy Loading Cards

```jsx
// For large lists, disable animation to improve performance
<GlassCard 
  variant="default" 
  animated={false}  // Skip animation for list items
>
  Content
</GlassCard>
```

### 2. Memoized Components

```jsx
import { memo } from 'react';

const MemoizedCard = memo(({ item }) => (
  <GlassCard variant="interactive">
    {item.content}
  </GlassCard>
));
```

### 3. Debounced Search

```jsx
import { useEffect, useState } from 'react';

function SearchComponent() {
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300); // Wait 300ms before updating
    
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <GlassSearchBar 
      onSearch={setSearch}
    />
  );
}
```

## Dark Mode Examples

### Light Theme (Default)
- Clean, bright glass effect
- White/transparent backgrounds
- High contrast text
- Subtle shadows

### Dark Theme (Premium)
- Deep, rich glass effect
- Midnight/transparent backgrounds
- Gradient accents
- Glow effects

Switch themes automatically via:
```jsx
document.documentElement.setAttribute('data-theme', 'dark');
```

## Mobile Considerations

- Reduced blur on small screens (6px)
- Touch-friendly button sizes (minimum 44px)
- Full-width forms on mobile
- Responsive text sizing
- Hidden horizontal menus on mobile

## Accessibility Features

- ✅ Keyboard navigation support
- ✅ Screen reader friendly
- ✅ ARIA labels on interactive elements
- ✅ Sufficient color contrast (WCAG AA)
- ✅ Reduced motion support
- ✅ Focus indicators visible

## Browser Support

| Browser | Minimum Version |
|---------|-----------------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 15+ |
| Edge | 90+ |
| iOS Safari | 15+ |

## Troubleshooting

### Component not styling correctly
- Check if `data-theme` attribute is set on `<html>`
- Verify Tailwind CSS is imported in index.css
- Clear browser cache

### Backdrop blur not working
- Some older browsers don't support `backdrop-filter`
- Components gracefully degrade with opacity fallback
- Check browser compatibility

### Animations not smooth
- Reduce animation complexity on large lists
- Use `animated={false}` for list items
- Check device performance

## Support & Issues

For component issues or feature requests:
1. Check documentation first
2. Review existing components for patterns
3. Create a minimal reproduction
4. Submit detailed issue report

## Next Steps

1. **Integrate into all pages** - Gradually update components
2. **Customize theme colors** - Adjust in `tailwind.config.ts`
3. **Add custom components** - Follow established patterns
4. **Monitor performance** - Use browser DevTools
5. **Test accessibility** - Use screen reader and keyboard navigation
