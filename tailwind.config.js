/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'zetech-primary': '#1e40af',
        'zetech-secondary': '#f59e0b',
        'zetech-accent': '#3b82f6',
        'zetech-dark': '#0f172a',
        'zetech-light': '#f1f5f9'
      }
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          'primary': '#1e40af',      // Deep Blue
          'secondary': '#f59e0b',    // Amber
          'accent': '#3b82f6',       // Light Blue
          'neutral': '#0f172a',      // Dark Slate
          'base-100': '#ffffff',     // White
          'base-200': '#f1f5f9',     // Light Slate
          'base-300': '#e2e8f0',     // Slate
          'success': '#10b981',      // Emerald
          'warning': '#f59e0b',      // Amber
          'error': '#ef4444',        // Red
          'info': '#3b82f6',         // Blue
        }
      }
    ]
  },
  plugins: [
    require('daisyui'),
  ],
}

