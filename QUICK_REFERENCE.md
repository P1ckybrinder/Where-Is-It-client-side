# Glass Components Quick Reference

## Import

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

## Components at a Glance

### GlassCard
Premium card container

```jsx
<GlassCard 
  variant="elevated" 
  hover={true} 
  delay={0.1}
>
  Content
</GlassCard>
```
**Variants:** `default` | `elevated` | `interactive`

---

### GlassButton
Call-to-action button

```jsx
<GlassButton 
  variant="primary" 
  size="md" 
  loading={false}
  onClick={() => {}}
>
  Click
</GlassButton>
```
**Variants:** `primary` | `secondary` | `outline`  
**Sizes:** `sm` | `md` | `lg`

---

### GlassInput
Form input field

```jsx
<GlassInput 
  type="email"
  label="Email"
  placeholder="Enter email"
  error={false}
  helperText="Help text"
  onChange={(e) => {}}
/>
```

---

### GlassSearchBar
Search with autocomplete

```jsx
<GlassSearchBar
  placeholder="Search..."
  suggestions={['Option 1', 'Option 2']}
  onSearch={(value) => {}}
  onSuggestionClick={(suggestion) => {}}
  onClear={() => {}}
/>
```

---

### GlassModal
Premium dialog

```jsx
<GlassModal
  isOpen={true}
  onClose={() => {}}
  title="Modal Title"
  size="md"
  showCloseButton={true}
>
  Content
</GlassModal>
```
**Sizes:** `sm` | `md` | `lg` | `xl`

---

### GlassBottomActionBar
Floating action bar

```jsx
<GlassBottomActionBar
  visible={true}
  actions={[
    {
      label: 'Action',
      variant: 'primary',
      onClick: () => {},
      icon: <Icon />
    }
  ]}
/>
```
**Variants:** `primary` | `secondary`

---

### GlassNavbar
Navigation bar

```jsx
<GlassNavbar
  logo="/logo.png"
  brand="Brand Name"
  links={[
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' }
  ]}
  theme="light"
  onThemeToggle={() => {}}
  actions={<GlassButton>Sign In</GlassButton>}
/>
```

## Theme Setup

```jsx
// Set theme
document.documentElement.setAttribute('data-theme', 'dark');

// Save to localStorage
localStorage.setItem('theme', 'dark');

// Toggle theme
const toggleTheme = () => {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = current === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
};
```

## CSS Classes

### Card Classes
- `.glass-card-default` - Light glass effect
- `.glass-card-elevated` - Premium glass
- `.glass-card-interactive` - Clickable card
- `.glass-liquid-premium` - Ultra-premium

### Button Classes
- `.glass-button-primary` - Primary button
- `.glass-button-secondary` - Secondary button
- `.glass-button-outline` - Outline button

### Input Classes
- `.glass-input` - Form input
- `.glass-search-bar` - Search bar
- `.glass-dropdown` - Dropdown menu

### Layout Classes
- `.glass-modal` - Modal dialog
- `.glass-navbar` - Navigation bar
- `.glass-bottom-action-bar` - Bottom action bar

### Utility Classes
- `.gradient-text-green` - Gradient text
- `.hover-glow` - Glow on hover
- `.text-glass-light` - Glass text effect

### Animation Classes
- `.animate-fade-in` - Fade in
- `.animate-slide-up` - Slide up
- `.animate-slide-in` - Slide in
- `.animate-shimmer` - Shimmer effect

## Common Patterns

### Search Page
```jsx
<>
  <GlassSearchBar 
    onSearch={handleSearch}
    suggestions={suggestions}
  />
  <div className="grid gap-6">
    {results.map(item => (
      <GlassCard key={item.id}>
        {item.content}
      </GlassCard>
    ))}
  </div>
</>
```

### Form
```jsx
<GlassCard variant="elevated" className="p-8">
  <GlassInput label="Name" />
  <GlassInput type="email" label="Email" />
  <GlassButton className="mt-6">Submit</GlassButton>
</GlassCard>
```

