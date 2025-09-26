module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: "#1a1a2e", // Deep professional foundation
        secondary: "#16213e", // Sophisticated depth
        accent: "#2563eb", // Strategic focus blue
        
        // Background Colors
        background: "#fafafa", // Clean content canvas - gray-50
        surface: "#ffffff", // Content elevation - white
        
        // Text Colors
        'text-primary': "#1f2937", // Professional clarity - gray-800
        'text-secondary': "#6b7280", // Hierarchy support - gray-500
        
        // Status Colors
        success: "#059669", // Achievement recognition - emerald-600
        warning: "#d97706", // Professional caution - amber-600
        error: "#dc2626", // Problem indication - red-600
        
        // Border Colors
        'border-light': "#e5e7eb", // Subtle divisions - gray-200
        'border-medium': "#d1d5db", // Clear boundaries - gray-300
        
        // Extended Blue Palette for Accent Variations
        blue: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#2563eb", // Primary accent
          600: "#1d4ed8",
          700: "#1e40af",
          800: "#1e3a8a",
          900: "#1e3a8a"
        },
        
        // Extended Gray Palette
        gray: {
          50: "#fafafa", // Background
          100: "#f5f5f5",
          200: "#e5e7eb", // Border light
          300: "#d1d5db", // Border medium
          400: "#9ca3af",
          500: "#6b7280", // Text secondary
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937", // Text primary
          900: "#111827"
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        inter: ['Inter', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'monospace']
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }]
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700'
      },
      boxShadow: {
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'modal': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'glow': '0 0 20px rgba(37, 99, 235, 0.3)'
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '500': '500ms'
      },
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)'
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem'
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem'
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100'
      }
    }
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.transition-fast': {
          transition: 'all 200ms ease-in-out'
        },
        '.transition-smooth': {
          transition: 'all 300ms ease-in-out'
        },
        '.text-balance': {
          'text-wrap': 'balance'
        }
      }
      addUtilities(newUtilities)
    }
  ]
}