### Modal Dialog
```jsx
<GlassModal 
  isOpen={open}
  onClose={() => setOpen(false)}
  title="Confirm"
>
  <p>Are you sure?</p>
  <div className="flex gap-4 mt-6">
    <GlassButton variant="outline">Cancel</GlassButton>
    <GlassButton variant="primary">Confirm</GlassButton>
  </div>
</GlassModal>
```

### Bottom Actions
```jsx
<GlassBottomActionBar
  visible={selected.length > 0}
  actions={[
    { 
      label: 'Delete', 
      variant: 'secondary',
      onClick: () => handleDelete(selected)
    },
    { 
      label: 'Archive', 
      variant: 'primary',
      onClick: () => handleArchive(selected)
    }
  ]}
/>
```

## Props Quick Reference

| Component | Prop | Type | Default |
|-----------|------|------|---------|
| GlassCard | variant | string | 'default' |
| GlassCard | hover | boolean | true |
| GlassCard | animated | boolean | true |
| GlassCard | delay | number | 0 |
| GlassButton | variant | string | 'primary' |
| GlassButton | size | string | 'md' |
| GlassButton | disabled | boolean | false |
| GlassButton | loading | boolean | false |
| GlassInput | type | string | 'text' |
| GlassInput | error | boolean | false |
| GlassModal | isOpen | boolean | false |
| GlassModal | size | string | 'md' |
| GlassNavbar | theme | string | 'light' |

## Mobile Optimization

```jsx
// Use animated={false} for large lists
<GlassCard animated={false}>Content</GlassCard>

// Adjust spacing for mobile
<GlassCard className="p-4 md:p-8">Content</GlassCard>

// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {items.map(item => <GlassCard key={item.id}>{item}</GlassCard>)}
</div>
```

## Accessibility

All components support:
- ✅ Keyboard navigation
- ✅ Screen readers
- ✅ Focus indicators
- ✅ ARIA labels
- ✅ Reduced motion

```jsx
// Example with ARIA
<GlassButton aria-label="Close modal">×</GlassButton>

// Keyboard events
<GlassInput 
  onKeyPress={(e) => {
    if (e.key === 'Enter') handleSubmit();
  }}
/>
```

## Performance Tips

1. **Disable animations for lists**
   ```jsx
   <GlassCard animated={false} />
   ```

2. **Memoize components**
   ```jsx
   import { memo } from 'react';
   const MemoCard = memo(GlassCard);
   ```

3. **Debounce search**
   ```jsx
   const [debouncedSearch, setDebouncedSearch] = useState('');
   useEffect(() => {
     const timer = setTimeout(() => {
       setDebouncedSearch(search);
     }, 300);
     return () => clearTimeout(timer);
   }, [search]);
   ```

4. **Use key for lists**
   ```jsx
   {items.map((item, idx) => (
     <GlassCard key={item.id} delay={idx * 0.05} />
   ))}
   ```

## Customization

### Colors
Edit in `tailwind.config.ts`:
```js
colors: {
  'zetech-primary': '#10b981',
  'zetech-secondary': '#059669',
  'zetech-accent': '#6ee7b7',
}
```

### Spacing
Use Tailwind classes:
```jsx
<GlassCard className="p-4 md:p-8 lg:p-12">
```

### Animations
Modify `src/index.css`:
```css
@keyframes glassFloat {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 15+
- Edge 90+
- iOS Safari 15+

## Documentation

- **Full Docs:** `GLASS_COMPONENTS_DOCS.md`
- **Integration Guide:** `INTEGRATION_GUIDE.md`
- **README:** `GLASS_README.md`
- **Summary:** `IMPLEMENTATION_SUMMARY.md`

## Examples in Codebase

- Reviews.jsx - GlassCard carousel
- ItemsCard.jsx - Interactive cards
- AllItems.jsx - Search & filtering
- Newsletter.jsx - Form subscription
- Navbar.jsx - Navigation & menu

## Need Help?

1. Check `GLASS_COMPONENTS_DOCS.md`
2. Review `INTEGRATION_GUIDE.md`
3. Study existing components
4. Test in browser DevTools
5. Check console for errors

---

**Happy building with glass! 🎨✨**
